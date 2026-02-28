# Class: Rectangle

The `Rectangle` object represents a rectangular area defined by its position and dimensions.
Used for hit testing, bounds calculation, and general geometric operations.

## Example

```ts
// Basic rectangle creation
const rect = new Rectangle(100, 100, 200, 150);

// Use as container bounds
container.hitArea = new Rectangle(0, 0, 100, 100);

// Check point containment
const isInside = rect.contains(mouseX, mouseY);

// Manipulate dimensions
rect.width *= 2;
rect.height += 50;
```

## Remarks

- Position defined by top-left corner (x,y)
- Dimensions defined by width and height
- Supports point and rectangle containment
- Common in UI and layout calculations

## See

 - [Circle](maths.Circle.md) For circular shapes
 - [Polygon](maths.Polygon.md) For complex shapes
 - [RoundedRectangle](maths.RoundedRectangle.md) For rounded corners

## Extends

- `Rectangle`

## Implements

- [`ShapePrimitive`](maths.ShapePrimitive.md)

## Constructors

### Constructor

> **new Rectangle**(`x`, `y`, `width`, `height`): `Rectangle`

#### Parameters

##### x

The X coordinate of the upper-left corner of the rectangle

`string` | `number`

##### y

The Y coordinate of the upper-left corner of the rectangle

`string` | `number`

##### width

The overall width of the rectangle

`string` | `number`

##### height

The overall height of the rectangle

`string` | `number`

#### Returns

`Rectangle`

#### Inherited from

`PixiMixins.Rectangle.constructor`

## Properties

### height

> **height**: `number`

The overall height of this rectangle

#### Example

```ts
// Basic height setting
const rect = new Rectangle();
rect.height = 150;
```

#### Default

```ts
0
```

***

### type

> `readonly` **type**: [`SHAPE_PRIMITIVE`](maths.SHAPE_PRIMITIVE.md) = `'rectangle'`

The type of the object, mainly used to avoid `instanceof` checks

#### Example

```ts
// Check shape type
const shape = new Rectangle(0, 0, 100, 100);
console.log(shape.type); // 'rectangle'

// Use in type guards
if (shape.type === 'rectangle') {
    console.log(shape.width, shape.height);
}
```

#### Default

```ts
'rectangle'
```

#### See

[SHAPE\_PRIMITIVE](maths.SHAPE_PRIMITIVE.md) For all shape types

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`type`](maths.ShapePrimitive.html#type)

***

### width

> **width**: `number`

The overall width of this rectangle

#### Example

```ts
// Basic width setting
const rect = new Rectangle();
rect.width = 200;
```

#### Default

```ts
0
```

***

### x

> **x**: `number`

The X coordinate of the upper-left corner of the rectangle

#### Example

```ts
// Basic x position
const rect = new Rectangle();
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

The Y coordinate of the upper-left corner of the rectangle

#### Example

```ts
// Basic y position
const rect = new Rectangle();
rect.y = 100;
```

#### Default

```ts
0
```

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`y`](maths.ShapePrimitive.html#y)

## Accessors

### bottom

#### Get Signature

> **get** **bottom**(): `number`

Returns the bottom edge (y + height) of the rectangle.

##### Example

```ts
// Get bottom edge position
const rect = new Rectangle(100, 100, 200, 150);
console.log(rect.bottom); // 250

// Stack below rectangle
sprite.y = rect.bottom + margin;

// Check vertical bounds
if (point.y < rect.bottom) {
    console.log('Point is above bottom edge');
}
```

##### See

 - [Rectangle.top](#top) For top edge position
 - [Rectangle.height](#height) For height value

##### Returns

`number`

The y-coordinate of the bottom edge

***

### left

#### Get Signature

> **get** **left**(): `number`

Returns the left edge (x-coordinate) of the rectangle.

##### Example

```ts
// Get left edge position
const rect = new Rectangle(100, 100, 200, 150);
console.log(rect.left); // 100

// Use in alignment calculations
sprite.x = rect.left + padding;

// Compare positions
if (point.x > rect.left) {
    console.log('Point is right of rectangle');
}
```

##### See

 - [Rectangle.right](#right) For right edge position
 - [Rectangle.x](#x) For direct x-coordinate access

##### Returns

`number`

The x-coordinate of the left edge

***

### right

#### Get Signature

> **get** **right**(): `number`

Returns the right edge (x + width) of the rectangle.

##### Example

```ts
// Get right edge position
const rect = new Rectangle(100, 100, 200, 150);
console.log(rect.right); // 300

// Align to right edge
sprite.x = rect.right - sprite.width;

// Check boundaries
if (point.x < rect.right) {
    console.log('Point is inside right bound');
}
```

##### See

 - [Rectangle.left](#left) For left edge position
 - [Rectangle.width](#width) For width value

##### Returns

`number`

The x-coordinate of the right edge

***

### top

#### Get Signature

> **get** **top**(): `number`

Returns the top edge (y-coordinate) of the rectangle.

##### Example

```ts
// Get top edge position
const rect = new Rectangle(100, 100, 200, 150);
console.log(rect.top); // 100

// Position above rectangle
sprite.y = rect.top - sprite.height;

// Check vertical position
if (point.y > rect.top) {
    console.log('Point is below top edge');
}
```

##### See

 - [Rectangle.bottom](#bottom) For bottom edge position
 - [Rectangle.y](#y) For direct y-coordinate access

##### Returns

`number`

The y-coordinate of the top edge

***

### EMPTY

#### Get Signature

> **get** `static` **EMPTY**(): `Rectangle`

A constant empty rectangle. This is a new object every time the property is accessed.

##### Example

```ts
// Get fresh empty rectangle
const empty = Rectangle.EMPTY;
console.log(empty.isEmpty()); // true
```

##### See

[Rectangle.isEmpty](#isempty) For empty state testing

##### Returns

`Rectangle`

A new empty rectangle instance

## Methods

### ceil()

> **ceil**(`resolution`, `eps`): `this`

Enlarges rectangle so that its corners lie on a grid defined by resolution.

#### Parameters

##### resolution

`number` = `1`

The grid size to align to (1 = whole pixels)

##### eps

`number` = `0.001`

Small number to prevent floating point errors

#### Returns

`this`

Returns itself

#### Example

```ts
// Basic grid alignment
const rect = new Rectangle(10.2, 10.6, 100.8, 100.4);
rect.ceil(); // Aligns to whole pixels

// Custom resolution grid
const uiRect = new Rectangle(5.3, 5.7, 50.2, 50.8);
uiRect.ceil(0.5); // Aligns to half pixels

// Use with precision value
const preciseRect = new Rectangle(20.001, 20.999, 100.001, 100.999);
preciseRect.ceil(1, 0.01); // Handles small decimal variations
```

#### See

 - [Rectangle.fit](#fit) For constraining to bounds
 - [Rectangle.enlarge](#enlarge) For growing dimensions

***

### clone()

> **clone**(): `Rectangle`

Creates a clone of this Rectangle

#### Returns

`Rectangle`

A copy of the rectangle

#### Example

```ts
// Basic cloning
const original = new Rectangle(100, 100, 200, 150);
const copy = original.clone();

// Clone and modify
const modified = original.clone();
modified.width *= 2;
modified.height += 50;

// Verify independence
console.log(original.width);  // 200
console.log(modified.width);  // 400
```

#### See

 - [Rectangle.copyFrom](#copyfrom) For copying into existing rectangle
 - [Rectangle.copyTo](#copyto) For copying to another rectangle

***

### contains()

> **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates given are contained within this Rectangle

#### Parameters

##### x

`number`

The X coordinate of the point to test

##### y

`number`

The Y coordinate of the point to test

#### Returns

`boolean`

Whether the x/y coordinates are within this Rectangle

#### Example

```ts
// Basic containment check
const rect = new Rectangle(100, 100, 200, 150);
const isInside = rect.contains(150, 125); // true
// Check edge cases
console.log(rect.contains(100, 100)); // true (on edge)
console.log(rect.contains(300, 250)); // false (outside)
```

#### See

 - [Rectangle.containsRect](#containsrect) For rectangle containment
 - [Rectangle.strokeContains](#strokecontains) For checking stroke intersection

***

### containsRect()

> **containsRect**(`other`): `boolean`

Determines whether another Rectangle is fully contained within this Rectangle.

Rectangles that occupy the same space are considered to be containing each other.

Rectangles without area (width or height equal to zero) can't contain anything,
not even other arealess rectangles.

#### Parameters

##### other

`Rectangle`

The Rectangle to check for containment

#### Returns

`boolean`

True if other is fully contained within this Rectangle

#### Example

```ts
// Check if one rectangle contains another
const container = new Rectangle(0, 0, 100, 100);
const inner = new Rectangle(25, 25, 50, 50);

console.log(container.containsRect(inner)); // true

// Check overlapping rectangles
const partial = new Rectangle(75, 75, 50, 50);
console.log(container.containsRect(partial)); // false

// Zero-area rectangles
const empty = new Rectangle(0, 0, 0, 100);
console.log(container.containsRect(empty)); // false
```

#### See

 - [Rectangle.contains](#contains) For point containment
 - [Rectangle.intersects](#intersects) For overlap testing

***

### copyFrom()

> **copyFrom**(`rectangle`): `Rectangle`

Copies another rectangle to this one.

#### Parameters

##### rectangle

`Rectangle`

The rectangle to copy from

#### Returns

`Rectangle`

Returns itself

#### Example

```ts
// Basic copying
const source = new Rectangle(100, 100, 200, 150);
const target = new Rectangle();
target.copyFrom(source);

// Chain with other operations
const rect = new Rectangle()
    .copyFrom(source)
    .pad(10);
```

#### See

 - [Rectangle.copyTo](#copyto) For copying to another rectangle
 - [Rectangle.clone](#clone) For creating new rectangle copy

***

### copyFromBounds()

> **copyFromBounds**(`bounds`): `this`

Converts a Bounds object to a Rectangle object.

#### Parameters

##### bounds

[`Bounds`](rendering.Bounds.md)

The bounds to copy and convert to a rectangle

#### Returns

`this`

Returns itself

#### Example

```ts
// Convert bounds to rectangle
const bounds = container.getBounds();
const rect = new Rectangle().copyFromBounds(bounds);
```

#### See

 - [Bounds](rendering.Bounds.md) For bounds object structure
 - [Rectangle.getBounds](#getbounds) For getting rectangle bounds

***

### copyTo()

> **copyTo**(`rectangle`): `Rectangle`

Copies this rectangle to another one.

#### Parameters

##### rectangle

`Rectangle`

The rectangle to copy to

#### Returns

`Rectangle`

Returns given parameter

#### Example

```ts
// Basic copying
const source = new Rectangle(100, 100, 200, 150);
const target = new Rectangle();
source.copyTo(target);

// Chain with other operations
const result = source
    .copyTo(new Rectangle())
    .getBounds();
```

#### See

 - [Rectangle.copyFrom](#copyfrom) For copying from another rectangle
 - [Rectangle.clone](#clone) For creating new rectangle copy

***

### enlarge()

> **enlarge**(`rectangle`): `this`

Enlarges this rectangle to include the passed rectangle.

#### Parameters

##### rectangle

`Rectangle`

The rectangle to include

#### Returns

`this`

Returns itself

#### Example

```ts
// Basic enlargement
const rect = new Rectangle(50, 50, 100, 100);
const other = new Rectangle(0, 0, 200, 75);
rect.enlarge(other);
// rect is now: x=0, y=0, width=200, height=150

// Use for bounding box calculation
const bounds = new Rectangle();
objects.forEach((obj) => {
    bounds.enlarge(obj.getBounds());
});
```

#### See

 - [Rectangle.fit](#fit) For shrinking to fit within another rectangle
 - [Rectangle.pad](#pad) For adding padding around the rectangle

***

### equals()

> **equals**(`other`): `boolean`

Accepts `other` Rectangle and returns true if the given Rectangle is equal to `this` Rectangle.
> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Parameters

##### other

`Rectangle`

The Rectangle to compare with `this`

#### Returns

`boolean`

Returns true if all `x`, `y`, `width`, and `height` are equal.

#### Example

```ts
// Basic equality check
const rect1 = new Rectangle(0, 0, 100, 100);
const rect2 = new Rectangle(0, 0, 100, 100);
console.log(rect1.equals(rect2)); // true

// Check after modifications
rect2.width = 200;
console.log(rect1.equals(rect2)); // false

// Compare with offset rectangle
const offset = new Rectangle(10, 10, 100, 100);
console.log(rect1.equals(offset)); // false
```

#### Inherited from

`PixiMixins.Rectangle.equals`

***

### fit()

> **fit**(`rectangle`): `this`

Fits this rectangle around the passed one.

#### Parameters

##### rectangle

`Rectangle`

The rectangle to fit around

#### Returns

`this`

Returns itself

#### Example

```ts
// Basic fitting
const container = new Rectangle(0, 0, 100, 100);
const content = new Rectangle(25, 25, 200, 200);
content.fit(container); // Clips to container bounds
```

#### See

 - [Rectangle.enlarge](#enlarge) For growing to include another rectangle
 - [Rectangle.pad](#pad) For adding padding around the rectangle

***

### getBounds()

> **getBounds**(`out?`): `Rectangle`

Returns the framing rectangle of the rectangle as a Rectangle object

#### Parameters

##### out?

`Rectangle`

Optional rectangle to store the result

#### Returns

`Rectangle`

The framing rectangle

#### Example

```ts
// Basic bounds retrieval
const rect = new Rectangle(100, 100, 200, 150);
const bounds = rect.getBounds();

// Reuse existing rectangle
const out = new Rectangle();
rect.getBounds(out);
```

#### See

 - [Rectangle.copyFrom](#copyfrom) For direct copying
 - [Rectangle.clone](#clone) For creating new copy

***

### intersection()

> **intersection**\<`T`\>(`other`, `outRect?`): `T`

If the area of the intersection between the Rectangles `other` and `this` is not zero,
returns the area of intersection as a Rectangle object. Otherwise, return an empty Rectangle
with its properties set to zero.

Rectangles without area (width or height equal to zero) can't intersect or be intersected
and will always return an empty rectangle with its properties set to zero.

> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* `Rectangle` = `Rectangle`

#### Parameters

##### other

`Rectangle`

The Rectangle to intersect with `this`.

##### outRect?

`T`

A Rectangle object in which to store the value,
optional (otherwise will create a new Rectangle).

#### Returns

`T`

The intersection of `this` and `other`.

#### Example

```ts
// Basic intersection check
const rect1 = new Rectangle(0, 0, 100, 100);
const rect2 = new Rectangle(50, 50, 100, 100);

const overlap = rect1.intersection(rect2);
console.log(overlap); // Rectangle(50, 50, 50, 50)

// Using output rectangle
const out = new Rectangle();
rect1.intersection(rect2, out);

// Zero-area rectangles
const empty = new Rectangle(0, 0, 0, 100);
const result = rect1.intersection(empty);
console.log(result); // Rectangle(0, 0, 0, 0)
```

#### See

 - [Rectangle.intersects](#intersects) For boolean intersection test
 - [Rectangle.union](#union) For combining rectangles

#### Inherited from

`PixiMixins.Rectangle.intersection`

***

### intersects()

> **intersects**(`other`, `transform?`): `boolean`

Determines whether the `other` Rectangle transformed by `transform` intersects with `this` Rectangle object.

Returns true only if the area of the intersection is greater than 0.
This means that rectangles sharing only a side are not considered intersecting.

#### Parameters

##### other

`Rectangle`

The Rectangle to intersect with `this`

##### transform?

[`Matrix`](maths.Matrix.md)

Optional transformation matrix of `other`

#### Returns

`boolean`

True if the transformed `other` Rectangle intersects with `this`

#### Example

```ts
// Basic intersection check
const rect1 = new Rectangle(0, 0, 100, 100);
const rect2 = new Rectangle(50, 50, 100, 100);
console.log(rect1.intersects(rect2)); // true

// With transformation matrix
const matrix = new Matrix();
matrix.rotate(Math.PI / 4); // 45 degrees
console.log(rect1.intersects(rect2, matrix)); // Checks with rotation

// Edge cases
const zeroWidth = new Rectangle(0, 0, 0, 100);
console.log(rect1.intersects(zeroWidth)); // false (no area)
```

#### Remarks

- Returns true only if intersection area is > 0
- Rectangles sharing only a side are not intersecting
- Zero-area rectangles cannot intersect anything
- Supports optional transformation matrix

#### See

 - [Rectangle.containsRect](#containsrect) For containment testing
 - [Rectangle.contains](#contains) For point testing

***

### isEmpty()

> **isEmpty**(): `boolean`

Determines whether the Rectangle is empty (has no area).

#### Returns

`boolean`

True if the rectangle has no area

#### Example

```ts
// Check zero dimensions
const rect = new Rectangle(100, 100, 0, 50);
console.log(rect.isEmpty()); // true
```

#### See

 - [Rectangle.width](#width) For width value
 - [Rectangle.height](#height) For height value

***

### pad()

> **pad**(`paddingX`, `paddingY`): `this`

Pads the rectangle making it grow in all directions.

If paddingY is omitted, both paddingX and paddingY will be set to paddingX.

#### Parameters

##### paddingX

`number` = `0`

The horizontal padding amount

##### paddingY

`number` = `paddingX`

The vertical padding amount

#### Returns

`this`

Returns itself

#### Example

```ts
// Basic padding
const rect = new Rectangle(100, 100, 200, 150);
rect.pad(10); // Adds 10px padding on all sides

// Different horizontal and vertical padding
const uiRect = new Rectangle(0, 0, 100, 50);
uiRect.pad(20, 10); // 20px horizontal, 10px vertical
```

#### Remarks

- Adjusts x/y by subtracting padding
- Increases width/height by padding * 2
- Common in UI layout calculations
- Chainable with other methods

#### See

 - [Rectangle.enlarge](#enlarge) For growing to include another rectangle
 - [Rectangle.fit](#fit) For shrinking to fit within another rectangle

***

### scale()

> **scale**(`x`, `y`): `this`

Scales the rectangle's dimensions and position by the specified factors.

#### Parameters

##### x

`number`

The factor by which to scale the horizontal properties (x, width).

##### y

`number` = `x`

The factor by which to scale the vertical properties (y, height).

#### Returns

`this`

Returns itself

#### Example

```ts
const rect = new Rectangle(50, 50, 100, 100);

// Scale uniformly
rect.scale(0.5, 0.5);
// rect is now: x=25, y=25, width=50, height=50

// non-uniformly
rect.scale(0.5, 1);
// rect is now: x=25, y=50, width=50, height=100
```

***

### set()

> **set**(`x`, `y`, `width`, `height`): `this`

Sets the position and dimensions of the rectangle.

#### Parameters

##### x

`number`

The X coordinate of the upper-left corner of the rectangle

##### y

`number`

The Y coordinate of the upper-left corner of the rectangle

##### width

`number`

The overall width of the rectangle

##### height

`number`

The overall height of the rectangle

#### Returns

`this`

Returns itself for method chaining

#### Example

```ts
// Basic usage
const rect = new Rectangle();
rect.set(100, 100, 200, 150);

// Chain with other operations
const bounds = new Rectangle()
    .set(0, 0, 100, 100)
    .pad(10);
```

#### See

 - [Rectangle.copyFrom](#copyfrom) For copying from another rectangle
 - [Rectangle.clone](#clone) For creating a new copy

***

### strokeContains()

> **strokeContains**(`x`, `y`, `strokeWidth`, `alignment`): `boolean`

Checks whether the x and y coordinates given are contained within this rectangle including the stroke.

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

Whether the x/y coordinates are within this rectangle's stroke

#### Example

```ts
// Basic stroke check
const rect = new Rectangle(100, 100, 200, 150);
const isOnStroke = rect.strokeContains(150, 100, 4); // 4px line width

// Check with different alignments
const innerStroke = rect.strokeContains(150, 100, 4, 1);   // Inside
const centerStroke = rect.strokeContains(150, 100, 4, 0.5); // Centered
const outerStroke = rect.strokeContains(150, 100, 4, 0);   // Outside
```

#### See

 - [Rectangle.contains](#contains) For checking fill containment
 - [Rectangle.getBounds](#getbounds) For getting stroke bounds

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

***

### union()

> **union**\<`T`\>(`other`, `outRect?`): `T`

Adds `this` and `other` Rectangles together to create a new Rectangle object filling
the horizontal and vertical space between the two rectangles.
> [!IMPORTANT] Only available with **pixi.js/math-extras**.

#### Type Parameters

##### T

`T` *extends* `Rectangle` = `Rectangle`

#### Parameters

##### other

`Rectangle`

The Rectangle to unite with `this`

##### outRect?

`T`

Optional Rectangle to store the result

#### Returns

`T`

The union of `this` and `other`

#### Example

```ts
// Basic union
const rect1 = new Rectangle(0, 0, 100, 100);
const rect2 = new Rectangle(50, 50, 100, 100);
const combined = rect1.union(rect2);
console.log(combined); // Rectangle(0, 0, 150, 150)

// Using output rectangle
const out = new Rectangle();
rect1.union(rect2, out);

// Chain multiple unions
const rect3 = new Rectangle(200, 200, 50, 50);
const result = rect1.union(rect2).union(rect3);
```

#### See

 - [Rectangle.intersection](#intersection) For overlap area
 - [Rectangle.containsRect](#containsrect) For containment testing

#### Inherited from

`PixiMixins.Rectangle.union`
