/**
 * CalculatorClient - Interactive CAGR calculator section
 *
 * This is a Client Component because it manages user input state and
 * performs calculations in the browser. It is rendered inside the server-side
 * homepage so that the surrounding educational content is visible to search
 * engines while the interactive tool remains dynamic.
 */
'use client'

import { useTranslations } from 'next-intl'
import { useSmartCalculator } from '@/hooks/useSmartCalculator'
import { SmartInput } from '@/components/calculator/SmartInput'
import { ModeIndicator } from '@/components/calculator/ModeIndicator'
import { ResultPanelEnhanced } from '@/components/calculator/ResultPanelEnhanced'
import { Button } from '@/components/ui/button'
import { DollarSign, Target, Clock, TrendingUp, RotateCcw } from 'lucide-react'

export function CalculatorClient() {
  const t = useTranslations('page')
  const {
    inputs,
    result,
    isCalculating,
    error,
    modeDetection,
    canCalculate,
    updateInput,
    calculate,
    reset,
  } = useSmartCalculator()

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100">
          {/* Input Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <SmartInput
              label={t('calculator.initialValue')}
              type="currency"
              value={inputs.pv}
              onChange={(value) => updateInput('pv', value)}
              placeholder={t('calculator.placeholders.initialValue')}
              icon={<DollarSign className="w-4 h-4 text-primary" />}
            />

            <SmartInput
              label={t('calculator.finalValue')}
              type="currency"
              value={inputs.fv}
              onChange={(value) => updateInput('fv', value)}
              placeholder={t('calculator.placeholders.finalValue')}
              icon={<Target className="w-4 h-4 text-accent-blue" />}
            />

            <SmartInput
              label={t('calculator.timePeriod')}
              type="number"
              value={inputs.n}
              onChange={(value) => updateInput('n', value)}
              placeholder={t('calculator.placeholders.timePeriod')}
              icon={<Clock className="w-4 h-4 text-accent-orange" />}
            />

            <SmartInput
              label={t('calculator.cagrRate')}
              type="percentage"
              value={inputs.r}
              onChange={(value) => updateInput('r', value)}
              placeholder={t('calculator.placeholders.cagrRate')}
              icon={<TrendingUp className="w-4 h-4 text-accent-purple" />}
            />
          </div>

          {/* Mode Indicator */}
          <ModeIndicator
            mode={modeDetection.mode}
            filledCount={modeDetection.filledCount}
            className="mb-6"
          />

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-error/10 border border-error rounded-lg text-error text-sm">
              {error}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="mobile"
              onClick={calculate}
              disabled={!canCalculate || isCalculating}
              className="flex-1"
            >
              {isCalculating ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  {t('calculator.calculating')}
                </>
              ) : (
                <>{t('calculator.calculateNow')}</>
              )}
            </Button>

            <Button
              size="mobile"
              variant="secondary"
              onClick={reset}
              className="sm:flex-none sm:w-auto"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {t('calculator.clearAll')}
            </Button>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-gray-500">
            {t('calculator.disclaimer')}
          </p>
        </div>

        {/* Result Panel */}
        {result && (
          <div className="mt-8 animate-fadeInUp">
            <ResultPanelEnhanced result={result} />
          </div>
        )}
      </div>
    </section>
  )
}
