# Class: Geometry

**`Advanced`**

A Geometry is a low-level object that represents the structure of 2D shapes in terms of vertices and attributes.
It's a crucial component for rendering as it describes the shape and format of the data that will go through the shaders.
Essentially, a Geometry object holds the data you'd send to a GPU buffer.

A geometry is basically made of two components:
<br>
<b>Attributes</b>: These are essentially arrays that define properties of the vertices like position, color,
texture coordinates, etc. They map directly to attributes in your vertex shaders.
<br>
<b>Indices</b>: An optional array that describes how the vertices are connected.
If not provided, vertices will be interpreted in the sequence they're given.

## Example

```ts
const geometry = new Geometry({
  attributes: {
    aPosition: [ // add some positions
      0, 0,
      0, 100,
      100, 100,
      100,   0,
    ],
    aUv: [ // add some uvs
      0, 0,
      0, 1,
      1, 1,
      1, 0,
    ]
  }
});
```

## Extends

- `EventEmitter`\<\{ `destroy`: `Geometry`; `unload`: `Geometry`; `update`: `Geometry`; \}\>

## Extended by

- [`BatchGeometry`](rendering.BatchGeometry.md)
- [`MeshGeometry`](scene.MeshGeometry.md)

## Implements

- [`GPUDataOwner`](rendering.GPUDataOwner.md)
- [`GCable`](rendering.GCable.md)

## Constructors

### Constructor

> **new Geometry**(`options`): `Geometry`

Create a new instance of a geometry

#### Parameters

##### options

[`GeometryDescriptor`](rendering.GeometryDescriptor.md) = `{}`

The options for the geometry.

#### Returns

`Geometry`

#### Overrides

`EventEmitter<{ update: Geometry, destroy: Geometry, unload: Geometry, }>.constructor`

## Properties

### attributes

> `readonly` **attributes**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Attribute`](rendering.Attribute.md)\>

A record of the attributes of the geometry.

***

### autoGarbageCollect

> **autoGarbageCollect**: `boolean` = `true`

If set to true, the resource will be garbage collected automatically when it is not used.

#### Implementation of

[`GCable`](rendering.GCable.md).[`autoGarbageCollect`](rendering.GCable.html#autogarbagecollect)

***

### buffers

> `readonly` **buffers**: [`Buffer`](rendering.Buffer.md)[]

The buffers that the attributes use

***

### indexBuffer

> **indexBuffer**: [`Buffer`](rendering.Buffer.md)

The index buffer of the geometry

***

### instanceCount

> **instanceCount**: `number` = `1`

the instance count of the geometry to draw

***

### topology

> **topology**: [`Topology`](rendering.Topology.md)

The topology of the geometry.

***

### uid

> `readonly` **uid**: `number`

The unique id of the geometry.

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): [`Bounds`](rendering.Bounds.md)

Returns the bounds of the geometry.

##### Returns

[`Bounds`](rendering.Bounds.md)

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

***

### getIndex()

> **getIndex**(): [`Buffer`](rendering.Buffer.md)

Returns the index buffer

#### Returns

[`Buffer`](rendering.Buffer.md)

- The index buffer.

***

### getSize()

> **getSize**(): `number`

Used to figure out how many vertices there are in this geometry

#### Returns

`number`

the number of vertices in the geometry

***

### unload()

> **unload**(): `void`

Unloads the geometry from the GPU.

#### Returns

`void`

#### Implementation of

[`GCable`](rendering.GCable.md).[`unload`](rendering.GCable.html#unload)
