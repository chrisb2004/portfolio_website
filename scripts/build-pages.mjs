import { cp, mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const docsDir = path.join(rootDir, 'docs')

await rm(docsDir, { recursive: true, force: true })
await mkdir(docsDir, { recursive: true })
await cp(distDir, docsDir, { recursive: true })
await writeFile(path.join(docsDir, '.nojekyll'), '')

console.log('docs/ generated from dist/ for GitHub Pages.')
