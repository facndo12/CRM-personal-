import { HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'inset'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const PADDING: Record<string, string> = {
  none: '',
  sm: '!p-3',
  md: '!p-5',
  lg: '!p-8',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-[var(--radius-card)] border',
          variant === 'default' && 'bg-[var(--surface-0)] border-[var(--border-1)]',
          variant === 'interactive' && 'interactive-card',
          variant === 'inset' && 'inset-panel',
          PADDING[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('flex items-center justify-between mb-4', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={clsx('text-sm font-bold', className)}
        style={{ color: 'var(--ink-primary)' }}
        {...props}
      >
        {children}
      </h3>
    )
  }
)

CardTitle.displayName = 'CardTitle'
