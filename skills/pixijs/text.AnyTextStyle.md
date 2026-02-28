# Type Alias: AnyTextStyle

> **AnyTextStyle** = [`TextStyle`](text.TextStyle.md) \| [`HTMLTextStyle`](text.HTMLTextStyle.md)

A union of all text styles, including HTML, Bitmap and Canvas text styles.
This is used to allow for any text style to be passed to a text object.

## Example

```ts
import { TextStyle, HTMLTextStyle } from 'pixi.js';
const style: AnyTextStyle = new TextStyle({ fontSize: 24 });
const htmlStyle: AnyTextStyle = new HTMLTextStyle({ fontSize: '24px' });
```

## See

 - TextStyle
 - HTMLTextStyle
