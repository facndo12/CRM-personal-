'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { contactsApi, activitiesApi, notesApi } from '@/lib/api'
import type { Contact, Activity, Note } from '@/types'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft, Phone, Mail, Tag, Loader2,
  Plus, Trash2, MessageSquare, Clock,
  PhoneCall, Calendar, CheckSquare, Send,
} from 'lucide-react'
import clsx from 'clsx'

// ─── Ícono por tipo de actividad ──────────────────────────────────
const ACTIVITY_ICONS: Record<string, any> = {
  CALL:    PhoneCall,
  EMAIL:   Send,
  MEETING: Calendar,
  TASK:    CheckSquare,
  NOTE:    MessageSquare,
  OTHER:   Clock,
}

const ACTIVITY_COLORS: Record<string, string> = {
  CALL:    'text-blue-400 bg-blue-400/10',
  EMAIL:   'text-purple-400 bg-purple-400/10',
  MEETING: 'text-green-400 bg-green-400/10',
  TASK:    'text-yellow-400 bg-yellow-400/10',
  NOTE:    'text-gray-400 bg-gray-400/10',
  OTHER:   'text-gray-400 bg-gray-400/10',
}

const STATUS_COLORS: Record<string, string> = {
  LEAD:      'bg-blue-500/10 text-blue-400 border-blue-500/20',
  QUALIFIED: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  ACTIVE:    'bg-green-500/10 text-green-400 border-green-500/20',
  CUSTOMER:  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  CHURNED:   'bg-red-500/10 text-red-400 border-red-500/20',
}

export default function ContactDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = require('react').use(params)
  const router       = useRouter()
  const queryClient  = useQueryClient()
  const [tab, setTab]               = useState<'actividades' | 'notas'>('actividades')
  const [showActivityForm, setShowActivityForm] = useState(false)
  const [noteContent, setNoteContent]           = useState('')
  const [activityForm, setActivityForm] = useState({
    type:        'CALL',
    title:       '',
    description: '',
  })

  // ─── Queries ─────────────────────────────────────────────────
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

  // ─── Mutaciones ───────────────────────────────────────────────
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
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-indigo-500" size={32} />
      </div>
    )
  }

  if (!contact) return null

  return (
    <div className="flex flex-col h-full overflow-auto">

      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-800 flex items-center gap-4 shrink-0">
        <button
          onClick={() => router.push('/contacts')}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-medium">
            {contact.firstName[0]}{contact.lastName?.[0] ?? ''}
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">
              {contact.firstName} {contact.lastName}
            </h1>
            <div className="flex items-center gap-2">
              <span className={clsx(
                'text-xs px-2 py-0.5 rounded-full border',
                STATUS_COLORS[contact.status] ?? 'bg-gray-500/10 text-gray-400'
              )}>
                {contact.status}
              </span>
              <span className="text-xs text-gray-500">
                Score: <span className={clsx(
                  'font-medium',
                  contact.score >= 70 ? 'text-green-400' :
                  contact.score >= 40 ? 'text-yellow-400' : 'text-gray-400'
                )}>{contact.score}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">

        {/* Panel izquierdo — info del contacto */}
        <div className="w-72 border-r border-gray-800 p-5 overflow-auto shrink-0">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
            Información
          </h3>

          <div className="space-y-3">
            {contact.email && (
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gray-500 shrink-0" />
                <span className="text-sm text-gray-300 truncate">{contact.email}</span>
              </div>
            )}
            {contact.phone && (
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gray-500 shrink-0" />
                <span className="text-sm text-gray-300">{contact.phone}</span>
              </div>
            )}
            {contact.tags.length > 0 && (
              <div className="flex items-start gap-2">
                <Tag size={14} className="text-gray-500 shrink-0 mt-0.5" />
                <div className="flex flex-wrap gap-1">
                  {contact.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              Fuente
            </h3>
            <span className="text-sm text-gray-300">{contact.source}</span>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              Creado
            </h3>
            <span className="text-sm text-gray-300">
              {new Date(contact.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Panel derecho — actividades y notas */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Tabs */}
          <div className="flex border-b border-gray-800 px-5 shrink-0">
            {(['actividades', 'notas'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={clsx(
                  'px-4 py-3 text-sm font-medium capitalize transition-colors border-b-2 -mb-px',
                  tab === t
                    ? 'text-white border-indigo-500'
                    : 'text-gray-400 border-transparent hover:text-white'
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Contenido del tab */}
          <div className="flex-1 overflow-auto p-5">

            {/* Tab actividades */}
            {tab === 'actividades' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-gray-400">
                    {activities?.length ?? 0} actividades
                  </p>
                  <button
                    onClick={() => setShowActivityForm(true)}
                    className="flex items-center gap-1.5 text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Plus size={12} /> Nueva actividad
                  </button>
                </div>

                {/* Formulario nueva actividad */}
                {showActivityForm && (
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-4">
                    <div className="space-y-3">
                      <select
                        value={activityForm.type}
                        onChange={(e) => setActivityForm({ ...activityForm, type: e.target.value })}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        {['CALL', 'EMAIL', 'MEETING', 'TASK', 'NOTE', 'OTHER'].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <input
                        value={activityForm.title}
                        onChange={(e) => setActivityForm({ ...activityForm, title: e.target.value })}
                        placeholder="Título *"
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
                      />
                      <textarea
                        value={activityForm.description}
                        onChange={(e) => setActivityForm({ ...activityForm, description: e.target.value })}
                        placeholder="Descripción (opcional)"
                        rows={2}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 resize-none"
                      />
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => createActivity.mutate()}
                        disabled={!activityForm.title || createActivity.isPending}
                        className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5"
                      >
                        {createActivity.isPending && <Loader2 size={12} className="animate-spin" />}
                        Guardar
                      </button>
                      <button
                        onClick={() => setShowActivityForm(false)}
                        className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg text-xs"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                )}

                {/* Lista actividades */}
                {activitiesLoading ? (
                  <Loader2 className="animate-spin text-indigo-500 mx-auto" size={24} />
                ) : activities?.length === 0 ? (
                  <p className="text-center text-gray-500 text-sm py-10">
                    No hay actividades todavía
                  </p>
                ) : (
                  <div className="space-y-2">
                    {activities?.map((activity) => {
                      const Icon  = ACTIVITY_ICONS[activity.type] ?? Clock
                      const color = ACTIVITY_COLORS[activity.type] ?? ACTIVITY_COLORS.OTHER
                      return (
                        <div
                          key={activity.id}
                          className="bg-gray-900 border border-gray-800 rounded-lg p-3 flex items-start gap-3"
                        >
                          <div className={clsx('w-7 h-7 rounded-lg flex items-center justify-center shrink-0', color)}>
                            <Icon size={14} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-medium">{activity.title}</p>
                            {activity.description && (
                              <p className="text-gray-400 text-xs mt-0.5">{activity.description}</p>
                            )}
                            <p className="text-gray-600 text-xs mt-1">
                              {new Date(activity.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <button
                            onClick={() => deleteActivity.mutate(activity.id)}
                            className="text-gray-600 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Tab notas */}
            {tab === 'notas' && (
              <div>
                {/* Input nueva nota */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-4">
                  <textarea
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Escribí una nota..."
                    rows={3}
                    className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-500 resize-none"
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => createNote.mutate()}
                      disabled={!noteContent.trim() || createNote.isPending}
                      className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5"
                    >
                      {createNote.isPending && <Loader2 size={12} className="animate-spin" />}
                      Guardar nota
                    </button>
                  </div>
                </div>

                {/* Lista notas */}
                {notesLoading ? (
                  <Loader2 className="animate-spin text-indigo-500 mx-auto" size={24} />
                ) : notes?.length === 0 ? (
                  <p className="text-center text-gray-500 text-sm py-10">
                    No hay notas todavía
                  </p>
                ) : (
                  <div className="space-y-2">
                    {notes?.map((note) => (
                      <div
                        key={note.id}
                        className="bg-gray-900 border border-gray-800 rounded-lg p-4"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-gray-300 text-sm whitespace-pre-wrap flex-1">
                            {note.content}
                          </p>
                          <button
                            onClick={() => deleteNote.mutate(note.id)}
                            className="text-gray-600 hover:text-red-400 transition-colors shrink-0"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                        <p className="text-gray-600 text-xs mt-2">
                          {new Date(note.createdAt).toLocaleDateString()}
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
  )
}