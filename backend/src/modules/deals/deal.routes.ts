import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { DealService } from './deal.service'
import type { EventBus } from '../../core/event-bus'
import { db } from '../../core/database'
import { authenticate } from '../../core/auth/auth.service'
import { requireRole } from '../../core/auth/require-role'

const createDealSchema = z.object({
  title:             z.string().min(1).max(200),
  value:             z.number().positive().optional(),
  currency:          z.string().length(3).default('USD'),
  probability:       z.number().min(0).max(100).optional(),
  pipelineId:        z.string(),
  stageId:           z.string(),
  companyId:         z.string().optional(),
  ownerId:           z.string().optional(),
  contactIds:        z.array(z.string()).optional(),
  expectedCloseDate: z.coerce.date().optional(),
  customData:        z.record(z.unknown()).optional(),
})

const moveDealSchema = z.object({
  stageId:  z.string(),
  position: z.number().int().min(0).optional(),
})

const filtersSchema = z.object({
  pipelineId: z.string().optional(),
  stageId:    z.string().optional(),
  status:     z.string().optional(),
  ownerId:    z.string().optional(),
  companyId:  z.string().optional(),
  page:       z.coerce.number().min(0).default(0),
  limit:      z.coerce.number().min(1).max(100).default(25),
})

function buildContactName(contact: { firstName: string; lastName?: string | null }) {
  return `${contact.firstName}${contact.lastName ? ` ${contact.lastName}` : ''}`
}

export async function dealRoutes(
  app: FastifyInstance,
  options: { eventBus: EventBus }
) {
  const service = new DealService(options.eventBus)

  app.addHook('onRequest', async (req) => {
    await authenticate(req)
  })

  // ─── GET /deals ────────────────────────────────────────────────
  app.get('/', async (req, reply) => {
    const ctx = req.user as { workspaceId: string }
    const filters = filtersSchema.parse(req.query)
    return reply.send(await service.search(ctx.workspaceId, filters))
  })

  // ─── GET /deals/kanban/:pipelineId ─────────────────────────────
  // El endpoint más importante — devuelve el tablero completo
  app.get<{ Params: { pipelineId: string } }>(
    '/kanban/:pipelineId',
    async (req, reply) => {
      const ctx = req.user as { workspaceId: string }
      const board = await service.getKanban(
        ctx.workspaceId,
        req.params.pipelineId
      )

      const contactIds = [...new Set(
        board.columns.flatMap((column) =>
          column.deals.flatMap((deal) => deal.contactIds)
        )
      )]

      if (contactIds.length === 0) {
        return reply.send(board)
      }

      const contacts = await db.contact.findMany({
        where: {
          workspaceId: ctx.workspaceId,
          id: { in: contactIds },
          isArchived: false,
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          phone: true,
          avatar: true,
          status: true,
          whatsappChats: {
            where: {
              isGroup: false,
              messages: {
                some: {},
              },
            },
            orderBy: [{ lastMessageAt: 'desc' }, { updatedAt: 'desc' }],
            take: 1,
            select: {
              jid: true,
              displayName: true,
              phoneNumber: true,
              unreadCount: true,
              lastMessageAt: true,
              lastMessagePreview: true,
              lastMessageFromMe: true,
            },
          },
        },
      })

      const contactsById = new Map(
        contacts.map((contact) => [
          contact.id,
          {
            id: contact.id,
            name: buildContactName(contact),
            phone: contact.phone,
            avatar: contact.avatar,
            status: contact.status,
            latestChat: contact.whatsappChats[0] ?? null,
          },
        ])
      )

      const enrichedBoard = {
        ...board,
        columns: board.columns.map((column) => ({
          ...column,
          deals: column.deals.map((deal) => {
            const primaryContact = deal.contactIds
              .map((contactId) => contactsById.get(contactId))
              .find(Boolean) ?? null

            return {
              ...deal,
              primaryContact: primaryContact
                ? {
                    id: primaryContact.id,
                    name: primaryContact.name,
                    phone: primaryContact.phone,
                    avatar: primaryContact.avatar,
                    status: primaryContact.status,
                  }
                : null,
              latestChat: primaryContact?.latestChat ?? null,
            }
          }),
        })),
      }

      return reply.send(enrichedBoard)
    }
  )

  // ─── POST /deals ───────────────────────────────────────────────
  app.post('/', { preHandler: requireRole('owner', 'admin', 'member') }, async (req, reply) => {
    const ctx = req.user as { workspaceId: string; userId: string }
    const body = createDealSchema.parse(req.body) as Parameters<typeof service.create>[1]
    const deal = await service.create(ctx.workspaceId, body, ctx.userId)
    return reply.status(201).send(deal)
  })

  // ─── GET /deals/:id ────────────────────────────────────────────
  app.get<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const ctx = req.user as { workspaceId: string }
    // findFirst con workspaceId para seguridad multi-tenant
    const deal = await service.search(ctx.workspaceId, {})
    return reply.send(deal)
  })

  // ─── PATCH /deals/:id ──────────────────────────────────────────
  // viewer no puede editar deals
  app.patch<{ Params: { id: string } }>('/:id', { preHandler: requireRole('owner', 'admin', 'member') }, async (req, reply) => {
    const ctx = req.user as { workspaceId: string; userId: string }
    const body = createDealSchema.partial().parse(req.body)
    return reply.send(
      await service.update(ctx.workspaceId, req.params.id, body, ctx.userId)
    )
  })

  // ─── PATCH /deals/:id/move ─────────────────────────────────────
  // Drag & drop — mover una tarjeta entre columnas
  app.patch<{ Params: { id: string } }>('/:id/move', async (req, reply) => {
    const ctx = req.user as { workspaceId: string; userId: string }
    const body = moveDealSchema.parse(req.body) as Parameters<typeof service.move>[2]
    const deal = await service.move(
      ctx.workspaceId,
      req.params.id,
      body,
      ctx.userId
    )
    return reply.send(deal)
  })

  // ─── DELETE /deals/:id ─────────────────────────────────────────
  // Solo owner y admin pueden borrar deals
  app.delete<{ Params: { id: string } }>('/:id', { preHandler: requireRole('owner', 'admin') }, async (req, reply) => {
    const ctx = req.user as { workspaceId: string; userId: string }
    await service.delete(ctx.workspaceId, req.params.id, ctx.userId)
    return reply.status(204).send()
  })
}
