import 'dotenv/config'
import Fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastifyCors from '@fastify/cors'
import fastifyRateLimit from '@fastify/rate-limit'
import fastifyCookie from '@fastify/cookie'
import { config } from './core/config'
import { verifyCsrfToken, CSRF_HEADER_NAME, CSRF_COOKIE_NAME } from './core/security/csrf-utils'
import { initSentry, Sentry } from './core/monitoring/sentry'
import { EventBus } from './core/event-bus'
import { AppError } from './types'

// Rutas
import { authRoutes, authCsrfRoutes } from './modules/workspaces/auth.routes'
import { contactRoutes } from './modules/contacts/contact.routes'
import { dealRoutes } from './modules/deals/deal.routes'
import { webhookRoutes } from './modules/webhooks/webhooks.routes'
import { inboundRoutes } from './modules/inbound/inbound.routes'
import { pipelineRoutes } from './modules/pipelines/pipeline.routes'
import { activityRoutes } from './modules/activities/activity.routes'
import { noteRoutes } from './modules/notes/note.routes'
import { dashboardRoutes } from './modules/dashboard/dashboard.routes'
import { whatsappRoutes } from './modules/whatsapp/whatsapp.routes'

export async function buildApp() {
  initSentry()
  // ─── Servidor ──────────────────────────────────────────────────
  const isServerless = process.env.VERCEL === '1'

  const app = Fastify({ 
    logger: { level: 'info' },
    bodyLimit: 1048576,
  })

  // ─── Rate Limiting Global ────────────────────────────────────────
  // En producción usamos Redis. En local se usa memoria para no tildar la app 
  // si el firewall/ISP local bloquea el puerto de Upstash.
  const isDev = process.env.NODE_ENV === 'development'
  const Redis = require('ioredis')
  
  const redisCache = (!isDev && config.REDIS_URL) 
    ? new Redis(config.REDIS_URL, {
        maxRetriesPerRequest: 1,
        enableOfflineQueue: false,
      })
    : undefined

  if (redisCache) {
    redisCache.on('error', (err: any) => app.log.warn(`Redis Error: ${err.message}`))
  }

  await app.register(fastifyRateLimit, {
    global: true,
    max: 300, // Máximo 300 peticiones globales 
    timeWindow: '1 minute', // por minuto
    keyGenerator: (req) => {
      // Limitar por usuario autenticado o por IP
      return (req.user as any)?.workspaceId ?? req.ip
    },
    ...(redisCache ? { redis: redisCache } : {}),
    errorResponseBuilder: function (request, context) {
      return {
        statusCode: 429,
        error: 'Too Many Requests',
        message: `Has superado el límite de ${context.max} peticiones. Espera un momento y vuelve a intentar.`,
      }
    }
  })

  // ─── Cookie plugin (requerido para httpOnly cookies) ──────────
  await app.register(fastifyCookie)

  // ─── Event Bus ─────────────────────────────────────────────────
  // Una sola instancia compartida por todos los módulos
  const eventBus = new EventBus(config.REDIS_URL)

  // ─── Plugins ───────────────────────────────────────────────────
  await app.register(fastifyCors, {
    origin: (origin, cb) => {
      if (!origin) return cb(null, true)

      const allowed = [
        config.FRONTEND_URL,
        'http://localhost:3001',
        'http://localhost:3000',
      ]

      // Permitir URL exacta o cualquier subdominio de vercel.app
      if (allowed.includes(origin) || origin.endsWith('.vercel.app')) {
        cb(null, true)
      } else {
        cb(new Error('Not allowed by CORS'), false)
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  })

  await app.register(fastifyJwt, {
    secret: config.JWT_SECRET,
  })

  // ─── Manejo global de errores ──────────────────────────────────
  // Todos los errores del sistema pasan por acá antes de
  // llegar al cliente — así la respuesta siempre tiene el
  // mismo formato sin importar dónde ocurrió el error
  app.setErrorHandler((error: any, req, reply) => {
    // Log del error completo para debugging
    req.log.error({ err: error }, 'Request error')

    // Reportar a Sentry solo errores inesperados 
    if (
      !(error instanceof AppError) &&
      error.name !== 'ZodError' &&
      !error.code?.startsWith('FST_JWT_')
    ) {
      Sentry.captureException(error)
    }

    // Error de validación de Zod
    if (error.name === 'ZodError') {
      return reply.status(422).send({
        error: 'VALIDATION_ERROR',
        issues: error.issues,
      })
    }

    // Errores conocidos de la aplicación
    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({
        error: error.code ?? 'ERROR',
        message: error.message,
      })
    }

    // Errores de JWT (todos los códigos FST_JWT_*)
    if (error.code?.startsWith('FST_JWT_')) {
      return reply.status(401).send({
        error: 'UNAUTHORIZED',
        message: error.message,
      })
    }

    // Error genérico
    return reply.status(500).send({
      error: 'INTERNAL_ERROR',
      message: 'Error interno del servidor',
    })
  })

  // ─── Rutas ─────────────────────────────────────────────────────
  const API = '/api/v1'

  await app.register(authRoutes, { prefix: `${API}/auth` })
  await app.register(authCsrfRoutes, { prefix: `${API}/auth` })

  // ─── Global CSRF Hook ─────────────────────────────────────────
  // Verifica CSRF en todas las rutas que modifican estado
  app.addHook('onRequest', async (req, reply) => {
    const csrfMethods = ['POST', 'PUT', 'PATCH', 'DELETE']
    
    if (csrfMethods.includes(req.method)) {
      const isPublicRoute = 
        req.url.includes('/auth/login') ||
        req.url.includes('/auth/register') ||
        req.url.includes('/auth/forgot-password') ||
        req.url.includes('/auth/reset-password') ||
        req.url.includes('/health') ||
        req.url.includes('/csrf-token')
      
      if (!isPublicRoute) {
        const token = req.headers[CSRF_HEADER_NAME] as string | undefined
        
        if (!token) {
          return reply.status(403).send({
            error: 'CSRF_ERROR',
            message: 'Token CSRF requerido. Refrescá la página e intentá de nuevo.',
          })
        }
        
        try {
          const isValid = verifyCsrfToken(config.JWT_SECRET, token)
          if (!isValid) {
            return reply.status(403).send({
              error: 'CSRF_ERROR',
              message: 'Token CSRF inválido. Refrescá la página e intentá de nuevo.',
            })
          }
        } catch {
          return reply.status(403).send({
            error: 'CSRF_ERROR',
            message: 'Token CSRF inválido. Refrescá la página e intentá de nuevo.',
          })
        }
      }
    }
  })
  await app.register(contactRoutes, { prefix: `${API}/contacts`, eventBus })
  await app.register(dealRoutes, { prefix: `${API}/deals`, eventBus })
  await app.register(webhookRoutes, { prefix: `${API}/webhooks` })
  await app.register(inboundRoutes, { prefix: `${API}/inbound`, eventBus })
  await app.register(pipelineRoutes, { prefix: `${API}/pipelines` })
  await app.register(activityRoutes, { prefix: `${API}/activities` })
  await app.register(noteRoutes, { prefix: `${API}/notes` })
  await app.register(dashboardRoutes, { prefix: `${API}/dashboard` })
  await app.register(whatsappRoutes, { prefix: `${API}/whatsapp` })

  // Health check — para verificar que el servidor está vivo
  app.get('/health', async () => ({
    status: 'ok',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  }))

  return app
}
