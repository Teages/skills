# Class: RopeGeometry

**`Advanced`**

RopeGeometry allows you to draw a geometry across several points and then manipulate these points.

## Example

```ts
import { Point, RopeGeometry } from 'pixi.js';

for (let i = 0; i < 20; i++) {
    points.push(new Point(i * 50, 0));
};
const rope = new RopeGeometry(100, points);
```

## Extends

- [`MeshGeometry`](scene.MeshGeometry.md)

## Constructors

### Constructor

> **new RopeGeometry**(`options`): `RopeGeometry`

#### Parameters

##### options

[`RopeGeometryOptions`](scene.RopeGeometryOptions.md)

Options to be applied to rope geometry

#### Returns

`RopeGeometry`

#### Overrides

[`MeshGeometry`](scene.MeshGeometry.md).[`constructor`](scene.MeshGeometry.html#constructor)

## Properties

### attributes

> `readonly` **attributes**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Attribute`](rendering.Attribute.md)\>

A record of the attributes of the geometry.

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`attributes`](scene.MeshGeometry.html#attributes)

***

### autoGarbageCollect

> **autoGarbageCollect**: `boolean` = `true`

If set to true, the resource will be garbage collected automatically when it is not used.

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`autoGarbageCollect`](scene.MeshGeometry.html#autogarbagecollect)

***

### batchMode

> **batchMode**: [`BatchMode`](scene.BatchMode.md) = `'auto'`

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`batchMode`](scene.MeshGeometry.html#batchmode)

***

### buffers

> `readonly` **buffers**: [`Buffer`](rendering.Buffer.md)[]

The buffers that the attributes use

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`buffers`](scene.MeshGeometry.html#buffers)

***

### indexBuffer

> **indexBuffer**: [`Buffer`](rendering.Buffer.md)

The index buffer of the geometry

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`indexBuffer`](scene.MeshGeometry.html#indexbuffer)

***

### instanceCount

> **instanceCount**: `number` = `1`

the instance count of the geometry to draw

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`instanceCount`](scene.MeshGeometry.html#instancecount)

***

### points

> **points**: [`PointData`](maths.PointData.md)[]

An array of points that determine the rope.

***

### textureScale

> `readonly` **textureScale**: `number`

Rope texture scale, if zero then the rope texture is stretched.

***

### topology

> **topology**: [`Topology`](rendering.Topology.md)

The topology of the geometry.

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`topology`](scene.MeshGeometry.html#topology)

***

### uid

> `readonly` **uid**: `number`

The unique id of the geometry.

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`uid`](scene.MeshGeometry.html#uid)

***

### defaultOptions

> `static` **defaultOptions**: [`RopeGeometryOptions`](scene.RopeGeometryOptions.md) & [`MeshGeometryOptions`](scene.MeshGeometryOptions.md)

Default options for RopeGeometry constructor.

#### Overrides

[`MeshGeometry`](scene.MeshGeometry.md).[`defaultOptions`](scene.MeshGeometry.html#defaultoptions)

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): [`Bounds`](rendering.Bounds.md)

Returns the bounds of the geometry.

##### Returns

[`Bounds`](rendering.Bounds.md)

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`bounds`](scene.MeshGeometry.html#bounds)

***

### indices

#### Get Signature

> **get** **indices**(): [`Uint32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)

The indices of the mesh.

##### Returns

[`Uint32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)

#### Set Signature

> **set** **indices**(`value`): `void`

##### Parameters

###### value

[`Uint32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)

##### Returns

`void`

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`indices`](scene.MeshGeometry.html#indices)

***

### positions

#### Get Signature

> **get** **positions**(): [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

The positions of the mesh.

##### Returns

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

#### Set Signature

> **set** **positions**(`value`): `void`

Set the positions of the mesh.
When setting the positions, its important that the uvs array is at least as long as the positions array.
otherwise the geometry will not be valid.

##### Parameters

###### value

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

The positions of the mesh.

##### Returns

`void`

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`positions`](scene.MeshGeometry.html#positions)

***

### uvs

#### Get Signature

> **get** **uvs**(): [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

The UVs of the mesh.

##### Returns

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

#### Set Signature

> **set** **uvs**(`value`): `void`

Set the UVs of the mesh.
Its important that the uvs array you set is at least as long as the positions array.
otherwise the geometry will not be valid.

##### Parameters

###### value

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

The UVs of the mesh.

##### Returns

`void`

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`uvs`](scene.MeshGeometry.html#uvs)

***

### width

#### Get Signature

> **get** **width**(): `number`

The width (i.e., thickness) of the rope.

##### Returns

`number`

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

[`MeshGeometry`](scene.MeshGeometry.md).[`addAttribute`](scene.MeshGeometry.html#addattribute)

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

[`MeshGeometry`](scene.MeshGeometry.md).[`addIndex`](scene.MeshGeometry.html#addindex)

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

[`MeshGeometry`](scene.MeshGeometry.md).[`destroy`](scene.MeshGeometry.html#destroy)

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

[`MeshGeometry`](scene.MeshGeometry.md).[`getAttribute`](scene.MeshGeometry.html#getattribute)

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

[`MeshGeometry`](scene.MeshGeometry.md).[`getBuffer`](scene.MeshGeometry.html#getbuffer)

***

### getIndex()

> **getIndex**(): [`Buffer`](rendering.Buffer.md)

Returns the index buffer

#### Returns

[`Buffer`](rendering.Buffer.md)

- The index buffer.

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`getIndex`](scene.MeshGeometry.html#getindex)

***

### getSize()

> **getSize**(): `number`

Used to figure out how many vertices there are in this geometry

#### Returns

`number`

the number of vertices in the geometry

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`getSize`](scene.MeshGeometry.html#getsize)

***

### unload()

> **unload**(): `void`

Unloads the geometry from the GPU.

#### Returns

`void`

#### Inherited from

[`MeshGeometry`](scene.MeshGeometry.md).[`unload`](scene.MeshGeometry.html#unload)

***

### update()

> **update**(): `void`

Refreshes Rope indices and uvs

#### Returns

`void`

***

### updateVertices()

> **updateVertices**(): `void`

refreshes vertices of Rope mesh

#### Returns

`void`
