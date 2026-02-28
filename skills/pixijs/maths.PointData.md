# Interface: PointData

Common interface for points. Both Point and ObservablePoint implement it.
Provides a standard way to represent 2D coordinates.

Many PixiJS methods accept PointData for transformations,
making it easy to work with different point types interchangeably.

## Example

```ts
// Create an object implementing PointData
const point: PointData = { x: 100, y: 200 };

// Use with matrix transformations
const matrix = new Matrix();
matrix.translate(50, 50).apply(point);

// Mix with other point types
const observablePoint = new ObservablePoint(() => {}, null, 0, 0);
const regularPoint = new Point(0, 0);
// All are PointData compatible
```

## Remarks

- Basic x,y coordinate interface
- Used by Point and ObservablePoint

## See

 - [Point](maths.Point.md) For standard point implementation
 - [ObservablePoint](maths.ObservablePoint.md) For observable point implementation

## Extended by

- [`PointLike`](maths.PointLike.md)

## Properties

### x

> **x**: `number`

X coordinate

***

### y

> **y**: `number`

Y coordinate
