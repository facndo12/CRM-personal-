'use client'

import Link from 'next/link'
import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { resolveApiAssetUrl, whatsappApi } from '@/lib/api'
import { auth } from '@/lib/auth'
import type {
  WhatsAppChat,
  WhatsAppMessage,
  WhatsAppMessagesPayload,
  WhatsAppSessionSnapshot,
} from '@/types'
import { useToast } from '@/components/ui/toast'
import {
  AlertTriangle, ArrowUpRight, ChevronDown, ChevronUp, Clock3, Link2,
  Loader2, MessageSquareText, MessagesSquare, Phone, Plug2, RefreshCcw,
  Search, Send, Settings2, Smartphone, Unplug, Users, Wifi, WifiOff,
} from 'lucide-react'
import clsx from 'clsx'

type ChatFilter = 'all' | 'linked' | 'unread'

const STATUS_STYLES: Record<string, { label: string; bg: string; color: string }> = {
  CONNECTED: { label: 'Conectado', bg: 'var(--semantic-success-bg)', color: 'var(--semantic-success)' },
  CONNECTING: { label: 'Conectando', bg: 'var(--gold-muted)', color: 'var(--gold)' },
  PAIRING: { label: 'Esperando vinculacion', bg: 'var(--accent-muted)', color: 'var(--accent)' },
  ERROR: { label: 'Con error', bg: 'var(--semantic-danger-bg)', color: 'var(--semantic-danger)' },
  DISCONNECTED: { label: 'Desconectado', bg: 'var(--surface-2)', color: 'var(--ink-secondary)' },
}

function toErrorMessage(error: any) {
  return error?.response?.data?.message ?? error?.response?.data?.error ?? error?.message ?? 'Ocurrio un error inesperado.'
}

function formatChatTimestamp(value?: string | null) {
  if (!value) return 'Sin actividad'
  const date = new Date(value)
  const now = new Date()
  return date.toDateString() === now.toDateString()
    ? new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit' }).format(date)
    : new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: '2-digit' }).format(date)
}

function formatDateTime(value?: string | null) {
  if (!value) return 'Sin dato'
  return new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(value))
}

function formatMessageTime(value: string) {
  return new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit' }).format(new Date(value))
}

function formatMessageDay(value: string) {
  return new Intl.DateTimeFormat('es-AR', { weekday: 'short', day: '2-digit', month: 'short' }).format(new Date(value))
}

function pairingCodeLabel(code?: string | null) {
  if (!code) return null
  return code.match(/.{1,4}/g)?.join(' ') ?? code
}

function chatTitle(chat?: WhatsAppChat | null) {
  if (!chat) return 'Sin chat'
  if (chat.displayName && chat.displayName !== chat.jid) return chat.displayName
  if (chat.contactName) return chat.contactName
  return chat.phoneNumber ?? chat.jid
}

function chatSecondary(chat?: WhatsAppChat | null) {
  if (!chat) return 'Sin contexto'
  if (chat.contactName) return chat.phoneNumber ?? chat.displayName ?? chat.jid
  if (chat.displayName && chat.displayName !== chat.jid) return chat.phoneNumber ?? chat.jid
  return chat.phoneNumber ?? chat.jid
}

function chatInitial(chat?: WhatsAppChat | null) {
  return chatTitle(chat).slice(0, 1).toUpperCase()
}

function messageSenderName(message: WhatsAppMessage, chat?: WhatsAppChat | null) {
  if (message.fromMe) return 'Tu'
  return message.pushName ?? chat?.displayName ?? chat?.contactName ?? chat?.phoneNumber ?? 'Contacto'
}

function formatMediaDuration(value?: number | null) {
  if (!value || value <= 0) return null
  const minutes = Math.floor(value / 60)
  const seconds = value % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function quotedPreview(message: WhatsAppMessage) {
  if (message.quotedText?.trim()) return message.quotedText.trim()

  switch (message.quotedMessageType) {
    case 'image':
      return '[Imagen]'
    case 'video':
      return '[Video]'
    case 'audio':
      return '[Audio]'
    case 'document':
      return '[Documento]'
    case 'sticker':
      return '[Sticker]'
    default:
      return 'Mensaje citado'
  }
}

function formatOutgoingStatus(status?: string | null) {
  switch ((status ?? '').toLowerCase()) {
    case 'sending':
      return 'Enviando'
    case 'delivered':
      return 'Entregado'
    case 'read':
      return 'Leido'
    case 'error':
      return 'Error'
    case 'sent':
    default:
      return 'Enviado'
  }
}

function QuotedMessagePreview({ message, outgoing }: { message: WhatsAppMessage; outgoing: boolean }) {
  if (!message.quotedMessageId && !message.quotedText && !message.quotedMessageType) {
    return null
  }

  return (
    <div
      className="rounded-2xl border-l-[3px] px-3 py-2"
      style={{
        background: outgoing ? 'rgba(255,255,255,0.14)' : 'rgba(15,23,42,0.05)',
        borderLeftColor: outgoing ? 'rgba(255,255,255,0.5)' : 'var(--accent)',
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.12em]"
        style={{ color: outgoing ? 'rgba(255,255,255,0.75)' : 'var(--accent-text)' }}
      >
        Respuesta
      </p>
      <p
        className="mt-1 line-clamp-3 text-xs leading-5"
        style={{ color: outgoing ? 'rgba(255,255,255,0.88)' : 'var(--ink-secondary)' }}
      >
        {quotedPreview(message)}
      </p>
    </div>
  )
}

function sameMessage(a: WhatsAppMessage, b: WhatsAppMessage) {
  if (a.id === b.id) return true
  if (a.messageId === b.messageId && a.remoteJid === b.remoteJid) return true
  if (a.fromMe !== b.fromMe || a.messageType !== b.messageType || (a.text ?? '') !== (b.text ?? '')) return false
  return Math.abs(new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime()) < 120000
}

function mergeLiveMessages(serverItems: WhatsAppMessage[], localItems: WhatsAppMessage[]) {
  const merged = [...serverItems]
  for (const local of localItems) {
    if (!serverItems.some((server) => sameMessage(server, local))) {
      merged.push(local)
    }
  }
  return merged.toSorted((left, right) => new Date(left.sentAt).getTime() - new Date(right.sentAt).getTime())
}

function groupMessages(items: WhatsAppMessage[]) {
  const groups: Array<{ key: string; label: string; items: WhatsAppMessage[] }> = []
  for (const item of items) {
    const key = item.sentAt.slice(0, 10)
    const last = groups[groups.length - 1]
    if (!last || last.key !== key) {
      groups.push({ key, label: formatMessageDay(item.sentAt), items: [item] })
    } else {
      last.items.push(item)
    }
  }
  return groups
}

function Notice({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl p-4" style={{ background: 'var(--semantic-danger-bg)', border: '1px solid rgba(220,38,38,0.16)' }}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(220,38,38,0.1)', color: 'var(--semantic-danger)' }}>
          <AlertTriangle size={16} />
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--ink-primary)' }}>{title}</p>
          <p className="mt-1 text-xs leading-5" style={{ color: 'var(--ink-secondary)' }}>{body}</p>
        </div>
      </div>
    </div>
  )
}

function MessageBody({ message }: { message: WhatsAppMessage }) {
  const mediaUrl = resolveApiAssetUrl(message.mediaUrl)
  const quoted = <QuotedMessagePreview message={message} outgoing={message.fromMe} />

  if (message.messageType === 'image' && mediaUrl) {
    return (
      <div className="space-y-3">
        {quoted}
        <a href={mediaUrl} target="_blank" rel="noreferrer">
          <img
            src={mediaUrl}
            alt={message.mediaFileName ?? 'Imagen de WhatsApp'}
            className="max-h-[360px] w-full rounded-2xl object-cover"
            style={{ background: 'rgba(15,23,42,0.08)' }}
          />
        </a>
        {message.text && message.text !== '[Imagen]' && (
          <p className="whitespace-pre-wrap text-sm leading-6">{message.text}</p>
        )}
      </div>
    )
  }

  if (message.messageType === 'audio' && mediaUrl) {
    return (
      <div className="space-y-3">
        {quoted}
        <audio controls preload="metadata" className="w-full">
          <source src={mediaUrl} type={message.mediaMimeType ?? 'audio/ogg'} />
        </audio>
        <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: 'inherit', opacity: 0.8 }}>
          <span>{message.mediaFileName ?? 'Audio'}</span>
          {message.mediaDurationSeconds ? <span>{formatMediaDuration(message.mediaDurationSeconds)}</span> : null}
        </div>
      </div>
    )
  }

  if (message.messageType === 'video' && mediaUrl) {
    return (
      <div className="space-y-3">
        {quoted}
        <video controls preload="metadata" className="max-h-[360px] w-full rounded-2xl" style={{ background: '#000' }}>
          <source src={mediaUrl} type={message.mediaMimeType ?? 'video/mp4'} />
        </video>
        {message.text && message.text !== '[Video]' && (
          <p className="whitespace-pre-wrap text-sm leading-6">{message.text}</p>
        )}
      </div>
    )
  }

  if (message.messageType === 'document' && mediaUrl) {
    return (
      <div className="space-y-3">
        {quoted}
        <a href={mediaUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold" style={{ background: 'rgba(15,23,42,0.08)' }}>
          <ArrowUpRight size={14} />
          {message.mediaFileName ?? message.text ?? 'Documento'}
        </a>
        {message.text && message.mediaFileName !== message.text && (
          <p className="whitespace-pre-wrap text-sm leading-6">{message.text}</p>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {quoted}
      <p className="whitespace-pre-wrap text-sm leading-6">{message.text ?? `[${message.messageType}]`}</p>
    </div>
  )
}

export default function ChatsPage() {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const storedAuth = auth.get()
  const canManage = storedAuth?.role !== 'viewer'
  const [phoneNumber, setPhoneNumber] = useState('')
  const [chatSearch, setChatSearch] = useState('')
  const [chatFilter, setChatFilter] = useState<ChatFilter>('all')
  const [selectedJid, setSelectedJid] = useState<string | null>(null)
  const [messageText, setMessageText] = useState('')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [localEchoesByJid, setLocalEchoesByJid] = useState<Record<string, WhatsAppMessage[]>>({})
  const deferredSearch = useDeferredValue(chatSearch)
  const messagesViewportRef = useRef<HTMLDivElement | null>(null)

  const sessionQuery = useQuery<WhatsAppSessionSnapshot>({
    queryKey: ['whatsapp-session'],
    queryFn: () => whatsappApi.getSession().then((r) => r.data),
    retry: false,
    refetchInterval: (query) => {
      if (query.state.error || !query.state.data) return false
      const data = query.state.data
      return data.hasActiveSocket || data.status === 'CONNECTING' || data.status === 'PAIRING' ? 4000 : false
    },
  })

  const session = sessionQuery.data

  const chatsQuery = useQuery<WhatsAppChat[]>({
    queryKey: ['whatsapp-chats', deferredSearch],
    queryFn: () => whatsappApi.listChats({ search: deferredSearch || undefined }).then((r) => r.data),
    enabled: Boolean(session),
    refetchInterval: session?.hasActiveSocket ? 1500 : false,
    refetchIntervalInBackground: true,
  })

  const chats = useMemo(() => (chatsQuery.data ?? []).filter((chat) => !chat.isGroup), [chatsQuery.data])
  const filteredChats = useMemo(() => chats.filter((chat) => {
    if (chatFilter === 'linked') return Boolean(chat.contactId)
    if (chatFilter === 'unread') return chat.unreadCount > 0
    return true
  }), [chatFilter, chats])

  useEffect(() => {
    if (filteredChats.length === 0) return void setSelectedJid(null)
    if (!selectedJid || !filteredChats.some((chat) => chat.jid === selectedJid)) {
      setSelectedJid(filteredChats[0].jid)
    }
  }, [filteredChats, selectedJid])

  useEffect(() => {
    if (session?.qrCode || session?.pairingCode || session?.lastError) {
      setSettingsOpen(true)
    }
  }, [session?.lastError, session?.pairingCode, session?.qrCode])

  const messagesQuery = useQuery<WhatsAppMessagesPayload>({
    queryKey: ['whatsapp-messages', selectedJid],
    queryFn: () => whatsappApi.listMessages(selectedJid!, { limit: 80 }).then((r) => r.data),
    enabled: Boolean(selectedJid),
    refetchInterval: session?.hasActiveSocket && selectedJid ? 1200 : false,
    refetchIntervalInBackground: true,
  })

  useEffect(() => {
    if (!selectedJid || !messagesQuery.data?.items?.length) return

    setLocalEchoesByJid((current) => {
      const existing = current[selectedJid]
      if (!existing?.length) return current
      const remaining = existing.filter((local) => !messagesQuery.data.items.some((server) => sameMessage(server, local)))
      if (remaining.length === existing.length) return current
      if (remaining.length === 0) {
        const next = { ...current }
        delete next[selectedJid]
        return next
      }
      return { ...current, [selectedJid]: remaining }
    })
  }, [messagesQuery.data?.items, selectedJid])

  const connectMutation = useMutation({
    mutationFn: (payload?: { mode?: 'qr' | 'pairing'; phoneNumber?: string }) => whatsappApi.connect(payload).then((r) => r.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['whatsapp-session'] })
      queryClient.invalidateQueries({ queryKey: ['whatsapp-chats'] })
    },
    onError: (error) => toast({ type: 'error', title: 'No se pudo conectar WhatsApp', description: toErrorMessage(error) }),
  })

  const disconnectMutation = useMutation({
    mutationFn: () => whatsappApi.disconnect(),
    onSuccess: () => {
      setMessageText('')
      queryClient.invalidateQueries({ queryKey: ['whatsapp-session'] })
      queryClient.invalidateQueries({ queryKey: ['whatsapp-chats'] })
      toast({ type: 'success', title: 'Sesion desconectada' })
    },
    onError: (error) => toast({ type: 'error', title: 'No se pudo desconectar', description: toErrorMessage(error) }),
  })

  const sendMutation = useMutation({
    mutationFn: () => whatsappApi.sendMessage(selectedJid!, messageText.trim()).then((r) => r.data),
    onMutate: async () => {
      if (!selectedJid || !messageText.trim()) return null
      const optimisticMessage: WhatsAppMessage = {
        id: `optimistic-${Date.now()}`,
        workspaceId: '',
        sessionId: '',
        chatId: '',
        remoteJid: selectedJid,
        messageId: `optimistic-${Date.now()}`,
        fromMe: true,
        participant: null,
        pushName: null,
        messageType: 'text',
        text: messageText.trim(),
        status: 'sending',
        sentAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        mediaUrl: null,
        mediaMimeType: null,
        mediaFileName: null,
        mediaSizeBytes: null,
        mediaDurationSeconds: null,
        quotedMessageId: null,
        quotedText: null,
        quotedMessageType: null,
      }

      setLocalEchoesByJid((current) => ({
        ...current,
        [selectedJid]: [...(current[selectedJid] ?? []), optimisticMessage],
      }))

      return { optimisticId: optimisticMessage.id, optimisticMessage }
    },
    onSuccess: (created: WhatsAppMessage | null, _vars, context) => {
      setMessageText('')
      if (selectedJid && created) {
        setLocalEchoesByJid((current) => {
          const items = current[selectedJid] ?? []
          return {
            ...current,
            [selectedJid]: items.map((item) => item.id === context?.optimisticId ? created : item),
          }
        })

        queryClient.setQueryData<WhatsAppChat[] | undefined>(['whatsapp-chats', deferredSearch], (current) => {
          if (!current) return current
          return current.map((chat) =>
            chat.jid === selectedJid
              ? {
                  ...chat,
                  lastMessageAt: created.sentAt,
                  lastMessagePreview: created.text ?? `[${created.messageType}]`,
                  lastMessageFromMe: true,
                }
              : chat
          )
        })
      }

      queryClient.invalidateQueries({ queryKey: ['whatsapp-messages', selectedJid] })
      queryClient.invalidateQueries({ queryKey: ['whatsapp-chats'] })
    },
    onError: (error, _vars, context) => {
      if (selectedJid && context?.optimisticId) {
        setLocalEchoesByJid((current) => {
          const items = current[selectedJid] ?? []
          const remaining = items.filter((item) => item.id !== context.optimisticId)
          if (remaining.length === 0) {
            const next = { ...current }
            delete next[selectedJid]
            return next
          }
          return { ...current, [selectedJid]: remaining }
        })
      }
      toast({ type: 'error', title: 'No se pudo enviar el mensaje', description: toErrorMessage(error) })
    },
  })

  const selectedChat = useMemo(() => chats.find((chat) => chat.jid === selectedJid) ?? null, [chats, selectedJid])
  const localEchoes = useMemo(() => selectedJid ? (localEchoesByJid[selectedJid] ?? []) : [], [localEchoesByJid, selectedJid])
  const liveItems = useMemo(() => mergeLiveMessages(messagesQuery.data?.items ?? [], localEchoes), [localEchoes, messagesQuery.data?.items])
  const grouped = useMemo(() => groupMessages(liveItems), [liveItems])
  const stats = useMemo(() => ({
    linked: chats.filter((chat) => Boolean(chat.contactId)).length,
    unread: chats.reduce((sum, chat) => sum + chat.unreadCount, 0),
    withPreview: chats.filter((chat) => Boolean(chat.lastMessagePreview)).length,
  }), [chats])

  const statusStyle = STATUS_STYLES[session?.status ?? 'DISCONNECTED']
  const qrImageUrl = session?.qrCode ? `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(session.qrCode)}` : null
  const showPairingTools = session?.status !== 'CONNECTED' || Boolean(session?.qrCode) || Boolean(session?.pairingCode)

  const handleQrSubmit = () => canManage && connectMutation.mutate({ mode: 'qr' })
  const handlePairingSubmit = () => canManage && connectMutation.mutate(phoneNumber.trim() ? { mode: 'pairing', phoneNumber: phoneNumber.trim() } : { mode: 'pairing' })
  const handleResume = () => canManage && connectMutation.mutate(undefined)
  const handleSendMessage = () => selectedJid && messageText.trim() && sendMutation.mutate()
  const handleReLogin = () => { auth.clear(); window.location.href = '/login' }

  useEffect(() => {
    if (!selectedJid) return

    const frame = window.requestAnimationFrame(() => {
      const viewport = messagesViewportRef.current
      if (!viewport) return
      viewport.scrollTop = viewport.scrollHeight
    })

    return () => window.cancelAnimationFrame(frame)
  }, [selectedJid, liveItems.length])

  return (
    <div className="animate-fade-in max-w-[1680px] mx-auto px-4 pb-20 pt-8 md:px-8 md:pb-8 md:pt-10">
      <div className="mb-6 flex flex-col gap-4 2xl:flex-row 2xl:items-end 2xl:justify-between">
        <div>
          <h1 className="page-title">Chats</h1>
          <p className="page-subtitle">Inbox operativo de WhatsApp: conexion, contexto CRM y conversacion en una sola vista.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: statusStyle.bg, color: statusStyle.color }}>
            {session?.status === 'CONNECTED' ? <Wifi size={13} /> : <WifiOff size={13} />}
            {statusStyle.label}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}>
            <MessagesSquare size={13} />
            {session?.chatCount ?? 0} chats
          </span>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}>
            <Users size={13} />
            {stats.linked} vinculados
          </span>
          <button onClick={() => setSettingsOpen((current) => !current)} className="btn-secondary !h-9 !px-3 !py-0">
            <Settings2 size={14} />
            Configuracion
            {settingsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </div>

      {settingsOpen && (
        <div className="mb-5 interactive-card p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <p className="section-label">Configuracion</p>
              <h2 className="mt-1 text-lg font-bold" style={{ color: 'var(--ink-primary)' }}>Resumen operativo e infraestructura</h2>
              <p className="mt-2 text-sm leading-6" style={{ color: 'var(--ink-secondary)' }}>
                Esta capa queda separada del inbox para que la pantalla principal priorice conversaciones reales. No recuperamos historiales viejos desde WhatsApp, pero lo que ya persiste en la base sigue visible y vinculado al mismo contacto y lead.
              </p>
            </div>
            <div className="rounded-2xl px-3 py-2 text-right" style={{ background: 'var(--surface-2)' }}>
              <p className="text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-tertiary)' }}>Auth</p>
              <p className="text-sm font-semibold" style={{ color: 'var(--ink-primary)' }}>{session?.authAvailable ? 'Disponible' : 'Vacia'}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl p-3" style={{ background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.16)' }}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--ink-tertiary)' }}>Sesion</p>
                  <p className="mt-2 font-semibold" style={{ color: 'var(--ink-primary)' }}>{statusStyle.label}</p>
                </div>
                <div className="rounded-2xl p-3" style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--ink-tertiary)' }}>Identidad</p>
                  <p className="mt-2 font-semibold leading-5" style={{ color: 'var(--ink-primary)' }}>{session?.pushName ?? session?.phoneJid ?? 'Sin vincular'}</p>
                </div>
                <div className="rounded-2xl p-3" style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--ink-tertiary)' }}>Conversaciones visibles</p>
                  <p className="mt-2 font-semibold" style={{ color: 'var(--ink-primary)' }}>{session?.chatCount ?? 0}</p>
                </div>
                <div className="rounded-2xl p-3" style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--ink-tertiary)' }}>Sin leer</p>
                  <p className="mt-2 font-semibold" style={{ color: 'var(--ink-primary)' }}>{stats.unread}</p>
                </div>
              </div>

              {!session?.runtimeCompatible && <Notice title="Runtime incompatible" body="Este backend esta corriendo en un contexto serverless. Baileys necesita un proceso Node persistente para que la conexion no se rompa." />}
              {session?.runtimeCompatible && !session?.packageInstalled && <Notice title="Dependencia faltante" body="El codigo ya esta preparado, pero Baileys no esta instalado en backend. Sin eso no se puede abrir la sesion real." />}
              {sessionQuery.isError && (
                <div className="space-y-3">
                  <Notice title="Sesion invalida" body={toErrorMessage(sessionQuery.error)} />
                  <button onClick={handleReLogin} className="btn-secondary"><RefreshCcw size={14} />Volver a ingresar</button>
                </div>
              )}
              {session?.lastError && <div className="rounded-xl px-3 py-3 text-sm" style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)', color: 'var(--ink-secondary)' }}>{session.lastError}</div>}

              {(session?.qrCode || (session?.status === 'PAIRING' && !session?.pairingCode && !session?.lastError)) && (
                <div className="rounded-2xl px-4 py-5" style={{ background: 'linear-gradient(180deg, rgba(5,150,105,0.08), rgba(255,255,255,0.72))', border: '1px solid rgba(5,150,105,0.16)' }}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--accent-text)' }}>Codigo QR</p>
                  {qrImageUrl ? (
                    <>
                      <div className="mt-3 flex justify-center rounded-2xl bg-white p-4 shadow-sm">
                        <img src={qrImageUrl} alt="QR de vinculacion de WhatsApp" width={220} height={220} className="h-[220px] w-[220px]" />
                      </div>
                      <p className="mt-3 text-xs leading-5" style={{ color: 'var(--ink-secondary)' }}>Escanealo desde WhatsApp en Dispositivos vinculados. Si expira, genera uno nuevo.</p>
                    </>
                  ) : (
                    <div className="mt-3 flex items-center gap-3 rounded-xl bg-white/70 px-4 py-4">
                      <Loader2 size={18} className="animate-spin" style={{ color: 'var(--accent)' }} />
                      <p className="text-sm" style={{ color: 'var(--ink-secondary)' }}>Esperando que Baileys emita el QR...</p>
                    </div>
                  )}
                </div>
              )}

              {session?.pairingCode && (
                <div className="rounded-2xl px-4 py-5" style={{ background: 'linear-gradient(135deg, var(--accent-muted), rgba(255,255,255,0.72))', border: '1px solid rgba(5,150,105,0.16)' }}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--accent-text)' }}>Pairing code</p>
                  <p className="mt-2 font-mono text-2xl font-bold tracking-[0.34em]" style={{ color: 'var(--ink-primary)' }}>{pairingCodeLabel(session.pairingCode)}</p>
                  <p className="mt-2 text-xs" style={{ color: 'var(--ink-secondary)' }}>Generado {formatDateTime(session.pairingCodeIssuedAt)}. Si expira, genera uno nuevo.</p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {showPairingTools && (
                <div className="rounded-2xl p-4" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-0)' }}>
                  <p className="section-label">Operacion de sesion</p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="section-label mb-2 block">Numero para pairing code</label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--ink-tertiary)' }} />
                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="+54 9 11 5555 5555" className="ctrl-input !pl-10" disabled={!canManage} />
                      </div>
                      <p className="mt-2 text-xs leading-5" style={{ color: 'var(--ink-tertiary)' }}>Usa pairing solo como respaldo. El metodo principal de esta pantalla es QR.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={handleQrSubmit} disabled={!canManage || connectMutation.isPending || !session?.runtimeCompatible || !session?.packageInstalled} className="btn-primary">
                        {connectMutation.isPending ? <Loader2 size={14} className="animate-spin" /> : <Smartphone size={14} />}Generar QR
                      </button>
                      <button onClick={handlePairingSubmit} disabled={!canManage || connectMutation.isPending || !session?.runtimeCompatible || !session?.packageInstalled} className="btn-secondary">
                        {connectMutation.isPending ? <Loader2 size={14} className="animate-spin" /> : <Plug2 size={14} />}Pairing
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <button onClick={handleResume} disabled={!canManage || connectMutation.isPending || !session?.authAvailable || !session?.runtimeCompatible || !session?.packageInstalled} className="btn-secondary"><RefreshCcw size={14} />Reanudar</button>
                <button onClick={() => disconnectMutation.mutate()} disabled={!canManage || disconnectMutation.isPending || !session?.authAvailable} className="btn-secondary">{disconnectMutation.isPending ? <Loader2 size={14} className="animate-spin" /> : <Unplug size={14} />}Desconectar</button>
              </div>

              <div className="rounded-2xl p-4" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-0)' }}>
                <p className="section-label">Estado persistido</p>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between"><span style={{ color: 'var(--ink-tertiary)' }}>Auth disponible</span><span className="font-semibold" style={{ color: 'var(--ink-primary)' }}>{session?.authAvailable ? 'Si' : 'No'}</span></div>
                  <div className="flex items-center justify-between"><span style={{ color: 'var(--ink-tertiary)' }}>Socket en memoria</span><span className="font-semibold" style={{ color: 'var(--ink-primary)' }}>{session?.hasActiveSocket ? 'Activo' : 'No'}</span></div>
                  <div className="flex items-center justify-between"><span style={{ color: 'var(--ink-tertiary)' }}>Ultima conexion</span><span className="font-semibold text-right" style={{ color: 'var(--ink-primary)' }}>{formatDateTime(session?.lastConnectedAt)}</span></div>
                  <div className="flex items-center justify-between"><span style={{ color: 'var(--ink-tertiary)' }}>Ultima desconexion</span><span className="font-semibold text-right" style={{ color: 'var(--ink-primary)' }}>{formatDateTime(session?.lastDisconnectedAt)}</span></div>
                  <div className="flex items-center justify-between"><span style={{ color: 'var(--ink-tertiary)' }}>Con preview</span><span className="font-semibold text-right" style={{ color: 'var(--ink-primary)' }}>{stats.withPreview}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start xl:grid-cols-[430px_minmax(0,1fr)]">

        <section className="interactive-card flex min-h-[620px] flex-col overflow-hidden lg:h-[calc(100vh-13.5rem)] lg:min-h-0">
          <div className="shrink-0 border-b px-5 py-4" style={{ borderColor: 'var(--border-0)' }}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="section-label">Inbox</p>
                <h2 className="mt-1 text-lg font-bold" style={{ color: 'var(--ink-primary)' }}>Conversaciones</h2>
              </div>
              <div className="rounded-2xl px-3 py-2 text-right" style={{ background: 'var(--surface-2)' }}>
                <p className="text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--ink-tertiary)' }}>Mostrando</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--ink-primary)' }}>{filteredChats.length} / {session?.chatCount ?? chats.length}</p>
              </div>
            </div>

            <div className="relative mt-4">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--ink-tertiary)' }} />
              <input value={chatSearch} onChange={(e) => setChatSearch(e.target.value)} placeholder="Buscar chat, telefono o contacto" className="ctrl-input !pl-10" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(['all', 'linked', 'unread'] as ChatFilter[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setChatFilter(filter)}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold transition-colors"
                  style={{
                    background: chatFilter === filter ? 'var(--accent-muted)' : 'var(--surface-2)',
                    color: chatFilter === filter ? 'var(--accent-text)' : 'var(--ink-secondary)',
                    border: chatFilter === filter ? '1px solid rgba(5,150,105,0.16)' : '1px solid var(--border-0)',
                  }}
                >
                  {filter === 'all' ? 'Todo' : filter === 'linked' ? `CRM ${stats.linked}` : `Sin leer ${stats.unread}`}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            {chatsQuery.isLoading ? (
              <div className="flex items-center justify-center py-20"><Loader2 size={18} className="animate-spin" style={{ color: 'var(--accent)' }} /></div>
            ) : filteredChats.length ? (
              <div className="divide-y" style={{ borderColor: 'var(--border-0)' }}>
                {filteredChats.map((chat) => {
                  const active = chat.jid === selectedJid
                  return (
                    <button key={chat.id} onClick={() => setSelectedJid(chat.jid)} className="w-full px-4 py-4 text-left transition-colors" style={{ background: active ? 'rgba(5,150,105,0.08)' : 'transparent', borderLeft: active ? '2px solid var(--accent)' : '2px solid transparent' }}>
                      <div className="flex items-start gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold" style={{ background: active ? 'rgba(5,150,105,0.16)' : 'var(--surface-2)', color: active ? 'var(--accent)' : 'var(--ink-secondary)' }}>{chatInitial(chat)}</div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold" style={{ color: 'var(--ink-primary)' }}>{chatTitle(chat)}</p>
                              <p className="mt-0.5 truncate text-xs" style={{ color: 'var(--ink-tertiary)' }}>{chatSecondary(chat)}</p>
                            </div>
                            <div className="shrink-0 text-right">
                              <p className="text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>{formatChatTimestamp(chat.lastMessageAt)}</p>
                              {chat.unreadCount > 0 && <span className="mt-2 inline-flex min-w-5 items-center justify-center rounded-full px-1.5 py-0.5 text-[11px] font-semibold" style={{ background: 'var(--accent)', color: '#fff' }}>{chat.unreadCount}</span>}
                            </div>
                          </div>
                          <p className="mt-2 line-clamp-2 text-xs leading-5" style={{ color: 'var(--ink-secondary)' }}>{chat.lastMessagePreview ?? 'Sin mensaje legible todavia.'}</p>
                          <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
                            {chat.contactName && <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold" style={{ background: 'var(--gold-muted)', color: 'var(--gold-text)' }}><Link2 size={10} />CRM</span>}
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="px-6 py-20 text-center">
                <MessageSquareText size={30} className="mx-auto mb-3" style={{ color: 'var(--ink-muted)' }} />
                <p className="text-sm font-semibold" style={{ color: 'var(--ink-primary)' }}>Todavia no llegaron conversaciones reales</p>
                <p className="mt-1 text-xs leading-5" style={{ color: 'var(--ink-tertiary)' }}>Este inbox empieza vacio y solo muestra chats cuando alguien manda un mensaje persistible al WhatsApp conectado.</p>
              </div>
            )}
          </div>
        </section>

        <section className="interactive-card flex min-h-[620px] flex-col overflow-hidden lg:sticky lg:top-6 lg:h-[calc(100vh-13.5rem)] lg:min-h-0">
          {selectedChat ? (
            <>
              <div className="shrink-0 border-b px-5 py-4" style={{ borderColor: 'var(--border-0)' }}>
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold" style={{ background: 'rgba(5,150,105,0.12)', color: 'var(--accent)' }}>{chatInitial(selectedChat)}</div>
                    <div className="min-w-0">
                      <p className="truncate text-xl font-bold" style={{ color: 'var(--ink-primary)' }}>{chatTitle(selectedChat)}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm" style={{ color: 'var(--ink-secondary)' }}>
                        <span className="truncate">{chatSecondary(selectedChat)}</span>
                        {selectedChat.phoneNumber && <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}><Phone size={10} />{selectedChat.phoneNumber}</span>}
                        {selectedChat.contactName && <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: 'var(--gold-muted)', color: 'var(--gold-text)' }}><Link2 size={10} />{selectedChat.contactName}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 xl:justify-end">
                    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: statusStyle.bg, color: statusStyle.color }}>
                      {session?.status === 'CONNECTED' ? <Wifi size={12} /> : <WifiOff size={12} />}{statusStyle.label}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}>
                      <MessageSquareText size={12} />{messagesQuery.data?.totalMessages ?? 0} mensajes
                    </span>
                    {selectedChat.contactId && <Link href={`/contacts/${selectedChat.contactId}`} className="btn-secondary !h-9 !px-3 !py-0 text-xs"><ArrowUpRight size={13} />Abrir contacto</Link>}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 text-sm">
                  <div className="rounded-2xl p-3" style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}><p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--ink-tertiary)' }}>Ultima actividad</p><p className="mt-2 font-semibold" style={{ color: 'var(--ink-primary)' }}>{formatDateTime(selectedChat.lastMessageAt)}</p></div>
                  <div className="rounded-2xl p-3" style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}><p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--ink-tertiary)' }}>Vinculo CRM</p><p className="mt-2 font-semibold" style={{ color: 'var(--ink-primary)' }}>{selectedChat.contactName ?? 'Sin match'}</p></div>
                  <div className="rounded-2xl p-3" style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}><p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--ink-tertiary)' }}>Chat id</p><p className="mt-2 font-semibold break-all" style={{ color: 'var(--ink-primary)' }}>{selectedChat.jid}</p></div>
                </div>
              </div>

              <div ref={messagesViewportRef} className="min-h-0 flex-1 overflow-y-auto px-5 py-5" style={{ background: 'linear-gradient(180deg, rgba(5,150,105,0.03), transparent 18%)' }}>
                {messagesQuery.isLoading ? (
                  <div className="flex items-center justify-center py-24">
                    <Loader2 size={18} className="animate-spin" style={{ color: 'var(--accent)' }} />
                  </div>
                ) : grouped.length ? (
                  <div className="space-y-6">
                    {grouped.map((group) => (
                      <div key={group.key}>
                        <div className="mb-4 flex items-center justify-center">
                          <span className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ background: 'var(--surface-2)', color: 'var(--ink-tertiary)' }}>
                            {group.label}
                          </span>
                        </div>

                        <div className="space-y-3">
                          {group.items.map((message) => (
                            <div key={message.id} className={clsx('flex', message.fromMe ? 'justify-end' : 'justify-start')}>
                              <div
                                className="max-w-[82%] rounded-[24px] px-4 py-3"
                                style={{
                                  background: message.fromMe ? 'var(--accent)' : 'var(--surface-1)',
                                  color: message.fromMe ? '#fff' : 'var(--ink-primary)',
                                  border: message.fromMe ? 'none' : '1px solid var(--border-0)',
                                  boxShadow: message.fromMe ? '0 10px 24px rgba(5,150,105,0.14)' : 'none',
                                }}
                              >
                                <p
                                  className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em]"
                                  style={{ color: message.fromMe ? 'rgba(255,255,255,0.8)' : 'var(--accent-text)' }}
                                >
                                  {messageSenderName(message, selectedChat)}
                                </p>

                                <MessageBody message={message} />

                                <div className="mt-2 flex items-center justify-end gap-2 text-[11px]" style={{ color: message.fromMe ? 'rgba(255,255,255,0.8)' : 'var(--ink-tertiary)' }}>
                                  <span>{formatMessageTime(message.sentAt)}</span>
                                  {message.fromMe ? <span>{formatOutgoingStatus(message.status)}</span> : null}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="max-w-[420px] text-center">
                      <MessageSquareText size={34} className="mx-auto mb-4" style={{ color: 'var(--ink-muted)' }} />
                      <p className="text-base font-semibold" style={{ color: 'var(--ink-primary)' }}>
                        Todavia no hay mensajes persistidos para este chat
                      </p>
                      <p className="mt-2 text-sm leading-6" style={{ color: 'var(--ink-tertiary)' }}>
                        Esta conversacion se alimenta con los mensajes que la app ya guardo para este contacto.
                      </p>

                      {selectedChat.lastMessagePreview && (
                        <div className="mt-5 rounded-2xl p-4 text-left" style={{ background: 'var(--surface-1)', border: '1px solid var(--border-0)' }}>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--ink-tertiary)' }}>Ultimo mensaje conocido</p>
                          <p className="mt-2 text-sm leading-6" style={{ color: 'var(--ink-primary)' }}>{selectedChat.lastMessagePreview}</p>
                          <p className="mt-2 text-xs" style={{ color: 'var(--ink-tertiary)' }}>{formatDateTime(selectedChat.lastMessageAt)}</p>
                        </div>
                      )}

                      <p className="mt-4 text-xs leading-5" style={{ color: 'var(--ink-tertiary)' }}>
                        No recuperamos historial viejo desde WhatsApp, pero lo persistido en CRM no se pierde.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="shrink-0 border-t px-5 py-4" style={{ borderColor: 'var(--border-0)', background: 'var(--surface-0)' }}>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-xs" style={{ color: 'var(--ink-tertiary)' }}>
                  <div className="flex flex-wrap items-center gap-3">
                    {selectedChat.contactId ? (
                      <Link href={`/contacts/${selectedChat.contactId}`} className="inline-flex items-center gap-1 font-semibold" style={{ color: 'var(--accent)' }}>
                        <Link2 size={12} />
                        Vinculado a CRM
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Link2 size={12} />
                        Sin contacto vinculado
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Clock3 size={12} />
                      Ultima actividad {formatChatTimestamp(selectedChat.lastMessageAt)}
                    </span>
                  </div>
                </div>

                <div className="flex items-end gap-3">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder={
                      canManage
                        ? session?.status === 'CONNECTED'
                          ? 'Escribe un mensaje'
                          : 'Conecta o reanuda la sesion para enviar'
                        : 'Tu rol no permite enviar mensajes'
                    }
                    rows={3}
                    className="ctrl-input min-h-[92px] resize-none"
                    disabled={!canManage || session?.status !== 'CONNECTED' || sendMutation.isPending}
                  />
                  <button onClick={handleSendMessage} disabled={!canManage || session?.status !== 'CONNECTED' || sendMutation.isPending || !messageText.trim()} className="btn-primary !h-12 !px-4">
                    {sendMutation.isPending ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                    Enviar
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center px-8 text-center">
              <div>
                <MessageSquareText size={34} className="mx-auto mb-4" style={{ color: 'var(--ink-muted)' }} />
                <p className="text-base font-semibold" style={{ color: 'var(--ink-primary)' }}>Selecciona un chat</p>
                <p className="mt-2 text-sm leading-6" style={{ color: 'var(--ink-tertiary)' }}>
                  Elige una conversacion nueva del inbox para ver contexto y responder desde el CRM.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
