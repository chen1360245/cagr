import { Metadata } from 'next'
import { getMessages, getTranslations } from 'next-intl/server'
import { PageSchemas } from '@/components/seo/PageSchemas'
import { TopicPageLayout } from '@/components/educational/TopicPageLayout'
import { CagrFormulaCore } from '@/components/educational/CagrFormulaCore'
import { TopicFAQ } from '@/components/educational/TopicFAQ'
import { TopicCTA } from '@/components/educational/TopicCTA'
import { Locale } from '@/i18n/config'

const baseUrl = 'https://cagrcalculator.app'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.cagrFormula.metadata' })

  return {
    metadataBase: new URL(baseUrl),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(','),
    alternates: {
      canonical: `${baseUrl}/${locale}/cagr-formula`,
      languages: {
        'en': `${baseUrl}/en/cagr-formula`,
        'zh-CN': `${baseUrl}/zh-CN/cagr-formula`,
        'es': `${baseUrl}/es/cagr-formula`,
        'de': `${baseUrl}/de/cagr-formula`,
        'ja': `${baseUrl}/ja/cagr-formula`,
        'ar': `${baseUrl}/ar/cagr-formula`,
        'fr': `${baseUrl}/fr/cagr-formula`,
        'pt-BR': `${baseUrl}/pt-BR/cagr-formula`,
        'ko': `${baseUrl}/ko/cagr-formula`,
        'x-default': `${baseUrl}/en/cagr-formula`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/cagr-formula`,
      siteName: 'CAGR Calculator',
      locale: locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  }
}

export default async function CagrFormulaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.cagrFormula' })
  const messages = await getMessages({ locale })

  const faqNamespace = `pages.cagrFormula.faq`
  const faqData = ((messages.pages as Record<string, unknown>)?.cagrFormula as Record<string, unknown>)?.faq as {
    questions?: Array<{ question: string; answer: string }>
  }
  const questions = faqData?.questions || []

  return (
    <>
      <PageSchemas locale={locale as Locale} path="/cagr-formula" faqData={questions} />
      <TopicPageLayout title={t('title')} subtitle={t('subtitle')}>
        <CagrFormulaCore />

        <section className="bg-white border border-gray-200 rounded-lg p-5 md:p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <TopicFAQ namespace={faqNamespace} count={questions.length} />
        </section>

        <TopicCTA locale={locale} />
      </TopicPageLayout>
    </>
  )
}
