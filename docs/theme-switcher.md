# Implement a Theme Switcher with Clerk

Theme switchers allow users to toggle between light mode and dark mode.

> [!TIP]
> Before you start ensure you have created your Next. js application, and implemented Clerk.
> Follow Clerk's [Next.js Quickstart Guide](https://clerk.com/docs/quickstarts/nextjs) to get started.

## Install `next-themes`

Run the following command to install [`next-themes`](https://github.com/pacocoursey/next-themes)

```shell
npm install next-themes
# or
yarn add next-themes
```

## To your `providers` folder, add `theme-provider.tsx`

The theme provider will facilitate the switching of themes on all of its children.

1. Create a `theme-provider.tsx` file

   This will be in the same location as your `clerk-provider.tsx` file

- If you're using the `/src` directory, create `theme-provider.tsx` in `/src/providers`
- If you're not using the `/src` directory, create `theme-provider.tsx` in `/providers`

2. In your `theme-provider.tsx` file add export the `ThemeProvider` component:

   ```typescript
   // providers/theme-provider.tsx
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
   ```

## To your root layout, add '<ThemeProvider />`
