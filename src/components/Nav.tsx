'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  OrganizationSwitcher,
  UserButton,
} from '@clerk/nextjs'

const Nav = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Link href="/">Home</Link>
      <SignedIn>
        <Link href="/dashboard">Dashboard</Link>
      </SignedIn>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <SignedIn>
        <OrganizationSwitcher />
        <UserButton userProfileMode="navigation" userProfileUrl="/dashboard" />
      </SignedIn>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
    </>
  )
}

export default Nav
