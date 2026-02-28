# Interface: BatchableElement

**`Advanced`**

Represents an element that can be batched for rendering.

## Extended by

- [`BatchableQuadElement`](rendering.BatchableQuadElement.md)
- [`BatchableMeshElement`](rendering.BatchableMeshElement.md)

## Properties

### attributeSize

> **attributeSize**: `number`

The size of the attribute data.

***

### batcherName

> **batcherName**: `string`

The name of the batcher to use. Must be registered.

***

### blendMode

> **blendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md)

The blend mode to be applied.

***

### indexSize

> **indexSize**: `number`

The size of the index data.

***

### packAsQuad

> **packAsQuad**: `boolean`

Whether the element should be packed as a quad for better performance.

***

### texture

> **texture**: [`Texture`](rendering.Texture.md)

The texture to be used for rendering.

***

### topology

> **topology**: [`Topology`](rendering.Topology.md)

The topology to be used for rendering.
