import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { config } from '../../core/config'
import { authenticate } from '../../core/auth/auth.service'
import type { EventBus } from '../../core/event-bus'
import { InboxService } from './inbox.service'
import { MetaWebhookAdapter } from './meta.adapter'

export async function inboxRoutes(
  app: FastifyInstance,
  options: { eventBus: EventBus }
) {
  const service = new InboxService(options.eventBus)
  const metaAdapter = new MetaWebhookAdapter(config.META_WEBHOOK_VERIFY_TOKEN)

  // Webhook publico para Meta. No lleva auth del CRM.
  app.get('/meta/webhook', async (req, reply) => {
    const result = await metaAdapter.verifyWebhook({
      headers: req.headers,
      query: req.query as Record<string, unknown>,
      body: null,
    })

    if (!result.ok || !result.challenge) {
      return reply.status(403).send({ error: 'WEBHOOK_VERIFICATION_FAILED' })
    }

    return reply.type('text/plain').send(result.challenge)
  })

  app.post('/meta/webhook', async (req, reply) => {
    const messages = await metaAdapter.parseInbound({
      headers: req.headers,
      query: req.query as Record<string, unknown>,
      body: req.body,
    })

    const results = await Promise.all(
      messages.map((message) => service.ingestInboundMessage(message))
    )

    return reply.send({
      received: true,
      processed: results.filter((result) => result.status === 'created').length,
      duplicates: results.filter((result) => result.status === 'duplicate').length,
      ignored: results.filter((result) => result.status === 'ignored').length,
    })
  })

  app.register(async function privateInboxRoutes(privateApp) {
    privateApp.addHook('onRequest', async (req) => {
      await authenticate(req)
    })

    privateApp.get('/conversations', async (req, reply) => {
      const ctx = req.user as { workspaceId: string }
      const filters = z.object({
        channel: z.enum(['whatsapp', 'instagram', 'messenger', 'tiktok']).optional(),
        status: z.string().optional(),
        page: z.coerce.number().min(0).default(0),
        limit: z.coerce.number().min(1).max(100).default(25),
      }).parse(req.query)

      const conversations = await service.listConversations(ctx.workspaceId, filters)
      return reply.send(conversations)
    })

    privateApp.get<{ Params: { id: string } }>('/conversations/:id/messages', async (req, reply) => {
      const ctx = req.user as { workspaceId: string }
      const filters = z.object({
        page: z.coerce.number().min(0).default(0),
        limit: z.coerce.number().min(1).max(100).default(50),
      }).parse(req.query)

      const messages = await service.listMessages(ctx.workspaceId, req.params.id, filters)
      return reply.send(messages)
    })
  })
}
