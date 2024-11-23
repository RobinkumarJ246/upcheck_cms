'use client'

import { formatDistanceToNow } from 'date-fns'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Edit2, Trash2 } from 'lucide-react'

const MOCK_POSTS = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and build your first app',
    author: 'John Doe',
    date: new Date('2024-03-10'),
    status: 'published',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    excerpt: 'Deep dive into Tailwind CSS features and best practices',
    author: 'Jane Smith',
    date: new Date('2024-03-09'),
    status: 'draft',
  },
]

export function PostList() {
  return (
    <div className="space-y-4">
      {MOCK_POSTS.map((post) => (
        <div
          key={post.id}
          className="bg-white p-6 rounded-lg shadow-sm border flex justify-between items-start"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.excerpt}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{post.author}</span>
              <span>•</span>
              <span>{formatDistanceToNow(post.date)} ago</span>
              <span>•</span>
              <span className={post.status === 'published' ? 'text-green-600' : 'text-orange-600'}>
                {post.status}
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link href={`/dashboard/posts/${post.id}/edit`}>
              <Button variant="ghost" size="icon">
                <Edit2 className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="text-red-600">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}