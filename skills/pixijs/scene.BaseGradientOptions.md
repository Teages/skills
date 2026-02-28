# Interface: BaseGradientOptions

Represents the style options for a linear gradient fill.

## Extended by

- [`LinearGradientOptions`](scene.LinearGradientOptions.md)
- [`RadialGradientOptions`](scene.RadialGradientOptions.md)

## Properties

### colorStops?

> `optional` **colorStops**: `object`[]

Array of colors stops to use in the gradient

#### color

> **color**: [`ColorSource`](color.ColorSource.md)

#### offset

> **offset**: `number`

***

### textureSize?

> `optional` **textureSize**: `number`

The size of the texture to use for the gradient - this is for advanced usage.
The texture size does not need to match the size of the object being drawn.
Due to GPU interpolation, gradient textures can be relatively small!
Consider using a larger texture size if your gradient has a lot of very tight color steps

***

### textureSpace?

> `optional` **textureSpace**: [`TextureSpace`](scene.TextureSpace.md)

Whether coordinates are 'global' or 'local'

***

### type?

> `optional` **type**: [`GradientType`](scene.GradientType.md)

The type of gradient

***

### wrapMode?

> `optional` **wrapMode**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

The wrap mode of the gradient.
This can be 'clamp-to-edge' or 'repeat'.

#### Default

```ts
'clamp-to-edge'
```
