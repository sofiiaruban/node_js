import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function getStaticFilePath(relativePath) {
  const staticDir = path.join(__dirname, 'static')
  return path.join(staticDir, relativePath)
}
