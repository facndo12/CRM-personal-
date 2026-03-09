import type { FastifyInstance } from 'fastify'
import { db } from '../../core/database'
import { authenticate } from '../../core/auth/auth.service'

export async function pipelineRoutes(app: FastifyInstance) {

  app.addHook('onRequest', async (req) => {
    await authenticate(req)
  })

  app.get('/', async (req, reply) => {
    const ctx = req.user as { workspaceId: string }

    const pipelines = await db.pipeline.findMany({
      where: { workspaceId: ctx.workspaceId },
      include: { stages: { orderBy: { position: 'asc' } } },
      orderBy: { createdAt: 'asc' },
    })

    return reply.send(pipelines)
  })
}