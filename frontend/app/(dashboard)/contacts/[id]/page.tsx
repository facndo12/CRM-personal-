'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { contactsApi, activitiesApi, notesApi } from '@/lib/api'
import type { Contact, Activity, Note } from '@/types'
import { useRouter, useParams } from 'next/navigation'
import {
  ArrowLeft, Phone, Mail, Tag,
  Plus, Trash2, MessageSquare, Clock,
  PhoneCall, Calendar, CheckSquare, Send, StickyNote,
} from 'lucide-react'
import clsx from 'clsx'

const ACTIVITY_ICONS: Record<string, any> = {
  CALL:    PhoneCall,
  EMAIL:   Send,
  MEETING: Calendar,
  TASK:    CheckSquare,
  NOTE:    MessageSquare,
  OTHER:   Clock,
}

// Dot color for activity type indicator
const ACTIVITY_DOT: Record<string, string> = {
  CALL:    '#3b82f6',
  EMAIL:   '#8b5cf6',
  MEETING: '#10b981',
  TASK:    '#f59e0b',
  NOTE:    '#a1a1aa',
  OTHER:   '#a1a1aa',
}

const STATUS_LABEL: Record<string, string> = {
  LEAD:      'bg-blue-50 text-blue-700 border-blue-200',
  QUALIFIED: 'bg-violet-50 text-violet-700 border-violet-200',
  ACTIVE:    'bg-emerald-50 text-emerald-700 border-emerald-200',
  CUSTOMER:  'bg-green-50 text-green-700 border-green-200',
  CHURNED:   'bg-red-50 text-red-700 border-red-200',
}

export default function ContactDetailPage() {
  const { id }         = useParams<{ id: string }>()
  const router         = useRouter()
  const queryClient    = useQueryClient()
  const [tab, setTab]  = useState<'actividades' | 'notas'>('actividades')
  const [showActivityForm, setShowActivityForm] = useState(false)
  const [noteContent, setNoteContent]           = useState('')
  const [activityForm, setActivityForm]         = useState({
    type:        'CALL',
    title:       '',
    description: '',
  })

  const { data: contact, isLoading: contactLoading } = useQuery<Contact>({
    queryKey: ['contact', id],
    queryFn:  () => contactsApi.get(id).then((r) => r.data),
  })

  const { data: activities, isLoading: activitiesLoading } = useQuery<Activity[]>({
    queryKey: ['activities', id],
    queryFn:  () => activitiesApi.list(id).then((r) => r.data),
  })

  const { data: notes, isLoading: notesLoading } = useQuery<Note[]>({
    queryKey: ['notes', id],
    queryFn:  () => notesApi.list(id).then((r) => r.data),
  })

  const createActivity = useMutation({
    mutationFn: () => activitiesApi.create({
      contactId:   id,
      type:        activityForm.type,
      title:       activityForm.title,
      description: activityForm.description || undefined,
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities', id] })
      setShowActivityForm(false)
      setActivityForm({ type: 'CALL', title: '', description: '' })
    },
  })

  const deleteActivity = useMutation({
    mutationFn: (actId: string) => activitiesApi.delete(actId),
    onSuccess:  () => queryClient.invalidateQueries({ queryKey: ['activities', id] }),
  })

  const createNote = useMutation({
    mutationFn: () => notesApi.create({ contactId: id, content: noteContent }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes', id] })
      setNoteContent('')
    },
  })

  const deleteNote = useMutation({
    mutationFn: (noteId: string) => notesApi.delete(noteId),
    onSuccess:  () => queryClient.invalidateQueries({ queryKey: ['notes', id] }),
  })

  if (contactLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-5 w-5 animate-spin rounded-full border-2" style={{ borderColor: 'var(--border-2)', borderTopColor: 'var(--accent)' }} />
      </div>
    )
  }

  if (!contact) return null

  return (
    <div className="flex h-full flex-col overflow-hidden" style={{ background: 'var(--canvas)' }}>

      {/* ── Header ───────────────────────────────────────────────── */}
      <div
        className="z-10 flex shrink-0 items-center gap-4 px-6 py-4 animate-fade-in"
        style={{
          background:   'var(--surface-0)',
          borderBottom: '1px solid var(--border-1)',
        }}
      >
        <button
          onClick={() => router.push('/contacts')}
          className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
          style={{ color: 'var(--ink-tertiary)' }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.background = 'var(--accent-muted)'
            ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.background = 'transparent'
            ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-tertiary)'
          }}
        >
          <ArrowLeft size={18} strokeWidth={2.5} />
        </button>

        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold"
            style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)' }}
          >
            {contact.firstName[0]}{contact.lastName?.[0] ?? ''}
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight" style={{ color: 'var(--ink-primary)', letterSpacing: '-0.03em' }}>
              {contact.firstName} {contact.lastName}
            </h1>
            <div className="mt-0.5 flex items-center gap-2.5">
              <span
                className={clsx(
                  'rounded border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                  STATUS_LABEL[contact.status] ?? 'border-zinc-200 bg-zinc-50 text-zinc-600'
                )}
              >
                {contact.status}
              </span>
              <span className="flex items-center gap-1 text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>
                Score:{' '}
                <span
                  className="font-bold"
                  style={{
                    color: contact.score >= 70 ? 'var(--semantic-success)' :
                           contact.score >= 40 ? 'var(--semantic-warning)' : 'var(--ink-tertiary)',
                  }}
                >
                  {contact.score}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden animate-slide-up">

        {/* ── Left panel — contact info ──────────────────────────── */}
        <div
          className="w-72 shrink-0 overflow-y-auto p-5"
          style={{
            background:  'var(--surface-0)',
            borderRight: '1px solid var(--border-1)',
          }}
        >
          <p className="section-label mb-4">Detalles del contacto</p>

          <div className="space-y-3">
            {contact.email && (
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: 'var(--surface-2)', color: 'var(--ink-tertiary)', border: '1px solid var(--border-0)' }}
                >
                  <Mail size={13} strokeWidth={2.5} />
                </div>
                <span className="truncate text-[13px] font-medium" style={{ color: 'var(--ink-secondary)' }}>
                  {contact.email}
                </span>
              </div>
            )}

            {contact.phone && (
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: 'var(--surface-2)', color: 'var(--ink-tertiary)', border: '1px solid var(--border-0)' }}
                >
                  <Phone size={13} strokeWidth={2.5} />
                </div>
                <span className="text-[13px] font-medium" style={{ color: 'var(--ink-secondary)' }}>
                  {contact.phone}
                </span>
              </div>
            )}

            {contact.tags.length > 0 && (
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: 'var(--surface-2)', color: 'var(--ink-tertiary)', border: '1px solid var(--border-0)' }}
                >
                  <Tag size={13} strokeWidth={2.5} />
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {contact.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)', border: '1px solid var(--border-1)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 space-y-5" style={{ borderTop: '1px solid var(--border-0)', paddingTop: '1.25rem' }}>
            <div>
              <p className="section-label mb-2">Fuente</p>
              <span
                className="inline-block rounded-md px-3 py-1.5 text-[12px] font-semibold"
                style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)', border: '1px solid var(--border-0)' }}
              >
                {contact.source}
              </span>
            </div>
            <div>
              <p className="section-label mb-1">Registro</p>
              <span className="text-[13px] font-medium" style={{ color: 'var(--ink-secondary)' }}>
                {new Date(contact.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* ── Right panel — activities + notes ─────────────────────── */}
        <div className="flex flex-1 flex-col min-h-0" style={{ background: 'var(--canvas)' }}>

          {/* Tabs */}
          <div
            className="flex shrink-0 px-6 pt-1"
            style={{ background: 'var(--surface-0)', borderBottom: '1px solid var(--border-1)' }}
          >
            {(['actividades', 'notas'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-4 py-3.5 text-[12px] font-bold uppercase tracking-wider transition-all"
                style={{
                  color:        tab === t ? 'var(--accent)'      : 'var(--ink-tertiary)',
                  borderBottom: tab === t ? '2px solid var(--accent)' : '2px solid transparent',
                  marginBottom: '-1px',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="mx-auto max-w-2xl">

              {/* ── Activities tab ─────────────────────────────────── */}
              {tab === 'actividades' && (
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <p className="section-label">
                      {activities?.length ?? 0} actividad{(activities?.length ?? 0) !== 1 ? 'es' : ''}
                    </p>
                    <button onClick={() => setShowActivityForm(true)} className="btn-primary">
                      <Plus size={13} strokeWidth={2.5} /> Nueva actividad
                    </button>
                  </div>

                  {showActivityForm && (
                    <div
                      className="interactive-card mb-5 p-5 animate-slide-up"
                      style={{ borderLeft: '2px solid var(--accent)' }}
                    >
                      <div className="space-y-3">
                        <select
                          value={activityForm.type}
                          onChange={(e) => setActivityForm({ ...activityForm, type: e.target.value })}
                          className="ctrl-input"
                        >
                          {['CALL', 'EMAIL', 'MEETING', 'TASK', 'NOTE', 'OTHER'].map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <input
                          value={activityForm.title}
                          onChange={(e) => setActivityForm({ ...activityForm, title: e.target.value })}
                          placeholder="Título de la actividad *"
                          className="ctrl-input"
                        />
                        <textarea
                          value={activityForm.description}
                          onChange={(e) => setActivityForm({ ...activityForm, description: e.target.value })}
                          placeholder="Descripción (opcional)"
                          rows={3}
                          className="ctrl-input resize-none"
                        />
                      </div>
                      <div
                        className="mt-4 flex gap-2 pt-4"
                        style={{ borderTop: '1px solid var(--border-0)' }}
                      >
                        <button
                          onClick={() => createActivity.mutate()}
                          disabled={!activityForm.title || createActivity.isPending}
                          className="btn-primary"
                        >
                          {createActivity.isPending && <div className="h-3 w-3 animate-spin rounded-full border border-white/40 border-t-white" />}
                          Guardar
                        </button>
                        <button onClick={() => setShowActivityForm(false)} className="btn-secondary">
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}

                  {activitiesLoading ? (
                    <div className="flex items-center justify-center py-16">
                      <div className="h-5 w-5 animate-spin rounded-full border-2" style={{ borderColor: 'var(--border-2)', borderTopColor: 'var(--accent)' }} />
                    </div>
                  ) : activities?.length === 0 ? (
                    <div
                      className="flex flex-col items-center justify-center rounded-xl py-20 text-center"
                      style={{ border: '1px dashed var(--border-2)' }}
                    >
                      <Clock size={32} strokeWidth={1.25} className="mb-2" style={{ color: 'var(--ink-muted)' }} />
                      <p className="text-sm font-medium" style={{ color: 'var(--ink-secondary)' }}>Sin actividades registradas</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {activities?.map((activity) => {
                        const Icon = ACTIVITY_ICONS[activity.type] ?? Clock
                        return (
                          <div
                            key={activity.id}
                            className="interactive-card group flex items-start gap-3 p-4"
                            style={{ borderLeft: `2px solid ${ACTIVITY_DOT[activity.type] ?? 'var(--border-1)'}` }}
                          >
                            <Icon size={14} className="mt-0.5 shrink-0" style={{ color: ACTIVITY_DOT[activity.type] ?? 'var(--ink-tertiary)' }} />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold tracking-tight" style={{ color: 'var(--ink-primary)' }}>
                                {activity.title}
                              </p>
                              {activity.description && (
                                <p className="mt-1 text-[12px] leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                                  {activity.description}
                                </p>
                              )}
                              <p className="mt-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink-muted)' }}>
                                {new Date(activity.createdAt).toLocaleDateString()} · {new Date(activity.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                if (confirm('¿Eliminar esta actividad?')) deleteActivity.mutate(activity.id)
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
                              <Trash2 size={13} strokeWidth={2} />
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* ── Notes tab ──────────────────────────────────────── */}
              {tab === 'notas' && (
                <div>
                  <div
                    className="interactive-card mb-5 p-5"
                    style={{ borderLeft: '2px solid #f59e0b' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <StickyNote size={12} style={{ color: '#f59e0b' }} />
                      <p className="section-label" style={{ color: '#f59e0b' }}>Nueva nota privada</p>
                    </div>
                    <textarea
                      value={noteContent}
                      onChange={(e) => setNoteContent(e.target.value)}
                      placeholder="Escribí una nota interna sobre este contacto..."
                      rows={3}
                      className="ctrl-input resize-none"
                    />
                    <div
                      className="mt-4 flex justify-end pt-4"
                      style={{ borderTop: '1px solid var(--border-0)' }}
                    >
                      <button
                        onClick={() => createNote.mutate()}
                        disabled={!noteContent.trim() || createNote.isPending}
                        className="flex items-center gap-2 rounded-lg px-5 py-2 text-[13px] font-bold text-white transition-colors disabled:opacity-50"
                        style={{ background: '#f59e0b' }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = '#d97706'}
                        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = '#f59e0b'}
                      >
                        {createNote.isPending && <div className="h-3 w-3 animate-spin rounded-full border border-white/40 border-t-white" />}
                        Guardar Nota
                      </button>
                    </div>
                  </div>

                  {notesLoading ? (
                    <div className="flex items-center justify-center py-16">
                      <div className="h-5 w-5 animate-spin rounded-full border-2" style={{ borderColor: 'var(--border-2)', borderTopColor: '#f59e0b' }} />
                    </div>
                  ) : notes?.length === 0 ? (
                    <div
                      className="flex flex-col items-center justify-center rounded-xl py-20 text-center"
                      style={{ border: '1px dashed var(--border-2)' }}
                    >
                      <StickyNote size={32} strokeWidth={1.25} className="mb-2" style={{ color: 'var(--ink-muted)' }} />
                      <p className="text-sm font-medium" style={{ color: 'var(--ink-secondary)' }}>Sin notas para este contacto</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {notes?.map((note) => (
                        <div
                          key={note.id}
                          className="interactive-card group relative p-5"
                          style={{ borderLeft: '2px solid rgba(245,158,11,0.4)' }}
                        >
                          {/* Sticky tab accent */}
                          <div
                            className="absolute right-8 top-0 h-3 w-8 rounded-b-md"
                            style={{ background: 'rgba(245,158,11,0.2)' }}
                          />
                          <div className="flex items-start justify-between gap-4">
                            <p
                              className="flex-1 whitespace-pre-wrap text-[13px] font-medium leading-relaxed"
                              style={{ color: 'var(--ink-primary)' }}
                            >
                              {note.content}
                            </p>
                            <button
                              onClick={() => { if (confirm('¿Borrar nota?')) deleteNote.mutate(note.id) }}
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
                              <Trash2 size={13} strokeWidth={2} />
                            </button>
                          </div>
                          <p
                            className="mt-3 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
                            style={{ color: 'var(--ink-muted)' }}
                          >
                            <Clock size={10} strokeWidth={3} />
                            {new Date(note.createdAt).toLocaleDateString()} · {new Date(note.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}