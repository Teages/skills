# Class: GlRenderTargetSystem

**`Advanced`**

The WebGL adaptor for the render target system. Allows the Render Target System to be used with the WebGl renderer

## Extends

- [`RenderTargetSystem`](rendering.RenderTargetSystem.md)\<`GlRenderTarget`\>

## Constructors

### Constructor

> **new GlRenderTargetSystem**(`renderer`): `GlRenderTargetSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

#### Returns

`GlRenderTargetSystem`

#### Overrides

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`constructor`](rendering.RenderTargetSystem.html#constructor)

## Properties

### adaptor

> **adaptor**: `GlRenderTargetAdaptor`

a reference to the adaptor that interfaces with WebGL / WebGP

#### Overrides

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`adaptor`](rendering.RenderTargetSystem.html#adaptor)

***

### defaultClearColor

> `readonly` **defaultClearColor**: [`RgbaArray`](color.RgbaArray.md)

the default clear color for render targets

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`defaultClearColor`](rendering.RenderTargetSystem.html#defaultclearcolor)

***

### layer

> **layer**: `number` = `0`

the current array layer being rendered to (for array-backed targets)

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`layer`](rendering.RenderTargetSystem.html#layer)

***

### mipLevel

> **mipLevel**: `number` = `0`

the current mip level being rendered to (for texture subresources)

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`mipLevel`](rendering.RenderTargetSystem.html#miplevel)

***

### onRenderTargetChange

> `readonly` **onRenderTargetChange**: `SystemRunner`

a runner that lets systems know if the active render target has changed.
Eg the Stencil System needs to know so it can manage the stencil buffer

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`onRenderTargetChange`](rendering.RenderTargetSystem.html#onrendertargetchange)

***

### projectionMatrix

> `readonly` **projectionMatrix**: [`Matrix`](maths.Matrix.md)

the projection matrix that is used by the shaders based on the active render target and the viewport

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`projectionMatrix`](rendering.RenderTargetSystem.html#projectionmatrix)

***

### renderingToScreen

> **renderingToScreen**: `boolean`

A boolean that lets the dev know if the current render pass is rendering to the screen. Used by some plugins

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`renderingToScreen`](rendering.RenderTargetSystem.html#renderingtoscreen)

***

### renderSurface

> **renderSurface**: [`RenderSurface`](rendering.RenderSurface.md)

the current active render surface that the render target is created from

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`renderSurface`](rendering.RenderTargetSystem.html#rendersurface)

***

### renderTarget

> **renderTarget**: [`RenderTarget`](rendering.RenderTarget.md)

the current active render target

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`renderTarget`](rendering.RenderTargetSystem.html#rendertarget)

***

### rootRenderTarget

> **rootRenderTarget**: [`RenderTarget`](rendering.RenderTarget.md)

When rendering of a scene begins, this is where the root render surface is stored

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`rootRenderTarget`](rendering.RenderTargetSystem.html#rootrendertarget)

***

### rootViewPort

> **rootViewPort**: [`Rectangle`](maths.Rectangle.md)

This is the root viewport for the render pass

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`rootViewPort`](rendering.RenderTargetSystem.html#rootviewport)

***

### viewport

> `readonly` **viewport**: [`Rectangle`](maths.Rectangle.md)

the current viewport that the gpu is using

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`viewport`](rendering.RenderTargetSystem.html#viewport)

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

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`bind`](rendering.RenderTargetSystem.html#bind)

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

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`clear`](rendering.RenderTargetSystem.html#clear)

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

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`copyToTexture`](rendering.RenderTargetSystem.html#copytotexture)

***

### destroy()

> **destroy**(): `void`

nukes the render target system

#### Returns

`void`

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`destroy`](rendering.RenderTargetSystem.html#destroy)

***

### ensureDepthStencil()

> **ensureDepthStencil**(): `void`

ensures that we have a depth stencil buffer available to render to
This is used by the mask system to make sure we have a stencil buffer.

#### Returns

`void`

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`ensureDepthStencil`](rendering.RenderTargetSystem.html#ensuredepthstencil)

***

### finishRenderPass()

> **finishRenderPass**(): `void`

called when dev wants to finish a render pass

#### Returns

`void`

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`finishRenderPass`](rendering.RenderTargetSystem.html#finishrenderpass)

***

### getGpuRenderTarget()

> **getGpuRenderTarget**(`renderTarget`): `GlRenderTarget`

#### Parameters

##### renderTarget

[`RenderTarget`](rendering.RenderTarget.md)

#### Returns

`GlRenderTarget`

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`getGpuRenderTarget`](rendering.RenderTargetSystem.html#getgpurendertarget)

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

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`getRenderTarget`](rendering.RenderTargetSystem.html#getrendertarget)

***

### pop()

> **pop**(): `void`

Pops the current render target from the renderer and restores the previous render target.

#### Returns

`void`

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`pop`](rendering.RenderTargetSystem.html#pop)

***

### postrender()

> **postrender**(): `void`

#### Returns

`void`

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`postrender`](rendering.RenderTargetSystem.html#postrender)

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

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`push`](rendering.RenderTargetSystem.html#push)

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

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`renderStart`](rendering.RenderTargetSystem.html#renderstart)

***

### resetState()

> **resetState**(): `void`

#### Returns

`void`

#### Inherited from

[`RenderTargetSystem`](rendering.RenderTargetSystem.md).[`resetState`](rendering.RenderTargetSystem.html#resetstate)
