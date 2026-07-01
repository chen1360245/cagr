'use client'

import { useTranslations } from 'next-intl'

export function CAGRForInvestments() {
  const t = useTranslations('page.educational.cagrForInvestments')

  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-700">
        {t('intro')}
      </p>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">{t('scenariosTitle')}</h4>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h5 className="font-semibold text-primary mb-2">{t(`scenarios.${index}.title`)}</h5>
            <p className="text-gray-700 mb-2">{t(`scenarios.${index}.description`)}</p>
            <p className="text-sm text-gray-600 bg-gray-50 rounded px-3 py-2">{t(`scenarios.${index}.example`)}</p>
          </div>
        ))}
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
        <h4 className="font-semibold text-orange-900 mb-2">{t('cautionTitle')}</h4>
        <p className="text-orange-800">{t('caution')}</p>
      </div>
    </div>
  )
}
