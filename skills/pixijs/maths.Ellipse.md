# Class: Ellipse

The Ellipse object is used to help draw graphics and can also be used to specify a hit area for containers.

## Example

```ts
// Basic ellipse creation
const ellipse = new Ellipse(100, 100, 20, 10);

// Use as a hit area
container.hitArea = new Ellipse(0, 0, 50, 25);

// Check point containment
const isInside = ellipse.contains(mouseX, mouseY);

// Get bounding box
const bounds = ellipse.getBounds();
```

## Remarks

- Defined by center (x,y) and half dimensions
- Total width = halfWidth * 2
- Total height = halfHeight * 2

## See

 - [Rectangle](maths.Rectangle.md) For rectangular shapes
 - [Circle](maths.Circle.md) For circular shapes

## Implements

- [`ShapePrimitive`](maths.ShapePrimitive.md)

## Constructors

### Constructor

> **new Ellipse**(`x`, `y`, `halfWidth`, `halfHeight`): `Ellipse`

#### Parameters

##### x

`number` = `0`

The X coordinate of the center of this ellipse

##### y

`number` = `0`

The Y coordinate of the center of this ellipse

##### halfWidth

`number` = `0`

The half width of this ellipse

##### halfHeight

`number` = `0`

The half height of this ellipse

#### Returns

`Ellipse`

## Properties

### halfHeight

> **halfHeight**: `number`

The half height of this ellipse

#### Example

```ts
// Set half height
const ellipse = new Ellipse(100, 100);
ellipse.halfHeight = 25; // Total height will be 50
```

#### Default

```ts
0
```

***

### halfWidth

> **halfWidth**: `number`

The half width of this ellipse

#### Example

```ts
// Set half width
const ellipse = new Ellipse(100, 100);
ellipse.halfWidth = 50; // Total width will be 100
```

#### Default

```ts
0
```

***

### type

> `readonly` **type**: `"ellipse"` = `'ellipse'`

The type of the object, mainly used to avoid `instanceof` checks

#### Example

```ts
// Check shape type
const shape = new Ellipse(0, 0, 50, 25);
console.log(shape.type); // 'ellipse'

// Use in type guards
if (shape.type === 'ellipse') {
    console.log(shape.halfWidth, shape.halfHeight);
}
```

#### Default

```ts
'ellipse'
```

#### See

[SHAPE\_PRIMITIVE](maths.SHAPE_PRIMITIVE.md) For all shape types

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`type`](maths.ShapePrimitive.html#type)

***

### x

> **x**: `number`

The X coordinate of the center of this ellipse

#### Example

```ts
// Basic x position
const ellipse = new Ellipse();
ellipse.x = 100;
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

The Y coordinate of the center of this ellipse

#### Example

```ts
// Basic y position
const ellipse = new Ellipse();
ellipse.y = 200;
```

#### Default

```ts
0
```

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`y`](maths.ShapePrimitive.html#y)

## Methods

### clone()

> **clone**(): `Ellipse`

Creates a clone of this Ellipse instance.

#### Returns

`Ellipse`

A copy of the ellipse

#### Example

```ts
// Basic cloning
const original = new Ellipse(100, 100, 50, 25);
const copy = original.clone();

// Clone and modify
const modified = original.clone();
modified.halfWidth *= 2;
modified.halfHeight *= 2;

// Verify independence
console.log(original.halfWidth);  // 50
console.log(modified.halfWidth);  // 100
```

#### See

 - [Ellipse.copyFrom](#copyfrom) For copying into existing ellipse
 - [Ellipse.copyTo](#copyto) For copying to another ellipse

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`clone`](maths.ShapePrimitive.html#clone)

***

### contains()

> **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates given are contained within this ellipse.
Uses normalized coordinates and the ellipse equation to determine containment.

#### Parameters

##### x

`number`

The X coordinate of the point to test

##### y

`number`

The Y coordinate of the point to test

#### Returns

`boolean`

Whether the x/y coords are within this ellipse

#### Example

```ts
// Basic containment check
const ellipse = new Ellipse(100, 100, 50, 25);
const isInside = ellipse.contains(120, 110);
```

#### Remarks

- Uses ellipse equation (x²/a² + y²/b² ≤ 1)
- Returns false if dimensions are 0 or negative
- Normalized to center (0,0) for calculation

#### See

 - [Ellipse.strokeContains](#strokecontains) For checking stroke intersection
 - [Ellipse.getBounds](#getbounds) For getting containing rectangle

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`contains`](maths.ShapePrimitive.html#contains)

***

### copyFrom()

> **copyFrom**(`ellipse`): `this`

Copies another ellipse to this one.

#### Parameters

##### ellipse

`Ellipse`

The ellipse to copy from

#### Returns

`this`

Returns itself

#### Example

```ts
// Basic copying
const source = new Ellipse(100, 100, 50, 25);
const target = new Ellipse();
target.copyFrom(source);
```

#### See

 - [Ellipse.copyTo](#copyto) For copying to another ellipse
 - [Ellipse.clone](#clone) For creating new ellipse copy

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`copyFrom`](maths.ShapePrimitive.html#copyfrom)

***

### copyTo()

> **copyTo**(`ellipse`): `Ellipse`

Copies this ellipse to another one.

#### Parameters

##### ellipse

`Ellipse`

The ellipse to copy to

#### Returns

`Ellipse`

Returns given parameter

#### Example

```ts
// Basic copying
const source = new Ellipse(100, 100, 50, 25);
const target = new Ellipse();
source.copyTo(target);
```

#### See

 - [Ellipse.copyFrom](#copyfrom) For copying from another ellipse
 - [Ellipse.clone](#clone) For creating new ellipse copy

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`copyTo`](maths.ShapePrimitive.html#copyto)

***

### getBounds()

> **getBounds**(`out?`): [`Rectangle`](maths.Rectangle.md)

Returns the framing rectangle of the ellipse as a Rectangle object.

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
const ellipse = new Ellipse(100, 100, 50, 25);
const bounds = ellipse.getBounds();
// bounds: x=50, y=75, width=100, height=50

// Reuse existing rectangle
const rect = new Rectangle();
ellipse.getBounds(rect);
```

#### Remarks

- Creates Rectangle if none provided
- Top-left is (x-halfWidth, y-halfHeight)
- Width is halfWidth * 2
- Height is halfHeight * 2

#### See

 - [Rectangle](maths.Rectangle.md) For rectangle properties
 - [Ellipse.contains](#contains) For checking if a point is inside

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`getBounds`](maths.ShapePrimitive.html#getbounds)

***

### strokeContains()

> **strokeContains**(`x`, `y`, `strokeWidth`, `alignment`): `boolean`

Checks whether the x and y coordinates given are contained within this ellipse including stroke.

#### Parameters

##### x

`number`

The X coordinate of the point to test

##### y

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

Whether the x/y coords are within this ellipse's stroke

#### Example

```ts
// Basic stroke check
const ellipse = new Ellipse(100, 100, 50, 25);
const isOnStroke = ellipse.strokeContains(150, 100, 4); // 4px line width

// Check with different alignments
const innerStroke = ellipse.strokeContains(150, 100, 4, 1);   // Inside
const centerStroke = ellipse.strokeContains(150, 100, 4, 0.5); // Centered
const outerStroke = ellipse.strokeContains(150, 100, 4, 0);   // Outside
```

#### Remarks

- Uses normalized ellipse equations
- Considers stroke alignment
- Returns false if dimensions are 0

#### See

 - [Ellipse.contains](#contains) For checking fill containment
 - [Ellipse.getBounds](#getbounds) For getting stroke bounds

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`strokeContains`](maths.ShapePrimitive.html#strokecontains)

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`
