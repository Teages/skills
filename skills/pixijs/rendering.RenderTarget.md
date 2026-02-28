# Class: RenderTarget

**`Advanced`**

A class that describes what the renderers are rendering to.
This can be as simple as a Texture, or as complex as a multi-texture, multi-sampled render target.
Support for stencil and depth buffers is also included.

If you need something more complex than a Texture to render to, you should use this class.
Under the hood, all textures you render to have a RenderTarget created on their behalf.

## Constructors

### Constructor

> **new RenderTarget**(`descriptor?`): `RenderTarget`

#### Parameters

##### descriptor?

[`RenderTargetOptions`](rendering.RenderTargetOptions.md) = `{}`

Options for creating a render target.

#### Returns

`RenderTarget`

## Properties

### colorTextures

> **colorTextures**: [`TextureSource`](rendering.TextureSource.md)\<`any`\>[] = `[]`

An array of textures that can be written to by the GPU - mostly this has one texture in Pixi, but you could
write to multiple if required! (eg deferred lighting)

***

### depth

> **depth**: `boolean`

if true, will ensure a depth buffer is added. For WebGPU, this will automatically create a depthStencilTexture

***

### depthStencilTexture

> **depthStencilTexture**: [`TextureSource`](rendering.TextureSource.md)

the stencil and depth buffer will right to this texture in WebGPU

***

### dirtyId

> **dirtyId**: `number` = `0`

***

### isRoot

> **isRoot**: `boolean` = `false`

***

### stencil

> **stencil**: `boolean`

if true, will ensure a stencil buffer is added. For WebGPU, this will automatically create a depthStencilTexture

***

### uid

> `readonly` **uid**: `number`

unique id for this render target

***

### defaultOptions

> `static` **defaultOptions**: [`RenderTargetOptions`](rendering.RenderTargetOptions.md)

The default options for a render target

## Accessors

### colorTexture

#### Get Signature

> **get** **colorTexture**(): [`TextureSource`](rendering.TextureSource.md)

##### Returns

[`TextureSource`](rendering.TextureSource.md)

***

### height

#### Get Signature

> **get** **height**(): `number`

##### Returns

`number`

***

### pixelHeight

#### Get Signature

> **get** **pixelHeight**(): `number`

##### Returns

`number`

***

### pixelWidth

#### Get Signature

> **get** **pixelWidth**(): `number`

##### Returns

`number`

***

### resolution

#### Get Signature

> **get** **resolution**(): `number`

##### Returns

`number`

***

### size

#### Get Signature

> **get** **size**(): \[`number`, `number`\]

##### Returns

\[`number`, `number`\]

***

### width

#### Get Signature

> **get** **width**(): `number`

##### Returns

`number`

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### resize()

> **resize**(`width`, `height`, `resolution`, `skipColorTexture`): `void`

#### Parameters

##### width

`number`

##### height

`number`

##### resolution

`number` = `...`

##### skipColorTexture

`boolean` = `false`

#### Returns

`void`
