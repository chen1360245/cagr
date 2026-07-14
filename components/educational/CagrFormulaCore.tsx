'use client'

import { useTranslations } from 'next-intl'

interface CagrFormulaCoreProps {
  namespace?: string
}

export function CagrFormulaCore({ namespace = 'pages.cagrFormula' }: CagrFormulaCoreProps) {
  const t = useTranslations(namespace)

  return (
    <div className="space-y-8">
      <p className="text-lg text-gray-700">
        {t('intro')}
      </p>

      {/* The formula */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <code className="block text-xl md:text-2xl font-mono text-gray-900 mb-3">
          {t('formula')}
        </code>
        <p className="text-gray-600">{t('formulaCaption')}</p>
      </div>

      {/* Variables */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
        <h3 className="font-semibold text-gray-900 mb-3">{t('variablesTitle')}</h3>
        <ul className="space-y-2 text-gray-700">
          <li><strong>{t('variables.fv.term')}</strong> — {t('variables.fv.definition')}</li>
          <li><strong>{t('variables.pv.term')}</strong> — {t('variables.pv.definition')}</li>
          <li><strong>{t('variables.n.term')}</strong> — {t('variables.n.definition')}</li>
        </ul>
      </div>

      {/* Step-by-step */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('stepsTitle')}</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index}>{t(`steps.${index}`)}</li>
          ))}
        </ol>
      </div>

      {/* Example */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('exampleTitle')}</h3>
        <p className="text-gray-700 mb-4">{t('example.given')}</p>
        <div className="space-y-2 font-mono text-sm text-gray-800 bg-gray-50 rounded p-4">
          <p>{t('example.step1')}</p>
          <p>{t('example.step2')}</p>
          <p>{t('example.step3')}</p>
          <p className="font-semibold text-primary">{t('example.result')}</p>
        </div>
      </div>

      {/* Reverse formulas */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('reverseTitle')}</h3>
        <p className="text-gray-700 mb-4">{t('reverseIntro')}</p>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">{t(`reverseFormulas.${index}.name`)}: {t(`reverseFormulas.${index}.when`)} </p>
              <code className="block font-mono text-primary">{t(`reverseFormulas.${index}.formula`)} </code>
            </div>
          ))}
        </div>
      </div>

      {/* Calculator modes */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('calculatorModesTitle')}</h3>
        <p className="text-gray-700 mb-4">{t('calculatorModesIntro')}</p>
        <ul className="space-y-2 text-gray-700">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>{t(`calculatorModes.${index}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
