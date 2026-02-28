# Interface: ParticleProperties

Represents the properties of a particle that can be dynamically updated each frame.
These properties control which aspects of particles are recalculated during rendering.
Setting a property to true enables per-frame updates, while false only updates when manually triggered.

## Example

```ts
// Create a particle container with dynamic position and rotation
const container = new ParticleContainer({
    dynamicProperties: {
        position: true,  // Update positions each frame
        rotation: true,  // Update rotations each frame
        vertex: false,   // Static vertices
        uvs: false,     // Static texture coordinates
        color: false     // Static colors
    }
});

// Create a fully dynamic particle container
const dynamicContainer = new ParticleContainer({
    dynamicProperties: {
        vertex: true,    // Dynamic mesh deformation
        position: true,  // Dynamic movement
        rotation: true,  // Dynamic spinning
        uvs: true,      // Dynamic texture animation
        color: true     // Dynamic coloring
    }
});
```

## See

 - [ParticleContainer](scene.ParticleContainer.md) For the main particle container class
 - [ParticleContainerOptions](scene.ParticleContainerOptions.md) For all container configuration options

## Properties

### color?

> `optional` **color**: `boolean`

When true, color values are updated each frame.
Enables color transitions and alpha changes.

#### Default

```ts
false
```

***

### position?

> `optional` **position**: `boolean`

When true, particle positions are updated each frame.
Essential for moving particles.

#### Default

```ts
true
```

***

### rotation?

> `optional` **rotation**: `boolean`

When true, rotation values are updated each frame.
Needed for spinning particles.

#### Default

```ts
false
```

***

### uvs?

> `optional` **uvs**: `boolean`

When true, texture coordinates are updated each frame.
Required for texture animation.

#### Default

```ts
false
```

***

### vertex?

> `optional` **vertex**: `boolean`

When true, vertex positions are updated each frame.
Useful for mesh deformation effects.

#### Default

```ts
false
```
