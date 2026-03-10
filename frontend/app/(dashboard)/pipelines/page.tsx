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
          className={clsx(
            'w-5 h-5 rounded-full transition-transform',
            value === c ? 'ring-2 ring-white ring-offset-1 ring-offset-gray-900 scale-110' : ''
          )}
          style={{ backgroundColor: c }}
        />
      ))}
    </div>
  )
}

export default function PipelinesPage() {
  const queryClient = useQueryClient()
  const [newPipelineName, setNewPipelineName]     = useState('')
  const [editingPipeline, setEditingPipeline]     = useState<string | null>(null)
  const [editingPipelineName, setEditingPipelineName] = useState('')
  const [expandedPipeline, setExpandedPipeline]   = useState<string | null>(null)
  const [newStageName, setNewStageName]           = useState('')
  const [newStageColor, setNewStageColor]         = useState('#6366f1')
  const [editingStage, setEditingStage]           = useState<string | null>(null)
  const [editingStageData, setEditingStageData]   = useState({ name: '', color: '' })

  const { data: pipelines, isLoading } = useQuery<Pipeline[]>({
    queryKey: ['pipelines'],
    queryFn:  () => pipelinesApi.list().then((r) => r.data),
  })

  const createPipeline = useMutation({
    mutationFn: () => pipelinesApi.create({ name: newPipelineName }),
    onSuccess:  () => {
      queryClient.invalidateQueries({ queryKey: ['pipelines'] })
      setNewPipelineName('')
    },
  })

  const updatePipeline = useMutation({
    mutationFn: (id: string) => pipelinesApi.update(id, { name: editingPipelineName }),
    onSuccess:  () => {
      queryClient.invalidateQueries({ queryKey: ['pipelines'] })
      setEditingPipeline(null)
    },
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pipelines'] })
      setEditingStage(null)
    },
  })

  const deleteStage = useMutation({
    mutationFn: ({ pipelineId, stageId }: { pipelineId: string; stageId: string }) =>
      pipelinesApi.deleteStage(pipelineId, stageId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['pipelines'] }),
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-indigo-500" size={32} />
      </div>
    )
  }

  return (
    <div className="p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Pipelines</h1>
        <p className="text-gray-400 text-sm mt-0.5">Gestioná tus pipelines y etapas de venta</p>
      </div>

      {/* Crear pipeline */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6 flex gap-3">
        <input
          value={newPipelineName}
          onChange={(e) => setNewPipelineName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && newPipelineName && createPipeline.mutate()}
          placeholder="Nombre del nuevo pipeline..."
          className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
        />
        <button
          onClick={() => createPipeline.mutate()}
          disabled={!newPipelineName || createPipeline.isPending}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {createPipeline.isPending
            ? <Loader2 size={14} className="animate-spin" />
            : <Plus size={14} />
          }
          Crear pipeline
        </button>
      </div>

      {/* Lista de pipelines */}
      {pipelines?.length === 0 ? (
        <div className="text-center py-16">
          <Layers size={48} className="text-gray-700 mx-auto mb-3" />
          <p className="text-gray-400">No tenés pipelines todavía</p>
          <p className="text-gray-600 text-sm mt-1">Creá uno arriba para empezar</p>
        </div>
      ) : (
        <div className="space-y-3">
          {pipelines?.map((pipeline) => (
            <div key={pipeline.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">

              {/* Header del pipeline */}
              <div className="flex items-center gap-3 p-4">
                <button
                  onClick={() => setExpandedPipeline(
                    expandedPipeline === pipeline.id ? null : pipeline.id
                  )}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronRight
                    size={16}
                    className={clsx('transition-transform', expandedPipeline === pipeline.id && 'rotate-90')}
                  />
                </button>

                {editingPipeline === pipeline.id ? (
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      value={editingPipelineName}
                      onChange={(e) => setEditingPipelineName(e.target.value)}
                      className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      autoFocus
                    />
                    <button
                      onClick={() => updatePipeline.mutate(pipeline.id)}
                      className="text-green-400 hover:text-green-300"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => setEditingPipeline(null)}
                      className="text-gray-500 hover:text-gray-300"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-white font-medium">{pipeline.name}</span>
                    <span className="text-xs text-gray-500">
                      {pipeline.stages.length} etapas
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2 ml-auto">
                  <Link
                    href={`/deals/${pipeline.id}`}
                    className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Ver kanban
                  </Link>
                  <button
                    onClick={() => {
                      setEditingPipeline(pipeline.id)
                      setEditingPipelineName(pipeline.name)
                    }}
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => deletePipeline.mutate(pipeline.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              {/* Etapas expandidas */}
              {expandedPipeline === pipeline.id && (
                <div className="border-t border-gray-800 p-4">
                  <div className="space-y-2 mb-4">
                    {pipeline.stages.map((stage) => (
                      <div key={stage.id} className="flex items-center gap-3 bg-gray-800/50 rounded-lg px-3 py-2">
                        {editingStage === stage.id ? (
                          <div className="flex items-center gap-2 flex-1">
                            <input
                              value={editingStageData.name}
                              onChange={(e) => setEditingStageData({ ...editingStageData, name: e.target.value })}
                              className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              autoFocus
                            />
                            <ColorPicker
                              value={editingStageData.color}
                              onChange={(c) => setEditingStageData({ ...editingStageData, color: c })}
                            />
                            <button
                              onClick={() => updateStage.mutate({ pipelineId: pipeline.id, stageId: stage.id })}
                              className="text-green-400 hover:text-green-300"
                            >
                              <Check size={14} />
                            </button>
                            <button
                              onClick={() => setEditingStage(null)}
                              className="text-gray-500 hover:text-gray-300"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ) : (
                          <>
                            <div
                              className="w-3 h-3 rounded-full shrink-0"
                              style={{ backgroundColor: stage.color }}
                            />
                            <span className="text-sm text-gray-300 flex-1">{stage.name}</span>
                            <span className="text-xs text-gray-600">pos. {stage.position}</span>
                            <button
                              onClick={() => {
                                setEditingStage(stage.id)
                                setEditingStageData({ name: stage.name, color: stage.color })
                              }}
                              className="text-gray-600 hover:text-gray-300 transition-colors"
                            >
                              <Pencil size={12} />
                            </button>
                            <button
                              onClick={() => deleteStage.mutate({ pipelineId: pipeline.id, stageId: stage.id })}
                              className="text-gray-600 hover:text-red-400 transition-colors"
                            >
                              <Trash2 size={12} />
                            </button>
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Agregar nueva etapa */}
                  <div className="bg-gray-800/30 rounded-lg p-3 space-y-3">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      Nueva etapa
                    </p>
                    <input
                      value={newStageName}
                      onChange={(e) => setNewStageName(e.target.value)}
                      placeholder="Nombre de la etapa..."
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
                    />
                    <ColorPicker value={newStageColor} onChange={setNewStageColor} />
                    <button
                      onClick={() => createStage.mutate(pipeline.id)}
                      disabled={!newStageName || createStage.isPending}
                      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                    >
                      {createStage.isPending
                        ? <Loader2 size={12} className="animate-spin" />
                        : <Plus size={12} />
                      }
                      Agregar etapa
                    </button>
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