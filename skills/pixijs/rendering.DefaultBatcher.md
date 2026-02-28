# Class: DefaultBatcher

**`Advanced`**

The default batcher is used to batch quads and meshes. This batcher will batch the following elements:
- tints
- roundPixels
- texture
- transform

## Extends

- [`Batcher`](rendering.Batcher.md)

## Constructors

### Constructor

> **new DefaultBatcher**(`options`): `DefaultBatcher`

#### Parameters

##### options

[`BatcherOptions`](rendering.BatcherOptions.md)

#### Returns

`DefaultBatcher`

#### Overrides

[`Batcher`](rendering.Batcher.md).[`constructor`](rendering.Batcher.html#constructor)

## Properties

### attributeBuffer

> **attributeBuffer**: [`ViewableBuffer`](utils.ViewableBuffer.md)

The buffer containing attribute data for all elements in the batch.

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`attributeBuffer`](rendering.Batcher.html#attributebuffer)

***

### attributeSize

> **attributeSize**: `number`

The current size of the attribute data in the batch.

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`attributeSize`](rendering.Batcher.html#attributesize)

***

### batches

> **batches**: [`Batch`](rendering.Batch.md)[] = `[]`

An array of all batches created during the current rendering process.

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`batches`](rendering.Batcher.html#batches)

***

### batchIndex

> **batchIndex**: `number` = `0`

The current index of the batch being processed.

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`batchIndex`](rendering.Batcher.html#batchindex)

***

### dirty

> **dirty**: `boolean` = `true`

Indicates whether the batch data has been modified and needs updating.

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`dirty`](rendering.Batcher.html#dirty)

***

### elementSize

> **elementSize**: `number`

The total number of elements currently in the batch.

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`elementSize`](rendering.Batcher.html#elementsize)

***

### elementStart

> **elementStart**: `number`

The starting index of elements in the current batch.

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`elementStart`](rendering.Batcher.html#elementstart)

***

### geometry

> **geometry**: [`BatchGeometry`](rendering.BatchGeometry.md)

The geometry used by this batcher. Must be implemented by subclasses.

#### Overrides

[`Batcher`](rendering.Batcher.md).[`geometry`](rendering.Batcher.html#geometry)

***

### indexBuffer

> **indexBuffer**: [`IndexBufferArray`](rendering.IndexBufferArray.md)

The buffer containing index data for all elements in the batch.

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`indexBuffer`](rendering.Batcher.html#indexbuffer)

***

### indexSize

> **indexSize**: `number`

The current size of the index data in the batch.

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`indexSize`](rendering.Batcher.html#indexsize)

***

### maxTextures

> `readonly` **maxTextures**: `number`

The maximum number of textures per batch.

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`maxTextures`](rendering.Batcher.html#maxtextures)

***

### name

> **name**: `"default"` = `DefaultBatcher.extension.name`

The name of the batcher. Must be implemented by subclasses.

#### Overrides

[`Batcher`](rendering.Batcher.md).[`name`](rendering.Batcher.html#name)

***

### shader

> **shader**: [`DefaultShader`](rendering.DefaultShader.md)

The shader used by this batcher. Must be implemented by subclasses.
this can be shared by multiple batchers of the same type.

#### Overrides

[`Batcher`](rendering.Batcher.md).[`shader`](rendering.Batcher.html#shader)

***

### uid

> `readonly` **uid**: `number`

unique id for this batcher

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`uid`](rendering.Batcher.html#uid)

***

### vertexSize

> **vertexSize**: `number` = `6`

The size of one attribute. 1 = 32 bit. x, y, u, v, color, textureIdAndRound -> total = 6

#### Overrides

`Batcher.vertexSize`

***

### defaultOptions

> `static` **defaultOptions**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`BatcherOptions`](rendering.BatcherOptions.md)\>

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`defaultOptions`](rendering.Batcher.html#defaultoptions)

## Methods

### add()

> **add**(`batchableObject`): `void`

#### Parameters

##### batchableObject

[`BatchableElement`](rendering.BatchableElement.md)

#### Returns

`void`

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`add`](rendering.Batcher.html#add)

***

### begin()

> **begin**(): `void`

#### Returns

`void`

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`begin`](rendering.Batcher.html#begin)

***

### break()

> **break**(`instructionSet`): `void`

breaks the batcher. This happens when a batch gets too big,
or we need to switch to a different type of rendering (a filter for example)

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

#### Returns

`void`

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`break`](rendering.Batcher.html#break)

***

### checkAndUpdateTexture()

> **checkAndUpdateTexture**(`batchableObject`, `texture`): `boolean`

#### Parameters

##### batchableObject

[`BatchableElement`](rendering.BatchableElement.md)

##### texture

[`Texture`](rendering.Texture.md)

#### Returns

`boolean`

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`checkAndUpdateTexture`](rendering.Batcher.html#checkandupdatetexture)

***

### destroy()

> **destroy**(): `void`

Destroys the batch and its resources.

#### Returns

`void`

#### Overrides

[`Batcher`](rendering.Batcher.md).[`destroy`](rendering.Batcher.html#destroy)

***

### ensureAttributeBuffer()

> **ensureAttributeBuffer**(`size`): `void`

Resizes the attribute buffer to the given size (1 = 1 float32)

#### Parameters

##### size

`number`

the size in vertices to ensure (not bytes!)

#### Returns

`void`

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`ensureAttributeBuffer`](rendering.Batcher.html#ensureattributebuffer)

***

### ensureIndexBuffer()

> **ensureIndexBuffer**(`size`): `void`

Resizes the index buffer to the given size (1 = 1 float32)

#### Parameters

##### size

`number`

the size in vertices to ensure (not bytes!)

#### Returns

`void`

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`ensureIndexBuffer`](rendering.Batcher.html#ensureindexbuffer)

***

### finish()

> **finish**(`instructionSet`): `void`

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

#### Returns

`void`

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`finish`](rendering.Batcher.html#finish)

***

### packAttributes()

> **packAttributes**(`element`, `float32View`, `uint32View`, `index`, `textureId`): `void`

Packs the attributes of a DefaultBatchableMeshElement into the provided views.

#### Parameters

##### element

[`DefaultBatchableMeshElement`](rendering.DefaultBatchableMeshElement.md)

The DefaultBatchableMeshElement to pack.

##### float32View

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

The Float32Array view to pack into.

##### uint32View

[`Uint32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)

The Uint32Array view to pack into.

##### index

`number`

The starting index in the views.

##### textureId

`number`

The texture ID to use.

#### Returns

`void`

#### Overrides

[`Batcher`](rendering.Batcher.md).[`packAttributes`](rendering.Batcher.html#packattributes)

***

### packIndex()

> **packIndex**(`element`, `indexBuffer`, `index`, `indicesOffset`): `void`

#### Parameters

##### element

[`BatchableMeshElement`](rendering.BatchableMeshElement.md)

##### indexBuffer

[`IndexBufferArray`](rendering.IndexBufferArray.md)

##### index

`number`

##### indicesOffset

`number`

#### Returns

`void`

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`packIndex`](rendering.Batcher.html#packindex)

***

### packQuadAttributes()

> **packQuadAttributes**(`element`, `float32View`, `uint32View`, `index`, `textureId`): `void`

Packs the attributes of a DefaultBatchableQuadElement into the provided views.

#### Parameters

##### element

[`DefaultBatchableQuadElement`](rendering.DefaultBatchableQuadElement.md)

The DefaultBatchableQuadElement to pack.

##### float32View

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

The Float32Array view to pack into.

##### uint32View

[`Uint32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)

The Uint32Array view to pack into.

##### index

`number`

The starting index in the views.

##### textureId

`number`

The texture ID to use.

#### Returns

`void`

#### Overrides

[`Batcher`](rendering.Batcher.md).[`packQuadAttributes`](rendering.Batcher.html#packquadattributes)

***

### packQuadIndex()

> **packQuadIndex**(`indexBuffer`, `index`, `indicesOffset`): `void`

#### Parameters

##### indexBuffer

[`IndexBufferArray`](rendering.IndexBufferArray.md)

##### index

`number`

##### indicesOffset

`number`

#### Returns

`void`

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`packQuadIndex`](rendering.Batcher.html#packquadindex)

***

### updateElement()

> **updateElement**(`batchableObject`): `void`

#### Parameters

##### batchableObject

[`BatchableElement`](rendering.BatchableElement.md)

#### Returns

`void`

#### Inherited from

[`Batcher`](rendering.Batcher.md).[`updateElement`](rendering.Batcher.html#updateelement)
