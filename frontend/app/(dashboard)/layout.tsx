'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { auth } from '@/lib/auth'
import {
  Users, KanbanSquare, Webhook,
  Key, LogOut, LayoutDashboard, Layers,
} from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/contacts',  label: 'Contactos', icon: Users            },
  { href: '/deals',     label: 'Deals',     icon: KanbanSquare     },
  { href: '/pipelines', label: 'Pipelines', icon: Layers           },
  { href: '/webhooks',  label: 'Webhooks',  icon: Webhook          },
  { href: '/api-keys',  label: 'API Keys',  icon: Key              },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router   = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<ReturnType<typeof auth.get>>(null)
  // `checking` empieza en true para bloquear el render hasta confirmar sesión.
  // Sin esto, el sidebar y la nav se muestran brevemente antes de redirigir
  // al login cuando el usuario no está autenticado (flash de UI).
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    if (!auth.isLoggedIn()) {
      router.push('/login')
    } else {
      setUser(auth.get())
    }
    setChecking(false)
  }, [router])

  function handleLogout() {
    auth.clear()
    router.push('/login')
  }

  // IMPORTANTE: nunca hacer un early return condicional aquí.
  // Si se retorna un árbol distinto (ej: spinner sin children), React pierde
  // el conteo de hooks de los componentes hijos (useSortable, useDroppable, etc.)
  // y lanza el error #310: "Rendered more hooks than during the previous render".
  //
  // Solución: mantener SIEMPRE el mismo árbol. El spinner se superpone
  // con CSS mientras checking=true, y children se oculta visualmente
  // con opacity-0 — pero nunca se desmonta.
  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
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

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const Icon   = item.icon
            const active = pathname.startsWith(item.href)
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

      <main className="relative flex-1 overflow-auto">
        {/* Spinner superpuesto — visible solo mientras se verifica la sesión */}
        {checking && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-950">
            <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {children}
      </main>
    </div>
  )
}