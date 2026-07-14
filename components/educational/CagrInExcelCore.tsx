'use client'

import { useTranslations } from 'next-intl'

interface CagrInExcelCoreProps {
  namespace?: string
}

export function CagrInExcelCore({ namespace = 'pages.cagrInExcel' }: CagrInExcelCoreProps) {
  const t = useTranslations(namespace)

  const methods = Array.from({ length: 3 }, (_, index) => ({
    name: t(`methods.${index}.name`),
    formula: t(`methods.${index}.formula`),
    example: t(`methods.${index}.example`),
  }))

  const errors = Array.from({ length: 4 }, (_, index) => ({
    error: t(`commonErrors.${index}.error`),
    cause: t(`commonErrors.${index}.cause`),
    fix: t(`commonErrors.${index}.fix`),
  }))

  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-700">{t('intro')}</p>

      {/* The three methods */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">{t('methodsTitle')}</h3>
        {methods.map((method, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">{method.name}</h4>
            <code className="block bg-gray-50 border border-gray-300 rounded px-3 py-2 text-sm font-mono text-primary mb-2">
              {method.formula}
            </code>
            <p className="text-sm text-gray-700">{method.example}</p>
          </div>
        ))}
      </div>

      {/* Worked example */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('workedExampleTitle')}</h3>
        <p className="text-gray-700 mb-3">{t('workedExampleIntro')}</p>
        <div className="bg-white rounded-lg overflow-hidden border border-blue-200">
          <table className="w-full">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-900">{t('workedExampleHeaders.label')}</th>
                <th className="text-left p-3 font-semibold text-gray-900">{t('workedExampleHeaders.value')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-blue-100">
                <td className="p-3 text-gray-700">{t('workedExampleRows.pv')}</td>
                <td className="p-3 font-mono text-gray-900">{t('workedExampleValues.pv')}</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="p-3 text-gray-700">{t('workedExampleRows.fv')}</td>
                <td className="p-3 font-mono text-gray-900">{t('workedExampleValues.fv')}</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="p-3 text-gray-700">{t('workedExampleRows.n')}</td>
                <td className="p-3 font-mono text-gray-900">{t('workedExampleValues.n')}</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-3 font-semibold text-gray-900">{t('workedExampleRows.cagr')}</td>
                <td className="p-3 font-mono font-semibold text-primary">{t('workedExampleValues.cagr')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Common errors */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('commonErrorsTitle')}</h3>
        <div className="space-y-4">
          {errors.map((item, index) => (
            <div key={index} className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="font-semibold text-red-900 mb-1">{item.error}</p>
              <p className="text-red-800 text-sm mb-1"><span className="font-medium">Cause:</span> {item.cause}</p>
              <p className="text-red-800 text-sm"><span className="font-medium">Fix:</span> {item.fix}</p>
            </div>
          ))}
        </div>
      </div>

      {/* XIRR note */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
        <h3 className="font-semibold text-orange-900 mb-2">{t('xirr.title')}</h3>
        <p className="text-orange-800">{t('xirr.text')}</p>
      </div>
    </div>
  )
}
