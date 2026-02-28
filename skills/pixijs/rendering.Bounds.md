# Class: Bounds

A representation of an axis-aligned bounding box (AABB) used for efficient collision detection and culling.
Stores minimum and maximum coordinates to define a rectangular boundary.

## Example

```ts
// Create bounds
const bounds = new Bounds();

// Add a rectangular frame
bounds.addFrame(0, 0, 100, 100);
console.log(bounds.width, bounds.height); // 100, 100

// Transform bounds
const matrix = new Matrix()
    .translate(50, 50)
    .rotate(Math.PI / 4);
bounds.applyMatrix(matrix);

// Check point intersection
if (bounds.containsPoint(75, 75)) {
    console.log('Point is inside bounds!');
}
```

## Constructors

### Constructor

> **new Bounds**(`minX`, `minY`, `maxX`, `maxY`): `Bounds`

Creates a new Bounds object.

#### Parameters

##### minX

`number` = `Infinity`

The minimum X coordinate of the bounds.

##### minY

`number` = `Infinity`

The minimum Y coordinate of the bounds.

##### maxX

`number` = `-Infinity`

The maximum X coordinate of the bounds.

##### maxY

`number` = `-Infinity`

The maximum Y coordinate of the bounds.

#### Returns

`Bounds`

## Properties

### matrix

> **matrix**: [`Matrix`](maths.Matrix.md) = `defaultMatrix`

**`Advanced`**

The transformation matrix applied to this bounds object.
Used when calculating bounds with transforms.

#### Example

```ts
const bounds = new Bounds();

// Apply translation matrix
bounds.matrix = new Matrix()
    .translate(100, 100);

// Combine transformations
bounds.matrix = new Matrix()
    .translate(50, 50)
    .rotate(Math.PI / 4)
    .scale(2, 2);

// Use in bounds calculations
bounds.addFrame(0, 0, 100, 100); // Uses current matrix
bounds.addFrame(0, 0, 100, 100, customMatrix); // Override matrix
```

***

### maxX

> **maxX**: `number` = `-Infinity`

The maximum X coordinate of the bounds.
Represents the rightmost edge of the bounding box.

#### Example

```ts
const bounds = new Bounds();
// Set right edge
bounds.maxX = 200;
// Get width
const width = bounds.maxX - bounds.minX;
```

#### Default

```ts
-Infinity
```

***

### maxY

> **maxY**: `number` = `-Infinity`

The maximum Y coordinate of the bounds.
Represents the bottommost edge of the bounding box.

#### Example

```ts
const bounds = new Bounds();
// Set bottom edge
bounds.maxY = 200;
// Get height
const height = bounds.maxY - bounds.minY;
```

#### Default

```ts
-Infinity
```

***

### minX

> **minX**: `number` = `Infinity`

The minimum X coordinate of the bounds.
Represents the leftmost edge of the bounding box.

#### Example

```ts
const bounds = new Bounds();
// Set left edge
bounds.minX = 100;
```

#### Default

```ts
Infinity
```

***

### minY

> **minY**: `number` = `Infinity`

The minimum Y coordinate of the bounds.
Represents the topmost edge of the bounding box.

#### Example

```ts
const bounds = new Bounds();
// Set top edge
bounds.minY = 100;
```

#### Default

```ts
Infinity
```

## Accessors

### bottom

#### Get Signature

> **get** **bottom**(): `number`

The bottom edge coordinate of the bounds.
Alias for maxY.

##### Example

```ts
const bounds = new Bounds(0, 0, 100, 200);
console.log(bounds.bottom); // 200
console.log(bounds.bottom === bounds.maxY); // true
```

##### Returns

`number`

***

### height

#### Get Signature

> **get** **height**(): `number`

The height value of the bounds.
Represents the distance between minY and maxY coordinates.

##### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
// Get height
console.log(bounds.height); // 100
// Resize height
bounds.height = 150;
console.log(bounds.maxY - bounds.minY); // 150
```

##### Returns

`number`

#### Set Signature

> **set** **height**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isPositive

#### Get Signature

> **get** **isPositive**(): `boolean`

Whether the bounds has positive width and height.
Checks if both dimensions are greater than zero.

##### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
// Check if bounds are positive
console.log(bounds.isPositive); // true

// Negative bounds
bounds.maxX = bounds.minX;
console.log(bounds.isPositive); // false, width is 0
```

##### See

 - [Bounds#isEmpty](#isempty) For checking empty state
 - [Bounds#isValid](#isvalid) For checking validity

##### Returns

`boolean`

***

### isValid

#### Get Signature

> **get** **isValid**(): `boolean`

Whether the bounds has valid coordinates.
Checks if the bounds has been initialized with real values.

##### Example

```ts
const bounds = new Bounds();
console.log(bounds.isValid); // false, default state

// Set valid bounds
bounds.addFrame(0, 0, 100, 100);
console.log(bounds.isValid); // true
```

##### See

 - [Bounds#isEmpty](#isempty) For checking empty state
 - [Bounds#isPositive](#ispositive) For checking dimensions

##### Returns

`boolean`

***

### left

#### Get Signature

> **get** **left**(): `number`

The left edge coordinate of the bounds.
Alias for minX.

##### Example

```ts
const bounds = new Bounds(50, 0, 150, 100);
console.log(bounds.left); // 50
console.log(bounds.left === bounds.minX); // true
```

##### Returns

`number`

***

### rectangle

#### Get Signature

> **get** **rectangle**(): [`Rectangle`](maths.Rectangle.md)

The bounding rectangle representation of these bounds.
Lazily creates and updates a Rectangle instance based on the current bounds.

##### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);

// Get rectangle representation
const rect = bounds.rectangle;
console.log(rect.x, rect.y, rect.width, rect.height);

// Use for hit testing
if (bounds.rectangle.contains(mouseX, mouseY)) {
    console.log('Mouse is inside bounds!');
}
```

##### See

 - [Rectangle](maths.Rectangle.md) For rectangle methods
 - [Bounds.isEmpty](#isempty) For bounds validation

##### Returns

[`Rectangle`](maths.Rectangle.md)

***

### right

#### Get Signature

> **get** **right**(): `number`

The right edge coordinate of the bounds.
Alias for maxX.

##### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
console.log(bounds.right); // 100
console.log(bounds.right === bounds.maxX); // true
```

##### Returns

`number`

***

### top

#### Get Signature

> **get** **top**(): `number`

The top edge coordinate of the bounds.
Alias for minY.

##### Example

```ts
const bounds = new Bounds(0, 25, 100, 125);
console.log(bounds.top); // 25
console.log(bounds.top === bounds.minY); // true
```

##### Returns

`number`

***

### width

#### Get Signature

> **get** **width**(): `number`

The width value of the bounds.
Represents the distance between minX and maxX coordinates.

##### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
// Get width
console.log(bounds.width); // 100
// Resize width
bounds.width = 200;
console.log(bounds.maxX - bounds.minX); // 200
```

##### Returns

`number`

#### Set Signature

> **set** **width**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### x

#### Get Signature

> **get** **x**(): `number`

The x position of the bounds in local space.
Setting this value will move the bounds while maintaining its width.

##### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
// Get x position
console.log(bounds.x); // 0

// Move bounds horizontally
bounds.x = 50;
console.log(bounds.minX, bounds.maxX); // 50, 150

// Width stays the same
console.log(bounds.width); // Still 100
```

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### y

#### Get Signature

> **get** **y**(): `number`

The y position of the bounds in local space.
Setting this value will move the bounds while maintaining its height.

##### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
// Get y position
console.log(bounds.y); // 0

// Move bounds vertically
bounds.y = 50;
console.log(bounds.minY, bounds.maxY); // 50, 150

// Height stays the same
console.log(bounds.height); // Still 100
```

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addBounds()

> **addBounds**(`bounds`, `matrix?`): `void`

Adds another bounds object to this one, optionally transformed by a matrix.
Expands the bounds to include the given bounds' area.

#### Parameters

##### bounds

[`BoundsData`](rendering.BoundsData.md)

The bounds to be added

##### matrix?

[`Matrix`](maths.Matrix.md)

Optional transformation matrix

#### Returns

`void`

#### Example

```ts
const bounds = new Bounds();

// Add child bounds
const childBounds = sprite.getBounds();
bounds.addBounds(childBounds);

// Add transformed bounds
const matrix = new Matrix()
    .scale(2, 2);
bounds.addBounds(childBounds, matrix);
```

#### See

 - [Bounds#addFrame](#addframe) For adding raw coordinates
 - [Bounds#addRect](#addrect) For adding rectangles

***

### addBoundsMask()

> **addBoundsMask**(`mask`): `void`

Adds other Bounds as a mask, creating an intersection of the two bounds.
Only keeps the overlapping region between current bounds and mask bounds.

#### Parameters

##### mask

`Bounds`

The Bounds to use as a mask

#### Returns

`void`

#### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
// Create mask bounds
const mask = new Bounds();
mask.addFrame(50, 50, 150, 150);
// Apply mask - results in bounds of (50,50,100,100)
bounds.addBoundsMask(mask);
```

#### See

 - [Bounds#addBounds](#addbounds) For union operation
 - [Bounds#fit](#fit) For fitting to rectangle

***

### addFrame()

> **addFrame**(`x0`, `y0`, `x1`, `y1`, `matrix?`): `void`

Adds a rectangular frame to the bounds, optionally transformed by a matrix.
Updates the bounds to encompass the new frame coordinates.

#### Parameters

##### x0

`number`

Left X coordinate of frame

##### y0

`number`

Top Y coordinate of frame

##### x1

`number`

Right X coordinate of frame

##### y1

`number`

Bottom Y coordinate of frame

##### matrix?

[`Matrix`](maths.Matrix.md)

Optional transformation matrix

#### Returns

`void`

#### Example

```ts
const bounds = new Bounds();
bounds.addFrame(0, 0, 100, 100);

// Add transformed frame
const matrix = new Matrix()
    .translate(50, 50)
    .rotate(Math.PI / 4);
bounds.addFrame(0, 0, 100, 100, matrix);
```

#### See

 - [Bounds#addRect](#addrect) For adding Rectangle objects
 - [Bounds#addBounds](#addbounds) For adding other Bounds

***

### addRect()

> **addRect**(`rect`, `matrix?`): `void`

Adds a rectangle to the bounds, optionally transformed by a matrix.
Updates the bounds to encompass the given rectangle.

#### Parameters

##### rect

[`Rectangle`](maths.Rectangle.md)

The rectangle to be added

##### matrix?

[`Matrix`](maths.Matrix.md)

Optional transformation matrix

#### Returns

`void`

#### Example

```ts
const bounds = new Bounds();
// Add simple rectangle
const rect = new Rectangle(0, 0, 100, 100);
bounds.addRect(rect);

// Add transformed rectangle
const matrix = new Matrix()
    .translate(50, 50)
    .rotate(Math.PI / 4);
bounds.addRect(rect, matrix);
```

#### See

 - [Bounds#addFrame](#addframe) For adding raw coordinates
 - [Bounds#addBounds](#addbounds) For adding other bounds

***

### addVertexData()

> **addVertexData**(`vertexData`, `beginOffset`, `endOffset`, `matrix?`): `void`

Adds vertices from a Float32Array to the bounds, optionally transformed by a matrix.
Used for efficiently updating bounds from raw vertex data.

#### Parameters

##### vertexData

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

The array of vertices to add

##### beginOffset

`number`

Starting index in the vertex array

##### endOffset

`number`

Ending index in the vertex array (excluded)

##### matrix?

[`Matrix`](maths.Matrix.md)

Optional transformation matrix

#### Returns

`void`

#### Example

```ts
const bounds = new Bounds();

// Add vertices from geometry
const vertices = new Float32Array([
    0, 0,    // Vertex 1
    100, 0,  // Vertex 2
    100, 100 // Vertex 3
]);
bounds.addVertexData(vertices, 0, 6);

// Add transformed vertices
const matrix = new Matrix()
    .translate(50, 50)
    .rotate(Math.PI / 4);
bounds.addVertexData(vertices, 0, 6, matrix);

// Add subset of vertices
bounds.addVertexData(vertices, 2, 4); // Only second vertex
```

#### See

 - [Bounds#addFrame](#addframe) For adding rectangular frames
 - [Matrix](maths.Matrix.md) For transformation details

***

### applyMatrix()

> **applyMatrix**(`matrix`): `void`

Applies a transformation matrix to the bounds, updating its coordinates.
Transforms all corners of the bounds using the given matrix.

#### Parameters

##### matrix

[`Matrix`](maths.Matrix.md)

The matrix to apply to the bounds

#### Returns

`void`

#### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
// Apply translation
const translateMatrix = new Matrix()
    .translate(50, 50);
bounds.applyMatrix(translateMatrix);
```

#### See

 - [Matrix](maths.Matrix.md) For matrix operations
 - [Bounds#addFrame](#addframe) For adding transformed frames

***

### ceil()

> **ceil**(): `this`

Ceils the bounds by rounding up max values and rounding down min values.
Useful for pixel-perfect calculations and avoiding fractional pixels.

#### Returns

`this`

This bounds object for chaining

#### Example

```ts
const bounds = new Bounds();
bounds.set(10.2, 10.9, 50.1, 50.8);

// Round to whole pixels
bounds.ceil();
// bounds are now (10, 10, 51, 51)
```

#### See

 - [Bounds#scale](#scale) For size adjustments
 - [Bounds#fit](#fit) For constraining bounds

***

### clear()

> **clear**(): `this`

Clears the bounds and resets all coordinates to their default values.
Resets the transformation matrix back to identity.

#### Returns

`this`

This bounds object for chaining

#### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
console.log(bounds.isEmpty()); // false
// Clear the bounds
bounds.clear();
console.log(bounds.isEmpty()); // true
```

***

### clone()

> **clone**(): `Bounds`

Creates a new Bounds instance with the same values.

#### Returns

`Bounds`

A new Bounds instance with the same values

#### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);

// Create a copy
const copy = bounds.clone();

// Original and copy are independent
bounds.pad(10);
console.log(copy.width === bounds.width); // false
```

#### See

[Bounds#copyFrom](#copyfrom) For reusing existing bounds

***

### containsPoint()

> **containsPoint**(`x`, `y`): `boolean`

Checks if a point is contained within the bounds.
Returns true if the point's coordinates fall within the bounds' area.

#### Parameters

##### x

`number`

x coordinate to check

##### y

`number`

y coordinate to check

#### Returns

`boolean`

True if the point is inside the bounds

#### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
// Basic point check
console.log(bounds.containsPoint(50, 50)); // true
console.log(bounds.containsPoint(150, 150)); // false

// Check edges
console.log(bounds.containsPoint(0, 0));   // true, includes edges
console.log(bounds.containsPoint(100, 100)); // true, includes edges
```

#### See

 - [Bounds#isPositive](#ispositive) For valid bounds check
 - [Bounds#rectangle](#rectangle) For Rectangle representation

***

### copyFrom()

> **copyFrom**(`bounds`): `this`

Copies the bounds from another bounds object.
Useful for reusing bounds objects and avoiding allocations.

#### Parameters

##### bounds

`Bounds`

The bounds to copy from

#### Returns

`this`

This bounds object for chaining

#### Example

```ts
const sourceBounds = new Bounds(0, 0, 100, 100);
// Copy bounds
const targetBounds = new Bounds();
targetBounds.copyFrom(sourceBounds);
```

#### See

[Bounds#clone](#clone) For creating new instances

***

### fit()

> **fit**(`rect`): `this`

Resizes the bounds object to fit within the given rectangle.
Clips the bounds if they extend beyond the rectangle's edges.

#### Parameters

##### rect

[`Rectangle`](maths.Rectangle.md)

The rectangle to fit within

#### Returns

`this`

This bounds object for chaining

#### Example

```ts
const bounds = new Bounds(0, 0, 200, 200);
// Fit within viewport
const viewport = new Rectangle(50, 50, 100, 100);
bounds.fit(viewport);
// bounds are now (50, 50, 150, 150)
```

#### See

 - [Bounds#addBoundsMask](#addboundsmask) For intersection
 - [Bounds#pad](#pad) For expanding bounds

***

### fitBounds()

> **fitBounds**(`left`, `right`, `top`, `bottom`): `this`

Resizes the bounds object to include the given bounds.
Similar to fit() but works with raw coordinate values instead of a Rectangle.

#### Parameters

##### left

`number`

The left value of the bounds

##### right

`number`

The right value of the bounds

##### top

`number`

The top value of the bounds

##### bottom

`number`

The bottom value of the bounds

#### Returns

`this`

This bounds object for chaining

#### Example

```ts
const bounds = new Bounds(0, 0, 200, 200);
// Fit to specific coordinates
bounds.fitBounds(50, 150, 50, 150);
// bounds are now (50, 50, 150, 150)
```

#### See

 - [Bounds#fit](#fit) For fitting to Rectangle
 - [Bounds#addBoundsMask](#addboundsmask) For intersection

***

### isEmpty()

> **isEmpty**(): `boolean`

Checks if bounds are empty, meaning either width or height is zero or negative.
Empty bounds occur when min values exceed max values on either axis.

#### Returns

`boolean`

True if bounds are empty (have no area)

#### Example

```ts
const bounds = new Bounds();

// Check if newly created bounds are empty
console.log(bounds.isEmpty()); // true, default bounds are empty

// Add frame and check again
bounds.addFrame(0, 0, 100, 100);
console.log(bounds.isEmpty()); // false, bounds now have area

// Clear bounds
bounds.clear();
console.log(bounds.isEmpty()); // true, bounds are empty again
```

#### See

 - [Bounds#clear](#clear) For resetting bounds
 - [Bounds#isValid](#isvalid) For checking validity

***

### pad()

> **pad**(`paddingX`, `paddingY`): `this`

Pads bounds object, making it grow in all directions.
If paddingY is omitted, both paddingX and paddingY will be set to paddingX.

#### Parameters

##### paddingX

`number`

The horizontal padding amount

##### paddingY

`number` = `paddingX`

The vertical padding amount

#### Returns

`this`

This bounds object for chaining

#### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);

// Add equal padding
bounds.pad(10);
// bounds are now (-10, -10, 110, 110)

// Add different padding for x and y
bounds.pad(20, 10);
// bounds are now (-30, -20, 130, 120)
```

#### See

 - [Bounds#fit](#fit) For constraining bounds
 - [Bounds#scale](#scale) For uniform scaling

***

### scale()

> **scale**(`x`, `y`): `this`

Scales the bounds by the given values, adjusting all edges proportionally.

#### Parameters

##### x

`number`

The X value to scale by

##### y

`number` = `x`

The Y value to scale by (defaults to x)

#### Returns

`this`

This bounds object for chaining

#### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);

// Scale uniformly
bounds.scale(2);
// bounds are now (0, 0, 200, 200)

// Scale non-uniformly
bounds.scale(0.5, 2);
// bounds are now (0, 0, 100, 400)
```

#### See

 - [Bounds#pad](#pad) For adding padding
 - [Bounds#fit](#fit) For constraining size

***

### set()

> **set**(`x0`, `y0`, `x1`, `y1`): `void`

Sets the bounds directly using coordinate values.
Provides a way to set all bounds values at once.

#### Parameters

##### x0

`number`

Left X coordinate of frame

##### y0

`number`

Top Y coordinate of frame

##### x1

`number`

Right X coordinate of frame

##### y1

`number`

Bottom Y coordinate of frame

#### Returns

`void`

#### Example

```ts
const bounds = new Bounds();
bounds.set(0, 0, 100, 100);
```

#### See

 - [Bounds#addFrame](#addframe) For matrix-aware bounds setting
 - [Bounds#clear](#clear) For resetting bounds

***

### toString()

> **toString**(): `string`

Returns a string representation of the bounds.
Useful for debugging and logging bounds information.

#### Returns

`string`

A string describing the bounds

#### Example

```ts
const bounds = new Bounds(0, 0, 100, 100);
console.log(bounds.toString()); // "[pixi.js:Bounds minX=0 minY=0 maxX=100 maxY=100 width=100 height=100]"
```

#### See

 - [Bounds#copyFrom](#copyfrom) For copying bounds
 - [Bounds#clone](#clone) For creating a new instance
