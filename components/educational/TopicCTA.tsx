import { Calculator } from 'lucide-react'

interface TopicCTAProps {
  locale: string
}

/**
 * Bottom call-to-action on topic pages that sends users back to the calculator.
 */
export function TopicCTA({ locale }: TopicCTAProps) {
  return (
    <section className="bg-primary/10 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Calculator className="w-6 h-6 text-primary" />
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Try Our Free CAGR Calculator
        </h2>
      </div>
      <p className="text-gray-700 mb-5 max-w-2xl mx-auto">
        Calculate CAGR, final value, initial investment, or time period instantly. No signup required.
      </p>
      <a
        href={`/${locale}`}
        className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors duration-200"
      >
        Open Calculator
      </a>
    </section>
  )
}
