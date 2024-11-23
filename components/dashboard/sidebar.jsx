import Link from 'next/link'
import { Zap, LayoutDashboard, FileText, Settings, Users } from 'lucide-react'

export function Sidebar() {
  const menuItems = [
    { icon: Zap, label: 'Overview', href: '/dashboard' },
    { icon: FileText, label: 'All Posts', href: '/dashboard/posts' },
    { icon: Users, label: 'Users', href: '/dashboard/users' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ]

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <item.icon className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}