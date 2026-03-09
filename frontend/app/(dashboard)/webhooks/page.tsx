'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { webhooksApi } from '@/lib/api'
import type { Webhook as WebhookType } from '@/types'
import {
  Webhook as WebhookIcon, Plus, Trash2, TestTube2,
  CheckCircle2, XCircle, Loader2, Copy, Check
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
        secret: form.secret || undefined,  // ← enviar undefined si está vacío
    }),

    onSuccess:  () => {
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
    <div className="p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Webhooks</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            Notificaciones automáticas a sistemas externos
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          Nuevo webhook
        </button>
      </div>

      {/* Formulario */}
      {showForm && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">
          <h3 className="text-white font-medium mb-4">Nuevo webhook</h3>

          <div className="space-y-4">
            <input
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              placeholder="https://tu-servidor.com/webhook *"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
            />

            <input
              value={form.secret}
              onChange={(e) => setForm({ ...form, secret: e.target.value })}
              placeholder="Secret (opcional — para verificar firma HMAC)"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
            />
            
            <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nombre del webhook (ej: n8n contactos) *"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
            />

            <div>
              <p className="text-gray-400 text-xs mb-2">Eventos a escuchar:</p>
              <div className="flex flex-wrap gap-2">
                {EVENT_OPTIONS.map((event) => (
                  <button
                    key={event}
                    onClick={() => toggleEvent(event)}
                    className={clsx(
                      'text-xs px-3 py-1.5 rounded-full border transition-colors',
                      form.events.includes(event)
                        ? 'bg-indigo-600 border-indigo-500 text-white'
                        : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600'
                    )}
                  >
                    {event}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => createMutation.mutate()}
              disabled={!form.name || !form.url || form.events.length === 0 || createMutation.isPending}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
            >
              {createMutation.isPending && <Loader2 size={14} className="animate-spin" />}
              Guardar
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Lista */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-indigo-500" size={32} />
        </div>
      ) : webhooks?.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <WebhookIcon size={48} className="mx-auto mb-3 opacity-30"/>
          <p>No hay webhooks configurados</p>
        </div>
      ) : (
        <div className="space-y-3">
          {webhooks?.map((wh) => (
            <div
              key={wh.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">

                  {/* URL y estado */}
                  <div className="flex items-center gap-2 mb-2">
                    {wh.isActive ? (
                      <CheckCircle2 size={14} className="text-green-400 shrink-0" />
                    ) : (
                      <XCircle size={14} className="text-red-400 shrink-0" />
                    )}
                    <span className="text-white text-sm font-medium truncate">
                      {wh.url}
                    </span>
                    <button
                      onClick={() => copyToClipboard(wh.url, wh.id)}
                      className="text-gray-500 hover:text-gray-300 transition-colors shrink-0"
                      title="Copiar URL"
                    >
                      {copiedId === wh.id
                        ? <Check size={12} className="text-green-400" />
                        : <Copy size={12} />
                      }
                    </button>
                  </div>

                  {/* Eventos */}
                  <div className="flex flex-wrap gap-1.5">
                    {wh.events.map((event: string) => (
                      <span
                        key={event}
                        className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full"
                      >
                        {event}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-gray-500">
                      {wh.successCount} exitosos
                    </span>
                    <span className="text-xs text-gray-500">
                      {wh.failureCount} fallidos
                    </span>
                    {wh.lastTriggeredAt && (
                      <span className="text-xs text-gray-500">
                        Último: {new Date(wh.lastTriggeredAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => testMutation.mutate(wh.id)}
                    disabled={testMutation.isPending}
                    className="flex items-center gap-1.5 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg transition-colors"
                    title="Enviar test"
                  >
                    {testMutation.isPending
                      ? <Loader2 size={12} className="animate-spin" />
                      : <TestTube2 size={12} />
                    }
                    Test
                  </button>
                  <button
                    onClick={() => deleteMutation.mutate(wh.id)}
                    className="text-gray-600 hover:text-red-400 transition-colors p-1.5"
                    title="Eliminar"
                  >
                    <Trash2 size={14} />
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