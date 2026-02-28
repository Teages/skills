# Interface: RenderTargetOptions

**`Advanced`**

Options for creating a render target.

## Properties

### antialias?

> `optional` **antialias**: `boolean`

should this render target be antialiased?

***

### colorTextures?

> `optional` **colorTextures**: `number` \| [`BindableTexture`](rendering.BindableTexture.md)[]

an array of textures, or a number indicating how many color textures there should be

***

### depth?

> `optional` **depth**: `boolean`

should this render target have a depth buffer?

***

### depthStencilTexture?

> `optional` **depthStencilTexture**: `boolean` \| [`BindableTexture`](rendering.BindableTexture.md)

a depth stencil texture that the depth and stencil outputs will be written to

***

### height?

> `optional` **height**: `number`

the height of the RenderTarget

***

### isRoot?

> `optional` **isRoot**: `boolean`

is this a root element, true if this is gl context owners render target

***

### resolution?

> `optional` **resolution**: `number`

the resolution of the RenderTarget

***

### stencil?

> `optional` **stencil**: `boolean`

should this render target have a stencil buffer?

***

### width?

> `optional` **width**: `number`

the width of the RenderTarget
