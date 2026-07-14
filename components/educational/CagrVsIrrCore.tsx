'use client'

import { useTranslations } from 'next-intl'

interface CagrVsIrrCoreProps {
  namespace?: string
}

export function CagrVsIrrCore({ namespace = 'pages.cagrVsIrr' }: CagrVsIrrCoreProps) {
  const t = useTranslations(namespace)

  const metrics = Array.from({ length: 5 }, (_, index) => ({
    name: t(`comparisonTable.${index}.name`),
    description: t(`comparisonTable.${index}.description`),
    bestFor: t(`comparisonTable.${index}.bestFor`),
  }))

  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-700">{t('intro')}</p>

      {/* Quick comparison table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-4 border-b border-gray-200 font-semibold text-gray-900">{t('comparisonHeaders.metric')}</th>
              <th className="text-left p-4 border-b border-gray-200 font-semibold text-gray-900">{t('comparisonHeaders.description')}</th>
              <th className="text-left p-4 border-b border-gray-200 font-semibold text-gray-900">{t('comparisonHeaders.bestFor')}</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric, index) => (
              <tr key={index} className="border-b border-gray-100 last:border-b-0">
                <td className="p-4 font-semibold text-gray-900">{metric.name}</td>
                <td className="p-4 text-gray-700">{metric.description}</td>
                <td className="p-4 text-gray-700">{metric.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* What is CAGR */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('whatIsCagr.title')}</h3>
        <p className="text-gray-700">{t('whatIsCagr.text')}</p>
      </div>

      {/* What is IRR */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('whatIsIrr.title')}</h3>
        <p className="text-gray-700 mb-3">{t('whatIsIrr.text')}</p>
        <p className="text-gray-700">{t('whatIsIrr.useCase')}</p>
      </div>

      {/* Side-by-side example */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('exampleTitle')}</h3>
        <p className="text-gray-700 mb-4">{t('exampleIntro')}</p>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-1">{t('example.cagr.title')}</h4>
            <p className="text-gray-700">{t('example.cagr.calculation')}</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-1">{t('example.irr.title')}</h4>
            <p className="text-gray-700">{t('example.irr.calculation')}</p>
          </div>
          <p className="text-gray-700 font-medium">{t('example.conclusion')}</p>
        </div>
      </div>

      {/* When to use */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-green-900 mb-3">{t('useCagr.title')}</h3>
          <ul className="space-y-2 text-green-800">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span>{t(`useCagr.items.${index}`)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">{t('useIrr.title')}</h3>
          <ul className="space-y-2 text-purple-800">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span>{t(`useIrr.items.${index}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
