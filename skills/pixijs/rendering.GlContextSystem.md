# Class: GlContextSystem

**`Advanced`**

System plugin to the renderer to manage the context

## Implements

- [`System`](rendering.System.md)\<[`ContextSystemOptions`](rendering.ContextSystemOptions.md)\>

## Constructors

### Constructor

> **new GlContextSystem**(`renderer`): `GlContextSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

The renderer this System works for.

#### Returns

`GlContextSystem`

## Properties

### canvas

> `readonly` **canvas**: [`ICanvas`](environment.ICanvas.md)

The canvas that the WebGL Context is rendering to.
This will be the view canvas. But if multiView is enabled, this canvas will not be attached to the DOM.
It will be rendered to and then copied to the target canvas.

***

### extensions

> `readonly` **extensions**: [`WebGLExtensions`](rendering.WebGLExtensions.md)

Extensions available.

***

### multiView

> **multiView**: `boolean`

Whether to enable multi-view rendering. Set to true when rendering to multiple
canvases on the dom.

#### Default

```ts
false
```

***

### supports

> `readonly` **supports**: `object`

Features supported by current renderer.

#### msaa

> **msaa**: `boolean` = `true`

Support for MSAA (antialiasing of dynamic textures)

#### nonPowOf2mipmaps

> **nonPowOf2mipmaps**: `boolean` = `true`

Support for mipmaps if a texture is non-power of two

#### nonPowOf2wrapping

> **nonPowOf2wrapping**: `boolean` = `true`

Support for wrapping modes if a texture is non-power of two

#### srgbTextures

> **srgbTextures**: `boolean` = `true`

Support for SRGB texture format

#### uint32Indices

> **uint32Indices**: `boolean` = `true`

Support for 32-bit indices buffer.

#### uniformBufferObject

> **uniformBufferObject**: `boolean` = `true`

Support for UniformBufferObjects

#### vertexArrayObject

> **vertexArrayObject**: `boolean` = `true`

Support for VertexArrayObjects

***

### webGLVersion

> **webGLVersion**: `1` \| `2`

***

### defaultOptions

> `static` **defaultOptions**: [`ContextSystemOptions`](rendering.ContextSystemOptions.md)

The default options for the system.

## Accessors

### isLost

#### Get Signature

> **get** **isLost**(): `boolean`

`true` if the context is lost

##### Returns

`boolean`

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### ensureCanvasSize()

> **ensureCanvasSize**(`targetCanvas`): `void`

#### Parameters

##### targetCanvas

[`ICanvas`](environment.ICanvas.md)

#### Returns

`void`

***

### forceContextLoss()

> **forceContextLoss**(): `void`

this function can be called to force a webGL context loss
this will release all resources on the GPU.
Useful if you need to put Pixi to sleep, and save some GPU memory

As soon as render is called - all resources will be created again.

#### Returns

`void`

***

### init()

> **init**(`options`): `void`

#### Parameters

##### options

[`ContextSystemOptions`](rendering.ContextSystemOptions.md)

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)
