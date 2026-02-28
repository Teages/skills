# Type Alias: TextString

> **TextString** = `string` \| `number` \| \{ `toString`: () => `string`; \}

A string or number that can be used as text.

## Example

```ts
const text: TextString = 'Hello Pixi!';
const text2: TextString = 12345;
const text3: TextString = { toString: () => 'Hello Pixi!' };
```
