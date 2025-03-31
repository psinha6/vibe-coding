"use client"

import React, { useEffect, useState } from 'react'
import SafeImage from '@/components/SafeImage'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FiCalendar, FiClock, FiArrowLeft, FiTag } from 'react-icons/fi'
import MainLayout from '@/components/MainLayout'
import { posts } from '@/lib/sample-data'
import CodeBlock from '@/components/CodeBlock'

// This would typically be a server function in a real app
function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug)
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  const [formattedContent, setFormattedContent] = useState<React.ReactNode[]>([])
  
  useEffect(() => {
    if (post) {
      setFormattedContent(formatMarkdown(post.content))
    }
  }, [post])
  
  if (!post) {
    notFound()
  }
  
  return (
    <MainLayout showNewsletter={false}>
      <article className="py-16">
        <div className="container max-w-4xl">
          <Link href="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 mb-6 hover:underline">
            <FiArrowLeft className="mr-2" /> Back to all articles
          </Link>
          
          <header>
            <div className="mb-4">
              <Link 
                href={`/category/${post.category.slug}`}
                className="text-sm font-medium uppercase tracking-wider text-primary-600 dark:text-primary-400"
              >
                {post.category.name}
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-6 gap-4">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
              
              <div className="flex items-center">
                <FiClock className="mr-2" />
                <span>{post.readingTime}</span>
              </div>
              
              {post.tags.map(tag => (
                <Link 
                  key={tag.id}
                  href={`/tag/${tag.slug}`}
                  className="flex items-center hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <FiTag className="mr-1" />
                  <span>{tag.name}</span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <SafeImage 
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {post.author.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {post.author.bio.split('.')[0]}
                </div>
              </div>
            </div>
          </header>
          
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <SafeImage 
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {formattedContent}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link 
                  key={tag.id}
                  href={`/tag/${tag.slug}`}
                  className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
      
      <section className="bg-gray-50 dark:bg-gray-800/30 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Comments</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium mb-4">Leave a comment</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Comment
                </label>
                <textarea 
                  id="comment" 
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
              >
                Submit Comment
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

// Move formatMarkdown inside a client-only context
function formatMarkdown(content: string): React.ReactNode[] {
  let html = content

  // Replace headers
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
  
  // Replace paragraphs
  html = html.replace(/^(?!<h|```|\s*$)(.*$)/gm, '<p class="mb-4 text-gray-700 dark:text-gray-300">$1</p>')
  
  // Replace ordered lists
  html = html.replace(/^(\d+\. .*$)/gm, '<li class="ml-6 list-decimal mb-2">$1</li>')
  
  // Replace bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
  
  // Extract and process code blocks
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g
  const codeBlocks: Array<[string, string | undefined, string]> = []
  let match
  
  while ((match = codeBlockRegex.exec(html)) !== null) {
    const fullMatch = match[0]
    const language = match[1]
    const code = match[2]
    codeBlocks.push([fullMatch, language, code])
  }
  
  // Replace code blocks with placeholders
  codeBlocks.forEach((block, index) => {
    html = html.replace(block[0], `<code-block-${index}></code-block-${index}>`)
  })
  
  // Create React-compatible HTML with JSX
  const jsx = []
  let key = 0
  
  // Split by HTML tags and process
  const parts = html.split(/(<[^>]*>)/)
  let i = 0
  while (i < parts.length) {
    const part = parts[i]
    
    // Check if it's a code block placeholder
    const codeBlockMatch = part.match(/<code-block-(\d+)><\/code-block-(\d+)>/)
    if (codeBlockMatch) {
      const index = parseInt(codeBlockMatch[1])
      const [, language, code] = codeBlocks[index]
      jsx.push(
        <CodeBlock key={key++} language={language} value={code} />
      )
    } else if (part.startsWith('<') && !part.startsWith('</')) {
      // Opening tag
      const tagMatch = part.match(/<([a-z0-9]+)([^>]*)>/)
      if (tagMatch) {
        const tagName = tagMatch[1]
        const content = parts[i + 1]
        
        // Skip the content and closing tag in the next iteration
        i += 2
        
        // Don't include the wrapper HTML tags
        let cleanContent = content
        if (tagName === 'li') {
          // Remove the "1. " prefix from list items
          cleanContent = content.replace(/^\d+\.\s+/, '')
        }
        
        const classNameMatch = tagMatch[2]?.match(/class="([^"]*)"/)
        jsx.push(React.createElement(
          tagName,
          { key: key++, className: classNameMatch ? classNameMatch[1] : undefined },
          cleanContent
        ))
        continue
      }
    }
    
    i++
  }
  
  return jsx
} 