# Function: segmentIntersection()

> **segmentIntersection**\<`T`\>(`aStart`, `aEnd`, `bStart`, `bEnd`, `outPoint?`): `T`

**`Advanced`**

Computes the point where non-coincident and non-parallel segments intersect.
Coincident, parallel or non-intersecting segments return a `NaN` point `{x: NaN, y: NaN}`.
The intersection point must land inside the extents of the segments or return a `NaN` Point.

_Note: Only available with **pixi.js/math-extras**._

## Type Parameters

### T

`T` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

## Parameters

### aStart

[`PointData`](maths.PointData.md)

Starting point of the first segment.

### aEnd

[`PointData`](maths.PointData.md)

Ending point of the first segment.

### bStart

[`PointData`](maths.PointData.md)

Starting point of the second segment.

### bEnd

[`PointData`](maths.PointData.md)

Ending point of the second segment.

### outPoint?

`T`

A Point-like object in which to store the value,
optional (otherwise will create a new Point).

## Returns

`T`

The point where the segments intersect or a `NaN` Point.
