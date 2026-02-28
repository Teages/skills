# Interface: RenderOptions

The options for rendering a view.

## Extends

- [`ClearOptions`](rendering.ClearOptions.md)

## Properties

### clear?

> `optional` **clear**: [`CLEAR_OR_BOOL`](rendering.CLEAR_OR_BOOL.md)

The clear mode to use.

#### Inherited from

[`ClearOptions`](rendering.ClearOptions.md).[`clear`](rendering.ClearOptions.html#clear)

***

### clearColor?

> `optional` **clearColor**: [`ColorSource`](color.ColorSource.md)

The color to clear with.

#### Inherited from

[`ClearOptions`](rendering.ClearOptions.md).[`clearColor`](rendering.ClearOptions.html#clearcolor)

***

### container

> **container**: [`Container`](scene.Container.md)

The container to render.

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

#### Inherited from

[`ClearOptions`](rendering.ClearOptions.md).[`layer`](rendering.ClearOptions.html#layer)

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

#### Inherited from

[`ClearOptions`](rendering.ClearOptions.md).[`mipLevel`](rendering.ClearOptions.html#miplevel)

***

### target?

> `optional` **target**: [`RenderSurface`](rendering.RenderSurface.md)

The render target to render. if this target is a canvas and  you are using the WebGL renderer,
please ensure you have set `multiView` to `true` on renderer.

#### Inherited from

[`ClearOptions`](rendering.ClearOptions.md).[`target`](rendering.ClearOptions.html#target)

***

### transform?

> `optional` **transform**: [`Matrix`](maths.Matrix.md)

the transform to apply to the container.
