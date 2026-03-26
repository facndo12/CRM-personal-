'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { teamApi } from '@/lib/api'
import { auth } from '@/lib/auth'
import type { Role } from '@/types'
import { UserPlus, Trash2, Shield, Loader2, ChevronDown, X } from 'lucide-react'
import clsx from 'clsx'
import { Avatar } from '@/components/ui/avatar'
import { RoleBadge } from '@/components/ui/badge'
import { Modal } from '@/components/ui/modal'
import { useToast } from '@/components/ui/toast'

const ROLE_LABELS: Record<Role, string> = {
  owner: 'Owner',
  admin: 'Admin',
  member: 'Member',
  viewer: 'Viewer',
}

type Member = {
  id: string
  role: Role
  joinedAt: string
  user: {
    id: string
    email: string
    firstName: string
    lastName: string | null
    avatar: string | null
  }
}

export default function TeamPage() {
  const currentUser = auth.get()
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const [showInvite, setShowInvite] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'member' as 'admin' | 'member' | 'viewer',
  })

  const { data: members = [], isLoading } = useQuery<Member[]>({
    queryKey: ['team'],
    queryFn: () => teamApi.list().then((r) => r.data),
  })

  const inviteMutation = useMutation({
    mutationFn: () => teamApi.invite(form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['team'] })
      setShowInvite(false)
      setForm({ firstName: '', lastName: '', email: '', password: '', role: 'member' })
      toast({ type: 'success', title: 'Usuario invitado', description: `${form.firstName} fue agregado al equipo.` })
    },
    onError: () => {
      toast({ type: 'error', title: 'Error al invitar', description: 'Verificá los datos e intentá de nuevo.' })
    },
  })

  const updateRoleMutation = useMutation({
    mutationFn: ({ id, role }: { id: string; role: 'admin' | 'member' | 'viewer' }) =>
      teamApi.updateRole(id, role),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['team'] })
      toast({ type: 'success', title: 'Rol actualizado' })
    },
    onError: () => {
      toast({ type: 'error', title: 'Error al actualizar rol' })
    },
  })

  const removeMutation = useMutation({
    mutationFn: (id: string) => teamApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['team'] })
      toast({ type: 'success', title: 'Miembro removido' })
    },
    onError: () => {
      toast({ type: 'error', title: 'Error al remover' })
    },
  })

  const isOwner = currentUser?.role === 'owner'

  return (
    <div className="animate-fade-in p-4 md:p-8 pb-24 md:pb-8">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="page-title">Equipo</h1>
            <p className="page-subtitle">{members.length} miembro{members.length !== 1 ? 's' : ''} en tu espacio</p>
          </div>
          <button onClick={() => setShowInvite(true)} className="btn-primary self-start sm:self-auto">
            <UserPlus size={15} strokeWidth={2.5} />
            Invitar usuario
          </button>
        </div>

        {/* Member list */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin" size={24} style={{ color: 'var(--accent)' }} />
          </div>
        ) : (
          <div className="space-y-3">
            {members.map((member) => {
              const isMe = member.user.id === currentUser?.userId
              const isOwnerMember = member.role === 'owner'

              return (
                <div key={member.id} className="interactive-card p-4 md:p-5">
                  <div className="flex items-start gap-3 md:gap-4">
                    <Avatar name={`${member.user.firstName}${member.user.lastName ? ' ' + member.user.lastName : ''}`} size="lg" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold" style={{ color: 'var(--ink-primary)' }}>
                          {member.user.firstName} {member.user.lastName}
                        </span>
                        {isMe && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)' }}>
                            vos
                          </span>
                        )}
                      </div>
                      <p className="text-xs truncate" style={{ color: 'var(--ink-tertiary)' }}>{member.user.email}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {isOwner && !isOwnerMember && !isMe ? (
                        <div className="relative">
                          <select
                            value={member.role}
                            onChange={(e) => updateRoleMutation.mutate({ id: member.id, role: e.target.value as 'admin' | 'member' | 'viewer' })}
                            className="appearance-none bg-transparent border rounded-lg px-3 py-1.5 pr-7 text-xs font-semibold cursor-pointer"
                            style={{ borderColor: 'var(--border-2)', color: 'var(--ink-secondary)' }}
                          >
                            <option value="admin">Admin</option>
                            <option value="member">Member</option>
                            <option value="viewer">Viewer</option>
                          </select>
                          <ChevronDown size={12} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" style={{ color: 'var(--ink-tertiary)' }} />
                        </div>
                      ) : (
                        <RoleBadge role={member.role} />
                      )}
                      {isOwner && !isOwnerMember && !isMe && (
                        <button
                          onClick={() => removeMutation.mutate(member.id)}
                          className="p-1.5 rounded-lg transition-colors"
                          style={{ color: 'var(--ink-tertiary)' }}
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Permissions */}
        <div className="mt-8 p-5 rounded-xl" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-0)' }}>
          <p className="section-label mb-4 flex items-center gap-1.5"><Shield size={11} /> Roles y Permisos</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { role: 'owner', label: 'Owner', desc: 'Control total del workspace. Puede eliminar el equipo, invitar y configurar todo.' },
              { role: 'admin', label: 'Admin', desc: 'Gestiona contactos, deals y pipelines. Puede invitar Members y Viewers.' },
              { role: 'member', label: 'Member', desc: 'Crea y edita deals y contactos. No maneja configuraciones.' },
              { role: 'viewer', label: 'Viewer', desc: 'Solo lectura. Puede ver pero no modificar datos.' },
            ].map(({ role, label, desc }) => (
              <div key={role} className="p-4 rounded-lg" style={{ background: 'var(--surface-0)', border: '1px solid var(--border-1)' }}>
                <RoleBadge role={role} />
                <p className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Invite Modal */}
      <Modal isOpen={showInvite} onClose={() => setShowInvite(false)} title="Invitar miembro" description="Agregá un nuevo miembro a tu workspace" size="md">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Nombre *"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="ctrl-input"
            />
            <input
              type="text"
              placeholder="Apellido"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="ctrl-input"
            />
          </div>
          <input
            type="email"
            placeholder="Email *"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="ctrl-input"
          />
          <input
            type="password"
            placeholder="Contraseña temporal * (mín. 8 caracteres)"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="ctrl-input"
          />
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value as typeof form.role })}
                className="ctrl-input appearance-none pr-8 cursor-pointer"
              >
                {isOwner && <option value="admin">Admin</option>}
                <option value="member">Member</option>
                <option value="viewer">Viewer</option>
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--ink-tertiary)' }} />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => inviteMutation.mutate()}
              disabled={!form.firstName || !form.email || !form.password || inviteMutation.isPending}
              className="btn-primary flex-1"
            >
              {inviteMutation.isPending ? <Loader2 size={14} className="animate-spin" /> : null}
              Invitar
            </button>
            <button onClick={() => setShowInvite(false)} className="btn-secondary">Cancelar</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
