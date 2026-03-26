'use client'

import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import clsx from 'clsx'

interface SparklineProps {
  data: number[]
  width?: number
  height?: number
  color?: string
}

export function Sparkline({ data, width = 80, height = 32, color }: SparklineProps) {
  if (!data || data.length < 2) return null

  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width
    const y = height - ((value - min) / range) * height
    return `${x},${y}`
  })

  const areaPoints = [
    `0,${height}`,
    ...points,
    `${width},${height}`,
  ]

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color || 'var(--accent)'} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color || 'var(--accent)'} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={areaPoints.join(' ')}
        className="sparkline-area"
        style={{ fill: `url(#sparkline-gradient)` }}
      />
      <polyline
        points={points.join(' ')}
        className="sparkline"
        style={{ stroke: color || 'var(--accent)' }}
      />
    </svg>
  )
}

interface KpiCardProps {
  label: string
  value: string | number
  sub?: string
  trend?: {
    value: number
    label?: string
  }
  sparklineData?: number[]
  icon?: React.ReactNode
  accentColor?: string
}

export function KpiCard({
  label,
  value,
  sub,
  trend,
  sparklineData,
  icon,
  accentColor = 'var(--accent)',
}: KpiCardProps) {
  const trendDirection = trend ? (trend.value > 0 ? 'up' : trend.value < 0 ? 'down' : 'neutral') : 'neutral'

  return (
    <div className="interactive-card p-5 relative overflow-hidden">
      {/* Accent bar */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {icon && (
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `var(--accent-muted)`, color: accentColor }}
              >
                {icon}
              </div>
            )}
            <span className="section-label">{label}</span>
          </div>

          <p
            className="text-2xl font-bold tracking-tight"
            style={{ color: 'var(--ink-primary)' }}
          >
            {value}
          </p>

          <div className="flex items-center gap-2 mt-1">
            {trend && (
              <div className="flex items-center gap-1">
                {trendDirection === 'up' && (
                  <TrendingUp size={14} className="text-[var(--semantic-success)]" />
                )}
                {trendDirection === 'down' && (
                  <TrendingDown size={14} className="text-[var(--semantic-danger)]" />
                )}
                {trendDirection === 'neutral' && (
                  <Minus size={14} style={{ color: 'var(--ink-tertiary)' }} />
                )}
                <span
                  className={clsx(
                    'text-xs font-semibold',
                    trendDirection === 'up' && 'text-[var(--semantic-success)]',
                    trendDirection === 'down' && 'text-[var(--semantic-danger)]',
                    trendDirection === 'neutral' && 'text-[var(--ink-tertiary)]'
                  )}
                >
                  {trend.value > 0 ? '+' : ''}{trend.value}%
                </span>
                {trend.label && (
                  <span className="text-[10px]" style={{ color: 'var(--ink-tertiary)' }}>
                    {trend.label}
                  </span>
                )}
              </div>
            )}
            {sub && !trend && (
              <span className="text-xs" style={{ color: 'var(--ink-tertiary)' }}>
                {sub}
              </span>
            )}
          </div>
        </div>

        {sparklineData && sparklineData.length > 1 && (
          <div className="shrink-0">
            <Sparkline data={sparklineData} width={70} height={36} color={accentColor} />
          </div>
        )}
      </div>
    </div>
  )
}

interface ComparisonDeltaProps {
  current: number
  previous: number
  format?: 'number' | 'currency' | 'percent'
  label?: string
}

export function ComparisonDelta({ current, previous, format = 'number', label }: ComparisonDeltaProps) {
  const diff = current - previous
  const percent = previous > 0 ? ((diff / previous) * 100) : 0
  const isPositive = diff >= 0

  const formatValue = (val: number) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD' }).format(val)
      case 'percent':
        return `${val.toFixed(1)}%`
      default:
        return new Intl.NumberFormat('es-AR').format(val)
    }
  }

  return (
    <div className="flex items-center gap-3 text-xs">
      <span style={{ color: 'var(--ink-tertiary)' }}>
        {label || 'vs anterior'}:
      </span>
      <div className="flex items-center gap-1">
        {isPositive ? (
          <TrendingUp size={12} className="text-[var(--semantic-success)]" />
        ) : (
          <TrendingDown size={12} className="text-[var(--semantic-danger)]" />
        )}
        <span className={clsx('font-semibold', isPositive ? 'text-[var(--semantic-success)]' : 'text-[var(--semantic-danger)]')}>
          {isPositive ? '+' : ''}{formatValue(diff)} ({isPositive ? '+' : ''}{percent.toFixed(1)}%)
        </span>
      </div>
    </div>
  )
}
