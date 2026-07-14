import { Locale } from '@/i18n/config'
import { getAllSchemas } from '@/lib/schema'

interface PageSchemasProps {
  locale: Locale
  path: string
  faqData?: Array<{ question: string; answer: string }>
  includeWebApp?: boolean
}

/**
 * Render page-specific Schema.org JSON-LD.
 *
 * This component is intentionally kept next to the pages that use it so that
 * each page owns its own structured data instead of hard-coding it in the root
 * layout.
 */
export function PageSchemas({ locale, path, faqData, includeWebApp = false }: PageSchemasProps) {
  const schemas = getAllSchemas(locale, {
    path,
    faqData,
    includeWebApp,
    includeFAQ: !!faqData && faqData.length > 0,
    includeBreadcrumb: true,
  })

  const pathId = path === '/' ? 'home' : path.replace(/\//g, '-')

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${pathId}-${index}`}
          id={`schema-${pathId}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  )
}
