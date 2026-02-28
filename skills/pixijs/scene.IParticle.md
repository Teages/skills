# Interface: IParticle

Represents a particle with properties for position, scale, rotation, color, and texture.
Particles are lightweight alternatives to sprites, optimized for use in particle systems.

## Example

```ts
// Create a basic particle
const particle = new Particle({
    texture: Texture.from('particle.png'),
    x: 100,
    y: 100,
    scaleX: 0.5,
    scaleY: 0.5,
    rotation: Math.PI / 4,  // 45 degrees
    tint: 0xff0000,        // Red tint
    alpha: 0.8             // Slightly transparent
});

// Modify particle properties
particle.x += 10;          // Move right
particle.rotation += 0.1;   // Rotate slightly
particle.alpha = 0.5;      // Change transparency

// Use anchor points (0-1 range)
particle.anchorX = 0.5;    // Center horizontally
particle.anchorY = 0.5;    // Center vertically
```

## Properties

### anchorX

> **anchorX**: `number`

The x-coordinate of the particle's anchor point (0-1 range)

#### Default

```ts
0
```

***

### anchorY

> **anchorY**: `number`

The y-coordinate of the particle's anchor point (0-1 range)

#### Default

```ts
0
```

***

### color

> **color**: `number`

The color of the particle as a 32-bit RGBA value

#### Default

```ts
0xffffffff
```

***

### rotation

> **rotation**: `number`

The rotation of the particle in radians

#### Default

```ts
0
```

***

### scaleX

> **scaleX**: `number`

The horizontal scale factor of the particle

#### Default

```ts
1
```

***

### scaleY

> **scaleY**: `number`

The vertical scale factor of the particle

#### Default

```ts
1
```

***

### texture

> **texture**: [`Texture`](rendering.Texture.md)

The texture used to render this particle

***

### x

> **x**: `number`

The x-coordinate of the particle position

***

### y

> **y**: `number`

The y-coordinate of the particle position
