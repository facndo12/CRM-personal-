'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { pipelinesApi } from '@/lib/api'
import type { Pipeline, Stage } from '@/types'
import {
  Plus, Trash2, Pencil, Check, X,
  Loader2, ChevronRight, Layers,
} from 'lucide-react'
import clsx from 'clsx'
import Link from 'next/link'

const COLORS = [
  '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e',
  '#f97316', '#eab308', '#22c55e', '#14b8a6',
  '#3b82f6', '#06b6d4', '#a855f7', '#64748b',
]

function ColorPicker({ value, onChange }: { value: string; onChange: (c: string) => void }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {COLORS.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={clsx('h-5 w-5 rounded-full transition-transform', value === c ? 'scale-110 ring-2 ring-white ring-offset-1' : '')}
          style={{ backgroundColor: c }}
        />
      ))}
    </div>
  )
}

export default function PipelinesPage() {
  const queryClient = useQueryClient()
  const [newPipelineName, setNewPipelineName]         = useState('')
  const [editingPipeline, setEditingPipeline]         = useState<string | null>(null)
  const [editingPipelineName, setEditingPipelineName] = useState('')
  const [expandedPipeline, setExpandedPipeline]       = useState<string | null>(null)
  const [newStageName, setNewStageName]               = useState('')
  const [newStageColor, setNewStageColor]             = useState('#6366f1')
  const [editingStage, setEditingStage]               = useState<string | null>(null)
  const [editingStageData, setEditingStageData]       = useState({ name: '', color: '' })

  const { data: pipelines, isLoading } = useQuery<Pipeline[]>({
    queryKey: ['pipelines'],
    queryFn:  () => pipelinesApi.list().then((r) => r.data),
  })

  const createPipeline = useMutation({
    mutationFn: () => pipelinesApi.create({ name: newPipelineName }),
    onSuccess:  () => { queryClient.invalidateQueries({ queryKey: ['pipelines'] }); setNewPipelineName('') },
  })

  const updatePipeline = useMutation({
    mutationFn: (id: string) => pipelinesApi.update(id, { name: editingPipelineName }),
    onSuccess:  () => { queryClient.invalidateQueries({ queryKey: ['pipelines'] }); setEditingPipeline(null) },
  })

  const deletePipeline = useMutation({
    mutationFn: (id: string) => pipelinesApi.delete(id),
    onSuccess:  () => queryClient.invalidateQueries({ queryKey: ['pipelines'] }),
  })

  const createStage = useMutation({
    mutationFn: (pipelineId: string) =>
      pipelinesApi.createStage(pipelineId, { name: newStageName, color: newStageColor }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pipelines'] })
      setNewStageName('')
      setNewStageColor('#6366f1')
    },
  })

  const updateStage = useMutation({
    mutationFn: ({ pipelineId, stageId }: { pipelineId: string; stageId: string }) =>
      pipelinesApi.updateStage(pipelineId, stageId, editingStageData),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['pipelines'] }); setEditingStage(null) },
  })

  const deleteStage = useMutation({
    mutationFn: ({ pipelineId, stageId }: { pipelineId: string; stageId: string }) =>
      pipelinesApi.deleteStage(pipelineId, stageId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['pipelines'] }),
  })

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-5 w-5 animate-spin rounded-full border-2" style={{ borderColor: 'var(--border-2)', borderTopColor: 'var(--accent)' }} />
      </div>
    )
  }

  return (
    <div className="animate-fade-in p-4 md:p-8 max-w-[900px]">
      <div className="mb-8">
        <h1 className="page-title">Pipelines</h1>
        <p className="page-subtitle">Configurá las etapas por las que pasan tus negocios</p>
      </div>

      {/* Create pipeline */}
      <div className="interactive-card mb-6 flex gap-3 p-4">
        <input
          value={newPipelineName}
          onChange={(e) => setNewPipelineName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && newPipelineName && createPipeline.mutate()}
          placeholder="Nombre del nuevo embudo (ej. Proceso B2B)..."
          className="ctrl-input flex-1"
        />
        <button
          onClick={() => createPipeline.mutate()}
          disabled={!newPipelineName || createPipeline.isPending}
          className="btn-primary shrink-0"
        >
          {createPipeline.isPending ? <Loader2 size={13} className="animate-spin" /> : <Plus size={15} strokeWidth={2.5} />}
          Crear
        </button>
      </div>

      {/* Pipeline list */}
      {pipelines?.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center rounded-xl py-24 text-center"
          style={{ border: '1px dashed var(--border-2)' }}
        >
          <Layers size={40} strokeWidth={1.25} className="mb-3" style={{ color: 'var(--ink-muted)' }} />
          <p className="text-sm font-medium" style={{ color: 'var(--ink-secondary)' }}>No tenés embudos configurados</p>
          <p className="mt-1 text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>Creá uno arriba para organizar tus ventas</p>
        </div>
      ) : (
        <div className="space-y-2">
          {pipelines?.map((pipeline) => (
            <div key={pipeline.id} className="interactive-card overflow-hidden">

              {/* Pipeline header */}
              <div className="flex items-center gap-3 p-4">
                <button
                  onClick={() => setExpandedPipeline(expandedPipeline === pipeline.id ? null : pipeline.id)}
                  className="rounded-md p-1 transition-colors"
                  style={{ color: 'var(--ink-tertiary)' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                >
                  <ChevronRight
                    size={16}
                    className={clsx('transition-transform duration-200', expandedPipeline === pipeline.id && 'rotate-90')}
                  />
                </button>

                {editingPipeline === pipeline.id ? (
                  <div className="flex flex-1 items-center gap-2">
                    <input
                      value={editingPipelineName}
                      onChange={(e) => setEditingPipelineName(e.target.value)}
                      className="ctrl-input flex-1"
                      autoFocus
                    />
                    <button
                      onClick={() => updatePipeline.mutate(pipeline.id)}
                      className="rounded-md p-1.5 transition-colors"
                      style={{ color: 'var(--semantic-success)' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--semantic-success-bg)'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                    >
                      <Check size={15} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={() => setEditingPipeline(null)}
                      className="rounded-md p-1.5 transition-colors"
                      style={{ color: 'var(--ink-tertiary)' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                    >
                      <X size={15} />
                    </button>
                  </div>
                ) : (
                  <div
                    className="flex flex-1 cursor-pointer items-center gap-2.5 min-w-0"
                    onClick={() => setExpandedPipeline(expandedPipeline === pipeline.id ? null : pipeline.id)}
                  >
                    <span className="truncate text-sm font-semibold" style={{ color: 'var(--ink-primary)' }}>
                      {pipeline.name}
                    </span>

                    {/* Stage track preview — the CT signature */}
                    {pipeline.stages.length > 0 && (
                      <div className="stage-track flex-1 max-w-[120px]">
                        {pipeline.stages.map((s: Stage) => (
                          <div key={s.id} className="stage-track-segment" style={{ backgroundColor: s.color }} />
                        ))}
                      </div>
                    )}

                    <span
                      className="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold"
                      style={{ background: 'var(--accent-muted)', color: 'var(--accent-text)', border: '1px solid rgba(124,58,237,0.15)' }}
                    >
                      {pipeline.stages.length} etapas
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-1 shrink-0 ml-auto">
                  <Link
                    href={`/deals/${pipeline.id}`}
                    className="rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors"
                    style={{ color: 'var(--accent)' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--accent-muted)'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                  >
                    Ver Kanban
                  </Link>
                  <button
                    onClick={() => { setEditingPipeline(pipeline.id); setEditingPipelineName(pipeline.name) }}
                    className="rounded-md p-1.5 transition-colors"
                    style={{ color: 'var(--ink-tertiary)' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                  >
                    <Pencil size={13} />
                  </button>
                  <button
                    onClick={() => { if (confirm(`¿Eliminar todo el embudo "${pipeline.name}"?`)) deletePipeline.mutate(pipeline.id) }}
                    className="rounded-md p-1.5 transition-colors"
                    style={{ color: 'var(--ink-tertiary)' }}
                    onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--semantic-danger)'; ;(e.currentTarget as HTMLElement).style.background = 'var(--semantic-danger-bg)' }}
                    onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-tertiary)'; ;(e.currentTarget as HTMLElement).style.background = 'transparent' }}
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>

              {/* Expanded stages */}
              {expandedPipeline === pipeline.id && (
                <div style={{ borderTop: '1px solid var(--border-0)', background: 'var(--surface-2)' }} className="p-4">
                  <div className="space-y-1.5 mb-4">
                    {pipeline.stages.map((stage: Stage) => (
                      <div
                        key={stage.id}
                        className="group flex items-center gap-3 rounded-lg px-3 py-2.5"
                        style={{ background: 'var(--surface-0)', border: '1px solid var(--border-1)' }}
                      >
                        {editingStage === stage.id ? (
                          <div className="flex flex-1 flex-wrap items-center gap-3">
                            <input
                              value={editingStageData.name}
                              onChange={(e) => setEditingStageData({ ...editingStageData, name: e.target.value })}
                              className="ctrl-input flex-1 min-w-[150px]"
                              autoFocus
                            />
                            <ColorPicker value={editingStageData.color} onChange={(c) => setEditingStageData({ ...editingStageData, color: c })} />
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => updateStage.mutate({ pipelineId: pipeline.id, stageId: stage.id })}
                                className="rounded-md p-1.5"
                                style={{ color: 'var(--semantic-success)' }}
                              >
                                <Check size={14} strokeWidth={2.5} />
                              </button>
                              <button
                                onClick={() => setEditingStage(null)}
                                className="rounded-md p-1.5"
                                style={{ color: 'var(--ink-tertiary)' }}
                              >
                                <X size={14} />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: stage.color }} />
                            <span className="flex-1 text-[12px] font-medium" style={{ color: 'var(--ink-primary)' }}>
                              {stage.name}
                            </span>
                            <span className="text-[10px]" style={{ color: 'var(--ink-tertiary)' }}>pos. {stage.position}</span>
                            <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                              <button
                                onClick={() => { setEditingStage(stage.id); setEditingStageData({ name: stage.name, color: stage.color }) }}
                                className="rounded-md p-1.5 transition-colors"
                                style={{ color: 'var(--ink-tertiary)' }}
                                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
                                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                              >
                                <Pencil size={12} />
                              </button>
                              <button
                                onClick={() => { if (confirm(`¿Borrar etapa "${stage.name}"?`)) deleteStage.mutate({ pipelineId: pipeline.id, stageId: stage.id }) }}
                                className="rounded-md p-1.5 transition-colors"
                                style={{ color: 'var(--ink-tertiary)' }}
                                onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--semantic-danger)'; ;(e.currentTarget as HTMLElement).style.background = 'var(--semantic-danger-bg)' }}
                                onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-tertiary)'; ;(e.currentTarget as HTMLElement).style.background = 'transparent' }}
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Add stage */}
                  <div className="rounded-lg p-4" style={{ border: '1px dashed var(--border-2)' }}>
                    <p className="section-label mb-3 flex items-center gap-1"><Plus size={10} strokeWidth={3} /> Nueva etapa</p>
                    <input
                      value={newStageName}
                      onChange={(e) => setNewStageName(e.target.value)}
                      placeholder="Nombre de la etapa (ej. Negociación)..."
                      className="ctrl-input mb-3 w-full"
                    />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>Color:</span>
                        <ColorPicker value={newStageColor} onChange={setNewStageColor} />
                      </div>
                      <button
                        onClick={() => createStage.mutate(pipeline.id)}
                        disabled={!newStageName || createStage.isPending}
                        className="btn-primary shrink-0"
                      >
                        {createStage.isPending ? <Loader2 size={12} className="animate-spin" /> : <Plus size={13} strokeWidth={2.5} />}
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}