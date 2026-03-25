'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { authApi } from '@/lib/api'
import { auth } from '@/lib/auth'
import { Loader2 } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await authApi.login(email, password)
      const data = res.data

      auth.save({
        token:         data.accessToken,
        userId:        data.user.id,
        workspaceId:   data.workspace.id,
        role:          data.role,
        firstName:     data.user.firstName,
        email:         data.user.email,
        workspaceName: data.workspace.name,
      })

      router.push('/contacts')
    } catch (err: any) {
      setError(err.response?.data?.message ?? 'Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden p-4 animate-fade-in sm:p-8"
      style={{ background: 'var(--canvas)' }}
    >
      {/* Subtle radial glow — works both modes */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full"
        style={{ background: 'var(--accent-muted)', filter: 'blur(100px)', opacity: 0.6 }}
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full"
        style={{ background: 'var(--accent-muted)', filter: 'blur(120px)', opacity: 0.35 }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="mb-10 text-center">
          <div
            className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl relative"
            style={{ background: 'var(--accent)' }}
          >
            <span className="relative z-10 text-2xl font-black tracking-tighter text-white">C</span>
            <div className="absolute inset-0 rounded-2xl border border-white/20" />
          </div>
          <h1
            className="text-3xl font-extrabold tracking-tight"
            style={{ color: 'var(--ink-primary)', letterSpacing: '-0.03em' }}
          >
            Bienvenido
          </h1>
          <p className="mt-2 font-medium" style={{ color: 'var(--ink-secondary)' }}>
            Ingresá a tu espacio de trabajo CRM
          </p>
        </div>

        {/* Card */}
        <div className="interactive-card p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold" style={{ color: 'var(--ink-secondary)' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ctrl-input"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-semibold" style={{ color: 'var(--ink-secondary)' }}>
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ctrl-input"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div
                className="flex items-start gap-2 rounded-lg px-4 py-3 text-sm font-medium animate-slide-up"
                style={{
                  background: 'var(--semantic-danger-bg)',
                  border:     '1px solid rgba(220,38,38,0.15)',
                  color:      'var(--semantic-danger)',
                }}
              >
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary mt-2 w-full py-3"
            >
              {loading ? (
                <><Loader2 size={16} className="animate-spin" /> Ingresando...</>
              ) : 'Ingresar al CRM'}
            </button>

            <div className="text-center">
              <Link
                href="/forgot-password"
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--ink-tertiary)' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--ink-tertiary)'}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </form>

          <p className="mt-8 text-center text-sm font-medium" style={{ color: 'var(--ink-tertiary)' }}>
            ¿No tenés cuenta?{' '}
            <Link
              href="/register"
              className="font-bold transition-colors"
              style={{ color: 'var(--accent)' }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--accent-hover)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
            >
              Registrate gratis
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}