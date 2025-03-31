"use client"

import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import { FiClock, FiTag } from 'react-icons/fi'
import { Post } from '@/types'

interface BlogPostCardProps {
  post: Post
  featured?: boolean
}

export default function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  return (
    <article className={`card transition-shadow hover:shadow-lg ${featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}>
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 lg:h-full">
        <Link href={`/posts/${post.slug}`}>
          <div className="relative w-full h-full">
            <SafeImage 
              src={post.coverImage} 
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <div className="p-6">
        <Link 
          href={`/category/${post.category.slug}`} 
          className="inline-block text-xs font-medium uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2"
        >
          {post.category.name}
        </Link>
        <h3 className="text-xl font-bold leading-tight mb-2">
          <Link href={`/posts/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
              <SafeImage 
                src={post.author.avatar} 
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FiClock className="mr-1" />
              <span>{post.readingTime}</span>
            </div>
            <div className="flex items-center">
              <FiTag className="mr-1" />
              <span>{post.tags[0]?.name || 'Uncategorized'}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
} 