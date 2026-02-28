# Interface: LinearGradientOptions

Options specific to linear gradients.
A linear gradient creates a smooth transition between colors along a straight line defined by start and end points.

## Extends

- [`BaseGradientOptions`](scene.BaseGradientOptions.md)

## Properties

### colorStops?

> `optional` **colorStops**: `object`[]

Array of colors stops to use in the gradient

#### color

> **color**: [`ColorSource`](color.ColorSource.md)

#### offset

> **offset**: `number`

#### Inherited from

[`BaseGradientOptions`](scene.BaseGradientOptions.md).[`colorStops`](scene.BaseGradientOptions.html#colorstops)

***

### end?

> `optional` **end**: [`PointData`](maths.PointData.md)

The end point of the gradient.
This point defines where the gradient ends.
It is represented as a PointData object containing x and y coordinates.
The coordinates are in local space by default (0-1), but can be in global space if specified.

***

### start?

> `optional` **start**: [`PointData`](maths.PointData.md)

The start point of the gradient.
This point defines where the gradient begins.
It is represented as a PointData object containing x and y coordinates.
The coordinates are in local space by default (0-1), but can be in global space if specified.

***

### textureSize?

> `optional` **textureSize**: `number`

The size of the texture to use for the gradient - this is for advanced usage.
The texture size does not need to match the size of the object being drawn.
Due to GPU interpolation, gradient textures can be relatively small!
Consider using a larger texture size if your gradient has a lot of very tight color steps

#### Inherited from

[`BaseGradientOptions`](scene.BaseGradientOptions.md).[`textureSize`](scene.BaseGradientOptions.html#texturesize)

***

### textureSpace?

> `optional` **textureSpace**: [`TextureSpace`](scene.TextureSpace.md)

Whether coordinates are 'global' or 'local'

#### Inherited from

[`BaseGradientOptions`](scene.BaseGradientOptions.md).[`textureSpace`](scene.BaseGradientOptions.html#texturespace)

***

### type?

> `optional` **type**: `"linear"`

The type of gradient. Must be 'linear' for linear gradients.

#### Overrides

[`BaseGradientOptions`](scene.BaseGradientOptions.md).[`type`](scene.BaseGradientOptions.html#type)

***

### wrapMode?

> `optional` **wrapMode**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

The wrap mode of the gradient.
This can be 'clamp-to-edge' or 'repeat'.

#### Default

```ts
'clamp-to-edge'
```

#### Inherited from

[`BaseGradientOptions`](scene.BaseGradientOptions.md).[`wrapMode`](scene.BaseGradientOptions.html#wrapmode)
