import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { distDir } from '../../utils/dirs'
import { createMarkdown } from '../../utils/md'

const TASK_NAME = 'hello-world'
const DESCRIPTION = `Use when asked to print hello world, demonstrate basic output operations, or show the simplest program in any programming language.`

function content() {
  const md = createMarkdown()
  md.metadata({
    name: TASK_NAME,
    description: DESCRIPTION,
    license: 'MIT',
  })

  md.heading('Hello World Skill', 1)
  md.text(`Printing "Hello, World!" is the traditional first step for any programmer.`)

  // When to use section
  md.heading('When to use this skill', 2)
  md.text('Use this skill when the user:')
  md.list([
    'Asks to print "Hello, World!"',
    'Wants to see a basic output example',
    'Is learning a new language and needs a starting point',
  ])

  // Instructions section
  md.heading('Instructions', 2)
  md.text('When asked to print "Hello, World!":')
  md.list([
    '**Detect the context**: Check if the project uses a specific language',
    '**Choose appropriate method**: Select the code example below that matches the context',
    '**Execute or provide**: Run the code if you have execution permissions, otherwise return the code snippet',
  ])

  // Code Examples section
  md.heading('Code Examples', 2)
  md.text('When you have permission to execute code, use the following examples:')
  const programmingLanguages = [
    { name: 'Node.js', code: `console.log('Hello, World!')`, lang: 'javascript' },
    { name: 'Python', code: `print('Hello, World!')`, lang: 'python' },
    { name: 'Bash', code: `echo 'Hello, World!'`, lang: 'bash' },
  ]
  programmingLanguages.forEach(({ name, code, lang }) => {
    md.heading(name, 3)
    md.codeBlock(code, lang)
  })

  // Fallback section
  md.heading('Fallback', 2)
  md.text(`If no execution environment is available, simply return the string \`Hello, World!\` as a response.`)

  return md.toString()
}

export default async function () {
  await writeFile(resolve(distDir(TASK_NAME), 'SKILL.md'), content())
}
