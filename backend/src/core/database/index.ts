import { PrismaClient } from '../../generated/prisma'
import { config } from '../config'

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient
}

function normalizeDatabaseUrl(url: string) {
  if (process.platform !== 'win32' || config.NODE_ENV !== 'development') {
    return url
  }

  return url.replace('channel_binding=require', 'channel_binding=disable')
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: normalizeDatabaseUrl(config.DATABASE_URL),
      },
    },
    log: config.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
  })

if (config.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db
}
