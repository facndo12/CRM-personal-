import axios from 'axios'
import { auth } from './auth'

// Apunta al backend que ya tenemos corriendo
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api/v1'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

// Interceptor — agrega el token JWT automáticamente a cada request
// Sin esto tendrías que pasarlo manualmente en cada llamada
api.interceptors.request.use((config) => {
  const token = auth.getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Interceptor de respuesta — maneja errores globalmente
// Si el token expiró (401), limpia la sesión y redirige al login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      auth.clear()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

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
}

// ─── Contactos ────────────────────────────────────────────────────
export const contactsApi = {
  list: (params?: Record<string, unknown>) =>
    api.get('/contacts', { params }),

  get: (id: string) =>
    api.get(`/contacts/${id}`),

  create: (data: Record<string, unknown>) =>
    api.post('/contacts', data),

  update: (id: string, data: Record<string, unknown>) =>
    api.patch(`/contacts/${id}`, data),

  delete: (id: string) =>
    api.delete(`/contacts/${id}`),

  merge: (winnerId: string, loserId: string) =>
    api.post(`/contacts/${winnerId}/merge`, { loserId }),
}

// ─── Deals ────────────────────────────────────────────────────────
export const dealsApi = {
  list: (params?: Record<string, unknown>) =>
    api.get('/deals', { params }),

  getKanban: (pipelineId: string) =>
    api.get(`/deals/kanban/${pipelineId}`),

  create: (data: Record<string, unknown>) =>
    api.post('/deals', data),

  update: (id: string, data: Record<string, unknown>) =>
    api.patch(`/deals/${id}`, data),

  move: (id: string, stageId: string, position?: number) =>
    api.patch(`/deals/${id}/move`, { stageId, position }),

  delete: (id: string) =>
    api.delete(`/deals/${id}`),
}

// ─── Webhooks ─────────────────────────────────────────────────────
export const webhooksApi = {
  list: () =>
    api.get('/webhooks'),

  getEvents: () =>
    api.get('/webhooks/events'),

  create: (data: Record<string, unknown>) =>
    api.post('/webhooks', data),

  update: (id: string, data: Record<string, unknown>) =>
    api.patch(`/webhooks/${id}`, data),

  delete: (id: string) =>
    api.delete(`/webhooks/${id}`),

  test: (id: string) =>
    api.post(`/webhooks/${id}/test`),
}

// Pipeline

export const pipelinesApi = {
  list: () => api.get('/pipelines'),
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