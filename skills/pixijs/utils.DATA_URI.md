# Variable: DATA\_URI

> `const` **DATA\_URI**: [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

**`Advanced`**

Regexp for data URI.
Based on: [https://github.com/ragingwind/data-uri-regex](https://github.com/ragingwind/data-uri-regex)

## Default

```ts
/(?:^data:image/([\w+]+);(?:[\w=]+|charset=[\w-]+)?(?:;base64)?,)/i
```

## Example

```ts
import { DATA_URI } from 'pixi.js';

DATA_URI.test('data:image/png;base64,foobar'); // => true
```
