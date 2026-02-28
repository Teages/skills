# Interface: SpritesheetFrameData

**`Advanced`**

Represents the JSON data for a spritesheet atlas.

## Properties

### anchor?

> `optional` **anchor**: [`PointData`](maths.PointData.md)

The anchor point of the texture.

***

### borders?

> `optional` **borders**: [`TextureBorders`](rendering.TextureBorders.md)

The 9-slice borders of the texture.

***

### frame

> **frame**: `object`

The frame rectangle of the texture.

#### h

> **h**: `number`

#### w

> **w**: `number`

#### x

> **x**: `number`

#### y

> **y**: `number`

***

### rotated?

> `optional` **rotated**: `boolean`

Whether the texture is rotated.

***

### sourceSize?

> `optional` **sourceSize**: `object`

The source size of the texture.

#### h

> **h**: `number`

#### w

> **w**: `number`

***

### spriteSourceSize?

> `optional` **spriteSourceSize**: `object`

The sprite source size.

#### h?

> `optional` **h**: `number`

#### w?

> `optional` **w**: `number`

#### x

> **x**: `number`

#### y

> **y**: `number`

***

### trimmed?

> `optional` **trimmed**: `boolean`

Whether the texture is trimmed.
