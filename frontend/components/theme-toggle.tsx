'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import clsx from 'clsx'

export function ThemeToggle({ variant = 'fixed' }: { variant?: 'fixed' | 'inline' }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  // Render a fixed-size skeleton before hydration to prevent layout shift
  if (!mounted) {
    return (
      <div
        className={clsx(
          "flex h-9 w-[10.5rem] items-center rounded-full",
          variant === 'fixed' ? "fixed right-4 top-4 z-[120] hidden md:flex" : ""
        )}
        style={{
          background: 'var(--surface-0)',
          border: '1px solid var(--border-1)',
        }}
        aria-hidden="true"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={clsx(
        "flex h-9 w-[10.5rem] items-center gap-2.5 rounded-full px-3 transition-colors duration-200",
        variant === 'fixed' ? "fixed right-4 top-4 z-[120] hidden md:flex" : ""
      )}
      style={{
        background:   isDark ? 'rgba(39,39,42,0.92)'  : 'rgba(255,255,255,0.92)',
        border:       isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.09)',
        color:        isDark ? '#a1a1aa' : '#52525b',
        backdropFilter: 'blur(12px)',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.color = isDark ? '#fafafa' : '#18181b'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.color = isDark ? '#a1a1aa' : '#52525b'
      }}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-pressed={isDark}
    >
      {/* Toggle pill */}
      <span
        className="relative flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors duration-300"
        style={{
          background: isDark ? '#7c3aed' : 'var(--border-2)',
        }}
        aria-hidden="true"
      >
        <span
          className="flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300"
          style={{ transform: isDark ? 'translateX(16px)' : 'translateX(0)' }}
        >
          {isDark
            ? <Moon size={9} style={{ color: '#7c3aed' }} />
            : <Sun size={9} style={{ color: '#d97706' }} />
          }
        </span>
      </span>

      {/* Fixed-width label — prevents size jump between strings */}
      <span
        className="text-[12px] font-semibold"
        style={{ width: '6.25rem', textAlign: 'left', letterSpacing: '-0.01em' }}
      >
        {isDark ? 'Modo oscuro' : 'Modo claro'}
      </span>
    </button>
  )
}
