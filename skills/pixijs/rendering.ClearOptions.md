# Interface: ClearOptions

**`Advanced`**

The options for clearing the render target.

## Extended by

- [`RenderOptions`](rendering.RenderOptions.md)

## Properties

### clear?

> `optional` **clear**: [`CLEAR_OR_BOOL`](rendering.CLEAR_OR_BOOL.md)

The clear mode to use.

***

### clearColor?

> `optional` **clearColor**: [`ColorSource`](color.ColorSource.md)

The color to clear with.

***

### layer?

> `optional` **layer**: `number`

**`Advanced`**

Array layer index to render/clear to when the target is an array-backed texture source (e.g. `arrayLayerCount > 1`).

This maps to WebGPU's `GPUTextureViewDescriptor.baseArrayLayer` when creating render-attachment views.

#### Default

```ts
0
```

***

### mipLevel?

> `optional` **mipLevel**: `number`

**`Advanced`**

Mip level to render/clear to when the target is a texture-backed render surface.

#### Default

0

Note: When rendering to a [Texture](rendering.Texture.md) target, Pixi renders into the underlying [TextureSource](rendering.TextureSource.md)
(via an internal [RenderTarget](rendering.RenderTarget.md)). The texture's `frame` is interpreted in mip 0 space and is scaled/clamped
to the requested mip level.

***

### target?

> `optional` **target**: [`RenderSurface`](rendering.RenderSurface.md)

The render target to render. if this target is a canvas and  you are using the WebGL renderer,
please ensure you have set `multiView` to `true` on renderer.
