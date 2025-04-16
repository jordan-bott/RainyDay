'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function _ClerkProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { resolvedTheme } = useTheme()
  const variables = {
    colorPrimary: '#4744ff',
  }

  return (
    <ClerkProvider
      appearance={
        resolvedTheme === 'dark'
          ? { baseTheme: dark, variables: variables }
          : { variables: variables }
      }
    >
      {children}
    </ClerkProvider>
  )
}
