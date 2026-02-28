# Interface: ExternalSourceOptions

**`Advanced`**

Options for creating an ExternalSource.

## Properties

### height?

> `optional` **height**: `number`

**`Advanced`**

Height of the texture. Auto-detected for GPUTexture, required for WebGLTexture.

***

### label?

> `optional` **label**: `string`

**`Advanced`**

Optional label for debugging

***

### renderer

> **renderer**: [`Renderer`](rendering.Renderer.md)

**`Advanced`**

The renderer this texture will be used with

***

### resource?

> `optional` **resource**: [`GPUTexture`](https://developer.mozilla.org/docs/Web/API/GPUTexture) \| [`WebGLTexture`](https://developer.mozilla.org/docs/Web/API/WebGLTexture)

**`Advanced`**

The external GPU texture (GPUTexture for WebGPU, WebGLTexture for WebGL).
If not provided, a shared 1x1 placeholder texture will be used until
`updateGPUTexture()` is called.

***

### width?

> `optional` **width**: `number`

**`Advanced`**

Width of the texture. Auto-detected for GPUTexture, required for WebGLTexture.
