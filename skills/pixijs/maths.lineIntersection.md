# Function: lineIntersection()

> **lineIntersection**\<`T`\>(`aStart`, `aEnd`, `bStart`, `bEnd`, `outPoint?`): `T`

**`Advanced`**

Computes the point where non-coincident and non-parallel Lines intersect.
Coincident or parallel lines return a `NaN` point `{x: NaN, y: NaN}`.
The intersection point may land outside the extents of the lines.

_Note: Only available with **pixi.js/math-extras**._

## Type Parameters

### T

`T` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

## Parameters

### aStart

[`PointData`](maths.PointData.md)

First point of the first line.

### aEnd

[`PointData`](maths.PointData.md)

Second point of the first line.

### bStart

[`PointData`](maths.PointData.md)

First point of the second line.

### bEnd

[`PointData`](maths.PointData.md)

Second point of the second line.

### outPoint?

`T`

A Point-like object in which to store the value,
optional (otherwise will create a new Point).

## Returns

`T`

The point where the lines intersect or a `NaN` Point.
