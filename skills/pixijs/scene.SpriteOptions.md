# Interface: SpriteOptions

Options for configuring a Sprite instance. Defines the texture, anchor point, and rendering behavior.

## Example

```ts
// Create a basic sprite with texture
const sprite = new Sprite({
    texture: Texture.from('sprite.png')
});

// Create a centered sprite with rounded position
const centeredSprite = new Sprite({
    texture: Texture.from('centered.png'),
    anchor: 0.5,        // Center point
    roundPixels: true,  // Crisp rendering
    x: 100,            // Position from ViewContainerOptions
    y: 100
});

// Create a sprite with specific anchor points
const anchoredSprite = new Sprite({
    texture: Texture.from('corner.png'),
    anchor: {
        x: 1,  // Right-aligned
        y: 0   // Top-aligned
    }
});
```

## Extends

- `SpriteOptions`.[`ViewContainerOptions`](scene.ViewContainerOptions.md)

## Properties

### anchor?

> `optional` **anchor**: `number` \| [`PointData`](maths.PointData.md)

The anchor point of the sprite (0-1 range).
Controls the origin point for rotation, scaling, and positioning.
Can be a number for uniform anchor or a PointData for separate x/y values.

#### Default

```ts
0
```

#### Example

```ts
// Centered anchor
anchor: 0.5
// Separate x/y anchor
anchor: { x: 0.5, y: 0.5 }
// Right-aligned anchor
anchor: { x: 1, y: 0 }
```

***

### roundPixels?

> `optional` **roundPixels**: `boolean`

Whether or not to round the x/y position to whole pixels.
Useful for crisp pixel art style rendering.

#### Default

```ts
false
```

#### Example

```ts
const sprite = new Sprite({
    texture: Texture.from('sprite.png'),
    roundPixels: true // Ensures crisp rendering
});
```

***

### texture?

> `optional` **texture**: [`Texture`](rendering.Texture.md)

The texture to use for the sprite. If not provided, uses Texture.EMPTY

#### Default

```ts
Texture.EMPTY
```

#### Example

```ts
// Create a sprite with a texture
const sprite = new Sprite({
    texture: Texture.from('path/to/image.png')
});
// Update the texture later
sprite.texture = Texture.from('path/to/another-image.png');
```
