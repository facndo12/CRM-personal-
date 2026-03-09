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
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-indigo-500" size={32} />
      </div>
    )
  }

  // Mientras redirige, mostrar loading
  if (pipelines?.length === 1) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-indigo-500" size={32} />
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Deals</h1>
        <p className="text-gray-400 text-sm mt-0.5">Seleccioná un pipeline</p>
      </div>

      <div className="grid grid-cols-1 gap-3 max-w-lg">
        {pipelines?.map((pipeline: any) => (
          <button
            key={pipeline.id}
            onClick={() => router.push(`/deals/${pipeline.id}`)}
            className="bg-gray-900 border border-gray-800 hover:border-indigo-500 rounded-xl p-4 text-left transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <KanbanSquare size={20} className="text-indigo-400" />
                <div>
                  <p className="text-white font-medium">{pipeline.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {pipeline.stages.length} etapas
                  </p>
                </div>
              </div>
              <ArrowRight size={16} className="text-gray-600 group-hover:text-indigo-400 transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}