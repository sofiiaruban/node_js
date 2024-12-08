import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function getStaticFilePath(relativePath, basePath) {
  const staticDir = path.join(__dirname, basePath)
  return path.join(staticDir, relativePath)
}

export function getData(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found at ${filePath}`)
    return []
  }

  const data = fs.readFileSync(filePath, 'utf8')
  try {
    return JSON.parse(data)
  } catch (error) {
    console.error(`Error parsing JSON from ${filePath}:`, error)
    return []
  }
}

export function addProduct(productsList, filePath, product) {
  const { title, price } = product

  productsList.push({ title, price })

  try {
    fs.writeFileSync(filePath, JSON.stringify(productsList, null, 2))
    console.log('Product added successfully:', { title, price })
  } catch (error) {
    console.error('Failed to write to file:', error)
    throw new Error('Failed to update the products file')
  }
}
