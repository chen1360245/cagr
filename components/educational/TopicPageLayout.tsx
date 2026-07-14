import { ReactNode } from 'react'

interface TopicPageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
}

/**
 * Consistent wrapper for educational topic pages.
 *
 * Provides the H1, subtitle, and prose container so each topic page
 * follows the same visual rhythm.
 */
export function TopicPageLayout({ title, subtitle, children }: TopicPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600">
                {subtitle}
              </p>
            )}
          </header>

          <div className="space-y-8">
            {children}
          </div>
        </div>
      </article>
    </div>
  )
}
