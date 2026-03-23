import type {
  ChannelProviderAdapter,
  VerifyWebhookResult,
  WebhookEnvelope,
} from './provider'
import type {
  MessageKind,
  NormalizedAttachment,
  NormalizedInboundMessage,
  OutboundMessageDraft,
  OutboundMessageResult,
} from './types'

type PlainObject = Record<string, any>

export class MetaWebhookAdapter implements ChannelProviderAdapter {
  readonly provider = 'meta'
  readonly channel = 'meta'

  constructor(private readonly verifyToken?: string) {}

  async verifyWebhook(input: WebhookEnvelope): Promise<VerifyWebhookResult> {
    const mode = this.asString(input.query['hub.mode'])
    const token = this.asString(input.query['hub.verify_token'])
    const challenge = this.asString(input.query['hub.challenge'])

    if (mode !== 'subscribe' || !challenge || !this.verifyToken) {
      return { ok: false }
    }

    return {
      ok: token === this.verifyToken,
      challenge,
    }
  }

  async parseInbound(input: WebhookEnvelope): Promise<NormalizedInboundMessage[]> {
    const body = (input.body ?? {}) as PlainObject

    if (body.object === 'whatsapp_business_account') {
      return this.parseWhatsApp(body)
    }

    if (body.object === 'page') {
      return this.parsePageStyleMessages(body, 'messenger')
    }

    if (body.object === 'instagram') {
      return this.parsePageStyleMessages(body, 'instagram')
    }

    return []
  }

  async sendMessage(_: OutboundMessageDraft): Promise<OutboundMessageResult> {
    throw new Error('MetaWebhookAdapter todavia no implementa envio saliente')
  }

  private parseWhatsApp(body: PlainObject): NormalizedInboundMessage[] {
    const messages: NormalizedInboundMessage[] = []

    for (const entry of body.entry ?? []) {
      for (const change of entry.changes ?? []) {
        const value = change.value ?? {}
        const externalAccountId = this.asString(value.metadata?.phone_number_id)
        if (!externalAccountId) continue

        for (const message of value.messages ?? []) {
          const normalized = this.normalizeWhatsAppMessage(message, externalAccountId, value)
          if (normalized) messages.push(normalized)
        }
      }
    }

    return messages
  }

  private normalizeWhatsAppMessage(
    message: PlainObject,
    externalAccountId: string,
    value: PlainObject
  ): NormalizedInboundMessage | null {
    const type = this.mapWhatsAppType(message.type)
    if (!type) return null

    const occurredAt = this.parseUnixTimestamp(message.timestamp)
    const attachments = this.extractWhatsAppAttachments(message)
    const text = this.extractWhatsAppText(message)
    const displayName = this.findWhatsAppContactName(value.contacts, message.from)

    return {
      provider: 'meta',
      channel: 'whatsapp',
      externalAccountId,
      externalUserId: this.asString(message.from) ?? '',
      externalThreadId: this.asString(message.from),
      providerMessageId: this.asString(message.id),
      providerReplyToId: this.asString(message.context?.id),
      text,
      type,
      occurredAt,
      rawPayload: message,
      attachments,
      metadata: {
        displayName,
        profileName: displayName,
      },
    }
  }

  private parsePageStyleMessages(
    body: PlainObject,
    channel: 'messenger' | 'instagram'
  ): NormalizedInboundMessage[] {
    const messages: NormalizedInboundMessage[] = []

    for (const entry of body.entry ?? []) {
      const externalAccountId = this.asString(entry.id)
      if (!externalAccountId) continue

      for (const event of entry.messaging ?? []) {
        const message = event.message
        if (!message || message.is_echo) continue

        const occurredAt = this.parseUnixTimestamp(event.timestamp)
        const attachments = this.extractPageAttachments(message.attachments)
        const text = this.asString(message.text)
        const type = this.inferPageMessageType(message, attachments)

        messages.push({
          provider: 'meta',
          channel,
          externalAccountId,
          externalUserId: this.asString(event.sender?.id) ?? '',
          externalThreadId: this.asString(event.sender?.id),
          providerMessageId: this.asString(message.mid),
          providerReplyToId: this.asString(message.reply_to?.mid),
          text,
          type,
          occurredAt,
          rawPayload: event,
          attachments,
          metadata: {},
        })
      }
    }

    return messages
  }

  private extractWhatsAppText(message: PlainObject): string | undefined {
    if (message.type === 'text') return this.asString(message.text?.body)
    if (message.type === 'button') return this.asString(message.button?.text)
    if (message.type === 'interactive') {
      return this.asString(
        message.interactive?.button_reply?.title ??
        message.interactive?.list_reply?.title
      )
    }
    return undefined
  }

  private extractWhatsAppAttachments(message: PlainObject): NormalizedAttachment[] | undefined {
    const media = message[message.type]
    if (!media) return undefined

    const type = this.mapWhatsAppAttachmentType(message.type)
    if (!type) return undefined

    return [{
      type,
      mimeType: this.asString(media.mime_type),
      externalAssetId: this.asString(media.id),
      fileName: this.asString(media.filename),
      metadata: {},
    }]
  }

  private extractPageAttachments(attachments: PlainObject[] | undefined): NormalizedAttachment[] | undefined {
    if (!attachments?.length) return undefined

    const normalized = attachments
      .map((attachment) => {
        const type = this.mapPageAttachmentType(attachment.type)
        if (!type) return null

        return {
          type,
          url: this.asString(attachment.payload?.url),
          externalAssetId: this.asString(attachment.payload?.attachment_id),
          metadata: {},
        } as NormalizedAttachment
      })
      .filter(Boolean) as NormalizedAttachment[]

    return normalized.length ? normalized : undefined
  }

  private inferPageMessageType(
    message: PlainObject,
    attachments: NormalizedAttachment[] | undefined
  ): MessageKind {
    if (this.asString(message.text)) return 'text'
    if (attachments?.length) return attachments[0].type
    return 'unsupported'
  }

  private mapWhatsAppType(type: string | undefined): MessageKind | null {
    switch (type) {
      case 'text':
      case 'button':
      case 'interactive':
        return 'text'
      case 'image':
        return 'image'
      case 'audio':
        return 'audio'
      case 'video':
        return 'video'
      case 'document':
        return 'file'
      case 'sticker':
        return 'sticker'
      default:
        return null
    }
  }

  private mapWhatsAppAttachmentType(type: string | undefined): Exclude<MessageKind, 'text' | 'unsupported'> | null {
    switch (type) {
      case 'image':
        return 'image'
      case 'audio':
        return 'audio'
      case 'video':
        return 'video'
      case 'document':
        return 'file'
      case 'sticker':
        return 'sticker'
      default:
        return null
    }
  }

  private mapPageAttachmentType(type: string | undefined): Exclude<MessageKind, 'text' | 'unsupported'> | null {
    switch (type) {
      case 'image':
        return 'image'
      case 'audio':
        return 'audio'
      case 'video':
        return 'video'
      case 'file':
        return 'file'
      default:
        return null
    }
  }

  private findWhatsAppContactName(contacts: PlainObject[] | undefined, waId: string | undefined): string | undefined {
    const match = contacts?.find((contact) => this.asString(contact.wa_id) === waId)
    return this.asString(match?.profile?.name)
  }

  private parseUnixTimestamp(value: unknown): Date {
    const raw = this.asString(value)
    if (!raw) return new Date()

    const numeric = Number(raw)
    if (!Number.isFinite(numeric)) return new Date()

    return new Date(numeric > 1e12 ? numeric : numeric * 1000)
  }

  private asString(value: unknown): string | undefined {
    return typeof value === 'string' && value.trim() ? value : undefined
  }
}
