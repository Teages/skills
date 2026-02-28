# Interface: BatchableMeshElement

**`Advanced`**

Represents a batchable mesh element.

## Extends

- [`BatchableElement`](rendering.BatchableElement.md)

## Extended by

- [`DefaultBatchableMeshElement`](rendering.DefaultBatchableMeshElement.md)

## Properties

### attributeOffset

> **attributeOffset**: `number`

The offset in the attribute buffer.

***

### attributeSize

> **attributeSize**: `number`

The size of the attribute data.

#### Inherited from

[`BatchableElement`](rendering.BatchableElement.md).[`attributeSize`](rendering.BatchableElement.html#attributesize)

***

### batcherName

> **batcherName**: `string`

The name of the batcher to use. Must be registered.

#### Inherited from

[`BatchableElement`](rendering.BatchableElement.md).[`batcherName`](rendering.BatchableElement.html#batchername)

***

### blendMode

> **blendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md)

The blend mode to be applied.

#### Inherited from

[`BatchableElement`](rendering.BatchableElement.md).[`blendMode`](rendering.BatchableElement.html#blendmode)

***

### indexOffset

> **indexOffset**: `number`

The offset in the index buffer.

***

### indexSize

> **indexSize**: `number`

The size of the index data.

#### Inherited from

[`BatchableElement`](rendering.BatchableElement.md).[`indexSize`](rendering.BatchableElement.html#indexsize)

***

### indices

> **indices**: `number`[] \| [`Uint16Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)\<`ArrayBufferLike`\> \| [`Uint32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)\<`ArrayBufferLike`\>

The indices of the mesh.

***

### packAsQuad

> **packAsQuad**: `false`

Indicates that this element should not be packed as a quad.

#### Overrides

[`BatchableElement`](rendering.BatchableElement.md).[`packAsQuad`](rendering.BatchableElement.html#packasquad)

***

### positions

> **positions**: `number`[] \| [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)\<`ArrayBufferLike`\>

The vertex positions of the mesh.

***

### texture

> **texture**: [`Texture`](rendering.Texture.md)

The texture to be used for rendering.

#### Inherited from

[`BatchableElement`](rendering.BatchableElement.md).[`texture`](rendering.BatchableElement.html#texture)

***

### topology

> **topology**: [`Topology`](rendering.Topology.md)

The topology to be used for rendering.

#### Inherited from

[`BatchableElement`](rendering.BatchableElement.md).[`topology`](rendering.BatchableElement.html#topology)

***

### uvs

> **uvs**: `number`[] \| [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)\<`ArrayBufferLike`\>

The UV coordinates of the mesh.
