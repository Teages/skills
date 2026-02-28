# Class: ShapePath

**`Advanced`**

The `ShapePath` class acts as a bridge between high-level drawing commands
and the lower-level `GraphicsContext` rendering engine.
It translates drawing commands, such as those for creating lines, arcs, ellipses, rectangles, and complex polygons, into a
format that can be efficiently processed by a `GraphicsContext`. This includes handling path starts,
ends, and transformations for shapes.

It is used internally by `GraphicsPath` to build up the path.

## Constructors

### Constructor

> **new ShapePath**(`graphicsPath2D`): `ShapePath`

#### Parameters

##### graphicsPath2D

[`GraphicsPath`](scene.GraphicsPath.md)

#### Returns

`ShapePath`

## Properties

### shapePrimitives

> **shapePrimitives**: [`ShapePrimitiveWithHoles`](scene.ShapePrimitiveWithHoles.md)[] = `[]`

The list of shape primitives that make up the path.

***

### signed

> `readonly` **signed**: `boolean`

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): [`Bounds`](rendering.Bounds.md)

Gets the bounds of the path.

##### Returns

[`Bounds`](rendering.Bounds.md)

## Methods

### addPath()

> **addPath**(`path`, `transform?`): `this`

Adds another path to the current path. This method allows for the combination of multiple paths into one.

#### Parameters

##### path

[`GraphicsPath`](scene.GraphicsPath.md)

The `GraphicsPath` object representing the path to add.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the path before adding it.

#### Returns

`this`

The instance of the current object for chaining.

***

### arc()

> **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise`): `this`

Adds an arc to the path. The arc is centered at (x, y)
 position with radius `radius` starting at `startAngle` and ending at `endAngle`.

#### Parameters

##### x

`number`

The x-coordinate of the arc's center.

##### y

`number`

The y-coordinate of the arc's center.

##### radius

`number`

The radius of the arc.

##### startAngle

`number`

The starting angle of the arc, in radians.

##### endAngle

`number`

The ending angle of the arc, in radians.

##### counterclockwise

`boolean`

Specifies whether the arc should be drawn in the anticlockwise direction. False by default.

#### Returns

`this`

The instance of the current object for chaining.

***

### arcTo()

> **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `this`

Adds an arc to the path with the arc tangent to the line joining two specified points.
The arc radius is specified by `radius`.

#### Parameters

##### x1

`number`

The x-coordinate of the first point.

##### y1

`number`

The y-coordinate of the first point.

##### x2

`number`

The x-coordinate of the second point.

##### y2

`number`

The y-coordinate of the second point.

##### radius

`number`

The radius of the arc.

#### Returns

`this`

The instance of the current object for chaining.

***

### arcToSvg()

> **arcToSvg**(`rx`, `ry`, `xAxisRotation`, `largeArcFlag`, `sweepFlag`, `x`, `y`): `this`

Adds an SVG-style arc to the path, allowing for elliptical arcs based on the SVG spec.

#### Parameters

##### rx

`number`

The x-radius of the ellipse.

##### ry

`number`

The y-radius of the ellipse.

##### xAxisRotation

`number`

The rotation of the ellipse's x-axis relative
to the x-axis of the coordinate system, in degrees.

##### largeArcFlag

`number`

Determines if the arc should be greater than or less than 180 degrees.

##### sweepFlag

`number`

Determines if the arc should be swept in a positive angle direction.

##### x

`number`

The x-coordinate of the arc's end point.

##### y

`number`

The y-coordinate of the arc's end point.

#### Returns

`this`

The instance of the current object for chaining.

***

### bezierCurveTo()

> **bezierCurveTo**(`cp1x`, `cp1y`, `cp2x`, `cp2y`, `x`, `y`, `smoothness?`): `this`

Adds a cubic Bezier curve to the path.
It requires three points: the first two are control points and the third one is the end point.
The starting point is the last point in the current path.

#### Parameters

##### cp1x

`number`

The x-coordinate of the first control point.

##### cp1y

`number`

The y-coordinate of the first control point.

##### cp2x

`number`

The x-coordinate of the second control point.

##### cp2y

`number`

The y-coordinate of the second control point.

##### x

`number`

The x-coordinate of the end point.

##### y

`number`

The y-coordinate of the end point.

##### smoothness?

`number`

Optional parameter to adjust the smoothness of the curve.

#### Returns

`this`

The instance of the current object for chaining.

***

### buildPath()

> **buildPath**(): `void`

Builds the path.

#### Returns

`void`

***

### chamferRect()

> **chamferRect**(`x`, `y`, `width`, `height`, `chamfer`, `transform?`): `this`

Draw Rectangle with chamfer corners. These are angled corners.

#### Parameters

##### x

`number`

Upper left corner of rect

##### y

`number`

Upper right corner of rect

##### width

`number`

Width of rect

##### height

`number`

Height of rect

##### chamfer

`number`

non-zero real number, size of corner cutout

##### transform?

[`Matrix`](maths.Matrix.md)

#### Returns

`this`

***

### circle()

> **circle**(`x`, `y`, `radius`, `transform?`): `this`

Draws a circle shape. This method adds a new circle path to the current drawing.

#### Parameters

##### x

`number`

The x-coordinate of the center of the circle.

##### y

`number`

The y-coordinate of the center of the circle.

##### radius

`number`

The radius of the circle.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the circle.

#### Returns

`this`

The instance of the current object for chaining.

***

### closePath()

> **closePath**(): `this`

Closes the current path by drawing a straight line back to the start.
If the shape is already closed or there are no points in the path, this method does nothing.

#### Returns

`this`

The instance of the current object for chaining.

***

### drawShape()

> **drawShape**(`shape`, `matrix?`): `this`

Draws a given shape on the canvas.
This is a generic method that can draw any type of shape specified by the `ShapePrimitive` parameter.
An optional transformation matrix can be applied to the shape, allowing for complex transformations.

#### Parameters

##### shape

[`ShapePrimitive`](maths.ShapePrimitive.md)

The shape to draw, defined as a `ShapePrimitive` object.

##### matrix?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` for transforming the shape. This can include rotations,
scaling, and translations.

#### Returns

`this`

The instance of the current object for chaining.

***

### ellipse()

> **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `transform?`): `this`

Draws an ellipse at the specified location and with the given x and y radii.
An optional transformation can be applied, allowing for rotation, scaling, and translation.

#### Parameters

##### x

`number`

The x-coordinate of the center of the ellipse.

##### y

`number`

The y-coordinate of the center of the ellipse.

##### radiusX

`number`

The horizontal radius of the ellipse.

##### radiusY

`number`

The vertical radius of the ellipse.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the ellipse. This can include rotations.

#### Returns

`this`

The instance of the current object for chaining.

***

### endPoly()

> **endPoly**(`closePath`): `this`

Ends the current polygon path. If `closePath` is set to true,
the path is closed by connecting the last point to the first one.
This method finalizes the current polygon and prepares it for drawing or adding to the shape primitives.

#### Parameters

##### closePath

`boolean` = `false`

A boolean indicating whether to close the polygon by connecting the last point
 back to the starting point. False by default.

#### Returns

`this`

The instance of the current object for chaining.

***

### filletRect()

> **filletRect**(`x`, `y`, `width`, `height`, `fillet`): `this`

Draw Rectangle with fillet corners. This is much like rounded rectangle
however it support negative numbers as well for the corner radius.

#### Parameters

##### x

`number`

Upper left corner of rect

##### y

`number`

Upper right corner of rect

##### width

`number`

Width of rect

##### height

`number`

Height of rect

##### fillet

`number`

accept negative or positive values

#### Returns

`this`

***

### finish()

> **finish**(`closePath`): `void`

Finalizes the drawing of the current path. Optionally, it can close the path.

#### Parameters

##### closePath

`boolean` = `false`

A boolean indicating whether to close the path after finishing. False by default.

#### Returns

`void`

***

### lineTo()

> **lineTo**(`x`, `y`): `this`

Connects the current point to a new point with a straight line. This method updates the current path.

#### Parameters

##### x

`number`

The x-coordinate of the new point to connect to.

##### y

`number`

The y-coordinate of the new point to connect to.

#### Returns

`this`

The instance of the current object for chaining.

***

### moveTo()

> **moveTo**(`x`, `y`): `this`

Sets the starting point for a new sub-path. Any subsequent drawing commands are considered part of this path.

#### Parameters

##### x

`number`

The x-coordinate for the starting point.

##### y

`number`

The y-coordinate for the starting point.

#### Returns

`this`

The instance of the current object for chaining.

***

### poly()

> **poly**(`points`, `close?`, `transform?`): `this`

Draws a polygon shape. This method allows for the creation of complex polygons by specifying a sequence of points.

#### Parameters

##### points

An array of numbers, or or an array of PointData objects eg [{x,y}, {x,y}, {x,y}]
representing the x and y coordinates of the polygon's vertices, in sequence.

`number`[] | [`PointData`](maths.PointData.md)[]

##### close?

`boolean`

A boolean indicating whether to close the polygon path. True by default.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the polygon.

#### Returns

`this`

The instance of the current object for chaining.

***

### quadraticCurveTo()

> **quadraticCurveTo**(`cp1x`, `cp1y`, `x`, `y`, `smoothing?`): `this`

Adds a quadratic curve to the path. It requires two points: the control point and the end point.
The starting point is the last point in the current path.

#### Parameters

##### cp1x

`number`

The x-coordinate of the control point.

##### cp1y

`number`

The y-coordinate of the control point.

##### x

`number`

The x-coordinate of the end point.

##### y

`number`

The y-coordinate of the end point.

##### smoothing?

`number`

Optional parameter to adjust the smoothness of the curve.

#### Returns

`this`

The instance of the current object for chaining.

***

### rect()

> **rect**(`x`, `y`, `w`, `h`, `transform?`): `this`

Draws a rectangle shape. This method adds a new rectangle path to the current drawing.

#### Parameters

##### x

`number`

The x-coordinate of the top-left corner of the rectangle.

##### y

`number`

The y-coordinate of the top-left corner of the rectangle.

##### w

`number`

The width of the rectangle.

##### h

`number`

The height of the rectangle.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the rectangle.

#### Returns

`this`

The instance of the current object for chaining.

***

### regularPoly()

> **regularPoly**(`x`, `y`, `radius`, `sides`, `rotation`, `transform?`): `this`

Draws a regular polygon with a specified number of sides. All sides and angles are equal.

#### Parameters

##### x

`number`

The x-coordinate of the center of the polygon.

##### y

`number`

The y-coordinate of the center of the polygon.

##### radius

`number`

The radius of the circumscribed circle of the polygon.

##### sides

`number`

The number of sides of the polygon. Must be 3 or more.

##### rotation

`number` = `0`

The rotation angle of the polygon, in radians. Zero by default.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the polygon.

#### Returns

`this`

The instance of the current object for chaining.

***

### roundPoly()

> **roundPoly**(`x`, `y`, `radius`, `sides`, `corner`, `rotation`, `smoothness?`): `this`

Draws a polygon with rounded corners.
Similar to `regularPoly` but with the ability to round the corners of the polygon.

#### Parameters

##### x

`number`

The x-coordinate of the center of the polygon.

##### y

`number`

The y-coordinate of the center of the polygon.

##### radius

`number`

The radius of the circumscribed circle of the polygon.

##### sides

`number`

The number of sides of the polygon. Must be 3 or more.

##### corner

`number`

The radius of the rounding of the corners.

##### rotation

`number` = `0`

The rotation angle of the polygon, in radians. Zero by default.

##### smoothness?

`number`

Optional parameter to adjust the smoothness of the rounding.

#### Returns

`this`

The instance of the current object for chaining.

***

### roundRect()

> **roundRect**(`x`, `y`, `w`, `h`, `radius?`, `transform?`): `this`

Draws a rectangle with rounded corners.
The corner radius can be specified to determine how rounded the corners should be.
An optional transformation can be applied, which allows for rotation, scaling, and translation of the rectangle.

#### Parameters

##### x

`number`

The x-coordinate of the top-left corner of the rectangle.

##### y

`number`

The y-coordinate of the top-left corner of the rectangle.

##### w

`number`

The width of the rectangle.

##### h

`number`

The height of the rectangle.

##### radius?

`number`

The radius of the rectangle's corners. If not specified, corners will be sharp.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the rectangle.

#### Returns

`this`

The instance of the current object for chaining.

***

### roundShape()

> **roundShape**(`points`, `radius`, `useQuadratic`, `smoothness?`): `this`

Draws a shape with rounded corners. This function supports custom radius for each corner of the shape.
Optionally, corners can be rounded using a quadratic curve instead of an arc, providing a different aesthetic.

#### Parameters

##### points

[`RoundedPoint`](scene.RoundedPoint.md)[]

An array of `RoundedPoint` representing the corners of the shape to draw.
A minimum of 3 points is required.

##### radius

`number`

The default radius for the corners.
This radius is applied to all corners unless overridden in `points`.

##### useQuadratic

`boolean` = `false`

If set to true, rounded corners are drawn using a quadraticCurve
 method instead of an arc method. Defaults to false.

##### smoothness?

`number`

Specifies the smoothness of the curve when `useQuadratic` is true.
Higher values make the curve smoother.

#### Returns

`this`

The instance of the current object for chaining.

***

### startPoly()

> **startPoly**(`x`, `y`): `this`

Starts a new polygon path from the specified starting point.
This method initializes a new polygon or ends the current one if it exists.

#### Parameters

##### x

`number`

The x-coordinate of the starting point of the new polygon.

##### y

`number`

The y-coordinate of the starting point of the new polygon.

#### Returns

`this`

The instance of the current object for chaining.
