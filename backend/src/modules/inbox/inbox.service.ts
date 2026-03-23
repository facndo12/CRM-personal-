import { Prisma } from '@prisma/client'
import { db } from '../../core/database'
import { EventBus } from '../../core/event-bus'
import { NotFoundError, paginate, type PaginatedResult, type PaginationQuery } from '../../types'
import type { NormalizedInboundMessage } from './types'

const inboxDb = db as any

export interface ConversationFilters extends PaginationQuery {
  channel?: string
  status?: string
}

export interface IngestResult {
  status: 'created' | 'duplicate' | 'ignored'
  reason?: string
  workspaceId?: string
  conversationId?: string
  messageId?: string
}

export class InboxService {
  constructor(private readonly eventBus: EventBus) {}

  async ingestInboundMessage(message: NormalizedInboundMessage): Promise<IngestResult> {
    if (!message.externalAccountId || !message.externalUserId) {
      return { status: 'ignored', reason: 'missing_external_ids' }
    }

    const connection = await inboxDb.channelConnection.findFirst({
      where: {
        provider: message.provider,
        channel: message.channel,
        externalAccountId: message.externalAccountId,
      },
    })

    if (!connection) {
      return { status: 'ignored', reason: 'connection_not_found' }
    }

    if (message.providerMessageId) {
      const existing = await inboxDb.message.findUnique({
        where: { providerMessageId: message.providerMessageId },
      })

      if (existing) {
        return {
          status: 'duplicate',
          workspaceId: existing.workspaceId,
          conversationId: existing.conversationId,
          messageId: existing.id,
        }
      }
    }

    const result = await inboxDb.$transaction(async (tx: any) => {
      const identity = await this.ensureIdentity(tx, connection.workspaceId, message)

      const conversation = await tx.conversation.upsert({
        where: {
          connectionId_contactId: {
            connectionId: connection.id,
            contactId: identity.contactId,
          },
        },
        update: {
          provider: message.provider,
          channel: message.channel,
          externalThreadId: message.externalThreadId,
          externalUserId: message.externalUserId,
          lastInboundAt: message.occurredAt,
          lastMessageAt: message.occurredAt,
          unreadCount: { increment: 1 },
          status: 'open',
          inboxState: 'active',
        },
        create: {
          workspaceId: connection.workspaceId,
          connectionId: connection.id,
          contactId: identity.contactId,
          provider: message.provider,
          channel: message.channel,
          externalThreadId: message.externalThreadId,
          externalUserId: message.externalUserId,
          lastInboundAt: message.occurredAt,
          lastMessageAt: message.occurredAt,
          unreadCount: 1,
          status: 'open',
          inboxState: 'active',
        },
      })

      const createdMessage = await tx.message.create({
        data: {
          workspaceId: connection.workspaceId,
          conversationId: conversation.id,
          contactId: identity.contactId,
          provider: message.provider,
          channel: message.channel,
          direction: 'inbound',
          type: message.type,
          status: 'received',
          providerMessageId: message.providerMessageId,
          providerReplyToId: message.providerReplyToId,
          text: message.text,
          rawPayload: (message.rawPayload ?? null) as Prisma.InputJsonValue,
          metadata: (message.metadata ?? {}) as Prisma.InputJsonValue,
          sentAt: message.occurredAt,
        },
      })

      if (message.attachments?.length) {
        await tx.messageAttachment.createMany({
          data: message.attachments.map((attachment) => ({
            messageId: createdMessage.id,
            type: attachment.type,
            mimeType: attachment.mimeType,
            url: attachment.url,
            externalAssetId: attachment.externalAssetId,
            fileName: attachment.fileName,
            sizeBytes: attachment.sizeBytes,
            metadata: (attachment.metadata ?? {}) as Prisma.InputJsonValue,
          })),
        })
      }

      return {
        workspaceId: connection.workspaceId,
        conversationId: conversation.id,
        messageId: createdMessage.id,
        contactId: identity.contactId,
      }
    })

    await this.eventBus.emit('message.received', {
      workspaceId: result.workspaceId,
      channel: message.channel,
      provider: message.provider,
      contactId: result.contactId,
      conversationId: result.conversationId,
      messageId: result.messageId,
    })

    return {
      status: 'created',
      workspaceId: result.workspaceId,
      conversationId: result.conversationId,
      messageId: result.messageId,
    }
  }

  async listConversations(
    workspaceId: string,
    filters: ConversationFilters
  ): Promise<PaginatedResult<unknown>> {
    const page = filters.page ?? 0
    const limit = Math.min(filters.limit ?? 25, 100)

    const where = {
      workspaceId,
      ...(filters.channel && { channel: filters.channel }),
      ...(filters.status && { status: filters.status }),
    }

    const [items, total] = await Promise.all([
      inboxDb.conversation.findMany({
        where,
        take: limit,
        skip: page * limit,
        orderBy: [
          { lastMessageAt: 'desc' },
          { updatedAt: 'desc' },
        ],
        include: {
          contact: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              phone: true,
            },
          },
          connection: {
            select: {
              id: true,
              name: true,
              channel: true,
              status: true,
              externalAccountId: true,
              externalAccountLabel: true,
            },
          },
        },
      }),
      inboxDb.conversation.count({ where }),
    ])

    return paginate(items, total, page, limit)
  }

  async listMessages(
    workspaceId: string,
    conversationId: string,
    filters: PaginationQuery
  ): Promise<PaginatedResult<unknown>> {
    const page = filters.page ?? 0
    const limit = Math.min(filters.limit ?? 50, 100)

    const conversation = await inboxDb.conversation.findFirst({
      where: { id: conversationId, workspaceId },
      select: { id: true },
    })

    if (!conversation) {
      throw new NotFoundError('Conversation', conversationId)
    }

    const where = {
      workspaceId,
      conversationId,
    }

    const [items, total] = await Promise.all([
      inboxDb.message.findMany({
        where,
        take: limit,
        skip: page * limit,
        orderBy: [
          { sentAt: 'asc' },
          { createdAt: 'asc' },
        ],
        include: {
          attachments: true,
          deliveries: {
            orderBy: { createdAt: 'asc' },
          },
        },
      }),
      inboxDb.message.count({ where }),
    ])

    return paginate(items, total, page, limit)
  }

  private async ensureIdentity(
    tx: any,
    workspaceId: string,
    message: NormalizedInboundMessage
  ) {
    const existing = await tx.contactIdentity.findUnique({
      where: {
        workspaceId_channel_externalUserId: {
          workspaceId,
          channel: message.channel,
          externalUserId: message.externalUserId,
        },
      },
    })

    if (existing) {
      return existing
    }

    const displayName = this.extractDisplayName(message)

    try {
      const contact = await tx.contact.create({
        data: {
          workspaceId,
          firstName: displayName.slice(0, 100),
          source: message.channel.toUpperCase(),
          tags: [],
          customData: {},
        },
      })

      return await tx.contactIdentity.create({
        data: {
          workspaceId,
          contactId: contact.id,
          provider: message.provider,
          channel: message.channel,
          externalUserId: message.externalUserId,
          externalUsername: this.extractUsername(message),
          externalDisplayName: displayName,
          metadata: (message.metadata ?? {}) as Prisma.InputJsonValue,
        },
      })
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        return tx.contactIdentity.findUniqueOrThrow({
          where: {
            workspaceId_channel_externalUserId: {
              workspaceId,
              channel: message.channel,
              externalUserId: message.externalUserId,
            },
          },
        })
      }

      throw error
    }
  }

  private extractDisplayName(message: NormalizedInboundMessage): string {
    const candidate = typeof message.metadata?.displayName === 'string'
      ? message.metadata.displayName
      : undefined

    if (candidate?.trim()) return candidate.trim()

    const fallback = message.channel.charAt(0).toUpperCase() + message.channel.slice(1)
    return `Contacto ${fallback}`
  }

  private extractUsername(message: NormalizedInboundMessage): string | undefined {
    const candidate = message.metadata?.username
    return typeof candidate === 'string' && candidate.trim()
      ? candidate.trim()
      : undefined
  }
}
