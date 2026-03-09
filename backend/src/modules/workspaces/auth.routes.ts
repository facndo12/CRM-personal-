import type { FastifyInstance } from 'fastify'
import { db } from '../../core/database'
import { z } from 'zod'
import { AuthService } from '../../core/auth/auth.service'

const authService = new AuthService()

export async function authRoutes(app: FastifyInstance) {

  // ─── POST /auth/register ───────────────────────────────────────
  // Crea usuario + workspace + pipeline por defecto
  app.post('/register', async (req, reply) => {
    const schema = z.object({
      email:         z.string().email(),
      password:      z.string().min(8),
      firstName:     z.string().min(1),
      lastName:      z.string().optional(),
      workspaceName: z.string().min(2).max(100),
    })

    const body = schema.parse(req.body)
    const { user, workspace } = await authService.register(body)

    // Generar JWT con los datos del usuario y workspace
    const token = app.jwt.sign({
      sub:         user.id,
      userId:      user.id,
      workspaceId: workspace.id,
      role:        'owner',
      type:        'access',
    }, { expiresIn: '7d' })

    return reply.status(201).send({
      user: {
        id:        user.id,
        email:     user.email,
        firstName: user.firstName,
      },
      workspace: {
        id:   workspace.id,
        name: workspace.name,
        slug: workspace.slug,
      },
      accessToken: token,
    })
  })

  // ─── POST /auth/login ──────────────────────────────────────────
  app.post('/login', async (req, reply) => {
    const schema = z.object({
      email:    z.string().email(),
      password: z.string(),
    })

    const body = schema.parse(req.body)
    const result = await authService.login(body.email, body.password)

    const token = app.jwt.sign({
      sub:         result.user.id,
      userId:      result.user.id,
      workspaceId: result.workspace.id,
      role:        result.role,
      type:        'access',
    }, { expiresIn: '7d' })

    return reply.send({
      user:        result.user,
      workspace:   result.workspace,
      role:        result.role,
      accessToken: token,
    })
  })

  // ─── GET /auth/me ──────────────────────────────────────────────
  // Verificar token y obtener datos del usuario actual
  app.get('/me', async (req, reply) => {
    await req.jwtVerify()
    const ctx = req.user as {
      sub: string
      workspaceId: string
      role: string
    }
    return reply.send({
      userId:      ctx.sub,
      workspaceId: ctx.workspaceId,
      role:        ctx.role,
    })
  })

  // ─── POST /auth/api-keys ───────────────────────────────────────
  // Crear una API Key para conectar n8n
  app.post('/api-keys', async (req, reply) => {
    await req.jwtVerify()
    const ctx = req.user as { workspaceId: string }

    const { name } = z.object({
      name: z.string().min(1).max(100)
    }).parse(req.body)

    const { apiKey, rawKey } = await authService.createApiKey(
      ctx.workspaceId,
      name
    )

    return reply.status(201).send({
      id:        apiKey.id,
      name:      apiKey.name,
      prefix:    apiKey.keyPrefix,
      rawKey,    // ⚠️ Solo se muestra una vez — igual que GitHub tokens
      createdAt: apiKey.createdAt,
    })
  })

  // ─── GET /auth/api-keys ────────────────────────────────────────
  // Listar API Keys del workspace (sin mostrar las claves)
  app.get('/api-keys', async (req, reply) => {
    await req.jwtVerify()
    const ctx = req.user as { workspaceId: string }

    const { db } = await import('../../core/database')
    const keys = await db.apiKey.findMany({
      where: { workspaceId: ctx.workspaceId, isActive: true },
      orderBy: { createdAt: 'desc' },
    })

    return reply.send(
      keys.map(({ keyHash: _h, ...k }) => k)
    )
  })

  app.delete('/api-keys/:id', async (req, reply) => {
    await req.jwtVerify()
    const ctx = req.user as { workspaceId: string; userId: string }
    const { id } = req.params as { id: string }

    await db.apiKey.deleteMany({
      where: { id, workspaceId: ctx.workspaceId },
    })

    return reply.code(204).send()
  })
}