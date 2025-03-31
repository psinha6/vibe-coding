"use client"

import Link from 'next/link'
import { FiSearch, FiSun, FiMoon } from 'react-icons/fi'
import { useState } from 'react'

const categories = [
  { name: 'React', href: '/category/react' },
  { name: 'Vue.js', href: '/category/vue' },
  { name: 'JavaScript', href: '/category/javascript' },
  { name: 'CSS', href: '/category/css' },
  { name: 'Performance', href: '/category/performance' },
  { name: 'Accessibility', href: '/category/accessibility' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <nav className="container py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">FrontendBlog</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <button
              className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FiSun className="h-6 w-6" /> : <FiMoon className="h-6 w-6" />}
              <span className="sr-only">Toggle dark mode</span>
            </button>
            <Link
              href="/search"
              className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
            >
              <FiSearch className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Link>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4">
            <div className="space-y-2 py-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 