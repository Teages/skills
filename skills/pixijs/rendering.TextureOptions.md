# Interface: TextureOptions\<TextureSourceType\>

The options that can be passed to a new Texture

## Type Parameters

### TextureSourceType

`TextureSourceType` *extends* [`TextureSource`](rendering.TextureSource.md) = [`TextureSource`](rendering.TextureSource.md)

## Properties

### defaultAnchor?

> `optional` **defaultAnchor**: `object`

Default anchor point used for sprite placement / rotation

#### x

> **x**: `number`

#### y

> **y**: `number`

***

### defaultBorders?

> `optional` **defaultBorders**: [`TextureBorders`](rendering.TextureBorders.md)

Default borders used for 9-slice scaling [NineSlicePlane](scene.NineSlicePlane.md)

***

### dynamic?

> `optional` **dynamic**: `boolean`

Set to true if you plan on modifying this texture's frame, UVs, or swapping its source at runtime.
This is false by default as it improves performance. Generally, it's recommended to create new
textures and swap those rather than modifying an existing texture's properties unless you are
working with a dynamic frames.
Not setting this to true when modifying the texture can lead to visual artifacts.

If this is false and you modify the texture, you can manually update the sprite's texture by calling
`sprite.onViewUpdate()`.

***

### frame?

> `optional` **frame**: [`Rectangle`](maths.Rectangle.md)

The rectangle frame of the texture to show

***

### label?

> `optional` **label**: `string`

optional label, for debugging

***

### orig?

> `optional` **orig**: [`Rectangle`](maths.Rectangle.md)

The area of original texture

***

### rotate?

> `optional` **rotate**: `number`

indicates how the texture was rotated by texture packer. See [groupD8](maths.groupD8.md)

***

### source?

> `optional` **source**: `TextureSourceType`

the underlying texture data that this texture will use

***

### trim?

> `optional` **trim**: [`Rectangle`](maths.Rectangle.md)

Trimmed rectangle of original texture
