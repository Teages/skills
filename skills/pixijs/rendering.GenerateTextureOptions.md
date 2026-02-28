# Type Alias: GenerateTextureOptions

> **GenerateTextureOptions** = `object`

**`Advanced`**

Options for generating a texture from a container.
Used to create reusable textures from display objects, which can improve performance
when the same content needs to be rendered multiple times.

## Example

```ts
// Basic texture generation
const sprite = new Sprite(texture);
const generatedTexture = renderer.generateTexture({
    target: sprite
});

// Generate with custom region and resolution
const texture = renderer.generateTexture({
    target: container,
    frame: new Rectangle(0, 0, 100, 100),
    resolution: 2
});

// Generate with background color and anti-aliasing
const highQualityTexture = renderer.generateTexture({
    target: graphics,
    clearColor: '#ff0000',
    antialias: true,
    textureSourceOptions: {
        scaleMode: 'linear'
    }
});
```

## Properties

### antialias?

> `optional` **antialias**: `boolean`

Whether to enable anti-aliasing. This may affect performance.

#### Default

```ts
false
```

#### Example

```ts
// Generate a smooth texture
const texture = renderer.generateTexture({
    target: graphics,
    antialias: true
});
```

***

### clearColor?

> `optional` **clearColor**: [`ColorSource`](color.ColorSource.md)

The color used to clear the texture before rendering.
Can be a hex number, string, or array of numbers.

#### Example

```ts
// Clear with red background
const texture = renderer.generateTexture({
    target: sprite,
    clearColor: '#ff0000'
});

// Clear with semi-transparent black
const texture = renderer.generateTexture({
    target: sprite,
    clearColor: [0, 0, 0, 0.5]
});
```

***

### frame?

> `optional` **frame**: [`Rectangle`](maths.Rectangle.md)

The region of the container that should be rendered.
If not specified, defaults to the local bounds of the container.

#### Example

```ts
// Extract only a portion of the container
const texture = renderer.generateTexture({
    target: container,
    frame: new Rectangle(10, 10, 100, 100)
});
```

***

### resolution?

> `optional` **resolution**: `number`

The resolution of the texture being generated.
Higher values create sharper textures at the cost of memory.

#### Default

```ts
renderer.resolution
```

#### Example

```ts
// Generate a high-resolution texture
const hiResTexture = renderer.generateTexture({
    target: sprite,
    resolution: 2 // 2x resolution
});
```

***

### target

> **target**: [`Container`](scene.Container.md)

The container to generate the texture from.
This can be any display object like Sprite, Container, or Graphics.

#### Example

```ts
const graphics = new Graphics()
    .circle(0, 0, 50)
    .fill('red');

const texture = renderer.generateTexture({
    target: graphics
});
```

***

### textureSourceOptions?

> `optional` **textureSourceOptions**: [`GenerateTextureSourceOptions`](rendering.GenerateTextureSourceOptions.md)

**`Advanced`**

Advanced options for configuring the texture source.
Controls texture properties like scale mode and filtering.

#### Example

```ts
const texture = renderer.generateTexture({
    target: sprite,
    textureSourceOptions: {
        scaleMode: 'linear',
    }
});
```
