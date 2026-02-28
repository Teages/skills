# Interface: ConvertedStrokeStyle

**`Advanced`**

used internally and is a complete stroke style

## Properties

### alignment

> **alignment**: `number`

The alignment of the stroke relative to the path.
- 1: Inside the shape
- 0.5: Centered on the path (default)
- 0: Outside the shape

#### Example

```ts
// Inside alignment
const stroke = { alignment: 1 };
// Centered alignment
const stroke = { alignment: 0.5 };
// Outside alignment
const stroke = { alignment: 0 };
```

#### Default

```ts
0.5
```

***

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

### cap

> **cap**: [`LineCap`](scene.LineCap.md)

The style to use for the ends of open paths.
- 'butt': Ends at path end
- 'round': Rounds past path end
- 'square': Squares past path end

#### Example

```ts
const stroke = { cap: 'round' };
```

#### Default

```ts
'butt'
```

#### See

[LineCap](scene.LineCap.md) For line cap options

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

### join

> **join**: [`LineJoin`](scene.LineJoin.md)

The style to use where paths connect.
- 'miter': Sharp corner
- 'round': Rounded corner
- 'bevel': Beveled corner

#### Example

```ts
const stroke = { join: 'round' };
```

#### Default

```ts
'miter'
```

#### See

[LineJoin](scene.LineJoin.md) For line join options

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

### miterLimit

> **miterLimit**: `number`

Controls how far miter joins can extend. Only applies when join is 'miter'.
Higher values allow sharper corners.

#### Example

```ts
const stroke = {
    join: 'miter',
    miterLimit: 3,
};
```

#### Default

```ts
10
```

***

### pixelLine

> **pixelLine**: `boolean`

When true, ensures crisp 1px lines by aligning to pixel boundaries.
> [!NOTE] Only available for Graphics fills.

#### Example

```ts
const graphics = new Graphics();

// Draw pixel-perfect line
graphics
    .moveTo(50, 50)
    .lineTo(150, 50)
    .stroke({
        width: 1,
        pixelLine: true,
        color: 0x000000
    });
```

#### Default

```ts
false
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

***

### width

> **width**: `number`

The width of the stroke in pixels.

#### Example

```ts
const stroke = { width: 4 };
```

#### Default

```ts
1
```
