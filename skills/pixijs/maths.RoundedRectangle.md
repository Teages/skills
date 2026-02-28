# Class: RoundedRectangle

The `RoundedRectangle` object represents a rectangle with rounded corners.
Defined by position, dimensions and corner radius.

## Example

```ts
// Basic rectangle creation
const rect = new RoundedRectangle(100, 100, 200, 150, 20);
// Use as container hit area
container.hitArea = new RoundedRectangle(0, 0, 100, 100, 10);
// Check point containment
const isInside = rect.contains(mouseX, mouseY);
// Get bounds
const bounds = rect.getBounds();
```

## Remarks

- Position defined by top-left corner
- Radius clamped to half smallest dimension
- Common in UI elements

## See

[Rectangle](maths.Rectangle.md) For non-rounded rectangles

## Implements

- [`ShapePrimitive`](maths.ShapePrimitive.md)

## Constructors

### Constructor

> **new RoundedRectangle**(`x`, `y`, `width`, `height`, `radius`): `RoundedRectangle`

#### Parameters

##### x

`number` = `0`

The X coordinate of the upper-left corner of the rounded rectangle

##### y

`number` = `0`

The Y coordinate of the upper-left corner of the rounded rectangle

##### width

`number` = `0`

The overall width of this rounded rectangle

##### height

`number` = `0`

The overall height of this rounded rectangle

##### radius

`number` = `20`

Controls the radius of the rounded corners

#### Returns

`RoundedRectangle`

## Properties

### height

> **height**: `number`

The overall height of this rounded rectangle

#### Example

```ts
// Basic height setting
const rect = new RoundedRectangle();
rect.height = 150; // Total height will be 150
```

#### Default

```ts
0
```

***

### radius

> **radius**: `number`

Controls the radius of the rounded corners

#### Example

```ts
// Basic radius setting
const rect = new RoundedRectangle(0, 0, 200, 150);
rect.radius = 20;

// Clamp to maximum safe radius
rect.radius = Math.min(rect.width, rect.height) / 2;

// Create pill shape
rect.radius = rect.height / 2;
```

#### Remarks

- Automatically clamped to half of smallest dimension
- Common values: 0-20 for UI elements
- Higher values create more rounded corners

#### Default

```ts
20
```

***

### type

> `readonly` **type**: [`SHAPE_PRIMITIVE`](maths.SHAPE_PRIMITIVE.md) = `'roundedRectangle'`

The type of the object, mainly used to avoid `instanceof` checks

#### Example

```ts
// Check shape type
const shape = new RoundedRectangle(0, 0, 100, 100, 20);
console.log(shape.type); // 'roundedRectangle'

// Use in type guards
if (shape.type === 'roundedRectangle') {
    console.log(shape.radius);
}
```

#### Default

```ts
'roundedRectangle'
```

#### See

[SHAPE\_PRIMITIVE](maths.SHAPE_PRIMITIVE.md) For all shape types

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`type`](maths.ShapePrimitive.html#type)

***

### width

> **width**: `number`

The overall width of this rounded rectangle

#### Example

```ts
// Basic width setting
const rect = new RoundedRectangle();
rect.width = 200; // Total width will be 200
```

#### Default

```ts
0
```

***

### x

> **x**: `number`

The X coordinate of the upper-left corner of the rounded rectangle

#### Example

```ts
// Basic x position
const rect = new RoundedRectangle();
rect.x = 100;
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

The Y coordinate of the upper-left corner of the rounded rectangle

#### Example

```ts
// Basic y position
const rect = new RoundedRectangle();
rect.y = 100;
```

#### Default

```ts
0
```

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`y`](maths.ShapePrimitive.html#y)

## Methods

### clone()

> **clone**(): `RoundedRectangle`

Creates a clone of this Rounded Rectangle.

#### Returns

`RoundedRectangle`

A copy of the rounded rectangle

#### Example

```ts
// Basic cloning
const original = new RoundedRectangle(100, 100, 200, 150, 20);
const copy = original.clone();

// Clone and modify
const modified = original.clone();
modified.radius = 30;
modified.width *= 2;

// Verify independence
console.log(original.radius);  // 20
console.log(modified.radius);  // 30
```

#### See

 - [RoundedRectangle.copyFrom](#copyfrom) For copying into existing rectangle
 - [RoundedRectangle.copyTo](#copyto) For copying to another rectangle

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`clone`](maths.ShapePrimitive.html#clone)

***

### contains()

> **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates given are contained within this Rounded Rectangle

#### Parameters

##### x

`number`

The X coordinate of the point to test

##### y

`number`

The Y coordinate of the point to test

#### Returns

`boolean`

Whether the x/y coordinates are within this Rounded Rectangle

#### Example

```ts
// Basic containment check
const rect = new RoundedRectangle(100, 100, 200, 150, 20);
const isInside = rect.contains(150, 125); // true
// Check corner radius
const corner = rect.contains(100, 100); // false if within corner curve
```

#### Remarks

- Returns false if width/height is 0 or negative
- Handles rounded corners with radius check

#### See

 - [RoundedRectangle.strokeContains](#strokecontains) For checking stroke intersection
 - [RoundedRectangle.getBounds](#getbounds) For getting containing rectangle

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`contains`](maths.ShapePrimitive.html#contains)

***

### copyFrom()

> **copyFrom**(`rectangle`): `this`

Copies another rectangle to this one.

#### Parameters

##### rectangle

`RoundedRectangle`

The rectangle to copy from

#### Returns

`this`

Returns itself

#### Example

```ts
// Basic copying
const source = new RoundedRectangle(100, 100, 200, 150, 20);
const target = new RoundedRectangle();
target.copyFrom(source);

// Chain with other operations
const rect = new RoundedRectangle()
    .copyFrom(source)
    .getBounds(rect);
```

#### See

 - [RoundedRectangle.copyTo](#copyto) For copying to another rectangle
 - [RoundedRectangle.clone](#clone) For creating new rectangle copy

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`copyFrom`](maths.ShapePrimitive.html#copyfrom)

***

### copyTo()

> **copyTo**(`rectangle`): `RoundedRectangle`

Copies this rectangle to another one.

#### Parameters

##### rectangle

`RoundedRectangle`

The rectangle to copy to

#### Returns

`RoundedRectangle`

Returns given parameter

#### Example

```ts
// Basic copying
const source = new RoundedRectangle(100, 100, 200, 150, 20);
const target = new RoundedRectangle();
source.copyTo(target);

// Chain with other operations
const result = source
    .copyTo(new RoundedRectangle())
    .getBounds();
```

#### See

 - [RoundedRectangle.copyFrom](#copyfrom) For copying from another rectangle
 - [RoundedRectangle.clone](#clone) For creating new rectangle copy

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`copyTo`](maths.ShapePrimitive.html#copyto)

***

### getBounds()

> **getBounds**(`out?`): [`Rectangle`](maths.Rectangle.md)

Returns the framing rectangle of the rounded rectangle as a Rectangle object

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
const rect = new RoundedRectangle(100, 100, 200, 150, 20);
const bounds = rect.getBounds();
// bounds: x=100, y=100, width=200, height=150

// Reuse existing rectangle
const out = new Rectangle();
rect.getBounds(out);
```

#### Remarks

- Rectangle matches outer dimensions
- Ignores corner radius

#### See

 - [Rectangle](maths.Rectangle.md) For rectangle properties
 - [RoundedRectangle.contains](#contains) For checking if a point is inside

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`getBounds`](maths.ShapePrimitive.html#getbounds)

***

### strokeContains()

> **strokeContains**(`pX`, `pY`, `strokeWidth`, `alignment`): `boolean`

Checks whether the x and y coordinates given are contained within this rectangle including the stroke.

#### Parameters

##### pX

`number`

The X coordinate of the point to test

##### pY

`number`

The Y coordinate of the point to test

##### strokeWidth

`number`

The width of the line to check

##### alignment

`number` = `0.5`

The alignment of the stroke (1 = inner, 0.5 = centered, 0 = outer)

#### Returns

`boolean`

Whether the x/y coordinates are within this rectangle's stroke

#### Example

```ts
// Basic stroke check
const rect = new RoundedRectangle(100, 100, 200, 150, 20);
const isOnStroke = rect.strokeContains(150, 100, 4); // 4px line width

// Check with different alignments
const innerStroke = rect.strokeContains(150, 100, 4, 1);   // Inside
const centerStroke = rect.strokeContains(150, 100, 4, 0.5); // Centered
const outerStroke = rect.strokeContains(150, 100, 4, 0);   // Outside
```

#### See

 - [RoundedRectangle.contains](#contains) For checking fill containment
 - [RoundedRectangle.getBounds](#getbounds) For getting stroke bounds

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`strokeContains`](maths.ShapePrimitive.html#strokecontains)

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`
