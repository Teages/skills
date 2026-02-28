# Class: GlBufferSystem

**`Advanced`**

System plugin to the renderer to manage buffers.

WebGL uses Buffers as a way to store objects to the GPU.
This system makes working with them a lot easier.

Buffers are used in three main places in WebGL
- geometry information
- Uniform information (via uniform buffer objects - a WebGL 2 only feature)
- Transform feedback information. (WebGL 2 only feature)

This system will handle the binding of buffers to the GPU as well as uploading
them. With this system, you never need to work directly with GPU buffers, but instead work with
the Buffer class.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GlBufferSystem**(`renderer`): `GlBufferSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

The renderer this System works for.

#### Returns

`GlBufferSystem`

## Methods

### bind()

> **bind**(`buffer`): `void`

This binds specified buffer. On first run, it will create the webGL buffers for the context too

#### Parameters

##### buffer

[`Buffer`](rendering.Buffer.md)

the buffer to bind to the renderer

#### Returns

`void`

***

### bindBufferBase()

> **bindBufferBase**(`glBuffer`, `index`): `void`

Binds an uniform buffer to at the given index.

A cache is used so a buffer will not be bound again if already bound.

#### Parameters

##### glBuffer

`GlBuffer`

the buffer to bind

##### index

`number`

the base index to bind it to.

#### Returns

`void`

***

### bindBufferRange()

> **bindBufferRange**(`glBuffer`, `index?`, `offset?`, `size?`): `void`

Binds a buffer whilst also binding its range.
This will make the buffer start from the offset supplied rather than 0 when it is read.

#### Parameters

##### glBuffer

`GlBuffer`

the buffer to bind

##### index?

`number`

the base index to bind at, defaults to 0

##### offset?

`number`

the offset to bind at (this is blocks of 256). 0 = 0, 1 = 256, 2 = 512 etc

##### size?

`number`

the size to bind at (this is blocks of 256).

#### Returns

`void`

***

### destroyAll()

> **destroyAll**(`contextLost`): `void`

dispose all WebGL resources of all managed buffers

#### Parameters

##### contextLost

`boolean` = `false`

#### Returns

`void`

***

### freeLocationForBufferBase()

> **freeLocationForBufferBase**(`glBuffer`): `number`

#### Parameters

##### glBuffer

`GlBuffer`

#### Returns

`number`

***

### getGlBuffer()

> **getGlBuffer**(`buffer`): `GlBuffer`

#### Parameters

##### buffer

[`Buffer`](rendering.Buffer.md)

#### Returns

`GlBuffer`

***

### getLastBindBaseLocation()

> **getLastBindBaseLocation**(`glBuffer`): `number`

#### Parameters

##### glBuffer

`GlBuffer`

#### Returns

`number`

***

### nextBindBase()

> **nextBindBase**(`hasTransformFeedback`): `void`

#### Parameters

##### hasTransformFeedback

`boolean`

#### Returns

`void`

***

### resetState()

> **resetState**(): `void`

#### Returns

`void`

***

### updateBuffer()

> **updateBuffer**(`buffer`): `GlBuffer`

Will ensure the data in the buffer is uploaded to the GPU.

#### Parameters

##### buffer

[`Buffer`](rendering.Buffer.md)

the buffer to update

#### Returns

`GlBuffer`
