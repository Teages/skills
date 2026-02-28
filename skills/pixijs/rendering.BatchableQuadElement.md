# Interface: BatchableQuadElement

**`Advanced`**

Represents a batchable quad element.

## Extends

- [`BatchableElement`](rendering.BatchableElement.md)

## Extended by

- [`DefaultBatchableQuadElement`](rendering.DefaultBatchableQuadElement.md)

## Properties

### attributeSize

> **attributeSize**: `4`

The size of the attribute data for this quad element.

#### Overrides

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

### bounds

> **bounds**: [`BoundsData`](rendering.BoundsData.md)

The bounds data for this quad element.

***

### indexSize

> **indexSize**: `6`

The size of the index data for this quad element.

#### Overrides

[`BatchableElement`](rendering.BatchableElement.md).[`indexSize`](rendering.BatchableElement.html#indexsize)

***

### packAsQuad

> **packAsQuad**: `true`

Indicates that this element should be packed as a quad.

#### Overrides

[`BatchableElement`](rendering.BatchableElement.md).[`packAsQuad`](rendering.BatchableElement.html#packasquad)

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
