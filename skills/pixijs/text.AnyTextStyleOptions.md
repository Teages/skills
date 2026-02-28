# Type Alias: AnyTextStyleOptions

> **AnyTextStyleOptions** = [`TextStyleOptions`](text.TextStyleOptions.md) \| [`HTMLTextStyleOptions`](text.HTMLTextStyleOptions.md)

A union of all text style options, including HTML, Bitmap and Canvas text style options.
This is used to allow for any text style options to be passed to a text object.

## Example

```ts
import { TextStyleOptions, HTMLTextStyleOptions } from 'pixi.js';
const styleOptions: AnyTextStyleOptions = { fontSize: 24 } as TextStyleOptions;
const htmlStyleOptions: AnyTextStyleOptions = { fontSize: '24px' } as HTMLTextStyleOptions;
```

## See

 - TextStyleOptions
 - HTMLTextStyleOptions
