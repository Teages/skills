# Class: Particle

Represents a single particle within a particle container. This class implements the IParticle interface,
providing properties and methods to manage the particle's position, scale, rotation, color, and texture.

The reason we use a particle over a sprite is that these are much lighter weight and we can create a lot of them
without taking on the overhead of a full sprite.

## Example

```javascript
const particle = new Particle({
  texture,
  x: 100,
  y: 100,
  scaleX: 0.5,
  scaleY: 0.5,
  rotation: Math.PI / 2,
  color: 0xff0000,
});
```

## Implements

- [`IParticle`](scene.IParticle.md)

## Constructors

### Constructor

> **new Particle**(`options`): `Particle`

#### Parameters

##### options

[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> | [`ParticleOptions`](scene.ParticleOptions.md)

#### Returns

`Particle`

## Properties

### anchorX

> **anchorX**: `number`

The x-coordinate of the anchor point (0-1).
Controls the origin point for rotation and scaling.

#### Example

```ts
particle.anchorX = 0.5; // Center horizontally
```

#### Default

```ts
0
```

#### Implementation of

[`IParticle`](scene.IParticle.md).[`anchorX`](scene.IParticle.html#anchorx)

***

### anchorY

> **anchorY**: `number`

The y-coordinate of the anchor point (0-1).
Controls the origin point for rotation and scaling.

#### Example

```ts
particle.anchorY = 0.5; // Center vertically
```

#### Default

```ts
0
```

#### Implementation of

[`IParticle`](scene.IParticle.md).[`anchorY`](scene.IParticle.html#anchory)

***

### color

> **color**: `number`

The color of the particle as a 32-bit RGBA value.
Combines tint and alpha into a single value.

#### Example

```ts
// Usually set via tint and alpha properties
particle.tint = 0xff0000; // Red
particle.alpha = 0.5; // Half transparent
console.log(particle.color); // Combined RGBA value
```

#### Default

```ts
0xffffffff
```

#### Implementation of

[`IParticle`](scene.IParticle.md).[`color`](scene.IParticle.html#color)

***

### rotation

> **rotation**: `number`

The rotation of the particle in radians.
Positive values rotate clockwise.

#### Example

```ts
particle.rotation = Math.PI; // 180 degrees
particle.rotation += 0.1; // Rotate slowly clockwise
```

#### Default

```ts
0
```

#### Implementation of

[`IParticle`](scene.IParticle.md).[`rotation`](scene.IParticle.html#rotation)

***

### scaleX

> **scaleX**: `number`

The horizontal scale factor of the particle.
Values greater than 1 increase size, less than 1 decrease size.

#### Example

```ts
particle.scaleX = 2; // Double width
particle.scaleX *= 0.9; // Shrink over time
```

#### Default

```ts
1
```

#### Implementation of

[`IParticle`](scene.IParticle.md).[`scaleX`](scene.IParticle.html#scalex)

***

### scaleY

> **scaleY**: `number`

The vertical scale factor of the particle.
Values greater than 1 increase size, less than 1 decrease size.

#### Example

```ts
particle.scaleY = 2; // Double height
particle.scaleY *= 0.9; // Shrink over time
```

#### Default

```ts
1
```

#### Implementation of

[`IParticle`](scene.IParticle.md).[`scaleY`](scene.IParticle.html#scaley)

***

### texture

> **texture**: [`Texture`](rendering.Texture.md)

The texture used to render this particle.
All particles in a container should share the same base texture.

#### Example

```ts
particle.texture = Texture.from('particle.png');
```

#### Implementation of

[`IParticle`](scene.IParticle.md).[`texture`](scene.IParticle.html#texture)

***

### x

> **x**: `number`

The x-coordinate of the particle in world space.

#### Example

```ts
particle.x = 100; // Move right
particle.x += Math.sin(time) * 10; // Oscillate horizontally
```

#### Default

```ts
0
```

#### Implementation of

[`IParticle`](scene.IParticle.md).[`x`](scene.IParticle.html#x)

***

### y

> **y**: `number`

The y-coordinate of the particle in world space.

#### Example

```ts
particle.y = 100; // Move down
particle.y += Math.cos(time) * 10; // Oscillate vertically
```

#### Default

```ts
0
```

#### Implementation of

[`IParticle`](scene.IParticle.md).[`y`](scene.IParticle.html#y)

***

### defaultOptions

> `static` **defaultOptions**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ParticleOptions`](scene.ParticleOptions.md)\>

Default options used when creating new particles. These values are applied when specific
options aren't provided in the constructor.

#### Example

```ts
// Override defaults globally
Particle.defaultOptions = {
    ...Particle.defaultOptions,
    anchorX: 0.5,
    anchorY: 0.5,
    alpha: 0.8
};

// New particles use modified defaults
const centeredParticle = new Particle(texture);
console.log(centeredParticle.anchorX); // 0.5
console.log(centeredParticle.alpha); // 0.8
```

#### See

 - [ParticleOptions](scene.ParticleOptions.md) For all available options
 - Particle For the particle implementation

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

The transparency of the particle. Values range from 0 (fully transparent)
to 1 (fully opaque). Values outside this range are clamped.

##### Example

```ts
// Create a semi-transparent particle
const particle = new Particle({
    texture: Texture.from('particle.png'),
    alpha: 0.5
});

// Fade out
particle.alpha *= 0.9;

// Fade in
particle.alpha = Math.min(particle.alpha + 0.1, 1);

// Values are clamped to valid range
particle.alpha = 1.5; // Becomes 1.0
particle.alpha = -0.5; // Becomes 0.0

// Animate transparency
app.ticker.add((delta) => {
    const time = performance.now() / 1000;
    particle.alpha = 0.5 + Math.sin(time) * 0.5; // Pulse between 0-1
});
```

##### Default

```ts
1
```

##### See

 - [Particle#tint](#tint) For controlling particle color
 - [Particle#color](#color) For the combined color and alpha value

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### tint

#### Get Signature

> **get** **tint**(): `number`

The tint color of the particle. Can be set using hex numbers or CSS color strings.
The tint is multiplied with the texture color to create the final particle color.

##### Example

```ts
// Create a red particle
const particle = new Particle({
    texture: Texture.from('particle.png'),
    tint: 0xff0000
});

// Use CSS color strings
particle.tint = '#00ff00';  // Green
particle.tint = 'blue';     // Blue

// Animate tint color
app.ticker.add(() => {
    const time = performance.now() / 1000;

    // Cycle through hues
    const hue = (time * 50) % 360;
    particle.tint = `hsl(${hue}, 100%, 50%)`;
});

// Reset to white (no tint)
particle.tint = 0xffffff;
```

##### Default

```ts
0xffffff
```

##### See

 - [Particle#alpha](#alpha) For controlling transparency
 - [Particle#color](#color) For the combined color and alpha value
 - [Color](color.Color.md) For supported color formats

##### Returns

`number`

#### Set Signature

> **set** **tint**(`value`): `void`

##### Parameters

###### value

[`ColorSource`](color.ColorSource.md)

##### Returns

`void`
