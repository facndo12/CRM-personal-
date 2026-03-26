'use client'

import { useMemo } from 'react'
import clsx from 'clsx'

const GRADIENT_PAIRS = [
  ['#059669', '#047857'], // emerald
  ['#0284c7', '#0369a1'], // sky
  ['#7c3aed', '#6d28d9'], // violet
  ['#db2777', '#be185d'], // pink
  ['#ea580c', '#c2410c'], // orange
  ['#0891b2', '#0e7490'], // cyan
  ['#4f46e5', '#4338ca'], // indigo
  ['#d97706', '#b45309'], // amber
]

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

interface AvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const SIZES = {
  sm: 'w-7 h-7 text-[10px]',
  md: 'w-9 h-9 text-xs',
  lg: 'w-11 h-11 text-sm',
  xl: 'w-14 h-14 text-base',
}

export function Avatar({ name, size = 'md', className }: AvatarProps) {
  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/)
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase()
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }, [name])

  const gradient = useMemo(() => {
    const index = hashString(name) % GRADIENT_PAIRS.length
    return GRADIENT_PAIRS[index]
  }, [name])

  return (
    <div
      className={clsx(
        'relative inline-flex items-center justify-center rounded-full font-bold shrink-0',
        'bg-gradient-to-br ring-2 ring-white/20',
        SIZES[size],
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
      }}
    >
      <span className="text-white drop-shadow-sm">{initials}</span>
    </div>
  )
}

interface AvatarGroupProps {
  names: string[]
  max?: number
  size?: 'sm' | 'md' | 'lg'
}

export function AvatarGroup({ names, max = 4, size = 'md' }: AvatarGroupProps) {
  const visible = names.slice(0, max)
  const remaining = names.length - max

  return (
    <div className="flex -space-x-2">
      {visible.map((name, i) => (
        <Avatar key={i} name={name} size={size} />
      ))}
      {remaining > 0 && (
        <div
          className={clsx(
            'relative inline-flex items-center justify-center rounded-full font-bold bg-[var(--surface-2)]',
            'ring-2 ring-white dark:ring-[var(--surface-0)]',
            SIZES[size]
          )}
        >
          <span className="text-[var(--ink-secondary)] text-[10px]">+{remaining}</span>
        </div>
      )}
    </div>
  )
}
