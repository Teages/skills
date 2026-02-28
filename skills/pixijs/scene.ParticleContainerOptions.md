# Interface: ParticleContainerOptions\<T\>

Options for configuring a ParticleContainer. Controls how particles are rendered, updated, and managed.

## Example

```ts
// Create a basic particle container
const container = new ParticleContainer({
    texture: Texture.from('particle.png'),
    particles: [
        new Particle(texture),
        new Particle(texture)
    ],
    dynamicProperties: {
        position: true,  // Update positions each frame
        rotation: true   // Update rotations each frame
    }
});
```

## See

 - [ParticleContainer](scene.ParticleContainer.md) For the main particle container class
 - [ParticleProperties](scene.ParticleProperties.md) For dynamic property configuration

## Extends

- `ParticleContainerOptions`.[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`ViewContainerOptions`](scene.ViewContainerOptions.md), `"children"`\>

## Type Parameters

### T

`T` *extends* [`IParticle`](scene.IParticle.md) = [`IParticle`](scene.IParticle.md)

The type of particles in the container. Must implement [IParticle](scene.IParticle.md). *

## Properties

### dynamicProperties?

> `optional` **dynamicProperties**: [`ParticleProperties`](scene.ParticleProperties.md) & [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `boolean`\>

Specifies which particle properties should update each frame.
Set properties to true for per-frame updates, false for static values.

#### Default

```ts
{ position: true, rotation: false, vertex: false, uvs: false, color: false }
```

***

### particles?

> `optional` **particles**: `T`[]

Initial array of particles to add to the container. All particles must share the same base texture.

***

### roundPixels?

> `optional` **roundPixels**: `boolean`

When true, particle positions are rounded to the nearest pixel.
Helps achieve crisp rendering at the cost of smooth motion.

#### Default

```ts
false
```

***

### shader?

> `optional` **shader**: [`Shader`](rendering.Shader.md)

**`Advanced`**

Custom shader for rendering particles. Allows for custom visual effects.

***

### texture?

> `optional` **texture**: [`Texture`](rendering.Texture.md)

The texture used for all particles in this container.
If not provided, uses the texture of the first particle added.
