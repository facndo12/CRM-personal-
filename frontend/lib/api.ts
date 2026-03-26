import axios from 'axios'
import { auth } from './auth'
import type {
  Contact, Deal, Webhook,
  Pipeline, Stage,
} from '@/types'

// Apunta al backend que ya tenemos corriendo
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api/v1'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

async function refreshCsrfToken(): Promise<string | null> {
  try {
    const res = await axios.get(`${BASE_URL}/auth/csrf-token`, {
      withCredentials: true,
    })
    const token = res.data.csrfToken
    if (token) {
      // Update the stored auth data with the new CSRF token
      const stored = auth.get()
      if (stored) {
        auth.save({ ...stored, csrfToken: token })
      }
    }
    return token
  } catch {
    return null
  }
}

function getCsrfToken(): string | null {
  return auth.getCsrfToken()
}

// Interceptor — agrega el token JWT y CSRF automáticamente a cada request
// Usa cookie si existe (httpOnly), sino Authorization header (localStorage)
api.interceptors.request.use(async (config) => {
  const cookieToken = getCookie('crm_token')
  if (!cookieToken) {
    const token = auth.getToken?.() ?? localStorage.getItem('crm_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }

  if (['post', 'put', 'patch', 'delete'].includes(config.method?.toLowerCase() || '')) {
    const isPublicRoute =
      config.url?.includes('/auth/login') ||
      config.url?.includes('/auth/register') ||
      config.url?.includes('/auth/forgot-password') ||
      config.url?.includes('/auth/reset-password')

    if (!isPublicRoute) {
      const storedCsrf = getCsrfToken()
      if (storedCsrf) {
        config.headers['x-csrf-token'] = storedCsrf
      } else if (auth.isLoggedIn()) {
        const newToken = await refreshCsrfToken()
        if (newToken) {
          config.headers['x-csrf-token'] = newToken
        }
      }
    }
  }

  return config
})

// Track retry attempts to prevent infinite loops
const retryMap = new Map<string, number>()

// Interceptor de respuesta — maneja errores globalmente
// Si el token expiró (401), limpia la sesión y redirige al login.
// Si falla CSRF, refresca el token y reintenta una vez.
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config
    if (!config) return Promise.reject(error)

    const isAuthRoute = config.url?.includes('/auth/login') || 
                        config.url?.includes('/auth/register') ||
                        config.url?.includes('/auth/logout')

    if (error.response?.status === 401 && !isAuthRoute) {
      auth.clear()
      window.location.href = '/login'
      return Promise.reject(error)
    }

    // CSRF error — refresh token and retry once
    if (error.response?.status === 403 && error.response?.data?.error === 'CSRF_ERROR') {
      const retryKey = config.url + config.method
      const retries = retryMap.get(retryKey) ?? 0
      
      if (retries < 1) {
        retryMap.set(retryKey, retries + 1)
        
        // Refresh the CSRF token
        const newToken = await refreshCsrfToken()
        if (newToken) {
          config.headers['x-csrf-token'] = newToken
          return api(config)
        }
      }
      retryMap.delete(retryKey)
    }
    
    return Promise.reject(error)
  }
)

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() ?? null
  }
  return null
}

// ─── Auth ──────────────────────────────────────────────────────────
export const authApi = {
  register: (data: {
    email: string
    password: string
    firstName: string
    lastName?: string
    workspaceName: string
  }) => api.post('/auth/register', data),

  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),

  me: () => api.get('/auth/me'),

  listApiKeys: () =>
    api.get('/auth/api-keys'),

  createApiKey: (data: { name: string }) =>
    api.post('/auth/api-keys', data),

  deleteApiKey: (id: string) =>
    api.delete(`/auth/api-keys/${id}`),

  forgotPassword: (email: string) =>
    api.post('/auth/forgot-password', { email }),
  resetPassword: (token: string, password: string) =>
    api.post('/auth/reset-password', { token, password }),

  logout: () => api.post('/auth/logout'),
}

// ─── Contactos ────────────────────────────────────────────────────
type ContactFiltersQuery = {
  search?: string; status?: string; page?: number
  limit?: number; sortBy?: string; sortDir?: 'asc' | 'desc'
  scoreMin?: number; scoreMax?: number
}

export const contactsApi = {
  list: (params?: ContactFiltersQuery) =>
    api.get('/contacts', { params }),

  get: (id: string) =>
    api.get(`/contacts/${id}`),

  create: (data: Omit<Partial<Contact>, 'id' | 'workspaceId' | 'score' | 'isArchived' | 'createdAt' | 'updatedAt'> & { firstName: string }) =>
    api.post('/contacts', data),

  update: (id: string, data: Omit<Partial<Contact>, 'id' | 'workspaceId' | 'score' | 'isArchived' | 'createdAt' | 'updatedAt'>) =>
    api.patch(`/contacts/${id}`, data),

  delete: (id: string) =>
    api.delete(`/contacts/${id}`),

  merge: (winnerId: string, loserId: string) =>
    api.post(`/contacts/${winnerId}/merge`, { loserId }),
}

// ─── Deals ────────────────────────────────────────────────────────
type CreateDealPayload = {
  title: string; pipelineId: string; stageId: string
  value?: number; currency?: string; probability?: number
  companyId?: string; ownerId?: string; contactIds?: string[]
  expectedCloseDate?: string
}
type UpdateDealPayload = Omit<Partial<CreateDealPayload>, 'pipelineId' | 'stageId'>

export const dealsApi = {
  list: (params?: { pipelineId?: string; stageId?: string; status?: string; page?: number; limit?: number }) =>
    api.get('/deals', { params }),

  getKanban: (pipelineId: string) =>
    api.get(`/deals/kanban/${pipelineId}`),

  create: (data: CreateDealPayload) =>
    api.post('/deals', data),

  update: (id: string, data: UpdateDealPayload) =>
    api.patch(`/deals/${id}`, data),

  move: (id: string, stageId: string, position?: number) =>
    api.patch(`/deals/${id}/move`, { stageId, position }),

  delete: (id: string) =>
    api.delete(`/deals/${id}`),
}

// ─── Webhooks ─────────────────────────────────────────────────────
type WebhookPayload = { name: string; url: string; events: string[]; secret?: string }

export const webhooksApi = {
  list: () =>
    api.get('/webhooks'),

  getEvents: () =>
    api.get('/webhooks/events'),

  create: (data: WebhookPayload) =>
    api.post('/webhooks', data),

  update: (id: string, data: Partial<WebhookPayload> & { isActive?: boolean }) =>
    api.patch(`/webhooks/${id}`, data),

  delete: (id: string) =>
    api.delete(`/webhooks/${id}`),

  test: (id: string) =>
    api.post(`/webhooks/${id}/test`),
}

// ─── Pipelines ────────────────────────────────────────────────────
export const pipelinesApi = {
  list:        ()                                                            => api.get('/pipelines'),
  create:      (data: Pick<Pipeline, 'name'>)                                => api.post('/pipelines', data),
  update:      (id: string, data: Pick<Pipeline, 'name'>)                    => api.patch(`/pipelines/${id}`, data),
  delete:      (id: string)                                                  => api.delete(`/pipelines/${id}`),
  createStage: (pipelineId: string, data: Pick<Stage, 'name' | 'color'>)    =>
    api.post(`/pipelines/${pipelineId}/stages`, data),
  updateStage: (pipelineId: string, stageId: string, data: Partial<Pick<Stage, 'name' | 'color'>>) =>
    api.patch(`/pipelines/${pipelineId}/stages/${stageId}`, data),
  deleteStage: (pipelineId: string, stageId: string)                        =>
    api.delete(`/pipelines/${pipelineId}/stages/${stageId}`),
}

//Actividades
export const activitiesApi = {
  list: (contactId: string) =>
    api.get('/activities', { params: { contactId } }),

  create: (data: {
    contactId:   string
    type:        string
    title:       string
    description?: string
  }) => api.post('/activities', data),

  delete: (id: string) => api.delete(`/activities/${id}`),
}

export const notesApi = {
  list: (contactId: string) =>
    api.get('/notes', { params: { contactId } }),

  create: (data: { contactId: string; content: string }) =>
    api.post('/notes', data),

  delete: (id: string) => api.delete(`/notes/${id}`),
}

//DASHBOARD
export const dashboardApi = {
  get: () => api.get('/dashboard'),
}

// ─── Equipo ────────────────────────────────────────────────────────
export const teamApi = {
  list: () =>
    api.get('/auth/team'),

  invite: (data: { email: string; firstName: string; lastName?: string; password: string; role: 'admin' | 'member' | 'viewer' }) =>
    api.post('/auth/invite', data),

  updateRole: (memberId: string, role: 'admin' | 'member' | 'viewer') =>
    api.patch(`/auth/team/${memberId}/role`, { role }),

  remove: (memberId: string) =>
    api.delete(`/auth/team/${memberId}`),
}

