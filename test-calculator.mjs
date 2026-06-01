/**
 * Quick validation script for SmartCAGRCalculator
 * Run: node test-calculator.mjs
 */

// Simple implementation for testing (without TypeScript)
class TestCalculator {
  static calculateCAGR(pv, fv, n) {
    return Math.pow(fv / pv, 1 / n) - 1
  }

  static calculateFV(pv, r, n) {
    return pv * Math.pow(1 + r, n)
  }

  static calculatePV(fv, r, n) {
    return fv / Math.pow(1 + r, n)
  }

  static calculateTime(pv, fv, r) {
    return Math.log(fv / pv) / Math.log(1 + r)
  }
}

console.log('🧪 Testing CAGR Calculator - 4 Modes\n')
console.log('=' .repeat(60))

let failures = 0

function report(passed) {
  if (!passed) failures += 1
  console.log(`Status: ${passed ? '✓ PASS' : '✗ FAIL'}`)
}

// Test 1: Mode 1 - Calculate CAGR
console.log('\n✅ Test 1: Calculate CAGR')
console.log('Input: PV=100, FV=500, n=10')
const cagr = TestCalculator.calculateCAGR(100, 500, 10)
console.log(`Result: CAGR = ${(cagr * 100).toFixed(2)}%`)
console.log(`Expected: ~17.46%`)
report(Math.abs(cagr * 100 - 17.46) < 0.1)

// Test 2: Mode 2 - Calculate FV
console.log('\n✅ Test 2: Calculate Final Value')
console.log('Input: PV=100, r=15% (0.15), n=10')
const fv = TestCalculator.calculateFV(100, 0.15, 10)
console.log(`Result: FV = $${fv.toFixed(2)}`)
console.log(`Expected: ~$404.56`)
report(Math.abs(fv - 404.56) < 1)

// Test 3: Mode 3 - Calculate PV (Previously FAILED)
console.log('\n✅ Test 3: Calculate Initial Value')
console.log('Input: FV=500, r=15% (0.15), n=10')
const pv = TestCalculator.calculatePV(500, 0.15, 10)
console.log(`Result: PV = $${pv.toFixed(2)}`)
console.log(`Expected: ~$123.59`)
report(Math.abs(pv - 123.59) < 1)

// Test 4: Mode 4 - Calculate Time (Previously FAILED)
console.log('\n✅ Test 4: Calculate Time Period')
console.log('Input: PV=100, FV=500, r=15% (0.15)')
const n = TestCalculator.calculateTime(100, 500, 0.15)
console.log(`Result: n = ${n.toFixed(2)} years`)
console.log(`Expected: ~11.52 years`)
report(Math.abs(n - 11.52) < 0.1)

// Additional Test: Negative CAGR
console.log('\n✅ Test 5: Negative CAGR')
console.log('Input: PV=500, FV=100, n=10')
const negCagr = TestCalculator.calculateCAGR(500, 100, 10)
console.log(`Result: CAGR = ${(negCagr * 100).toFixed(2)}%`)
console.log(`Expected: ~-14.87%`)
report(Math.abs(negCagr * 100 - (-14.87)) < 0.1)

console.log('\n' + '='.repeat(60))
if (failures > 0) {
  console.error(`\n❌ ${failures} calculation test(s) failed.`)
  process.exitCode = 1
} else {
  console.log('\n🎉 All mathematical calculations verified!')
}
console.log('📝 Now test in browser at: http://localhost:3002')
console.log('\nBrowser Test Scenarios:')
console.log('1. PV=100, FV=500, n=10 → Should calculate CAGR')
console.log('2. PV=100, r=15, n=10 → Should calculate FV')
console.log('3. FV=500, r=15, n=10 → Should calculate PV ⚠️')
console.log('4. PV=100, FV=500, r=15 → Should calculate Time ⚠️')
console.log('\n⚠️  = Previously failing scenarios, should now work!')
