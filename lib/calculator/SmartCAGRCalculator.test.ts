import { describe, expect, it } from 'vitest'
import { SmartCAGRCalculator } from './SmartCAGRCalculator'

describe('SmartCAGRCalculator', () => {
  it('calculates all four modes from standard inputs', () => {
    expect(SmartCAGRCalculator.calculateCAGR(100, 500, 10)).toBeCloseTo(0.174618943, 8)
    expect(SmartCAGRCalculator.calculateFV(100, 0.15, 10)).toBeCloseTo(404.555774, 6)
    expect(SmartCAGRCalculator.calculatePV(500, 0.15, 10)).toBeCloseTo(123.592353, 6)
    expect(SmartCAGRCalculator.calculateTime(100, 500, 0.15)).toBeCloseTo(11.515566, 6)
  })

  it('supports negative CAGR when the value decreases', () => {
    const r = SmartCAGRCalculator.calculateCAGR(500, 100, 10)
    expect(r).toBeCloseTo(-0.148660077, 8)
    expect(SmartCAGRCalculator.calculateFV(100, -0.1, 2)).toBeCloseTo(81, 8)
    expect(SmartCAGRCalculator.calculateTime(100, 81, -0.1)).toBeCloseTo(2, 8)
  })

  it('rejects rates and time scenarios that cannot produce valid results', () => {
    expect(() => SmartCAGRCalculator.calculateFV(100, -1, 10)).toThrow(/greater than -100%/)
    expect(() => SmartCAGRCalculator.calculatePV(100, Number.NaN, 10)).toThrow(/finite number/)
    expect(() => SmartCAGRCalculator.calculateTime(100, 200, -0.1)).toThrow(/positive time period/)
    expect(() => SmartCAGRCalculator.calculateTime(100, 50, 0.1)).toThrow(/positive time period/)
    expect(() => SmartCAGRCalculator.calculateTime(100, 100, 0.1)).toThrow(/positive time period/)
  })

  it('uses decimal rates consistently during mode detection', () => {
    expect(SmartCAGRCalculator.detectMode({ pv: 100, n: 10, r: 0.15 })).toMatchObject({
      mode: 'FV',
      missingField: 'fv',
      isValid: true,
    })
    expect(SmartCAGRCalculator.detectMode({ pv: 100, n: 10, r: -1 })).toMatchObject({
      mode: null,
      isValid: false,
    })
  })

  it('includes a final partial period in yearly breakdowns', () => {
    const breakdown = SmartCAGRCalculator.generateYearlyBreakdown(100, 0.1, 2.5)
    expect(breakdown.map(({ year }) => year)).toEqual([1, 2, 2.5])
    expect(breakdown.at(-1)?.endValue).toBeCloseTo(
      SmartCAGRCalculator.calculateFV(100, 0.1, 2.5),
      8
    )
  })

  it('samples very long breakdowns while preserving the exact final endpoint', () => {
    const breakdown = SmartCAGRCalculator.generateYearlyBreakdown(100, 0.000001, 10_000)
    expect(breakdown).toHaveLength(1000)
    expect(breakdown.at(-1)?.year).toBe(10_000)
    expect(breakdown.at(-1)?.endValue).toBeCloseTo(
      SmartCAGRCalculator.calculateFV(100, 0.000001, 10_000),
      8
    )
  })

  it('does not report doubling time for zero or negative growth', () => {
    expect(SmartCAGRCalculator.calculateMetrics(100, 81, -0.1, 2).doublingTime).toBe(Infinity)
    expect(SmartCAGRCalculator.calculateMetrics(100, 100, 0, 2).doublingTime).toBe(Infinity)
  })
})
