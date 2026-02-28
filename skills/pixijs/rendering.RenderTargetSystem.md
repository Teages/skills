# Class: RenderTargetSystem\<RENDER_TARGET\>

**`Advanced`**

A system that manages render targets. A render target is essentially a place where the shaders can color in the pixels.
The render target system is responsible for binding the render target to the renderer, and managing the viewport.
Render targets can be pushed and popped.

To make it easier, you can also bind textures and canvases too. This will automatically create a render target for you.
The render target itself is a lot more powerful than just a texture or canvas,
as it can have multiple textures attached to it.
It will also give ou fine grain control over the stencil buffer / depth texture.

## Example

```js

// create a render target
const renderTarget = new RenderTarget({
  colorTextures: [new TextureSource({ width: 100, height: 100 })],
});

// bind the render target
renderer.renderTarget.bind(renderTarget);

// draw something!
```

## Extended by

- [`CanvasRenderTargetSystem`](rendering.CanvasRenderTargetSystem.md)
- [`GlRenderTargetSystem`](rendering.GlRenderTargetSystem.md)
- [`GpuRenderTargetSystem`](rendering.GpuRenderTargetSystem.md)

## Type Parameters

### RENDER_TARGET

`RENDER_TARGET` *extends* `RendererRenderTarget`

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new RenderTargetSystem**\<`RENDER_TARGET`\>(`renderer`): `RenderTargetSystem`\<`RENDER_TARGET`\>

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

#### Returns

`RenderTargetSystem`\<`RENDER_TARGET`\>

## Properties

### adaptor

> `readonly` **adaptor**: `RenderTargetAdaptor`\<`RENDER_TARGET`\>

a reference to the adaptor that interfaces with WebGL / WebGP

***

### defaultClearColor

> `readonly` **defaultClearColor**: [`RgbaArray`](color.RgbaArray.md)

the default clear color for render targets

***

### layer

> **layer**: `number` = `0`

the current array layer being rendered to (for array-backed targets)

***

### mipLevel

> **mipLevel**: `number` = `0`

the current mip level being rendered to (for texture subresources)

***

### onRenderTargetChange

> `readonly` **onRenderTargetChange**: `SystemRunner`

a runner that lets systems know if the active render target has changed.
Eg the Stencil System needs to know so it can manage the stencil buffer

***

### projectionMatrix

> `readonly` **projectionMatrix**: [`Matrix`](maths.Matrix.md)

the projection matrix that is used by the shaders based on the active render target and the viewport

***

### renderingToScreen

> **renderingToScreen**: `boolean`

A boolean that lets the dev know if the current render pass is rendering to the screen. Used by some plugins

***

### renderSurface

> **renderSurface**: [`RenderSurface`](rendering.RenderSurface.md)

the current active render surface that the render target is created from

***

### renderTarget

> **renderTarget**: [`RenderTarget`](rendering.RenderTarget.md)

the current active render target

***

### rootRenderTarget

> **rootRenderTarget**: [`RenderTarget`](rendering.RenderTarget.md)

When rendering of a scene begins, this is where the root render surface is stored

***

### rootViewPort

> **rootViewPort**: [`Rectangle`](maths.Rectangle.md)

This is the root viewport for the render pass

***

### viewport

> `readonly` **viewport**: [`Rectangle`](maths.Rectangle.md)

the current viewport that the gpu is using

## Methods

### bind()

> **bind**(`renderSurface`, `clear`, `clearColor?`, `frame?`, `mipLevel?`, `layer?`): [`RenderTarget`](rendering.RenderTarget.md)

Binding a render surface! This is the main function of the render target system.
It will take the RenderSurface (which can be a texture, canvas, or render target) and bind it to the renderer.
Once bound all draw calls will be rendered to the render surface.

If a frame is not provided and the render surface is a [Texture](rendering.Texture.md), the frame of the texture will be used.

IMPORTANT:
- `frame` is treated as **base mip (mip 0) pixel space**.
- When `mipLevel > 0`, the viewport derived from `frame` is scaled by \(2^{mipLevel}\) and clamped to the
  mip dimensions. This keeps "render the same region" semantics consistent across mip levels.
- When `renderSurface` is a [Texture](rendering.Texture.md), `renderer.render({ container, target: texture, mipLevel })` will
  render into
  the underlying [TextureSource](rendering.TextureSource.md) (Pixi will create/use a [RenderTarget](rendering.RenderTarget.md) for the source) using the
  texture's frame to define the region (in mip 0 space).

#### Parameters

##### renderSurface

[`RenderSurface`](rendering.RenderSurface.md)

the render surface to bind

##### clear

[`CLEAR_OR_BOOL`](rendering.CLEAR_OR_BOOL.md) = `true`

the clear mode to use. Can be true or a CLEAR number 'COLOR | DEPTH | STENCIL' 0b111

##### clearColor?

[`RgbaArray`](color.RgbaArray.md)

the color to clear to

##### frame?

[`Rectangle`](maths.Rectangle.md)

the frame to render to

##### mipLevel?

`number` = `0`

the mip level to render to

##### layer?

`number` = `0`

the layer (or slice) of the render surface to render to. For array textures,
3D textures, or cubemaps, this specifies the target layer or face. Defaults to 0 (the first layer/face).
Ignored for surfaces that do not support layers.

#### Returns

[`RenderTarget`](rendering.RenderTarget.md)

the render target that was bound

***

### clear()

> **clear**(`target?`, `clear?`, `clearColor?`, `mipLevel?`, `layer?`): `void`

#### Parameters

##### target?

[`RenderSurface`](rendering.RenderSurface.md)

##### clear?

[`CLEAR_OR_BOOL`](rendering.CLEAR_OR_BOOL.md) = `CLEAR.ALL`

##### clearColor?

[`RgbaArray`](color.RgbaArray.md)

##### mipLevel?

`number` = `...`

##### layer?

`number` = `...`

#### Returns

`void`

***

### copyToTexture()

> **copyToTexture**(`sourceRenderSurfaceTexture`, `destinationTexture`, `originSrc`, `size`, `originDest`): [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

Copies a render surface to another texture.

NOTE:
for sourceRenderSurfaceTexture, The render target must be something that is written too by the renderer

The following is not valid:

#### Parameters

##### sourceRenderSurfaceTexture

[`RenderTarget`](rendering.RenderTarget.md)

the render surface to copy from

##### destinationTexture

[`Texture`](rendering.Texture.md)

the texture to copy to

##### originSrc

the origin of the copy

###### x

`number`

the x origin of the copy

###### y

`number`

the y origin of the copy

##### size

the size of the copy

###### height

`number`

the height of the copy

###### width

`number`

the width of the copy

##### originDest

the destination origin (top left to paste from!)

###### x

`number`

the x origin of the paste

###### y

`number`

the y origin of the paste

#### Returns

[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

#### Example

```ts
const canvas = document.createElement('canvas')
canvas.width = 200;
canvas.height = 200;

const ctx = canvas2.getContext('2d')!
ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 200, 200);

const texture = RenderTexture.create({
  width: 200,
  height: 200,
})
const renderTarget = renderer.renderTarget.getRenderTarget(canvas2);

renderer.renderTarget.copyToTexture(renderTarget,texture, {x:0,y:0},{width:200,height:200},{x:0,y:0});

The best way to copy a canvas is to create a texture from it. Then render with that.

Parsing in a RenderTarget canvas context (with a 2d context)
```

***

### destroy()

> **destroy**(): `void`

nukes the render target system

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### ensureDepthStencil()

> **ensureDepthStencil**(): `void`

ensures that we have a depth stencil buffer available to render to
This is used by the mask system to make sure we have a stencil buffer.

#### Returns

`void`

***

### finishRenderPass()

> **finishRenderPass**(): `void`

called when dev wants to finish a render pass

#### Returns

`void`

***

### getGpuRenderTarget()

> **getGpuRenderTarget**(`renderTarget`): `RENDER_TARGET`

#### Parameters

##### renderTarget

[`RenderTarget`](rendering.RenderTarget.md)

#### Returns

`RENDER_TARGET`

***

### getRenderTarget()

> **getRenderTarget**(`renderSurface`): [`RenderTarget`](rendering.RenderTarget.md)

Gets the render target from the provide render surface. Eg if its a texture,
it will return the render target for the texture.
If its a render target, it will return the same render target.

#### Parameters

##### renderSurface

[`RenderSurface`](rendering.RenderSurface.md)

the render surface to get the render target for

#### Returns

[`RenderTarget`](rendering.RenderTarget.md)

the render target for the render surface

***

### pop()

> **pop**(): `void`

Pops the current render target from the renderer and restores the previous render target.

#### Returns

`void`

***

### postrender()

> **postrender**(): `void`

#### Returns

`void`

***

### push()

> **push**(`renderSurface`, `clear`, `clearColor?`, `frame?`, `mipLevel?`, `layer?`): [`RenderTarget`](rendering.RenderTarget.md)

Push a render surface to the renderer. This will bind the render surface to the renderer,

#### Parameters

##### renderSurface

[`RenderSurface`](rendering.RenderSurface.md)

the render surface to push

##### clear

the clear mode to use. Can be true or a CLEAR number 'COLOR | DEPTH | STENCIL' 0b111

`boolean` | [`CLEAR`](rendering.CLEAR.md)

##### clearColor?

[`RgbaArray`](color.RgbaArray.md)

the color to clear to

##### frame?

[`Rectangle`](maths.Rectangle.md)

the frame to use when rendering to the render surface

##### mipLevel?

`number` = `0`

the mip level to render to

##### layer?

`number` = `0`

The layer of the render surface to render to. For array textures or cube maps, this specifies
which layer or face to target. Defaults to 0 (the first layer).

#### Returns

[`RenderTarget`](rendering.RenderTarget.md)

***

### renderStart()

> **renderStart**(`options`): `void`

called when the renderer starts to render a scene.

#### Parameters

##### options

###### clear

[`CLEAR_OR_BOOL`](rendering.CLEAR_OR_BOOL.md)

the clear mode to use. Can be true or a CLEAR number 'COLOR | DEPTH | STENCIL' 0b111

###### clearColor

[`RgbaArray`](color.RgbaArray.md)

the color to clear to

###### frame?

[`Rectangle`](maths.Rectangle.md)

the frame to render to

###### layer?

`number`

The layer of the render target to render to. Used for array or 3D textures, or when rendering
to a specific layer of a layered render target. Optional.

###### mipLevel?

`number`

the mip level to render to

###### target

[`RenderSurface`](rendering.RenderSurface.md)

the render target to render to

#### Returns

`void`

***

### resetState()

> **resetState**(): `void`

#### Returns

`void`
