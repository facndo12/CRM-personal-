export function initSentry() {
  if (!process.env.SENTRY_DSN) return

  const Sentry = require('@sentry/node')
  Sentry.init({
    dsn:              process.env.SENTRY_DSN,
    environment:      process.env.NODE_ENV ?? 'development',
    tracesSampleRate: 0.2,
  })
}

export const Sentry = {
  captureException: (err: any) => {
    try {
      require('@sentry/node').captureException(err)
    } catch {}
  }
}