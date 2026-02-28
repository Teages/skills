# Interface: BoundsData

A simple axis-aligned bounding box (AABB) data structure used to define rectangular boundaries.
Provides a clearer alternative to array-based bounds representation [minX, minY, maxX, maxY].

## Example

```ts
// Create bounds data
const bounds: BoundsData = {
    minX: 0,
    minY: 0,
    maxX: 100,
    maxY: 100
};

// Calculate dimensions
const width = bounds.maxX - bounds.minX;
const height = bounds.maxY - bounds.minY;

// Check if point is inside
const isInside = (x: number, y: number) =>
    x >= bounds.minX && x <= bounds.maxX &&
    y >= bounds.minY && y <= bounds.maxY;
```

## See

 - [Bounds](rendering.Bounds.md) For full bounds implementation
 - [Container#getBounds](scene.Container.html#getbounds) For getting bounds

## Properties

### maxX

> **maxX**: `number`

The maximum X coordinate of the bounds

***

### maxY

> **maxY**: `number`

The maximum Y coordinate of the bounds

***

### minX

> **minX**: `number`

The minimum X coordinate of the bounds

***

### minY

> **minY**: `number`

The minimum Y coordinate of the bounds
