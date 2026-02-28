# Class: Buffer

**`Advanced`**

A wrapper for a WebGPU/WebGL Buffer.
In PixiJS, the Buffer class is used to manage the data that is sent to the GPU rendering pipeline.
It abstracts away the underlying GPU buffer and provides an interface for uploading typed arrays or other data to the GPU,
They are used in the following places:
<br><br>
.1. [Geometry](rendering.Geometry.md) as attribute data or index data for geometry
<br>
.2. [UniformGroup](rendering.UniformGroup.md) as an underlying buffer for uniform data
<br>
.3. [BufferResource](rendering.BufferResource.md) as an underlying part of a buffer used directly by the GPU program
<br>

It is important to note that you must provide a usage type when creating a buffer. This is because
the underlying GPU buffer needs to know how it will be used. For example, if you are creating a buffer
to hold vertex data, you would use `BufferUsage.VERTEX`. This will tell the GPU that this buffer will be
used as a vertex buffer. This is important because it will affect how you can use the buffer.

Buffers are updated by calling the [Buffer.update](#update) method. This immediately updates the buffer on the GPU.
Be mindful of calling this more often than you need to. It is recommended to update buffers only when needed.

In WebGPU, a GPU buffer cannot resized. This limitation is abstracted away, but know that resizing a buffer means
creating a brand new one and destroying the old, so it is best to limit this if possible.

## Example

```ts
const buffer = new Buffer({
    data: new Float32Array([1, 2, 3, 4]),
    usage: BufferUsage.VERTEX,
});
```

## Extends

- `EventEmitter`\<\{ `change`: [`BindResource`](rendering.BindResource.md); `destroy`: `Buffer`; `unload`: `Buffer`; `update`: `Buffer`; \}\>

## Implements

- [`BindResource`](rendering.BindResource.md)
- [`GPUDataOwner`](rendering.GPUDataOwner.md)
- [`GCable`](rendering.GCable.md)

## Constructors

### Constructor

> **new Buffer**(`options`): `Buffer`

Creates a new Buffer with the given options

#### Parameters

##### options

[`BufferOptions`](rendering.BufferOptions.md)

the options for the buffer

#### Returns

`Buffer`

#### Overrides

`EventEmitter<{ change: BindResource, update: Buffer, destroy: Buffer, unload: Buffer, }>.constructor`

## Properties

### autoGarbageCollect

> **autoGarbageCollect**: `boolean` = `true`

If set to true, the buffer will be garbage collected automatically when it is not used.

#### Implementation of

[`GCable`](rendering.GCable.md).[`autoGarbageCollect`](rendering.GCable.html#autogarbagecollect)

***

### destroyed

> `readonly` **destroyed**: `boolean` = `false`

Has the buffer been destroyed?

#### Implementation of

`BindResource.destroyed`

***

### shrinkToFit

> **shrinkToFit**: `boolean` = `true`

should the GPU buffer be shrunk when the data becomes smaller?
changing this will cause the buffer to be destroyed and a new one created on the GPU
this can be expensive, especially if the buffer is already big enough!
setting this to false will prevent the buffer from being shrunk. This will yield better performance
if you are constantly setting data that is changing size often.

#### Default

```ts
true
```

***

### uid

> `readonly` **uid**: `number`

a unique id for this uniform group used through the renderer

## Accessors

### data

#### Get Signature

> **get** **data**(): [`TypedArray`](rendering.TypedArray.md)

the data in the buffer

##### Returns

[`TypedArray`](rendering.TypedArray.md)

#### Set Signature

> **set** **data**(`value`): `void`

##### Parameters

###### value

[`TypedArray`](rendering.TypedArray.md)

##### Returns

`void`

***

### dataInt32

#### Get Signature

> **get** **dataInt32**(): [`Int32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)\<`ArrayBufferLike`\>

##### Returns

[`Int32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)\<`ArrayBufferLike`\>

***

### static

#### Get Signature

> **get** **static**(): `boolean`

whether the buffer is static or not

##### Returns

`boolean`

#### Set Signature

> **set** **static**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### destroy()

> **destroy**(): `void`

Destroys the buffer

#### Returns

`void`

***

### setDataWithSize()

> **setDataWithSize**(`value`, `size`, `syncGPU`): `void`

Sets the data in the buffer to the given value. This will immediately update the buffer on the GPU.
If you only want to update a subset of the buffer, you can pass in the size of the data.

#### Parameters

##### value

[`TypedArray`](rendering.TypedArray.md)

the data to set

##### size

`number`

the size of the data in bytes

##### syncGPU

`boolean`

should the buffer be updated on the GPU immediately?

#### Returns

`void`

***

### unload()

> **unload**(): `void`

Unloads the buffer from the GPU

#### Returns

`void`

#### Implementation of

[`GCable`](rendering.GCable.md).[`unload`](rendering.GCable.html#unload)

***

### update()

> **update**(`sizeInBytes?`): `void`

updates the buffer on the GPU to reflect the data in the buffer.
By default it will update the entire buffer. If you only want to update a subset of the buffer,
you can pass in the size of the buffer to update.

#### Parameters

##### sizeInBytes?

`number`

the new size of the buffer in bytes

#### Returns

`void`
