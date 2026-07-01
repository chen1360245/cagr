'use client'

import { useTranslations } from 'next-intl'

export function CAGRInExcel() {
  const t = useTranslations('page.educational.cagrInExcel')

  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-700">
        {t('intro')}
      </p>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">{t('methodsTitle')}</h4>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-2">{t(`methods.${index}.name`)}</p>
            <code className="block bg-white border border-gray-300 rounded px-3 py-2 text-sm font-mono text-primary mb-2">
              {t(`methods.${index}.formula`)}
            </code>
            <p className="text-sm text-gray-700">{t(`methods.${index}.example`)}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
        <h4 className="font-semibold text-gray-900 mb-2">{t('variablesTitle')}</h4>
        <ul className="space-y-1 text-gray-700">
          <li>{t('variables.fv')}</li>
          <li>{t('variables.pv')}</li>
          <li>{t('variables.n')}</li>
        </ul>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-2">{t('tipTitle')}</h4>
        <p className="text-gray-700">{t('tip')}</p>
      </div>
    </div>
  )
}
