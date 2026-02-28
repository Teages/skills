# Class: PlaneGeometry

**`Advanced`**

The PlaneGeometry allows you to draw a 2d plane

## Extends

- [`MeshGeometry`](scene.MeshGeometry.md)

## Extended by

- [`PerspectivePlaneGeometry`](scene.PerspectivePlaneGeometry.md)
- [`NineSliceGeometry`](scene.NineSliceGeometry.md)

## Constructors

### Constructor

> **new PlaneGeometry**(`options`): `PlaneGeometry`

#### Parameters

##### options

[`PlaneGeometryOptions`](scene.PlaneGeometryOptions.md)

Options to be applied to plane geometry

#### Returns

`PlaneGeometry`

#### Overrides

[`MeshGeometry`](scene.MeshGeometry.md).[`constructor`](scene.MeshGeometry.html#constructor)

### Constructor

> **new PlaneGeometry**(`width?`, `height?`, `verticesX?`, `verticesY?`): `PlaneGeometry`

#### Parameters

##### width?

`number`

##### height?

`number`

##### verticesX?

`number`

##### verticesY?

`number`

#### Returns

`PlaneGeometry`

#### Deprecated

since 8.0.0

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

### height

> **height**: `number`

The height of plane

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

### verticesX

> **verticesX**: `number`

The number of vertices on x-axis

***

### verticesY

> **verticesY**: `number`

The number of vertices on y-axis

***

### width

> **width**: `number`

The width of plane

***

### defaultOptions

> `static` **defaultOptions**: [`PlaneGeometryOptions`](scene.PlaneGeometryOptions.md) & [`MeshGeometryOptions`](scene.MeshGeometryOptions.md)

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

### build()

> **build**(`options`): `void`

Refreshes plane coordinates

#### Parameters

##### options

[`PlaneGeometryOptions`](scene.PlaneGeometryOptions.md)

Options to be applied to plane geometry

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
