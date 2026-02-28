# Interface: FillStyle

Defines the style properties used for filling shapes in graphics and text operations.
This interface provides options for colors, textures, patterns, and gradients.

## Example

```ts
// Basic color fill
const fillStyle = {
    color: 0xff0000,  // Red
    alpha: 0.5        // 50% opacity
};

// Textured fill ( Graphics only )
const fillStyle = {
    texture: Texture.from('myImage.png'),
    matrix: new Matrix().scale(0.5, 0.5),
};

// Gradient fill
const gradient = new FillGradient({
   end: { x: 1, y: 0 },
   stops: [
       { color: 0xff0000, offset: 0 }, // Red at start
       { color: 0x0000ff, offset: 1 }, // Blue at end
   ]
})

const fillStyle = {
    fill: gradient,
    alpha: 1
};
```

## See

 - [FillPattern](scene.FillPattern.md) For creating pattern fills
 - [FillGradient](scene.FillGradient.md) For creating gradient fills
 - [TextureSpace](scene.TextureSpace.md) For texture coordinate calculation modes

## Extended by

- [`StrokeStyle`](scene.StrokeStyle.md)

## Properties

### alpha?

> `optional` **alpha**: `number`

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
 - [FillStyle#color](#color) For color usage

***

### color?

> `optional` **color**: [`ColorSource`](color.ColorSource.md)

The color to use for the fill.
This can be any valid color source, such as a hex value, a Color object, or a string.

#### Example

```ts
// Using a hex color
const fillStyle = { color: 0xff0000 }; // Red
// Using a Color object
const fillStyle = { color: new Color(1, 0, 0) }; // Red
// Using a string color
const fillStyle = { color: 'red' }; // Red
// Using object string
const fillStyle = { color: 'rgb(255, 0, 0)' }; // Red
```

#### See

[ColorSource](color.ColorSource.md) For more details on color sources

***

### fill?

> `optional` **fill**: [`FillGradient`](scene.FillGradient.md) \| [`FillPattern`](scene.FillPattern.md)

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

### matrix?

> `optional` **matrix**: [`Matrix`](maths.Matrix.md)

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

### texture?

> `optional` **texture**: [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

The texture to use for the fill.

#### Example

```ts
const fillStyle = { texture: Texture.from('myImage.png') };
```

#### See

[Texture](rendering.Texture.md) For more details on textures

***

### textureSpace?

> `optional` **textureSpace**: [`TextureSpace`](scene.TextureSpace.md)

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
