'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { webhooksApi } from '@/lib/api'
import type { Webhook as WebhookType } from '@/types'
import {
  Webhook as WebhookIcon, Plus, Trash2, TestTube2,
  CheckCircle2, XCircle, Loader2, Copy, Check, X,
} from 'lucide-react'
import clsx from 'clsx'

const EVENT_OPTIONS = [
  'contact.created', 'contact.updated', 'contact.deleted',
  'deal.created',    'deal.updated',    'deal.moved', 'deal.deleted',
]

export default function WebhooksPage() {
  const queryClient               = useQueryClient()
  const [showForm, setShowForm]   = useState(false)
  const [copiedId, setCopiedId]   = useState<string | null>(null)
  const [form, setForm]           = useState({
    name: '',
    url:    '',
    events: [] as string[],
    secret: '',
  })

  const { data: webhooks, isLoading } = useQuery<WebhookType[]>({
    queryKey: ['webhooks'],
    queryFn:  () => webhooksApi.list().then((r) => r.data),
  })

  const createMutation = useMutation({
    mutationFn: () => webhooksApi.create({
      ...form,
      secret: form.secret || undefined,
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['webhooks'] })
      setShowForm(false)
      setForm({ name: '', url: '', events: [], secret: '' })
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => webhooksApi.delete(id),
    onSuccess:  () => queryClient.invalidateQueries({ queryKey: ['webhooks'] }),
  })

  const testMutation = useMutation({
    mutationFn: (id: string) => webhooksApi.test(id),
  })

  function toggleEvent(event: string) {
    setForm((f) => ({
      ...f,
      events: f.events.includes(event)
        ? f.events.filter((e) => e !== event)
        : [...f.events, event],
    }))
  }

  function copyToClipboard(text: string, id: string) {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="animate-fade-in p-4 md:p-8 max-w-[1000px]">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="page-title">Webhooks</h1>
          <p className="page-subtitle">Notificaciones automáticas a sistemas externos</p>
        </div>
        <button onClick={() => setShowForm(true)} className="btn-primary">
          <Plus size={15} strokeWidth={2.5} />
          Nuevo webhook
        </button>
      </div>

      {/* Create form */}
      {showForm && (
        <div className="animate-slide-up interactive-card mb-6 p-5" style={{ borderLeft: '2px solid var(--accent)' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="section-label">Configurar webhook</p>
            <button
              onClick={() => setShowForm(false)}
              className="rounded p-1 transition-colors"
              style={{ color: 'var(--ink-tertiary)' }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              <X size={14} />
            </button>
          </div>
          <div className="space-y-3">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Nombre del webhook (ej. n8n contactos) *"
              className="ctrl-input"
            />
            <input
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              placeholder="https://tu-servidor.com/webhook *"
              className="ctrl-input font-mono"
            />
            <input
              value={form.secret}
              onChange={(e) => setForm({ ...form, secret: e.target.value })}
              placeholder="Secret (opcional — para verificar firma HMAC)"
              className="ctrl-input"
            />
            <div>
              <p className="section-label mb-2">Eventos a escuchar</p>
              <div className="flex flex-wrap gap-1.5">
                {EVENT_OPTIONS.map((event) => (
                  <button
                    key={event}
                    onClick={() => toggleEvent(event)}
                    className={clsx(
                      'rounded px-2.5 py-1 text-[11px] font-semibold transition-colors',
                      form.events.includes(event)
                        ? 'text-white'
                        : 'border'
                    )}
                    style={
                      form.events.includes(event)
                        ? { background: 'var(--accent)', border: '1px solid var(--accent)' }
                        : { background: 'var(--surface-2)', color: 'var(--ink-secondary)', borderColor: 'var(--border-1)' }
                    }
                  >
                    {event}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-2" style={{ borderTop: '1px solid var(--border-0)', paddingTop: '1rem' }}>
            <button
              onClick={() => createMutation.mutate()}
              disabled={!form.name || !form.url || form.events.length === 0 || createMutation.isPending}
              className="btn-primary"
            >
              {createMutation.isPending && <Loader2 size={13} className="animate-spin" />}
              Guardar
            </button>
            <button onClick={() => setShowForm(false)} className="btn-secondary">Cancelar</button>
          </div>
        </div>
      )}

      {/* Webhook list */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-5 w-5 animate-spin rounded-full border-2" style={{ borderColor: 'var(--border-2)', borderTopColor: 'var(--accent)' }} />
        </div>
      ) : webhooks?.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center rounded-xl py-24 text-center"
          style={{ border: '1px dashed var(--border-2)' }}
        >
          <WebhookIcon size={40} strokeWidth={1.25} className="mb-3" style={{ color: 'var(--ink-muted)' }} />
          <p className="text-sm font-medium" style={{ color: 'var(--ink-secondary)' }}>Sin webhooks configurados</p>
          <p className="mt-1 text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>
            Sincronizá tus datos con plataformas externas agregando uno.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {webhooks?.map((wh) => (
            <div key={wh.id} className="interactive-card p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">

                  {/* URL + status */}
                  <div className="flex items-center gap-2 mb-3">
                    {wh.isActive
                      ? <CheckCircle2 size={14} strokeWidth={2.5} style={{ color: 'var(--semantic-success)' }} className="shrink-0" />
                      : <XCircle size={14} strokeWidth={2.5} style={{ color: 'var(--semantic-danger)' }} className="shrink-0" />
                    }
                    <span className="truncate font-mono text-[12px] font-semibold" style={{ color: 'var(--ink-primary)' }}>
                      {wh.url}
                    </span>
                    <button
                      onClick={() => copyToClipboard(wh.url, wh.id)}
                      className="rounded p-1 transition-colors shrink-0"
                      style={{ color: 'var(--ink-tertiary)' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                      title="Copiar URL"
                    >
                      {copiedId === wh.id
                        ? <Check size={12} style={{ color: 'var(--semantic-success)' }} />
                        : <Copy size={12} />
                      }
                    </button>
                  </div>

                  {/* Events */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {wh.events.map((event: string) => (
                      <span
                        key={event}
                        className="rounded px-2 py-0.5 font-mono text-[10px] font-semibold"
                        style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)', border: '1px solid var(--border-0)' }}
                      >
                        {event}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div
                    className="inline-flex items-center gap-4 rounded-md px-3 py-1.5"
                    style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}
                  >
                    <span className="flex items-center gap-1.5 text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>
                      <div className="status-dot" style={{ backgroundColor: 'var(--semantic-success)' }} />
                      {wh.successCount} exitosos
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>
                      <div className="status-dot" style={{ backgroundColor: 'var(--semantic-danger)' }} />
                      {wh.failureCount} fallidos
                    </span>
                    {wh.lastTriggeredAt && (
                      <span className="text-[11px]" style={{ color: 'var(--ink-muted)', borderLeft: '1px solid var(--border-1)', paddingLeft: '1rem' }}>
                        Última vez: {new Date(wh.lastTriggeredAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => testMutation.mutate(wh.id)}
                    disabled={testMutation.isPending}
                    className="btn-secondary !py-1.5 !px-2.5 !text-[11px]"
                    title="Enviar evento de prueba"
                  >
                    {testMutation.isPending
                      ? <Loader2 size={11} className="animate-spin" />
                      : <TestTube2 size={11} />
                    }
                    Test
                  </button>
                  <button
                    onClick={() => deleteMutation.mutate(wh.id)}
                    className="rounded-lg p-2 transition-colors"
                    style={{ color: 'var(--ink-tertiary)' }}
                    onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--semantic-danger)'; ;(e.currentTarget as HTMLElement).style.background = 'var(--semantic-danger-bg)' }}
                    onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-tertiary)'; ;(e.currentTarget as HTMLElement).style.background = 'transparent' }}
                    title="Eliminar"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}