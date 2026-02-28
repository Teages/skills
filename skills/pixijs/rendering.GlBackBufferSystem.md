# Class: GlBackBufferSystem

**`Advanced`**

For blend modes you need to know what pixels you are actually drawing to. For this to be possible in WebGL
we need to render to a texture and then present that texture to the screen. This system manages that process.

As the main scene is rendered to a texture, it means we can sample it and copy its pixels,
something not possible on the main canvas.

If antialiasing is set to to true and useBackBuffer is set to true, then the back buffer will be antialiased.
and the main gl context will not.

You only need to activate this back buffer if you are using a blend mode that requires it.

to activate is simple, you pass `useBackBuffer:true` to your render options

## Implements

- [`System`](rendering.System.md)\<[`GlBackBufferOptions`](rendering.GlBackBufferOptions.md)\>

## Constructors

### Constructor

> **new GlBackBufferSystem**(`renderer`): `GlBackBufferSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

#### Returns

`GlBackBufferSystem`

## Properties

### useBackBuffer

> **useBackBuffer**: `boolean` = `false`

if true, the back buffer is used

***

### defaultOptions

> `static` **defaultOptions**: [`GlBackBufferOptions`](rendering.GlBackBufferOptions.md)

default options for the back buffer system

## Methods

### destroy()

> **destroy**(): `void`

destroys the back buffer

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### init()

> **init**(`options`): `void`

#### Parameters

##### options

[`GlBackBufferOptions`](rendering.GlBackBufferOptions.md) = `{}`

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)
