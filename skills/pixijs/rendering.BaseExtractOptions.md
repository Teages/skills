# Interface: BaseExtractOptions

**`Advanced`**

Options for extracting content from a renderer.
These options control how content is extracted and processed from the renderer.

## Example

```ts
// Basic extraction
const pixels = renderer.extract.pixels({
    target: sprite,
});

// Extract with custom region and resolution
const canvas = renderer.extract.canvas({
    target: container,
    frame: new Rectangle(0, 0, 100, 100),
    resolution: 2,
});

// Extract with background color and anti-aliasing
const image = await renderer.extract.image({
    target: graphics,
    clearColor: '#ff0000',
    antialias: true
});
```

## Properties

### antialias?

> `optional` **antialias**: `boolean`

Whether to enable anti-aliasing during extraction.
Improves quality but may affect performance.

#### Default

```ts
false
```

#### Example

```ts
// Enable anti-aliasing for smoother edges
renderer.extract.image({
    target: graphics,
    antialias: true
});
```

***

### clearColor?

> `optional` **clearColor**: [`ColorSource`](color.ColorSource.md)

The color used to clear the extracted content before rendering.
Can be a hex number, string, or array of numbers.

#### Example

```ts
// Clear with red background
renderer.extract.canvas({
    target: sprite,
    clearColor: '#ff0000'
});

// Clear with semi-transparent black
renderer.extract.canvas({
    target: sprite,
    clearColor: [0, 0, 0, 0.5]
});
```

***

### frame?

> `optional` **frame**: [`Rectangle`](maths.Rectangle.md)

The region of the target to extract. If not specified, extracts the entire target.

#### Example

```ts
// Extract a specific region
renderer.extract.canvas({
    target: sprite,
    frame: new Rectangle(10, 10, 100, 100)
});
```

***

### resolution?

> `optional` **resolution**: `number`

The resolution of the extracted content. Higher values create sharper images.

#### Default

```ts
1
```

#### Example

```ts
// Extract at 2x resolution for retina displays
renderer.extract.image({
    target: sprite,
    resolution: 2
});
```

***

### target

> **target**: [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> \| [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

The target to extract. Can be a Container or Texture.

#### Example

```ts
// Extract from a sprite
const sprite = new Sprite(texture);
renderer.extract.pixels({ target: sprite });

// Extract from a texture directly
renderer.extract.pixels({ target: texture });
```
