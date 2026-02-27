import { access, mkdir, readdir, rm, stat } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineCommand, runMain } from 'citty'
import { createJiti } from 'jiti'
import { distDir } from './utils/dirs'

const tasksRoot = resolve(import.meta.dirname, 'tasks')
const jiti = createJiti(import.meta.url)

async function ensureTaskRootExists() {
  try {
    await access(tasksRoot)
  }
  catch {
    throw new Error(`Tasks directory not found: ${tasksRoot}`)
  }
}

async function listAllTaskNames() {
  await ensureTaskRootExists()
  const entries = await readdir(tasksRoot, { withFileTypes: true })
  const taskNames = entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort((left, right) => left.localeCompare(right))

  if (taskNames.length === 0) {
    throw new Error(`No tasks found in: ${tasksRoot}`)
  }

  return taskNames
}

function getTaskEntryPath(taskName: string) {
  return resolve(tasksRoot, taskName, 'index.ts')
}

async function loadTaskGenerator(taskName: string) {
  const taskDir = resolve(tasksRoot, taskName)
  const entryPath = getTaskEntryPath(taskName)

  let taskDirStat
  try {
    taskDirStat = await stat(taskDir)
  }
  catch {
    throw new Error(`Task not found: ${taskName}. Expected directory: ${taskDir}`)
  }

  if (!taskDirStat.isDirectory()) {
    throw new Error(`Invalid task path: ${taskDir}. Expected a directory.`)
  }

  try {
    await access(entryPath)
  }
  catch {
    throw new Error(`Task entry not found: ${entryPath}`)
  }

  const mod = await jiti.import(entryPath) as { default?: unknown }
  if (typeof mod.default !== 'function') {
    throw new TypeError(`Task entry must default export a function: ${entryPath}`)
  }

  return mod.default as () => unknown | Promise<unknown>
}

async function resetTaskOutputDir(taskName: string) {
  const outputDir = distDir(taskName)
  await rm(outputDir, { recursive: true, force: true })
  await mkdir(outputDir, { recursive: true })
}

async function hasFiles(dirPath: string) {
  const entries = await readdir(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const currentPath = resolve(dirPath, entry.name)
    if (entry.isFile()) {
      return true
    }
    if (entry.isDirectory() && await hasFiles(currentPath)) {
      return true
    }
  }
  return false
}

async function assertTaskOutputNotEmpty(taskName: string) {
  const outputDir = distDir(taskName)
  const outputHasFiles = await hasFiles(outputDir)
  if (!outputHasFiles) {
    throw new Error(`Task produced no files: ${taskName}. Output directory: ${outputDir}`)
  }
}

async function runTask(taskName: string) {
  const generateSkill = await loadTaskGenerator(taskName)

  await resetTaskOutputDir(taskName)
  await generateSkill()
  await assertTaskOutputNotEmpty(taskName)

  console.log(`✔ Task completed: ${taskName}`)
}

const main = defineCommand({
  meta: {
    name: '@teages/skills/cli',
    version: '1.0.0',
  },
  args: {
    task: {
      type: 'string',
      description: 'The task to run',
      required: false,
    },
  },
  async run({ args }) {
    if (args.task) {
      await runTask(args.task)
      return
    }

    const taskNames = await listAllTaskNames()
    for (const taskName of taskNames) {
      await runTask(taskName)
    }
  },
})

runMain(main)
