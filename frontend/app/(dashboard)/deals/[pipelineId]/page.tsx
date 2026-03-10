'use client'

import { useState, use } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { dealsApi } from '@/lib/api'
import type { KanbanBoard, KanbanCard, KanbanColumn } from '@/types'
import {
  DndContext,
  DragOverlay,
  PointerSensor,
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
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      {...listeners}
      className={clsx(
        'bg-gray-800 border rounded-lg p-3 cursor-grab active:cursor-grabbing select-none',
        isDragging ? 'opacity-40 border-indigo-500' : 'border-gray-700 hover:border-gray-600'
      )}
      >
      <p className="text-white text-sm font-medium leading-snug">{deal.title}</p>
      {deal.value && (
        <div className="flex items-center gap-1 mt-2">
          <DollarSign size={12} className="text-green-400" />
          <span className="text-green-400 text-xs font-medium">
            {deal.value.toLocaleString()} {deal.currency}
          </span>
        </div>
      )}
      <div className="flex items-center justify-between mt-2">
        {deal.isRotten ? (
          <span className="flex items-center gap-1 text-xs text-orange-400">
            <AlertTriangle size={10} /> Podrido
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Clock size={10} /> {deal.daysInStage}d
          </span>
        )}
        {deal.probability != null && (
          <span className="text-xs text-gray-500">{deal.probability}%</span>
        )}
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
    <div className="shrink-0 w-72 flex flex-col bg-gray-900 rounded-xl border border-gray-800">
      {/* Header */}
      <div className="p-3 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: column.stage.color }} />
            <span className="text-white text-sm font-medium">{column.stage.name}</span>
            <span className="bg-gray-800 text-gray-400 text-xs px-1.5 py-0.5 rounded-full">
              {column.count}
            </span>
          </div>
          <button aria-label="boton que no se que hace"
            onClick={() => onAddDeal(column.stage.id)}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
        {column.totalValue > 0 && (
          <p className="text-xs text-green-400 mt-1 pl-4">
            ${column.totalValue.toLocaleString()}
          </p>
        )}
      </div>

      {/* Zona droppable — se pone verde cuando arrastrás encima */}
      <div
        ref={setNodeRef}
        className={clsx(
          'flex-1 p-2 space-y-2 min-h-24 rounded-b-xl transition-colors',
          isOver ? 'bg-indigo-500/10' : ''
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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 w-full max-w-md">
        <h3 className="text-white font-medium mb-4">Nuevo Deal</h3>
        <div className="space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título del deal *"
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
            autoFocus
          />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor (opcional)"
            type="number"
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
          />
        </div>
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => mutation.mutate()}
            disabled={!title || mutation.isPending}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
          >
            {mutation.isPending && <Loader2 size={14} className="animate-spin" />}
            Crear Deal
          </button>
          <button
            onClick={onClose}
            className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Página Kanban ────────────────────────────────────────────────
export default function KanbanPage({
  params,
}: {
  params: Promise<{ pipelineId: string }>
}) {
  const { pipelineId } = use(params)
  const queryClient = useQueryClient()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [addingToStage, setAddingToStage] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
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
    <div className="flex flex-col h-full">
      <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-xl font-bold text-white">{board.pipeline.name}</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {totalDeals} deals · ${totalValue.toLocaleString()} en pipeline
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
              <div className="bg-gray-800 border border-indigo-500 rounded-lg p-3 w-72 shadow-2xl rotate-2 opacity-95">
                <p className="text-white text-sm font-medium">{activeDeal.title}</p>
                {activeDeal.value && (
                  <p className="text-green-400 text-xs mt-1">${activeDeal.value.toLocaleString()}</p>
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