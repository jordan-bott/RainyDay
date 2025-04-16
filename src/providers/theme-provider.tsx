// Handles hydration mismatch

'use client'

import * as React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemeProvider>) {
  const [mounted, setMounted] = React.useState(false)

  // Only render content after first client-side mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Return null on server-side and first render
  if (!mounted) return null

  // Only render theme provider when we're on the client
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}
