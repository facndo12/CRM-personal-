import { db } from '../../core/database'
import { EventBus } from '../../core/event-bus'
import {
  NotFoundError,
  paginate,
  ActivityType,
  type PaginationQuery,
  type PaginatedResult,
} from '../../types'
import { type Prisma } from '../../generated/prisma'

type Deal = Prisma.DealGetPayload<object>

// ─── DTOs ─────────────────────────────────────────────────────────

export interface CreateDealDto {
  title: string
  value?: number
  currency?: string
  probability?: number
  pipelineId: string
  stageId: string
  companyId?: string
  ownerId?: string
  contactIds?: string[]
  expectedCloseDate?: Date
  customData?: Record<string, unknown>
}

export interface UpdateDealDto extends Partial<Omit<CreateDealDto, 'pipelineId' | 'stageId'>> {}

export interface MoveDealDto {
  stageId: string
  position?: number
}

export interface DealFilters extends PaginationQuery {
  pipelineId?: string
  stageId?: string
  status?: string
  ownerId?: string
  companyId?: string
}

// La respuesta completa del Kanban
export interface KanbanBoard {
  pipeline: { id: string; name: string }
  columns: KanbanColumn[]
}

export interface KanbanColumn {
  stage: {
    id: string
    name: string
    position: number
    color: string
    probability: number | null
    isWon: boolean
    isLost: boolean
    rottenAfterDays: number | null
  }
  deals: KanbanCard[]
  totalValue: number
  count: number
}

export interface KanbanCard {
  id: string
  title: string
  value: number | null
  currency: string
  probability: number | null
  position: number
  status: string
  contactIds: string[]
  companyId: string | null
  ownerId: string | null
  expectedCloseDate: Date | null
  daysInStage: number
  isRotten: boolean
  createdAt: Date
  updatedAt: Date
}

// ─── Servicio ─────────────────────────────────────────────────────

export class DealService {
  constructor(private readonly eventBus: EventBus) {}

  // ─── Crear Deal ──────────────────────────────────────────────────
  async create(
    workspaceId: string,
    data: CreateDealDto,
    userId?: string
  ): Promise<Deal> {
    // Verificar que la stage pertenece al pipeline y al workspace
    const stage = await db.stage.findFirst({
      where: {
        id: data.stageId,
        pipeline: { id: data.pipelineId, workspaceId },
      },
    })
    if (!stage) throw new NotFoundError('Stage', data.stageId)

    // Posición: al final de la columna
    const lastDeal = await db.deal.findFirst({
      where: { workspaceId, stageId: data.stageId, status: 'OPEN' },
      orderBy: { position: 'desc' },
    })
    const position = (lastDeal?.position ?? -1) + 1

    const deal = await db.$transaction(async (tx) => {
      const newDeal = await tx.deal.create({
        data: {
          workspaceId,
          title: data.title,
          value: data.value,
          currency: data.currency ?? 'USD',
          probability: data.probability ?? stage.probability,
          pipelineId: data.pipelineId,
          stageId: data.stageId,
          position,
          companyId: data.companyId,
          ownerId: data.ownerId,
          expectedCloseDate: data.expectedCloseDate,
          customData: (data.customData ?? {}) as Prisma.InputJsonValue,
        },
      })

      // Asociar contactos al deal
      if (data.contactIds?.length) {
        await tx.dealContact.createMany({
          data: data.contactIds.map((contactId) => ({
            dealId: newDeal.id,
            contactId,
          })),
          skipDuplicates: true,
        })
      }

      return newDeal
    })

    await this.logActivity(workspaceId, deal.id, ActivityType.DEAL_CREATED, userId)

    await this.eventBus.emit('deal.created', {
      workspaceId,
      deal: this.sanitize(deal),
      createdBy: userId ?? 'system',
    })

    return deal
  }

  // ─── Obtener Kanban completo ─────────────────────────────────────
  // Este es el endpoint principal del frontend
  // Devuelve todas las columnas con sus deals ordenados
  async getKanban(workspaceId: string, pipelineId: string): Promise<KanbanBoard> {
    const pipeline = await db.pipeline.findFirst({
      where: { id: pipelineId, workspaceId },
      include: {
        stages: { orderBy: { position: 'asc' } },
      },
    })
    if (!pipeline) throw new NotFoundError('Pipeline', pipelineId)

    // Traer todos los deals abiertos del pipeline de una sola consulta
    const deals = await db.deal.findMany({
      where: { workspaceId, pipelineId, status: 'OPEN', isArchived: false},
      include: {
        contacts: { select: { contactId: true } },
      },
      orderBy: { position: 'asc' },
    })

    const now = new Date()

    // Agrupar deals por stage
    const columns: KanbanColumn[] = pipeline.stages.map((stage) => {
      const stageDeals = deals.filter((d) => d.stageId === stage.id)

      const cards: KanbanCard[] = stageDeals.map((d) => {
        // Calcular días en la stage actual
        const daysInStage = Math.floor(
          (now.getTime() - d.stageEnteredAt.getTime()) / (1000 * 60 * 60 * 24)
        )

        // Un deal es "podrido" si lleva más días que el límite de la stage
        const isRotten = stage.rottenAfterDays != null
          ? daysInStage >= stage.rottenAfterDays
          : false

        return {
          id: d.id,
          title: d.title,
          value: d.value ? Number(d.value) : null,
          currency: d.currency,
          probability: d.probability,
          position: d.position,
          status: d.status,
          contactIds: d.contacts.map((c) => c.contactId),
          companyId: d.companyId,
          ownerId: d.ownerId,
          expectedCloseDate: d.expectedCloseDate,
          daysInStage,
          isRotten,
          createdAt: d.createdAt,
          updatedAt: d.updatedAt,
        }
      })

      const totalValue = cards.reduce((sum, d) => sum + (d.value ?? 0), 0)

      return {
        stage: {
          id: stage.id,
          name: stage.name,
          position: stage.position,
          color: stage.color,
          probability: stage.probability,
          isWon: stage.isWon,
          isLost: stage.isLost,
          rottenAfterDays: stage.rottenAfterDays,
        },
        deals: cards,
        totalValue,
        count: cards.length,
      }
    })

    return {
      pipeline: { id: pipeline.id, name: pipeline.name },
      columns,
    }
  }

  // ─── Mover Deal (Drag & Drop) ────────────────────────────────────
  // Este es el método más complejo — maneja el reordenamiento del Kanban
  async move(
    workspaceId: string,
    dealId: string,
    dto: MoveDealDto,
    userId?: string
  ): Promise<Deal> {
    const deal = await db.deal.findFirst({ where: { id: dealId, workspaceId } })
    if (!deal) throw new NotFoundError('Deal', dealId)

    const prevStageId = deal.stageId
    const newStageId = dto.stageId
    const stageChanged = prevStageId !== newStageId

    // Verificar que la nueva stage existe en el workspace
    const newStage = await db.stage.findFirst({
      where: { id: newStageId, pipeline: { workspaceId } },
    })
    if (!newStage) throw new NotFoundError('Stage', newStageId)

    await db.$transaction(async (tx) => {
      const targetPosition = dto.position ?? 9999

      // Hacer hueco en la columna destino
      // Si insertamos en posición 2, los deals con position >= 2 suben uno
      await tx.deal.updateMany({
        where: {
          workspaceId,
          stageId: newStageId,
          position: { gte: targetPosition },
          id: { not: dealId },
        },
        data: { position: { increment: 1 } },
      })

      // Determinar el nuevo status según el tipo de stage
      let newStatus = deal.status
      if (newStage.isWon) newStatus = 'WON'
      else if (newStage.isLost) newStatus = 'LOST'
      else newStatus = 'OPEN'

      // Mover el deal a la nueva posición
      await tx.deal.update({
        where: { id: dealId, workspaceId },
        data: {
          stageId: newStageId,
          position: targetPosition,
          probability: newStage.probability ?? deal.probability,
          status: newStatus,
          stageEnteredAt: new Date(),
          // Si se cierra, registrar la fecha
          ...(newStage.isWon && { closedAt: new Date() }),
          ...(newStage.isLost && { closedAt: new Date() }),
        },
      })

      // Compactar posiciones para que siempre sean 0, 1, 2, 3…
      // Se compacta SIEMPRE (no solo al cambiar columna) para evitar que
      // los movimientos dentro de la misma columna acumulen huecos y
      // duplicados que desincronicen el orden del Kanban.
      if (stageChanged) {
        // Si cambió de columna: compactar la columna ORIGEN (quedó con un hueco)
        const remainingInOrigin = await tx.deal.findMany({
          where: { workspaceId, stageId: prevStageId },
          orderBy: { position: 'asc' },
        })
        await Promise.all(
          remainingInOrigin.map((d, i) =>
            tx.deal.update({ where: { id: d.id, workspaceId}, data: { position: i } })
          )
        )
      }

      // Compactar siempre la columna DESTINO (misma o distinta)
      const remainingInDest = await tx.deal.findMany({
        where: { workspaceId, stageId: newStageId },
        orderBy: { position: 'asc' },
      })
      await Promise.all(
        remainingInDest.map((d, i) =>
          tx.deal.update({ where: { id: d.id }, data: { position: i } })
        )
      )
    })

    const updated = await db.deal.findUniqueOrThrow({ where: { id: dealId } })

    // Emitir eventos específicos según lo que pasó
    if (stageChanged) {
      await this.logActivity(
        workspaceId, dealId, ActivityType.DEAL_STAGE_CHANGED, userId,
        { fromStageId: prevStageId, toStageId: newStageId }
      )
      await this.eventBus.emit('deal.stage_changed', {
        workspaceId,
        deal: this.sanitize(updated),
        previousStageId: prevStageId,
        newStageId,
        movedBy: userId ?? 'system',
      })
    }

    if (newStage.isWon) {
      await this.logActivity(workspaceId, dealId, ActivityType.DEAL_WON, userId)
      await this.eventBus.emit('deal.won', {
        workspaceId,
        deal: this.sanitize(updated),
      })
    } else if (newStage.isLost) {
      await this.logActivity(workspaceId, dealId, ActivityType.DEAL_LOST, userId)
      await this.eventBus.emit('deal.lost', {
        workspaceId,
        deal: this.sanitize(updated),
      })
    }

    return updated
  }

  // ─── Buscar con filtros ──────────────────────────────────────────
  async search(
    workspaceId: string,
    filters: DealFilters
  ): Promise<PaginatedResult<Deal>> {
    const page = filters.page ?? 0
    const limit = Math.min(filters.limit ?? 25, 100)

    const where: Prisma.DealWhereInput = { workspaceId, isArchived: false}
    if (filters.pipelineId) where.pipelineId = filters.pipelineId
    if (filters.stageId)    where.stageId    = filters.stageId
    if (filters.status)     where.status     = filters.status
    if (filters.ownerId)    where.ownerId    = filters.ownerId
    if (filters.companyId)  where.companyId  = filters.companyId

    const [items, total] = await Promise.all([
      db.deal.findMany({
        where,
        take: limit,
        skip: page * limit,
        orderBy: { createdAt: 'desc' },
      }),
      db.deal.count({ where }),
    ])

    return paginate(items, total, page, limit)
  }

  // ─── Actualizar ──────────────────────────────────────────────────
  async update(
    workspaceId: string,
    id: string,
    data: UpdateDealDto,
    userId?: string
  ): Promise<Deal> {
    await db.deal.findFirstOrThrow({ where: { id, workspaceId } })

    const deal = await db.deal.update({
      where: { id, workspaceId },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.value !== undefined && { value: data.value }),
        ...(data.currency !== undefined && { currency: data.currency }),
        ...(data.probability !== undefined && { probability: data.probability }),
        ...(data.companyId !== undefined && { companyId: data.companyId }),
        ...(data.ownerId !== undefined && { ownerId: data.ownerId }),
        ...(data.expectedCloseDate !== undefined && {
          expectedCloseDate: data.expectedCloseDate,
        }),
        ...(data.customData !== undefined && {
          customData: data.customData as Prisma.InputJsonValue,
        }),
      },
    })

    await this.logActivity(workspaceId, id, ActivityType.DEAL_UPDATED, userId)
    await this.eventBus.emit('deal.updated', {
      workspaceId,
      deal: this.sanitize(deal),
    })

    return deal
  }

  // ─── Eliminar ────────────────────────────────────────────────────
  async delete(workspaceId: string, id: string, userId?: string): Promise<void> {
    await db.deal.findFirstOrThrow({ where: { id, workspaceId } })

    // Soft delete — igual que contacts, preserva el historial
    await db.deal.update({
      where: { id, workspaceId },
      data: { isArchived: true },
    })

    await this.eventBus.emit('deal.deleted', {
      workspaceId,
      dealId: id,
      deletedBy: userId ?? 'system',
    })
  }

  // ─── Helpers privados ────────────────────────────────────────────
  private async logActivity(
    workspaceId: string,
    dealId: string,
    type: ActivityType,
    userId?: string,
    metadata?: Record<string, unknown>
  ) {
    const titles: Record<string, string> = {
      [ActivityType.DEAL_CREATED]:       'Deal creado',
      [ActivityType.DEAL_UPDATED]:       'Deal actualizado',
      [ActivityType.DEAL_STAGE_CHANGED]: 'Stage cambiada',
      [ActivityType.DEAL_WON]:           '🎉 Deal ganado',
      [ActivityType.DEAL_LOST]:          'Deal perdido',
    }

    await db.activity.create({
      data: {
        workspaceId,
        type,
        entityType: 'deal',
        entityId: dealId,
        dealId,
        userId,
        source: 'manual',
        title: titles[type] ?? type,
        metadata: (metadata ?? null) as Prisma.InputJsonValue,
      },
    })
  }

  private sanitize(deal: Deal) {
    return {
      id: deal.id,
      workspaceId: deal.workspaceId,
      title: deal.title,
      value: deal.value,
      currency: deal.currency,
      pipelineId: deal.pipelineId,
      stageId: deal.stageId,
      position: deal.position,
      status: deal.status,
      ownerId: deal.ownerId,
      companyId: deal.companyId,
      probability: deal.probability,
      expectedCloseDate: deal.expectedCloseDate,
      closedAt: deal.closedAt,
      createdAt: deal.createdAt,
      updatedAt: deal.updatedAt,
    }
  }
}