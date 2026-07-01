/**
 * Home Page - Smart CAGR Calculator
 *
 * Server Component that renders the static hero and educational content.
 * The interactive calculator is delegated to CalculatorClient so search engines
 * can index the educational sections while the tool stays dynamic.
 */

import { Suspense } from 'react'
import { getTranslations } from 'next-intl/server'
import { CalculatorClient } from '@/components/calculator/CalculatorClient'
import { CollapsibleSection } from '@/components/educational/CollapsibleSection'
import { WhatIsCAGR } from '@/components/educational/WhatIsCAGR'
import { FormulaExplained } from '@/components/educational/FormulaExplained'
import { UseCases } from '@/components/educational/UseCases'
import { CAGRvsMetrics } from '@/components/educational/CAGRvsMetrics'
import { FAQ } from '@/components/educational/FAQ'
import { HowToUse } from '@/components/educational/HowToUse'
import { About } from '@/components/educational/About'
import { BookOpen, Calculator as CalculatorIcon, Lightbulb, BarChart, HelpCircle, Info } from 'lucide-react'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'page' })

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Interactive Calculator - Client Component */}
      <Suspense
        fallback={
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin text-6xl mb-4">⏳</div>
              <p className="text-gray-600">Loading calculator...</p>
            </div>
          </div>
        }
      >
        <CalculatorClient />
      </Suspense>

      {/* Educational Content Sections */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Section Divider */}
          <div className="border-t-2 border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
              {t('sections.learnTitle')}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {t('sections.learnSubtitle')}
            </p>
          </div>

          {/* What is CAGR - Default Expanded */}
          <CollapsibleSection
            id="what-is-cagr"
            title={t('sections.whatIsCAGR')}
            icon={<BookOpen className="w-6 h-6" />}
            defaultExpanded={true}
          >
            <WhatIsCAGR />
          </CollapsibleSection>

          {/* How to Calculate CAGR - Formula Explained */}
          <CollapsibleSection
            id="formula"
            title={t('sections.formula')}
            icon={<CalculatorIcon className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <FormulaExplained />
          </CollapsibleSection>

          {/* CAGR Calculator Use Cases & Examples */}
          <CollapsibleSection
            id="use-cases"
            title={t('sections.useCases')}
            icon={<Lightbulb className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <UseCases />
          </CollapsibleSection>

          {/* CAGR vs Other Metrics */}
          <CollapsibleSection
            id="cagr-vs-metrics"
            title={t('sections.cagrVsMetrics')}
            icon={<BarChart className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <CAGRvsMetrics />
          </CollapsibleSection>

          {/* How to Use This CAGR Calculator */}
          <CollapsibleSection
            id="how-to-use"
            title={t('sections.howToUse')}
            icon={<HelpCircle className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <HowToUse />
          </CollapsibleSection>

          {/* CAGR Calculator FAQ */}
          <CollapsibleSection
            id="faq"
            title={t('sections.faq')}
            icon={<HelpCircle className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <FAQ />
          </CollapsibleSection>

          {/* About Our Free Online CAGR Calculator */}
          <CollapsibleSection
            id="about"
            title={t('sections.about')}
            icon={<Info className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <About />
          </CollapsibleSection>
        </div>
      </section>
    </div>
  )
}
