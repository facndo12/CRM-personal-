'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { contactsApi } from '@/lib/api'
import type { Contact, PaginatedResult } from '@/types'
import { Search, Plus, Mail, Phone, Tag, Loader2 } from 'lucide-react'
import clsx from 'clsx'

const STATUS_COLORS: Record<string, string> = {
  LEAD:      'bg-blue-500/10 text-blue-400 border-blue-500/20',
  QUALIFIED: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  ACTIVE:    'bg-green-500/10 text-green-400 border-green-500/20',
  CUSTOMER:  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  CHURNED:   'bg-red-500/10 text-red-400 border-red-500/20',
}

export default function ContactsPage() {
  const queryClient = useQueryClient()
  const [search, setSearch]       = useState('')
  const [showForm, setShowForm]   = useState(false)
  const [form, setForm]           = useState({
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    source:    'MANUAL',
  })

  // Traer contactos con React Query
  // Se re-ejecuta automáticamente cuando cambia el search
  const { data, isLoading } = useQuery<PaginatedResult<Contact>>({
    queryKey: ['contacts', search],
    queryFn:  () =>
      contactsApi.list({ search: search || undefined, limit: 50 })
        .then((r) => r.data),
  })

  // Mutación para crear contacto
  const createMutation = useMutation({
    mutationFn: (data: typeof form) => {
      console.log('creando contacto con:', JSON.stringify(data))
      return contactsApi.create(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
      setShowForm(false)
      setForm({ firstName: '', lastName: '', email: '', phone: '', source: 'MANUAL' })
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => contactsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Contactos</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {data?.total ?? 0} contactos en total
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          Nuevo contacto
        </button>
      </div>

      {/* Buscador */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nombre, email o teléfono..."
          className="w-full bg-gray-900 border border-gray-800 text-white rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 text-sm"
        />
      </div>

      {/* Formulario nuevo contacto */}
      {showForm && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">
          <h3 className="text-white font-medium mb-4">Nuevo contacto</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'firstName', placeholder: 'Nombre *', required: true },
              { name: 'lastName',  placeholder: 'Apellido'                 },
              { name: 'email',     placeholder: 'Email'                    },
              { name: 'phone',     placeholder: 'Teléfono'                 },
            ].map((field) => (
              <input
                key={field.name}
                placeholder={field.placeholder}
                value={form[field.name as keyof typeof form]}
                onChange={(e) =>
                  setForm({ ...form, [field.name]: e.target.value })
                }
                className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 text-sm"
              />
            ))}
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => createMutation.mutate(form)}
              disabled={!form.firstName || createMutation.isPending}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              {createMutation.isPending && <Loader2 size={14} className="animate-spin" />}
              Guardar
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Lista de contactos */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-indigo-500" size={32} />
        </div>
      ) : data?.items.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <Users size={48} className="mx-auto mb-3 opacity-30" />
          <p>No hay contactos todavía</p>
          <p className="text-sm mt-1">Creá tu primer contacto con el botón de arriba</p>
        </div>
      ) : (
        <div className="space-y-2">
          {data?.items.map((contact) => (
            <div
              key={contact.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center gap-4 hover:border-gray-700 transition-colors"
            >
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-medium text-sm shrink-0">
                {contact.firstName[0]}{contact.lastName?.[0] ?? ''}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium text-sm">
                    {contact.firstName} {contact.lastName}
                  </span>
                  <span className={clsx(
                    'text-xs px-2 py-0.5 rounded-full border',
                    STATUS_COLORS[contact.status] ?? 'bg-gray-500/10 text-gray-400'
                  )}>
                    {contact.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-1">
                  {contact.email && (
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Mail size={11} /> {contact.email}
                    </span>
                  )}
                  {contact.phone && (
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Phone size={11} /> {contact.phone}
                    </span>
                  )}
                </div>
                {contact.tags.length > 0 && (
                  <div className="flex items-center gap-1 mt-1.5">
                    <Tag size={10} className="text-gray-500" />
                    {contact.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Score */}
              <div className="text-center shrink-0">
                <div className={clsx(
                  'text-lg font-bold',
                  contact.score >= 70 ? 'text-green-400' :
                  contact.score >= 40 ? 'text-yellow-400' : 'text-gray-400'
                )}>
                  {contact.score}
                </div>
                <div className="text-xs text-gray-500">score</div>
              </div>

              {/* Acciones */}
              <button
                onClick={() => deleteMutation.mutate(contact.id)}
                className="text-gray-600 hover:text-red-400 transition-colors text-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function Users({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}