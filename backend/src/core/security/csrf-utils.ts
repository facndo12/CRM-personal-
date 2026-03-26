import crypto from 'crypto'

const CSRF_COOKIE_NAME = 'csrf_token'
const CSRF_HEADER_NAME = 'x-csrf-token'

export interface CsrfTokenData {
  token: string
}

export function generateCsrfToken(secret: string): CsrfTokenData {
  const randomBytes = crypto.randomBytes(24)
  const randomPart = randomBytes.toString('hex')
  const timestamp = Date.now().toString(36)
  const dataToSign = randomPart + '.' + timestamp
  const signature = crypto
    .createHmac('sha256', secret)
    .update(dataToSign)
    .digest('base64url')
  
  const token = `${randomBytes.toString('base64url')}.${timestamp}.${signature}`
  return { token }
}

export function verifyCsrfToken(secret: string, token: string): boolean {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) return false
    
    const [randomBase64, timestamp, signature] = parts
    const randomBytes = Buffer.from(randomBase64, 'base64url')
    const randomPart = randomBytes.toString('hex')
    const dataToSign = randomPart + '.' + timestamp
    
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(dataToSign)
      .digest('base64url')
    
    if (signature !== expectedSignature) return false
    
    const tokenTime = parseInt(timestamp, 36)
    const now = Date.now()
    const oneHour = 60 * 60 * 1000
    
    if (Math.abs(now - tokenTime) >= oneHour) return false
    
    return true
  } catch {
    return false
  }
}

export function createCsrfCookieOptions(isProduction: boolean) {
  return {
    name: CSRF_COOKIE_NAME,
    value: '',
    options: {
      path: '/',
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'strict' : 'lax' as const,
      maxAge: 60 * 60,
    },
  }
}

export { CSRF_COOKIE_NAME, CSRF_HEADER_NAME }
