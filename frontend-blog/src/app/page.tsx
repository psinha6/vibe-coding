"use client"

import MainLayout from '@/components/MainLayout'
import BlogPostCard from '@/components/BlogPostCard'
import Link from 'next/link'
import { FiArrowRight, FiFolder } from 'react-icons/fi'
import { posts, categories } from '@/lib/sample-data'

export default function HomePage() {
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 4)
  
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frontend Engineering Insights
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Deep dives into frontend technologies, best practices, and performance optimization techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/posts" className="btn btn-primary">
                Read All Articles
              </Link>
              <Link href="/categories" className="btn btn-secondary">
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Featured Article</h2>
          <BlogPostCard post={featuredPost} featured />
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Recent Articles</h2>
            <Link href="/posts" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
              View All <FiArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <Link 
                key={category.id} 
                href={`/category/${category.slug}`}
                className="card p-6 flex items-center hover:shadow-lg transition-shadow"
              >
                <FiFolder className="w-10 h-10 text-primary-500 dark:text-primary-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 