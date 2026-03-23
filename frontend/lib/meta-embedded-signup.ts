'use client'

type MetaLoginResponse = {
  authResponse?: {
    code?: string
  }
  status?: string
}

type MetaLoginOptions = {
  config_id: string
  display?: 'popup'
  response_type?: 'code'
  override_default_response_type?: boolean
  extras?: Record<string, unknown>
}

type MetaFacebookSdk = {
  init: (options: {
    appId: string
    cookie?: boolean
    xfbml?: boolean
    version: string
  }) => void
  login: (
    callback: (response: MetaLoginResponse) => void,
    options: MetaLoginOptions
  ) => void
}

type MetaEmbeddedSignupEvent = {
  type?: string
  event?: 'FINISH' | 'CANCEL' | 'ERROR'
  data?: {
    phone_number_id?: string
    waba_id?: string
    business_id?: string
    current_step?: string
    error_message?: string
  }
}

export interface WhatsAppEmbeddedSignupLaunchResult {
  code: string
  phoneNumberId: string
  wabaId?: string
  businessId?: string
}

declare global {
  interface Window {
    FB?: MetaFacebookSdk
    fbAsyncInit?: () => void
    __metaSdkPromise?: Promise<MetaFacebookSdk>
    __metaSdkAppId?: string
  }
}

const META_SDK_URL = 'https://connect.facebook.net/en_US/sdk.js'
const META_SDK_ID = 'meta-facebook-sdk'
const META_GRAPH_VERSION = 'v23.0'
const META_EVENT_TYPE = 'WA_EMBEDDED_SIGNUP'
const META_EVENT_TIMEOUT_MS = 180_000

function isMetaOrigin(origin: string) {
  try {
    const parsed = new URL(origin)
    return /(^|\.)facebook\.com$/i.test(parsed.hostname) || /(^|\.)facebook\.net$/i.test(parsed.hostname)
  } catch {
    return false
  }
}

function parseMetaEvent(value: unknown): MetaEmbeddedSignupEvent | null {
  if (!value) return null

  if (typeof value === 'string') {
    try {
      return parseMetaEvent(JSON.parse(value))
    } catch {
      return null
    }
  }

  if (typeof value !== 'object' || Array.isArray(value)) {
    return null
  }

  return value as MetaEmbeddedSignupEvent
}

function initSdk(appId: string) {
  if (!window.FB) {
    throw new Error('Meta SDK no quedo disponible en window.FB')
  }

  window.FB.init({
    appId,
    cookie: true,
    xfbml: false,
    version: META_GRAPH_VERSION,
  })

  window.__metaSdkAppId = appId
  return window.FB
}

async function ensureMetaSdk(appId: string): Promise<MetaFacebookSdk> {
  if (typeof window === 'undefined') {
    throw new Error('El popup de Meta solo puede abrirse en el navegador')
  }

  if (window.FB) {
    if (window.__metaSdkAppId !== appId) {
      return initSdk(appId)
    }
    return window.FB
  }

  if (!window.__metaSdkPromise) {
    window.__metaSdkPromise = new Promise<MetaFacebookSdk>((resolve, reject) => {
      const existingScript = document.getElementById(META_SDK_ID) as HTMLScriptElement | null

      window.fbAsyncInit = () => {
        try {
          resolve(initSdk(appId))
        } catch (error) {
          reject(error)
        }
      }

      if (existingScript) {
        return
      }

      const script = document.createElement('script')
      script.id = META_SDK_ID
      script.src = META_SDK_URL
      script.async = true
      script.defer = true
      script.crossOrigin = 'anonymous'
      script.onerror = () => {
        reject(new Error('No se pudo cargar el SDK de Meta'))
      }
      document.head.appendChild(script)
    })
  }

  const sdk = await window.__metaSdkPromise
  if (window.__metaSdkAppId !== appId) {
    return initSdk(appId)
  }
  return sdk
}

export async function launchWhatsAppEmbeddedSignup(input: {
  appId: string
  configurationId: string
  redirectUri?: string
}): Promise<WhatsAppEmbeddedSignupLaunchResult> {
  const sdk = await ensureMetaSdk(input.appId)

  return new Promise<WhatsAppEmbeddedSignupLaunchResult>((resolve, reject) => {
    let code: string | null = null
    let finishPayload: Omit<WhatsAppEmbeddedSignupLaunchResult, 'code'> | null = null
    let settled = false

    const timeoutId = window.setTimeout(() => {
      fail('Meta no termino el Embedded Signup a tiempo')
    }, META_EVENT_TIMEOUT_MS)

    const cleanup = () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('message', onMessage)
    }

    const fail = (message: string) => {
      if (settled) return
      settled = true
      cleanup()
      reject(new Error(message))
    }

    const maybeResolve = () => {
      if (settled || !code || !finishPayload) return
      settled = true
      cleanup()
      resolve({
        code,
        ...finishPayload,
      })
    }

    const onMessage = (event: MessageEvent) => {
      if (!isMetaOrigin(event.origin)) return

      const payload = parseMetaEvent(event.data)
      if (!payload || payload.type !== META_EVENT_TYPE) return

      if (payload.event === 'CANCEL') {
        const step = payload.data?.current_step
        fail(step ? `Meta cancelo el flujo en ${step}` : 'Meta cancelo el flujo')
        return
      }

      if (payload.event === 'ERROR') {
        fail(payload.data?.error_message ?? 'Meta devolvio un error durante Embedded Signup')
        return
      }

      if (payload.event === 'FINISH') {
        const phoneNumberId = payload.data?.phone_number_id?.trim()
        if (!phoneNumberId) {
          fail('Meta termino el flujo pero no devolvio phone_number_id')
          return
        }

        finishPayload = {
          phoneNumberId,
          wabaId: payload.data?.waba_id?.trim() || undefined,
          businessId: payload.data?.business_id?.trim() || undefined,
        }
        maybeResolve()
      }
    }

    window.addEventListener('message', onMessage)

    sdk.login((response) => {
      const responseCode = response.authResponse?.code?.trim()
      if (!responseCode) {
        fail('Meta no devolvio un code de autorizacion. Revisa Facebook Login for Business, dominios permitidos y la app de Meta.')
        return
      }

      code = responseCode
      maybeResolve()
    }, {
      config_id: input.configurationId,
      display: 'popup',
      response_type: 'code',
      override_default_response_type: true,
      extras: {
        feature: 'whatsapp_embedded_signup',
        sessionInfoVersion: 3,
        ...(input.redirectUri && { redirectUri: input.redirectUri }),
      },
    })
  })
}
