# Type Alias: Cursor

> **Cursor** = `"auto"` \| `"default"` \| `"none"` \| `"context-menu"` \| `"help"` \| `"pointer"` \| `"progress"` \| `"wait"` \| `"cell"` \| `"crosshair"` \| `"text"` \| `"vertical-text"` \| `"alias"` \| `"copy"` \| `"move"` \| `"no-drop"` \| `"not-allowed"` \| `"e-resize"` \| `"n-resize"` \| `"ne-resize"` \| `"nw-resize"` \| `"s-resize"` \| `"se-resize"` \| `"sw-resize"` \| `"w-resize"` \| `"ns-resize"` \| `"ew-resize"` \| `"nesw-resize"` \| `"col-resize"` \| `"nwse-resize"` \| `"row-resize"` \| `"all-scroll"` \| `"zoom-in"` \| `"zoom-out"` \| `"grab"` \| `"grabbing"`

The type of cursor to use when the mouse pointer is hovering over an interactive element.
Accepts any valid CSS cursor value.

## Example

```ts
// Basic cursor types
sprite.cursor = 'pointer';    // Hand cursor for clickable elements
sprite.cursor = 'grab';       // Grab cursor for draggable elements
sprite.cursor = 'crosshair';  // Precise cursor for selection

// Direction cursors
sprite.cursor = 'n-resize';   // North resize
sprite.cursor = 'ew-resize';  // East-west resize
sprite.cursor = 'nesw-resize';// Northeast-southwest resize

// Custom cursor with fallback
sprite.cursor = 'url("custom.png"), auto';
```

Common cursor values:
- Basic: `auto`, `default`, `none`, `pointer`, `wait`
- Text: `text`, `vertical-text`
- Links: `alias`, `copy`, `move`
- Selection: `cell`, `crosshair`
- Drag: `grab`, `grabbing`
- Disabled: `not-allowed`, `no-drop`
- Resize: `n-resize`, `e-resize`, `s-resize`, `w-resize`
- Bidirectional: `ns-resize`, `ew-resize`, `nesw-resize`, `nwse-resize`
- Other: `help`, `progress`

## See

[https://developer.mozilla.org/en-US/docs/Web/CSS/cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) MDN Cursor Documentation
