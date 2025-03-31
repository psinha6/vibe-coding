"use client"

import Link from 'next/link'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-lg font-bold text-primary-600 dark:text-primary-400">Frontend Blog</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              A blog focused on frontend engineering principles, best practices, and the latest industry trends.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://github.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <FiGithub className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900 dark:text-gray-200">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/category/react" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  React
                </Link>
              </li>
              <li>
                <Link href="/category/vue" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Vue.js
                </Link>
              </li>
              <li>
                <Link href="/category/javascript" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/category/css" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  CSS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900 dark:text-gray-200">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/glossary" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Frontend Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 