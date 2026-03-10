'use client'

import { useQuery } from '@tanstack/react-query'
import { dashboardApi } from '@/lib/api'
import type { DashboardData } from '@/types'
import Link from 'next/link'
import {
  Users, KanbanSquare, DollarSign, Activity,
  Loader2, PhoneCall, Send, Calendar,
  CheckSquare, MessageSquare, Clock, ArrowRight,
} from 'lucide-react'
import clsx from 'clsx'

const STATUS_COLORS: Record<string, string> = {
  LEAD:      'bg-blue-500/10 text-blue-400',
  QUALIFIED: 'bg-purple-500/10 text-purple-400',
  ACTIVE:    'bg-green-500/10 text-green-400',
  CUSTOMER:  'bg-emerald-500/10 text-emerald-400',
  CHURNED:   'bg-red-500/10 text-red-400',
}

const ACTIVITY_ICONS: Record<string, any> = {
  CALL:    PhoneCall,
  EMAIL:   Send,
  MEETING: Calendar,
  TASK:    CheckSquare,
  NOTE:    MessageSquare,
  OTHER:   Clock,
}

function MetricCard({
  title, value, subtitle, icon: Icon, color,
}: {
  title:    string
  value:    string | number
  subtitle?: string
  icon:     any
  color:    string
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-400 text-sm">{title}</p>
        <div className={clsx('w-8 h-8 rounded-lg flex items-center justify-center', color)}>
          <Icon size={16} />
        </div>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
    </div>
  )
}

export default function DashboardPage() {
  const { data, isLoading } = useQuery<DashboardData>({
    queryKey: ['dashboard'],
    queryFn:  () => dashboardApi.get().then((r) => r.data),
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-indigo-500" size={32} />
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-0.5">Resumen de tu CRM</p>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Contactos"
          value={data.contacts.total}
          subtitle="activos en el CRM"
          icon={Users}
          color="bg-blue-500/10 text-blue-400"
        />
        <MetricCard
          title="Deals abiertos"
          value={data.deals.total}
          subtitle="en pipeline activo"
          icon={KanbanSquare}
          color="bg-purple-500/10 text-purple-400"
        />
        <MetricCard
          title="Valor en pipeline"
          value={`$${data.deals.pipelineValue.toLocaleString()}`}
          subtitle="total estimado"
          icon={DollarSign}
          color="bg-green-500/10 text-green-400"
        />
        <MetricCard
          title="Actividades"
          value={data.recentActivities.length}
          subtitle="en los últimos registros"
          icon={Activity}
          color="bg-orange-500/10 text-orange-400"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Deals por etapa */}
        <div className="col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h3 className="text-white font-medium mb-4">Deals por etapa</h3>
          {data.deals.byStage.length === 0 ? (
            <p className="text-gray-500 text-sm text-center py-8">No hay deals todavía</p>
          ) : (
            <div className="space-y-3">
              {data.deals.byStage.map((stage) => {
                const maxCount = Math.max(...data.deals.byStage.map((s) => s.count))
                const pct = maxCount > 0 ? (stage.count / maxCount) * 100 : 0
                return (
                  <div key={stage.stageId}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: stage.color }}
                        />
                        <span className="text-sm text-gray-300">{stage.stageName}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-green-400">
                          ${stage.value.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400 w-6 text-right">
                          {stage.count}
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: stage.color }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Contactos por estado */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h3 className="text-white font-medium mb-4">Contactos por estado</h3>
          {data.contacts.byStatus.length === 0 ? (
            <p className="text-gray-500 text-sm text-center py-8">No hay contactos</p>
          ) : (
            <div className="space-y-2">
              {data.contacts.byStatus.map((s) => (
                <div key={s.status} className="flex items-center justify-between">
                  <span className={clsx(
                    'text-xs px-2 py-1 rounded-full font-medium',
                    STATUS_COLORS[s.status] ?? 'bg-gray-500/10 text-gray-400'
                  )}>
                    {s.status}
                  </span>
                  <span className="text-sm text-white font-medium">{s.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Actividad reciente */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h3 className="text-white font-medium mb-4">Actividad reciente</h3>
          {data.recentActivities.length === 0 ? (
            <p className="text-gray-500 text-sm text-center py-8">No hay actividades</p>
          ) : (
            <div className="space-y-3">
              {data.recentActivities.map((activity) => {
                const Icon = ACTIVITY_ICONS[activity.type] ?? Clock
                return (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-gray-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={12} className="text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm truncate">{activity.title}</p>
                      {activity.contactName && (
                        <p className="text-gray-500 text-xs">{activity.contactName}</p>
                      )}
                    </div>
                    <p className="text-gray-600 text-xs shrink-0">
                      {new Date(activity.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Contactos recientes */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-medium">Contactos recientes</h3>
            <Link
              href="/contacts"
              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              Ver todos <ArrowRight size={12} />
            </Link>
          </div>
          {data.contacts.recent.length === 0 ? (
            <p className="text-gray-500 text-sm text-center py-8">No hay contactos</p>
          ) : (
            <div className="space-y-3">
              {data.contacts.recent.map((contact) => (
                <Link
                  key={contact.id}
                  href={`/contacts/${contact.id}`}
                  className="flex items-center gap-3 hover:bg-gray-800 rounded-lg p-1.5 -mx-1.5 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-medium shrink-0">
                    {contact.firstName[0]}{contact.lastName?.[0] ?? ''}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm truncate">
                      {contact.firstName} {contact.lastName}
                    </p>
                    <p className="text-gray-500 text-xs">{contact.status}</p>
                  </div>
                  <span className={clsx(
                    'text-xs font-medium',
                    contact.score >= 70 ? 'text-green-400' :
                    contact.score >= 40 ? 'text-yellow-400' : 'text-gray-500'
                  )}>
                    {contact.score}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}