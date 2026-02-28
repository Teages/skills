# Class: BufferResource

**`Advanced`**

A resource that can be bound to a bind group and used in a shader.
Whilst a buffer can be used as a resource, this class allows you to specify an offset and size of the buffer to use.
This is useful if you have a large buffer and only part of it is used in a shader.

This resource, will listen for changes on the underlying buffer and emit a itself if the buffer changes shape.

## Example

```ts
const buffer = new Buffer({
    data: new Float32Array(1000),
   usage: BufferUsage.UNIFORM,
});
// Create a buffer resource that uses the first 100 bytes of a buffer
const bufferResource = new BufferResource({
   buffer,
   offset: 0,
   size: 100,
});
```

## Extends

- `EventEmitter`\<\{ `change`: [`BindResource`](rendering.BindResource.md); \}\>

## Implements

- [`BindResource`](rendering.BindResource.md)

## Constructors

### Constructor

> **new BufferResource**(`options`): `BufferResource`

Create a new Buffer Resource.

#### Parameters

##### options

The options for the buffer resource

###### buffer

[`Buffer`](rendering.Buffer.md)

The underlying buffer that this resource is using

###### offset?

`number`

The offset of the buffer this resource is using.
If not provided, then it will use the offset of the buffer.

###### size?

`number`

The size of the buffer this resource is using.
If not provided, then it will use the size of the buffer.

#### Returns

`BufferResource`

#### Overrides

`EventEmitter<{ change: BindResource, }>.constructor`

## Properties

### buffer

> **buffer**: [`Buffer`](rendering.Buffer.md)

the underlying buffer that this resource is using

***

### destroyed

> `readonly` **destroyed**: `boolean` = `false`

Has the Buffer resource been destroyed?

#### Implementation of

`BindResource.destroyed`

***

### offset

> `readonly` **offset**: `number`

the offset of the buffer this resource is using. If not provided, then it will use the offset of the buffer.

***

### size

> `readonly` **size**: `number`

the size of the buffer this resource is using. If not provided, then it will use the size of the buffer.

***

### uid

> `readonly` **uid**: `number`

a unique id for this uniform group used through the renderer

## Methods

### destroy()

> **destroy**(`destroyBuffer`): `void`

Destroys this resource. Make sure the underlying buffer is not used anywhere else
if you want to destroy it as well, or code will explode

#### Parameters

##### destroyBuffer

`boolean` = `false`

Should the underlying buffer be destroyed as well?

#### Returns

`void`
