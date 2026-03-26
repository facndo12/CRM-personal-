'use client'

import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { dashboardApi } from '@/lib/api'
import type { DashboardData } from '@/types'
import Link from 'next/link'
import {
  Users, DollarSign, Activity, TrendingUp,
  PhoneCall, Send, Calendar, CheckSquare, MessageSquare, Clock,
  ArrowUpRight, ArrowRight, GripVertical,
} from 'lucide-react'
import { SkeletonDashboard } from '@/components/ui/skeleton'
import { KpiCard, Sparkline } from '@/components/ui/kpi'
import { Avatar } from '@/components/ui/avatar'
import { Timeline, TimelineItem } from '@/components/ui/timeline'
import clsx from 'clsx'

const ACTIVITY_COLORS: Record<string, string> = {
  CALL:    '#059669',
  EMAIL:   '#0284c7',
  MEETING: '#d97706',
  TASK:    '#7c3aed',
  NOTE:    '#475569',
  OTHER:   '#94a3b8',
}

const ACTIVITY_ICONS: Record<string, string> = {
  CALL:    '📞',
  EMAIL:   '✉️',
  MEETING: '📅',
  TASK:    '☑️',
  NOTE:    '📝',
  OTHER:   '⏱️',
}

export default function DashboardPage() {
  const { data, isLoading } = useQuery<DashboardData>({
    queryKey: ['dashboard'],
    queryFn: () => dashboardApi.get().then((r) => r.data),
  })

  const sparklineData = useMemo(() => {
    if (!data) return {}
    return {
      contacts: [12, 19, 15, data.contacts.total % 20, data.contacts.total],
      deals: [3, 7, 5, 9, data.deals.total],
      activities: [5, 8, 4, 12, data.recentActivities.length],
    }
  }, [data])

  if (isLoading) {
    return (
      <div className="p-4 md:p-8">
        <SkeletonDashboard />
      </div>
    )
  }

  if (!data) return null

  const maxStageCount = Math.max(...data.deals.byStage.map(s => s.count), 1)

  return (
    <div className="animate-fade-in p-4 md:p-8 pb-20 md:pb-8 max-w-[1400px] mx-auto">

      {/* Page header */}
      <div className="mb-6 md:mb-8">
        <h1 className="page-title">Bienvenido</h1>
        <p className="page-subtitle">Tu resumen de ventas</p>
      </div>

      {/* KPI Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        <KpiCard
          label="Contactos"
          value={data.contacts.total}
          sub="en tu cartera"
          icon={<Users size={16} />}
          sparklineData={sparklineData.contacts}
          trend={{ value: 12, label: 'este mes' }}
        />
        <KpiCard
          label="Negocios activos"
          value={data.deals.total}
          sub="en pipelines"
          icon={<TrendingUp size={16} />}
          sparklineData={sparklineData.deals}
          trend={{ value: 8, label: 'vs mes pasado' }}
        />
        <KpiCard
          label="Valor pipeline"
          value={`$${(data.deals.pipelineValue / 1000).toFixed(1)}k`}
          sub="volumen proyectado"
          icon={<DollarSign size={16} />}
          accentColor="var(--gold)"
          sparklineData={[10, 25, 18, 35, 45]}
        />
        <KpiCard
          label="Actividades"
          value={data.recentActivities.length}
          sub="últimas 24hs"
          icon={<Activity size={16} />}
          sparklineData={sparklineData.activities}
        />
      </div>

      {/* Pipeline Overview */}
      {data.deals.byStage.length > 0 && (
        <div className="interactive-card p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="section-label mb-1">Pipeline Overview</p>
              <h2 className="text-lg font-bold" style={{ color: 'var(--ink-primary)' }}>
                Embudo de Ventas
              </h2>
            </div>
            <Link
              href="/deals"
              className="flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: 'var(--accent)' }}
            >
              Ver Kanban <ArrowRight size={14} />
            </Link>
          </div>

          {/* Stage bars */}
          <div className="space-y-3">
            {data.deals.byStage.map((stage) => {
              const pct = (stage.count / maxStageCount) * 100
              return (
                <div key={stage.stageId} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <GripVertical size={14} className="text-[var(--ink-muted)] opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: stage.color }}
                      />
                      <span className="text-sm font-medium" style={{ color: 'var(--ink-secondary)' }}>
                        {stage.stageName}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold" style={{ color: 'var(--ink-primary)' }}>
                        {stage.count}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--ink-tertiary)' }}>
                        ${stage.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: stage.color,
                      opacity: 0.85,
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Lower Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Activity Timeline */}
        <div className="lg:col-span-2 interactive-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="section-label mb-1">Feed</p>
              <h2 className="text-lg font-bold" style={{ color: 'var(--ink-primary)' }}>
                Actividad Reciente
              </h2>
            </div>
          </div>

          {data.recentActivities.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'var(--surface-2)' }}
              >
                <Clock size={24} style={{ color: 'var(--ink-muted)' }} />
              </div>
              <p className="font-medium" style={{ color: 'var(--ink-secondary)' }}>
                Sin actividad reciente
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--ink-tertiary)' }}>
                Las actividades aparecerán aquí cuando registres llamadas, emails o reuniones.
              </p>
            </div>
          ) : (
            <Timeline>
              {data.recentActivities.slice(0, 8).map((activity) => (
                <TimelineItem
                  key={activity.id}
                  icon={ACTIVITY_ICONS[activity.type] ?? '📌'}
                  iconColor={ACTIVITY_COLORS[activity.type] ?? 'var(--ink-tertiary)'}
                  title={activity.title}
                  description={activity.contactName ?? undefined}
                  meta={formatRelativeTime(activity.createdAt)}
                />
              ))}
            </Timeline>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">

          {/* Recent Contacts */}
          <div className="interactive-card p-6">
            <div className="flex items-center justify-between mb-5">
              <p className="section-label">Contacto</p>
              <Link
                href="/contacts"
                className="flex items-center gap-1 text-xs font-semibold"
                style={{ color: 'var(--accent)' }}
              >
                Ver todos <ArrowUpRight size={11} />
              </Link>
            </div>

            {data.contacts.recent.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-sm" style={{ color: 'var(--ink-tertiary)' }}>
                  Sin contactos aún
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {data.contacts.recent.slice(0, 5).map((contact) => (
                  <Link
                    key={contact.id}
                    href={`/contacts/${contact.id}`}
                    className="flex items-center gap-3 p-2 -mx-2 rounded-lg transition-colors"
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                  >
                    <Avatar name={`${contact.firstName}${contact.lastName ? ' ' + contact.lastName : ''}`} size="md" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: 'var(--ink-primary)' }}>
                        {contact.firstName} {contact.lastName}
                      </p>
                      <p className="text-xs truncate" style={{ color: 'var(--ink-tertiary)' }}>
                        {contact.status}
                      </p>
                    </div>
                    <span
                      className="text-sm font-bold"
                      style={{
                        color: contact.score >= 70 ? 'var(--semantic-success)' :
                               contact.score >= 40 ? 'var(--semantic-warning)' : 'var(--ink-tertiary)'
                      }}
                    >
                      {contact.score}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="interactive-card p-6">
            <p className="section-label mb-4">Distribución de Leads</p>
            <div className="space-y-2">
              {data.contacts.byStatus.slice(0, 5).map((s) => (
                <div key={s.status} className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: 'var(--ink-secondary)' }}>
                    {s.status}
                  </span>
                  <span className="text-sm font-bold" style={{ color: 'var(--ink-primary)' }}>
                    {s.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 1) return 'ahora'
  if (diffMins < 60) return `hace ${diffMins}m`
  if (diffHours < 24) return `hace ${diffHours}h`
  if (diffDays < 7) return `hace ${diffDays}d`
  return date.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' })
}
