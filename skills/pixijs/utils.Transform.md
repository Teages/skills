# Class: Transform

The Transform class facilitates the manipulation of a 2D transformation matrix through
user-friendly properties: position, scale, rotation, skew, and pivot.

## Example

```ts
// Basic transform usage
const transform = new Transform();
transform.position.set(100, 100);
transform.rotation = Math.PI / 4; // 45 degrees
transform.scale.set(2, 2);

// With pivot point
transform.pivot.set(50, 50);
transform.rotation = Math.PI; // Rotate around pivot

// Matrix manipulation
const matrix = transform.matrix;
const position = { x: 0, y: 0 };
matrix.apply(position); // Transform point
```

## Remarks

- Manages 2D transformation properties
- Auto-updates matrix on changes
- Supports observable changes
- Common in display objects

## See

 - [Matrix](maths.Matrix.md) For direct matrix operations
 - [ObservablePoint](maths.ObservablePoint.md) For point properties

## Constructors

### Constructor

> **new Transform**(`options`): `Transform`

#### Parameters

##### options

[`TransformOptions`](utils.TransformOptions.md) = `{}`

Options for the transform.

#### Returns

`Transform`

## Properties

### pivot

> **pivot**: [`ObservablePoint`](maths.ObservablePoint.md)

The pivot point of the container that it rotates around.

#### Example

```ts
// Center pivot
transform.pivot.set(sprite.width / 2, sprite.height / 2);

// Corner rotation
transform.pivot.set(0, 0);
transform.rotation = Math.PI / 4; // 45 degrees
```

***

### position

> **position**: [`ObservablePoint`](maths.ObservablePoint.md)

The coordinate of the object relative to the local coordinates of the parent.

#### Example

```ts
// Basic position setting
transform.position.set(100, 100);

// Individual coordinate access
transform.position.x = 50;
transform.position.y = 75;
```

***

### scale

> **scale**: [`ObservablePoint`](maths.ObservablePoint.md)

The scale factor of the object.

#### Example

```ts
// Uniform scaling
transform.scale.set(2, 2);

// Non-uniform scaling
transform.scale.x = 2; // Stretch horizontally
transform.scale.y = 0.5; // Compress vertically
```

***

### skew

> **skew**: [`ObservablePoint`](maths.ObservablePoint.md)

The skew amount, on the x and y axis.

#### Example

```ts
// Apply horizontal skew
transform.skew.x = Math.PI / 6; // 30 degrees

// Apply both skews
transform.skew.set(Math.PI / 6, Math.PI / 8);
```

## Accessors

### matrix

#### Get Signature

> **get** **matrix**(): [`Matrix`](maths.Matrix.md)

The transformation matrix computed from the transform's properties.
Combines position, scale, rotation, skew, and pivot into a single matrix.

##### Example

```ts
// Get current matrix
const matrix = transform.matrix;
console.log(matrix.toString());
```

##### See

 - [Matrix](maths.Matrix.md) For matrix operations
 - [Transform.setFromMatrix](#setfrommatrix) For setting transform from matrix

##### Returns

[`Matrix`](maths.Matrix.md)

***

### rotation

#### Get Signature

> **get** **rotation**(): `number`

The rotation of the object in radians.

##### Example

```ts
// Basic rotation
transform.rotation = Math.PI / 4; // 45 degrees

// Rotate around pivot point
transform.pivot.set(50, 50);
transform.rotation = Math.PI; // 180 degrees around pivot

// Animate rotation
app.ticker.add(() => {
    transform.rotation += 0.1;
});
```

##### See

 - [Transform#pivot](#pivot) For rotation point
 - [Transform#skew](#skew) For skew effects

##### Returns

`number`

#### Set Signature

> **set** **rotation**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### setFromMatrix()

> **setFromMatrix**(`matrix`): `void`

Decomposes a matrix and sets the transforms properties based on it.

#### Parameters

##### matrix

[`Matrix`](maths.Matrix.md)

The matrix to decompose

#### Returns

`void`

#### Example

```ts
// Basic matrix decomposition
const transform = new Transform();
const matrix = new Matrix()
    .translate(100, 100)
    .rotate(Math.PI / 4)
    .scale(2, 2);

transform.setFromMatrix(matrix);
console.log(transform.position.x); // 100
console.log(transform.rotation); // ~0.785 (π/4)
```

#### See

 - [Matrix#decompose](maths.Matrix.html#decompose) For the decomposition logic
 - [Transform#matrix](#matrix) For getting the current matrix

***

### toString()

> **toString**(): `string`

#### Returns

`string`
