# Class: BatchTextureArray

**`Advanced`**

Used by the batcher to build texture batches. Holds list of textures and their respective locations.

## Constructors

### Constructor

> **new BatchTextureArray**(): `BatchTextureArray`

#### Returns

`BatchTextureArray`

## Properties

### count

> **count**: `number`

Number of filled elements.

***

### ids

> **ids**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`number`, `number`\>

Respective locations for textures.

***

### textures

> **textures**: [`TextureSource`](rendering.TextureSource.md)\<`any`\>[]

Inside textures array.

## Methods

### clear()

> **clear**(): `void`

Clear the textures and their locations.

#### Returns

`void`
