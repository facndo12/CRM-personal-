'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { dealsApi } from '@/lib/api'
import type { KanbanBoard, KanbanCard, KanbanColumn } from '@/types'
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
import { Loader2, Plus, DollarSign, Clock, AlertTriangle } from 'lucide-react'
import clsx from 'clsx'
import { Avatar } from '@/components/ui/avatar'

function DealCard({ deal }: { deal: KanbanCard }) {
  const {
    attributes, listeners, setNodeRef,
    transform, transition, isDragging,
  } = useSortable({ id: deal.id })

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      {...attributes}
      className={clsx(
        'interactive-card flex overflow-hidden transition-all duration-200 group relative',
        isDragging ? 'opacity-60 z-50 ring-2' : ''
      )}
    >
      <div
        {...listeners}
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
        <p className="text-[13px] font-bold leading-snug tracking-tight truncate" style={{ color: 'var(--ink-primary)' }}>
          {deal.title}
        </p>

        {deal.value && (
          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="text-[12px] font-bold tracking-tight" style={{ color: 'var(--accent)' }}>
              ${deal.value.toLocaleString()} {deal.currency}
            </span>
          </div>
        )}

        <div
          className="mt-2.5 flex items-center justify-between pt-2.5"
          style={{ borderTop: '1px solid var(--border-0)' }}
        >
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
          {deal.probability != null && (
            <span
              className="rounded px-1.5 py-0.5 text-[10px] font-bold"
              style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)', border: '1px solid var(--border-0)' }}
            >
              {deal.probability}%
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function KanbanColumnComponent({
  column,
  onAddDeal,
}: {
  column: KanbanColumn
  onAddDeal: (stageId: string) => void
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
            title="Crear negocio en esta etapa"
          >
            <Plus size={16} strokeWidth={2.5}/>
          </button>
        </div>
        {column.totalValue > 0 && (
          <p className="text-xs font-bold mt-2 flex items-center gap-1" style={{ color: 'var(--accent)' }}>
            <DollarSign size={12} strokeWidth={2.5}/> {column.totalValue.toLocaleString()}
          </p>
        )}
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
            <DealCard key={deal.id} deal={deal} />
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
  const [value, setValue] = useState('')

  const mutation = useMutation({
    mutationFn: () =>
      dealsApi.create({ title, value: value ? Number(value) : undefined, pipelineId, stageId }),
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
          Nuevo Negocio
        </h3>
        <div className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título del deal (ej: Acme Corp) *"
            className="ctrl-input"
            autoFocus
          />
          <div className="relative">
            <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--ink-tertiary)' }} />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Monto estimado (opcional)"
              type="number"
              className="ctrl-input !pl-10"
            />
          </div>
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

export default function KanbanPage() {
  const { pipelineId } = useParams<{ pipelineId: string }>()
  const queryClient = useQueryClient()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [addingToStage, setAddingToStage] = useState<string | null>(null)

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['kanban', pipelineId] })
    },
  })

  const activeDeal = board?.columns.flatMap((c) => c.deals).find((d) => d.id === activeId)

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)
    if (!over || !board) return

    const dealId = active.id as string
    const overId  = over.id as string

    let targetColumn = board.columns.find((c) => c.stage.id === overId)
    if (!targetColumn) {
      targetColumn = board.columns.find((c) => c.deals.some((d) => d.id === overId))
    }
    if (!targetColumn) return

    const overDealIndex = targetColumn.deals.findIndex((d) => d.id === overId)
    const targetPosition = overDealIndex === -1 ? targetColumn.deals.length : overDealIndex

    moveMutation.mutate({ dealId, stageId: targetColumn.stage.id, position: targetPosition })
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin" style={{ color: 'var(--accent)' }} size={32} />
      </div>
    )
  }

  if (!board) return null

  const totalDeals = board.columns.reduce((s, c) => s + c.count, 0)
  const totalValue = board.columns.reduce((s, c) => s + c.totalValue, 0)

  return (
    <div className="flex flex-col h-full relative animate-fade-in">
      <div className="px-6 py-5 border-b flex items-center justify-between shrink-0" style={{ borderColor: 'var(--border-1)', background: 'var(--surface-0)' }}>
        <div>
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--ink-primary)' }}>{board.pipeline.name}</h1>
          <p className="text-sm font-medium mt-1 flex items-center gap-2" style={{ color: 'var(--ink-secondary)' }}>
            <span className="px-2.5 py-1 rounded-md text-xs font-bold" style={{ background: 'var(--surface-2)', color: 'var(--ink-secondary)' }}>
              {totalDeals} negocios
            </span>
            <span style={{ color: 'var(--border-2)' }}>•</span>
            <span className="font-bold px-2.5 py-1 rounded-md text-xs" style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}>
              Monto: ${totalValue.toLocaleString()}
            </span>
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto p-4">
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="flex gap-4 h-full items-start">
            {board.columns.map((column) => (
              <KanbanColumnComponent
                key={column.stage.id}
                column={column}
                onAddDeal={(stageId) => setAddingToStage(stageId)}
              />
            ))}
          </div>

          <DragOverlay>
            {activeDeal ? (
              <div
                className="interactive-card p-4 w-80 shadow-lg cursor-grabbing rotate-3 scale-105 opacity-95"
                style={{ borderColor: 'var(--accent)', boxShadow: '0 20px 40px -10px rgba(5, 150, 105, 0.3)' }}
              >
                <p className="text-sm font-bold leading-snug" style={{ color: 'var(--ink-primary)' }}>{activeDeal.title}</p>
                {activeDeal.value && (
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex items-center justify-center rounded-md w-5 h-5" style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}>
                      <DollarSign size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs font-bold" style={{ color: 'var(--accent)' }}>${activeDeal.value.toLocaleString()}</span>
                  </div>
                )}
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
    </div>
  )
}
