const fs = require('fs')
const path = require('path')

const messagesDir = path.resolve(__dirname, '../messages')

const locales = [
  {
    code: 'es',
    readMore: {
      readMoreFormula: 'Lea la guía completa de la fórmula CAGR',
      readMoreCagrVsIrr: 'Lea la guía completa de CAGR vs TIR',
      readMoreCagrInExcel: 'Lea la guía completa de CAGR en Excel',
      readMoreFaq: 'Ver todas las preguntas frecuentes',
    },
  },
  {
    code: 'pt-BR',
    readMore: {
      readMoreFormula: 'Leia o guia completo da fórmula CAGR',
      readMoreCagrVsIrr: 'Leia o guia completo de CAGR vs TIR',
      readMoreCagrInExcel: 'Leia o guia completo de CAGR no Excel',
      readMoreFaq: 'Ver todas as perguntas frequentes',
    },
  },
  {
    code: 'de',
    readMore: {
      readMoreFormula: 'Lesen Sie die vollständige Anleitung zur CAGR-Formel',
      readMoreCagrVsIrr: 'Lesen Sie die vollständige Anleitung zu CAGR vs IZF',
      readMoreCagrInExcel: 'Lesen Sie die vollständige Anleitung zu CAGR in Excel',
      readMoreFaq: 'Alle häufigen Fragen durchsuchen',
    },
  },
]

for (const { code, readMore } of locales) {
  const mainPath = path.join(messagesDir, `${code}.json`)
  const pagesPath = path.join(messagesDir, `${code}.pages.json`)

  const mainData = JSON.parse(fs.readFileSync(mainPath, 'utf-8'))
  const pagesData = JSON.parse(fs.readFileSync(pagesPath, 'utf-8'))

  mainData.pages = pagesData

  if (!mainData.page) {
    mainData.page = {}
  }
  if (!mainData.page.sections) {
    mainData.page.sections = {}
  }

  Object.assign(mainData.page.sections, readMore)

  fs.writeFileSync(mainPath, JSON.stringify(mainData, null, 2) + '\n')
  fs.unlinkSync(pagesPath)

  console.log(`Applied ${code} translation and removed ${code}.pages.json`)
}
