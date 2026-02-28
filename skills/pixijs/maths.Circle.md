# Class: Circle

The Circle object represents a circle shape in a two-dimensional coordinate system.
Used for drawing graphics and specifying hit areas for containers.

## Example

```ts
// Basic circle creation
const circle = new Circle(100, 100, 50);

// Use as hit area
container.hitArea = new Circle(0, 0, 100);

// Check point containment
const isInside = circle.contains(mouseX, mouseY);

// Get bounding box
const bounds = circle.getBounds();
```

## Remarks

- Defined by center (x,y) and radius
- Supports point containment tests
- Can check stroke intersections

## See

[Rectangle](maths.Rectangle.md) For rectangular shapes

## Implements

- [`ShapePrimitive`](maths.ShapePrimitive.md)

## Constructors

### Constructor

> **new Circle**(`x`, `y`, `radius`): `Circle`

#### Parameters

##### x

`number` = `0`

The X coordinate of the center of this circle

##### y

`number` = `0`

The Y coordinate of the center of this circle

##### radius

`number` = `0`

The radius of the circle

#### Returns

`Circle`

## Properties

### radius

> **radius**: `number`

The radius of the circle

#### Example

```ts
// Basic radius setting
const circle = new Circle(100, 100);
circle.radius = 50;

// Calculate area
const area = Math.PI * circle.radius * circle.radius;
```

#### Default

```ts
0
```

***

### type

> `readonly` **type**: [`SHAPE_PRIMITIVE`](maths.SHAPE_PRIMITIVE.md) = `'circle'`

The type of the object, mainly used to avoid `instanceof` checks.

#### Example

```ts
// Check shape type
const shape = new Circle(0, 0, 50);
console.log(shape.type); // 'circle'

// Use in type guards
if (shape.type === 'circle') {
    console.log(shape.radius);
}
```

#### Remarks

- Used for shape type checking
- More efficient than instanceof
- Read-only property

#### Default

```ts
'circle'
```

#### See

 - [SHAPE\_PRIMITIVE](maths.SHAPE_PRIMITIVE.md) For all shape types
 - [ShapePrimitive](maths.ShapePrimitive.md) For shape interface

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`type`](maths.ShapePrimitive.html#type)

***

### x

> **x**: `number`

The X coordinate of the center of this circle

#### Example

```ts
// Basic x position
const circle = new Circle();
circle.x = 100;

// Center circle on point
circle.x = point.x;
```

#### Default

```ts
0
```

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`x`](maths.ShapePrimitive.html#x)

***

### y

> **y**: `number`

The Y coordinate of the center of this circle

#### Example

```ts
// Basic y position
const circle = new Circle();
circle.y = 200;

// Center circle on point
circle.y = point.y;
```

#### Default

```ts
0
```

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`y`](maths.ShapePrimitive.html#y)

## Methods

### clone()

> **clone**(): `Circle`

Creates a clone of this Circle instance.

#### Returns

`Circle`

A copy of the Circle

#### Example

```ts
// Basic circle cloning
const original = new Circle(100, 100, 50);
const copy = original.clone();

// Clone and modify
const modified = original.clone();
modified.radius = 75;

// Verify independence
console.log(original.radius); // 50
console.log(modified.radius); // 75
```

#### See

 - [Circle.copyFrom](#copyfrom) For copying into existing circle
 - [Circle.copyTo](#copyto) For copying to another circle

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`clone`](maths.ShapePrimitive.html#clone)

***

### contains()

> **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates given are contained within this circle.

Uses the distance formula to determine if a point is inside the circle's radius.

Commonly used for hit testing in PixiJS events and graphics.

#### Parameters

##### x

`number`

The X coordinate of the point to test

##### y

`number`

The Y coordinate of the point to test

#### Returns

`boolean`

Whether the x/y coordinates are within this Circle

#### Example

```ts
// Basic containment check
const circle = new Circle(100, 100, 50);
const isInside = circle.contains(120, 120);

// Check mouse position
const circle = new Circle(0, 0, 100);
container.hitArea = circle;
container.on('pointermove', (e) => {
    // only called if pointer is within circle
});
```

#### See

 - [Circle.strokeContains](#strokecontains) For checking stroke intersection
 - [Circle.getBounds](#getbounds) For getting bounding box

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`contains`](maths.ShapePrimitive.html#contains)

***

### copyFrom()

> **copyFrom**(`circle`): `this`

Copies another circle to this one.

#### Parameters

##### circle

`Circle`

The circle to copy from

#### Returns

`this`

Returns itself

#### Example

```ts
// Basic copying
const source = new Circle(100, 100, 50);
const target = new Circle();
target.copyFrom(source);
```

#### See

 - [Circle.copyTo](#copyto) For copying to another circle
 - [Circle.clone](#clone) For creating new circle copy

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`copyFrom`](maths.ShapePrimitive.html#copyfrom)

***

### copyTo()

> **copyTo**(`circle`): `Circle`

Copies this circle to another one.

#### Parameters

##### circle

`Circle`

The circle to copy to

#### Returns

`Circle`

Returns given parameter

#### Example

```ts
// Basic copying
const source = new Circle(100, 100, 50);
const target = new Circle();
source.copyTo(target);
```

#### See

 - [Circle.copyFrom](#copyfrom) For copying from another circle
 - [Circle.clone](#clone) For creating new circle copy

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`copyTo`](maths.ShapePrimitive.html#copyto)

***

### getBounds()

> **getBounds**(`out?`): [`Rectangle`](maths.Rectangle.md)

Returns the framing rectangle of the circle as a Rectangle object.

#### Parameters

##### out?

[`Rectangle`](maths.Rectangle.md)

Optional Rectangle object to store the result

#### Returns

[`Rectangle`](maths.Rectangle.md)

The framing rectangle

#### Example

```ts
// Basic bounds calculation
const circle = new Circle(100, 100, 50);
const bounds = circle.getBounds();
// bounds: x=50, y=50, width=100, height=100

// Reuse existing rectangle
const rect = new Rectangle();
circle.getBounds(rect);
```

#### See

 - [Rectangle](maths.Rectangle.md) For rectangle properties
 - [Circle.contains](#contains) For point containment

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`getBounds`](maths.ShapePrimitive.html#getbounds)

***

### strokeContains()

> **strokeContains**(`x`, `y`, `width`, `alignment`): `boolean`

Checks whether the x and y coordinates given are contained within this circle including the stroke.

#### Parameters

##### x

`number`

The X coordinate of the point to test

##### y

`number`

The Y coordinate of the point to test

##### width

`number`

The width of the line to check

##### alignment

`number` = `0.5`

The alignment of the stroke, 0.5 by default

#### Returns

`boolean`

Whether the x/y coordinates are within this Circle's stroke

#### Example

```ts
// Basic stroke check
const circle = new Circle(100, 100, 50);
const isOnStroke = circle.strokeContains(150, 100, 4); // 4px line width

// Check with different alignments
const innerStroke = circle.strokeContains(150, 100, 4, 1);   // Inside
const centerStroke = circle.strokeContains(150, 100, 4, 0.5); // Centered
const outerStroke = circle.strokeContains(150, 100, 4, 0);   // Outside
```

#### See

 - [Circle.contains](#contains) For checking fill containment
 - [Circle.getBounds](#getbounds) For getting stroke bounds

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`strokeContains`](maths.ShapePrimitive.html#strokecontains)

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`
