# Interface: DefaultBatchElements

**`Advanced`**

Represents the common elements for default batch rendering.
This interface defines the properties that are used by the DefaultBatcher
to render elements efficiently in a batch.

## Extended by

- [`DefaultBatchableQuadElement`](rendering.DefaultBatchableQuadElement.md)
- [`DefaultBatchableMeshElement`](rendering.DefaultBatchableMeshElement.md)

## Properties

### color

> **color**: `number`

The color of the element that will be multiplied with the texture color.
This is typically represented as a 32-bit integer in RGBA format.

***

### roundPixels

> **roundPixels**: `0` \| `1`

Determines whether the element should be rounded to the nearest pixel.
- 0: No rounding (default)
- 1: Round to nearest pixel
This can help with visual consistency, especially for pixel art styles.

***

### transform

> **transform**: [`Matrix`](maths.Matrix.md)

The transform matrix of the element.
This matrix represents the position, scale, rotation, and skew of the element.
