# Interface: ViewSystemOptions

**`Advanced`**

Options passed to the ViewSystem

## Properties

### antialias?

> `optional` **antialias**: `boolean`

Whether to enable anti-aliasing. This may affect performance.

***

### autoDensity?

> `optional` **autoDensity**: `boolean`

Resizes renderer view in CSS pixels to allow for resolutions other than 1.

This is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas.

***

### canvas?

> `optional` **canvas**: [`ICanvas`](environment.ICanvas.md)

The canvas to use as a view, optional.

***

### depth?

> `optional` **depth**: `boolean`

Whether to ensure the main view has can make use of the depth buffer. Always true for WebGL renderer.

***

### height?

> `optional` **height**: `number`

The height of the screen.

#### Default

```ts
600
```

***

### resolution?

> `optional` **resolution**: `number`

The resolution / device pixel ratio of the renderer.

***

### ~~view?~~

> `optional` **view**: [`ICanvas`](environment.ICanvas.md)

Alias for `canvas`.

#### Deprecated

since 8.0.0

***

### width?

> `optional` **width**: `number`

The width of the screen.

#### Default

```ts
800
```
