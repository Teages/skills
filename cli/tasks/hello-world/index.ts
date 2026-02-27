import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { distDir } from '../../utils/dirs'

const TASK_NAME = 'hello-world'

function content() {
  return `${`
# Hello World Skill

This is a simple skill that prints "Hello, World!" to the console.

## Node.js

To print "Hello, World!" in Node.js, you can use the following code:

\`\`\`javascript
console.log('Hello, World!');
\`\`\`

## Python

To print "Hello, World!" in Python, you can use the following code:

\`\`\`python
print('Hello, World!')
\`\`\`

## Bash

To print "Hello, World!" in Bash, you can use the following code:

\`\`\`bash
echo 'Hello, World!'
\`\`\`

## Other

If the agent have no execution permissions, it can still return the string \`Hello, World!\` as a response to the user.
`.trim()}\n`
}

export default async function () {
  await writeFile(resolve(distDir(TASK_NAME), 'README.md'), content())
}
