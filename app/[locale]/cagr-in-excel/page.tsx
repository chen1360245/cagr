import { Metadata } from 'next'
import { getMessages, getTranslations } from 'next-intl/server'
import { PageSchemas } from '@/components/seo/PageSchemas'
import { TopicPageLayout } from '@/components/educational/TopicPageLayout'
import { CagrInExcelCore } from '@/components/educational/CagrInExcelCore'
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
  const t = await getTranslations({ locale, namespace: 'pages.cagrInExcel.metadata' })

  return {
    metadataBase: new URL(baseUrl),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(','),
    alternates: {
      canonical: `${baseUrl}/${locale}/cagr-in-excel`,
      languages: {
        'en': `${baseUrl}/en/cagr-in-excel`,
        'zh-CN': `${baseUrl}/zh-CN/cagr-in-excel`,
        'es': `${baseUrl}/es/cagr-in-excel`,
        'de': `${baseUrl}/de/cagr-in-excel`,
        'ja': `${baseUrl}/ja/cagr-in-excel`,
        'ar': `${baseUrl}/ar/cagr-in-excel`,
        'fr': `${baseUrl}/fr/cagr-in-excel`,
        'pt-BR': `${baseUrl}/pt-BR/cagr-in-excel`,
        'ko': `${baseUrl}/ko/cagr-in-excel`,
        'x-default': `${baseUrl}/en/cagr-in-excel`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/cagr-in-excel`,
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

export default async function CagrInExcelPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.cagrInExcel' })
  const messages = await getMessages({ locale })

  const faqNamespace = `pages.cagrInExcel.faq`
  const faqData = ((messages.pages as Record<string, unknown>)?.cagrInExcel as Record<string, unknown>)?.faq as {
    questions?: Array<{ question: string; answer: string }>
  }
  const questions = faqData?.questions || []

  return (
    <>
      <PageSchemas locale={locale as Locale} path="/cagr-in-excel" faqData={questions} />
      <TopicPageLayout title={t('title')} subtitle={t('subtitle')}>
        <CagrInExcelCore />

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
