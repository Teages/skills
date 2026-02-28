# Interface: ContextSystemOptions

**`Advanced`**

Options for the context system.

## Properties

### antialias?

> `optional` **antialias**: `boolean`

Whether to enable antialiasing.

***

### context

> **context**: [`WebGL2RenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext)

User-provided WebGL rendering context object.

***

### multiView

> **multiView**: `boolean`

Whether to enable multi-view rendering. Set to true when rendering to multiple
canvases on the dom.

#### Default

```ts
false
```

***

### powerPreference?

> `optional` **powerPreference**: [`GpuPowerPreference`](rendering.GpuPowerPreference.md)

An optional hint indicating what configuration
of GPU is suitable for the WebGL context, can be `'high-performance'` or `'low-power'`. Setting to `'high-performance'`
will prioritize rendering performance over power consumption, while setting to `'low-power'` will prioritize power saving
over rendering performance.

***

### preferWebGLVersion?

> `optional` **preferWebGLVersion**: `1` \| `2`

The preferred WebGL version to use.

***

### premultipliedAlpha

> **premultipliedAlpha**: `boolean`

Whether the compositor will assume the drawing buffer contains
colors with premultiplied alpha.

***

### preserveDrawingBuffer

> **preserveDrawingBuffer**: `boolean`

Whether to enable drawing buffer preservation.
If enabled, the drawing buffer will preserve
its value until cleared or overwritten. Enable this if you need to call `toDataUrl` on the WebGL context.
