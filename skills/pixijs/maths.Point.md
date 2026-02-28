# Class: Point

The Point object represents a location in a two-dimensional coordinate system, where `x` represents
the position on the horizontal axis and `y` represents the position on the vertical axis.

Many Pixi functions accept the `PointData` type as an alternative to `Point`,
which only requires `x` and `y` properties.

## Example

```ts
// Basic point creation
const point = new Point(100, 200);

// Using with transformations
const matrix = new Matrix();
matrix.translate(50, 50).apply(point);

// Point arithmetic
const start = new Point(0, 0);
const end = new Point(100, 100);
const middle = new Point(
    (start.x + end.x) / 2,
    (start.y + end.y) / 2
);
```

## See

 - [PointData](maths.PointData.md) For basic x,y interface
 - [PointLike](maths.PointLike.md) For point manipulation interface
 - [ObservablePoint](maths.ObservablePoint.md) For observable version

## Extends

- `Point`

## Implements

- [`PointLike`](maths.PointLike.md)

## Constructors

### Constructor

> **new Point**(`x?`, `y?`): `Point`

Creates a new `Point`

#### Parameters

##### x?

`number` = `0`

position of the point on the x axis

##### y?

`number` = `0`

position of the point on the y axis

#### Returns

`Point`

#### Inherited from

`PixiMixins.Point.constructor`

## Properties

### x

> **x**: `number` = `0`

Position of the point on the x axis

#### Example

```ts
// Set x position
const point = new Point();
point.x = 100;

// Use in calculations
const width = rightPoint.x - leftPoint.x;
```

#### Implementation of

[`PointLike`](maths.PointLike.md).[`x`](maths.PointLike.html#x)

***

### y

> **y**: `number` = `0`

Position of the point on the y axis

#### Example

```ts
// Set y position
const point = new Point();
point.y = 200;

// Use in calculations
const height = bottomPoint.y - topPoint.y;
```

#### Implementation of

[`PointLike`](maths.PointLike.md).[`y`](maths.PointLike.html#y)

## Accessors

### shared

#### Get Signature

> **get** `static` **shared**(): `Point`

A static Point object with `x` and `y` values of `0`.

This shared instance is reset to zero values when accessed.

> [!IMPORTANT] This point is shared and temporary. Do not store references to it.

##### Example

```ts
// Use for temporary calculations
const tempPoint = Point.shared;
tempPoint.set(100, 200);
matrix.apply(tempPoint);

// Will be reset to (0,0) on next access
const fresh = Point.shared; // x=0, y=0
```

##### See

 - [Object.constructor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) For creating new points
 - [PointData](maths.PointData.md) For basic point interface

##### Returns

`Point`

A fresh zeroed point for temporary use

## Methods

### add()

> **add**\<`T`\>(`other`, `outPoint?`): `T`

Adds `other` to `this` point and outputs into `outPoint` or a new Point.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = `Point`

#### Parameters

##### other

[`PointData`](maths.PointData.md)

The point to add to `this`

##### outPoint?

`T`

Optional Point-like object to store result

#### Returns

`T`

The outPoint or a new Point with addition result

#### Example

```ts
// Basic point addition
const point = new Point(10, 20);
const other = new Point(5, 10);
const result = point.add(other);
console.log(result); // Point(15, 30)

// Using output point for efficiency
const output = new Point();
point.add(other, output);
console.log(output); // Point(15, 30)

// Chain multiple additions
const final = point.add(other).add(new Point(2, 3));
```

#### See

 - [Point.subtract](#subtract) For point subtraction
 - [Point.multiply](#multiply) For point multiplication

#### Inherited from

`PixiMixins.Point.add`

***

### clone()

> **clone**(): `Point`

Creates a clone of this point, which is a new instance with the same `x` and `y` values.

#### Returns

`Point`

A clone of this point

#### Example

```ts
// Basic point cloning
const original = new Point(100, 200);
const copy = original.clone();

// Clone and modify
const modified = original.clone();
modified.set(300, 400);

// Verify independence
console.log(original); // Point(100, 200)
console.log(modified); // Point(300, 400)
```

#### Remarks

- Creates new Point instance
- Deep copies x and y values
- Independent from original
- Useful for preserving values

#### See

 - [Point.copyFrom](#copyfrom) For copying into existing point
 - [Point.copyTo](#copyto) For copying to existing point

***

### copyFrom()

> **copyFrom**(`p`): `this`

Copies x and y from the given point into this point.

#### Parameters

##### p

[`PointData`](maths.PointData.md)

The point to copy from

#### Returns

`this`

The point instance itself

#### Example

```ts
// Basic copying
const source = new Point(100, 200);
const target = new Point();
target.copyFrom(source);

// Copy and chain operations
const point = new Point()
    .copyFrom(source)
    .set(x + 50, y + 50);

// Copy from any PointData
const data = { x: 10, y: 20 };
point.copyFrom(data);
```

#### See

 - [Point.copyTo](#copyto) For copying to another point
 - [Point.clone](#clone) For creating new point copy

***

### copyTo()

> **copyTo**\<`T`\>(`p`): `T`

Copies this point's x and y into the given point.

#### Type Parameters

##### T

`T` *extends* [`PointLike`](maths.PointLike.md)

#### Parameters

##### p

`T`

The point to copy to. Can be any type that is or extends `PointLike`

#### Returns

`T`

The point (`p`) with values updated

#### Example

```ts
// Basic copying
const source = new Point(100, 200);
const target = new Point();
source.copyTo(target);
```

#### See

 - [Point.copyFrom](#copyfrom) For copying from another point
 - [Point.clone](#clone) For creating new point copy

***

### cross()

> **cross**(`other`): `number`

Computes the cross product of `other` with `this` point.
Returns the z-component of the 3D cross product, assuming z=0 for both vectors.
> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Parameters

##### other

[`PointData`](maths.PointData.md)

The other point to calculate the cross product with

#### Returns

`number`

The z-component of the cross product

#### Example

```ts
// Basic cross product
const v1 = new Point(2, 3);
const v2 = new Point(4, 5);
const result = v1.cross(v2); // 2*5 - 3*4 = -2

// Check if vectors are parallel
const isParallel = v1.cross(v2) === 0;

// Get signed area of parallelogram
const area = Math.abs(v1.cross(v2));
```

#### Remarks

- Returns z-component only (x,y assumed in 2D plane)
- Positive result means counter-clockwise angle from this to other
- Magnitude equals area of parallelogram formed by vectors

#### See

 - [Point.dot](#dot) For dot product calculation
 - [Point.normalize](#normalize) For unit vector conversion

#### Inherited from

`PixiMixins.Point.cross`

***

### dot()

> **dot**(`other`): `number`

Computes the dot product of `other` with `this` point.
The dot product is the sum of the products of the corresponding components of two vectors.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Parameters

##### other

[`PointData`](maths.PointData.md)

The other point to calculate the dot product with

#### Returns

`number`

The scalar result of the dot product

#### Example

```ts
// Basic dot product
const v1 = new Point(2, 3);
const v2 = new Point(4, 5);
const result = v1.dot(v2); // 2*4 + 3*5 = 23

// Check if vectors are perpendicular
const isOrthogonal = v1.dot(v2) === 0;

// Get angle between vectors
const cosTheta = v1.dot(v2) / (v1.magnitude() * v2.magnitude());
```

#### See

 - [Point.cross](#cross) For cross product calculation
 - [Point.magnitude](#magnitude) For vector length

#### Inherited from

`PixiMixins.Point.dot`

***

### equals()

> **equals**(`p`): `boolean`

Checks if another point is equal to this point.

Compares x and y values using strict equality.

#### Parameters

##### p

[`PointData`](maths.PointData.md)

The point to check

#### Returns

`boolean`

`true` if both `x` and `y` are equal

#### Example

```ts
// Basic equality check
const p1 = new Point(100, 200);
const p2 = new Point(100, 200);
console.log(p1.equals(p2)); // true

// Compare with PointData
const data = { x: 100, y: 200 };
console.log(p1.equals(data)); // true

// Check different points
const p3 = new Point(200, 300);
console.log(p1.equals(p3)); // false
```

#### See

 - [Point.copyFrom](#copyfrom) For making points equal
 - [PointData](maths.PointData.md) For point data interface

***

### magnitude()

> **magnitude**(): `number`

Computes the magnitude (length) of this point as Euclidean distance from origin.

Defined as the square root of the sum of the squares of each component.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Returns

`number`

The magnitude (length) of the vector

#### Example

```ts
// Basic length calculation
const vector = new Point(3, 4);
console.log(vector.magnitude()); // 5

// Check if unit vector
const isUnit = Math.abs(vector.magnitude() - 1) < 0.0001;

// Compare vector lengths
const longer = v1.magnitude() > v2.magnitude();
```

#### See

 - [Point.magnitudeSquared](#magnitudesquared) For efficient length comparison
 - [Point.normalize](#normalize) For unit vector conversion

#### Inherited from

`PixiMixins.Point.magnitude`

***

### magnitudeSquared()

> **magnitudeSquared**(): `number`

Computes the squared magnitude of this point.
More efficient than magnitude() for length comparisons.

Defined as the sum of the squares of each component.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Returns

`number`

The squared magnitude of the vector

#### Example

```ts
// Efficient length comparison
const v1 = new Point(3, 4);
const v2 = new Point(1, 2);

// Better than: v1.magnitude() > v2.magnitude()
const longer = v1.magnitudeSquared() > v2.magnitudeSquared();

// Check if vector is longer than 5 units
const isLong = v1.magnitudeSquared() > 25; // 5 * 5
```

#### See

 - [Point.magnitude](#magnitude) For actual vector length
 - [Point.dot](#dot) For dot product calculation

#### Inherited from

`PixiMixins.Point.magnitudeSquared`

***

### multiply()

> **multiply**\<`T`\>(`other`, `outPoint?`): `T`

Multiplies component-wise `other` and `this` points and outputs into `outPoint` or a new Point.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = `Point`

#### Parameters

##### other

[`PointData`](maths.PointData.md)

The point to multiply with `this`

##### outPoint?

`T`

Optional Point-like object to store result

#### Returns

`T`

The outPoint or a new Point with multiplication result

#### Example

```ts
// Basic point multiplication
const point = new Point(10, 20);
const other = new Point(2, 3);
const result = point.multiply(other);
console.log(result); // Point(20, 60)

// Using output point for efficiency
const output = new Point();
point.multiply(other, output);
console.log(output); // Point(20, 60)

// Chain multiple operations
const final = point.multiply(other).add(new Point(5, 5));
```

#### See

 - [Point.add](#add) For point addition
 - [Point.multiplyScalar](#multiplyscalar) For scalar multiplication

#### Inherited from

`PixiMixins.Point.multiply`

***

### multiplyScalar()

> **multiplyScalar**\<`T`\>(`scalar`, `outPoint?`): `T`

Multiplies each component of `this` point with the number `scalar` and outputs into `outPoint` or a new Point.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = `Point`

#### Parameters

##### scalar

`number`

The number to multiply both components with

##### outPoint?

`T`

Optional Point-like object to store result

#### Returns

`T`

The outPoint or a new Point with multiplication result

#### Example

```ts
// Basic scalar multiplication
const point = new Point(10, 20);
const result = point.multiplyScalar(2);
console.log(result); // Point(20, 40)

// Using output point for efficiency
const output = new Point();
point.multiplyScalar(0.5, output);
console.log(output); // Point(5, 10)

// Chain with other operations
const final = point.multiplyScalar(2).add(new Point(5, 5));
```

#### See

 - [Point.multiply](#multiply) For point multiplication
 - [Point.normalize](#normalize) For unit vector conversion

#### Inherited from

`PixiMixins.Point.multiplyScalar`

***

### normalize()

> **normalize**\<`T`\>(`outPoint?`): `T`

Computes a normalized version of `this` point.

A normalized vector is a vector of magnitude (length) 1

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = `Point`

#### Parameters

##### outPoint?

`T`

Optional Point-like object to store result

#### Returns

`T`

The normalized point

#### Example

```ts
// Basic normalization
const vector = new Point(3, 4);
const normalized = vector.normalize();
console.log(normalized.magnitude()); // 1

// Using output point
const out = new Point();
vector.normalize(out);

// Chain with other operations
const scaled = vector.normalize().multiplyScalar(5);
```

#### See

 - [Point.magnitude](#magnitude) For vector length
 - [Point.multiplyScalar](#multiplyscalar) For scaling

#### Inherited from

`PixiMixins.Point.normalize`

***

### project()

> **project**\<`T`\>(`onto`, `outPoint?`): `T`

Computes vector projection of `this` on `onto`.
Projects one vector onto another, creating a parallel vector with the length of the projection.

Imagine a light source, parallel to `onto`, above `this`.
The light would cast rays perpendicular to `onto`.
`this.project(onto)` is the shadow cast by `this` on the line defined by `onto` .

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = `Point`

#### Parameters

##### onto

[`PointData`](maths.PointData.md)

Vector to project onto (should be non-zero)

##### outPoint?

`T`

Optional Point-like object to store result

#### Returns

`T`

The projection of `this` onto `onto`

#### Remarks

- Results in zero vector if projecting onto zero vector
- Length depends on angle between vectors
- Result is parallel to `onto` vector
- Useful for physics and collision responses

#### See

 - [Point.dot](#dot) For angle calculations
 - [Point.normalize](#normalize) For unit vector conversion

#### Inherited from

`PixiMixins.Point.project`

***

### reflect()

> **reflect**\<`T`\>(`normal`, `outPoint?`): `T`

Reflects `this` vector off of a plane orthogonal to `normal`.

Like a light ray bouncing off a mirror surface.
`this` vector is the light and `normal` is a vector perpendicular to the mirror.
`this.reflect(normal)` is the reflection of `this` on that mirror.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = `Point`

#### Parameters

##### normal

[`PointData`](maths.PointData.md)

The normal vector of the reflecting plane

##### outPoint?

`T`

Optional Point-like object to store result

#### Returns

`T`

The reflection of `this` off the plane

#### Example

```ts
// Basic reflection
const ray = new Point(1, 1);
const surfaceNormal = new Point(0, 1).normalize();
const reflection = ray.reflect(surfaceNormal);

// Using output point
const out = new Point();
ray.reflect(surfaceNormal, out);

// Reflect off angled surface
const slope = new Point(1, 1).normalize();
const bounced = ray.reflect(slope);
```

#### Remarks

- Normal vector should be normalized for accurate results
- Preserves vector magnitude
- Useful for physics simulations
- Common in light/particle effects

#### See

 - [Point.normalize](#normalize) For normalizing vectors
 - [Point.dot](#dot) For angle calculations

#### Inherited from

`PixiMixins.Point.reflect`

***

### rotate()

> **rotate**\<`T`\>(`radians`, `outPoint?`): `T`

Rotates `this` vector.

Like a light ray bouncing off a mirror surface.
`this` vector is the light and `normal` is a vector perpendicular to the mirror.
`this.reflect(normal)` is the reflection of `this` on that mirror.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = `Point`

#### Parameters

##### radians

`number`

The rotation angle in radians

##### outPoint?

`T`

Optional Point-like object to store result

#### Returns

`T`

The outPoint or a new Point with rotated result

#### Example

```ts
// Basic point rotation
const point = new Point(10, 20);
const degrees = 45
const radians = degrees * (Math.PI / 180)
const result = point.rotate(radians);
console.log(result); // {x: -7.071067811865474, y: 21.213203435596427}

// Using output point for efficiency
const output = new Point(10, 20);
point.rotate(90 * (Math.PI / 180), output);
console.log(result); // {x: -7.071067811865474, y: 21.213203435596427}

// Chain multiple additions
const final = point.rotate(radians).rotate(radians2);
```

#### Remarks

convert degrees to radians with const radians = degrees * (Math.PI / 180)

#### Inherited from

`PixiMixins.Point.rotate`

***

### set()

> **set**(`x`, `y`): `this`

Sets the point to a new x and y position.

If y is omitted, both x and y will be set to x.

#### Parameters

##### x

`number` = `0`

Position on the x axis

##### y

`number` = `x`

Position on the y axis, defaults to x

#### Returns

`this`

The point instance itself

#### Example

```ts
// Basic position setting
const point = new Point();
point.set(100, 200);

// Set both x and y to same value
point.set(50); // x=50, y=50

// Chain with other operations
point
    .set(10, 20)
    .copyTo(otherPoint);
```

#### See

 - [Point.copyFrom](#copyfrom) For copying from another point
 - [Point.equals](#equals) For comparing positions

***

### subtract()

> **subtract**\<`T`\>(`other`, `outPoint?`): `T`

Subtracts `other` from `this` point and outputs into `outPoint` or a new Point.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = `Point`

#### Parameters

##### other

[`PointData`](maths.PointData.md)

The point to subtract from `this`

##### outPoint?

`T`

Optional Point-like object to store result

#### Returns

`T`

The outPoint or a new Point with subtraction result

#### Example

```ts
// Basic point subtraction
const point = new Point(10, 20);
const other = new Point(5, 10);
const result = point.subtract(other);
console.log(result); // Point(5, 10)

// Using output point for efficiency
const output = new Point();
point.subtract(other, output);
console.log(output); // Point(5, 10)

// Chain multiple subtractions
const final = point.subtract(other).subtract(new Point(2, 3));
```

#### See

 - [Point.add](#add) For point addition
 - [Point.multiply](#multiply) For point multiplication

#### Inherited from

`PixiMixins.Point.subtract`

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`
