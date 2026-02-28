# Class: NineSliceGeometry

**`Advanced`**

The NineSliceGeometry class allows you to create a NineSlicePlane object.

## Extends

- [`PlaneGeometry`](scene.PlaneGeometry.md)

## Constructors

### Constructor

> **new NineSliceGeometry**(`options`): `NineSliceGeometry`

#### Parameters

##### options

[`NineSliceGeometryOptions`](scene.NineSliceGeometryOptions.md) = `{}`

#### Returns

`NineSliceGeometry`

#### Overrides

[`PlaneGeometry`](scene.PlaneGeometry.md).[`constructor`](scene.PlaneGeometry.html#constructor)

## Properties

### attributes

> `readonly` **attributes**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Attribute`](rendering.Attribute.md)\>

A record of the attributes of the geometry.

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`attributes`](scene.PlaneGeometry.html#attributes)

***

### autoGarbageCollect

> **autoGarbageCollect**: `boolean` = `true`

If set to true, the resource will be garbage collected automatically when it is not used.

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`autoGarbageCollect`](scene.PlaneGeometry.html#autogarbagecollect)

***

### batchMode

> **batchMode**: [`BatchMode`](scene.BatchMode.md) = `'auto'`

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`batchMode`](scene.PlaneGeometry.html#batchmode)

***

### buffers

> `readonly` **buffers**: [`Buffer`](rendering.Buffer.md)[]

The buffers that the attributes use

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`buffers`](scene.PlaneGeometry.html#buffers)

***

### height

> **height**: `number`

The height of plane

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`height`](scene.PlaneGeometry.html#height)

***

### indexBuffer

> **indexBuffer**: [`Buffer`](rendering.Buffer.md)

The index buffer of the geometry

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`indexBuffer`](scene.PlaneGeometry.html#indexbuffer)

***

### instanceCount

> **instanceCount**: `number` = `1`

the instance count of the geometry to draw

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`instanceCount`](scene.PlaneGeometry.html#instancecount)

***

### topology

> **topology**: [`Topology`](rendering.Topology.md)

The topology of the geometry.

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`topology`](scene.PlaneGeometry.html#topology)

***

### uid

> `readonly` **uid**: `number`

The unique id of the geometry.

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`uid`](scene.PlaneGeometry.html#uid)

***

### verticesX

> **verticesX**: `number`

The number of vertices on x-axis

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`verticesX`](scene.PlaneGeometry.html#verticesx)

***

### verticesY

> **verticesY**: `number`

The number of vertices on y-axis

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`verticesY`](scene.PlaneGeometry.html#verticesy)

***

### width

> **width**: `number`

The width of plane

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`width`](scene.PlaneGeometry.html#width)

***

### defaultOptions

> `static` **defaultOptions**: [`NineSliceGeometryOptions`](scene.NineSliceGeometryOptions.md)

The default options for the NineSliceGeometry.

#### Overrides

[`PlaneGeometry`](scene.PlaneGeometry.md).[`defaultOptions`](scene.PlaneGeometry.html#defaultoptions)

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): [`Bounds`](rendering.Bounds.md)

Returns the bounds of the geometry.

##### Returns

[`Bounds`](rendering.Bounds.md)

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`bounds`](scene.PlaneGeometry.html#bounds)

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

[`PlaneGeometry`](scene.PlaneGeometry.md).[`indices`](scene.PlaneGeometry.html#indices)

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

[`PlaneGeometry`](scene.PlaneGeometry.md).[`positions`](scene.PlaneGeometry.html#positions)

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

[`PlaneGeometry`](scene.PlaneGeometry.md).[`uvs`](scene.PlaneGeometry.html#uvs)

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

[`PlaneGeometry`](scene.PlaneGeometry.md).[`addAttribute`](scene.PlaneGeometry.html#addattribute)

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

[`PlaneGeometry`](scene.PlaneGeometry.md).[`addIndex`](scene.PlaneGeometry.html#addindex)

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

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`build`](scene.PlaneGeometry.html#build)

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

[`PlaneGeometry`](scene.PlaneGeometry.md).[`destroy`](scene.PlaneGeometry.html#destroy)

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

[`PlaneGeometry`](scene.PlaneGeometry.md).[`getAttribute`](scene.PlaneGeometry.html#getattribute)

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

[`PlaneGeometry`](scene.PlaneGeometry.md).[`getBuffer`](scene.PlaneGeometry.html#getbuffer)

***

### getIndex()

> **getIndex**(): [`Buffer`](rendering.Buffer.md)

Returns the index buffer

#### Returns

[`Buffer`](rendering.Buffer.md)

- The index buffer.

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`getIndex`](scene.PlaneGeometry.html#getindex)

***

### getSize()

> **getSize**(): `number`

Used to figure out how many vertices there are in this geometry

#### Returns

`number`

the number of vertices in the geometry

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`getSize`](scene.PlaneGeometry.html#getsize)

***

### unload()

> **unload**(): `void`

Unloads the geometry from the GPU.

#### Returns

`void`

#### Inherited from

[`PlaneGeometry`](scene.PlaneGeometry.md).[`unload`](scene.PlaneGeometry.html#unload)

***

### update()

> **update**(`options`): `void`

Updates the NineSliceGeometry with the options.

#### Parameters

##### options

[`NineSliceGeometryOptions`](scene.NineSliceGeometryOptions.md)

The options of the NineSliceGeometry.

#### Returns

`void`

***

### updatePositions()

> **updatePositions**(): `void`

Updates the positions of the vertices.

#### Returns

`void`

***

### updateUvs()

> **updateUvs**(): `void`

Updates the UVs of the vertices.

#### Returns

`void`
