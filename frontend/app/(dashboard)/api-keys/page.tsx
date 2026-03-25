'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { authApi } from '@/lib/api'
import type { ApiKey } from '@/types'
import { Key, Plus, Trash2, Copy, Check, Loader2, Eye, EyeOff, X } from 'lucide-react'

export default function ApiKeysPage() {
  const queryClient                   = useQueryClient()
  const [showForm, setShowForm]       = useState(false)
  const [name, setName]               = useState('')
  const [newKey, setNewKey]           = useState<string | null>(null)
  const [copiedId, setCopiedId]       = useState<string | null>(null)
  const [visibleId, setVisibleId]     = useState<string | null>(null)

  const { data: apiKeys, isLoading } = useQuery<ApiKey[]>({
    queryKey: ['api-keys'],
    queryFn:  () => authApi.listApiKeys().then((r) => r.data),
  })

  const createMutation = useMutation({
    mutationFn: () => authApi.createApiKey({ name }),
    onSuccess: (res) => {
      setNewKey(res.data.rawKey)
      queryClient.invalidateQueries({ queryKey: ['api-keys'] })
      setShowForm(false)
      setName('')
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => authApi.deleteApiKey(id),
    onSuccess:  () => queryClient.invalidateQueries({ queryKey: ['api-keys'] }),
  })

  function copyToClipboard(text: string, id: string) {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="animate-fade-in p-4 md:p-8 max-w-[900px]">

      {/* Header */}
      <div className="mb-6 md:mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="page-title">API Keys</h1>
          <p className="page-subtitle">Tokens de acceso para integraciones externas</p>
        </div>
        <button onClick={() => setShowForm(true)} className="btn-primary self-start sm:self-auto">
          <Plus size={15} strokeWidth={2.5} />
          Nueva API Key
        </button>
      </div>

      {/* New key reveal banner */}
      {newKey && (
        <div
          className="animate-slide-up mb-6 rounded-lg p-4"
          style={{ background: 'var(--semantic-warning-bg)', border: '1px solid rgba(217,119,6,0.2)' }}
        >
          <p className="mb-3 text-[12px] font-semibold" style={{ color: 'var(--semantic-warning)' }}>
            ⚠ Copiá esta key ahora — no se volverá a mostrar.
          </p>
          <div
            className="flex items-center gap-3 rounded-md p-2"
            style={{ background: 'var(--surface-0)', border: '1px solid var(--border-1)' }}
          >
            <code className="flex-1 break-all font-mono text-[12px] font-semibold" style={{ color: 'var(--semantic-success)' }}>
              {newKey}
            </code>
            <button
              onClick={() => copyToClipboard(newKey, 'new')}
              className="btn-secondary !py-1.5 !px-2.5 !text-[11px] shrink-0"
            >
              {copiedId === 'new' ? <><Check size={12} /> Copiada</> : <><Copy size={12} /> Copiar</>}
            </button>
          </div>
          <button
            onClick={() => setNewKey(null)}
            className="mt-3 text-[11px] font-medium transition-opacity hover:opacity-70"
            style={{ color: 'var(--semantic-warning)' }}
          >
            Cerrar mensaje
          </button>
        </div>
      )}

      {/* Create form */}
      {showForm && (
        <div className="animate-slide-up interactive-card mb-6 p-5" style={{ borderLeft: '2px solid var(--accent)' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="section-label flex items-center gap-1.5"><Key size={11} /> Nueva credencial</p>
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
          <div className="flex gap-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre identificador (ej. n8n producción) *"
              className="ctrl-input flex-1"
              autoFocus
            />
            <button
              onClick={() => createMutation.mutate()}
              disabled={!name || createMutation.isPending}
              className="btn-primary shrink-0"
            >
              {createMutation.isPending ? <Loader2 size={13} className="animate-spin" /> : <Plus size={15} strokeWidth={2.5} />}
              Generar
            </button>
          </div>
        </div>
      )}

      {/* List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-5 w-5 animate-spin rounded-full border-2" style={{ borderColor: 'var(--border-2)', borderTopColor: 'var(--accent)' }} />
        </div>
      ) : apiKeys?.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center rounded-xl py-24 text-center"
          style={{ border: '1px dashed var(--border-2)' }}
        >
          <Key size={36} strokeWidth={1.25} className="mb-3" style={{ color: 'var(--ink-muted)' }} />
          <p className="text-sm font-medium" style={{ color: 'var(--ink-secondary)' }}>Sin API Keys generadas</p>
          <p className="mt-1 text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>
            Creá una credencial para automatizar el CRM con otros servicios.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {apiKeys?.map((apiKey) => (
            <div key={apiKey.id} className="interactive-card flex flex-col sm:flex-row sm:items-center gap-4 p-4">
              {/* Icon */}
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}
              >
                <Key size={16} strokeWidth={2} />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold tracking-tight" style={{ color: 'var(--ink-primary)' }}>
                  {apiKey.name}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <code
                    className="rounded px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wider"
                    style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)', border: '1px solid var(--border-0)' }}
                  >
                    {visibleId === apiKey.id
                      ? apiKey.keyPrefix + '••••••••••••••••'
                      : apiKey.keyPrefix + '••••'
                    }
                  </code>
                  <button
                    onClick={() => setVisibleId(visibleId === apiKey.id ? null : apiKey.id)}
                    className="rounded p-1 transition-colors"
                    style={{ color: 'var(--ink-tertiary)' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                  >
                    {visibleId === apiKey.id ? <EyeOff size={12} /> : <Eye size={12} />}
                  </button>
                </div>
                <div className="mt-1.5 flex items-center gap-3">
                  <p className="text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>
                    Creada el {new Date(apiKey.createdAt).toLocaleDateString()}
                  </p>
                  {apiKey.lastUsedAt && (
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                      style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)', border: '1px solid rgba(124,58,237,0.15)' }}
                    >
                      Último uso: {new Date(apiKey.lastUsedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>

              {/* Delete */}
              <button
                onClick={() => {
                  if (confirm(`¿Revocar la API Key "${apiKey.name}"? Las integraciones dejarán de funcionar.`)) {
                    deleteMutation.mutate(apiKey.id)
                  }
                }}
                className="rounded-lg p-2 transition-colors"
                style={{ color: 'var(--ink-tertiary)' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--semantic-danger)'
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--semantic-danger-bg)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-tertiary)'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
                title="Revocar key"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Usage guide */}
      <div
        className="mt-10 rounded-xl p-5"
        style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}
      >
        <p className="section-label flex items-center gap-1.5 mb-3">
          <Key size={11} /> Cómo autenticar consultas API
        </p>
        <p className="mb-3 text-[12px]" style={{ color: 'var(--ink-secondary)' }}>
          Incluí este encabezado HTTP en cada petición a los servidores del CRM:
        </p>
        <div
          className="rounded-lg p-4 font-mono text-[12px]"
          style={{ background: 'var(--surface-0)', border: '1px solid var(--border-1)' }}
        >
          <span style={{ color: 'var(--ink-tertiary)' }}>Header:</span>{' '}
          <span style={{ color: 'var(--ink-primary)', fontWeight: 600 }}>X-API-Key</span>
          <br />
          <span style={{ color: 'var(--ink-tertiary)' }}>Value:</span>{' '}
          <span style={{ color: 'var(--accent)' }}>crm_tu_token_seguro_aqui</span>
        </div>
      </div>
    </div>
  )
}