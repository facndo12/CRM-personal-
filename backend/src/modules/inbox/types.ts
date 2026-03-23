export type ChannelProvider = 'meta' | 'tiktok'

export type ChannelKind =
  | 'whatsapp'
  | 'instagram'
  | 'messenger'
  | 'tiktok'

export type MessageDirection = 'inbound' | 'outbound'

export type MessageKind =
  | 'text'
  | 'image'
  | 'audio'
  | 'video'
  | 'file'
  | 'sticker'
  | 'unsupported'

export interface NormalizedAttachment {
  type: Exclude<MessageKind, 'text' | 'unsupported'>
  mimeType?: string
  url?: string
  externalAssetId?: string
  fileName?: string
  sizeBytes?: number
  metadata?: Record<string, unknown>
}

export interface NormalizedInboundMessage {
  provider: ChannelProvider
  channel: ChannelKind
  externalAccountId: string
  externalUserId: string
  externalThreadId?: string
  providerMessageId?: string
  providerReplyToId?: string
  text?: string
  type: MessageKind
  occurredAt: Date
  rawPayload: unknown
  attachments?: NormalizedAttachment[]
  metadata?: Record<string, unknown>
}

export interface OutboundMessageDraft {
  provider: ChannelProvider
  channel: ChannelKind
  externalUserId: string
  externalThreadId?: string
  text?: string
  attachments?: NormalizedAttachment[]
  metadata?: Record<string, unknown>
}

export interface OutboundMessageResult {
  providerMessageId: string
  acceptedAt: Date
  rawResponse: unknown
}
