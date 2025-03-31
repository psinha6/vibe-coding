"use client"

import React from 'react'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import MainLayout from '@/components/MainLayout'
import BlogPostCard from '@/components/BlogPostCard'
import { posts } from '@/lib/sample-data'

export default function SearchPage({ 
  searchParams 
}: { 
  searchParams: { q?: string } 
}) {
  const query = searchParams.q || ''
  
  // Filter posts based on the search query
  const searchResults = query 
    ? posts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.author.name.toLowerCase().includes(query.toLowerCase()) ||
        post.category.name.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.name.toLowerCase().includes(query.toLowerCase()))
      )
    : []
  
  return (
    <MainLayout>
      <div className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Search Articles</h1>
          
          <form className="mb-12">
            <div className="flex rounded-lg shadow-sm">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search for articles, topics, or keywords..."
                className="flex-grow py-3 px-4 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="py-3 px-6 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </form>
          
          {query ? (
            <>
              <h2 className="text-xl font-semibold mb-6">
                {searchResults.length === 0
                  ? 'No results found'
                  : `${searchResults.length} result${searchResults.length === 1 ? '' : 's'} for "${query}"`}
              </h2>
              
              <div className="space-y-8">
                {searchResults.map(post => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Enter a search term to find articles.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
} 