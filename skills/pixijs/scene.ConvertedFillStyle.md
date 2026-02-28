# Interface: ConvertedFillStyle

**`Advanced`**

used internally and is a complete fill style

## Properties

### alpha

> **alpha**: `number`

The alpha value to use for the fill.
This value should be between 0 (fully transparent) and 1 (fully opaque).

#### Example

```ts
const fillStyle = { alpha: 0.5 }; // 50% opacity
```

#### Default

```ts
1
```

#### See

 - [ColorSource](color.ColorSource.md) For more details on color sources
 - [FillStyle#color](scene.FillStyle.html#color) For color usage

***

### color

> **color**: `number`

***

### fill

> **fill**: [`FillGradient`](scene.FillGradient.md) \| [`FillPattern`](scene.FillPattern.md)

The fill pattern or gradient to use. This can be either a FillPattern for
repeating textures or a FillGradient for color transitions.

#### Example

```ts
// Using a gradient
const gradient = new FillGradient({
   end: { x: 1, y: 0 },
   stops: [
       { color: 0xff0000, offset: 0 }, // Red at start
       { color: 0x0000ff, offset: 1 }, // Blue at end
   ]
});

const fillStyle = {
    fill: gradient,
    alpha: 0.8
};

// Using a pattern
const pattern = new FillPattern(
    Texture.from('pattern.png'),
    'repeat' // or 'no-repeat', 'repeat-x', 'repeat-y'
);

const fillStyle = {
    fill: pattern
};
```

#### See

 - [FillPattern](scene.FillPattern.md) For creating pattern fills
 - [FillGradient](scene.FillGradient.md) For creating gradient fills

***

### matrix

> **matrix**: [`Matrix`](maths.Matrix.md)

The transformation matrix to apply to the fill pattern or texture.
Used to scale, rotate, translate, or skew the fill.

#### Example

```ts
// Scale and rotate a texture fill
const fillStyle = {
    texture: Texture.from('myImage.png'),
    matrix: new Matrix()
        .scale(0.5, 0.5)
        .rotate(Math.PI / 4)
};
```

#### Default

```ts
null
```

***

### texture

> **texture**: [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

The texture to use for the fill.

#### Example

```ts
const fillStyle = { texture: Texture.from('myImage.png') };
```

#### See

[Texture](rendering.Texture.md) For more details on textures

***

### textureSpace

> **textureSpace**: [`TextureSpace`](scene.TextureSpace.md)

Determines how texture coordinates are calculated across shapes.
- 'local': Texture coordinates are relative to each shape's bounds
- 'global': Texture coordinates are in world space

#### Example

```ts
// Local space - texture fits each shape independently
const fillStyle = {
    texture: Texture.from('myImage.png'),
    textureSpace: 'local'
};

// Global space - texture continues across shapes
const fillStyle = {
    texture: Texture.from('myImage.png'),
    textureSpace: 'global'
};
```

#### Default

```ts
'local'
```

#### See

[TextureSpace](scene.TextureSpace.md) For more details on texture spaces
