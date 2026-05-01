'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Inbox,
  Loader2,
  MessageSquareText,
  PlugZap,
  Settings2,
  ShieldCheck,
  Wifi,
  WifiOff,
} from 'lucide-react'

import { inboxApi } from '@/lib/api'
import { auth } from '@/lib/auth'
import type { InboxConnection } from '@/types'

const STATUS_COPY: Record<InboxConnection['status'], { label: string; description: string }> = {
  connected: {
    label: 'Conectado',
    description: 'WhatsApp esta listo para recibir conversaciones y enviar respuestas desde el inbox.',
  },
  disconnected: {
    label: 'Desconectado',
    description: 'Todavia falta conectar un numero de WhatsApp para empezar a operar chats.',
  },
  error: {
    label: 'Con error',
    description: 'La conexion existe, pero necesita revision antes de usarla en produccion.',
  },
}

function formatDate(value?: string | null) {
  if (!value) return 'Sin sincronizar'
  return new Intl.DateTimeFormat('es-AR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}

function StatusPill({ status }: { status: InboxConnection['status'] }) {
  const copy = STATUS_COPY[status]

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.18em]',
        status === 'connected' && 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-200',
        status === 'disconnected' && 'border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-600/70 dark:bg-slate-800/80 dark:text-slate-300',
        status === 'error' && 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-400/30 dark:bg-rose-500/15 dark:text-rose-200'
      )}
    >
      {status === 'connected' ? <Wifi size={13} /> : status === 'error' ? <AlertTriangle size={13} /> : <WifiOff size={13} />}
      {copy.label}
    </span>
  )
}

export default function ChatsPage() {
  const [user, setUser] = useState<ReturnType<typeof auth.get>>(null)

  useEffect(() => {
    setUser(auth.get())
  }, [])

  const canManage = user?.role === 'owner' || user?.role === 'admin'

  const connectionsQuery = useQuery<InboxConnection[]>({
    queryKey: ['chats', 'whatsapp-connections'],
    queryFn: () => inboxApi.listConnections().then((response) => response.data),
    enabled: Boolean(user),
  })

  const whatsappConnections = useMemo(
    () => (connectionsQuery.data ?? []).filter((connection) => connection.channel === 'whatsapp'),
    [connectionsQuery.data]
  )
  const activeConnection = whatsappConnections.find((connection) => connection.status === 'connected') ?? null
  const latestConnection = activeConnection ?? whatsappConnections[0] ?? null
  const status = latestConnection?.status ?? 'disconnected'
  const statusCopy = STATUS_COPY[status]

  return (
    <div className="flex min-h-full flex-col gap-6 p-6">
      <section className="interactive-card overflow-hidden">
        <div className="grid gap-6 bg-[linear-gradient(135deg,_rgba(236,253,245,0.88),_rgba(255,255,255,0.96)),radial-gradient(circle_at_top_right,_rgba(34,197,94,0.18),_transparent_32%)] p-6 dark:bg-[linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(30,41,59,0.94)),radial-gradient(circle_at_top_right,_rgba(34,197,94,0.16),_transparent_30%)] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-emerald-700 shadow-sm dark:border-emerald-400/30 dark:bg-slate-900/40 dark:text-emerald-200">
              <MessageSquareText size={14} />
              WhatsApp Chats
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">Conecta WhatsApp y atiende conversaciones</h1>
            <p className="mt-2 max-w-3xl text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
              Esta ruta mantiene el acceso a chats, pero usa el flujo nuevo: los numeros se conectan en Canales y los mensajes se responden desde el Inbox operativo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm dark:border-slate-500/60 dark:bg-slate-900/35">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Estado WhatsApp</p>
            <div className="mt-3">
              <StatusPill status={status} />
            </div>
            <p className="mt-3 max-w-xs text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
              {statusCopy.description}
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <section className="interactive-card p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-50">Conexion de WhatsApp</h2>
              <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                Para conectar un numero necesitas permisos de owner o admin. Cuando la conexion quede lista, las conversaciones entran por `/inbox`.
              </p>
            </div>
            {connectionsQuery.isFetching && <Loader2 className="animate-spin text-primary-600" size={22} />}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/45">
              <ShieldCheck className="text-emerald-600 dark:text-emerald-300" size={22} />
              <p className="mt-3 text-sm font-black text-slate-900 dark:text-slate-50">Canales</p>
              <p className="mt-1 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                Alta y registro oficial del numero.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/45">
              <Inbox className="text-sky-600 dark:text-sky-300" size={22} />
              <p className="mt-3 text-sm font-black text-slate-900 dark:text-slate-50">Inbox</p>
              <p className="mt-1 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                Lectura, refresco y respuesta de conversaciones.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/45">
              <CheckCircle2 className="text-violet-600 dark:text-violet-300" size={22} />
              <p className="mt-3 text-sm font-black text-slate-900 dark:text-slate-50">CRM</p>
              <p className="mt-1 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                Conversaciones vinculadas a contactos.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/channels"
              className={clsx(
                'btn-primary inline-flex items-center gap-2',
                !canManage && 'pointer-events-none opacity-50'
              )}
              aria-disabled={!canManage}
            >
              <PlugZap size={17} />
              {latestConnection ? 'Configurar WhatsApp' : 'Conectar WhatsApp'}
            </Link>
            <Link href="/inbox" className="btn-secondary inline-flex items-center gap-2">
              <Inbox size={17} />
              Abrir inbox
            </Link>
          </div>

          {!canManage && (
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900 dark:border-amber-400/30 dark:bg-amber-500/15 dark:text-amber-200">
              Tu rol puede ver chats si tiene acceso, pero no puede conectar numeros. Pedile a un owner/admin que lo haga desde Canales.
            </div>
          )}
        </section>

        <aside className="interactive-card p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-slate-50">Numeros</h2>
            <Link href="/channels" className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-primary-600 dark:text-slate-300 dark:hover:bg-slate-800">
              <Settings2 size={18} />
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {connectionsQuery.isLoading ? (
              <div className="flex items-center justify-center py-10">
                <Loader2 className="animate-spin text-primary-600" size={24} />
              </div>
            ) : whatsappConnections.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 text-center dark:border-slate-700 dark:bg-slate-900/45">
                <WifiOff className="mx-auto text-slate-400" size={28} />
                <p className="mt-3 text-sm font-black text-slate-900 dark:text-slate-50">Sin numeros conectados</p>
                <p className="mt-1 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                  Empeza conectando WhatsApp desde Canales.
                </p>
              </div>
            ) : (
              whatsappConnections.map((connection) => (
                <div key={connection.id} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700/70 dark:bg-slate-900/45">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black text-slate-900 dark:text-slate-50">{connection.externalAccountLabel || connection.name}</p>
                      <p className="mt-1 truncate text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        {connection.externalAccountId}
                      </p>
                    </div>
                    <StatusPill status={connection.status} />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Ult. sync {formatDate(connection.lastSyncedAt)}
                  </p>
                </div>
              ))
            )}
          </div>

          <Link href="/channels" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700 dark:border-slate-700 dark:bg-slate-900/45 dark:text-slate-200 dark:hover:border-slate-500">
            Gestionar canales
            <ArrowRight size={16} />
          </Link>
        </aside>
      </div>
    </div>
  )
}
