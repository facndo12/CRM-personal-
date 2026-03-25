'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { teamApi } from '@/lib/api'
import { auth } from '@/lib/auth'
import type { Role } from '@/types'
import { UserPlus, Trash2, Shield, Loader2, ChevronDown, X } from 'lucide-react'
import clsx from 'clsx'

const ROLE_LABELS: Record<Role, string> = {
  owner:  'Owner',
  admin:  'Admin',
  member: 'Member',
  viewer: 'Viewer',
}

type Member = {
  id:       string
  role:     Role
  joinedAt: string
  user: {
    id:        string
    email:     string
    firstName: string
    lastName:  string | null
    avatar:    string | null
  }
}

export default function TeamPage() {
  const currentUser  = auth.get()
  const queryClient  = useQueryClient()
  const [showInvite, setShowInvite] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName:  '',
    email:     '',
    password:  '',
    role:      'member' as 'admin' | 'member' | 'viewer',
  })

  const { data: members = [], isLoading } = useQuery<Member[]>({
    queryKey: ['team'],
    queryFn:  () => teamApi.list().then((r) => r.data),
  })

  const inviteMutation = useMutation({
    mutationFn: () => teamApi.invite(form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['team'] })
      setShowInvite(false)
      setForm({ firstName: '', lastName: '', email: '', password: '', role: 'member' })
    },
  })

  const updateRoleMutation = useMutation({
    mutationFn: ({ id, role }: { id: string; role: 'admin' | 'member' | 'viewer' }) =>
      teamApi.updateRole(id, role),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['team'] }),
  })

  const removeMutation = useMutation({
    mutationFn: (id: string) => teamApi.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['team'] }),
  })

  const isOwner = currentUser?.role === 'owner'

  return (
    <div className="animate-fade-in p-4 md:p-8 max-w-[900px]">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="page-title">Equipo</h1>
          <p className="page-subtitle">
            {members.length} miembro{members.length !== 1 ? 's' : ''} en tu entorno de trabajo
          </p>
        </div>
        <button onClick={() => setShowInvite(true)} className="btn-primary">
          <UserPlus size={15} strokeWidth={2.5} />
          Invitar usuario
        </button>
      </div>

      {/* Invite form */}
      {showInvite && (
        <div className="animate-slide-up interactive-card mb-6 p-5" style={{ borderLeft: '2px solid var(--accent)' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="section-label flex items-center gap-1.5"><UserPlus size={11} /> Nuevo miembro</p>
            <button
              onClick={() => setShowInvite(false)}
              className="rounded p-1 transition-colors"
              style={{ color: 'var(--ink-tertiary)' }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              <X size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { key: 'firstName', placeholder: 'Nombre *' },
              { key: 'lastName',  placeholder: 'Apellido' },
              { key: 'email',     placeholder: 'Email corporativo *' },
              { key: 'password',  placeholder: 'Contraseña temporal * (mín. 8 caracteres)' },
            ].map(({ key, placeholder }) => (
              <input
                key={key}
                type={key === 'password' ? 'password' : 'text'}
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="ctrl-input"
              />
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3" style={{ borderTop: '1px solid var(--border-0)', paddingTop: '1rem' }}>
            <div className="relative">
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value as typeof form.role })}
                className="ctrl-input appearance-none pr-7 cursor-pointer"
                style={{ width: 'auto' }}
              >
                {isOwner && <option value="admin">Admin</option>}
                <option value="member">Member</option>
                <option value="viewer">Viewer</option>
              </select>
              <ChevronDown size={12} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--ink-tertiary)' }} />
            </div>
            <button
              onClick={() => inviteMutation.mutate()}
              disabled={!form.firstName || !form.email || !form.password || inviteMutation.isPending}
              className="btn-primary"
            >
              {inviteMutation.isPending && <Loader2 size={13} className="animate-spin" />}
              Enviar invitación
            </button>
            <button onClick={() => setShowInvite(false)} className="btn-secondary">Cancelar</button>
          </div>

          {inviteMutation.isError && (
            <div className="mt-3 rounded-lg px-4 py-3 text-[12px] font-medium animate-slide-up" style={{ background: 'var(--semantic-danger-bg)', color: 'var(--semantic-danger)', border: '1px solid rgba(220,38,38,0.15)' }}>
              Error al invitar. Verificá que el email sea válido y la contraseña tenga al menos 8 caracteres.
            </div>
          )}
        </div>
      )}

      {/* Member list */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-5 w-5 animate-spin rounded-full border-2" style={{ borderColor: 'var(--border-2)', borderTopColor: 'var(--accent)' }} />
        </div>
      ) : (
        <div className="space-y-1.5">
          {members.map((member) => {
            const isMe          = member.user.id === currentUser?.userId
            const isOwnerMember = member.role === 'owner'

            return (
              <div key={member.id} className="interactive-card flex items-center gap-4 px-5 py-3.5">
                {/* Avatar */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                  style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)' }}
                >
                  {member.user.firstName[0]}{member.user.lastName?.[0] ?? ''}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold tracking-tight" style={{ color: 'var(--ink-primary)' }}>
                      {member.user.firstName} {member.user.lastName}
                    </span>
                    {isMe && (
                      <span
                        className="rounded px-1.5 py-0.5 text-[10px] font-bold"
                        style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)', border: '1px solid rgba(124,58,237,0.15)' }}
                      >
                        vos
                      </span>
                    )}
                  </div>
                  <p className="text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>{member.user.email}</p>
                </div>

                {/* Role */}
                <div className="flex items-center gap-3">
                  {isOwner && !isOwnerMember && !isMe ? (
                    <div className="relative">
                      <select
                        value={member.role}
                        onChange={(e) =>
                          updateRoleMutation.mutate({
                            id:   member.id,
                            role: e.target.value as 'admin' | 'member' | 'viewer',
                          })
                        }
                        className="ctrl-input appearance-none pr-7 cursor-pointer text-[12px]"
                        style={{ width: 'auto' }}
                      >
                        <option value="admin">Admin</option>
                        <option value="member">Member</option>
                        <option value="viewer">Viewer</option>
                      </select>
                      <ChevronDown size={11} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--ink-tertiary)' }} />
                    </div>
                  ) : (
                    <span
                      className={clsx(
                        member.role === 'owner'  ? 'badge-owner' :
                        member.role === 'admin'  ? 'badge-admin' :
                        member.role === 'member' ? 'badge-member' : 'badge-viewer'
                      )}
                    >
                      {ROLE_LABELS[member.role]}
                    </span>
                  )}

                  {isOwner && !isOwnerMember && !isMe ? (
                    <button
                      onClick={() => {
                        if (confirm(`¿Eliminar a ${member.user.firstName} del workspace?`)) {
                          removeMutation.mutate(member.id)
                        }
                      }}
                      className="rounded-lg p-1.5 transition-colors"
                      style={{ color: 'var(--ink-tertiary)' }}
                      onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--semantic-danger)'; ;(e.currentTarget as HTMLElement).style.background = 'var(--semantic-danger-bg)' }}
                      onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-tertiary)'; ;(e.currentTarget as HTMLElement).style.background = 'transparent' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  ) : (
                    <div className="w-7" />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Permissions matrix */}
      <div
        className="mt-10 rounded-xl p-5"
        style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}
      >
        <p className="section-label mb-4 flex items-center gap-1.5"><Shield size={11} /> Matriz de Permisos</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { badge: 'badge-owner', label: 'Owner', desc: 'Control total. Puede borrar el equipo, invitar, revocar accesos y cambiar la configuración del negocio.' },
            { badge: 'badge-admin', label: 'Admin', desc: 'Gestiona contactos, deals, webhooks y pipelines. Puede invitar nuevos Members y Viewers.' },
            { badge: 'badge-member', label: 'Member', desc: 'Operario diario. Crea, edita y mueve Deals y Contactos. No maneja configuraciones maestras.' },
            { badge: 'badge-viewer', label: 'Viewer', desc: 'Solo lectura. Puede revisar auditorías, contactos y deals pero no puede modificar.' },
          ].map(({ badge, label, desc }) => (
            <div
              key={label}
              className="rounded-lg p-4"
              style={{ background: 'var(--surface-0)', border: '1px solid var(--border-1)' }}
            >
              <span className={clsx(badge, 'mb-2 inline-flex')}>{label}</span>
              <p className="text-[12px] leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
