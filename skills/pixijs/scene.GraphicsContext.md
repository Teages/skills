# Class: GraphicsContext

The GraphicsContext class allows for the creation of lightweight objects that contain instructions for drawing shapes and paths.
It is used internally by the Graphics class to draw shapes and paths, and can be used directly and shared between Graphics objects,

This sharing of a `GraphicsContext` means that the intensive task of converting graphics instructions into GPU-ready geometry is done once, and the results are reused,
much like sprites reusing textures.

## Extends

- `EventEmitter`\<\{ `destroy`: `GraphicsContext`; `unload`: `GraphicsContext`; `update`: `GraphicsContext`; \}\>

## Implements

- [`GCable`](rendering.GCable.md)

## Constructors

### Constructor

> **new GraphicsContext**(): `GraphicsContext`

#### Returns

`GraphicsContext`

#### Inherited from

`EventEmitter<{ update: GraphicsContext destroy: GraphicsContext unload: GraphicsContext }>.constructor`

## Properties

### autoGarbageCollect

> **autoGarbageCollect**: `boolean` = `true`

If set to true, the resource will be garbage collected automatically when it is not used.

#### Implementation of

[`GCable`](rendering.GCable.md).[`autoGarbageCollect`](rendering.GCable.html#autogarbagecollect)

***

### batchMode

> **batchMode**: [`BatchMode`](scene.BatchMode.md) = `'auto'`

The batch mode for this graphics context. It can be 'auto', 'batch', or 'no-batch'.

***

### customShader?

> `optional` **customShader**: [`Shader`](rendering.Shader.md)

**`Advanced`**

Custom shader to apply to the graphics when rendering.

***

### destroyed

> **destroyed**: `boolean` = `false`

Whether the graphics context has been destroyed.

***

### defaultFillStyle

> `static` **defaultFillStyle**: [`ConvertedFillStyle`](scene.ConvertedFillStyle.md)

The default fill style to use when none is provided.

***

### defaultStrokeStyle

> `static` **defaultStrokeStyle**: [`ConvertedStrokeStyle`](scene.ConvertedStrokeStyle.md)

The default stroke style to use when none is provided.

## Accessors

### bounds

#### Get Signature

> **get** **bounds**(): [`Bounds`](rendering.Bounds.md)

The bounds of the graphic shape.

##### Returns

[`Bounds`](rendering.Bounds.md)

***

### fillStyle

#### Get Signature

> **get** **fillStyle**(): [`ConvertedFillStyle`](scene.ConvertedFillStyle.md)

The current fill style of the graphics context. This can be a color, gradient, pattern, or a more complex style defined by a FillStyle object.

##### Returns

[`ConvertedFillStyle`](scene.ConvertedFillStyle.md)

#### Set Signature

> **set** **fillStyle**(`value`): `void`

##### Parameters

###### value

[`FillInput`](scene.FillInput.md)

##### Returns

`void`

***

### strokeStyle

#### Get Signature

> **get** **strokeStyle**(): [`ConvertedStrokeStyle`](scene.ConvertedStrokeStyle.md)

The current stroke style of the graphics context. Similar to fill styles, stroke styles can encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.

##### Returns

[`ConvertedStrokeStyle`](scene.ConvertedStrokeStyle.md)

#### Set Signature

> **set** **strokeStyle**(`value`): `void`

##### Parameters

###### value

[`FillInput`](scene.FillInput.md)

##### Returns

`void`

## Methods

### arc()

> **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise?`): `this`

Adds an arc to the current path, which is centered at (x, y) with the specified radius,
starting and ending angles, and direction.

#### Parameters

##### x

`number`

The x-coordinate of the arc's center.

##### y

`number`

The y-coordinate of the arc's center.

##### radius

`number`

The arc's radius.

##### startAngle

`number`

The starting angle, in radians.

##### endAngle

`number`

The ending angle, in radians.

##### counterclockwise?

`boolean`

(Optional) Specifies whether the arc is drawn counterclockwise (true) or clockwise (false). Defaults to false.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### arcTo()

> **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `this`

Adds an arc to the current path with the given control points and radius, connected to the previous point
by a straight line if necessary.

#### Parameters

##### x1

`number`

The x-coordinate of the first control point.

##### y1

`number`

The y-coordinate of the first control point.

##### x2

`number`

The x-coordinate of the second control point.

##### y2

`number`

The y-coordinate of the second control point.

##### radius

`number`

The arc's radius.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

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

### beginPath()

> **beginPath**(): `this`

Resets the current path. Any previous path and its commands are discarded and a new path is
started. This is typically called before beginning a new shape or series of drawing commands.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

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

> **circle**(`x`, `y`, `radius`): `this`

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

#### Returns

`this`

The instance of the current object for chaining.

***

### clear()

> **clear**(): `this`

Clears all drawing commands from the graphics context, effectively resetting it. This includes clearing the path,
and optionally resetting transformations to the identity matrix.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### clone()

> **clone**(): `GraphicsContext`

Creates a new GraphicsContext object that is a clone of this instance, copying all properties,
including the current drawing state, transformations, styles, and instructions.

#### Returns

`GraphicsContext`

A new GraphicsContext instance with the same properties and state as this one.

***

### closePath()

> **closePath**(): `this`

Closes the current path by drawing a straight line back to the start.
If the shape is already closed or there are no points in the path, this method does nothing.

#### Returns

`this`

The instance of the current object for chaining.

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Check to see if a point is contained within this geometry.

#### Parameters

##### point

[`PointData`](maths.PointData.md)

Point to check if it's contained.

#### Returns

`boolean`

`true` if the point is contained within geometry.

***

### cut()

> **cut**(): `this`

Applies a cutout to the last drawn shape. This is used to create holes or complex shapes by
subtracting a path from the previously drawn path. If a hole is not completely in a shape, it will
fail to cut correctly!

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### destroy()

> **destroy**(`options`): `void`

Destroys the GraphicsData object.

#### Parameters

##### options

[`TypeOrBool`](utils.TypeOrBool.md)\<[`TextureDestroyOptions`](scene.TextureDestroyOptions.md)\> = `false`

Options parameter. A boolean will act as if all options
 have been set to that value

#### Returns

`void`

#### Example

```ts
context.destroy();
context.destroy(true);
context.destroy({ texture: true, textureSource: true });
```

***

### ellipse()

> **ellipse**(`x`, `y`, `radiusX`, `radiusY`): `this`

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

#### Returns

`this`

The instance of the current object for chaining.

***

### fill()

#### Call Signature

> **fill**(`style?`): `this`

Fills the current or given path with the current fill style. This method can optionally take
a color and alpha for a simple fill, or a more complex FillInput object for advanced fills.

##### Parameters

###### style?

[`FillInput`](scene.FillInput.md)

(Optional) The style to fill the path with. Can be a color, gradient, pattern, or a complex style object. If omitted, uses the current fill style.

##### Returns

`this`

The instance of the current GraphicsContext for method chaining.

#### Call Signature

> **fill**(`color`, `alpha`): `this`

##### Parameters

###### color

[`ColorSource`](color.ColorSource.md)

###### alpha

`number`

##### Returns

`this`

##### Deprecated

8.0.0

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

### getTransform()

> **getTransform**(): [`Matrix`](maths.Matrix.md)

Returns the current transformation matrix of the graphics context.

#### Returns

[`Matrix`](maths.Matrix.md)

The current transformation matrix.

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

### path()

> **path**(`path`): `this`

Adds another `GraphicsPath` to this path, optionally applying a transformation.

#### Parameters

##### path

[`GraphicsPath`](scene.GraphicsPath.md)

The `GraphicsPath` to add.

#### Returns

`this`

The instance of the current object for chaining.

***

### poly()

> **poly**(`points`, `close?`): `this`

Draws a polygon shape by specifying a sequence of points. This method allows for the creation of complex polygons,
which can be both open and closed. An optional transformation can be applied, enabling the polygon to be scaled,
rotated, or translated as needed.

#### Parameters

##### points

An array of numbers, or an array of PointData objects eg [{x,y}, {x,y}, {x,y}]
representing the x and y coordinates, of the polygon's vertices, in sequence.

`number`[] | [`PointData`](maths.PointData.md)[]

##### close?

`boolean`

A boolean indicating whether to close the polygon path. True by default.

#### Returns

`this`

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

### rect()

> **rect**(`x`, `y`, `w`, `h`): `this`

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

### resetTransform()

> **resetTransform**(): `this`

Resets the current transformation matrix to the identity matrix, effectively removing any transformations (rotation, scaling, translation) previously applied.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### restore()

> **restore**(): `this`

Restores the most recently saved graphics state by popping the top of the graphics state stack.
This includes transformations, fill styles, and stroke styles.

#### Returns

`this`

***

### rotate()

> **rotate**(`angle`): `this`

Applies a rotation transformation to the graphics context around the current origin.

#### Parameters

##### angle

`number`

The angle of rotation in radians.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

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

> **roundRect**(`x`, `y`, `w`, `h`, `radius?`): `this`

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

### save()

> **save**(): `this`

Saves the current graphics state, including transformations, fill styles, and stroke styles, onto a stack.

#### Returns

`this`

***

### scale()

> **scale**(`x`, `y`): `this`

Applies a scaling transformation to the graphics context, scaling drawings by x horizontally and by y vertically.

#### Parameters

##### x

`number`

The scale factor in the horizontal direction.

##### y

`number` = `x`

(Optional) The scale factor in the vertical direction. If not specified, the x value is used for both directions.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### setFillStyle()

> **setFillStyle**(`style`): `this`

Sets the current fill style of the graphics context. The fill style can be a color, gradient,
pattern, or a more complex style defined by a FillStyle object.

#### Parameters

##### style

[`FillInput`](scene.FillInput.md)

The fill style to apply. This can be a simple color, a gradient or pattern object,
               or a FillStyle or ConvertedFillStyle object.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### setStrokeStyle()

> **setStrokeStyle**(`style`): `this`

Sets the current stroke style of the graphics context. Similar to fill styles, stroke styles can
encompass colors, gradients, patterns, or more detailed configurations via a StrokeStyle object.

#### Parameters

##### style

[`StrokeInput`](scene.StrokeInput.md)

The stroke style to apply. Can be defined as a color, a gradient or pattern,
               or a StrokeStyle or ConvertedStrokeStyle object.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### setTransform()

#### Call Signature

> **setTransform**(`transform`): `this`

Sets the current transformation matrix of the graphics context to the specified matrix or values.
This replaces the current transformation matrix.

##### Parameters

###### transform

[`Matrix`](maths.Matrix.md)

The matrix to set as the current transformation matrix.

##### Returns

`this`

The instance of the current GraphicsContext for method chaining.

#### Call Signature

> **setTransform**(`a`, `b`, `c`, `d`, `dx`, `dy`): `this`

Sets the current transformation matrix of the graphics context to the specified matrix or values.
This replaces the current transformation matrix.

##### Parameters

###### a

`number`

The value for the a property of the matrix, or a Matrix object to use directly.

###### b

`number`

The value for the b property of the matrix.

###### c

`number`

The value for the c property of the matrix.

###### d

`number`

The value for the d property of the matrix.

###### dx

`number`

The value for the tx (translate x) property of the matrix.

###### dy

`number`

The value for the ty (translate y) property of the matrix.

##### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### star()

> **star**(`x`, `y`, `points`, `radius`, `innerRadius`, `rotation`): `this`

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

##### innerRadius

`number` = `0`

Optional. The inner radius of the star
(distance from the center to the inner points between the outer points).
If not provided, defaults to half of the `radius`.

##### rotation

`number` = `0`

Optional. The rotation of the star in radians, where 0 is aligned with the y-axis.
Defaults to 0, meaning one point is directly upward.

#### Returns

`this`

The instance of the current object for chaining further drawing commands.

***

### stroke()

> **stroke**(`style?`): `this`

Strokes the current path with the current stroke style. This method can take an optional
FillInput parameter to define the stroke's appearance, including its color, width, and other properties.

#### Parameters

##### style?

[`StrokeInput`](scene.StrokeInput.md)

(Optional) The stroke style to apply. Can be defined as a simple color or a more complex style object. If omitted, uses the current stroke style.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### svg()

> **svg**(`svg`): `this`

Parses and renders an SVG string into the graphics context. This allows for complex shapes and paths
defined in SVG format to be drawn within the graphics context.

#### Parameters

##### svg

`string`

The SVG string to be parsed and rendered.

#### Returns

`this`

***

### texture()

#### Call Signature

> **texture**(`texture`): `this`

Adds a texture to the graphics context. This method supports multiple overloads for specifying the texture.
If only a texture is provided, it uses the texture's width and height for drawing.

##### Parameters

###### texture

[`Texture`](rendering.Texture.md)

The Texture object to use.

##### Returns

`this`

The instance of the current GraphicsContext for method chaining.

#### Call Signature

> **texture**(`texture`, `tint?`, `dx?`, `dy?`, `dw?`, `dh?`): `this`

Adds a texture to the graphics context. This method supports multiple overloads for specifying the texture,
tint, and dimensions. If only a texture is provided, it uses the texture's width and height for drawing.
Additional parameters allow for specifying a tint color, and custom dimensions for the texture drawing area.

##### Parameters

###### texture

[`Texture`](rendering.Texture.md)

The Texture object to use.

###### tint?

[`ColorSource`](color.ColorSource.md)

(Optional) A ColorSource to tint the texture. If not provided, defaults to white (0xFFFFFF).

###### dx?

`number`

(Optional) The x-coordinate in the destination canvas at which to place the top-left corner of
the source image.

###### dy?

`number`

(Optional) The y-coordinate in the destination canvas at which to place the top-left corner of
the source image.

###### dw?

`number`

(Optional) The width of the rectangle within the source image to draw onto the destination canvas.
If not provided, uses the texture's frame width.

###### dh?

`number`

(Optional) The height of the rectangle within the source image to draw onto the destination canvas.
If not provided, uses the texture's frame height.

##### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### transform()

#### Call Signature

> **transform**(`transform`): `this`

Applies the specified transformation matrix to the current graphics context by multiplying
the current matrix with the specified matrix.

##### Parameters

###### transform

[`Matrix`](maths.Matrix.md)

The matrix to apply to the current transformation.

##### Returns

`this`

The instance of the current GraphicsContext for method chaining.

#### Call Signature

> **transform**(`a`, `b`, `c`, `d`, `dx`, `dy`): `this`

Applies the specified transformation matrix to the current graphics context by multiplying
the current matrix with the specified matrix.

##### Parameters

###### a

`number`

The value for the a property of the matrix, or a Matrix object to use directly.

###### b

`number`

The value for the b property of the matrix.

###### c

`number`

The value for the c property of the matrix.

###### d

`number`

The value for the d property of the matrix.

###### dx

`number`

The value for the tx (translate x) property of the matrix.

###### dy

`number`

The value for the ty (translate y) property of the matrix.

##### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### translate()

> **translate**(`x`, `y`): `this`

Applies a translation transformation to the graphics context, moving the origin by the specified amounts.

#### Parameters

##### x

`number`

The amount to translate in the horizontal direction.

##### y

`number` = `x`

(Optional) The amount to translate in the vertical direction. If not specified, the x value is used for both directions.

#### Returns

`this`

The instance of the current GraphicsContext for method chaining.

***

### unload()

> **unload**(): `void`

Unloads the GPU data from the graphics context.

#### Returns

`void`

#### Implementation of

[`GCable`](rendering.GCable.md).[`unload`](rendering.GCable.html#unload)
