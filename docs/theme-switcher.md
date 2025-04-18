# Implement a Theme Switcher with Clerk

Theme switchers allow users to toggle between light mode and dark mode.

> [!TIP]
> Before you start, ensure you've created your Next.js application, and implemented Clerk.
> Follow Clerk's [Next.js Quickstart Guide](https://clerk.com/docs/quickstarts/nextjs) to get started.

## Install `next-themes`

Run the following command to install [`next-themes`](https://github.com/pacocoursey/next-themes)

```shell
npm install next-themes
# or
yarn add next-themes
```

## Create a simple theme switcher with [`useTheme()`](https://github.com/pacocoursey/next-themes?tab=readme-ov-file#usetheme)

The `useTheme()` hook from `next-themes` provides access to both setting the theme, and viewing the current theme.

> [!NOTE]
> Any UI can be used for the theme switcher so long as `setTheme()` is used with an event handler such as `onClick` to set the theme. The following example uses two buttons: one for light mode, and one for dark mode to control which theme is used by the app.

```tsx
'use client'

import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}

export default ThemeChanger
```

You can place your `ThemeChanger` component wherever you would like in your app. Somewhere within the header is a common choice.

## Create `theme-provider.tsx`

The theme provider will facilitate the switching of themes on all of its children.

1. Create a `providers` directory

   - If you're using the `/src` directory, create `providers` in `/src`
   - If you're not using the `/src` directory, create `providers` in the root level

   For reference, your `providers` directory should be the same level as your `/app` directory.

2. Create a `theme-provider.tsx` file in your `providers` directory

3. Copy and paste the following file into your `theme-provider.tsx` file. This creates your modified `<ThemeProvider>` component using [`next-themes`](https://github.com/pacocoursey/next-themes) `<ThemeProvider>` and ensures that content isn't rendered until after the first client-side mount. This prevents a hydration error.

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

## Install the `@clerk/themes` package

See the Clerk Theme [reference](https://clerk.com/docs/customization/themes) for more information on how to customize themes.

```shell
npm install @clerk/themes
```

## Modify `<ClerkProvider>` to change themes with `useTheme()`

First `useTheme()` will be called to determine which theme is currently active.

Because of this, `<ClerkProvider>` must be modified in its own file. The root layout contains `metadata` which must be rendered in a server component. However, hooks (such as `useTheme()`) must be rendered in a client component.

1. Create a `clerk-provider.tsx` file in your `providers` directory

2. Copy and paste the following file into your `clerk-provider.tsx` file. This will modify the `<ClerkProvider>` component to change themes based on the current theme. Clerk's `dark` theme is triggered when the theme selected is `"dark"` and is the default theme (a light theme) when the theme isn't `"dark"`.

```tsx
// providers/clerk-provider.tsx
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

  return (
    <ClerkProvider
      appearance={resolvedTheme === 'dark' ? { baseTheme: dark } : undefined}
    >
      {children}
    </ClerkProvider>
  )
}
```

## To your app layout, add `<ThemeProvider>` as the first child of your `<body>`

Pass the `attribute="class"` and `enableSystem` properties to your `<ThemeProvider>` opening tag.

Copy and paste the following into your `layout.tsx` file in your `app` directory. You can replace the existing code with the following, or simply add in the opening and closing `<ThemeProvider>` as the first child of your `<body>` wrapping all other children of `<body>`, and change your `<ClerkProvider>` import to use your newly modified `<ClerkProvider>` in your `providers` directory.

```tsx
// /app/layout.tsx
import type { Metadata } from 'next'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import ClerkProvider from '../providers/clerk-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Clerk Next.js Quickstart',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" enableSystem>
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
```

## Remove boilerplate CSS

When creating your Next.js app some CSS styles were automatically added to `globals.css`. These will prevent the desired theme switching behavior.

Clear your `globals.css` file of all stylings. You can leave `@import 'tailwindcss';` at the top if you are using TailwindCSS.

> ### For TailwindCSS Users:
>
> In `globals.css` add `@custom-variant dark (&:where(.dark, .dark *));` below `@import 'tailwindcss';`. This will allow you to add `dark:` before TailwindCSS classes to be triggered when the dark theme is active. Example `globals.css` file below:
>
> ```css
> @import 'tailwindcss';
>
> @custom-variant dark (&:where(.dark, .dark *));
> ```
>
> #### Create `tailwind.config.ts` file
>
> 1.  Create a `tailwind.config.ts` file in the root level of your app
>
> 2.  Copy and paste the following into `tailwind.config.ts`:
>
> ```ts
> import type { Config } from 'tailwindcss'
>
> const config = {
>   content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
>
>   theme: {
>     extend: {},
>     colors: {},
>   },
>   plugins: [],
>   darkMode: 'class',
> } satisfies Config
>
> export default config
> ```

## Test out your theme switcher!

If your server isn't running, start it with the following in your terminal:

```shell
npm run dev
```

You've created a basic theme switcher! From here you can finish implementing Clerk pages and have them seamlessly change between themes with the rest of your app.

> [!NOTE]
> To have your theme switcher work on `<SignInButton />` and `<SignUpButton />` [create a custom sign-in or sign-up page](https://clerk.com/docs/references/nextjs/custom-sign-in-or-up-page) or set the mode property to `mode="modal"` on `<SignInButton />` and `<SignUpButton />`.
