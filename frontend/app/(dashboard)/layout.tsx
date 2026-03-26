'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { auth } from '@/lib/auth'
import { authApi } from '@/lib/api'
import {
  Users, KanbanSquare, Webhook,
  Key, LogOut, LayoutDashboard, Layers,
  Menu, X, ChevronRight,
} from 'lucide-react'
import clsx from 'clsx'
import type { Role } from '@/types'
import { ThemeToggle } from '@/components/theme-toggle'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/contacts', label: 'Contactos', icon: Users },
  { href: '/deals', label: 'Deals', icon: KanbanSquare },
  { href: '/pipelines', label: 'Pipelines', icon: Layers, roles: ['owner', 'admin'] as Role[] },
  { href: '/webhooks', label: 'Webhooks', icon: Webhook, roles: ['owner', 'admin'] as Role[] },
  { href: '/api-keys', label: 'API Keys', icon: Key, roles: ['owner', 'admin'] as Role[] },
  { href: '/team', label: 'Equipo', icon: Users, roles: ['owner', 'admin'] as Role[] },
]

const MOBILE_TABS = ['/dashboard', '/contacts', '/deals']

function NavLink({
  href, label, icon: Icon, active, collapsed = false,
}: {
  href: string; label: string; icon: any; active: boolean; collapsed?: boolean
}) {
  return (
    <Link
      href={href}
      title={collapsed ? label : undefined}
      className={clsx(
        'group relative flex items-center rounded-md transition-colors',
        collapsed ? 'h-10 w-10 justify-center' : 'gap-2.5 px-3 py-2 text-[13px]',
        active ? 'font-semibold' : 'font-medium'
      )}
      style={{
        color: active ? 'var(--accent)' : 'var(--ink-secondary)',
        background: active ? 'var(--accent-muted)' : 'transparent',
      }}
    >
      {active && !collapsed && (
        <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r" style={{ background: 'var(--accent)' }} />
      )}
      {active && collapsed && (
        <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r" style={{ background: 'var(--accent)' }} />
      )}
      <Icon size={collapsed ? 16 : 15} strokeWidth={active ? 2.5 : 1.75} />
      {!collapsed && label}
    </Link>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<ReturnType<typeof auth.get>>(null)
  const [checking, setChecking] = useState(true)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (!auth.isLoggedIn()) {
      router.push('/login')
    } else {
      setUser(auth.get())
    }
    setChecking(false)
  }, [router])

  useEffect(() => { setDrawerOpen(false) }, [pathname])

  async function handleLogout() {
    try {
      await authApi.logout()
    } catch { /* continue */ }
    auth.clear()
    router.push('/login')
  }

  const visibleNav = navItems.filter(
    (item) => !item.roles || item.roles.includes((user?.role ?? 'viewer') as Role)
  )
  const coreNav = visibleNav.filter((i) => !i.roles)
  const adminNav = visibleNav.filter((i) => i.roles)
  const mobilePrimaryTabs = visibleNav.filter((i) => MOBILE_TABS.includes(i.href))

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: 'var(--canvas)', color: 'var(--ink-primary)' }}
    >
      {/* ── TABLET sidebar (md only) ── */}
      <aside
        className="hidden md:flex lg:hidden w-14 shrink-0 flex-col items-center py-3 gap-1 z-20"
        style={{ background: 'var(--surface-0)', borderRight: '1px solid var(--border-1)' }}
      >
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white shrink-0" style={{ background: 'var(--accent)' }}>
          {user?.workspaceName?.[0]?.toUpperCase() ?? 'C'}
        </div>
        {[...coreNav, ...adminNav].map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} icon={item.icon} active={pathname.startsWith(item.href)} collapsed />
        ))}
        <button onClick={handleLogout} className="mt-auto flex h-10 w-10 items-center justify-center rounded-md transition-colors" style={{ color: 'var(--ink-tertiary)' }}>
          <LogOut size={16} strokeWidth={1.75} />
        </button>
      </aside>

      {/* ── DESKTOP sidebar (lg+) ── */}
      <aside
        className="hidden lg:flex w-[220px] shrink-0 flex-col z-20"
        style={{ background: 'var(--surface-0)', borderRight: '1px solid var(--border-1)' }}
      >
        <div className="flex items-center gap-3 px-4 py-3.5" style={{ borderBottom: '1px solid var(--border-0)' }}>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white" style={{ background: 'var(--accent)' }}>
            {user?.workspaceName?.[0]?.toUpperCase() ?? 'C'}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-bold leading-tight" style={{ color: 'var(--ink-primary)' }}>
              {user?.workspaceName ?? 'CRM'}
            </p>
            <p className="truncate text-[11px]" style={{ color: 'var(--ink-tertiary)' }}>{user?.email}</p>
          </div>
          <span className={user?.role === 'owner' ? 'badge-owner' : user?.role === 'admin' ? 'badge-admin' : user?.role === 'member' ? 'badge-member' : 'badge-viewer'}>
            {user?.role ?? 'viewer'}
          </span>
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-3">
          {coreNav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} icon={item.icon} active={pathname.startsWith(item.href)} />
          ))}
          {adminNav.length > 0 && (
            <>
              <div className="px-3 pb-1 pt-4"><span className="section-label">Configuración</span></div>
              {adminNav.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} icon={item.icon} active={pathname.startsWith(item.href)} />
              ))}
            </>
          )}
        </nav>

        <div className="px-3 pb-4 pt-2" style={{ borderTop: '1px solid var(--border-0)' }}>
          <button onClick={handleLogout} className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-[13px] font-medium transition-colors" style={{ color: 'var(--ink-tertiary)' }}>
            <LogOut size={15} strokeWidth={1.75} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* ── MOBILE header ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex h-12 items-center justify-between px-4" style={{ background: 'var(--surface-0)', borderBottom: '1px solid var(--border-1)' }}>
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold text-white" style={{ background: 'var(--accent)' }}>
            {user?.workspaceName?.[0]?.toUpperCase() ?? 'C'}
          </div>
          <span className="text-[13px] font-bold truncate max-w-[120px]" style={{ color: 'var(--ink-primary)' }}>
            {user?.workspaceName ?? 'CRM'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle variant="inline" />
          <button onClick={() => setDrawerOpen(true)} className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ color: 'var(--ink-secondary)' }}>
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* ── MOBILE drawer ── */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-[60] flex items-end" onClick={() => setDrawerOpen(false)}>
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />
          <div className="relative w-full rounded-t-2xl p-5 pb-8" style={{ background: 'var(--surface-0)', borderTop: '1px solid var(--border-1)', paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }} onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <p className="section-label">Menú</p>
              <button onClick={() => setDrawerOpen(false)} className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: 'var(--surface-2)', color: 'var(--ink-tertiary)' }}>
                <X size={14} />
              </button>
            </div>
            <div className="space-y-1">
              {visibleNav.map((item) => {
                const Icon = item.icon
                const active = pathname.startsWith(item.href)
                return (
                  <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-lg px-3 py-3" style={{ color: active ? 'var(--accent)' : 'var(--ink-primary)', background: active ? 'var(--accent-muted)' : 'transparent' }}>
                    <div className="flex items-center gap-3">
                      <Icon size={16} strokeWidth={active ? 2.5 : 1.75} />
                      <span className="text-[14px] font-semibold">{item.label}</span>
                    </div>
                    <ChevronRight size={14} style={{ color: 'var(--ink-muted)' }} />
                  </Link>
                )
              })}
            </div>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border-0)' }}>
              <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-[14px] font-semibold" style={{ color: 'var(--semantic-danger)' }}>
                <LogOut size={16} />
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden" style={{ background: 'var(--canvas)' }}>
        {checking && (
          <div className="absolute inset-0 z-[100] flex items-center justify-center" style={{ background: 'var(--overlay)' }}>
            <div className="h-5 w-5 animate-spin rounded-full border-2" style={{ borderColor: 'var(--border-2)', borderTopColor: 'var(--accent)' }} />
          </div>
        )}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain md:pt-0 pt-12 pb-16 md:pb-0">
          {children}
        </div>
      </main>

      {/* ── MOBILE bottom nav ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around h-14" style={{ background: 'var(--surface-0)', borderTop: '1px solid var(--border-1)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {mobilePrimaryTabs.map((item) => {
          const Icon = item.icon
          const active = pathname.startsWith(item.href)
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center justify-center flex-1 py-1 gap-0.5" style={{ color: active ? 'var(--accent)' : 'var(--ink-tertiary)' }}>
              <Icon size={20} strokeWidth={active ? 2.5 : 1.75} />
              <span className="text-[10px] font-semibold">{item.label}</span>
            </Link>
          )
        })}
        <button onClick={() => setDrawerOpen(true)} className="flex flex-col items-center justify-center flex-1 py-1 gap-0.5" style={{ color: 'var(--ink-tertiary)' }}>
          <Menu size={20} strokeWidth={1.75} />
          <span className="text-[10px] font-semibold">Más</span>
        </button>
      </nav>
    </div>
  )
}
