'use client'

import clsx from 'clsx'

type TimelineSize = 'sm' | 'md' | 'lg'

interface TimelineItemProps {
  icon: React.ReactNode
  iconColor?: string
  title: string
  description?: string
  meta?: string | React.ReactNode
  children?: React.ReactNode
  size?: TimelineSize
}

export function TimelineItem({
  icon,
  iconColor = 'var(--accent)',
  title,
  description,
  meta,
  children,
  size = 'md',
}: TimelineItemProps) {
  const dotSizes = { sm: 'w-2 h-2', md: 'w-3 h-3', lg: 'w-3.5 h-3.5' }
  const iconSizes = { sm: 'w-6 h-6', md: 'w-8 h-8', lg: 'w-10 h-10' }
  const textSizes = { sm: 'text-xs', md: 'text-sm', lg: 'text-base' }
  const iconTextSizes = { sm: 'text-[10px]', md: 'text-xs', lg: 'text-sm' }

  return (
    <div className="timeline-item group">
      {/* Dot */}
      <div
        className={clsx(
          'timeline-dot absolute flex items-center justify-center',
          dotSizes[size]
        )}
        style={{ backgroundColor: iconColor }}
      >
        <div
          className={clsx(
            'rounded-full flex items-center justify-center text-white',
            iconSizes[size]
          )}
          style={{ backgroundColor: iconColor }}
        >
          <span className={clsx('font-bold', iconTextSizes[size])}>
            {icon}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className={clsx(
          'ml-4 pb-6',
          size === 'sm' && 'pb-4',
          size === 'lg' && 'pb-8'
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className={clsx('font-semibold truncate', textSizes[size])} style={{ color: 'var(--ink-primary)' }}>
              {title}
            </p>
            {description && (
              <p className={clsx('mt-0.5', size === 'sm' ? 'text-[11px]' : 'text-xs')} style={{ color: 'var(--ink-secondary)' }}>
                {description}
              </p>
            )}
            {children}
          </div>
          {meta && (
            <span className="text-[11px] shrink-0" style={{ color: 'var(--ink-tertiary)' }}>
              {meta}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={clsx('relative', className)}>
      {children}
    </div>
  )
}

interface TimelineSectionProps {
  title: string
  children: React.ReactNode
}

export function TimelineSection({ title, children }: TimelineSectionProps) {
  return (
    <div className="mb-6 last:mb-0">
      <p className="section-label mb-3">{title}</p>
      <Timeline>{children}</Timeline>
    </div>
  )
}
