import type {
  NormalizedInboundMessage,
  OutboundMessageDraft,
  OutboundMessageResult,
} from './types'

export interface VerifyWebhookResult {
  ok: boolean
  challenge?: string
}

export interface WebhookEnvelope {
  headers: Record<string, string | string[] | undefined>
  query: Record<string, unknown>
  body: unknown
}

// Cada proveedor traduce su formato al mismo contrato interno.
// Si no hacemos esto ahora, despues la app queda llena de casos especiales.
export interface ChannelProviderAdapter {
  readonly provider: string
  readonly channel: string

  verifyWebhook(input: WebhookEnvelope): Promise<VerifyWebhookResult>
  parseInbound(input: WebhookEnvelope): Promise<NormalizedInboundMessage[]>
  sendMessage(input: OutboundMessageDraft): Promise<OutboundMessageResult>
}
