import type { Metadata } from 'next'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  OrganizationSwitcher,
} from '@clerk/nextjs'
import { ThemeProvider } from '../providers/theme-provider'
import ClerkProvider from '../providers/clerk-provider'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Squiggles from '@/components/Squiggles'

// components
import Nav from '@/components/Nav'

const monsterrat = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rainy Day',
  description: 'Tracking your last watering!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={monsterrat.className}>
        <ThemeProvider attribute="class" enableSystem>
          <ClerkProvider>
            <header className="flex justify-end items-center p-4 gap-4 h-[8vh] bg-lightBG dark:bg-darkBG">
              <Nav />
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <OrganizationSwitcher />
                <UserButton
                  userProfileMode="navigation"
                  userProfileUrl="/dashboard"
                />
              </SignedIn>
            </header>
            <div className="bg-lightBG dark:bg-darkBG h-[92vh] w-[100vw] overflow-hidden">
              <Squiggles />
              <div className="fixed z-40 w-[100vw] h-full top-[8vh] left-0">
                {children}
              </div>
            </div>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
