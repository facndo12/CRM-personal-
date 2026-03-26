import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Loader2 } from 'lucide-react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: '',
  danger: '',
}

const SIZES: Record<ButtonSize, string> = {
  sm: '!py-1.5 !px-3 !text-xs',
  md: '',
  lg: '!py-3 !text-sm',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-150',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          VARIANTS[variant],
          SIZES[size],
          variant === 'primary' && 'btn-primary',
          variant === 'secondary' && 'btn-secondary',
          variant === 'ghost' && [
            'bg-transparent border-transparent',
            'hover:bg-[var(--surface-2)]',
            'disabled:hover:bg-transparent',
          ],
          variant === 'danger' && [
            'bg-[var(--semantic-danger)] text-white',
            'hover:opacity-90',
            'disabled:hover:opacity-50',
          ],
          className
        )}
        {...props}
      >
        {loading ? (
          <Loader2 size={14} className="animate-spin" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        {children}
        {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
