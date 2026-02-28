# Variable: groupD8

> `const` **groupD8**: `object`

**`Advanced`**

Implements the dihedral group D8, which is similar to
[group D4][http://mathworld.wolfram.com/DihedralGroupD4.html](http://mathworld.wolfram.com/DihedralGroupD4.html);
D8 is the same but with diagonals, and it is used for texture
rotations.

The directions the U- and V- axes after rotation
of an angle of `a: GD8Constant` are the vectors `(uX(a), uY(a))`
and `(vX(a), vY(a))`. These aren't necessarily unit vectors.

## Type Declaration

### add()

> **add**: (`rotationSecond`, `rotationFirst`) => `number`

Composes the two D8 operations.

Taking `^` as reflection:

|       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
|-------|-----|-----|-----|-----|------|-------|-------|-------|
| E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
| S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
| W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
| N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
| E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
| S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
| W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
| N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |

[This is a Cayley table][https://en.wikipedia.org/wiki/Cayley\_table](https://en.wikipedia.org/wiki/Cayley_table)

#### Parameters

##### rotationSecond

`number`

Second operation, which
  is the row in the above cayley table.

##### rotationFirst

`number`

First operation, which
  is the column in the above cayley table.

#### Returns

`number`

Composed operation

### byDirection()

> **byDirection**: (`dx`, `dy`) => `number`

Approximates the vector `V(dx,dy)` into one of the
eight directions provided by `groupD8`.

#### Parameters

##### dx

`number`

X-component of the vector

##### dy

`number`

Y-component of the vector

#### Returns

`number`

Approximation of the vector into
 one of the eight symmetries.

### E

> **E**: `number` = `0`

| Rotation | Direction |
|----------|-----------|
| 0°       | East      |

### inv()

> **inv**: (`rotation`) => `number`

#### Parameters

##### rotation

`number`

symmetry whose opposite
  is needed. Only rotations have opposite symmetries while
  reflections don't.

#### Returns

`number`

The opposite symmetry of `rotation`

### isVertical()

> **isVertical**: (`rotation`) => `boolean`

Checks if the rotation angle is vertical, i.e. south
or north. It doesn't work for reflections.

#### Parameters

##### rotation

`number`

The number to check.

#### Returns

`boolean`

Whether or not the direction is vertical

### MAIN\_DIAGONAL

> **MAIN\_DIAGONAL**: `number` = `10`

Reflection about the main diagonal.

### matrixAppendRotationInv()

> **matrixAppendRotationInv**: (`matrix`, `rotation`, `tx`, `ty`, `dw`, `dh`) => `void`

Helps sprite to compensate texture packer rotation.

#### Parameters

##### matrix

[`Matrix`](maths.Matrix.md)

sprite world matrix

##### rotation

`number`

The rotation factor to use.

##### tx

`number` = `0`

sprite anchoring

##### ty

`number` = `0`

sprite anchoring

##### dw

`number` = `0`

sprite width

##### dh

`number` = `0`

sprite height

#### Returns

`void`

### MIRROR\_HORIZONTAL

> **MIRROR\_HORIZONTAL**: `number` = `12`

Reflection about X-axis.

### MIRROR\_VERTICAL

> **MIRROR\_VERTICAL**: `number` = `8`

Reflection about Y-axis.

### N

> **N**: `number` = `6`

| Rotation    | Direction    |
|-------------|--------------|
| -90°/270°↻  | North        |

### NE

> **NE**: `number` = `7`

| Rotation    | Direction    |
|-------------|--------------|
| -45°/315°↻  | Northeast    |

### NW

> **NW**: `number` = `5`

| Rotation    | Direction    |
|-------------|--------------|
| -135°/225°↻ | Northwest    |

### REVERSE\_DIAGONAL

> **REVERSE\_DIAGONAL**: `number` = `14`

Reflection about reverse diagonal.

### rotate180()

> **rotate180**: (`rotation`) => `number`

Adds 180 degrees to rotation, which is a commutative
operation.

#### Parameters

##### rotation

`number`

The number to rotate.

#### Returns

`number`

Rotated number

### S

> **S**: `number` = `2`

| Rotation | Direction |
|----------|-----------|
| 90°↻     | South     |

### SE

> **SE**: `number` = `1`

| Rotation | Direction |
|----------|-----------|
| 45°↻     | Southeast |

### sub()

> **sub**: (`rotationSecond`, `rotationFirst`) => `number`

Reverse of `add`.

#### Parameters

##### rotationSecond

`number`

Second operation

##### rotationFirst

`number`

First operation

#### Returns

`number`

Result

### SW

> **SW**: `number` = `3`

| Rotation | Direction |
|----------|-----------|
| 135°↻    | Southwest |

### transformRectCoords()

> **transformRectCoords**: (`rect`, `sourceFrame`, `rotation`, `out`) => [`Rectangle`](maths.Rectangle.md)

Transforms rectangle coordinates based on texture packer rotation.
Used when texture atlas pages are rotated and coordinates need to be adjusted.

#### Parameters

##### rect

[`RectangleLike`](utils.RectangleLike.md)

Rectangle with original coordinates to transform

##### sourceFrame

[`RectangleLike`](utils.RectangleLike.md)

Source texture frame (includes offset and dimensions)

##### rotation

`number`

The groupD8 rotation value

##### out

[`Rectangle`](maths.Rectangle.md)

Rectangle to store the result

#### Returns

[`Rectangle`](maths.Rectangle.md)

Transformed coordinates (includes source frame offset)

### uX()

> **uX**: (`ind`) => `number`

#### Parameters

##### ind

`number`

sprite rotation angle.

#### Returns

`number`

The X-component of the U-axis
   after rotating the axes.

### uY()

> **uY**: (`ind`) => `number`

#### Parameters

##### ind

`number`

sprite rotation angle.

#### Returns

`number`

The Y-component of the U-axis
   after rotating the axes.

### vX()

> **vX**: (`ind`) => `number`

#### Parameters

##### ind

`number`

sprite rotation angle.

#### Returns

`number`

The X-component of the V-axis
   after rotating the axes.

### vY()

> **vY**: (`ind`) => `number`

#### Parameters

##### ind

`number`

sprite rotation angle.

#### Returns

`number`

The Y-component of the V-axis
   after rotating the axes.

### W

> **W**: `number` = `4`

| Rotation | Direction |
|----------|-----------|
| 180°     | West      |

## Author

Ivan: ivanpopelyshev
