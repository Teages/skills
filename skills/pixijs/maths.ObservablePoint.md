# Class: ObservablePoint

The ObservablePoint object represents a location in a two-dimensional coordinate system.
Triggers a callback when its position changes.

The x and y properties represent the position on the horizontal and vertical axes, respectively.

## Example

```ts
// Basic observable point usage
const point = new ObservablePoint(
    { _onUpdate: (p) => console.log(`Updated to (${p.x}, ${p.y})`) },
    100, 100
);

// Update triggers callback
point.x = 200; // Logs: Updated to (200, 100)
point.y = 300; // Logs: Updated to (200, 300)

// Set both coordinates
point.set(50, 50); // Logs: Updated to (50, 50)
```

## See

 - [Point](maths.Point.md) For non-observable version
 - [Observer](maths.Observer.md) For observer interface
 - [PointLike](maths.PointLike.md) For point interface

## Extends

- `ObservablePoint`

## Implements

- [`PointLike`](maths.PointLike.md)

## Constructors

### Constructor

> **new ObservablePoint**(`observer`, `x?`, `y?`): `ObservablePoint`

Creates a new `ObservablePoint`

#### Parameters

##### observer

[`Observer`](maths.Observer.md)\<`ObservablePoint`\>

Observer to pass to listen for change events.

##### x?

`number`

position of the point on the x axis

##### y?

`number`

position of the point on the y axis

#### Returns

`ObservablePoint`

#### Inherited from

`PixiMixins.ObservablePoint.constructor`

## Accessors

### x

#### Get Signature

> **get** **x**(): `number`

Position of the observable point on the x axis.
Triggers observer callback when value changes.

##### Example

```ts
// Basic x position
const point = new ObservablePoint(observer);
point.x = 100; // Triggers observer

// Use in calculations
const width = rightPoint.x - leftPoint.x;
```

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

X coordinate

##### Parameters

###### value

`number`

##### Returns

`void`

X coordinate

#### Implementation of

[`PointLike`](maths.PointLike.md).[`x`](maths.PointLike.html#x)

***

### y

#### Get Signature

> **get** **y**(): `number`

Position of the observable point on the y axis.
Triggers observer callback when value changes.

##### Example

```ts
// Basic y position
const point = new ObservablePoint(observer);
point.y = 200; // Triggers observer

// Use in calculations
const height = bottomPoint.y - topPoint.y;
```

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

Y coordinate

##### Parameters

###### value

`number`

##### Returns

`void`

Y coordinate

#### Implementation of

[`PointLike`](maths.PointLike.md).[`y`](maths.PointLike.html#y)

## Methods

### add()

> **add**\<`T`\>(`other`, `outPoint?`): `T`

Adds `other` to `this` point and outputs into `outPoint` or a new Point.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

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

 - [Point.subtract](maths.Point.html#subtract) For point subtraction
 - [Point.multiply](maths.Point.html#multiply) For point multiplication

#### Inherited from

`PixiMixins.ObservablePoint.add`

***

### clone()

> **clone**(`observer?`): `ObservablePoint`

Creates a clone of this point.

#### Parameters

##### observer?

[`Observer`](maths.Observer.md)\<`ObservablePoint`\>

Optional observer to pass to the new observable point

#### Returns

`ObservablePoint`

A copy of this observable point

#### Example

```ts
// Basic cloning
const point = new ObservablePoint(observer, 100, 200);
const copy = point.clone();

// Clone with new observer
const newObserver = {
    _onUpdate: (p) => console.log(`Clone updated: (${p.x}, ${p.y})`)
};
const watched = point.clone(newObserver);

// Verify independence
watched.set(300, 400); // Only triggers new observer
```

#### See

 - [ObservablePoint.copyFrom](#copyfrom) For copying into existing point
 - [Observer](maths.Observer.md) For observer interface details

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
const source = new ObservablePoint(observer, 100, 200);
const target = new ObservablePoint();
target.copyFrom(source);

// Copy and chain operations
const point = new ObservablePoint()
    .copyFrom(source)
    .set(x + 50, y + 50);

// Copy from any PointData
const data = { x: 10, y: 20 };
point.copyFrom(data);
```

#### See

 - [ObservablePoint.copyTo](#copyto) For copying to another point
 - [ObservablePoint.clone](#clone) For creating new point copy

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
const source = new ObservablePoint(100, 200);
const target = new ObservablePoint();
source.copyTo(target);
```

#### See

 - [ObservablePoint.copyFrom](#copyfrom) For copying from another point
 - [ObservablePoint.clone](#clone) For creating new point copy

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

 - [Point.dot](maths.Point.html#dot) For dot product calculation
 - [Point.normalize](maths.Point.html#normalize) For unit vector conversion

#### Inherited from

`PixiMixins.ObservablePoint.cross`

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

 - [Point.cross](maths.Point.html#cross) For cross product calculation
 - [Point.magnitude](maths.Point.html#magnitude) For vector length

#### Inherited from

`PixiMixins.ObservablePoint.dot`

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
const p1 = new ObservablePoint(100, 200);
const p2 = new ObservablePoint(100, 200);
console.log(p1.equals(p2)); // true

// Compare with PointData
const data = { x: 100, y: 200 };
console.log(p1.equals(data)); // true

// Check different points
const p3 = new ObservablePoint(200, 300);
console.log(p1.equals(p3)); // false
```

#### See

 - [ObservablePoint.copyFrom](#copyfrom) For making points equal
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

 - [Point.magnitudeSquared](maths.Point.html#magnitudesquared) For efficient length comparison
 - [Point.normalize](maths.Point.html#normalize) For unit vector conversion

#### Inherited from

`PixiMixins.ObservablePoint.magnitude`

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

 - [Point.magnitude](maths.Point.html#magnitude) For actual vector length
 - [Point.dot](maths.Point.html#dot) For dot product calculation

#### Inherited from

`PixiMixins.ObservablePoint.magnitudeSquared`

***

### multiply()

> **multiply**\<`T`\>(`other`, `outPoint?`): `T`

Multiplies component-wise `other` and `this` points and outputs into `outPoint` or a new Point.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

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

 - [Point.add](maths.Point.html#add) For point addition
 - [Point.multiplyScalar](maths.Point.html#multiplyscalar) For scalar multiplication

#### Inherited from

`PixiMixins.ObservablePoint.multiply`

***

### multiplyScalar()

> **multiplyScalar**\<`T`\>(`scalar`, `outPoint?`): `T`

Multiplies each component of `this` point with the number `scalar` and outputs into `outPoint` or a new Point.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

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

 - [Point.multiply](maths.Point.html#multiply) For point multiplication
 - [Point.normalize](maths.Point.html#normalize) For unit vector conversion

#### Inherited from

`PixiMixins.ObservablePoint.multiplyScalar`

***

### normalize()

> **normalize**\<`T`\>(`outPoint?`): `T`

Computes a normalized version of `this` point.

A normalized vector is a vector of magnitude (length) 1

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

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

 - [Point.magnitude](maths.Point.html#magnitude) For vector length
 - [Point.multiplyScalar](maths.Point.html#multiplyscalar) For scaling

#### Inherited from

`PixiMixins.ObservablePoint.normalize`

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

`T` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

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

 - [Point.dot](maths.Point.html#dot) For angle calculations
 - [Point.normalize](maths.Point.html#normalize) For unit vector conversion

#### Inherited from

`PixiMixins.ObservablePoint.project`

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

`T` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

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

 - [Point.normalize](maths.Point.html#normalize) For normalizing vectors
 - [Point.dot](maths.Point.html#dot) For angle calculations

#### Inherited from

`PixiMixins.ObservablePoint.reflect`

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

`T` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

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

`PixiMixins.ObservablePoint.rotate`

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
const point = new ObservablePoint(observer);
point.set(100, 200);

// Set both x and y to same value
point.set(50); // x=50, y=50
```

#### See

 - [ObservablePoint.copyFrom](#copyfrom) For copying from another point
 - [ObservablePoint.equals](#equals) For comparing positions

***

### subtract()

> **subtract**\<`T`\>(`other`, `outPoint?`): `T`

Subtracts `other` from `this` point and outputs into `outPoint` or a new Point.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

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

 - [Point.add](maths.Point.html#add) For point addition
 - [Point.multiply](maths.Point.html#multiply) For point multiplication

#### Inherited from

`PixiMixins.ObservablePoint.subtract`

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`
