---
name: es-toolkit
description: Use when working with JavaScript/TypeScript utility functions (array, object, string, math, function, predicate, promise), especially when replacing lodash or optimizing bundle size and type-safety.
license: MIT
---

# es-toolkit Skill

This skill helps you choose and apply the right `es-toolkit` utilities in JavaScript or TypeScript codebases.

## When to use this skill

Use this skill when the user:
- Asks for utility helpers like chunking arrays, debouncing, deep clone, or case conversion
- Wants to replace lodash/underscore helpers with modern tree-shakable imports
- Needs stronger TypeScript inference around data-transform utilities
- Requests small focused helpers for array/object/string/math/promise workflows
- Needs lodash-compatible behavior via `es-toolkit/compat` during migration

## Instructions

When the user asks for helper utilities or refactors:
- **Identify the intent first**: map the request to a category (`array`, `function`, `math`, `object`, `predicate`, `promise`, `string`).
- **Prefer direct imports**: use `es-toolkit` or scoped paths like `es-toolkit/array` to keep bundle size small.
- **Choose the smallest correct utility**: avoid composing many helpers when one function solves the task clearly.
- **For lodash migration**: prefer `es-toolkit/compat` if behavior parity is required before deeper refactor.
- **Keep examples executable**: provide concise code snippets with input and expected output/comments.
- **Preserve types**: in TypeScript, keep generic inference intact and avoid unnecessary type assertions.

## Install

```bash
pnpm add es-toolkit
```

## Examples

```typescript
// import from '@es-toolkit/es-toolkit' in jsr.
import { chunk, debounce } from 'es-toolkit';

const debouncedLog = debounce(message => {
  console.log(message);
}, 300);

// This call will be debounced
debouncedLog('Hello, world!');

const array = [1, 2, 3, 4, 5, 6];
const chunkedArray = chunk(array, 2);

console.log(chunkedArray);
// Output: [[1, 2], [3, 4], [5, 6]]
```

## Documentation Reference

Select a category below to view all available utilities in that category. Each category page contains a complete list of functions with descriptions and links to detailed documentation.

### Categories

- [Array](reference/array.md) - 66 utilities
- [Compat](reference/compat.md) - 296 utilities
- [Error](reference/error.md) - 2 utilities
- [Function](reference/function.md) - 21 utilities
- [Map](reference/map.md) - 12 utilities
- [Math](reference/math.md) - 13 utilities
- [Object](reference/object.md) - 17 utilities
- [Predicate](reference/predicate.md) - 34 utilities
- [Promise](reference/promise.md) - 5 utilities
- [Set](reference/set.md) - 9 utilities
- [String](reference/string.md) - 21 utilities
- [Util](reference/util.md) - 4 utilities
