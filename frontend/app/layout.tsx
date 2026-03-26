import type { Metadata } from 'next'
import './globals.css'
import './layout-helpers.css'
import { Providers } from './providers'
import { ThemeScript } from './theme-script'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'CRM',
  description: 'Tu CRM personal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  )
}
