# Abstract Class: Batcher

**`Advanced`**

A batcher is used to batch together objects with the same texture.
It is an abstract class that must be extended. see DefaultBatcher for an example.

## Extended by

- [`DefaultBatcher`](rendering.DefaultBatcher.md)

## Constructors

### Constructor

> **new Batcher**(`options`): `Batcher`

#### Parameters

##### options

[`BatcherOptions`](rendering.BatcherOptions.md)

#### Returns

`Batcher`

## Properties

### attributeBuffer

> **attributeBuffer**: [`ViewableBuffer`](utils.ViewableBuffer.md)

The buffer containing attribute data for all elements in the batch.

***

### attributeSize

> **attributeSize**: `number`

The current size of the attribute data in the batch.

***

### batches

> **batches**: [`Batch`](rendering.Batch.md)[] = `[]`

An array of all batches created during the current rendering process.

***

### batchIndex

> **batchIndex**: `number` = `0`

The current index of the batch being processed.

***

### dirty

> **dirty**: `boolean` = `true`

Indicates whether the batch data has been modified and needs updating.

***

### elementSize

> **elementSize**: `number`

The total number of elements currently in the batch.

***

### elementStart

> **elementStart**: `number`

The starting index of elements in the current batch.

***

### geometry

> `abstract` **geometry**: [`Geometry`](rendering.Geometry.md)

The geometry used by this batcher. Must be implemented by subclasses.

***

### indexBuffer

> **indexBuffer**: [`IndexBufferArray`](rendering.IndexBufferArray.md)

The buffer containing index data for all elements in the batch.

***

### indexSize

> **indexSize**: `number`

The current size of the index data in the batch.

***

### maxTextures

> `readonly` **maxTextures**: `number`

The maximum number of textures per batch.

***

### name

> `abstract` **name**: `string`

The name of the batcher. Must be implemented by subclasses.

***

### shader

> `abstract` **shader**: [`Shader`](rendering.Shader.md)

The shader used by this batcher. Must be implemented by subclasses.
this can be shared by multiple batchers of the same type.

***

### uid

> `readonly` **uid**: `number`

unique id for this batcher

***

### defaultOptions

> `static` **defaultOptions**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`BatcherOptions`](rendering.BatcherOptions.md)\>

## Methods

### add()

> **add**(`batchableObject`): `void`

#### Parameters

##### batchableObject

[`BatchableElement`](rendering.BatchableElement.md)

#### Returns

`void`

***

### begin()

> **begin**(): `void`

#### Returns

`void`

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

***

### destroy()

> **destroy**(`options`): `void`

Destroys the batch and its resources.

#### Parameters

##### options

destruction options

###### shader?

`boolean`

whether to destroy the associated shader

#### Returns

`void`

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

***

### finish()

> **finish**(`instructionSet`): `void`

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

#### Returns

`void`

***

### packAttributes()

> `abstract` **packAttributes**(`element`, `float32View`, `uint32View`, `index`, `textureId`): `void`

Packs the attributes of a BatchableMeshElement into the provided views.
Must be implemented by subclasses.

#### Parameters

##### element

[`BatchableMeshElement`](rendering.BatchableMeshElement.md)

The BatchableMeshElement to pack.

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

***

### packQuadAttributes()

> `abstract` **packQuadAttributes**(`element`, `float32View`, `uint32View`, `index`, `textureId`): `void`

Packs the attributes of a BatchableQuadElement into the provided views.
Must be implemented by subclasses.

#### Parameters

##### element

[`BatchableQuadElement`](rendering.BatchableQuadElement.md)

The BatchableQuadElement to pack.

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

***

### updateElement()

> **updateElement**(`batchableObject`): `void`

#### Parameters

##### batchableObject

[`BatchableElement`](rendering.BatchableElement.md)

#### Returns

`void`
