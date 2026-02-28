# Interface: TilingSpriteOptions

Constructor options used for creating a TilingSprite instance.
Defines the texture, tiling behavior, and rendering properties of the sprite.

## Example

```ts
// Create a basic tiling sprite with repeating texture
const tilingSprite = new TilingSprite({
    texture: Texture.from('pattern.png'),
    width: 800,     // Width of the tiling area
    height: 600     // Height of the tiling area
});

const background = new TilingSprite({
    texture: Texture.from('background.png'),
    width: app.screen.width,
    height: app.screen.height,
    tilePosition: { x: 0, y: 0 },
    tileScale: { x: 1.5, y: 1.5 }  // Scale up the texture
    anchor: 0.5,                    // Center anchor point
    roundPixels: true,              // Crisp pixel rendering
});
```

## See

 - [TilingSprite](scene.TilingSprite.md) For the main sprite class
 - [Texture](rendering.Texture.md) For texture management

## Extends

- `TilingSpriteOptions`.[`ViewContainerOptions`](scene.ViewContainerOptions.md)

## Properties

### anchor?

> `optional` **anchor**: `number` \| [`PointData`](maths.PointData.md)

The anchor point of the TilingSprite (0-1 range)

Controls the origin point for rotation, scaling, and positioning.
Can be a number for uniform anchor or a PointData for separate x/y values.

#### Example

```ts
// Centered anchor
const sprite = new TilingSprite({ ..., anchor: 0.5 });
sprite.anchor = 0.5;
// Separate x/y anchor
sprite.anchor = { x: 0.5, y: 0.5 };
// Right-aligned anchor
sprite.anchor = { x: 1, y: 0 };
// Update anchor directly
sprite.anchor.set(0.5, 0.5);
```

#### Default

```ts
0
```

***

### applyAnchorToTexture?

> `optional` **applyAnchorToTexture**: `boolean`

Whether the tiling pattern should originate from the anchor point.
When true, tiling starts from the origin instead of top-left.

This will make the texture coordinates assigned to each vertex dependent on the value of the anchor. Without
this, the top-left corner always gets the (0, 0) texture coordinate.

#### Example

```ts
// Enable anchor-based tiling
tilingSprite.applyAnchorToTexture = true;
```

#### Default

```ts
false
```

***

### height?

> `optional` **height**: `number`

The height of the tiling area.
This defines how tall the tiling sprite will be.

#### Example

```ts
// Set the height of the tiling sprite to 600 pixels
tilingSprite.height = 600;
```

#### Default

```ts
256
```

#### Overrides

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`height`](scene.ViewContainerOptions.html#height)

***

### roundPixels?

> `optional` **roundPixels**: `boolean`

Whether to round the sprite's position to whole pixels.
This can help with crisp rendering, especially for pixel art.
When true, the sprite's position will be rounded to the nearest pixel.

#### Example

```ts
// Enable pixel rounding for crisp rendering
tilingSprite.roundPixels = true;
```

#### Default

```ts
false
```

***

### texture?

> `optional` **texture**: [`Texture`](rendering.Texture.md)

The texture to use for tiling.
This is the image that will be repeated across the sprite.

#### Example

```ts
// Use a texture from the asset cache
tilingSprite.texture = Texture.from('assets/pattern.png');
```

#### Default

```ts
Texture.WHITE
```

***

### tilePosition?

> `optional` **tilePosition**: [`PointData`](maths.PointData.md)

The offset of the tiling texture.
Used to scroll or position the repeated pattern.

#### Example

```ts
// Offset the tiling pattern by 100 pixels in both x and y directions
tilingSprite.tilePosition = { x: 100, y: 100 };
```

#### Default

```ts
{x: 0, y: 0}
```

***

### tileRotation?

> `optional` **tileRotation**: `number`

Rotation of the tiling texture in radians.
This controls the rotation applied to the texture before tiling.

#### Example

```ts
// Rotate the texture by 45 degrees (in radians)
tilingSprite.tileRotation = Math.PI / 4; // 45 degrees
```

#### Default

```ts
0
```

***

### tileScale?

> `optional` **tileScale**: [`PointData`](maths.PointData.md)

Scale of the tiling texture.
Affects the size of each repeated instance of the texture.

#### Example

```ts
// Scale the texture by 1.5 in both x and y directions
tilingSprite.tileScale = { x: 1.5, y: 1.5 };
```

#### Default

```ts
{x: 1, y: 1}
```

***

### width?

> `optional` **width**: `number`

The width of the tiling area.
This defines how wide the tiling sprite will be.

#### Example

```ts
// Set the width of the tiling sprite to 800 pixels
tilingSprite.width = 800;
```

#### Default

```ts
256
```

#### Overrides

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`width`](scene.ViewContainerOptions.html#width)
