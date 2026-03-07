import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { glob } from 'tinyglobby'

import { distDir, sourcesDir } from '../../utils/dirs'
import { createMarkdown } from '../../utils/md'

const TASK_NAME = 'es-toolkit'
const DESCRIPTION = `Use when working with JavaScript/TypeScript utility functions (array, object, string, math, function, predicate, promise), especially when replacing lodash or optimizing bundle size and type-safety.`

// Source directory for es-toolkit docs
const esToolkitSourceDir = resolve(sourcesDir(), 'es-toolkit')

/**
 * Generate the content for a category file (reference/[type].md)
 */
function generateCategoryFile(category: string, docs: Array<{ name: string, description: string }>) {
  const md = createMarkdown()

  md.heading(`${category.charAt(0).toUpperCase() + category.slice(1)} Utilities`, 1)
  md.text(`This page lists all ${category} utilities available in es-toolkit.`)

  md.table({
    columns: ['Name', 'Description', 'Link'],
    rows: docs.map((doc) => {
      // Extract display name from full path (e.g., 'function/after' -> 'after')
      const displayName = doc.name.includes('/') ? doc.name.split('/').pop()! : doc.name
      return [
        displayName,
        doc.description,
        `[${displayName}](reference/${category}/${doc.name}.md)`,
      ]
    }),
  })

  return md.toString()
}

/**
 * Generate the content for SKILL.md
 */
function content(docs: Array<{ category: string, name: string, description: string }>) {
  const md = createMarkdown()
  md.metadata({
    name: TASK_NAME,
    description: DESCRIPTION,
    license: 'MIT',
  })

  md.heading('es-toolkit Skill', 1)
  md.text('This skill helps you choose and apply the right `es-toolkit` utilities in JavaScript or TypeScript codebases.')

  // When to use section
  md.heading('When to use this skill', 2)
  md.text('Use this skill when the user:')
  md.list([
    'Asks for utility helpers like chunking arrays, debouncing, deep clone, or case conversion',
    'Wants to replace lodash/underscore helpers with modern tree-shakable imports',
    'Needs stronger TypeScript inference around data-transform utilities',
    'Requests small focused helpers for array/object/string/math/promise workflows',
    'Needs lodash-compatible behavior via `es-toolkit/compat` during migration',
  ])

  // Instructions section
  md.heading('Instructions', 2)
  md.text('When the user asks for helper utilities or refactors:')
  md.list([
    '**Identify the intent first**: map the request to a category (`array`, `function`, `math`, `object`, `predicate`, `promise`, `string`).',
    '**Prefer direct imports**: use `es-toolkit` or scoped paths like `es-toolkit/array` to keep bundle size small.',
    '**Choose the smallest correct utility**: avoid composing many helpers when one function solves the task clearly.',
    '**For lodash migration**: prefer `es-toolkit/compat` if behavior parity is required before deeper refactor.',
    '**Keep examples executable**: provide concise code snippets with input and expected output/comments.',
    '**Preserve types**: in TypeScript, keep generic inference intact and avoid unnecessary type assertions.',
  ])

  md.heading('Install', 2)
  md.codeBlock('pnpm add es-toolkit', 'bash')

  md.heading('Examples', 2)

  md.codeBlock(`// import from '@es-toolkit/es-toolkit' in jsr.
import { chunk, debounce } from 'es-toolkit';

const debouncedLog = debounce(message => {
  console.log(message);
}, 300);

// This call will be debounced
debouncedLog('Hello, world!');

const array = [1, 2, 3, 4, 5, 6];
const chunkedArray = chunk(array, 2);

console.log(chunkedArray);
// Output: [[1, 2], [3, 4], [5, 6]]`, 'typescript')

  // Documentation reference section
  md.heading('Documentation Reference', 2)
  md.text('Select a category below to view all available utilities in that category. Each category page contains a complete list of functions with descriptions and links to detailed documentation.')

  // Group docs by category
  const groupedDocs = docs.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = []
    }
    acc[doc.category].push(doc)
    return acc
  }, {} as Record<string, typeof docs>)

  // Generate category list
  md.heading('Categories', 3)
  md.list(
    Object.keys(groupedDocs).sort().map((category) => {
      const count = groupedDocs[category].length
      return `[${category.charAt(0).toUpperCase() + category.slice(1)}](reference/${category}.md) - ${count} utilities`
    }),
  )

  return md.toString()
}

/**
 * Extract description from markdown content
 * Converts markdown links to plain text (e.g., [text](url) -> text)
 */
function extractDescription(content: string): string {
  // Try to extract the first paragraph after the heading
  const lines = content.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line && !line.startsWith('#') && !line.startsWith('```') && !line.startsWith(':::')) {
      // Convert markdown links to plain text: [text](url) -> text
      const plainText = line.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      return plainText
    }
  }
  return 'No description available'
}

export default async function () {
  const outputDir = distDir(TASK_NAME)
  const docsSourceDir = resolve(esToolkitSourceDir, 'docs', 'reference')

  // Ensure output directory exists
  await mkdir(outputDir, { recursive: true })

  // Find all markdown files in reference directory
  const files = await glob('**/*.md', { cwd: docsSourceDir, absolute: false })

  const docs: Array<{ category: string, name: string, description: string }> = []

  // Copy all markdown files and collect metadata
  for (const file of files) {
    const source = resolve(docsSourceDir, file)
    const destination = resolve(outputDir, 'reference', file)

    // Create destination directory if needed
    await mkdir(resolve(destination, '..'), { recursive: true })

    // Copy file
    await cp(source, destination)

    // Extract category and name from file path
    const parts = file.split('/')
    if (parts.length >= 2) {
      let category: string
      let name: string

      // Handle nested paths for compat and other categories
      if (parts[0] === 'compat' && parts.length >= 3) {
        // For compat/category/name.md, use 'compat' as category and 'category/name' as name
        category = 'compat'
        name = `${parts[1]}/${parts[parts.length - 1].replace('.md', '')}`
      }
      else {
        // For category/name.md, use first part as category and last part as name
        category = parts[0]
        name = parts[parts.length - 1].replace('.md', '')
      }

      // Read file to extract description
      const fileContent = await readFile(source, 'utf-8')
      const description = extractDescription(fileContent)

      docs.push({ category, name, description })
    }
  }

  // Group docs by category
  const groupedDocs = docs.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = []
    }
    acc[doc.category].push(doc)
    return acc
  }, {} as Record<string, typeof docs>)

  // Generate category files (reference/[type].md)
  for (const [category, categoryDocs] of Object.entries(groupedDocs).sort()) {
    const categoryFilePath = resolve(outputDir, 'reference', `${category}.md`)
    const categoryContent = generateCategoryFile(category, categoryDocs)
    await writeFile(categoryFilePath, categoryContent)
  }

  // Generate SKILL.md with category list
  await writeFile(resolve(outputDir, 'SKILL.md'), content(docs))

  console.log(`✔ es-toolkit documentation generated successfully`)
  console.log(`  - Copied ${files.length} documentation files`)
  console.log(`  - Generated ${Object.keys(groupedDocs).length} category files`)
  console.log(`  - Generated SKILL.md with ${docs.length} entries`)
}
