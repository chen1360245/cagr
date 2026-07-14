const fs = require('fs')
const path = require('path')

const messagesDir = path.resolve(__dirname, '../messages')
const enPath = path.join(messagesDir, 'en.json')
const enData = JSON.parse(fs.readFileSync(enPath, 'utf-8'))
const pagesNamespace = enData.pages

const readMoreKeys = {
  readMoreFormula: enData.page?.sections?.readMoreFormula,
  readMoreCagrVsIrr: enData.page?.sections?.readMoreCagrVsIrr,
  readMoreCagrInExcel: enData.page?.sections?.readMoreCagrInExcel,
  readMoreFaq: enData.page?.sections?.readMoreFaq,
}

if (!pagesNamespace) {
  console.error('No pages namespace found in en.json')
  process.exit(1)
}

const files = fs.readdirSync(messagesDir).filter((file) => file.endsWith('.json'))

for (const file of files) {
  const filePath = path.join(messagesDir, file)
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  let modified = false

  if (!data.pages) {
    data.pages = pagesNamespace
    modified = true
    console.log(`Added pages namespace to ${file}`)
  }

  if (data.page?.sections) {
    for (const [key, value] of Object.entries(readMoreKeys)) {
      if (value && !(key in data.page.sections)) {
        data.page.sections[key] = value
        modified = true
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n')
    console.log(`Updated ${file}`)
  } else {
    console.log(`No changes needed for ${file}`)
  }
}
