"use client"

import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import MainLayout from '@/components/MainLayout'
import BlogPostCard from '@/components/BlogPostCard'
import { posts, categories } from '@/lib/sample-data'

// This would typically be a server function in a real app
function getCategoryBySlug(slug: string) {
  return categories.find(category => category.slug === slug)
}

// This would typically be a server function in a real app
function getPostsByCategory(categoryId: string) {
  return posts.filter(post => post.category.id === categoryId)
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug)
  
  if (!category) {
    notFound()
  }
  
  const categoryPosts = getPostsByCategory(category.id)
  
  return (
    <MainLayout>
      <div className="py-16">
        <div className="container">
          <Link href="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 mb-6 hover:underline">
            <FiArrowLeft className="mr-2" /> Back to all articles
          </Link>
          
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {category.name}
            </h1>
            {category.description && (
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {category.description}
              </p>
            )}
          </header>
          
          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400 py-12">
              <p>No articles found in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
} 