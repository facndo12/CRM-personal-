'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { contactsApi } from '@/lib/api'
import type { Contact, PaginatedResult } from '@/types'
import { Search, Plus, Mail, Phone, Tag, Loader2, Users, ChevronLeft, ChevronRight, X } from 'lucide-react'
import clsx from 'clsx'
import Link from 'next/link'
import { SkeletonList } from '@/components/ui/skeleton'
import { useToast } from '@/components/ui/toast'
import { Avatar } from '@/components/ui/avatar'
import { StatusBadge } from '@/components/ui/badge'
import { Modal } from '@/components/ui/modal'

const PAGE_SIZE = 20

export default function ContactsPage() {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    source: 'MANUAL',
  })

  const { data, isLoading } = useQuery<PaginatedResult<Contact>>({
    queryKey: ['contacts', search, page],
    queryFn: () => contactsApi.list({
      search: search || undefined,
      limit: PAGE_SIZE,
      page,
    }).then((r) => r.data),
  })

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 0

  const createMutation = useMutation({
    mutationFn: (data: typeof form) => contactsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
      setShowForm(false)
      setForm({ firstName: '', lastName: '', email: '', phone: '', source: 'MANUAL' })
      toast({ type: 'success', title: 'Contacto creado' })
    },
    onError: (err: any) => {
      toast({
        type: 'error',
        title: 'Error al crear',
        description: err.response?.status === 409 ? 'Email o teléfono duplicado.' : 'Ocurrió un error.',
      })
    },
  })

  return (
    <div className="animate-fade-in p-4 md:p-8 pb-20 md:pb-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="page-title">Contactos</h1>
            <p className="page-subtitle">{data?.total ?? 0} contactos</p>
          </div>
          <button onClick={() => setShowForm(true)} className="btn-primary self-start sm:self-auto">
            <Plus size={15} strokeWidth={2.5} />
            Nuevo
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" size={16} style={{ color: 'var(--ink-tertiary)' }} />
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(0) }}
            placeholder="Buscar..."
            className="ctrl-input !pl-10"
          />
        </div>

        {/* List */}
        {isLoading ? (
          <SkeletonList count={8} />
        ) : data?.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center rounded-xl" style={{ border: '1px dashed var(--border-2)' }}>
            <Users size={40} strokeWidth={1.25} className="mb-3" style={{ color: 'var(--ink-muted)' }} />
            <p className="font-medium" style={{ color: 'var(--ink-secondary)' }}>
              {search ? 'Sin resultados' : 'Sin contactos'}
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--ink-tertiary)' }}>
              {search ? `No hay resultados para "${search}"` : 'Cargá tu primer contacto'}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {(data?.items ?? []).map((contact) => (
              <Link
                key={contact.id}
                href={`/contacts/${contact.id}`}
                className="interactive-card flex items-center gap-3 p-3 md:p-4"
              >
                <Avatar name={`${contact.firstName}${contact.lastName ? ' ' + contact.lastName : ''}`} size="lg" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold truncate text-sm md:text-base" style={{ color: 'var(--ink-primary)' }}>
                      {contact.firstName} {contact.lastName}
                    </span>
                    <StatusBadge status={contact.status} />
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" style={{ color: 'var(--ink-tertiary)' }}>
                    {contact.email && <span className="flex items-center gap-1"><Mail size={11} />{contact.email}</span>}
                    {contact.phone && <span className="flex items-center gap-1"><Phone size={11} />{contact.phone}</span>}
                  </div>
                  {contact.tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1 mt-2">
                      {contact.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}>
                          {tag}
                        </span>
                      ))}
                      {contact.tags.length > 3 && (
                        <span className="text-[10px]" style={{ color: 'var(--ink-tertiary)' }}>+{contact.tags.length - 3}</span>
                      )}
                    </div>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <span
                    className="text-lg font-bold"
                    style={{
                      color: contact.score >= 70 ? 'var(--semantic-success)' : contact.score >= 40 ? 'var(--semantic-warning)' : 'var(--ink-tertiary)'
                    }}
                  >
                    {contact.score}
                  </span>
                  <p className="text-[10px] uppercase" style={{ color: 'var(--ink-muted)' }}>score</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 pt-4" style={{ borderTop: '1px solid var(--border-0)' }}>
            <p className="text-xs" style={{ color: 'var(--ink-tertiary)' }}>
              Página {page + 1} de {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="btn-secondary !py-1.5 !px-3 !text-xs"
              >
                <ChevronLeft size={13} /> Anterior
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className="btn-secondary !py-1.5 !px-3 !text-xs"
              >
                Siguiente <ChevronRight size={13} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Create Modal */}
      <Modal isOpen={showForm} onClose={() => setShowForm(false)} title="Nuevo Contacto" size="md">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              placeholder="Nombre *"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="ctrl-input"
            />
            <input
              placeholder="Apellido"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="ctrl-input"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="ctrl-input"
          />
          <input
            placeholder="Teléfono"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="ctrl-input"
          />
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => createMutation.mutate(form)}
              disabled={!form.firstName || createMutation.isPending}
              className="btn-primary flex-1"
            >
              {createMutation.isPending ? <Loader2 size={14} className="animate-spin" /> : null}
              Guardar
            </button>
            <button onClick={() => setShowForm(false)} className="btn-secondary">Cancelar</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
