# Interface: NineSliceGeometryOptions

**`Advanced`**

Options for the NineSliceGeometry.

## Properties

### anchor?

> `optional` **anchor**: [`PointData`](maths.PointData.md)

The anchor point of the NineSliceSprite.

***

### bottomHeight?

> `optional` **bottomHeight**: `number`

The height of the bottom row.

***

### height?

> `optional` **height**: `number`

The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane.

***

### leftWidth?

> `optional` **leftWidth**: `number`

The width of the left column.

***

### originalHeight?

> `optional` **originalHeight**: `number`

The original height of the texture

***

### originalWidth?

> `optional` **originalWidth**: `number`

The original width of the texture

***

### rightWidth?

> `optional` **rightWidth**: `number`

The width of the right column.

***

### topHeight?

> `optional` **topHeight**: `number`

The height of the top row.

***

### trim?

> `optional` **trim**: `object`

The trim rectangle of the texture, describing the offset and size of the visible
pixel area within the original (unpadded) frame. When provided, UV coordinates are
clamped to the trimmed region so that transparent padding in the atlas does not
bleed into the rendered corners/edges.

#### height

> **height**: `number`

#### width

> **width**: `number`

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Default

```ts
null
```

***

### width?

> `optional` **width**: `number`

The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane.
