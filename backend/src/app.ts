import 'dotenv/config'
import Fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastifyCors from '@fastify/cors'
import { config } from './core/config'
import { EventBus } from './core/event-bus'
import { AppError } from './types'

// Rutas
import { authRoutes }    from './modules/workspaces/auth.routes'
import { contactRoutes } from './modules/contacts/contact.routes'
import { dealRoutes }    from './modules/deals/deal.routes'
import { webhookRoutes } from './modules/webhooks/webhooks.routes'
import { inboundRoutes } from './modules/inbound/inbound.routes'
import { pipelineRoutes } from './modules/pipelines/pipeline.routes'
import { activityRoutes } from './modules/activities/activity.routes'
import { noteRoutes }     from './modules/notes/note.routes'
import { dashboardRoutes } from './modules/dashboard/dashboard.routes'

async function bootstrap() {
  // ─── Servidor ──────────────────────────────────────────────────
  const app = Fastify({
    logger: {
      level: config.NODE_ENV === 'production' ? 'info' : 'debug',
      ...(config.NODE_ENV === 'development' && {
        transport: {
          target: 'pino-pretty',
          options: { colorize: true },
        },
      }),
    },
  })

  // ─── Event Bus ─────────────────────────────────────────────────
  // Una sola instancia compartida por todos los módulos
  const eventBus = new EventBus(config.REDIS_URL)

  // ─── Plugins ───────────────────────────────────────────────────
  await app.register(fastifyCors, {
    origin: (origin, cb) => {
      const allowed = [
        config.FRONTEND_URL,
        'http://localhost:3001',
        'http://localhost:3000',
      ]
      // Permitir requests sin origin (curl, Postman, mobile apps)
      if (!origin || allowed.includes(origin)) {
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
    // Error de validación de Zod
    if (error.name === 'ZodError') {
      return reply.status(422).send({
        error:  'VALIDATION_ERROR',
        issues: error.issues,
      })
    }

    // Errores conocidos de la aplicación
    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({
        error:   error.code ?? 'ERROR',
        message: error.message,
      })
    }

    // Errores de JWT
    if (
      error.code === 'FST_JWT_NO_AUTHORIZATION_IN_HEADER' ||
      error.code === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED'
    ) {
      return reply.status(401).send({
        error:   'UNAUTHORIZED',
        message: error.message,
      })
    }

    // Error genérico
    req.log.error(error instanceof Error ? error.message : String(error))
    return reply.status(500).send({
      error:   'INTERNAL_ERROR',
      message: 'Error interno del servidor',
    })
  })

  // ─── Rutas ─────────────────────────────────────────────────────
  const API = '/api/v1'

  await app.register(authRoutes,    { prefix: `${API}/auth`     })
  await app.register(contactRoutes, { prefix: `${API}/contacts`, eventBus })
  await app.register(dealRoutes,    { prefix: `${API}/deals`,    eventBus })
  await app.register(webhookRoutes, { prefix: `${API}/webhooks`  })
  await app.register(inboundRoutes, { prefix: `${API}/inbound`,  eventBus })
  await app.register(pipelineRoutes, { prefix: `${API}/pipelines` })
  await app.register(activityRoutes, { prefix: `${API}/activities` })
  await app.register(noteRoutes,     { prefix: `${API}/notes`      })
  await app.register(dashboardRoutes, { prefix: `${API}/dashboard` })

  // Health check — para verificar que el servidor está vivo
  app.get('/health', async () => ({
    status:    'ok',
    version:   '1.0.0',
    timestamp: new Date().toISOString(),
  }))

  // ─── Iniciar ───────────────────────────────────────────────────
  try {
    await app.listen({ port: config.PORT, host: '0.0.0.0' })
    app.log.info(`🚀 CRM corriendo en http://localhost:${config.PORT}`)
    app.log.info(`📡 Webhooks y n8n listos`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }

  // Apagado limpio — cerrar conexiones antes de salir
  const shutdown = async () => {
    await app.close()
    await eventBus.close()
    process.exit(0)
  }

  process.on('SIGINT',  shutdown)
  process.on('SIGTERM', shutdown)
}

bootstrap()