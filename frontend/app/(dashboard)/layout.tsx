'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { auth } from '@/lib/auth'
import {
  Users,
  KanbanSquare,
  Webhook,
  Key,
  LogOut,
} from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { href: '/contacts', label: 'Contactos',  icon: Users         },
  { href: '/deals',    label: 'Deals',      icon: KanbanSquare  },
  { href: '/webhooks', label: 'Webhooks',   icon: Webhook       },
  { href: '/api-keys', label: 'API Keys',   icon: Key           },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router   = useRouter()
  const pathname = usePathname()

  // Proteger todas las rutas del dashboard
  // Si no hay token, redirigir al login
  useEffect(() => {
    if (!auth.isLoggedIn()) {
      router.push('/login')
    }
  }, [router])

  const [user, setUser] = useState<ReturnType<typeof auth.get>>(null)

    useEffect(() => {
        setUser(auth.get())
    }, [])

  function handleLogout() {
    auth.clear()
    router.push('/login')
  }

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">

        {/* Logo y workspace */}
        <div className="p-5 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">
              C
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-white truncate">
                {user?.workspaceName ?? 'CRM'}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const Icon    = item.icon
            const active  = pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                  active
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                )}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Footer del sidebar */}
        <div className="p-3 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors w-full"
          >
            <LogOut size={18} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>

    </div>
  )
}