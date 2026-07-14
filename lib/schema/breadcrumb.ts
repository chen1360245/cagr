import { Locale } from '@/i18n/config'
import { BreadcrumbList, ListItem } from './types'

/**
 * BreadcrumbList Schema for CAGR Calculator
 *
 * Shows page hierarchy in search results.
 * Benefits:
 * - Displays breadcrumb navigation in search results
 * - Helps users understand site structure
 * - Improves navigation UX
 * - Shows professionalism
 *
 * @param locale - Current language
 * @param path - Current page path (e.g., '/', '/privacy', '/terms')
 * @returns BreadcrumbList JSON-LD schema
 */
export function getBreadcrumbListSchema(locale: Locale, path: string = '/'): BreadcrumbList {
  const baseUrl = 'https://cagrcalculator.app'

  // Define page names in different languages
  const pageNames: Record<string, Record<Locale, string>> = {
    home: {
      en: 'Home',
      'zh-CN': '首页',
      es: 'Inicio',
      de: 'Startseite',
      ja: 'ホーム',
      ar: 'الصفحة الرئيسية',
      fr: 'Accueil',
      'pt-BR': 'Início',
      ko: '홈',
    },
    privacy: {
      en: 'Privacy Policy',
      'zh-CN': '隐私政策',
      es: 'Política de Privacidad',
      de: 'Datenschutzrichtlinie',
      ja: 'プライバシーポリシー',
      ar: 'سياسة الخصوصية',
      fr: 'Politique de Confidentialité',
      'pt-BR': 'Política de Privacidade',
      ko: '개인정보 보호정책',
    },
    terms: {
      en: 'Terms of Service',
      'zh-CN': '服务条款',
      es: 'Términos de Servicio',
      de: 'Nutzungsbedingungen',
      ja: '利用規約',
      ar: 'شروط الخدمة',
      fr: "Conditions d'Utilisation",
      'pt-BR': 'Termos de Serviço',
      ko: '서비스 약관',
    },
    'cagr-formula': {
      en: 'CAGR Formula',
      'zh-CN': 'CAGR 公式',
      es: 'Fórmula CAGR',
      de: 'CAGR-Formel',
      ja: 'CAGRの公式',
      ar: 'صيغة معدل النمو السنوي المركب',
      fr: 'Formule CAGR',
      'pt-BR': 'Fórmula CAGR',
      ko: 'CAGR 공식',
    },
    'cagr-vs-irr': {
      en: 'CAGR vs IRR',
      'zh-CN': 'CAGR 与 IRR',
      es: 'CAGR vs IRR',
      de: 'CAGR vs IRR',
      ja: 'CAGRとIRR',
      ar: 'معدل النمو السنوي المركب مقابل العائد الداخلي',
      fr: 'CAGR vs IRR',
      'pt-BR': 'CAGR vs IRR',
      ko: 'CAGR 대 IRR',
    },
    'cagr-in-excel': {
      en: 'CAGR in Excel',
      'zh-CN': 'Excel 中的 CAGR',
      es: 'CAGR en Excel',
      de: 'CAGR in Excel',
      ja: 'ExcelでのCAGR',
      ar: 'CAGR في Excel',
      fr: 'CAGR dans Excel',
      'pt-BR': 'CAGR no Excel',
      ko: 'Excel의 CAGR',
    },
  }

  // Build breadcrumb items based on current path
  const items: ListItem[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'ListItem',
      position: 1,
      name: pageNames.home[locale],
      item: `${baseUrl}/${locale}`,
    },
  ]

  // Add additional breadcrumb items based on path
  if (path.includes('/privacy')) {
    items.push({
      '@context': 'https://schema.org',
      '@type': 'ListItem',
      position: 2,
      name: pageNames.privacy[locale],
      item: `${baseUrl}/${locale}/privacy`,
    })
  } else if (path.includes('/terms')) {
    items.push({
      '@context': 'https://schema.org',
      '@type': 'ListItem',
      position: 2,
      name: pageNames.terms[locale],
      item: `${baseUrl}/${locale}/terms`,
    })
  } else if (path.includes('/cagr-formula')) {
    items.push({
      '@context': 'https://schema.org',
      '@type': 'ListItem',
      position: 2,
      name: pageNames['cagr-formula'][locale],
      item: `${baseUrl}/${locale}/cagr-formula`,
    })
  } else if (path.includes('/cagr-vs-irr')) {
    items.push({
      '@context': 'https://schema.org',
      '@type': 'ListItem',
      position: 2,
      name: pageNames['cagr-vs-irr'][locale],
      item: `${baseUrl}/${locale}/cagr-vs-irr`,
    })
  } else if (path.includes('/cagr-in-excel')) {
    items.push({
      '@context': 'https://schema.org',
      '@type': 'ListItem',
      position: 2,
      name: pageNames['cagr-in-excel'][locale],
      item: `${baseUrl}/${locale}/cagr-in-excel`,
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}
