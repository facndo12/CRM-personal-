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
    queryFn: () => pipelinesApi.list().then((r) => r.data),
  })

  useEffect(() => {
    if (pipelines?.length === 1) {
      router.push(`/leads/${pipelines[0].id}`)
    }
  }, [pipelines, router])

  if (isLoading || pipelines?.length === 1) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin" size={24} style={{ color: 'var(--accent)' }} />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[900px] animate-fade-in p-4 pb-20 md:p-8 md:pb-8">
      <div className="mb-6 md:mb-8">
        <h1 className="page-title">Leads</h1>
        <p className="page-subtitle">Elegi el pipeline donde queres operar tus conversaciones entrantes.</p>
      </div>

      <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
        {pipelines?.map((pipeline: any) => (
          <button
            key={pipeline.id}
            onClick={() => router.push(`/leads/${pipeline.id}`)}
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
                <p className="mt-0.5 text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>
                  {pipeline.stages.length} stages
                </p>
              </div>
            </div>
            <ArrowRight
              size={14}
              style={{ color: 'var(--ink-tertiary)' }}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
