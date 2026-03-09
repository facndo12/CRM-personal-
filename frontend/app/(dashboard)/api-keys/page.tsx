'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { authApi } from '@/lib/api'
import type { ApiKey } from '@/types'
import { Key, Plus, Trash2, Copy, Check, Loader2, Eye, EyeOff } from 'lucide-react'

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
      // El backend devuelve la key completa UNA SOLA VEZ
      // después solo guarda el hash — por eso la mostramos ahora
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
    <div className="p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">API Keys</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            Tokens para integraciones externas como n8n o scripts
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          Nueva API Key
        </button>
      </div>

      {/* Alerta — nueva key recién creada */}
      {/* Solo se muestra UNA VEZ porque el backend no guarda la key en texto plano */}
      {newKey && (
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
          <p className="text-yellow-400 text-sm font-medium mb-2">
            ⚠️ Copiá esta key ahora — no la vas a poder ver de nuevo
          </p>
          <div className="flex items-center gap-2 bg-gray-900 rounded-lg px-3 py-2">
            <code className="text-green-400 text-xs flex-1 break-all">
              {newKey}
            </code>
            <button
              onClick={() => copyToClipboard(newKey, 'new')}
              className="text-gray-400 hover:text-white transition-colors shrink-0"
            >
              {copiedId === 'new'
                ? <Check size={14} className="text-green-400" />
                : <Copy size={14} />
              }
            </button>
          </div>
          <button
            onClick={() => setNewKey(null)}
            className="text-xs text-gray-500 hover:text-gray-300 mt-2 transition-colors"
          >
            Ya la copié, cerrar
          </button>
        </div>
      )}

      {/* Formulario */}
      {showForm && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">
          <h3 className="text-white font-medium mb-4">Nueva API Key</h3>
          <div className="flex gap-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre descriptivo (ej: n8n producción) *"
              className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
              autoFocus
            />
            <button
              onClick={() => createMutation.mutate()}
              disabled={!name || createMutation.isPending}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
            >
              {createMutation.isPending && <Loader2 size={14} className="animate-spin" />}
              Crear
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
      ) : apiKeys?.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <Key size={48} className="mx-auto mb-3 opacity-30" />
          <p>No hay API Keys todavía</p>
          <p className="text-sm mt-1">
            Creá una para conectar n8n u otros servicios
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {apiKeys?.map((apiKey) => (
            <div
              key={apiKey.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center gap-4"
            >
              {/* Ícono */}
              <div className="w-9 h-9 bg-indigo-600/20 border border-indigo-500/30 rounded-lg flex items-center justify-center shrink-0">
                <Key size={16} className="text-indigo-400" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium">{apiKey.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  {/* Prefix visible — el resto está hasheado */}
                  <code className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded">
                    {visibleId === apiKey.id
                      ? apiKey.keyPrefix + '••••••••••••••••'
                      : apiKey.keyPrefix + '••••'
                    }
                  </code>
                  <button
                    onClick={() =>
                      setVisibleId(visibleId === apiKey.id ? null : apiKey.id)
                    }
                    className="text-gray-600 hover:text-gray-400 transition-colors"
                  >
                    {visibleId === apiKey.id
                      ? <EyeOff size={12} />
                      : <Eye size={12} />
                    }
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Creada: {new Date(apiKey.createdAt).toLocaleDateString()}
                  {apiKey.lastUsedAt && (
                    <> · Último uso: {new Date(apiKey.lastUsedAt).toLocaleDateString()}</>
                  )}
                </p>
              </div>

              {/* Eliminar */}
              <button
                onClick={() => deleteMutation.mutate(apiKey.id)}
                className="text-gray-600 hover:text-red-400 transition-colors p-1.5"
                title="Revocar key"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Explicación de uso */}
      <div className="mt-8 bg-gray-900 border border-gray-800 rounded-xl p-5">
        <h3 className="text-white text-sm font-medium mb-3">Cómo usar una API Key</h3>
        <p className="text-gray-400 text-xs mb-3">
          Incluí el header en cada request a la API:
        </p>
        <code className="block bg-gray-800 text-green-400 text-xs p-3 rounded-lg">
          X-API-Key: crm_tu_key_aqui
        </code>
        <p className="text-gray-500 text-xs mt-3">
          En n8n: agregá un header HTTP con ese valor en tus nodos de HTTP Request.
        </p>
      </div>

    </div>
  )
}