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

// ─── Tarjeta ─────────────────────────────────────────────────────
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
        background: 'var(--surface-0)',
        borderColor: isDragging ? 'var(--accent)' : 'var(--border-1)',
        boxShadow: isDragging ? '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)' : 'none',
      }}
      {...attributes}
      className={clsx(
        'interactive-card flex overflow-hidden border transition-all duration-200 group relative',
        isDragging ? 'opacity-90 z-50 ring-2 ring-violet-500/20' : ''
      )}
    >
      {/* Drag handle grip area — 6 dots pattern */}
      <div
        {...listeners}
        className="flex w-6 shrink-0 cursor-grab items-start justify-center pt-3 pb-2 transition-colors active:cursor-grabbing hover:bg-black/[0.02] dark:hover:bg-white/[0.02] touch-none"
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
            <span className="text-[12px] font-bold tracking-tight" style={{ color: 'var(--semantic-success)' }}>
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
              <AlertTriangle size={10} strokeWidth={2.5} /> Podrido
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

// ─── Columna droppable ────────────────────────────────────────────
function KanbanColumnComponent({
  column,
  onAddDeal,
}: {
  column: KanbanColumn
  onAddDeal: (stageId: string) => void
}) {
  // useDroppable hace que la columna sea una zona donde se pueden soltar cards
  const { setNodeRef, isOver } = useDroppable({ id: column.stage.id })

  return (
    <div className="shrink-0 w-80 flex flex-col bg-slate-50/80 rounded-2xl border border-slate-200/60 shadow-sm backdrop-blur-sm animate-fade-in relative max-h-full">
      {/* Header */}
      <div className="p-4 border-b border-slate-200/60 bg-white/60 rounded-t-2xl sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full shadow-inner border border-black/5" style={{ backgroundColor: column.stage.color }} />
            <span className="text-slate-900 text-sm font-extrabold tracking-tight">{column.stage.name}</span>
            <span className="bg-white border border-slate-200 text-slate-600 font-bold text-[10px] px-2 py-0.5 rounded-full shadow-sm">
              {column.count}
            </span>
          </div>
          <button
            onClick={() => onAddDeal(column.stage.id)}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            title="Crear negocio en esta etapa"
          >
            <Plus size={16} strokeWidth={2.5}/>
          </button>
        </div>
        {column.totalValue > 0 && (
          <p className="text-xs font-bold text-emerald-600 mt-2 flex items-center gap-1">
            <DollarSign size={12} strokeWidth={2.5}/> {column.totalValue.toLocaleString()}
          </p>
        )}
      </div>

      {/* Zona droppable — se pone azulada cuando arrastrás encima */}
      <div
        ref={setNodeRef}
        className={clsx(
          'flex-1 p-3 space-y-3 min-h-[150px] rounded-b-2xl transition-all duration-300 overflow-y-auto',
          isOver ? 'bg-primary-50 border-2 border-dashed border-primary-300' : 'border-2 border-transparent'
        )}
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

// ─── Modal crear deal ─────────────────────────────────────────────
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
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 w-full max-w-md animate-slide-up">
        <h3 className="text-slate-900 font-extrabold text-xl mb-6 tracking-tight flex items-center gap-2">
            <span className="bg-primary-100 text-primary-600 p-1.5 rounded-lg"><Plus size={20} strokeWidth={3}/></span>
            Nuevo Negocio
        </h3>
        <div className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título del deal (ej: Acme Corp) *"
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-[3px] focus:ring-primary-500/30 focus:border-primary-500 font-medium placeholder-slate-400 transition-all"
            autoFocus
          />
          <div className="relative">
            <DollarSign size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Monto estimado (opcional)"
                type="number"
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-[3px] focus:ring-primary-500/30 focus:border-primary-500 font-medium placeholder-slate-400 transition-all"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-8 pt-5 border-t border-slate-100">
          <button
            onClick={() => mutation.mutate()}
            disabled={!title || mutation.isPending}
            className="btn-primary flex-1 py-2.5"
          >
            {mutation.isPending && <Loader2 size={16} className="animate-spin" />}
            Agregar y guardar
          </button>
          <button
            onClick={onClose}
            className="btn-secondary flex-1 py-2.5"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Página Kanban ────────────────────────────────────────────────
export default function KanbanPage() {
  const { pipelineId } = useParams<{ pipelineId: string }>()
  const queryClient = useQueryClient()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [addingToStage, setAddingToStage] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    })
  )

  const { data: board, isLoading } = useQuery<KanbanBoard>({
    queryKey: ['kanban', pipelineId],
    queryFn:  () => dealsApi.getKanban(pipelineId).then((r) => r.data),
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
    console.log('dragEnd', {
      activeId: event.active.id,
      overId:   event.over?.id,
    })
    const { active, over } = event
    setActiveId(null)
    if (!over || !board) return

    const dealId = active.id as string
    const overId  = over.id as string

    // Buscar la columna origen del deal
    const sourceColumn = board.columns.find((c) => c.deals.some((d) => d.id === dealId))
    if (!sourceColumn) return

    // Determinar columna destino:
    // El over puede ser el ID de una stage (columna) o el ID de un deal
    let targetColumn = board.columns.find((c) => c.stage.id === overId)

    // Si no es una columna, es un deal — buscar a qué columna pertenece
    if (!targetColumn) {
      targetColumn = board.columns.find((c) => c.deals.some((d) => d.id === overId))
    }

    if (!targetColumn) return

    // Calcular posición dentro de la columna destino
    const overDealIndex = targetColumn.deals.findIndex((d) => d.id === overId)
    const targetPosition = overDealIndex === -1 ? targetColumn.deals.length : overDealIndex

    moveMutation.mutate({
      dealId,
      stageId:  targetColumn.stage.id,
      position: targetPosition,
    })
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-indigo-500" size={32} />
      </div>
    )
  }

  if (!board) return null

  const totalDeals = board.columns.reduce((s, c) => s + c.count, 0)
  const totalValue = board.columns.reduce((s, c) => s + c.totalValue, 0)

  return (
    <div className="flex flex-col h-full bg-white relative animate-fade-in">
      <div className="px-8 py-6 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white z-10 sticky top-0">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{board.pipeline.name}</h1>
          <p className="text-slate-500 font-medium mt-1 flex items-center gap-2">
            <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-bold">{totalDeals} negocios en pipeline</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md text-xs border border-emerald-100">
                Monto proyectado: ${totalValue.toLocaleString()}
            </span>
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto p-4">
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="flex gap-3 h-full items-start">
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
              <div className="bg-white border-2 border-primary-500 rounded-xl p-4 w-80 shadow-2xl shadow-primary-500/30 rotate-3 cursor-grabbing scale-105 transition-transform flex flex-col gap-2 opacity-95">
                <p className="text-slate-900 text-sm font-bold leading-snug">{activeDeal.title}</p>
                {activeDeal.value && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-md w-5 h-5">
                        <DollarSign size={12} strokeWidth={3} />
                    </div>
                    <span className="text-emerald-700 text-xs font-bold">${activeDeal.value.toLocaleString()}</span>
                  </div>
                )}
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>

      {addingToStage && (
        <CreateDealModal
          pipelineId={pipelineId}
          stageId={addingToStage}
          onClose={() => setAddingToStage(null)}
        />
      )}
    </div>
  )
}