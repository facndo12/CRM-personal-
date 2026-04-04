'use client'

import Link from 'next/link'
import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { dealsApi, resolveApiAssetUrl, whatsappApi } from '@/lib/api'
import type { KanbanBoard, KanbanCard, KanbanColumn, WhatsAppMessage, WhatsAppMessagesPayload } from '@/types'
import { useToast } from '@/components/ui/toast'
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  useDroppable,
  type DragStartEvent,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  AlertTriangle,
  ArrowUpRight,
  CircleDot,
  Clock,
  Loader2,
  MessageSquareText,
  MessagesSquare,
  Phone,
  Plus,
  Search,
  Send,
  Sparkles,
  Users,
  Wifi,
  X,
} from 'lucide-react'
import clsx from 'clsx'
import { Avatar } from '@/components/ui/avatar'

function leadName(deal: KanbanCard) {
  return deal.primaryContact?.name ?? deal.title
}

function leadPhone(deal: KanbanCard) {
  return deal.primaryContact?.phone ?? deal.latestChat?.phoneNumber ?? null
}

function leadPreview(deal: KanbanCard) {
  return deal.latestChat?.lastMessagePreview ?? 'Sin conversacion sincronizada'
}

function normalizeLeadKey(deal: KanbanCard) {
  const phone = (deal.primaryContact?.phone ?? deal.latestChat?.phoneNumber ?? '').replace(/\D/g, '')
  if (phone) return `phone:${phone}`
  if (deal.latestChat?.jid) return `jid:${deal.latestChat.jid}`
  if (deal.primaryContact?.id) return `contact:${deal.primaryContact.id}`
  return `deal:${deal.id}`
}

function moveDealInBoard(
  board: KanbanBoard,
  dealId: string,
  targetStageId: string,
  targetPosition: number
) {
  let movingDeal: KanbanCard | null = null
  let sourceStageId: string | null = null
  let sourceIndex = -1

  const columnsWithoutDeal = board.columns.map((column) => {
    const index = column.deals.findIndex((deal) => deal.id === dealId)
    if (index === -1) return column

    movingDeal = column.deals[index]
    sourceStageId = column.stage.id
    sourceIndex = index

    return {
      ...column,
      deals: column.deals.filter((deal) => deal.id !== dealId),
    }
  })

  if (!movingDeal) return board

  const draggedDeal = movingDeal

  const columns = columnsWithoutDeal.map((column) => {
    if (column.stage.id !== targetStageId) {
      return {
        ...column,
        deals: column.deals.map((deal, index) => ({ ...deal, position: index })),
        count: column.deals.length,
      }
    }

    const nextDeals = [...column.deals]
    const sameColumn = sourceStageId === targetStageId
    const adjustedTarget =
      sameColumn && sourceIndex > -1 && sourceIndex < targetPosition
        ? targetPosition - 1
        : targetPosition

    const insertAt = Math.max(0, Math.min(adjustedTarget, nextDeals.length))
    nextDeals.splice(insertAt, 0, draggedDeal)

    return {
      ...column,
      deals: nextDeals.map((deal, index) => ({ ...deal, position: index })),
      count: nextDeals.length,
    }
  })

  return {
    ...board,
    columns,
  }
}

function toErrorMessage(error: any) {
  return error?.response?.data?.message ?? error?.response?.data?.error ?? error?.message ?? 'Ocurrio un error inesperado.'
}

function formatActivity(value?: string | null) {
  if (!value) return 'Sin actividad'
  const date = new Date(value)
  const now = new Date()
  return date.toDateString() === now.toDateString()
    ? new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit' }).format(date)
    : new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: '2-digit' }).format(date)
}

function formatMessageTime(value: string) {
  return new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit' }).format(new Date(value))
}

function formatMessageDay(value: string) {
  return new Intl.DateTimeFormat('es-AR', { weekday: 'short', day: '2-digit', month: 'short' }).format(new Date(value))
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

function messageSenderName(message: WhatsAppMessage, deal: KanbanCard) {
  if (message.fromMe) return 'Tu'
  return message.pushName ?? deal.latestChat?.displayName ?? deal.primaryContact?.name ?? leadPhone(deal) ?? 'Contacto'
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
        background: outgoing ? 'rgba(16,185,129,0.08)' : 'rgba(15,23,42,0.05)',
        borderLeftColor: outgoing ? 'rgba(16,185,129,0.42)' : 'var(--accent)',
      }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--ink-tertiary)' }}>
        Respuesta
      </p>
      <p className="mt-1 line-clamp-3 text-xs leading-5" style={{ color: 'var(--ink-secondary)' }}>
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

function LeadMessageBody({ message }: { message: WhatsAppMessage }) {
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
            className="max-h-[320px] w-full rounded-2xl object-cover"
            style={{ background: 'rgba(15,23,42,0.08)' }}
          />
        </a>
        {message.text && message.text !== '[Imagen]' ? (
          <p className="whitespace-pre-wrap text-[13px] leading-6" style={{ color: 'var(--ink-primary)' }}>
            {message.text}
          </p>
        ) : null}
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
        <div className="flex flex-wrap items-center gap-2 text-[11px]" style={{ color: 'var(--ink-secondary)' }}>
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
        <video controls preload="metadata" className="max-h-[320px] w-full rounded-2xl" style={{ background: '#000' }}>
          <source src={mediaUrl} type={message.mediaMimeType ?? 'video/mp4'} />
        </video>
        {message.text && message.text !== '[Video]' ? (
          <p className="whitespace-pre-wrap text-[13px] leading-6" style={{ color: 'var(--ink-primary)' }}>
            {message.text}
          </p>
        ) : null}
      </div>
    )
  }

  if (message.messageType === 'document' && mediaUrl) {
    return (
      <div className="space-y-3">
        {quoted}
        <a href={mediaUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold" style={{ background: 'rgba(15,23,42,0.08)', color: 'var(--ink-primary)' }}>
          <ArrowUpRight size={14} />
          {message.mediaFileName ?? message.text ?? 'Documento'}
        </a>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {quoted}
      <p className="text-[13px] leading-6" style={{ color: 'var(--ink-primary)' }}>
        {message.text ?? '[Mensaje sin texto]'}
      </p>
    </div>
  )
}

function DealCard({
  deal,
  selected,
  onOpen,
}: {
  deal: KanbanCard
  selected: boolean
  onOpen: (dealId: string) => void
}) {
  const {
    attributes, listeners, setNodeRef,
    transform, transition, isDragging,
  } = useSortable({ id: deal.id, transition: null })

  return (
    <button
      type="button"
      ref={setNodeRef}
      onClick={() => onOpen(deal.id)}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        borderColor: selected ? 'rgba(16,185,129,0.4)' : undefined,
      }}
      {...attributes}
      className={clsx(
        'interactive-card flex w-full overflow-hidden text-left transition-all duration-200 group relative',
        selected ? 'ring-2' : '',
        isDragging ? 'opacity-60 z-50 ring-2' : ''
      )}
    >
      <div
        {...listeners}
        onClick={(event) => event.stopPropagation()}
        className="flex w-6 shrink-0 cursor-grab items-start justify-center pt-3 pb-2 transition-colors active:cursor-grabbing touch-none"
        style={{ borderRight: '1px solid var(--border-0)' }}
      >
        <div className="grid grid-cols-2 gap-[2px] opacity-40 group-hover:opacity-100 transition-opacity">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-[2.5px] w-[2.5px] rounded-full" style={{ background: 'var(--ink-tertiary)' }} />
          ))}
        </div>
      </div>

      <div className="flex-1 p-3 min-w-0">
        <div className="flex items-start gap-3">
          <Avatar name={leadName(deal)} size="sm" />

          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-bold leading-snug tracking-tight truncate" style={{ color: 'var(--ink-primary)' }}>
              {leadName(deal)}
            </p>
            <p className="mt-0.5 truncate text-[11px]" style={{ color: 'var(--ink-secondary)' }}>
              {leadPhone(deal) ?? deal.title}
            </p>
            <p className="mt-2 line-clamp-2 text-[12px] leading-5" style={{ color: 'var(--ink-secondary)' }}>
              {leadPreview(deal)}
            </p>

          </div>
        </div>

        <div
          className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t pt-2.5"
          style={{ borderColor: 'var(--border-0)' }}
        >
          <div className="flex flex-wrap items-center gap-2">
            {deal.isRotten ? (
              <span
                className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded"
                style={{ background: 'var(--semantic-danger-bg)', color: 'var(--semantic-danger)' }}
              >
                <AlertTriangle size={10} strokeWidth={2.5} /> Stale
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink-muted)' }}>
                <Clock size={10} strokeWidth={2.5} /> {deal.daysInStage}d
              </span>
            )}

            {deal.primaryContact?.status ? (
              <span
                className="flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{ background: 'rgba(16,185,129,0.12)', color: 'var(--accent)' }}
              >
                <Sparkles size={10} strokeWidth={2.5} /> {deal.primaryContact.status}
              </span>
            ) : null}

            {deal.latestChat?.unreadCount ? (
              <span
                className="flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold"
                style={{ background: 'rgba(59,130,246,0.14)', color: '#7dd3fc' }}
              >
                <MessageSquareText size={10} strokeWidth={2.5} /> {deal.latestChat.unreadCount}
              </span>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            {deal.probability != null && (
              <span
                className="rounded px-1.5 py-0.5 text-[10px] font-bold"
                style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)', border: '1px solid var(--border-0)' }}
              >
                {deal.probability}%
              </span>
            )}
            <span className="flex items-center gap-1 text-[10px] font-semibold" style={{ color: 'var(--ink-tertiary)' }}>
              <Wifi size={10} strokeWidth={2.5} />
              {formatActivity(deal.latestChat?.lastMessageAt)}
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

function KanbanColumnComponent({
  column,
  onAddDeal,
  selectedDealId,
  onOpenDeal,
}: {
  column: KanbanColumn
  onAddDeal: (stageId: string) => void
  selectedDealId: string | null
  onOpenDeal: (dealId: string) => void
}) {
  const { setNodeRef, isOver } = useDroppable({ id: column.stage.id })

  return (
    <div className="shrink-0 w-80 flex flex-col rounded-xl border max-h-full animate-fade-in" style={{ background: 'var(--surface-1)', borderColor: 'var(--border-1)' }}>
      <div className="p-4 border-b" style={{ borderColor: 'var(--border-0)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: column.stage.color }} />
            <span className="text-sm font-bold tracking-tight" style={{ color: 'var(--ink-primary)' }}>{column.stage.name}</span>
            <span
              className="font-bold text-[10px] px-2 py-0.5 rounded-full"
              style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}
            >
              {column.count}
            </span>
          </div>
          <button
            onClick={() => onAddDeal(column.stage.id)}
            className="w-7 h-7 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: 'var(--ink-tertiary)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--accent-muted)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-tertiary)'
            }}
            title="Crear lead manual en esta stage"
          >
            <Plus size={16} strokeWidth={2.5}/>
          </button>
        </div>
      </div>

      <div
        ref={setNodeRef}
        className={clsx(
          'flex-1 p-3 space-y-3 min-h-[150px] transition-all duration-300 overflow-y-auto'
        )}
        style={{
          background: isOver ? 'var(--accent-muted)' : 'transparent',
          borderRadius: '0 0 0.75rem 0.75rem',
        }}
      >
        <SortableContext
          items={column.deals.map((d) => d.id)}
          strategy={verticalListSortingStrategy}
        >
          {column.deals.map((deal) => (
            <DealCard
              key={deal.id}
              deal={deal}
              selected={selectedDealId === deal.id}
              onOpen={onOpenDeal}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  )
}

function CreateDealModal({
  pipelineId,
  stageId,
  onClose,
}: {
  pipelineId: string
  stageId: string
  onClose: () => void
}) {
  const queryClient = useQueryClient()
  const [title, setTitle] = useState('')

  const mutation = useMutation({
    mutationFn: () =>
      dealsApi.create({ title, pipelineId, stageId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['kanban', pipelineId] })
      onClose()
    },
  })

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />
      <div
        className="relative w-full max-w-md rounded-xl border shadow-2xl p-6 animate-slide-up"
        style={{ background: 'var(--surface-0)', borderColor: 'var(--border-1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--ink-primary)' }}>
          <span className="w-8 h-8 flex items-center justify-center rounded-lg" style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}>
            <Plus size={20} strokeWidth={3}/>
          </span>
          Nuevo lead
        </h3>
        <div className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nombre del lead o cuenta"
            className="ctrl-input"
            autoFocus
          />
        </div>
        <div className="flex gap-3 mt-8 pt-5" style={{ borderTop: '1px solid var(--border-0)' }}>
          <button
            onClick={() => mutation.mutate()}
            disabled={!title || mutation.isPending}
            className="btn-primary flex-1 py-2.5"
          >
            {mutation.isPending && <Loader2 size={16} className="animate-spin" />}
            Agregar
          </button>
          <button onClick={onClose} className="btn-secondary flex-1 py-2.5">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

function ConversationModal({
  deal,
  stageName,
  onClose,
}: {
  deal: KanbanCard
  stageName: string
  onClose: () => void
}) {
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const jid = deal.latestChat?.jid ?? null
  const [draft, setDraft] = useState('')
  const [localEchoes, setLocalEchoes] = useState<WhatsAppMessage[]>([])
  const messagesViewportRef = useRef<HTMLDivElement | null>(null)

  const messagesQuery = useQuery<WhatsAppMessagesPayload>({
    queryKey: ['lead-conversation', jid],
    queryFn: () => whatsappApi.listMessages(jid!, { limit: 80 }).then((r) => r.data),
    enabled: Boolean(jid),
    refetchInterval: jid ? 1200 : false,
    refetchIntervalInBackground: true,
  })

  useEffect(() => {
    setLocalEchoes([])
  }, [jid])

  useEffect(() => {
    if (!messagesQuery.data?.items?.length || !localEchoes.length) return
    setLocalEchoes((current) => current.filter((local) => !messagesQuery.data!.items.some((server) => sameMessage(server, local))))
  }, [localEchoes.length, messagesQuery.data?.items])

  const sendMutation = useMutation({
    mutationFn: () => whatsappApi.sendMessage(jid!, draft.trim()).then((r) => r.data),
    onMutate: async () => {
      if (!jid || !draft.trim()) return null
      const optimisticMessage: WhatsAppMessage = {
        id: `optimistic-${Date.now()}`,
        workspaceId: '',
        sessionId: '',
        chatId: '',
        remoteJid: jid,
        messageId: `optimistic-${Date.now()}`,
        fromMe: true,
        participant: null,
        pushName: null,
        messageType: 'text',
        text: draft.trim(),
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

      setLocalEchoes((current) => [...current, optimisticMessage])

      return { optimisticId: optimisticMessage.id }
    },
    onSuccess: (created: WhatsAppMessage | null, _vars, context) => {
      setDraft('')
      if (jid && created) {
        setLocalEchoes((current) => current.map((item) => item.id === context?.optimisticId ? created : item))
      }
      queryClient.invalidateQueries({ queryKey: ['lead-conversation', jid] })
      queryClient.invalidateQueries({ queryKey: ['kanban'] })
    },
    onError: (error, _vars, context) => {
      if (jid && context?.optimisticId) setLocalEchoes((current) => current.filter((item) => item.id !== context.optimisticId))
      toast({
        type: 'error',
        title: 'No se pudo enviar el mensaje',
        description: toErrorMessage(error),
      })
    },
  })

  const liveItems = useMemo(
    () => mergeLiveMessages(messagesQuery.data?.items ?? [], localEchoes),
    [localEchoes, messagesQuery.data?.items]
  )
  const groupedMessages = useMemo(() => groupMessages(liveItems), [liveItems])

  useEffect(() => {
    if (!jid) return

    const frame = window.requestAnimationFrame(() => {
      const viewport = messagesViewportRef.current
      if (!viewport) return
      viewport.scrollTop = viewport.scrollHeight
    })

    return () => window.cancelAnimationFrame(frame)
  }, [jid, liveItems.length])

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(2,6,23,0.76)', backdropFilter: 'blur(8px)' }} />
      <div
        className="relative flex h-[78vh] w-full max-w-5xl overflow-hidden rounded-[28px] border"
        style={{ background: 'var(--surface-0)', borderColor: 'var(--border-1)' }}
        onClick={(event) => event.stopPropagation()}
      >
        <aside
          className="hidden w-[300px] shrink-0 border-r p-6 lg:flex lg:flex-col"
          style={{ borderColor: 'var(--border-0)', background: 'rgba(15,23,42,0.68)' }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="section-label">Lead</p>
              <h3 className="mt-2 text-xl font-bold tracking-tight" style={{ color: 'var(--ink-primary)' }}>
                {leadName(deal)}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-2xl"
              style={{ background: 'var(--surface-2)', color: 'var(--ink-tertiary)' }}
            >
              <X size={16} />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Avatar name={leadName(deal)} size="xl" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold" style={{ color: 'var(--ink-primary)' }}>
                {deal.primaryContact?.name ?? deal.title}
              </p>
              <p className="truncate text-xs" style={{ color: 'var(--ink-secondary)' }}>
                {leadPhone(deal) ?? 'Sin telefono'}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="rounded-2xl p-4" style={{ background: 'var(--surface-1)' }}>
              <p className="section-label">Stage actual</p>
              <p className="mt-2 text-sm font-semibold" style={{ color: 'var(--ink-primary)' }}>
                {stageName}
              </p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: 'var(--surface-1)' }}>
              <p className="section-label">Ultima actividad</p>
              <p className="mt-2 text-sm font-semibold" style={{ color: 'var(--ink-primary)' }}>
                {formatActivity(deal.latestChat?.lastMessageAt)}
              </p>
              <p className="mt-2 text-xs leading-5" style={{ color: 'var(--ink-secondary)' }}>
                {leadPreview(deal)}
              </p>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-6">
            {deal.primaryContact ? (
              <Link href={`/contacts/${deal.primaryContact.id}`} className="btn-secondary justify-center">
                <ArrowUpRight size={14} />
                Abrir contacto
              </Link>
            ) : null}
            <Link href="/chats" className="btn-primary justify-center">
              <MessagesSquare size={14} />
              Abrir inbox
            </Link>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <div
            className="flex items-start justify-between gap-4 border-b px-5 py-4"
            style={{ borderColor: 'var(--border-0)', background: 'rgba(15,23,42,0.5)' }}
          >
            <div className="min-w-0">
              <p className="section-label">Conversacion</p>
              <h3 className="mt-1 truncate text-lg font-bold tracking-tight" style={{ color: 'var(--ink-primary)' }}>
                {leadName(deal)}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs" style={{ color: 'var(--ink-secondary)' }}>
                <span className="inline-flex items-center gap-1">
                  <Phone size={12} />
                  {leadPhone(deal) ?? 'Sin telefono'}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CircleDot size={12} />
                  {stageName}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-2xl lg:hidden"
              style={{ background: 'var(--surface-2)', color: 'var(--ink-tertiary)' }}
            >
              <X size={16} />
            </button>
          </div>

          <div ref={messagesViewportRef} className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
            {!jid ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <MessageSquareText size={22} style={{ color: 'var(--ink-tertiary)' }} />
                <p className="mt-4 text-base font-semibold" style={{ color: 'var(--ink-primary)' }}>
                  Este lead no tiene chat vinculado
                </p>
                <p className="mt-2 max-w-md text-sm leading-6" style={{ color: 'var(--ink-secondary)' }}>
                  En cuanto el contacto tenga una conversacion persistida, la vas a ver aca.
                </p>
              </div>
            ) : messagesQuery.isLoading ? (
              <div className="flex h-full items-center justify-center">
                <Loader2 className="animate-spin" style={{ color: 'var(--accent)' }} />
              </div>
            ) : groupedMessages.length > 0 ? (
              <div className="space-y-6">
                {groupedMessages.map((group) => (
                  <div key={group.key}>
                    <div className="mb-4 flex items-center justify-center">
                      <span
                        className="rounded-full px-3 py-1 text-[11px] font-semibold"
                        style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}
                      >
                        {group.label}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {group.items.map((message) => (
                        <div key={message.id} className={clsx('flex', message.fromMe ? 'justify-end' : 'justify-start')}>
                          <div
                            className="max-w-[78%] rounded-[22px] px-4 py-3"
                            style={{
                              background: message.fromMe ? 'rgba(16,185,129,0.12)' : 'var(--surface-1)',
                              border: `1px solid ${message.fromMe ? 'rgba(16,185,129,0.14)' : 'var(--border-0)'}`,
                            }}
                          >
                            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--ink-tertiary)' }}>
                              {messageSenderName(message, deal)}
                            </p>
                            <LeadMessageBody message={message} />
                            <div className="mt-2 flex items-center justify-end gap-2 text-[10px]" style={{ color: 'var(--ink-tertiary)' }}>
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
              <div className="flex h-full flex-col items-center justify-center text-center">
                <MessageSquareText size={22} style={{ color: 'var(--ink-tertiary)' }} />
                <p className="mt-4 text-base font-semibold" style={{ color: 'var(--ink-primary)' }}>
                  Sin mensajes persistidos
                </p>
                <p className="mt-2 max-w-md text-sm leading-6" style={{ color: 'var(--ink-secondary)' }}>
                  El chat existe, pero todavia no hay historial en la base. Ultima vista conocida: {leadPreview(deal)}
                </p>
              </div>
            )}
          </div>

          {jid ? (
            <div
              className="border-t px-5 py-4"
              style={{ borderColor: 'var(--border-0)', background: 'rgba(15,23,42,0.4)' }}
            >
              <div className="flex items-end gap-3">
                <textarea
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Escribe un mensaje para este lead"
                  className="ctrl-input min-h-[88px] resize-none"
                />
                <button
                  type="button"
                  onClick={() => draft.trim() && sendMutation.mutate()}
                  disabled={!draft.trim() || sendMutation.isPending}
                  className="btn-primary h-11 shrink-0 px-4"
                >
                  {sendMutation.isPending ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                  Enviar
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function KanbanPage() {
  const { pipelineId } = useParams<{ pipelineId: string }>()
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [addingToStage, setAddingToStage] = useState<string | null>(null)
  const [selectedDealId, setSelectedDealId] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const deferredSearch = useDeferredValue(search)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })
  )

  const { data: board, isLoading } = useQuery<KanbanBoard>({
    queryKey: ['kanban', pipelineId],
    queryFn: () => dealsApi.getKanban(pipelineId!).then((r) => r.data),
  })

  const moveMutation = useMutation({
    mutationFn: ({ dealId, stageId, position }: { dealId: string; stageId: string; position: number }) =>
      dealsApi.move(dealId, stageId, position),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ['kanban', pipelineId] })

      const previousBoard = queryClient.getQueryData<KanbanBoard>(['kanban', pipelineId])
      if (previousBoard) {
        queryClient.setQueryData<KanbanBoard>(
          ['kanban', pipelineId],
          moveDealInBoard(previousBoard, variables.dealId, variables.stageId, variables.position ?? 0)
        )
      }

      return { previousBoard }
    },
    onError: (error, _variables, context) => {
      if (context?.previousBoard) {
        queryClient.setQueryData(['kanban', pipelineId], context.previousBoard)
      }
      toast({
        type: 'error',
        title: 'No se pudo mover el lead',
        description: toErrorMessage(error),
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['kanban', pipelineId] })
    },
  })

  const dedupedColumns = useMemo(() => {
    if (!board) return []

    const canonicalByKey = new Map<string, KanbanCard>()

    for (const column of board.columns) {
      for (const deal of column.deals) {
        const key = normalizeLeadKey(deal)
        const current = canonicalByKey.get(key)
        if (!current || new Date(deal.updatedAt).getTime() >= new Date(current.updatedAt).getTime()) {
          canonicalByKey.set(key, deal)
        }
      }
    }

    return board.columns.map((column) => ({
      ...column,
      deals: column.deals.filter((deal) => canonicalByKey.get(normalizeLeadKey(deal))?.id === deal.id),
      count: column.deals.filter((deal) => canonicalByKey.get(normalizeLeadKey(deal))?.id === deal.id).length,
      totalValue: 0,
    }))
  }, [board])

  const activeDeal = dedupedColumns.flatMap((c) => c.deals).find((d) => d.id === activeId)

  const filteredColumns = useMemo(() => {
    if (!dedupedColumns.length) return []
    const needle = deferredSearch.trim().toLowerCase()
    if (!needle) return dedupedColumns

    return dedupedColumns.map((column) => ({
      ...column,
      deals: column.deals.filter((deal) => {
        const haystack = [
          deal.title,
          deal.primaryContact?.name,
          deal.primaryContact?.phone,
          deal.latestChat?.displayName,
          deal.latestChat?.phoneNumber,
          deal.latestChat?.lastMessagePreview,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()

        return haystack.includes(needle)
      }),
      count: column.deals.filter((deal) => {
        const haystack = [
          deal.title,
          deal.primaryContact?.name,
          deal.primaryContact?.phone,
          deal.latestChat?.displayName,
          deal.latestChat?.phoneNumber,
          deal.latestChat?.lastMessagePreview,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()

        return haystack.includes(needle)
      }).length,
    }))
  }, [dedupedColumns, deferredSearch])

  const selectedDeal = useMemo(() => {
    if (!dedupedColumns.length || !selectedDealId) return null

    for (const column of dedupedColumns) {
      const deal = column.deals.find((item) => item.id === selectedDealId)
      if (deal) {
        return {
          deal,
          stageName: column.stage.name,
        }
      }
    }

    return null
  }, [dedupedColumns, selectedDealId])

  useEffect(() => {
    if (!selectedDealId || !dedupedColumns.length) return
    const exists = dedupedColumns.some((column) => column.deals.some((deal) => deal.id === selectedDealId))
    if (!exists) {
      setSelectedDealId(null)
    }
  }, [dedupedColumns, selectedDealId])

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || !dedupedColumns.length) {
      setActiveId(null)
      return
    }

    const dealId = active.id as string
    const overId  = over.id as string
    if (dealId === overId) {
      setActiveId(null)
      return
    }

    let targetColumn = dedupedColumns.find((c) => c.stage.id === overId)
    if (!targetColumn) {
      targetColumn = dedupedColumns.find((c) => c.deals.some((d) => d.id === overId))
    }
    if (!targetColumn) {
      setActiveId(null)
      return
    }

    const overDealIndex = targetColumn.deals.findIndex((d) => d.id === overId)
    const targetPosition = overDealIndex === -1 ? targetColumn.deals.length : overDealIndex

    moveMutation.mutate({ dealId, stageId: targetColumn.stage.id, position: targetPosition })
    setActiveId(null)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin" style={{ color: 'var(--accent)' }} size={32} />
      </div>
    )
  }

  if (!board) return null

  const totalDeals = dedupedColumns.reduce((sum, column) => sum + column.deals.length, 0)
  const totalUnread = dedupedColumns.reduce(
    (sum, column) => sum + column.deals.reduce((dealSum, deal) => dealSum + (deal.latestChat?.unreadCount ?? 0), 0),
    0
  )
  const connectedLeads = dedupedColumns.reduce(
    (sum, column) => sum + column.deals.filter((deal) => Boolean(deal.latestChat?.jid)).length,
    0
  )

  return (
    <div className="flex h-full flex-col gap-5 px-4 pb-20 pt-7 md:px-8 md:pb-8 md:pt-9">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <h1 className="page-title">Leads</h1>
          <p className="page-subtitle">
            Todos los entrantes directos de WhatsApp caen en Nuevo Lead. Desde aca los arrastras por el pipeline y abres la conversacion sin salir del board.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}>
            <CircleDot size={13} />
            {board.pipeline.name}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}>
            <Users size={13} />
            {totalDeals} leads
          </span>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}>
            <MessagesSquare size={13} />
            {connectedLeads} con chat
          </span>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}>
            <MessageSquareText size={13} />
            {totalUnread} sin leer
          </span>
        </div>
      </div>

      <div className="interactive-card flex items-center gap-3 p-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: 'var(--surface-2)', color: 'var(--accent)' }}>
          <Search size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="section-label">Filtro rapido</p>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por nombre, telefono o ultimo mensaje"
            className="mt-2 w-full bg-transparent text-sm outline-none"
            style={{ color: 'var(--ink-primary)' }}
          />
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-x-auto">
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="flex gap-4 h-full items-start pb-2">
            {filteredColumns.map((column) => (
              <KanbanColumnComponent
                key={column.stage.id}
                column={column}
                onAddDeal={(stageId) => setAddingToStage(stageId)}
                selectedDealId={selectedDealId}
                onOpenDeal={setSelectedDealId}
              />
            ))}
          </div>

          <DragOverlay dropAnimation={null}>
            {activeDeal ? (
              <div
                className="interactive-card p-4 w-80 shadow-lg cursor-grabbing rotate-3 scale-105 opacity-95"
                style={{ borderColor: 'var(--accent)', boxShadow: '0 20px 40px -10px rgba(5, 150, 105, 0.3)' }}
              >
                <div className="flex items-start gap-3">
                  <Avatar name={leadName(activeDeal)} size="sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug truncate" style={{ color: 'var(--ink-primary)' }}>
                      {leadName(activeDeal)}
                    </p>
                    <p className="mt-1 truncate text-xs" style={{ color: 'var(--ink-secondary)' }}>
                      {leadPhone(activeDeal) ?? activeDeal.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-xs leading-5" style={{ color: 'var(--ink-secondary)' }}>
                      {leadPreview(activeDeal)}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>

      {addingToStage && (
        <CreateDealModal
          pipelineId={pipelineId!}
          stageId={addingToStage}
          onClose={() => setAddingToStage(null)}
        />
      )}

      {selectedDeal ? (
        <ConversationModal
          deal={selectedDeal.deal}
          stageName={selectedDeal.stageName}
          onClose={() => setSelectedDealId(null)}
        />
      ) : null}
    </div>
  )
}
