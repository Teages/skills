# Interface: DefaultBatchableQuadElement

**`Advanced`**

Represents a batchable quad element with default batch properties.

## Extends

- [`BatchableQuadElement`](rendering.BatchableQuadElement.md).[`DefaultBatchElements`](rendering.DefaultBatchElements.md)

## Properties

### attributeSize

> **attributeSize**: `4`

The size of the attribute data for this quad element.

#### Inherited from

[`BatchableQuadElement`](rendering.BatchableQuadElement.md).[`attributeSize`](rendering.BatchableQuadElement.html#attributesize)

***

### batcherName

> **batcherName**: `string`

The name of the batcher to use. Must be registered.

#### Inherited from

[`BatchableQuadElement`](rendering.BatchableQuadElement.md).[`batcherName`](rendering.BatchableQuadElement.html#batchername)

***

### blendMode

> **blendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md)

The blend mode to be applied.

#### Inherited from

[`BatchableQuadElement`](rendering.BatchableQuadElement.md).[`blendMode`](rendering.BatchableQuadElement.html#blendmode)

***

### bounds

> **bounds**: [`BoundsData`](rendering.BoundsData.md)

The bounds data for this quad element.

#### Inherited from

[`BatchableQuadElement`](rendering.BatchableQuadElement.md).[`bounds`](rendering.BatchableQuadElement.html#bounds)

***

### color

> **color**: `number`

The color of the element that will be multiplied with the texture color.
This is typically represented as a 32-bit integer in RGBA format.

#### Inherited from

[`DefaultBatchElements`](rendering.DefaultBatchElements.md).[`color`](rendering.DefaultBatchElements.html#color)

***

### indexSize

> **indexSize**: `6`

The size of the index data for this quad element.

#### Inherited from

[`BatchableQuadElement`](rendering.BatchableQuadElement.md).[`indexSize`](rendering.BatchableQuadElement.html#indexsize)

***

### packAsQuad

> **packAsQuad**: `true`

Indicates that this element should be packed as a quad.

#### Inherited from

[`BatchableQuadElement`](rendering.BatchableQuadElement.md).[`packAsQuad`](rendering.BatchableQuadElement.html#packasquad)

***

### roundPixels

> **roundPixels**: `0` \| `1`

Determines whether the element should be rounded to the nearest pixel.
- 0: No rounding (default)
- 1: Round to nearest pixel
This can help with visual consistency, especially for pixel art styles.

#### Inherited from

[`DefaultBatchElements`](rendering.DefaultBatchElements.md).[`roundPixels`](rendering.DefaultBatchElements.html#roundpixels)

***

### texture

> **texture**: [`Texture`](rendering.Texture.md)

The texture to be used for rendering.

#### Inherited from

[`BatchableQuadElement`](rendering.BatchableQuadElement.md).[`texture`](rendering.BatchableQuadElement.html#texture)

***

### topology

> **topology**: [`Topology`](rendering.Topology.md)

The topology to be used for rendering.

#### Inherited from

[`BatchableQuadElement`](rendering.BatchableQuadElement.md).[`topology`](rendering.BatchableQuadElement.html#topology)

***

### transform

> **transform**: [`Matrix`](maths.Matrix.md)

The transform matrix of the element.
This matrix represents the position, scale, rotation, and skew of the element.

#### Inherited from

[`DefaultBatchElements`](rendering.DefaultBatchElements.md).[`transform`](rendering.DefaultBatchElements.html#transform)
