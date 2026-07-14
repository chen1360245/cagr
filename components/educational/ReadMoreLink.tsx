import { ArrowRight } from 'lucide-react'

interface ReadMoreLinkProps {
  href: string
  label: string
}

/**
 * Deep-link from a homepage collapsible section to its dedicated topic page.
 */
export function ReadMoreLink({ href, label }: ReadMoreLinkProps) {
  return (
    <div className="mt-6 pt-4 border-t border-gray-100">
      <a
        href={href}
        className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
      >
        {label}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}
