# Interface: PointLike

Common interface for points with manipulation methods.

Extends PointData to add operations for copying, comparison and setting values.

## Example

```ts
// Basic point manipulation
const point: PointLike = new Point(10, 20);
point.set(30, 40);

// Copy between points
const other = new Point();
point.copyTo(other);

// Compare points
const same = point.equals(other); // true
```

## See

 - [PointData](maths.PointData.md) For basic x,y interface
 - [Point](maths.Point.md) For standard implementation
 - [ObservablePoint](maths.ObservablePoint.md) For observable implementation

## Extends

- [`PointData`](maths.PointData.md)

## Properties

### copyFrom()

> **copyFrom**: (`p`) => `this`

Copies x and y from the given point

#### Parameters

##### p

[`PointData`](maths.PointData.md)

The point to copy from

#### Returns

`this`

Returns itself.

#### Example

```ts
const point1: PointLike = new Point(10, 20);
const point2: PointLike = new Point(30, 40);
point1.copyFrom(point2);
console.log(point1.x, point1.y); // 30, 40
```

***

### copyTo()

> **copyTo**: \<`T`\>(`p`) => `T`

Copies x and y into the given point

#### Type Parameters

##### T

`T` *extends* `PointLike`

#### Parameters

##### p

`T`

The point to copy.

#### Returns

`T`

Given point with values updated

#### Example

```ts
const point1: PointLike = new Point(10, 20);
const point2: PointLike = new Point(0, 0);
point1.copyTo(point2);
console.log(point2.x, point2.y); // 10, 20
```

***

### equals()

> **equals**: (`p`) => `boolean`

Returns true if the given point is equal to this point

#### Parameters

##### p

[`PointData`](maths.PointData.md)

The point to check

#### Returns

`boolean`

Whether the given point equal to this point

#### Example

```ts
const point1: PointLike = new Point(10, 20);
const point2: PointLike = new Point(10, 20);
const point3: PointLike = new Point(30, 40);
console.log(point1.equals(point2)); // true
console.log(point1.equals(point3)); // false
```

***

### set()

> **set**: (`x?`, `y?`) => `void`

Sets the point to a new x and y position.
If y is omitted, both x and y will be set to x.

#### Parameters

##### x?

`number`

position of the point on the x axis

##### y?

`number`

position of the point on the y axis

#### Returns

`void`

#### Example

```ts
const point: PointLike = new Point(10, 20);
point.set(30, 40);
console.log(point.x, point.y); // 30, 40
point.set(50); // Sets both x and y to 50
console.log(point.x, point.y); // 50, 50
```

***

### x

> **x**: `number`

X coordinate

#### Inherited from

[`PointData`](maths.PointData.md).[`x`](maths.PointData.html#x)

***

### y

> **y**: `number`

Y coordinate

#### Inherited from

[`PointData`](maths.PointData.md).[`y`](maths.PointData.html#y)
