# Class: Triangle

A class to define a shape of a triangle via user defined coordinates.

Used for creating triangular shapes and hit areas with three points (x,y), (x2,y2), (x3,y3).
Points are stored in counter-clockwise order.

## Example

```ts
// Basic triangle creation
const triangle = new Triangle(0, 0, 100, 0, 50, 50);
// Use as hit area
container.hitArea = new Triangle(0, 0, 100, 0, 50, 100);
// Check point containment
const isInside = triangle.contains(mouseX, mouseY);
// Get bounding box
const bounds = triangle.getBounds();
```

## See

 - [Rectangle](maths.Rectangle.md) For rectangular shapes
 - [Circle](maths.Circle.md) For circular shapes
 - [Polygon](maths.Polygon.md) For complex shapes

## Implements

- [`ShapePrimitive`](maths.ShapePrimitive.md)

## Constructors

### Constructor

> **new Triangle**(`x`, `y`, `x2`, `y2`, `x3`, `y3`): `Triangle`

#### Parameters

##### x

`number` = `0`

The X coord of the first point.

##### y

`number` = `0`

The Y coord of the first point.

##### x2

`number` = `0`

The X coord of the second point.

##### y2

`number` = `0`

The Y coord of the second point.

##### x3

`number` = `0`

The X coord of the third point.

##### y3

`number` = `0`

The Y coord of the third point.

#### Returns

`Triangle`

## Properties

### type

> `readonly` **type**: [`SHAPE_PRIMITIVE`](maths.SHAPE_PRIMITIVE.md) = `'triangle'`

The type of the object, mainly used to avoid `instanceof` checks

#### Example

```ts
// Check shape type
const shape = new Triangle(0, 0, 100, 0, 50, 100);
console.log(shape.type); // 'triangle'

// Use in type guards
if (shape.type === 'triangle') {
    console.log(shape.x2, shape.y2);
}
```

#### Default

```ts
'triangle'
```

#### See

[SHAPE\_PRIMITIVE](maths.SHAPE_PRIMITIVE.md) For all shape types

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`type`](maths.ShapePrimitive.html#type)

***

### x

> **x**: `number`

The X coordinate of the first point of the triangle.

#### Example

```ts
// Set first point x position
const triangle = new Triangle();
triangle.x = 100;
```

#### Default

```ts
0
```

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`x`](maths.ShapePrimitive.html#x)

***

### x2

> **x2**: `number`

The X coordinate of the second point of the triangle.

#### Example

```ts
// Create horizontal line for second point
const triangle = new Triangle(0, 0);
triangle.x2 = triangle.x + 100; // 100 units to the right
```

#### Default

```ts
0
```

***

### x3

> **x3**: `number`

The X coordinate of the third point of the triangle.

#### Example

```ts
// Create equilateral triangle
const triangle = new Triangle(0, 0, 100, 0);
triangle.x3 = 50;  // Middle point x
triangle.y3 = 86.6; // Height using sin(60°)
```

#### Default

```ts
0
```

***

### y

> **y**: `number`

The Y coordinate of the first point of the triangle.

#### Example

```ts
// Set first point y position
const triangle = new Triangle();
triangle.y = 100;
```

#### Default

```ts
0
```

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`y`](maths.ShapePrimitive.html#y)

***

### y2

> **y2**: `number`

The Y coordinate of the second point of the triangle.

#### Example

```ts
// Create vertical line for second point
const triangle = new Triangle(0, 0);
triangle.y2 = triangle.y + 100; // 100 units down
```

#### Default

```ts
0
```

***

### y3

> **y3**: `number`

The Y coordinate of the third point of the triangle.

#### Example

```ts
// Create right triangle
const triangle = new Triangle(0, 0, 100, 0);
triangle.x3 = 0;   // Align with first point
triangle.y3 = 100; // 100 units down
```

#### Default

```ts
0
```

## Methods

### clone()

> **clone**(): `Triangle`

Creates a clone of this Triangle

#### Returns

`Triangle`

A copy of the triangle

#### Example

```ts
// Basic cloning
const original = new Triangle(0, 0, 100, 0, 50, 100);
const copy = original.clone();

// Clone and modify
const modified = original.clone();
modified.x3 = 75;
modified.y3 = 150;

// Verify independence
console.log(original.y3);  // 100
console.log(modified.y3);  // 150
```

#### See

 - [Triangle.copyFrom](#copyfrom) For copying into existing triangle
 - [Triangle.copyTo](#copyto) For copying to another triangle

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`clone`](maths.ShapePrimitive.html#clone)

***

### contains()

> **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates given are contained within this triangle

#### Parameters

##### x

`number`

The X coordinate of the point to test

##### y

`number`

The Y coordinate of the point to test

#### Returns

`boolean`

Whether the x/y coordinates are within this Triangle

#### Example

```ts
// Basic containment check
const triangle = new Triangle(0, 0, 100, 0, 50, 100);
const isInside = triangle.contains(25, 25); // true
```

#### Remarks

- Uses barycentric coordinate system
- Works with any triangle shape

#### See

 - [Triangle.strokeContains](#strokecontains) For checking stroke intersection
 - [Triangle.getBounds](#getbounds) For getting containing rectangle

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`contains`](maths.ShapePrimitive.html#contains)

***

### copyFrom()

> **copyFrom**(`triangle`): `this`

Copies another triangle to this one.

#### Parameters

##### triangle

`Triangle`

The triangle to copy from

#### Returns

`this`

Returns itself

#### Example

```ts
// Basic copying
const source = new Triangle(0, 0, 100, 0, 50, 100);
const target = new Triangle();
target.copyFrom(source);

// Chain with other operations
const triangle = new Triangle()
    .copyFrom(source)
    .getBounds(rect);
```

#### See

 - [Triangle.copyTo](#copyto) For copying to another triangle
 - [Triangle.clone](#clone) For creating new triangle copy

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`copyFrom`](maths.ShapePrimitive.html#copyfrom)

***

### copyTo()

> **copyTo**(`triangle`): `Triangle`

Copies this triangle to another one.

#### Parameters

##### triangle

`Triangle`

The triangle to copy to

#### Returns

`Triangle`

Returns given parameter

#### Example

```ts
// Basic copying
const source = new Triangle(0, 0, 100, 0, 50, 100);
const target = new Triangle();
source.copyTo(target);

// Chain with other operations
const result = source
    .copyTo(new Triangle())
    .getBounds();
```

#### Remarks

- Updates target triangle values
- Copies all point coordinates
- Returns target for chaining
- More efficient than clone()

#### See

 - [Triangle.copyFrom](#copyfrom) For copying from another triangle
 - [Triangle.clone](#clone) For creating new triangle copy

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`copyTo`](maths.ShapePrimitive.html#copyto)

***

### getBounds()

> **getBounds**(`out?`): [`Rectangle`](maths.Rectangle.md)

Returns the framing rectangle of the triangle as a Rectangle object

#### Parameters

##### out?

[`Rectangle`](maths.Rectangle.md)

Optional rectangle to store the result

#### Returns

[`Rectangle`](maths.Rectangle.md)

The framing rectangle

#### Example

```ts
// Basic bounds calculation
const triangle = new Triangle(0, 0, 100, 0, 50, 100);
const bounds = triangle.getBounds();
// bounds: x=0, y=0, width=100, height=100

// Reuse existing rectangle
const rect = new Rectangle();
triangle.getBounds(rect);
```

#### See

 - [Rectangle](maths.Rectangle.md) For rectangle properties
 - [Triangle.contains](#contains) For checking if a point is inside

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`getBounds`](maths.ShapePrimitive.html#getbounds)

***

### strokeContains()

> **strokeContains**(`pointX`, `pointY`, `strokeWidth`, `_alignment`): `boolean`

Checks whether the x and y coordinates given are contained within this triangle including the stroke.

#### Parameters

##### pointX

`number`

The X coordinate of the point to test

##### pointY

`number`

The Y coordinate of the point to test

##### strokeWidth

`number`

The width of the line to check

##### \_alignment

`number` = `0.5`

The alignment of the stroke (1 = inner, 0.5 = centered, 0 = outer)

#### Returns

`boolean`

Whether the x/y coordinates are within this triangle's stroke

#### Example

```ts
// Basic stroke check
const triangle = new Triangle(0, 0, 100, 0, 50, 100);
const isOnStroke = triangle.strokeContains(25, 25, 4); // 4px line width

// Check with different alignments
const innerStroke = triangle.strokeContains(25, 25, 4, 1);   // Inside
const centerStroke = triangle.strokeContains(25, 25, 4, 0.5); // Centered
const outerStroke = triangle.strokeContains(25, 25, 4, 0);   // Outside
```

#### See

 - [Triangle.contains](#contains) For checking fill containment
 - [Triangle.getBounds](#getbounds) For getting stroke bounds

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`strokeContains`](maths.ShapePrimitive.html#strokecontains)
