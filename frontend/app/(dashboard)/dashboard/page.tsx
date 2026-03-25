'use client'

import { useQuery } from '@tanstack/react-query'
import { dashboardApi } from '@/lib/api'
import type { DashboardData } from '@/types'
import Link from 'next/link'
import {
  Users, KanbanSquare, DollarSign, Activity,
  Loader2, PhoneCall, Send, Calendar,
  CheckSquare, MessageSquare, Clock, ArrowUpRight, Layers,
} from 'lucide-react'
import clsx from 'clsx'

const STATUS_DOT: Record<string, string> = {
  LEAD:      '#3b82f6',
  QUALIFIED: '#8b5cf6',
  ACTIVE:    '#22c55e',
  CUSTOMER:  '#10b981',
  CHURNED:   '#ef4444',
}

const ACTIVITY_ICONS: Record<string, any> = {
  CALL:    PhoneCall,
  EMAIL:   Send,
  MEETING: Calendar,
  TASK:    CheckSquare,
  NOTE:    MessageSquare,
  OTHER:   Clock,
}

function KpiCard({
  label, value, sub,
}: { label: string; value: string | number; sub?: string }) {
  return (
    <div
      className="interactive-card flex flex-col gap-1 px-5 py-4"
      style={{ borderLeft: '2px solid var(--accent)' }}
    >
      <p className="section-label">{label}</p>
      <p
        className="data-num text-2xl font-bold leading-none"
        style={{ color: 'var(--ink-primary)' }}
      >
        {value}
      </p>
      {sub && <p className="text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>{sub}</p>}
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
      <div className="flex h-full items-center justify-center">
        <div
          className="h-5 w-5 animate-spin rounded-full border-2"
          style={{ borderColor: 'var(--border-2)', borderTopColor: 'var(--accent)' }}
        />
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="animate-fade-in p-4 md:p-8 max-w-[1200px] mx-auto">

      {/* Page header */}
      <div className="mb-6 md:mb-8">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Resumen de actividad y rendimiento de ventas</p>
      </div>

      {/* ── KPI strip ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6 md:mb-8">
        <KpiCard
          label="Contactos"
          value={data.contacts.total}
          sub="registrados en el CRM"
        />
        <KpiCard
          label="Negocios abiertos"
          value={data.deals.total}
          sub="en pipelines activos"
        />
        <KpiCard
          label="Valor en pipeline"
          value={`$${data.deals.pipelineValue.toLocaleString()}`}
          sub="volumen proyectado"
        />
        <KpiCard
          label="Actividades"
          value={data.recentActivities.length}
          sub="últimas gestiones"
        />
      </div>

      {/* ── Pipeline stages track (CT signature) ─────────────────── */}
      {data.deals.byStage.length > 0 && (
        <div className="interactive-card p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <p className="section-label flex items-center gap-2">
              <KanbanSquare size={12} /> Embudos · stages
            </p>
          </div>
          {/* Horizontal track — the signature element */}
          <div className="stage-track mb-4">
            {data.deals.byStage.map((stage) => (
              <div
                key={stage.stageId}
                className="stage-track-segment"
                style={{ backgroundColor: stage.color }}
                title={`${stage.stageName}: ${stage.count}`}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {data.deals.byStage.map((stage) => {
              const maxCount = Math.max(...data.deals.byStage.map((s) => s.count))
              const pct = maxCount > 0 ? Math.round((stage.count / maxCount) * 100) : 0
              return (
                <div
                  key={stage.stageId}
                  className="rounded-lg px-4 py-3"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: stage.color }}
                    />
                    <span className="text-[11px] font-semibold truncate" style={{ color: 'var(--ink-secondary)' }}>
                      {stage.stageName}
                    </span>
                  </div>
                  <p className="data-num text-xl font-bold" style={{ color: 'var(--ink-primary)' }}>
                    {stage.count}
                  </p>
                  <p className="text-[10px] mt-0.5" style={{ color: 'var(--ink-tertiary)' }}>
                    ${stage.value.toLocaleString()} · {pct}%
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Lower grid ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Lead status */}
        <div className="interactive-card p-5">
          <p className="section-label mb-4">Estado de leads</p>
          {data.contacts.byStatus.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8" style={{ color: 'var(--ink-tertiary)' }}>
              <Users size={28} strokeWidth={1.5} className="mb-2" />
              <p className="text-xs">Sin contactos</p>
            </div>
          ) : (
            <div className="space-y-2">
              {data.contacts.byStatus.map((s) => (
                <div
                  key={s.status}
                  className="flex items-center justify-between rounded-md px-3 py-2.5"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border-0)' }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="status-dot"
                      style={{ backgroundColor: STATUS_DOT[s.status] ?? 'var(--ink-tertiary)' }}
                    />
                    <span className="text-[12px] font-medium" style={{ color: 'var(--ink-secondary)' }}>
                      {s.status}
                    </span>
                  </div>
                  <span className="data-num text-sm font-bold" style={{ color: 'var(--ink-primary)' }}>
                    {s.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Activity feed */}
        <div className="interactive-card p-5">
          <p className="section-label mb-4">Actividades recientes</p>
          {data.recentActivities.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8" style={{ color: 'var(--ink-tertiary)' }}>
              <Clock size={28} strokeWidth={1.5} className="mb-2" />
              <p className="text-xs">Sin movimientos</p>
            </div>
          ) : (
            <div className="space-y-1">
              {data.recentActivities.slice(0, 6).map((activity) => {
                const Icon = ACTIVITY_ICONS[activity.type] ?? Clock
                return (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 px-3 py-2 rounded-md transition-colors"
                    style={{ borderLeft: '2px solid var(--border-0)' }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'
                      ;(e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--accent)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                      ;(e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--border-0)'
                    }}
                  >
                    <Icon size={13} className="mt-0.5 shrink-0" style={{ color: 'var(--ink-tertiary)' }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-medium truncate" style={{ color: 'var(--ink-primary)' }}>
                        {activity.title}
                      </p>
                      {activity.contactName && (
                        <p className="text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>
                          {activity.contactName}
                        </p>
                      )}
                    </div>
                    <p className="text-[10px] shrink-0" style={{ color: 'var(--ink-muted)' }}>
                      {new Date(activity.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Recent contacts */}
        <div className="interactive-card p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="section-label">Contactos recientes</p>
            <Link
              href="/contacts"
              className="flex items-center gap-1 text-[11px] font-semibold transition-colors"
              style={{ color: 'var(--accent)' }}
            >
              Ver todos <ArrowUpRight size={11} />
            </Link>
          </div>
          {data.contacts.recent.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8" style={{ color: 'var(--ink-tertiary)' }}>
              <Users size={28} strokeWidth={1.5} className="mb-2" />
              <p className="text-xs">Sin contactos aún</p>
            </div>
          ) : (
            <div className="space-y-1">
              {data.contacts.recent.map((contact) => (
                <Link
                  key={contact.id}
                  href={`/contacts/${contact.id}`}
                  className="flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors"
                  style={{ border: '1px solid transparent' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--surface-2)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-0)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'transparent'
                  }}
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{
                      background: 'var(--accent-muted)',
                      color: 'var(--accent-text)',
                    }}
                  >
                    {contact.firstName[0]}{contact.lastName?.[0] ?? ''}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12px] font-semibold" style={{ color: 'var(--ink-primary)' }}>
                      {contact.firstName} {contact.lastName}
                    </p>
                    <p className="text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>{contact.status}</p>
                  </div>
                  <span
                    className="data-num text-xs font-bold"
                    style={{
                      color: contact.score >= 70 ? 'var(--semantic-success)' :
                             contact.score >= 40 ? 'var(--semantic-warning)' : 'var(--ink-tertiary)',
                    }}
                  >
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