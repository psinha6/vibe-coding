"use client"

import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiTag } from 'react-icons/fi'
import MainLayout from '@/components/MainLayout'
import BlogPostCard from '@/components/BlogPostCard'
import { posts, tags } from '@/lib/sample-data'

// This would typically be a server function in a real app
function getTagBySlug(slug: string) {
  return tags.find(tag => tag.slug === slug)
}

// This would typically be a server function in a real app
function getPostsByTag(tagId: string) {
  return posts.filter(post => post.tags.some(tag => tag.id === tagId))
}

export default function TagPage({ params }: { params: { slug: string } }) {
  const tag = getTagBySlug(params.slug)
  
  if (!tag) {
    notFound()
  }
  
  const tagPosts = getPostsByTag(tag.id)
  
  return (
    <MainLayout>
      <div className="py-16">
        <div className="container">
          <Link href="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 mb-6 hover:underline">
            <FiArrowLeft className="mr-2" /> Back to all articles
          </Link>
          
          <header className="mb-12 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg mb-4">
              <FiTag className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              {tag.name}
            </h1>
          </header>
          
          {tagPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tagPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400 py-12">
              <p>No articles found with this tag yet.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
} 