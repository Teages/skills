# Type Alias: TextStyleAlign

> **TextStyleAlign** = `"left"` \| `"center"` \| `"right"` \| `"justify"`

The alignment of the text.

- 'left': Aligns text to the left edge.
- 'center': Centers text horizontally.
- 'right': Aligns text to the right edge.
- 'justify': Justifies text, aligning both left and right edges.

## Example

```ts
import { TextStyle } from 'pixi.js';
const style = new TextStyle({
  align: 'center', // or 'left', 'right', 'justify'
});
```
