"use client"

import React from 'react'
import SafeImage from '@/components/SafeImage'
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'
import MainLayout from '@/components/MainLayout'
import { authors } from '@/lib/sample-data'

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Frontend Blog</h1>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Frontend Blog is dedicated to providing in-depth, high-quality content about frontend engineering principles, 
                best practices, and emerging technologies. Our mission is to help developers stay up-to-date with the rapidly 
                evolving world of frontend development and to foster a community of knowledge sharing and continuous learning.
              </p>
              <p>
                We believe that great frontend engineering is more than just writing code—it's about creating accessible, 
                performant, and maintainable applications that provide excellent user experiences. Our articles explore the 
                nuances of modern frontend development, from mastering JavaScript frameworks to optimizing web performance 
                and implementing accessibility standards.
              </p>
              <p>
                Whether you're a seasoned developer or just starting your journey in frontend development, our goal is to 
                provide valuable insights that help you grow as an engineer and build better web applications.
              </p>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {authors.map(author => (
                <div key={author.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-64">
                    <SafeImage
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{author.bio}</p>
                    <div className="flex space-x-4">
                      {author.twitter && (
                        <a 
                          href={`https://twitter.com/${author.twitter}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                        >
                          <FiTwitter className="w-5 h-5" />
                        </a>
                      )}
                      {author.github && (
                        <a 
                          href={`https://github.com/${author.github}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      )}
                      {author.website && (
                        <a 
                          href={author.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                        >
                          <FiLinkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Have questions, feedback, or suggestions for the blog? We'd love to hear from you! Fill out the form below, 
                and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  )
} 