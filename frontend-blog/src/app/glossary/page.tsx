"use client"

import React from 'react'
import Link from 'next/link'
import MainLayout from '@/components/MainLayout'

interface GlossaryTerm {
  id: string
  term: string
  definition: string
  category: string
}

// This would typically come from a database or API in a real app
const glossaryTerms: GlossaryTerm[] = [
  {
    id: '1',
    term: 'DOM',
    definition: 'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.',
    category: 'Core Concepts',
  },
  {
    id: '2',
    term: 'Virtual DOM',
    definition: 'A lightweight JavaScript representation of the DOM used in some frameworks like React. It allows the framework to perform calculations and updates in memory before applying changes to the actual DOM.',
    category: 'React',
  },
  {
    id: '3',
    term: 'CSS-in-JS',
    definition: 'An approach to styling where CSS is composed using JavaScript instead of defined in external files. Libraries like styled-components and Emotion follow this pattern.',
    category: 'Styling',
  },
  {
    id: '4',
    term: 'Server-Side Rendering (SSR)',
    definition: 'The process of rendering web pages on the server and sending fully rendered HTML to the client, as opposed to sending JavaScript that renders the page in the browser.',
    category: 'Performance',
  },
  {
    id: '5',
    term: 'Static Site Generation (SSG)',
    definition: 'A technique where HTML pages are generated at build time rather than on each request, resulting in faster page loads and better performance.',
    category: 'Performance',
  },
  {
    id: '6',
    term: 'Progressive Web App (PWA)',
    definition: 'A type of application software delivered through the web, built using common web technologies but intended to work on any platform with a standards-compliant browser.',
    category: 'Architecture',
  },
  {
    id: '7',
    term: 'Webpack',
    definition: 'A static module bundler for JavaScript applications that processes and bundles various assets like JavaScript, CSS, and images.',
    category: 'Build Tools',
  },
  {
    id: '8',
    term: 'ESLint',
    definition: 'A static code analysis tool for identifying problematic patterns in JavaScript code, helping to maintain code quality and consistency.',
    category: 'Developer Tools',
  },
  {
    id: '9',
    term: 'TypeScript',
    definition: 'A superset of JavaScript that adds static typing and other features to enhance developer productivity and code quality.',
    category: 'Languages',
  },
  {
    id: '10',
    term: 'ARIA',
    definition: 'Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and applications more accessible to people with disabilities.',
    category: 'Accessibility',
  },
  {
    id: '11',
    term: 'Polyfill',
    definition: 'Code that implements a feature on web browsers that do not support the feature natively, allowing developers to use new features without worrying about browser compatibility.',
    category: 'Compatibility',
  },
  {
    id: '12',
    term: 'Shadow DOM',
    definition: 'A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element, which is rendered separately from the main document DOM.',
    category: 'Web Components',
  },
]

// Group terms by first letter
function groupTermsByFirstLetter(terms: GlossaryTerm[]) {
  const grouped: Record<string, GlossaryTerm[]> = {}
  
  terms.forEach(term => {
    const firstLetter = term.term.charAt(0).toUpperCase()
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = []
    }
    grouped[firstLetter].push(term)
  })
  
  // Sort the groups
  return Object.keys(grouped)
    .sort()
    .reduce((result: Record<string, GlossaryTerm[]>, key) => {
      result[key] = grouped[key].sort((a, b) => a.term.localeCompare(b.term))
      return result
    }, {})
}

export default function GlossaryPage() {
  const groupedTerms = groupTermsByFirstLetter(glossaryTerms)
  const letters = Object.keys(groupedTerms)
  
  return (
    <MainLayout>
      <div className="py-16">
        <div className="container max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Frontend Engineering Glossary
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            A comprehensive collection of common terms, concepts, and technologies used in frontend engineering and web development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {letters.map(letter => (
              <a 
                key={letter}
                href={`#${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800/20"
              >
                {letter}
              </a>
            ))}
          </div>
          
          {letters.map(letter => (
            <div key={letter} id={letter} className="mb-12">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                {letter}
              </h2>
              <dl className="space-y-6">
                {groupedTerms[letter].map(term => (
                  <div key={term.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <dt className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {term.term}
                    </dt>
                    <dd className="text-gray-700 dark:text-gray-300">
                      {term.definition}
                    </dd>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded">
                        {term.category}
                      </span>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
} 