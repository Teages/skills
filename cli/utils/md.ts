import yaml from 'js-yaml'
import { md as _render } from 'mdbox'

export const render = {
  ..._render,
  metadata: (metadata: unknown) => {
    return `---\n${yaml.dump(metadata, { lineWidth: -1 })}---`
  },
  text: (...text: string[]) => text.join('\n'),
  paragraph: (text: string) => {
    const lines = text.split('\n')
    const minSpace = Math.min(...lines.map(l => l.match(/^(\s*)/)![1].length))
    return lines.map(l => l.slice(minSpace)).join('\n')
  },
}

export function createMarkdown(): MarkDownEditor {
  const parts: string[] = []

  const toString = () => `${parts.join('\n')}\n`

  return new Proxy({ toString }, {
    get(target, prop) {
      if (prop in target) {
        return (target as any)[prop]
      }

      if (prop in render) {
        return (...args: any[]) => {
          const result = (render as any)[prop](...args)
          parts.push(result)
        }
      }

      return undefined
    },
  }) as MarkDownEditor
}

export type MarkDownEditor = {
  [fn in keyof typeof render]: (...args: Parameters<typeof render[fn]>) => void
} & {
  toString: () => string
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest

  describe('render', () => {
    describe('metadata', () => {
      it('should render yaml frontmatter with simple object', () => {
        const result = render.metadata({ title: 'Hello', author: 'World' })
        expect(result).toMatchInlineSnapshot(`
          "---
          title: Hello
          author: World
          ---"
        `)
      })

      it('should render yaml frontmatter with nested object', () => {
        const result = render.metadata({ info: { name: 'test', version: '1.0.0' } })
        expect(result).toMatchInlineSnapshot(`
          "---
          info:
            name: test
            version: 1.0.0
          ---"
        `)
      })

      it('should render yaml frontmatter with array', () => {
        const result = render.metadata({ tags: ['a', 'b', 'c'] })
        expect(result).toMatchInlineSnapshot(`
          "---
          tags:
            - a
            - b
            - c
          ---"
        `)
      })

      it('should render empty object', () => {
        const result = render.metadata({})
        expect(result).toMatchInlineSnapshot(`
          "---
          {}
          ---"
        `)
      })

      it('should render null value', () => {
        const result = render.metadata({ value: null })
        expect(result).toMatchInlineSnapshot(`
          "---
          value: null
          ---"
        `)
      })
    })

    describe('text', () => {
      it('should join multiple strings with newline', () => {
        const result = render.text('Hello', 'World', 'Test')
        expect(result).toMatchInlineSnapshot(`
          "Hello
          World
          Test"
        `)
      })

      it('should return empty string when no arguments', () => {
        const result = render.text()
        expect(result).toMatchInlineSnapshot(`""`)
      })

      it('should handle single argument', () => {
        const result = render.text('Single')
        expect(result).toMatchInlineSnapshot(`"Single"`)
      })

      it('should handle empty strings', () => {
        const result = render.text('', 'Middle', '')
        expect(result).toMatchInlineSnapshot(`
          "
          Middle
          "
        `)
      })
    })

    describe('paragraph', () => {
      it('should remove common leading whitespace', () => {
        const result = render.paragraph('  Hello\n  World')
        expect(result).toMatchInlineSnapshot(`
          "Hello
          World"
        `)
      })

      it('should handle text without leading whitespace', () => {
        const result = render.paragraph('Hello\nWorld')
        expect(result).toMatchInlineSnapshot(`
          "Hello
          World"
        `)
      })

      it('should handle mixed indentation', () => {
        const result = render.paragraph('    Indented\n  Less Indented')
        expect(result).toMatchInlineSnapshot(`
          "  Indented
          Less Indented"
        `)
      })

      it('should handle single line', () => {
        const result = render.paragraph('Single Line')
        expect(result).toMatchInlineSnapshot(`"Single Line"`)
      })

      it('should handle tabs as whitespace', () => {
        const result = render.paragraph('\tTabbed\n\tContent')
        expect(result).toMatchInlineSnapshot(`
          "Tabbed
          Content"
        `)
      })

      it('should handle empty string', () => {
        const result = render.paragraph('')
        expect(result).toMatchInlineSnapshot(`""`)
      })
    })
  })

  describe('createMarkdown', () => {
    it('should create markdown editor with chained calls', () => {
      const md = createMarkdown()
      md.text('Line 1')
      md.text('Line 2')
      expect(md.toString()).toMatchInlineSnapshot(`
        "Line 1
        Line 2"
      `)
    })

    it('should support metadata rendering', () => {
      const md = createMarkdown()
      md.metadata({ title: 'Test' })
      expect(md.toString()).toMatchInlineSnapshot(`
        "---
        title: Test
        ---"
      `)
    })

    it('should support paragraph rendering', () => {
      const md = createMarkdown()
      md.paragraph('  Hello\n  World')
      expect(md.toString()).toMatchInlineSnapshot(`
        "Hello
        World"
      `)
    })
  })
}
