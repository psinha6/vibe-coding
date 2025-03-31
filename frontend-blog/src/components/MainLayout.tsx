"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'

interface MainLayoutProps {
  children: React.ReactNode
  showNewsletter?: boolean
}

export default function MainLayout({ children, showNewsletter = true }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {showNewsletter && <NewsletterSignup />}
      <Footer />
    </div>
  )
} 