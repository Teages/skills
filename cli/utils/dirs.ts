import { resolve } from 'node:path'

export function distDir(taskname: string) {
  const currentDir = import.meta.dirname
  return resolve(currentDir, '../../skills', taskname)
}
