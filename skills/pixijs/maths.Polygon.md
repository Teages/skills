# Class: Polygon

A class to define a shape via user defined coordinates.
Used for creating complex shapes and hit areas with custom points.

## Example

```ts
// Create polygon from array of points
const polygon1 = new Polygon([
    new Point(0, 0),
    new Point(0, 100),
    new Point(100, 100)
]);

// Create from array of coordinates
const polygon2 = new Polygon([0, 0, 0, 100, 100, 100]);

// Create from sequence of points
const polygon3 = new Polygon(
    new Point(0, 0),
    new Point(0, 100),
    new Point(100, 100)
);

// Create from sequence of coordinates
const polygon4 = new Polygon(0, 0, 0, 100, 100, 100);

// Use as container hit area
container.hitArea = new Polygon([0, 0, 100, 0, 50, 100]);
```

## See

[Point](maths.Point.md) For point objects used in construction

## Implements

- [`ShapePrimitive`](maths.ShapePrimitive.md)

## Constructors

### Constructor

> **new Polygon**(`points`): `Polygon`

#### Parameters

##### points

`number`[] | [`PointData`](maths.PointData.md)[]

#### Returns

`Polygon`

#### Param

This can be an array of Points
 that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
 the arguments passed can be all the points of the polygon e.g.
 `new Polygon(new Point(), new Point(), ...)`, or the arguments passed can be flat
 x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.

### Constructor

> **new Polygon**(...`points`): `Polygon`

#### Parameters

##### points

`number`[] | [`PointData`](maths.PointData.md)[]

#### Returns

`Polygon`

#### Param

This can be an array of Points
 that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
 the arguments passed can be all the points of the polygon e.g.
 `new Polygon(new Point(), new Point(), ...)`, or the arguments passed can be flat
 x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.

## Properties

### closePath

> **closePath**: `boolean`

Indicates if the polygon path is closed.

#### Example

```ts
// Create open polygon
const polygon = new Polygon([0, 0, 100, 0, 50, 100]);
polygon.closePath = false;

// Check path state
if (polygon.closePath) {
    // Last point connects to first
}
```

#### Remarks

- True by default
- False after moveTo
- True after closePath

#### Default

```ts
true
```

***

### points

> **points**: `number`[]

An array of the points of this polygon stored as a flat array of numbers.

#### Example

```ts
// Access points directly
const polygon = new Polygon([0, 0, 100, 0, 50, 100]);
console.log(polygon.points); // [0, 0, 100, 0, 50, 100]

// Modify points
polygon.points[0] = 10; // Move first x coordinate
polygon.points[1] = 10; // Move first y coordinate
```

#### Remarks

- Stored as [x1, y1, x2, y2, ...]
- Each pair represents a vertex
- Length is always even
- Can be modified directly

***

### type

> `readonly` **type**: [`SHAPE_PRIMITIVE`](maths.SHAPE_PRIMITIVE.md) = `'polygon'`

The type of the object, mainly used to avoid `instanceof` checks

#### Example

```ts
// Check shape type
const shape = new Polygon([0, 0, 100, 0, 50, 100]);
console.log(shape.type); // 'polygon'

// Use in type guards
if (shape.type === 'polygon') {
    // TypeScript knows this is a Polygon
    console.log(shape.points.length);
}
```

#### Default

```ts
'polygon'
```

#### See

[SHAPE\_PRIMITIVE](maths.SHAPE_PRIMITIVE.md) For all shape types

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`type`](maths.ShapePrimitive.html#type)

## Accessors

### lastX

#### Get Signature

> **get** **lastX**(): `number`

Get the last X coordinate of the polygon.

##### Example

```ts
// Basic coordinate access
const polygon = new Polygon([0, 0, 100, 200, 300, 400]);
console.log(polygon.lastX); // 300
```

##### See

 - [Polygon.lastY](#lasty) For last Y coordinate
 - [Polygon.points](#points) For raw points array

##### Returns

`number`

The x-coordinate of the last vertex

***

### lastY

#### Get Signature

> **get** **lastY**(): `number`

Get the last Y coordinate of the polygon.

##### Example

```ts
// Basic coordinate access
const polygon = new Polygon([0, 0, 100, 200, 300, 400]);
console.log(polygon.lastY); // 400
```

##### See

 - [Polygon.lastX](#lastx) For last X coordinate
 - [Polygon.points](#points) For raw points array

##### Returns

`number`

The y-coordinate of the last vertex

***

### startX

#### Get Signature

> **get** **startX**(): `number`

Get the first X coordinate of the polygon.

##### Example

```ts
// Basic coordinate access
const polygon = new Polygon([0, 0, 100, 200, 300, 400]);
console.log(polygon.x); // 0
```

##### See

 - [Polygon.startY](#starty) For first Y coordinate
 - [Polygon.points](#points) For raw points array

##### Returns

`number`

The x-coordinate of the first vertex

***

### startY

#### Get Signature

> **get** **startY**(): `number`

Get the first Y coordinate of the polygon.

##### Example

```ts
// Basic coordinate access
const polygon = new Polygon([0, 0, 100, 200, 300, 400]);
console.log(polygon.y); // 0
```

##### See

 - [Polygon.startX](#startx) For first X coordinate
 - [Polygon.points](#points) For raw points array

##### Returns

`number`

The y-coordinate of the first vertex

***

### x

#### Get Signature

> **get** **x**(): `number`

Get the last X coordinate of the polygon.

##### Deprecated

since 8.11.0, use [Polygon.lastX](#lastx) instead.

##### Returns

`number`

The X coordinate of the shape

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`x`](maths.ShapePrimitive.html#x)

***

### y

#### Get Signature

> **get** **y**(): `number`

Get the last Y coordinate of the polygon.

##### Deprecated

since 8.11.0, use [Polygon.lastY](#lasty) instead.

##### Returns

`number`

The Y coordinate of the shape

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`y`](maths.ShapePrimitive.html#y)

## Methods

### clone()

> **clone**(): `Polygon`

Creates a clone of this polygon.

#### Returns

`Polygon`

A copy of the polygon

#### Example

```ts
// Basic cloning
const original = new Polygon([0, 0, 100, 0, 50, 100]);
const copy = original.clone();

// Clone and modify
const modified = original.clone();
modified.points[0] = 10; // Modify first x coordinate
```

#### See

 - [Polygon.copyFrom](#copyfrom) For copying into existing polygon
 - [Polygon.copyTo](#copyto) For copying to another polygon

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`clone`](maths.ShapePrimitive.html#clone)

***

### contains()

> **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates passed to this function are contained within this polygon.
Uses raycasting algorithm for point-in-polygon testing.

#### Parameters

##### x

`number`

The X coordinate of the point to test

##### y

`number`

The Y coordinate of the point to test

#### Returns

`boolean`

Whether the x/y coordinates are within this polygon

#### Example

```ts
// Basic containment check
const polygon = new Polygon([0, 0, 100, 0, 50, 100]);
const isInside = polygon.contains(25, 25); // true
```

#### See

 - [Polygon.strokeContains](#strokecontains) For checking stroke intersection
 - [Polygon.containsPolygon](#containspolygon) For polygon-in-polygon testing

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`contains`](maths.ShapePrimitive.html#contains)

***

### containsPolygon()

> **containsPolygon**(`polygon`): `boolean`

Checks if this polygon completely contains another polygon.
Used for detecting holes in shapes, like when parsing SVG paths.

#### Parameters

##### polygon

`Polygon`

The polygon to test for containment

#### Returns

`boolean`

True if this polygon completely contains the other polygon

#### Example

```ts
// Basic containment check
const outerSquare = new Polygon([0,0, 100,0, 100,100, 0,100]); // A square
const innerSquare = new Polygon([25,25, 75,25, 75,75, 25,75]); // A smaller square inside

outerSquare.containsPolygon(innerSquare); // Returns true
innerSquare.containsPolygon(outerSquare); // Returns false
```

#### Remarks

- Uses bounds check for quick rejection
- Tests all points for containment

#### See

 - [Polygon.contains](#contains) For single point testing
 - [Polygon.getBounds](#getbounds) For bounds calculation

***

### copyFrom()

> **copyFrom**(`polygon`): `this`

Copies another polygon to this one.

#### Parameters

##### polygon

`Polygon`

The polygon to copy from

#### Returns

`this`

Returns itself

#### Example

```ts
// Basic copying
const source = new Polygon([0, 0, 100, 0, 50, 100]);
const target = new Polygon();
target.copyFrom(source);
```

#### See

 - [Polygon.copyTo](#copyto) For copying to another polygon
 - [Polygon.clone](#clone) For creating new polygon copy

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`copyFrom`](maths.ShapePrimitive.html#copyfrom)

***

### copyTo()

> **copyTo**(`polygon`): `Polygon`

Copies this polygon to another one.

#### Parameters

##### polygon

`Polygon`

The polygon to copy to

#### Returns

`Polygon`

Returns given parameter

#### Example

```ts
// Basic copying
const source = new Polygon([0, 0, 100, 0, 50, 100]);
const target = new Polygon();
source.copyTo(target);
```

#### See

 - [Polygon.copyFrom](#copyfrom) For copying from another polygon
 - [Polygon.clone](#clone) For creating new polygon copy

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`copyTo`](maths.ShapePrimitive.html#copyto)

***

### getBounds()

> **getBounds**(`out?`): [`Rectangle`](maths.Rectangle.md)

Returns the framing rectangle of the polygon as a Rectangle object.

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
const polygon = new Polygon([0, 0, 100, 0, 50, 100]);
const bounds = polygon.getBounds();
// bounds: x=0, y=0, width=100, height=100

// Reuse existing rectangle
const rect = new Rectangle();
polygon.getBounds(rect);
```

#### See

 - [Rectangle](maths.Rectangle.md) For rectangle properties
 - [Polygon.contains](#contains) For checking if a point is inside

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`getBounds`](maths.ShapePrimitive.html#getbounds)

***

### isClockwise()

> **isClockwise**(): `boolean`

Determines whether the polygon's points are arranged in a clockwise direction.
Uses the shoelace formula (surveyor's formula) to calculate the signed area.

A positive area indicates clockwise winding, while negative indicates counter-clockwise.

The formula sums up the cross products of adjacent vertices:
For each pair of adjacent points (x1,y1) and (x2,y2), we calculate (x1*y2 - x2*y1)
The final sum divided by 2 gives the signed area - positive for clockwise.

#### Returns

`boolean`

`true` if the polygon's points are arranged clockwise, `false` if counter-clockwise

#### Example

```ts
// Check polygon winding
const polygon = new Polygon([0, 0, 100, 0, 50, 100]);
console.log(polygon.isClockwise()); // Check direction

// Use in path construction
const hole = new Polygon([25, 25, 75, 25, 75, 75, 25, 75]);
if (hole.isClockwise() === shape.isClockwise()) {
    hole.points.reverse(); // Reverse for proper hole winding
}
```

***

### strokeContains()

> **strokeContains**(`x`, `y`, `strokeWidth`, `alignment`): `boolean`

Checks whether the x and y coordinates given are contained within this polygon including the stroke.

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

Whether the x/y coordinates are within this polygon's stroke

#### Example

```ts
// Basic stroke check
const polygon = new Polygon([0, 0, 100, 0, 50, 100]);
const isOnStroke = polygon.strokeContains(25, 25, 4); // 4px line width

// Check with different alignments
const innerStroke = polygon.strokeContains(25, 25, 4, 1);   // Inside
const centerStroke = polygon.strokeContains(25, 25, 4, 0.5); // Centered
const outerStroke = polygon.strokeContains(25, 25, 4, 0);   // Outside
```

#### See

 - [Polygon.contains](#contains) For checking fill containment
 - [Polygon.getBounds](#getbounds) For getting stroke bounds

#### Implementation of

[`ShapePrimitive`](maths.ShapePrimitive.md).[`strokeContains`](maths.ShapePrimitive.html#strokecontains)

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`
