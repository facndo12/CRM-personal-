const TOKEN_KEY = 'crm_token'
const USER_KEY  = 'crm_user'
const CSRF_KEY = 'crm_csrf_token'

export interface StoredAuth {
  token: string
  userId: string
  workspaceId: string
  role: string
  firstName: string
  email: string
  workspaceName: string
  csrfToken?: string
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() ?? null
  }
  return null
}

export const auth = {
  save(data: StoredAuth) {
    if (typeof window === 'undefined') return
    localStorage.setItem(TOKEN_KEY, data.token)
    localStorage.setItem(USER_KEY, JSON.stringify(data))
    if (data.csrfToken) {
      localStorage.setItem(CSRF_KEY, data.csrfToken)
    }
  },

  get(): StoredAuth | null {
    if (typeof window === 'undefined') return null
    const raw = localStorage.getItem(USER_KEY)
    if (!raw) return null
    try {
      return JSON.parse(raw)
    } catch {
      return null
    }
  },

  getToken(): string | null {
    if (typeof window === 'undefined') return null
    return getCookie('crm_token') ?? localStorage.getItem(TOKEN_KEY)
  },

  getCsrfToken(): string | null {
    if (typeof window === 'undefined') return null
    // Try from stored auth first
    const stored = this.get()
    if (stored?.csrfToken) return stored.csrfToken
    // Fallback to separate CSRF key
    return localStorage.getItem(CSRF_KEY)
  },

  clear() {
    if (typeof window === 'undefined') return
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    localStorage.removeItem(CSRF_KEY)
    document.cookie = 'crm_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
    document.cookie = 'csrf_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
  },

  isLoggedIn(): boolean {
    return !!this.getToken()
  },
}
