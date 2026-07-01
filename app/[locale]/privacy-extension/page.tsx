import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: 'Extension Privacy Policy - CAGR Calculator',
    'zh-CN': 'Chrome扩展隐私政策 - CAGR计算器',
    es: 'Política de Privacidad de la Extensión - Calculadora CAGR',
    de: 'Erweiterungs-Datenschutzrichtlinie - CAGR Rechner',
    ja: '拡張機能プライバシーポリシー - CAGR計算機',
    ar: 'سياسة خصوصية الإضافة - حاسبة CAGR',
    fr: 'Politique de Confidentialité de l\'Extension - Calculateur CAGR',
    'pt-BR': 'Política de Privacidade da Extensão - Calculadora CAGR',
    ko: '확장 프로그램 개인정보 보호정책 - CAGR 계산기',
  }

  const descriptions = {
    en: 'Privacy Policy for Smart CAGR Calculator Chrome Extension - Learn how the extension handles your data.',
    'zh-CN': 'Smart CAGR Calculator Chrome扩展隐私政策 - 了解扩展如何处理您的数据。',
    es: 'Política de Privacidad para la Extensión Smart CAGR Calculator - Aprenda cómo la extensión maneja sus datos.',
    de: 'Datenschutzrichtlinie für Smart CAGR Calculator Erweiterung - Erfahren Sie, wie die Erweiterung Ihre Daten verarbeitet.',
    ja: 'Smart CAGR Calculator 拡張機能のプライバシーポリシー - 拡張機能がデータを処理する方法について学びます。',
    ar: 'سياسة الخصوصية لإضافة Smart CAGR Calculator - تعرف على كيفية تعامل الإضافة مع بياناتك.',
    fr: 'Politique de Confidentialité pour l\'Extension Smart CAGR Calculator - Découvrez comment l\'extension traite vos données.',
    'pt-BR': 'Política de Privacidade para a Extensão Smart CAGR Calculator - Saiba como a extensão trata seus dados.',
    ko: 'Smart CAGR Calculator 확장 프로그램 개인정보 보호정책 - 확장 프로그램이 데이터를 처리하는 방법을 알아보세요.',
  }

  return {
    title: titles[locale as Locale] || titles.en,
    description: descriptions[locale as Locale] || descriptions.en,
    alternates: {
      canonical: `https://cagrcalculator.app/${locale}/privacy-extension`,
      languages: {
        'en': 'https://cagrcalculator.app/en/privacy-extension',
        'zh-CN': 'https://cagrcalculator.app/zh-CN/privacy-extension',
        'es': 'https://cagrcalculator.app/es/privacy-extension',
        'de': 'https://cagrcalculator.app/de/privacy-extension',
        'ja': 'https://cagrcalculator.app/ja/privacy-extension',
        'ar': 'https://cagrcalculator.app/ar/privacy-extension',
        'fr': 'https://cagrcalculator.app/fr/privacy-extension',
        'pt-BR': 'https://cagrcalculator.app/pt-BR/privacy-extension',
        'ko': 'https://cagrcalculator.app/ko/privacy-extension',
        'x-default': 'https://cagrcalculator.app/en/privacy-extension',
      },
    },
    robots: {
      index: false,
      follow: true,
    },
  }
}

export default async function ExtensionPrivacyPolicyPage({ params }: Props) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  switch (locale) {
    case 'zh-CN':
      return <ExtensionPrivacyPolicyZH />
    case 'es':
      return <ExtensionPrivacyPolicyES />
    case 'de':
      return <ExtensionPrivacyPolicyDE />
    case 'ja':
      return <ExtensionPrivacyPolicyJA />
    case 'ar':
      return <ExtensionPrivacyPolicyAR />
    case 'fr':
      return <ExtensionPrivacyPolicyFR />
    case 'pt-BR':
      return <ExtensionPrivacyPolicyPTBR />
    case 'ko':
      return <ExtensionPrivacyPolicyKO />
    default:
      return <ExtensionPrivacyPolicyEN />
  }
}

function ExtensionPrivacyPolicyEN() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6"
          >
            ← Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Chrome Extension Privacy Policy</h1>
          <p className="text-gray-600 mb-4">
            Last Updated: <strong>October 26, 2025</strong>
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-gray-800">
              <strong>Extension Name:</strong> Smart CAGR Calculator
              <br />
              <strong>Developer:</strong> CAGR Calculator Team
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Privacy Policy describes how the Smart CAGR Calculator Chrome Extension (&quot;the Extension&quot;) handles user information. We are committed to protecting your privacy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Extension is a browser extension that provides quick CAGR (Compound Annual Growth Rate) calculations directly in your browser, developed by the team behind{' '}
              <a href="https://cagrcalculator.app" className="text-primary hover:underline">
                cagrcalculator.app
              </a>.
            </p>
          </section>

          {/* Data Collection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Collection</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
              <p className="text-gray-800 font-semibold">
                The Extension does NOT collect any user data.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">Specifically:</p>
            <ul className="list-none space-y-2 text-gray-700 mb-4 ml-4">
              <li>❌ We do NOT collect personal information</li>
              <li>❌ We do NOT use cookies</li>
              <li>❌ We do NOT track your browsing activity</li>
              <li>❌ We do NOT collect financial information or calculation data</li>
              <li>❌ We do NOT transmit any data to external servers</li>
            </ul>
          </section>

          {/* Local Storage */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Storage</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Language Preference Only:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Extension stores only one piece of information locally on your device:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Your selected language preference (e.g., English, Chinese, Spanish, etc.)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This preference is stored using Chrome&apos;s <code className="bg-gray-100 px-2 py-1 rounded text-sm">storage.local</code> API and:
            </p>
            <ul className="list-none space-y-2 text-gray-700 mb-4 ml-4">
              <li>✅ Remains on your device only</li>
              <li>✅ Is never transmitted to any server</li>
              <li>✅ Can be cleared by uninstalling the Extension</li>
            </ul>
          </section>

          {/* Data Processing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Processing</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">All Calculations Are Local:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>All CAGR calculations are performed entirely on your device</li>
              <li>Input values (initial value, final value, time period, growth rate) are processed locally</li>
              <li>Calculation results are displayed only to you</li>
              <li>No calculation data is stored, collected, or transmitted</li>
            </ul>
          </section>

          {/* Permissions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Permissions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Extension requires the following Chrome permission:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Storage Permission:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Purpose:</strong> To save your language preference</li>
                <li><strong>Scope:</strong> Local storage only (chrome.storage.local)</li>
                <li><strong>Data:</strong> Only language selection (e.g., &quot;en&quot;, &quot;zh_CN&quot;, &quot;es&quot;)</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
              <p className="text-gray-800 font-semibold">None</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>The Extension does NOT use third-party analytics</li>
              <li>The Extension does NOT use third-party advertising</li>
              <li>The Extension does NOT integrate with any external services</li>
              <li>The Extension works completely offline</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>We do NOT share any data</strong> because we do not collect any data.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">Specifically:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>We do NOT sell user data</li>
              <li>We do NOT transfer data to third parties</li>
              <li>We do NOT use data for advertising purposes</li>
              <li>We do NOT use data for credit decisions</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              The Extension does not knowingly collect information from children under 13 years of age. Since we do not collect any user data, the Extension is safe for users of all ages.
            </p>
          </section>

          {/* Website vs. Extension */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Website vs. Extension</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4 rounded">
              <p className="text-gray-800 font-semibold mb-2">Important Note:</p>
              <p className="text-gray-700">
                This privacy policy applies ONLY to the Smart CAGR Calculator Chrome Extension.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website (
              <a href="https://cagrcalculator.app" className="text-primary hover:underline">
                cagrcalculator.app
              </a>
              ) has a separate privacy policy that describes website-specific practices, including website cookies and analytics. The website privacy policy does NOT apply to the Chrome Extension.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For the website privacy policy, please visit:{' '}
              <a href="https://cagrcalculator.app/en/privacy" className="text-primary hover:underline">
                https://cagrcalculator.app/en/privacy
              </a>
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">
                  toneychan2025@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{' '}
                <a href="https://cagrcalculator.app" className="text-primary hover:underline">
                  https://cagrcalculator.app
                </a>
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Summary</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-3">In Plain Language:</p>
              <p className="text-gray-700 mb-3">The Smart CAGR Calculator Extension:</p>
              <ul className="list-none space-y-2 text-gray-700 mb-4">
                <li>✅ Works completely offline</li>
                <li>✅ Stores only your language choice (on your device)</li>
                <li>✅ Does NOT collect, transmit, or share any data</li>
                <li>✅ Does NOT use cookies</li>
                <li>✅ Respects your privacy completely</li>
              </ul>
              <p className="text-gray-700">
                You can use the Extension with confidence knowing that your financial calculations and data remain private and on your device.
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Back to CAGR Calculator
          </Link>
        </div>
      </div>
    </div>
  )
}

function ExtensionPrivacyPolicyZH() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6"
          >
            ← 返回计算器
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Chrome扩展隐私政策</h1>
          <p className="text-gray-600 mb-4">
            最后更新：<strong>2025年10月26日</strong>
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-gray-800">
              <strong>扩展名称：</strong>Smart CAGR Calculator
              <br />
              <strong>开发者：</strong>CAGR Calculator 团队
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">简介</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本隐私政策描述了Smart CAGR Calculator Chrome扩展（&ldquo;本扩展&rdquo;）如何处理用户信息。我们致力于保护您的隐私。
            </p>
            <p className="text-gray-700 leading-relaxed">
              本扩展是一个浏览器扩展，可直接在您的浏览器中提供快速的CAGR（复合年增长率）计算，由{' '}
              <a href="https://cagrcalculator.app" className="text-primary hover:underline">
                cagrcalculator.app
              </a>{' '}
              团队开发。
            </p>
          </section>

          {/* Data Collection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">数据收集</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
              <p className="text-gray-800 font-semibold">
                本扩展不收集任何用户数据。
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">具体来说：</p>
            <ul className="list-none space-y-2 text-gray-700 mb-4 ml-4">
              <li>❌ 我们不收集个人信息</li>
              <li>❌ 我们不使用cookies</li>
              <li>❌ 我们不跟踪您的浏览活动</li>
              <li>❌ 我们不收集财务信息或计算数据</li>
              <li>❌ 我们不向外部服务器传输任何数据</li>
            </ul>
          </section>

          {/* Local Storage */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">本地存储</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">仅限语言偏好：</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              本扩展仅在您的设备上本地存储一项信息：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>您选择的语言偏好（例如：英语、中文、西班牙语等）</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              此偏好使用Chrome的<code className="bg-gray-100 px-2 py-1 rounded text-sm">storage.local</code> API存储，并且：
            </p>
            <ul className="list-none space-y-2 text-gray-700 mb-4 ml-4">
              <li>✅ 仅保留在您的设备上</li>
              <li>✅ 永远不会传输到任何服务器</li>
              <li>✅ 可通过卸载扩展来清除</li>
            </ul>
          </section>

          {/* Data Processing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">数据处理</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">所有计算都在本地进行：</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>所有CAGR计算完全在您的设备上进行</li>
              <li>输入值（初始值、最终值、时间周期、增长率）在本地处理</li>
              <li>计算结果仅显示给您</li>
              <li>不存储、收集或传输任何计算数据</li>
            </ul>
          </section>

          {/* Permissions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">权限</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本扩展需要以下Chrome权限：
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-gray-900 mb-2">存储权限：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>目的：</strong>保存您的语言偏好</li>
                <li><strong>范围：</strong>仅限本地存储（chrome.storage.local）</li>
                <li><strong>数据：</strong>仅语言选择（例如：&ldquo;en&rdquo;、&ldquo;zh_CN&rdquo;、&ldquo;es&rdquo;）</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">第三方服务</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
              <p className="text-gray-800 font-semibold">无</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>本扩展不使用第三方分析</li>
              <li>本扩展不使用第三方广告</li>
              <li>本扩展不与任何外部服务集成</li>
              <li>本扩展完全离线工作</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">数据共享</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>我们不共享任何数据</strong>，因为我们不收集任何数据。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">具体来说：</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>我们不出售用户数据</li>
              <li>我们不向第三方传输数据</li>
              <li>我们不将数据用于广告目的</li>
              <li>我们不将数据用于信用决策</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">儿童隐私</h2>
            <p className="text-gray-700 leading-relaxed">
              本扩展不会有意收集13岁以下儿童的信息。由于我们不收集任何用户数据，本扩展对所有年龄段的用户都是安全的。
            </p>
          </section>

          {/* Website vs. Extension */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">网站 vs. 扩展</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4 rounded">
              <p className="text-gray-800 font-semibold mb-2">重要提示：</p>
              <p className="text-gray-700">
                本隐私政策仅适用于Smart CAGR Calculator Chrome扩展。
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们的网站（
              <a href="https://cagrcalculator.app" className="text-primary hover:underline">
                cagrcalculator.app
              </a>
              ）有单独的隐私政策，描述了网站特定的做法，包括网站cookies和分析。网站隐私政策不适用于Chrome扩展。
            </p>
            <p className="text-gray-700 leading-relaxed">
              有关网站隐私政策，请访问：{' '}
              <a href="https://cagrcalculator.app/zh-CN/privacy" className="text-primary hover:underline">
                https://cagrcalculator.app/zh-CN/privacy
              </a>
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              如果您对本隐私政策有任何疑问，请联系我们：
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>电子邮件：</strong>{' '}
                <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">
                  toneychan2025@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>网站：</strong>{' '}
                <a href="https://cagrcalculator.app" className="text-primary hover:underline">
                  https://cagrcalculator.app
                </a>
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">隐私政策的变更</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们可能会不时更新本隐私政策。任何更改都将发布在此页面上，并更新&ldquo;最后更新&rdquo;日期。
            </p>
          </section>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">总结</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-3">简单来说：</p>
              <p className="text-gray-700 mb-3">Smart CAGR Calculator扩展：</p>
              <ul className="list-none space-y-2 text-gray-700 mb-4">
                <li>✅ 完全离线工作</li>
                <li>✅ 仅存储您的语言选择（在您的设备上）</li>
                <li>✅ 不收集、传输或共享任何数据</li>
                <li>✅ 不使用cookies</li>
                <li>✅ 完全尊重您的隐私</li>
              </ul>
              <p className="text-gray-700">
                您可以放心使用本扩展，因为您的财务计算和数据保持私密并留在您的设备上。
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            返回CAGR计算器
          </Link>
        </div>
      </div>
    </div>
  )
}

// Simplified versions for other languages
function ExtensionPrivacyPolicyES() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← Volver a la Calculadora
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad de la Extensión</h1>
          <p className="text-gray-600">Última actualización: <strong>26 de octubre de 2025</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
            <p className="text-gray-800 font-semibold">La Extensión NO recopila ningún dato de usuario.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Esta política de privacidad se aplica a la extensión Smart CAGR Calculator Chrome. La extensión funciona completamente sin conexión y solo almacena su preferencia de idioma localmente en su dispositivo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Para obtener más información, visite: <a href="https://cagrcalculator.app" className="text-primary hover:underline">cagrcalculator.app</a>
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            Volver a la Calculadora CAGR
          </Link>
        </div>
      </div>
    </div>
  )
}

function ExtensionPrivacyPolicyDE() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← Zurück zum Rechner
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Erweiterungs-Datenschutzrichtlinie</h1>
          <p className="text-gray-600">Letzte Aktualisierung: <strong>26. Oktober 2025</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
            <p className="text-gray-800 font-semibold">Die Erweiterung sammelt KEINE Benutzerdaten.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diese Datenschutzrichtlinie gilt für die Smart CAGR Calculator Chrome-Erweiterung. Die Erweiterung funktioniert vollständig offline und speichert nur Ihre Spracheinstellung lokal auf Ihrem Gerät.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Weitere Informationen finden Sie unter: <a href="https://cagrcalculator.app" className="text-primary hover:underline">cagrcalculator.app</a>
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            Zurück zum CAGR-Rechner
          </Link>
        </div>
      </div>
    </div>
  )
}

function ExtensionPrivacyPolicyJA() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← 計算機に戻る
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">拡張機能プライバシーポリシー</h1>
          <p className="text-gray-600">最終更新日：<strong>2025年10月26日</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
            <p className="text-gray-800 font-semibold">この拡張機能はユーザーデータを収集しません。</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            このプライバシーポリシーはSmart CAGR Calculator Chrome拡張機能に適用されます。この拡張機能は完全にオフラインで動作し、言語設定のみをデバイスにローカルに保存します。
          </p>
          <p className="text-gray-700 leading-relaxed">
            詳細については、次のサイトをご覧ください：<a href="https://cagrcalculator.app" className="text-primary hover:underline">cagrcalculator.app</a>
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            CAGR計算機に戻る
          </Link>
        </div>
      </div>
    </div>
  )
}

function ExtensionPrivacyPolicyAR() {
  return (
    <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            → العودة إلى الحاسبة
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">سياسة خصوصية الإضافة</h1>
          <p className="text-gray-600">آخر تحديث: <strong>26 أكتوبر 2025</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
            <p className="text-gray-800 font-semibold">الإضافة لا تجمع أي بيانات مستخدم.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            تنطبق سياسة الخصوصية هذه على إضافة Smart CAGR Calculator Chrome. تعمل الإضافة بالكامل دون اتصال بالإنترنت وتخزن فقط تفضيل اللغة محليًا على جهازك.
          </p>
          <p className="text-gray-700 leading-relaxed">
            لمزيد من المعلومات، قم بزيارة: <a href="https://cagrcalculator.app" className="text-primary hover:underline">cagrcalculator.app</a>
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            العودة إلى حاسبة CAGR
          </Link>
        </div>
      </div>
    </div>
  )
}

function ExtensionPrivacyPolicyFR() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← Retour au Calculateur
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de Confidentialité de l&apos;Extension</h1>
          <p className="text-gray-600">Dernière mise à jour: <strong>26 Octobre 2025</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
            <p className="text-gray-800 font-semibold">L&apos;extension ne collecte AUCUNE donnée utilisateur.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cette politique de confidentialité s&apos;applique à l&apos;extension Smart CAGR Calculator Chrome. L&apos;extension fonctionne entièrement hors ligne et stocke uniquement votre préférence linguistique localement sur votre appareil.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pour plus d&apos;informations, visitez: <a href="https://cagrcalculator.app" className="text-primary hover:underline">cagrcalculator.app</a>
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            Retour au Calculateur CAGR
          </Link>
        </div>
      </div>
    </div>
  )
}

function ExtensionPrivacyPolicyPTBR() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← Voltar para a Calculadora
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidade da Extensão</h1>
          <p className="text-gray-600">Última atualização: <strong>26 de Outubro de 2025</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
            <p className="text-gray-800 font-semibold">A extensão NÃO coleta nenhum dado do usuário.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Esta política de privacidade se aplica à extensão Smart CAGR Calculator Chrome. A extensão funciona completamente offline e armazena apenas sua preferência de idioma localmente em seu dispositivo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Para mais informações, visite: <a href="https://cagrcalculator.app" className="text-primary hover:underline">cagrcalculator.app</a>
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            Voltar para a Calculadora CAGR
          </Link>
        </div>
      </div>
    </div>
  )
}

function ExtensionPrivacyPolicyKO() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← 계산기로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">확장 프로그램 개인정보 보호정책</h1>
          <p className="text-gray-600">최종 업데이트: <strong>2025년 10월 26일</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
            <p className="text-gray-800 font-semibold">확장 프로그램은 사용자 데이터를 수집하지 않습니다.</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            이 개인정보 보호정책은 Smart CAGR Calculator Chrome 확장 프로그램에 적용됩니다. 확장 프로그램은 완전히 오프라인으로 작동하며 언어 기본 설정만 기기에 로컬로 저장합니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            자세한 내용은 다음을 방문하세요: <a href="https://cagrcalculator.app" className="text-primary hover:underline">cagrcalculator.app</a>
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            CAGR 계산기로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}
