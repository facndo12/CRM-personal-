'use client'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { pipelinesApi } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { Loader2, KanbanSquare, ArrowRight } from 'lucide-react'

export default function DealsPage() {
  const router = useRouter()

  const { data: pipelines, isLoading } = useQuery({
    queryKey: ['pipelines'],
    queryFn:  () => pipelinesApi.list().then((r) => r.data),
  })

  useEffect(() => {
    if (pipelines?.length === 1) {
      router.push(`/deals/${pipelines[0].id}`)
    }
  }, [pipelines, router])

  if (isLoading || pipelines?.length === 1) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div
          className="h-5 w-5 animate-spin rounded-full border-2"
          style={{ borderColor: 'var(--border-2)', borderTopColor: 'var(--accent)' }}
        />
      </div>
    )
  }

  return (
    <div className="animate-fade-in p-4 md:p-8 max-w-[900px]">
      <div className="mb-8">
        <h1 className="page-title">Embudos de Ventas</h1>
        <p className="page-subtitle">Seleccioná un pipeline para administrar tus negocios</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
        {pipelines?.map((pipeline: any) => (
          <button
            key={pipeline.id}
            onClick={() => router.push(`/deals/${pipeline.id}`)}
            className="interactive-card group flex items-center justify-between p-5 text-left"
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}
              >
                <KanbanSquare size={18} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight" style={{ color: 'var(--ink-primary)' }}>
                  {pipeline.name}
                </p>
                <p className="text-[11px] mt-0.5" style={{ color: 'var(--ink-tertiary)' }}>
                  {pipeline.stages.length} etapas
                </p>
              </div>
            </div>
            <ArrowRight size={14} style={{ color: 'var(--ink-tertiary)' }} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        ))}
      </div>
    </div>
  )
}