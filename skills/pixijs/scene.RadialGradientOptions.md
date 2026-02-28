# Interface: RadialGradientOptions

Options specific to radial gradients.
A radial gradient creates a smooth transition between colors that radiates outward in a circular pattern.
The gradient is defined by inner and outer circles, each with their own radius.

## Extends

- [`BaseGradientOptions`](scene.BaseGradientOptions.md)

## Properties

### center?

> `optional` **center**: [`PointData`](maths.PointData.md)

The center point of the inner circle where the gradient begins. In local coordinates by default (0-1).

***

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

### innerRadius?

> `optional` **innerRadius**: `number`

The radius of the inner circle where the gradient begins.

***

### outerCenter?

> `optional` **outerCenter**: [`PointData`](maths.PointData.md)

The center point of the outer circle where the gradient ends. In local coordinates by default (0-1).

***

### outerRadius?

> `optional` **outerRadius**: `number`

The radius of the outer circle where the gradient ends.

***

### rotation?

> `optional` **rotation**: `number`

The rotation of the gradient in radians, useful for making the gradient elliptical.
NOTE: Only applied to radial gradients used with Graphics.

***

### scale?

> `optional` **scale**: `number`

The y scale of the gradient, use this to make the gradient elliptical.
NOTE: Only applied to radial gradients used with Graphics.

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

> `optional` **type**: `"radial"`

The type of gradient. Must be 'radial' for radial gradients.

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
