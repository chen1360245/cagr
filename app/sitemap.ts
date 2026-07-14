import { MetadataRoute } from 'next'

/**
 * Next.js 14 Dynamic Sitemap
 *
 * This file automatically generates a sitemap.xml at /sitemap.xml
 * Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cagrcalculator.app'
  const currentDate = new Date()

  // Define supported languages
  const locales = ['en', 'zh-CN', 'es', 'de', 'ja', 'ar', 'fr', 'pt-BR', 'ko']

  // Pages that exist for each locale
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const }, // Homepage
    { path: '/cagr-formula', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/cagr-vs-irr', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/cagr-in-excel', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/privacy-extension', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
  ]

  // Generate sitemap entries for each locale
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add all locale-specific URLs (the bare domain redirects to /en, so it is
  // intentionally excluded to avoid a canonical/sitemap mismatch).
  for (const locale of locales) {
    for (const page of pages) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            'en': `${baseUrl}/en${page.path}`,
            'zh-CN': `${baseUrl}/zh-CN${page.path}`,
            'es': `${baseUrl}/es${page.path}`,
            'de': `${baseUrl}/de${page.path}`,
            'ja': `${baseUrl}/ja${page.path}`,
            'ar': `${baseUrl}/ar${page.path}`,
            'fr': `${baseUrl}/fr${page.path}`,
            'pt-BR': `${baseUrl}/pt-BR${page.path}`,
            'ko': `${baseUrl}/ko${page.path}`,
            'x-default': `${baseUrl}/en${page.path}`,
          }
        }
      })
    }
  }

  return sitemapEntries
}
