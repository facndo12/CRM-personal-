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

  // Redirigir automáticamente si hay un solo pipeline
  useEffect(() => {
    if (pipelines?.length === 1) {
      router.push(`/deals/${pipelines[0].id}`)
    }
  }, [pipelines, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <Loader2 className="animate-spin text-primary-500" size={40} />
      </div>
    )
  }

  // Mientras redirige, mostrar loading
  if (pipelines?.length === 1) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <Loader2 className="animate-spin text-primary-500" size={40} />
      </div>
    )
  }

  return (
    <div className="p-6 max-w-5xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Embudos de Ventas</h1>
        <p className="text-slate-500 font-medium mt-1">Seleccioná un pipeline para administrar tus negocios</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        {pipelines?.map((pipeline: any) => (
          <button
            key={pipeline.id}
            onClick={() => router.push(`/deals/${pipeline.id}`)}
            className="interactive-card p-5 text-left group flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-50 border border-primary-100 rounded-xl flex items-center justify-center text-primary-600 shadow-sm relative overflow-hidden">
                <KanbanSquare size={20} className="text-primary-600 relative z-10" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-lg tracking-tight group-hover:text-primary-600 transition-colors">{pipeline.name}</p>
                <p className="text-slate-500 font-medium text-sm mt-0.5">
                  {pipeline.stages.length} etapas
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg border border-slate-100 text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:border-primary-100 flex items-center justify-center transition-all bg-white">
               <ArrowRight size={16} strokeWidth={2.5} />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}