# Type Alias: ParticleOptions

> **ParticleOptions** = [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`IParticle`](scene.IParticle.md)\>, `"color"`\> & `object`

Configuration options for creating a new particle. All properties except texture are optional
and will use default values if not specified.

## Type Declaration

### alpha?

> `optional` **alpha**: `number`

The alpha transparency (0-1)

### texture

> **texture**: [`Texture`](rendering.Texture.md)

The texture used to render this particle

### tint?

> `optional` **tint**: [`ColorSource`](color.ColorSource.md)

The tint color as a hex number or CSS color string

## Example

```ts
// Create a basic red particle
const particle = new Particle({
    texture: Texture.from('particle.png'),
    tint: 0xff0000,
    alpha: 0.8
});

// Create a scaled and rotated particle
const rotatedParticle = new Particle({
    texture: Texture.from('star.png'),
    x: 100,
    y: 100,
    scaleX: 2,
    scaleY: 2,
    rotation: Math.PI / 4,
    anchorX: 0.5,
    anchorY: 0.5
});

// Use color strings for tint
const coloredParticle = new Particle({
    texture: Texture.from('circle.png'),
    tint: '#ff00ff',     // Magenta
    alpha: 0.5,          // Half transparent
    x: 200,
    y: 200
});
```

## See

 - [Particle](scene.Particle.md) For the particle implementation
 - [IParticle](scene.IParticle.md) For the full particle interface
