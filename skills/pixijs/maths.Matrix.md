# Class: Matrix

A fast matrix for 2D transformations.
Represents a 3x3 transformation matrix:

```js
| a  c  tx |
| b  d  ty |
| 0  0  1  |
```

## Example

```ts
// Create identity matrix
const matrix = new Matrix();

// Create matrix with custom values
const transform = new Matrix(2, 0, 0, 2, 100, 100); // Scale 2x, translate 100,100

// Transform a point
const point = { x: 10, y: 20 };
const transformed = transform.apply(point);

// Chain transformations
matrix
    .translate(100, 50)
    .rotate(Math.PI / 4)
    .scale(2, 2);
```

## Remarks

- Used for transform hierarchies
- Supports scale, rotation, position
- Can be concatenated with append/prepend
- Efficient for batched transformations

## Constructors

### Constructor

> **new Matrix**(`a`, `b`, `c`, `d`, `tx`, `ty`): `Matrix`

#### Parameters

##### a

`number` = `1`

x scale

##### b

`number` = `0`

y skew

##### c

`number` = `0`

x skew

##### d

`number` = `1`

y scale

##### tx

`number` = `0`

x translation

##### ty

`number` = `0`

y translation

#### Returns

`Matrix`

## Properties

### a

> **a**: `number`

Scale on the x axis.

#### Default

```ts
1
```

***

### array

> **array**: [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)\<`ArrayBufferLike`\> = `null`

Array representation of the matrix.
Only populated when `toArray()` is called.

#### Default

```ts
null
```

#### See

[Matrix.toArray](#toarray) For filling this array

***

### b

> **b**: `number`

Shear on the y axis.

#### Default

```ts
0
```

***

### c

> **c**: `number`

Shear on the x axis.

#### Default

```ts
0
```

***

### d

> **d**: `number`

Scale on the y axis.

#### Default

```ts
1
```

***

### tx

> **tx**: `number`

Translation on the x axis.

#### Default

```ts
0
```

***

### ty

> **ty**: `number`

Translation on the y axis.

#### Default

```ts
0
```

## Accessors

### IDENTITY

#### Get Signature

> **get** `static` **IDENTITY**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`Matrix`\>

A default (identity) matrix with no transformations applied.

> [!IMPORTANT] This is a shared read-only object. Create a new Matrix if you need to modify it.

##### Example

```ts
// Get identity matrix reference
const identity = Matrix.IDENTITY;
console.log(identity.isIdentity()); // true

// Compare with identity
const matrix = new Matrix();
console.log(matrix.equals(Matrix.IDENTITY)); // true

// Create new matrix instead of modifying IDENTITY
const transform = new Matrix()
    .copyFrom(Matrix.IDENTITY)
    .translate(100, 100);
```

##### See

 - [Matrix.shared](#shared) For temporary calculations
 - [Matrix.identity](#identity-1) For resetting matrices

##### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`Matrix`\>

A read-only identity matrix

***

### shared

#### Get Signature

> **get** `static` **shared**(): `Matrix`

A static Matrix that can be used to avoid creating new objects.
Will always ensure the matrix is reset to identity when requested.

> [!IMPORTANT] This matrix is shared and temporary. Do not store references to it.

##### Example

```ts
// Use for temporary calculations
const tempMatrix = Matrix.shared;
tempMatrix.translate(100, 100).rotate(Math.PI / 4);
const point = tempMatrix.apply({ x: 10, y: 20 });

// Will be reset to identity on next access
const fresh = Matrix.shared; // Back to identity
```

##### Remarks

- Always returns identity matrix
- Safe to modify temporarily
- Not safe to store references
- Useful for one-off calculations

##### See

 - [Matrix.IDENTITY](#identity) For immutable identity matrix
 - [Matrix.identity](#identity-1) For resetting matrices

##### Returns

`Matrix`

A fresh identity matrix for temporary use

## Methods

### append()

> **append**(`matrix`): `this`

Appends the given Matrix to this Matrix.
Combines two matrices by multiplying them together: this = this * matrix

#### Parameters

##### matrix

`Matrix`

The matrix to append

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Basic matrix combination
const matrix = new Matrix();
const other = new Matrix().translate(100, 0).rotate(Math.PI / 4);
matrix.append(other);
```

#### Remarks

- Order matters: A.append(B) !== B.append(A)
- Modifies current matrix
- Preserves transformation order
- Commonly used for combining transforms

#### See

 - [Matrix.prepend](#prepend) For prepending transformations
 - [Matrix.appendFrom](#appendfrom) For appending two external matrices

***

### appendFrom()

> **appendFrom**(`a`, `b`): `this`

Appends two matrices and sets the result to this matrix.
Performs matrix multiplication: this = A * B

#### Parameters

##### a

`Matrix`

The first matrix to multiply

##### b

`Matrix`

The second matrix to multiply

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Basic matrix multiplication
const result = new Matrix();
const matrixA = new Matrix().scale(2, 2);
const matrixB = new Matrix().rotate(Math.PI / 4);
result.appendFrom(matrixA, matrixB);
```

#### Remarks

- Order matters: A * B !== B * A
- Creates a new transformation from two others
- More efficient than append() for multiple operations
- Does not modify input matrices

#### See

 - [Matrix.append](#append) For single matrix combination
 - [Matrix.prepend](#prepend) For reverse order multiplication

***

### apply()

> **apply**\<`P`\>(`pos`, `newPos?`): `P`

Get a new position with the current transformation applied.

Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)

#### Type Parameters

##### P

`P` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

#### Parameters

##### pos

[`PointData`](maths.PointData.md)

The origin point to transform

##### newPos?

`P`

Optional point to store the result

#### Returns

`P`

The transformed point

#### Example

```ts
// Basic point transformation
const matrix = new Matrix().translate(100, 50).rotate(Math.PI / 4);
const point = new Point(10, 20);
const transformed = matrix.apply(point);

// Reuse existing point
const output = new Point();
matrix.apply(point, output);
```

#### See

 - [Matrix.applyInverse](#applyinverse) For inverse transformation
 - [Point](maths.Point.md) For point operations

***

### applyInverse()

> **applyInverse**\<`P`\>(`pos`, `newPos?`): `P`

Get a new position with the inverse of the current transformation applied.

Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)

#### Type Parameters

##### P

`P` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

#### Parameters

##### pos

[`PointData`](maths.PointData.md)

The origin point to inverse-transform

##### newPos?

`P`

Optional point to store the result

#### Returns

`P`

The inverse-transformed point

#### Example

```ts
// Basic inverse transformation
const matrix = new Matrix().translate(100, 50).rotate(Math.PI / 4);
const worldPoint = new Point(150, 100);
const localPoint = matrix.applyInverse(worldPoint);

// Reuse existing point
const output = new Point();
matrix.applyInverse(worldPoint, output);

// Convert mouse position to local space
const mousePoint = new Point(mouseX, mouseY);
const localMouse = matrix.applyInverse(mousePoint);
```

#### See

 - [Matrix.apply](#apply) For forward transformation
 - [Matrix.invert](#invert) For getting inverse matrix

***

### clone()

> **clone**(): `Matrix`

Creates a new Matrix object with the same values as this one.

#### Returns

`Matrix`

A copy of this matrix. Good for chaining method calls.

***

### copyFrom()

> **copyFrom**(`matrix`): `this`

Changes the values of the matrix to be the same as the ones in given matrix.

#### Parameters

##### matrix

`Matrix`

The matrix to copy from

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Basic matrix copying
const source = new Matrix()
    .translate(100, 100)
    .rotate(Math.PI / 4);
const target = new Matrix();
target.copyFrom(source);
```

#### See

 - [Matrix.clone](#clone) For creating new matrix copy
 - [Matrix.copyTo](#copyto) For copying to another matrix

***

### copyTo()

> **copyTo**(`matrix`): `Matrix`

Creates a new Matrix object with the same values as this one.

#### Parameters

##### matrix

`Matrix`

#### Returns

`Matrix`

A copy of this matrix. Good for chaining method calls.

#### Example

```ts
// Basic matrix cloning
const matrix = new Matrix()
    .translate(100, 100)
    .rotate(Math.PI / 4);
const copy = matrix.clone();

// Clone and modify
const modified = matrix.clone()
    .scale(2, 2);

// Compare matrices
console.log(matrix.equals(copy));     // true
console.log(matrix.equals(modified)); // false
```

#### See

 - [Matrix.copyTo](#copyto) For copying to existing matrix
 - [Matrix.copyFrom](#copyfrom) For copying from another matrix

***

### decompose()

> **decompose**(`transform`): [`TransformableObject`](maths.TransformableObject.md)

Decomposes the matrix into its individual transform components.
Extracts position, scale, rotation and skew values from the matrix.

#### Parameters

##### transform

[`TransformableObject`](maths.TransformableObject.md)

The transform object to store the decomposed values

#### Returns

[`TransformableObject`](maths.TransformableObject.md)

The transform with the newly applied properties

#### Example

```ts
// Basic decomposition
const matrix = new Matrix()
    .translate(100, 100)
    .rotate(Math.PI / 4)
    .scale(2, 2);

const transform = {
    position: new Point(),
    scale: new Point(),
    pivot: new Point(),
    skew: new Point(),
    rotation: 0
};

matrix.decompose(transform);
console.log(transform.position); // Point(100, 100)
console.log(transform.rotation); // ~0.785 (PI/4)
console.log(transform.scale); // Point(2, 2)
```

#### Remarks

- Handles combined transformations
- Accounts for pivot points
- Chooses between rotation/skew based on transform type
- Uses radians for rotation and skew

#### See

 - [Matrix.setTransform](#settransform) For composing from components
 - [TransformableObject](maths.TransformableObject.md) For transform structure

***

### equals()

> **equals**(`matrix`): `boolean`

Checks if this matrix equals another matrix.
Compares all components for exact equality.

#### Parameters

##### matrix

`Matrix`

The matrix to compare to

#### Returns

`boolean`

True if matrices are identical

#### Example

```ts
// Basic equality check
const m1 = new Matrix();
const m2 = new Matrix();
console.log(m1.equals(m2)); // true

// Compare transformed matrices
const transform = new Matrix()
    .translate(100, 100)
const clone = new Matrix()
    .scale(2, 2);
console.log(transform.equals(clone)); // false
```

#### See

 - [Matrix.copyFrom](#copyfrom) For copying matrix values
 - [Matrix.isIdentity](#isidentity) For identity comparison

***

### fromArray()

> **fromArray**(`array`): `void`

Creates a Matrix object based on the given array.
Populates matrix components from a flat array in column-major order.

> [!NOTE] Array mapping order:
> ```
> array[0] = a  (x scale)
> array[1] = b  (y skew)
> array[2] = tx (x translation)
> array[3] = c  (x skew)
> array[4] = d  (y scale)
> array[5] = ty (y translation)
> ```

#### Parameters

##### array

`number`[]

The array to populate the matrix from

#### Returns

`void`

#### Example

```ts
// Create matrix from array
const matrix = new Matrix();
matrix.fromArray([
    2, 0,  100,  // a, b, tx
    0, 2,  100   // c, d, ty
]);

// Create matrix from typed array
const float32Array = new Float32Array([
    1, 0, 0,     // Scale x1, no skew
    0, 1, 0      // No skew, scale x1
]);
matrix.fromArray(float32Array);
```

#### See

 - [Matrix.toArray](#toarray) For converting matrix to array
 - [Matrix.set](#set) For setting values directly

***

### identity()

> **identity**(): `this`

Resets this Matrix to an identity (default) matrix.
Sets all components to their default values: scale=1, no skew, no translation.

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Reset transformed matrix
const matrix = new Matrix()
    .scale(2, 2)
    .rotate(Math.PI / 4);
matrix.identity(); // Back to default state

// Chain after reset
matrix
    .identity()
    .translate(100, 100)
    .scale(2, 2);

// Compare with identity constant
const isDefault = matrix.equals(Matrix.IDENTITY);
```

#### Remarks

- Sets a=1, d=1 (default scale)
- Sets b=0, c=0 (no skew)
- Sets tx=0, ty=0 (no translation)

#### See

 - [Matrix.IDENTITY](#identity) For constant identity matrix
 - [Matrix.isIdentity](#isidentity) For checking identity state

***

### invert()

> **invert**(): `this`

Inverts this matrix.
Creates the matrix that when multiplied with this matrix results in an identity matrix.

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Basic matrix inversion
const matrix = new Matrix()
    .translate(100, 50)
    .scale(2, 2);

matrix.invert(); // Now transforms in opposite direction

// Verify inversion
const point = new Point(50, 50);
const transformed = matrix.apply(point);
const original = matrix.invert().apply(transformed);
// original ≈ point
```

#### Remarks

- Modifies the current matrix
- Useful for reversing transformations
- Cannot invert matrices with zero determinant

#### See

 - [Matrix.identity](#identity-1) For resetting to identity
 - [Matrix.applyInverse](#applyinverse) For inverse transformations

***

### isIdentity()

> **isIdentity**(): `boolean`

Checks if this matrix is an identity matrix.

An identity matrix has no transformations applied (default state).

#### Returns

`boolean`

True if matrix has no transformations

#### Example

```ts
// Check if matrix is identity
const matrix = new Matrix();
console.log(matrix.isIdentity()); // true

// Check after transformations
matrix.translate(100, 0);
console.log(matrix.isIdentity()); // false

// Reset and verify
matrix.identity();
console.log(matrix.isIdentity()); // true
```

#### Remarks

- Verifies a = 1, d = 1 (no scale)
- Verifies b = 0, c = 0 (no skew)
- Verifies tx = 0, ty = 0 (no translation)

#### See

 - [Matrix.identity](#identity-1) For resetting to identity
 - [Matrix.IDENTITY](#identity) For constant identity matrix

***

### prepend()

> **prepend**(`matrix`): `this`

Prepends the given Matrix to this Matrix.
Combines two matrices by multiplying them together: this = matrix * this

#### Parameters

##### matrix

`Matrix`

The matrix to prepend

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Basic matrix prepend
const matrix = new Matrix().scale(2, 2);
const other = new Matrix().translate(100, 0);
matrix.prepend(other); // Translation happens before scaling
```

#### Remarks

- Order matters: A.prepend(B) !== B.prepend(A)
- Modifies current matrix
- Reverses transformation order compared to append()

#### See

 - [Matrix.append](#append) For appending transformations
 - [Matrix.appendFrom](#appendfrom) For combining external matrices

***

### rotate()

> **rotate**(`angle`): `this`

Applies a rotation transformation to the matrix.

Rotates around the origin (0,0) by the given angle in radians.

#### Parameters

##### angle

`number`

The angle in radians

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Basic rotation
const matrix = new Matrix();
matrix.rotate(Math.PI / 4); // Rotate 45 degrees

// Chain with other transformations
matrix
    .translate(100, 100) // Move to rotation center
    .rotate(Math.PI)     // Rotate 180 degrees
    .scale(2, 2);        // Scale after rotation

// Common angles
matrix.rotate(Math.PI / 2);  // 90 degrees
matrix.rotate(Math.PI);      // 180 degrees
matrix.rotate(Math.PI * 2);  // 360 degrees
```

#### Remarks

- Rotates around origin point (0,0)
- Affects position if translation was set
- Uses counter-clockwise rotation
- Order of operations matters when chaining

#### See

 - [Matrix.setTransform](#settransform) For setting rotation directly
 - [Matrix.append](#append) For combining transformations

***

### scale()

> **scale**(`x`, `y`): `this`

Applies a scale transformation to the matrix.
Multiplies the scale values with existing matrix components.

#### Parameters

##### x

`number`

The amount to scale horizontally

##### y

`number`

The amount to scale vertically

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Basic scaling
const matrix = new Matrix();
matrix.scale(2, 3); // Scale 2x horizontally, 3x vertically

// Chain with other transformations
matrix
    .translate(100, 100)
    .scale(2, 2)     // Scales after translation
    .rotate(Math.PI / 4);
```

#### See

 - [Matrix.setTransform](#settransform) For setting scale directly
 - [Matrix.append](#append) For combining transformations

***

### set()

> **set**(`a`, `b`, `c`, `d`, `tx`, `ty`): `this`

Sets the matrix properties directly.
All matrix components can be set in one call.

#### Parameters

##### a

`number`

Scale on x axis

##### b

`number`

Shear on y axis

##### c

`number`

Shear on x axis

##### d

`number`

Scale on y axis

##### tx

`number`

Translation on x axis

##### ty

`number`

Translation on y axis

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Set to identity matrix
matrix.set(1, 0, 0, 1, 0, 0);

// Set to scale matrix
matrix.set(2, 0, 0, 2, 0, 0); // Scale 2x

// Set to translation matrix
matrix.set(1, 0, 0, 1, 100, 50); // Move 100,50
```

#### See

 - [Matrix.identity](#identity-1) For resetting to identity
 - [Matrix.fromArray](#fromarray) For setting from array

***

### setTransform()

> **setTransform**(`x`, `y`, `pivotX`, `pivotY`, `scaleX`, `scaleY`, `rotation`, `skewX`, `skewY`): `this`

Sets the matrix based on all the available properties.
Combines position, scale, rotation, skew and pivot in a single operation.

#### Parameters

##### x

`number`

Position on the x axis

##### y

`number`

Position on the y axis

##### pivotX

`number`

Pivot on the x axis

##### pivotY

`number`

Pivot on the y axis

##### scaleX

`number`

Scale on the x axis

##### scaleY

`number`

Scale on the y axis

##### rotation

`number`

Rotation in radians

##### skewX

`number`

Skew on the x axis

##### skewY

`number`

Skew on the y axis

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Basic transform setup
const matrix = new Matrix();
matrix.setTransform(
    100, 100,    // position
    0, 0,        // pivot
    2, 2,        // scale
    Math.PI / 4, // rotation (45 degrees)
    0, 0         // skew
);
```

#### Remarks

- Updates all matrix components at once
- More efficient than separate transform calls
- Uses radians for rotation and skew
- Pivot affects rotation center

#### See

 - [Matrix.decompose](#decompose) For extracting transform properties
 - [TransformableObject](maths.TransformableObject.md) For transform data structure

***

### toArray()

> **toArray**(`transpose?`, `out?`): [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

Creates an array from the current Matrix object.

> [!NOTE] The array format is:
> ```
> Non-transposed:
> [a, c, tx,
> b, d, ty,
> 0, 0, 1]
>
> Transposed:
> [a, b, 0,
> c, d, 0,
> tx,ty,1]
> ```

#### Parameters

##### transpose?

`boolean`

Whether to transpose the matrix

##### out?

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

Optional Float32Array to store the result

#### Returns

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

The array containing the matrix values

#### Example

```ts
// Basic array conversion
const matrix = new Matrix(2, 0, 0, 2, 100, 100);
const array = matrix.toArray();

// Using existing array
const float32Array = new Float32Array(9);
matrix.toArray(false, float32Array);

// Get transposed array
const transposed = matrix.toArray(true);
```

#### See

 - [Matrix.fromArray](#fromarray) For creating matrix from array
 - [Matrix.array](#array) For cached array storage

***

### toString()

> **toString**(): `string`

#### Returns

`string`

***

### translate()

> **translate**(`x`, `y`): `this`

Translates the matrix on the x and y axes.
Adds to the position values while preserving scale, rotation and skew.

#### Parameters

##### x

`number`

How much to translate on the x axis

##### y

`number`

How much to translate on the y axis

#### Returns

`this`

This matrix. Good for chaining method calls.

#### Example

```ts
// Basic translation
const matrix = new Matrix();
matrix.translate(100, 50); // Move right 100, down 50

// Chain with other transformations
matrix
    .scale(2, 2)
    .translate(100, 0)
    .rotate(Math.PI / 4);
```

#### See

 - [Matrix.set](#set) For setting position directly
 - [Matrix.setTransform](#settransform) For complete transform setup
