'use client'

import { UserNav } from './user-nav'
import { useRouter } from 'next/navigation'
import { Layout } from 'lucide-react'

export function Navbar() {
  const router = useRouter()

  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Layout className="h-6 w-6" />
          <span className="text-xl font-bold">CMS Dashboard</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  )
}