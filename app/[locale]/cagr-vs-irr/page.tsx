import { Metadata } from 'next'
import { getMessages, getTranslations } from 'next-intl/server'
import { PageSchemas } from '@/components/seo/PageSchemas'
import { TopicPageLayout } from '@/components/educational/TopicPageLayout'
import { CagrVsIrrCore } from '@/components/educational/CagrVsIrrCore'
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
  const t = await getTranslations({ locale, namespace: 'pages.cagrVsIrr.metadata' })

  return {
    metadataBase: new URL(baseUrl),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(','),
    alternates: {
      canonical: `${baseUrl}/${locale}/cagr-vs-irr`,
      languages: {
        'en': `${baseUrl}/en/cagr-vs-irr`,
        'zh-CN': `${baseUrl}/zh-CN/cagr-vs-irr`,
        'es': `${baseUrl}/es/cagr-vs-irr`,
        'de': `${baseUrl}/de/cagr-vs-irr`,
        'ja': `${baseUrl}/ja/cagr-vs-irr`,
        'ar': `${baseUrl}/ar/cagr-vs-irr`,
        'fr': `${baseUrl}/fr/cagr-vs-irr`,
        'pt-BR': `${baseUrl}/pt-BR/cagr-vs-irr`,
        'ko': `${baseUrl}/ko/cagr-vs-irr`,
        'x-default': `${baseUrl}/en/cagr-vs-irr`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/cagr-vs-irr`,
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

export default async function CagrVsIrrPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.cagrVsIrr' })
  const messages = await getMessages({ locale })

  const faqNamespace = `pages.cagrVsIrr.faq`
  const faqData = ((messages.pages as Record<string, unknown>)?.cagrVsIrr as Record<string, unknown>)?.faq as {
    questions?: Array<{ question: string; answer: string }>
  }
  const questions = faqData?.questions || []

  return (
    <>
      <PageSchemas locale={locale as Locale} path="/cagr-vs-irr" faqData={questions} />
      <TopicPageLayout title={t('title')} subtitle={t('subtitle')}>
        <CagrVsIrrCore />

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
