# Interface: DefaultBatchableMeshElement

**`Advanced`**

Represents a batchable mesh element with default batch properties.

## Extends

- [`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`DefaultBatchElements`](rendering.DefaultBatchElements.md)

## Properties

### attributeOffset

> **attributeOffset**: `number`

The offset in the attribute buffer.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`attributeOffset`](rendering.BatchableMeshElement.html#attributeoffset)

***

### attributeSize

> **attributeSize**: `number`

The size of the attribute data.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`attributeSize`](rendering.BatchableMeshElement.html#attributesize)

***

### batcherName

> **batcherName**: `string`

The name of the batcher to use. Must be registered.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`batcherName`](rendering.BatchableMeshElement.html#batchername)

***

### blendMode

> **blendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md)

The blend mode to be applied.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`blendMode`](rendering.BatchableMeshElement.html#blendmode)

***

### color

> **color**: `number`

The color of the element that will be multiplied with the texture color.
This is typically represented as a 32-bit integer in RGBA format.

#### Inherited from

[`DefaultBatchElements`](rendering.DefaultBatchElements.md).[`color`](rendering.DefaultBatchElements.html#color)

***

### indexOffset

> **indexOffset**: `number`

The offset in the index buffer.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`indexOffset`](rendering.BatchableMeshElement.html#indexoffset)

***

### indexSize

> **indexSize**: `number`

The size of the index data.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`indexSize`](rendering.BatchableMeshElement.html#indexsize)

***

### indices

> **indices**: `number`[] \| [`Uint16Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)\<`ArrayBufferLike`\> \| [`Uint32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)\<`ArrayBufferLike`\>

The indices of the mesh.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`indices`](rendering.BatchableMeshElement.html#indices)

***

### packAsQuad

> **packAsQuad**: `false`

Indicates that this element should not be packed as a quad.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`packAsQuad`](rendering.BatchableMeshElement.html#packasquad)

***

### positions

> **positions**: `number`[] \| [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)\<`ArrayBufferLike`\>

The vertex positions of the mesh.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`positions`](rendering.BatchableMeshElement.html#positions)

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

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`texture`](rendering.BatchableMeshElement.html#texture)

***

### topology

> **topology**: [`Topology`](rendering.Topology.md)

The topology to be used for rendering.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`topology`](rendering.BatchableMeshElement.html#topology)

***

### transform

> **transform**: [`Matrix`](maths.Matrix.md)

The transform matrix of the element.
This matrix represents the position, scale, rotation, and skew of the element.

#### Inherited from

[`DefaultBatchElements`](rendering.DefaultBatchElements.md).[`transform`](rendering.DefaultBatchElements.html#transform)

***

### uvs

> **uvs**: `number`[] \| [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)\<`ArrayBufferLike`\>

The UV coordinates of the mesh.

#### Inherited from

[`BatchableMeshElement`](rendering.BatchableMeshElement.md).[`uvs`](rendering.BatchableMeshElement.html#uvs)
