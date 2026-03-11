'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { teamApi } from '@/lib/api'
import { auth } from '@/lib/auth'
import type { Role } from '@/types'
import { UserPlus, Trash2, Shield, Loader2, ChevronDown } from 'lucide-react'
import clsx from 'clsx'

const ROLE_LABELS: Record<Role, string> = {
  owner:  'Owner',
  admin:  'Admin',
  member: 'Member',
  viewer: 'Viewer',
}

const ROLE_COLORS: Record<Role, string> = {
  owner:  'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  admin:  'bg-purple-500/10 text-purple-400 border-purple-500/20',
  member: 'bg-blue-500/10   text-blue-400   border-blue-500/20',
  viewer: 'bg-gray-500/10   text-gray-400   border-gray-500/20',
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
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Equipo</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {members.length} miembro{members.length !== 1 ? 's' : ''} en el workspace
          </p>
        </div>
        <button
          onClick={() => setShowInvite(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <UserPlus size={16} />
          Invitar miembro
        </button>
      </div>

      {/* Formulario de invitación */}
      {showInvite && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">
          <h3 className="text-white font-medium mb-4 flex items-center gap-2">
            <UserPlus size={16} className="text-indigo-400" />
            Invitar nuevo miembro
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {[
              { key: 'firstName', placeholder: 'Nombre *' },
              { key: 'lastName',  placeholder: 'Apellido'  },
              { key: 'email',     placeholder: 'Email *'   },
              { key: 'password',  placeholder: 'Contraseña temporal * (mín. 8 caracteres)' },
            ].map(({ key, placeholder }) => (
              <input
                key={key}
                type={key === 'password' ? 'password' : 'text'}
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
              />
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="relative">
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value as typeof form.role })}
                className="appearance-none bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {isOwner && <option value="admin">Admin</option>}
                <option value="member">Member</option>
                <option value="viewer">Viewer</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            <button
              onClick={() => inviteMutation.mutate()}
              disabled={!form.firstName || !form.email || !form.password || inviteMutation.isPending}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
            >
              {inviteMutation.isPending && <Loader2 size={14} className="animate-spin" />}
              Invitar
            </button>
            <button
              onClick={() => setShowInvite(false)}
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm"
            >
              Cancelar
            </button>
          </div>

          {inviteMutation.isError && (
            <p className="text-red-400 text-sm mt-3">
              Error al invitar. Verificá que el email sea válido y la contraseña tenga al menos 8 caracteres.
            </p>
          )}
        </div>
      )}

      {/* Lista de miembros */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-indigo-500" size={32} />
        </div>
      ) : (
        <div className="space-y-2">
          {members.map((member) => {
            const isMe    = member.user.id === currentUser?.userId
            const isOwnerMember = member.role === 'owner'

            return (
              <div
                key={member.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center gap-4"
              >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-medium text-sm shrink-0">
                  {member.user.firstName[0]}{member.user.lastName?.[0] ?? ''}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium text-sm">
                      {member.user.firstName} {member.user.lastName}
                    </span>
                    {isMe && (
                      <span className="text-xs text-gray-500">(vos)</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs mt-0.5">{member.user.email}</p>
                </div>

                {/* Rol — editable si no es owner y el usuario actual es owner */}
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
                        className="appearance-none bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-1.5 pr-7 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="admin">Admin</option>
                        <option value="member">Member</option>
                        <option value="viewer">Viewer</option>
                      </select>
                      <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  ) : (
                    <span className={clsx(
                      'text-xs px-2 py-1 rounded-full border flex items-center gap-1',
                      ROLE_COLORS[member.role]
                    )}>
                      {isOwnerMember && <Shield size={10} />}
                      {ROLE_LABELS[member.role]}
                    </span>
                  )}

                  {/* Botón de eliminar — solo owner, no a sí mismo ni a otros owners */}
                  {isOwner && !isOwnerMember && !isMe && (
                    <button
                      onClick={() => {
                        if (confirm(`¿Eliminar a ${member.user.firstName} del workspace?`)) {
                          removeMutation.mutate(member.id)
                        }
                      }}
                      className="text-gray-600 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Leyenda de roles */}
      <div className="mt-8 bg-gray-900 border border-gray-800 rounded-xl p-4">
        <p className="text-gray-400 text-xs font-medium mb-3 uppercase tracking-wider">Permisos por rol</p>
        <div className="grid grid-cols-2 gap-3 text-xs text-gray-400">
          <div>
            <span className="text-yellow-400 font-medium">Owner</span> — Control total. Puede invitar y eliminar miembros.
          </div>
          <div>
            <span className="text-purple-400 font-medium">Admin</span> — Gestó contactos, deals, webhooks y pipelines. Puede invitar members y viewers.
          </div>
          <div>
            <span className="text-blue-400 font-medium">Member</span> — Puede crear y editar contactos y deals. No puede borrar ni configurar webhooks.
          </div>
          <div>
            <span className="text-gray-300 font-medium">Viewer</span> — Solo lectura. No puede crear ni modificar nada.
          </div>
        </div>
      </div>
    </div>
  )
}
