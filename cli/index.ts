import { defineCommand, runMain } from 'citty'

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
  run({ args }) {
    console.log(`Hello, ${args.task || 'world'}!`)
  },
})

runMain(main)
