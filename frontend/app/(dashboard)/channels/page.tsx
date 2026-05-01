'use client'

import { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'
import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  KeyRound,
  Loader2,
  MessageSquare,
  Phone,
  PlugZap,
  RefreshCcw,
  ShieldCheck,
  Webhook,
} from 'lucide-react'

import { auth } from '@/lib/auth'
import { inboxApi } from '@/lib/api'
import {
  launchWhatsAppEmbeddedSignup,
  type WhatsAppEmbeddedSignupLaunchResult,
} from '@/lib/meta-embedded-signup'
import type {
  EmbeddedSignupCompletionResult,
  EmbeddedSignupConfig,
  InboxConnection,
} from '@/types'

const INITIAL_FORM = {
  name: '',
  accessToken: '',
  phoneNumberId: '',
  displayPhoneNumber: '',
  verifiedName: '',
  wabaId: '',
  businessId: '',
  qualityRating: '',
}

function maskValue(value?: string | null) {
  if (!value) return 'No disponible'
  if (value.length <= 8) return value
  return `${value.slice(0, 4)}***${value.slice(-4)}`
}

function formatDate(value?: string | null) {
  if (!value) return 'Aun sin sincronizar'
  return new Date(value).toLocaleString('es-AR')
}

function extractErrorMessage(error: unknown, fallback: string) {
  if (!error || typeof error !== 'object') return fallback

  const message = (error as {
    message?: unknown
    response?: {
      data?: {
        message?: unknown
        error?: unknown
      }
    }
  }).response?.data?.message
    ?? (error as {
      response?: {
        data?: {
          error?: unknown
        }
      }
    }).response?.data?.error
    ?? (error as { message?: unknown }).message

  return typeof message === 'string' && message.trim() ? message : fallback
}

function readWhatsAppRegistration(settings?: Record<string, unknown>) {
  const registrationValue = settings?.registration
  if (!registrationValue || typeof registrationValue !== 'object' || Array.isArray(registrationValue)) {
    return {
      lastAttemptAt: undefined,
      lastRegisteredAt: undefined,
      errorMessage: undefined,
    }
  }

  const registration = registrationValue as {
    lastAttemptAt?: unknown
    lastRegisteredAt?: unknown
    lastError?: unknown
  }

  const rawError = registration.lastError
  const errorMessage = rawError && typeof rawError === 'object' && !Array.isArray(rawError)
    ? typeof (rawError as { message?: unknown }).message === 'string'
      ? (rawError as { message: string }).message
      : undefined
    : undefined

  return {
    lastAttemptAt: typeof registration.lastAttemptAt === 'string' ? registration.lastAttemptAt : undefined,
    lastRegisteredAt: typeof registration.lastRegisteredAt === 'string' ? registration.lastRegisteredAt : undefined,
    errorMessage,
  }
}

function ReadinessItem({
  ready,
  title,
  description,
}: {
  ready: boolean
  title: string
  description: string
}) {
  return (
    <div
      className={clsx(
        'rounded-2xl border px-4 py-3 transition-all',
        ready
          ? 'border-emerald-200 bg-emerald-50/80 text-emerald-900'
          : 'border-amber-200 bg-amber-50/90 text-amber-900'
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={clsx(
            'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border',
            ready
              ? 'border-emerald-200 bg-white text-emerald-600'
              : 'border-amber-200 bg-white text-amber-600'
          )}
        >
          {ready ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} />}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold tracking-tight">{title}</p>
          <p className="mt-1 text-sm leading-relaxed opacity-80">{description}</p>
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: InboxConnection['status'] }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]',
        status === 'connected' && 'border-emerald-200 bg-emerald-50 text-emerald-700',
        status === 'error' && 'border-rose-200 bg-rose-50 text-rose-700',
        status === 'disconnected' && 'border-slate-200 bg-slate-50 text-slate-500'
      )}
    >
      <span
        className={clsx(
          'h-2 w-2 rounded-full',
          status === 'connected' && 'bg-emerald-500',
          status === 'error' && 'bg-rose-500',
          status === 'disconnected' && 'bg-slate-400'
        )}
      />
      {status}
    </span>
  )
}

export default function ChannelsPage() {
  const queryClient = useQueryClient()
  const [user, setUser] = useState<ReturnType<typeof auth.get>>(null)
  const [showForm, setShowForm] = useState(false)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [popupError, setPopupError] = useState<string | null>(null)
  const [lastCompletion, setLastCompletion] = useState<EmbeddedSignupCompletionResult | null>(null)
  const [lastPopupSession, setLastPopupSession] = useState<WhatsAppEmbeddedSignupLaunchResult | null>(null)
  const [registrationPins, setRegistrationPins] = useState<Record<string, string>>({})
  const [form, setForm] = useState(INITIAL_FORM)

  useEffect(() => {
    setUser(auth.get())
  }, [])

  const canManage = user?.role === 'owner' || user?.role === 'admin'

  const configQuery = useQuery<EmbeddedSignupConfig>({
    queryKey: ['channels', 'embedded-signup-config'],
    queryFn: () => inboxApi.getEmbeddedSignupConfig().then((response) => response.data),
    enabled: canManage,
  })

  const connectionsQuery = useQuery<InboxConnection[]>({
    queryKey: ['channels', 'connections'],
    queryFn: () => inboxApi.listConnections().then((response) => response.data),
    enabled: canManage,
  })

  const completeMutation = useMutation({
    mutationFn: () => inboxApi.completeEmbeddedSignup({
      name: form.name || undefined,
      accessToken: form.accessToken.trim(),
      phoneNumberId: form.phoneNumberId.trim(),
      displayPhoneNumber: form.displayPhoneNumber || undefined,
      verifiedName: form.verifiedName || undefined,
      wabaId: form.wabaId || undefined,
      businessId: form.businessId || undefined,
      qualityRating: form.qualityRating || undefined,
    }),
    onSuccess: (response) => {
      setPopupError(null)
      setLastPopupSession(null)
      setLastCompletion(response.data)
      setShowForm(false)
      setForm(INITIAL_FORM)
      queryClient.invalidateQueries({ queryKey: ['channels', 'connections'] })
    },
  })

  const popupMutation = useMutation({
    mutationFn: async () => {
      const config = configQuery.data
      if (!config?.enabled || !config.appId || !config.configurationId) {
        throw new Error('Falta la configuracion publica de Embedded Signup en backend')
      }

      if (!config.codeExchangeReady) {
        throw new Error('Falta META_APP_SECRET en backend. El popup real no puede cerrar el code exchange.')
      }

      const session = await launchWhatsAppEmbeddedSignup({
        appId: config.appId,
        configurationId: config.configurationId,
      })

      const completionResponse = await inboxApi.completeEmbeddedSignupFromCode({
        code: session.code,
        phoneNumberId: session.phoneNumberId,
        wabaId: session.wabaId,
        businessId: session.businessId,
      })

      return {
        session,
        completion: completionResponse.data,
      }
    },
    onSuccess: ({ session, completion }) => {
      setPopupError(null)
      setLastPopupSession(session)
      setLastCompletion(completion)
      setShowForm(false)
      setForm(INITIAL_FORM)
      queryClient.invalidateQueries({ queryKey: ['channels', 'connections'] })
    },
    onError: (error) => {
      setPopupError(extractErrorMessage(error, 'No se pudo cerrar el popup de Meta'))
    },
  })

  const testMutation = useMutation({
    mutationFn: (connectionId: string) => inboxApi.testConnection(connectionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['channels', 'connections'] })
    },
  })

  const registerPhoneMutation = useMutation({
    mutationFn: ({ connectionId, pin }: { connectionId: string; pin: string }) =>
      inboxApi.registerWhatsAppPhone(connectionId, { pin }),
    onSuccess: (_, variables) => {
      setRegistrationPins((current) => ({
        ...current,
        [variables.connectionId]: '',
      }))
      queryClient.invalidateQueries({ queryKey: ['channels', 'connections'] })
    },
  })

  function copyText(value: string, key: string) {
    void navigator.clipboard.writeText(value)
    setCopiedKey(key)
    window.setTimeout(() => setCopiedKey(null), 1500)
  }

  if (!canManage) {
    return (
      <div className="mx-auto max-w-4xl p-6 animate-fade-in">
        <div className="interactive-card p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-200 bg-rose-50 text-rose-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">Canales</h1>
              <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-slate-500">
                Solo `owner` y `admin` pueden gestionar conexiones de WhatsApp y completar el onboarding desde Embedded Signup.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const whatsappConnections = (connectionsQuery.data ?? []).filter(
    (connection) => connection.provider === 'meta' && connection.channel === 'whatsapp'
  )

  const embeddedConfigReady = !!configQuery.data?.enabled
  const codeExchangeReady = !!configQuery.data?.codeExchangeReady
  const popupReady = embeddedConfigReady && codeExchangeReady
  const hasActiveConnection = whatsappConnections.some((connection) => connection.status === 'connected')
  const hasRegisteredConnection = whatsappConnections.some(
    (connection) => !!readWhatsAppRegistration(connection.settings).lastRegisteredAt
  )

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6 animate-fade-in">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary-700">Consola de canales</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">WhatsApp en Meta</h1>
          <p className="mt-2 max-w-3xl text-sm font-medium leading-relaxed text-slate-500">
            El popup real ya puede cerrar el code exchange si el backend tiene `META_APP_SECRET`. Despues de eso igual falta registrar el numero con PIN en Cloud API. El QR de dispositivo vinculado no es el flujo oficial aca.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => {
              setPopupError(null)
              popupMutation.mutate()
            }}
            disabled={popupMutation.isPending || configQuery.isLoading || !popupReady}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {popupMutation.isPending ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <MessageSquare size={18} strokeWidth={2.4} />
            )}
            {popupReady ? 'Abrir popup de Meta' : 'Popup no listo'}
          </button>

          <button
            onClick={() => setShowForm((current) => !current)}
            className="btn-secondary"
          >
            <PlugZap size={18} strokeWidth={2.4} />
            {showForm ? 'Ocultar alta manual' : 'Usar fallback manual'}
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
        <section className="interactive-card p-6">
          <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary-200 bg-primary-50 text-primary-700">
                <MessageSquare size={24} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Alta operativa</h2>
                <p className="mt-1 max-w-2xl text-sm font-medium leading-relaxed text-slate-500">
                  El camino sano es popup + code exchange. El formulario manual sigue aca para destrabarte si la app de Meta o el backend todavia no estan listos.
                </p>
              </div>
            </div>
            <StatusBadge status={hasActiveConnection ? 'connected' : 'disconnected'} />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className={clsx(
              'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]',
              popupReady
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : 'border-amber-200 bg-amber-50 text-amber-700'
            )}>
              <CheckCircle2 size={12} />
              {popupReady ? 'Popup utilizable' : 'Falta config segura'}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              <Webhook size={12} />
              Meta / WhatsApp
            </span>
          </div>

          {lastCompletion && (
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 animate-slide-up">
              <p className="text-sm font-bold text-emerald-800">
                Conexion {lastCompletion.mode === 'created' ? 'creada' : 'actualizada'} y validada.
              </p>
              <p className="mt-1 text-sm font-medium text-emerald-700">
                {lastCompletion.connection.externalAccountLabel ?? lastCompletion.connection.externalAccountId}
              </p>
              <p className="mt-2 text-sm font-medium text-emerald-700/90">
                La conexion existe y responde. Todavia falta registrar el numero con el PIN de dos pasos para dejar la linea operativa de verdad.
              </p>
              {lastCompletion.exchange && (
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700/80">
                  code exchange: {lastCompletion.exchange.tokenType ?? 'token listo'}
                  {typeof lastCompletion.exchange.expiresIn === 'number' ? ` / ${lastCompletion.exchange.expiresIn}s` : ''}
                </p>
              )}
            </div>
          )}

          {lastPopupSession && (
            <div className="mt-5 rounded-2xl border border-primary-200 bg-primary-50/80 p-4 animate-slide-up">
              <p className="text-sm font-bold text-primary-800">Ultimo popup cerrado</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-primary-200 bg-white px-3 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-500">Phone Number ID</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{lastPopupSession.phoneNumberId}</p>
                </div>
                <div className="rounded-xl border border-primary-200 bg-white px-3 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-500">WABA ID</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{lastPopupSession.wabaId ?? 'No devuelto por Meta'}</p>
                </div>
              </div>
            </div>
          )}

          {popupError && (
            <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-sm font-medium text-rose-700">
              {popupError}
            </div>
          )}

          {completeMutation.isError && (
            <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-sm font-medium text-rose-700">
              {extractErrorMessage(completeMutation.error, 'No se pudo completar el onboarding manual')}
            </div>
          )}

          {showForm && (
            <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 animate-slide-up">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 md:col-span-2">
                  Nombre interno
                  <input
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="WhatsApp soporte AR"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  Phone Number ID *
                  <input
                    value={form.phoneNumberId}
                    onChange={(event) => setForm((current) => ({ ...current, phoneNumberId: event.target.value }))}
                    placeholder="123456789012345"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  Display phone
                  <input
                    value={form.displayPhoneNumber}
                    onChange={(event) => setForm((current) => ({ ...current, displayPhoneNumber: event.target.value }))}
                    placeholder="+54 11 5555 1234"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  Verified name
                  <input
                    value={form.verifiedName}
                    onChange={(event) => setForm((current) => ({ ...current, verifiedName: event.target.value }))}
                    placeholder="Mi empresa"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  WABA ID
                  <input
                    value={form.wabaId}
                    onChange={(event) => setForm((current) => ({ ...current, wabaId: event.target.value }))}
                    placeholder="987654321098765"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  Business ID
                  <input
                    value={form.businessId}
                    onChange={(event) => setForm((current) => ({ ...current, businessId: event.target.value }))}
                    placeholder="135792468013579"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  Quality rating
                  <input
                    value={form.qualityRating}
                    onChange={(event) => setForm((current) => ({ ...current, qualityRating: event.target.value }))}
                    placeholder="GREEN"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 md:col-span-2">
                  Access token *
                  <textarea
                    value={form.accessToken}
                    onChange={(event) => setForm((current) => ({ ...current, accessToken: event.target.value }))}
                    placeholder="Pega aca el access token que te devuelve Meta"
                    rows={5}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15"
                  />
                </label>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  El backend crea o actualiza la conexion y luego corre `testConnection()`.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowForm(false)}
                    className="btn-secondary"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => completeMutation.mutate()}
                    disabled={!form.phoneNumberId.trim() || !form.accessToken.trim() || completeMutation.isPending}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {completeMutation.isPending ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <PlugZap size={16} strokeWidth={2.4} />
                    )}
                    Completar onboarding manual
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        <aside className="interactive-card p-6">
          <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Readiness</h2>
              <p className="mt-1 text-sm font-medium leading-relaxed text-slate-500">
                Esta columna te dice si ya podes abrir el popup real o si seguis atado al fallback manual.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <ReadinessItem
              ready={embeddedConfigReady}
              title="Config del popup"
              description={embeddedConfigReady
                ? 'El backend ya publica META_APP_ID y META_WHATSAPP_EMBEDDED_SIGNUP_CONFIG_ID.'
                : 'Faltan META_APP_ID o META_WHATSAPP_EMBEDDED_SIGNUP_CONFIG_ID. Sin eso no hay popup.'}
            />
            <ReadinessItem
              ready={codeExchangeReady}
              title="Exchange seguro"
              description={codeExchangeReady
                ? 'El backend tiene META_APP_SECRET y puede cambiar el code por token sin exponer secretos en la UI.'
                : 'Falta META_APP_SECRET. El popup puede abrir, pero no cerrar el code exchange de forma sana.'}
            />
            <ReadinessItem
              ready={hasActiveConnection}
              title="Linea validada"
              description={hasActiveConnection
                ? 'Ya hay al menos una conexion validada en estado connected.'
                : 'Todavia no hay ninguna linea de WhatsApp validada y usable desde el CRM.'}
            />
            <ReadinessItem
              ready={hasRegisteredConnection}
              title="Numero registrado"
              description={hasRegisteredConnection
                ? 'Ya hay al menos una linea registrada con PIN en Cloud API.'
                : 'Todavia falta registrar el numero con el PIN de dos pasos. Sin eso, el onboarding queda incompleto.'}
            />
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Config publicada</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Meta App ID</p>
                  <p className="mt-1 truncate text-sm font-semibold text-slate-800">{maskValue(configQuery.data?.appId)}</p>
                </div>
                {configQuery.data?.appId && (
                  <button
                    onClick={() => copyText(configQuery.data.appId!, 'app-id')}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-500 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                  >
                    {copiedKey === 'app-id' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Config ID</p>
                  <p className="mt-1 truncate text-sm font-semibold text-slate-800">{maskValue(configQuery.data?.configurationId)}</p>
                </div>
                {configQuery.data?.configurationId && (
                  <button
                    onClick={() => copyText(configQuery.data.configurationId!, 'config-id')}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-500 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                  >
                    {copiedKey === 'config-id' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-white/80 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Honestidad tecnica</p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
              El `appSecret` nunca sale del backend. Si falta, no te voy a dibujar un popup milagroso: te dejo el fallback manual y listo.
            </p>
          </div>
        </aside>
      </div>

      <section className="interactive-card p-6">
        <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Lineas registradas</p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">Conexiones de WhatsApp</h2>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <Webhook size={16} className="text-primary-500" />
            {whatsappConnections.length} conexion{whatsappConnections.length === 1 ? '' : 'es'}
          </div>
        </div>

        {connectionsQuery.isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-primary-500" size={40} />
          </div>
        ) : whatsappConnections.length === 0 ? (
          <div className="mt-6 rounded-[1.75rem] border border-dashed border-slate-200 bg-slate-50/70 p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-400">
              <Phone size={26} />
            </div>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900">Todavia no hay lineas conectadas</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">
              Usa el popup si esta listo. Si no, registra la linea manualmente y valida con `testConnection()`.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {whatsappConnections.map((connection) => {
              const isTesting = testMutation.isPending && testMutation.variables === connection.id
              const registration = readWhatsAppRegistration(connection.settings)
              const registrationPin = registrationPins[connection.id] ?? ''
              const isRegistering = registerPhoneMutation.isPending && registerPhoneMutation.variables?.connectionId === connection.id
              const registrationError = registerPhoneMutation.isError && registerPhoneMutation.variables?.connectionId === connection.id
                ? extractErrorMessage(registerPhoneMutation.error, 'No se pudo registrar el numero en Cloud API')
                : registration.errorMessage

              return (
                <article
                  key={connection.id}
                  className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[var(--shadow-office)]"
                >
                  <div
                    className={clsx(
                      'h-1.5 w-full',
                      connection.status === 'connected' && 'bg-emerald-500',
                      connection.status === 'error' && 'bg-rose-500',
                      connection.status === 'disconnected' && 'bg-slate-300'
                    )}
                  />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700">
                            <Phone size={18} />
                          </div>
                          <div>
                            <p className="text-lg font-extrabold tracking-tight text-slate-900">{connection.name}</p>
                            <p className="text-sm font-medium text-slate-500">
                              {connection.externalAccountLabel || connection.externalAccountId}
                            </p>
                          </div>
                        </div>
                      </div>
                      <StatusBadge status={connection.status} />
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Phone Number ID</p>
                        <p className="mt-2 text-sm font-semibold text-slate-800">{connection.externalAccountId}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Ultima sincronizacion</p>
                        <p className="mt-2 text-sm font-semibold text-slate-800">{formatDate(connection.lastSyncedAt)}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className={clsx(
                        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]',
                        connection.hasCredentials
                          ? 'border-primary-200 bg-primary-50 text-primary-700'
                          : 'border-amber-200 bg-amber-50 text-amber-700'
                      )}>
                        <KeyRound size={12} />
                        {connection.hasCredentials ? 'Con credenciales' : 'Sin credenciales'}
                      </span>
                      <span className={clsx(
                        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]',
                        registration.lastRegisteredAt
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                          : 'border-amber-200 bg-amber-50 text-amber-700'
                      )}>
                        <ShieldCheck size={12} />
                        {registration.lastRegisteredAt ? 'Registrado en Cloud API' : 'Pendiente de registro'}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                        <Webhook size={12} />
                        meta / whatsapp
                      </span>
                    </div>

                    <div className="mt-5 rounded-[1.4rem] border border-slate-200 bg-slate-50/70 p-4">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Registro oficial</p>
                          <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                            {registration.lastRegisteredAt
                              ? 'Registrado el ' + formatDate(registration.lastRegisteredAt) + '.'
                              : 'Todavia falta registrar el numero con el PIN de dos pasos. Sin eso, esta linea no queda lista de verdad para envio.'}
                          </p>
                        </div>
                        <span className={clsx(
                          'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]',
                          registration.lastRegisteredAt
                            ? 'border-emerald-200 bg-white text-emerald-700'
                            : 'border-amber-200 bg-white text-amber-700'
                        )}>
                          <ShieldCheck size={12} />
                          {registration.lastRegisteredAt ? 'Registrado' : 'Pendiente'}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-end">
                        <label className="flex-1 text-sm font-semibold text-slate-700">
                          PIN de dos pasos
                          <input
                            value={registrationPin}
                            onChange={(event) => setRegistrationPins((current) => ({
                              ...current,
                              [connection.id]: event.target.value.replace(/\D/g, '').slice(0, 6),
                            }))}
                            inputMode="numeric"
                            placeholder="123456"
                            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-primary-400 focus:ring-4 focus:ring-primary-500/15"
                          />
                        </label>
                        <button
                          onClick={() => registerPhoneMutation.mutate({ connectionId: connection.id, pin: registrationPin })}
                          disabled={!/^\d{6}$/.test(registrationPin) || isRegistering}
                          className="btn-secondary disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isRegistering ? <Loader2 size={16} className="animate-spin" /> : <ShieldCheck size={16} />}
                          {registration.lastRegisteredAt ? 'Registrar otra vez' : 'Registrar numero'}
                        </button>
                      </div>

                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Este es el paso oficial de Cloud API. No es vinculacion por QR.
                      </p>

                      {!registration.lastRegisteredAt && registration.lastAttemptAt && (
                        <p className="mt-2 text-xs font-medium text-slate-500">
                          Ultimo intento: {formatDate(registration.lastAttemptAt)}
                        </p>
                      )}

                      {registrationError && (
                        <div className="mt-3 rounded-2xl border border-rose-200 bg-rose-50/80 p-3 text-sm font-medium text-rose-700">
                          {registrationError}
                        </div>
                      )}
                    </div>

                    <div className="mt-5 flex justify-end">
                      <button
                        onClick={() => testMutation.mutate(connection.id)}
                        disabled={isTesting}
                        className="btn-secondary"
                      >
                        {isTesting ? <Loader2 size={16} className="animate-spin" /> : <RefreshCcw size={16} />}
                        Probar conexion
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
