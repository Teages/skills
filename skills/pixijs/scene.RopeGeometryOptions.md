# Interface: RopeGeometryOptions

**`Advanced`**

Constructor options used for `RopeGeometry` instances.
```js
const ropeGeometry = new RopeGeometry({
   points: [new Point(0, 0), new Point(100, 0)],
   width: 10,
   textureScale: 0,
});
```

## See

[RopeGeometry](scene.RopeGeometry.md)

## Properties

### points?

> `optional` **points**: [`PointData`](maths.PointData.md)[]

An array of points that determine the rope.

***

### textureScale?

> `optional` **textureScale**: `number`

Rope texture scale, if zero then the rope texture is stretched.
By default the rope texture will be stretched to match
rope length. If textureScale is positive this value will be treated as a scaling
factor and the texture will preserve its aspect ratio instead. To create a tiling rope
set baseTexture.wrapMode to 'repeat' and use a power of two texture,
then set textureScale=1 to keep the original texture pixel size.
In order to reduce alpha channel artifacts provide a larger texture and downsample -
i.e. set textureScale=0.5 to scale it down twice.

***

### width?

> `optional` **width**: `number`

The width (i.e., thickness) of the rope.
