'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { contactsApi } from '@/lib/api'
import type { Contact, PaginatedResult } from '@/types'
import { Search, Plus, Mail, Phone, Tag, Loader2, Users, ChevronLeft, ChevronRight, X } from 'lucide-react'
import clsx from 'clsx'
import Link from 'next/link'

const STATUS_DOT: Record<string, string> = {
  LEAD:      '#3b82f6',
  QUALIFIED: '#8b5cf6',
  ACTIVE:    '#22c55e',
  CUSTOMER:  '#10b981',
  CHURNED:   '#ef4444',
}

const STATUS_LABEL: Record<string, string> = {
  LEAD:      'bg-blue-50 text-blue-700 border-blue-200',
  QUALIFIED: 'bg-violet-50 text-violet-700 border-violet-200',
  ACTIVE:    'bg-emerald-50 text-emerald-700 border-emerald-200',
  CUSTOMER:  'bg-green-50 text-green-700 border-green-200',
  CHURNED:   'bg-red-50 text-red-700 border-red-200',
}

const PAGE_SIZE = 20

export default function ContactsPage() {
  const queryClient = useQueryClient()
  const [search, setSearch]   = useState('')
  const [page, setPage]       = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    source:    'MANUAL',
  })

  function handleSearch(value: string) {
    setSearch(value)
    setPage(0)
  }

  const { data, isLoading } = useQuery<PaginatedResult<Contact>>({
    queryKey: ['contacts', search, page],
    queryFn:  () => contactsApi.list({
      search: search || undefined,
      limit:  PAGE_SIZE,
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
    },
    onError: (err: any) => {
      if (err.response?.status === 409) {
        alert('Ese email o telefono ya esta siendo usado en otro contacto.')
      } else {
        alert('Error al crear el contacto: ' + (err.response?.data?.message || err.message))
      }
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => contactsApi.delete(id),
    onSuccess:  () => queryClient.invalidateQueries({ queryKey: ['contacts'] }),
  })

  return (
    <div className="mx-auto max-w-[1100px] animate-fade-in p-4 md:p-8">

      {/* Header */}
      <div className="mb-6 md:mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="page-title">Contactos</h1>
          <p className="page-subtitle">
            {data?.total ?? 0} contactos en tu cartera
          </p>
        </div>
        <button onClick={() => setShowForm(true)} className="btn-primary self-start sm:self-auto">
          <Plus size={15} strokeWidth={2.5} />
          Añadir contacto
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-5 w-full max-w-md">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          size={14}
          style={{ color: 'var(--ink-tertiary)' }}
        />
        <input
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar por nombre, email o teléfono..."
          className="ctrl-input ctrl-input-icon"
        />
      </div>

      {/* Create form */}
      {showForm && (
        <div
          className="animate-slide-up interactive-card mb-6 p-5"
          style={{ borderLeft: '2px solid var(--accent)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="section-label">Nuevo contacto</p>
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
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { name: 'firstName', placeholder: 'Nombre *' },
              { name: 'lastName',  placeholder: 'Apellido' },
              { name: 'email',     placeholder: 'Email' },
              { name: 'phone',     placeholder: 'Teléfono' },
            ].map((field) => (
              <input
                key={field.name}
                placeholder={field.placeholder}
                value={form[field.name as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="ctrl-input"
              />
            ))}
          </div>
          <div className="mt-4 flex gap-2" style={{ borderTop: '1px solid var(--border-0)', paddingTop: '1rem' }}>
            <button
              onClick={() => createMutation.mutate(form)}
              disabled={!form.firstName || createMutation.isPending}
              className="btn-primary"
            >
              {createMutation.isPending && <Loader2 size={13} className="animate-spin" />}
              Guardar
            </button>
            <button onClick={() => setShowForm(false)} className="btn-secondary">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-24">
          <div
            className="h-5 w-5 animate-spin rounded-full border-2"
            style={{ borderColor: 'var(--border-2)', borderTopColor: 'var(--accent)' }}
          />
        </div>
      ) : data?.items.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center rounded-xl py-24 text-center"
          style={{ border: '1px dashed var(--border-2)' }}
        >
          <Users size={40} strokeWidth={1.25} className="mb-3" style={{ color: 'var(--ink-muted)' }} />
          <p className="text-sm font-medium" style={{ color: 'var(--ink-secondary)' }}>
            {search ? 'No se encontraron contactos' : 'Aún no hay contactos'}
          </p>
          <p className="mt-1 text-xs" style={{ color: 'var(--ink-tertiary)' }}>
            {search ? `Sin resultados para "${search}"` : 'Comenzá cargando tu primer contacto.'}
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-1.5">
            {(data?.items ?? []).map((contact) => (
              <Link
                key={contact.id}
                href={`/contacts/${contact.id}`}
                className="interactive-card group flex items-center gap-4 px-5 py-3.5"
              >
                {/* Avatar */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                  style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)' }}
                >
                  {contact.firstName[0]}{contact.lastName?.[0] ?? ''}
                </div>

                {/* Name + contact info */}
                <div className="min-w-0 flex-1 overflow-hidden">
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-semibold tracking-tight truncate" style={{ color: 'var(--ink-primary)' }}>
                      {contact.firstName} {contact.lastName}
                    </span>
                    <span
                      className={clsx(
                        'rounded border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0',
                        STATUS_LABEL[contact.status] ?? 'border-zinc-200 bg-zinc-50 text-zinc-600'
                      )}
                    >
                      {contact.status}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                    {contact.email && (
                      <span className="flex items-center gap-1 text-[11px] truncate max-w-full" style={{ color: 'var(--ink-tertiary)' }}>
                        <Mail size={11} className="shrink-0" /> <span className="truncate">{contact.email}</span>
                      </span>
                    )}
                    {contact.phone && (
                      <span className="flex items-center gap-1 text-[11px] shrink-0" style={{ color: 'var(--ink-tertiary)' }}>
                        <Phone size={11} className="shrink-0" /> {contact.phone}
                      </span>
                    )}
                  </div>
                  {contact.tags.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      <Tag size={10} style={{ color: 'var(--ink-tertiary)' }} />
                      {contact.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                          style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)', border: '1px solid var(--border-0)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Score */}
                <div
                  className="flex flex-col items-center px-4 text-center"
                  style={{ borderLeft: '1px solid var(--border-0)' }}
                >
                  <span
                    className="data-num text-lg font-bold"
                    style={{
                      color: contact.score >= 70 ? 'var(--semantic-success)' :
                             contact.score >= 40 ? 'var(--semantic-warning)' : 'var(--ink-tertiary)',
                    }}
                  >
                    {contact.score}
                  </span>
                  <span className="section-label" style={{ letterSpacing: '0.12em' }}>score</span>
                </div>

                {/* Delete */}
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    if (confirm(`Eliminar contacto ${contact.firstName}?`)) {
                      deleteMutation.mutate(contact.id)
                    }
                  }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded opacity-0 transition-all group-hover:opacity-100"
                  style={{ color: 'var(--ink-tertiary)' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--semantic-danger)'
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--semantic-danger-bg)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-tertiary)'
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  }}
                >
                  <X size={13} />
                </button>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              className="mt-6 flex items-center justify-between pt-5"
              style={{ borderTop: '1px solid var(--border-0)' }}
            >
              <p className="text-[12px]" style={{ color: 'var(--ink-tertiary)' }}>
                Página <span style={{ color: 'var(--ink-primary)', fontWeight: 600 }}>{page + 1}</span> de{' '}
                <span style={{ color: 'var(--ink-primary)', fontWeight: 600 }}>{totalPages}</span>
                {' '}· {data?.total} contactos
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="btn-secondary !py-1.5 !px-3 !text-[12px] disabled:opacity-40"
                >
                  <ChevronLeft size={13} /> Anterior
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page >= totalPages - 1}
                  className="btn-secondary !py-1.5 !px-3 !text-[12px] disabled:opacity-40"
                >
                  Siguiente <ChevronRight size={13} />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}