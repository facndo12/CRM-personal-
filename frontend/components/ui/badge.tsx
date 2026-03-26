import { HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'accent' | 'outline'
type BadgeSize = 'sm' | 'md'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
}

const VARIANTS: Record<BadgeVariant, string> = {
  default: 'bg-[var(--surface-2)] text-[var(--ink-secondary)] border-[var(--border-0)]',
  success: 'bg-[var(--semantic-success-bg)] text-[var(--semantic-success)] border-[rgba(22,163,74,0.2)]',
  warning: 'bg-[var(--semantic-warning-bg)] text-[var(--semantic-warning)] border-[rgba(217,119,6,0.2)]',
  danger: 'bg-[var(--semantic-danger-bg)] text-[var(--semantic-danger)] border-[rgba(220,38,38,0.2)]',
  info: 'bg-blue-50 text-blue-700 border-blue-200',
  accent: 'bg-[var(--accent-muted)] text-[var(--accent-text)] border-[rgba(124,58,237,0.2)]',
  outline: 'bg-transparent text-[var(--ink-secondary)] border-[var(--border-2)]',
}

const SIZES: Record<BadgeSize, string> = {
  sm: '!px-1.5 !py-0.5 text-[10px]',
  md: '!px-2 !py-0.5 text-xs',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          'inline-flex items-center rounded border font-bold uppercase tracking-wider',
          VARIANTS[variant],
          SIZES[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export function RoleBadge({ role }: { role: string }) {
  const roleConfig: Record<string, { variant: BadgeVariant; label: string }> = {
    owner: { variant: 'warning' as BadgeVariant, label: 'Owner' },
    admin: { variant: 'accent' as BadgeVariant, label: 'Admin' },
    member: { variant: 'success' as BadgeVariant, label: 'Member' },
    viewer: { variant: 'default' as BadgeVariant, label: 'Viewer' },
  }

  const config = roleConfig[role] || roleConfig.viewer

  return <Badge variant={config.variant} size="sm">{config.label}</Badge>
}

export function StatusBadge({ status }: { status: string }) {
  const statusConfig: Record<string, { variant: BadgeVariant; label: string }> = {
    LEAD: { variant: 'info' as BadgeVariant, label: 'Lead' },
    QUALIFIED: { variant: 'accent' as BadgeVariant, label: 'Qualified' },
    ACTIVE: { variant: 'success' as BadgeVariant, label: 'Active' },
    CUSTOMER: { variant: 'success' as BadgeVariant, label: 'Customer' },
    CHURNED: { variant: 'danger' as BadgeVariant, label: 'Churned' },
    ARCHIVED: { variant: 'default' as BadgeVariant, label: 'Archived' },
  }

  const config = statusConfig[status] || { variant: 'default' as BadgeVariant, label: status }

  return <Badge variant={config.variant} size="sm">{config.label}</Badge>
}
