# Class: BatchGeometry

**`Advanced`**

This class represents a geometry used for batching in the rendering system.
It defines the structure of vertex attributes and index buffers for batched rendering.

## Extends

- [`Geometry`](rendering.Geometry.md)

## Constructors

### Constructor

> **new BatchGeometry**(): `BatchGeometry`

#### Returns

`BatchGeometry`

#### Overrides

[`Geometry`](rendering.Geometry.md).[`constructor`](rendering.Geometry.html#constructor)

## Properties

### attributes

> `readonly` **attributes**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Attribute`](rendering.Attribute.md)\>

A record of the attributes of the geometry.

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`attributes`](rendering.Geometry.html#attributes)

***

### autoGarbageCollect

> **autoGarbageCollect**: `boolean` = `true`

If set to true, the resource will be garbage collected automatically when it is not used.

#### Inherited from

[`NineSliceGeometry`](scene.NineSliceGeometry.md).[`autoGarbageCollect`](scene.NineSliceGeometry.html#autogarbagecollect)

***

### buffers

> `readonly` **buffers**: [`Buffer`](rendering.Buffer.md)[]

The buffers that the attributes use

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`buffers`](rendering.Geometry.html#buffers)

***

### indexBuffer

> **indexBuffer**: [`Buffer`](rendering.Buffer.md)

The index buffer of the geometry

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`indexBuffer`](rendering.Geometry.html#indexbuffer)

***

### instanceCount

> **instanceCount**: `number` = `1`

the instance count of the geometry to draw

#### Inherited from

[`NineSliceGeometry`](scene.NineSliceGeometry.md).[`instanceCount`](scene.NineSliceGeometry.html#instancecount)

***

### topology

> **topology**: [`Topology`](rendering.Topology.md)

The topology of the geometry.

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`topology`](rendering.Geometry.html#topology)

***

### uid

> `readonly` **uid**: `number`

The unique id of the geometry.

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`uid`](rendering.Geometry.html#uid)

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): [`Bounds`](rendering.Bounds.md)

Returns the bounds of the geometry.

##### Returns

[`Bounds`](rendering.Bounds.md)

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`bounds`](rendering.Geometry.html#bounds)

## Methods

### addAttribute()

> **addAttribute**(`name`, `attributeOption`): `void`

Adds an attribute to the geometry.

#### Parameters

##### name

`string`

The name of the attribute to add.

##### attributeOption

[`AttributeOption`](rendering.AttributeOption.md)

The attribute option to add.

#### Returns

`void`

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`addAttribute`](rendering.Geometry.html#addattribute)

***

### addIndex()

> **addIndex**(`indexBuffer`): `void`

Adds an index buffer to the geometry.

#### Parameters

##### indexBuffer

The index buffer to add. Can be a Buffer, TypedArray, or an array of numbers.

`number`[] | [`Buffer`](rendering.Buffer.md) | [`TypedArray`](rendering.TypedArray.md)

#### Returns

`void`

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`addIndex`](rendering.Geometry.html#addindex)

***

### destroy()

> **destroy**(`destroyBuffers`): `void`

destroys the geometry.

#### Parameters

##### destroyBuffers

`boolean` = `false`

destroy the buffers associated with this geometry

#### Returns

`void`

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`destroy`](rendering.Geometry.html#destroy)

***

### getAttribute()

> **getAttribute**(`id`): [`Attribute`](rendering.Attribute.md)

Returns the requested attribute.

#### Parameters

##### id

`string`

The name of the attribute required

#### Returns

[`Attribute`](rendering.Attribute.md)

- The attribute requested.

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`getAttribute`](rendering.Geometry.html#getattribute)

***

### getBuffer()

> **getBuffer**(`id`): [`Buffer`](rendering.Buffer.md)

Returns the requested buffer.

#### Parameters

##### id

`string`

The name of the buffer required.

#### Returns

[`Buffer`](rendering.Buffer.md)

- The buffer requested.

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`getBuffer`](rendering.Geometry.html#getbuffer)

***

### getIndex()

> **getIndex**(): [`Buffer`](rendering.Buffer.md)

Returns the index buffer

#### Returns

[`Buffer`](rendering.Buffer.md)

- The index buffer.

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`getIndex`](rendering.Geometry.html#getindex)

***

### getSize()

> **getSize**(): `number`

Used to figure out how many vertices there are in this geometry

#### Returns

`number`

the number of vertices in the geometry

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`getSize`](rendering.Geometry.html#getsize)

***

### unload()

> **unload**(): `void`

Unloads the geometry from the GPU.

#### Returns

`void`

#### Inherited from

[`Geometry`](rendering.Geometry.md).[`unload`](rendering.Geometry.html#unload)
