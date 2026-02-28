# Interface: BackgroundSystemOptions

**`Advanced`**

Options for the background system.

## Properties

### background?

> `optional` **background**: [`ColorSource`](color.ColorSource.md)

Alias for `backgroundColor`

***

### backgroundAlpha?

> `optional` **backgroundAlpha**: `number`

Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
This value determines whether the canvas is initialized with alpha transparency support.
Note: This cannot be changed after initialization. If set to `1`, the canvas will remain opaque,
even if a transparent background color is set later.

#### Default

```ts
1
```

***

### backgroundColor

> **backgroundColor**: [`ColorSource`](color.ColorSource.md)

The background color used to clear the canvas. See [ColorSource](color.ColorSource.md) for accepted color values.

#### Default

```ts
'black'
```

***

### clearBeforeRender?

> `optional` **clearBeforeRender**: `boolean`

Whether to clear the canvas before new render passes.

#### Default

```ts
true
```
