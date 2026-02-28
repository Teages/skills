import { execSync } from 'node:child_process'
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { glob } from 'tinyglobby'
import { distDir, sourcesDir } from '../../utils/dirs'
import { createMarkdown } from '../../utils/md'

const TASK_NAME = 'pixijs'
const DESCRIPTION = `Use when asked about PixiJS, a popular 2D rendering library for the web. This skill provides information about PixiJS, its features, and how to use it effectively in web development projects.`

// PixiJS source directory
const pixiSourceDir = resolve(sourcesDir(), 'pixijs')

/**
 * Generate the usage guide section for Copilot agents
 */
function generateUsageGuide(): string {
  return `# PixiJS Usage Guide for Copilot

When working with PixiJS tasks, follow these guidelines:

## How to Use This Skill

1. **Understand the task context** - Determine what type of PixiJS work is needed
2. **Locate relevant documentation** - Use the sections below to find appropriate references
3. **Apply the documentation** - Read the linked files for detailed information
4. **Implement solutions** - Use the patterns and examples from the documentation

## Common Task Scenarios

### Creating a PixiJS Application
- Start with: \`app.md\` for application setup
- Reference: \`app.Application.html.md\` for API details
- Plugins: \`app-1.md\` (Ticker), \`app-2.md\` (Resize), \`app-3.md\` (Culler)

### Working with Display Objects
- Sprites: \`scene-3.md\` and \`scene.Sprite.html.md\`
- Containers: \`scene-1.md\` and \`scene.Container.html.md\`
- Graphics: \`scene-6.md\` and \`scene.Graphics.html.md\`
- Text: \`scene-9.md\` through \`scene-13.md\`

### Handling User Input
- Event system: \`events.md\`
- Event types: \`events.FederatedPointerEvent.html.md\`, \`events.FederatedMouseEvent.html.md\`

### Loading Assets
- Asset management: \`assets.md\`
- Loading: \`assets.Assets.html.md\`
- Spritesheets: \`assets.Spritesheet.html.md\`

### Performance Optimization
- General tips: \`core-concepts-7.md\`
- Render groups: \`core-concepts-3.md\`
- Culling: \`core-concepts-2.md\`
- Cache as texture: \`scene-2.md\`

### Applying Filters
- Overview: \`filters.md\`
- Common filters: \`filters.BlurFilter.html.md\`, \`filters.ColorMatrixFilter.html.md\`

## Documentation Sections

The following sections are automatically generated from PixiJS documentation. Each link points to detailed information about specific topics.
`
}

export default async function () {
  const outputDir = distDir(TASK_NAME)
  const tempDocsDir = resolve(pixiSourceDir, '.s3_uploads/docs')

  // Ensure output directory exists
  await mkdir(outputDir, { recursive: true })

  const commands = [
    `npx nypm i`,
    `npm run build:docs`,
  ]
  try {
    for (const command of commands) {
      console.log(`Running: ${command}`)
      execSync(command, {
        cwd: pixiSourceDir,
        stdio: 'inherit',
      })
    }
  }
  catch (error) {
    throw new Error(`Error occurred while generating documentation`, { cause: error })
  }

  // scan all markdown files
  const files = await glob('**/*.html.md', { cwd: tempDocsDir, absolute: false })
  for (const file of files) {
    const source = resolve(tempDocsDir, file)
    const destination = resolve(outputDir, file.replace(/.html.md$/, '.md'))
    await mkdir(resolve(destination, '..'), { recursive: true })
    const content = await readFile(source, 'utf-8')
    const fixedContent = content
      // replace [xxx](xxx.html.md) with [xxx](xxx.md)
      .replace(/\]\(([^)]+)\.html\.md\)/g, (_, p1) => `](${p1}.md)`)
    await writeFile(destination, fixedContent, 'utf-8')
  }

  // generate SKILL.md file from llms.txt
  const llmsFile = resolve(tempDocsDir, 'llms.txt')
  const md = createMarkdown()
  md.metadata({
    name: TASK_NAME,
    description: DESCRIPTION,
    license: 'MIT',
    meta: {
      source: 'PixiJS Documentation https://pixijs.download/release/docs/index.html',
    },
  })
  // Add usage guide before the llms.txt content
  md.text(generateUsageGuide())
  md.text(
    (await readFile(llmsFile, 'utf-8'))
      // replace [xxx](xxx.html.md) with [xxx](xxx.md)
      .replace(/\]\(([^)]+)\.html\.md\)/g, (_, p1) => `](${p1}.md)`),
  )
  await writeFile(resolve(outputDir, 'SKILL.md'), md.toString(), 'utf-8')

  console.log(`✔ PixiJS documentation generated successfully`)
}
