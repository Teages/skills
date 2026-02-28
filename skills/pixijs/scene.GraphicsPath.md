# Class: GraphicsPath

**`Advanced`**

The `GraphicsPath` class is designed to represent a graphical path consisting of multiple drawing instructions.
This class serves as a collection of drawing commands that can be executed to render shapes and paths on a canvas or
similar graphical context. It supports high-level drawing operations like lines, arcs, curves, and more, enabling
complex graphic constructions with relative ease.

## Constructors

### Constructor

> **new GraphicsPath**(`instructions?`, `signed?`): `GraphicsPath`

Creates a `GraphicsPath` instance optionally from an SVG path string or an array of `PathInstruction`.

#### Parameters

##### instructions?

An SVG path string or an array of `PathInstruction` objects.

`string` | [`PathInstruction`](scene.PathInstruction.md)[]

##### signed?

`boolean` = `false`

#### Returns

`GraphicsPath`

## Properties

### checkForHoles

> **checkForHoles**: `boolean`

Controls whether shapes in this path should be checked for holes using the non-zero fill rule.
When true, any closed shape that is fully contained within another shape will become
a hole in that shape during filling operations.

This follows SVG's non-zero fill rule where:
1. Shapes are analyzed to find containment relationships
2. If Shape B is fully contained within Shape A, Shape B becomes a hole in Shape A
3. Multiple nested holes are supported

Mainly used internally by the SVG parser to correctly handle holes in complex paths.
When false, all shapes are filled independently without checking for holes.

***

### instructions

> **instructions**: [`PathInstruction`](scene.PathInstruction.md)[] = `[]`

***

### uid

> `readonly` **uid**: `number`

unique id for this graphics path

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): [`Bounds`](rendering.Bounds.md)

##### Returns

[`Bounds`](rendering.Bounds.md)

***

### shapePath

#### Get Signature

> **get** **shapePath**(): [`ShapePath`](scene.ShapePath.md)

Provides access to the internal shape path, ensuring it is up-to-date with the current instructions.

##### Returns

[`ShapePath`](scene.ShapePath.md)

The `ShapePath` instance associated with this `GraphicsPath`.

## Methods

### addPath()

> **addPath**(`path`, `transform?`): `this`

Adds another `GraphicsPath` to this path, optionally applying a transformation.

#### Parameters

##### path

`GraphicsPath`

The `GraphicsPath` to add.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional transformation to apply to the added path.

#### Returns

`this`

The instance of the current object for chaining.

***

### arc()

> **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise?`): `this`

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

##### counterclockwise?

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

### bezierCurveToShort()

> **bezierCurveToShort**(`cp2x`, `cp2y`, `x`, `y`, `smoothness?`): `this`

Adds a cubic Bezier curve to the path.
It requires two points: the second control point and the end point. The first control point is assumed to be
The starting point is the last point in the current path.

#### Parameters

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

### clear()

> **clear**(): `this`

#### Returns

`this`

***

### clone()

> **clone**(`deep`): `GraphicsPath`

Creates a copy of the current `GraphicsPath` instance. This method supports both shallow and deep cloning.
A shallow clone copies the reference of the instructions array, while a deep clone creates a new array and
copies each instruction individually, ensuring that modifications to the instructions of the cloned `GraphicsPath`
do not affect the original `GraphicsPath` and vice versa.

#### Parameters

##### deep

`boolean` = `false`

A boolean flag indicating whether the clone should be deep.

#### Returns

`GraphicsPath`

A new `GraphicsPath` instance that is a clone of the current instance.

***

### closePath()

> **closePath**(): `this`

Closes the current path by drawing a straight line back to the start.
If the shape is already closed or there are no points in the path, this method does nothing.

#### Returns

`this`

The instance of the current object for chaining.

***

### ellipse()

> **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `matrix?`): `this`

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

##### matrix?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the ellipse. This can include rotations.

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

### getLastPoint()

> **getLastPoint**(`out`): [`Point`](maths.Point.md)

Retrieves the last point from the current drawing instructions in the `GraphicsPath`.
This method is useful for operations that depend on the path's current endpoint,
such as connecting subsequent shapes or paths. It supports various drawing instructions,
ensuring the last point's position is accurately determined regardless of the path's complexity.

If the last instruction is a `closePath`, the method iterates backward through the instructions
 until it finds an actionable instruction that defines a point (e.g., `moveTo`, `lineTo`,
`quadraticCurveTo`, etc.). For compound paths added via `addPath`, it recursively retrieves
the last point from the nested path.

#### Parameters

##### out

[`Point`](maths.Point.md)

A `Point` object where the last point's coordinates will be stored.
This object is modified directly to contain the result.

#### Returns

[`Point`](maths.Point.md)

The `Point` object containing the last point's coordinates.

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

Draws a polygon shape by specifying a sequence of points. This method allows for the creation of complex polygons,
which can be both open and closed. An optional transformation can be applied, enabling the polygon to be scaled,
rotated, or translated as needed.

#### Parameters

##### points

An array of numbers representing the x and y coordinates of the polygon's vertices, in sequence.

`number`[] | [`PointData`](maths.PointData.md)[]

##### close?

`boolean`

A boolean indicating whether to close the polygon path. True by default.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the polygon.

#### Returns

`this`

The instance of the current object for chaining further drawing commands.

***

### quadraticCurveTo()

> **quadraticCurveTo**(`cpx`, `cpy`, `x`, `y`, `smoothness?`): `this`

Adds a quadratic curve to the path. It requires two points: the control point and the end point.
The starting point is the last point in the current path.

#### Parameters

##### cpx

`number`

The x-coordinate of the control point.

##### cpy

`number`

The y-coordinate of the control point.

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

### quadraticCurveToShort()

> **quadraticCurveToShort**(`x`, `y`, `smoothness?`): `this`

Adds a quadratic curve to the path. It uses the previous point as the control point.

#### Parameters

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

> **regularPoly**(`x`, `y`, `radius`, `sides`, `rotation?`, `transform?`): `this`

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

##### rotation?

`number`

The rotation angle of the polygon, in radians. Zero by default.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the polygon.

#### Returns

`this`

The instance of the current object for chaining.

***

### roundPoly()

> **roundPoly**(`x`, `y`, `radius`, `sides`, `corner`, `rotation?`): `this`

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

##### rotation?

`number`

The rotation angle of the polygon, in radians. Zero by default.

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

> **roundShape**(`points`, `radius`, `useQuadratic?`, `smoothness?`): `this`

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

##### useQuadratic?

`boolean`

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

### star()

> **star**(`x`, `y`, `points`, `radius`, `innerRadius?`, `rotation?`, `transform?`): `this`

Draws a star shape centered at a specified location. This method allows for the creation
 of stars with a variable number of points, outer radius, optional inner radius, and rotation.
The star is drawn as a closed polygon with alternating outer and inner vertices to create the star's points.
An optional transformation can be applied to scale, rotate, or translate the star as needed.

#### Parameters

##### x

`number`

The x-coordinate of the center of the star.

##### y

`number`

The y-coordinate of the center of the star.

##### points

`number`

The number of points of the star.

##### radius

`number`

The outer radius of the star (distance from the center to the outer points).

##### innerRadius?

`number`

Optional. The inner radius of the star
(distance from the center to the inner points between the outer points).
If not provided, defaults to half of the `radius`.

##### rotation?

`number`

Optional. The rotation of the star in radians, where 0 is aligned with the y-axis.
Defaults to 0, meaning one point is directly upward.

##### transform?

[`Matrix`](maths.Matrix.md)

An optional `Matrix` object to apply a transformation to the star.
This can include rotations, scaling, and translations.

#### Returns

`this`

The instance of the current object for chaining further drawing commands.

***

### transform()

> **transform**(`matrix`): `this`

Applies a transformation matrix to all drawing instructions within the `GraphicsPath`.
This method enables the modification of the path's geometry according to the provided
transformation matrix, which can include translations, rotations, scaling, and skewing.

Each drawing instruction in the path is updated to reflect the transformation,
ensuring the visual representation of the path is consistent with the applied matrix.

Note: The transformation is applied directly to the coordinates and control points of the drawing instructions,
not to the path as a whole. This means the transformation's effects are baked into the individual instructions,
allowing for fine-grained control over the path's appearance.

#### Parameters

##### matrix

[`Matrix`](maths.Matrix.md)

A `Matrix` object representing the transformation to apply.

#### Returns

`this`

The instance of the current object for chaining further operations.
