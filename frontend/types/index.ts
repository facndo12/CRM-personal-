// Roles
export type Role = 'owner' | 'admin' | 'member' | 'viewer'

/** Helper para verificar si un rol tiene acceso a una accion */
export function canDo(userRole: Role | string | undefined, allowedRoles: Role[]): boolean {
  if (!userRole) return false
  return allowedRoles.includes(userRole as Role)
}

// Auth
export interface User {
  id: string
  email: string
  firstName: string
  lastName?: string
  avatar?: string
}

export interface Workspace {
  id: string
  name: string
  slug: string
}

export interface AuthResponse {
  user: User
  workspace: Workspace
  role: string
  accessToken: string
}

// Contactos
export interface Contact {
  id: string
  workspaceId: string
  firstName: string
  lastName?: string
  email?: string
  phone?: string
  avatar?: string
  status: 'LEAD' | 'QUALIFIED' | 'ACTIVE' | 'CUSTOMER' | 'CHURNED'
  source: string
  score: number
  tags: string[]
  companyId?: string
  ownerId?: string
  isArchived: boolean
  createdAt: string
  updatedAt: string
  lastContactedAt?: string
}

export interface PaginatedResult<T> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface ContactFilters {
  search?: string
  status?: string
  page?: number
  limit?: number
  sortBy?: string
  sortDir?: 'asc' | 'desc'
  scoreMin?: number
  scoreMax?: number
}

// Deals y Kanban
export interface Deal {
  id: string
  workspaceId: string
  title: string
  value?: number
  currency: string
  probability?: number
  pipelineId: string
  stageId: string
  position: number
  status: 'OPEN' | 'WON' | 'LOST' | 'PAUSED'
  ownerId?: string
  companyId?: string
  expectedCloseDate?: string
  closedAt?: string
  createdAt: string
  updatedAt: string
}

export interface KanbanStage {
  id: string
  name: string
  position: number
  color: string
  probability?: number
  isWon: boolean
  isLost: boolean
  rottenAfterDays?: number
}

export interface KanbanCard {
  id: string
  title: string
  value?: number
  currency: string
  probability?: number
  position: number
  status: string
  contactIds: string[]
  companyId?: string
  ownerId?: string
  expectedCloseDate?: string
  daysInStage: number
  isRotten: boolean
  createdAt: string
  updatedAt: string
}

export interface KanbanColumn {
  stage: KanbanStage
  deals: KanbanCard[]
  totalValue: number
  count: number
}

export interface KanbanBoard {
  pipeline: { id: string; name: string }
  columns: KanbanColumn[]
}

// Webhooks
export interface Webhook {
  id: string
  workspaceId: string
  name: string
  url: string
  events: string[]
  isActive: boolean
  successCount: number
  failureCount: number
  lastTriggeredAt?: string
  lastStatusCode?: number
  createdAt: string
  updatedAt: string
}

// API Keys
export interface ApiKey {
  id: string
  name: string
  keyPrefix: string
  lastUsedAt?: string
  expiresAt?: string
  isActive: boolean
  createdAt: string
}

// Activities
export interface Activity {
  id:          string
  type:        string
  title:       string
  description: string | null
  contactId:   string | null
  userId:      string | null
  createdAt:   string
}

// Notes
export interface Note {
  id:        string
  content:   string
  contactId: string | null
  userId:    string | null
  createdAt: string
}

// Dashboard
export interface DashboardData {
  contacts: {
    total:    number
    byStatus: { status: string; count: number }[]
    recent:   {
      id:        string
      firstName: string
      lastName:  string | null
      status:    string
      score:     number
      createdAt: string
    }[]
  }
  deals: {
    total:         number
    pipelineValue: number
    byStage: {
      stageId:   string
      stageName: string
      color:     string
      count:     number
      value:     number
    }[]
  }
  recentActivities: {
    id:          string
    type:        string
    title:       string
    contactName: string | null
    createdAt:   string
  }[]
}

// Pipelines
export interface Stage {
  id:         string
  pipelineId: string
  name:       string
  color:      string
  position:   number
}

export interface Pipeline {
  id:          string
  workspaceId: string
  name:        string
  stages:      Stage[]
  createdAt:   string
}
// Canales / Inbox
export interface InboxConnection {
  id: string
  workspaceId: string
  provider: 'meta' | 'tiktok'
  channel: 'whatsapp' | 'instagram' | 'messenger' | 'tiktok'
  name: string
  status: 'disconnected' | 'connected' | 'error'
  externalAccountId: string
  externalAccountLabel?: string | null
  settings?: Record<string, unknown>
  hasCredentials: boolean
  lastSyncedAt?: string | null
  createdAt: string
  updatedAt: string
}

export interface EmbeddedSignupConfig {
  enabled: boolean
  codeExchangeReady: boolean
  appId?: string
  configurationId?: string
  provider: 'meta'
  channel: 'whatsapp'
}

export interface ConnectionInspection {
  status: 'connected'
  externalAccountLabel?: string
  metadata?: Record<string, unknown>
  rawResponse: unknown
}

export interface ConnectionTestResult {
  connection: InboxConnection
  inspection: ConnectionInspection
}

export interface EmbeddedSignupCompletionResult extends ConnectionTestResult {
  mode: 'created' | 'updated'
  exchange?: {
    tokenType?: string
    expiresIn?: number
  }
}
