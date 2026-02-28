# Interface: ExtractImageOptions

**`Advanced`**

Options for extracting an HTMLImage from the renderer.
Combines base extraction options with image-specific settings.

## Example

```ts
// Basic PNG extraction
const image = await renderer.extract.image({
    target: sprite,
    format: 'png'
});

// High-quality JPEG with custom region
const image = await renderer.extract.image({
    target: container,
    format: 'jpg',
    quality: 0.9,
    frame: new Rectangle(0, 0, 100, 100),
    resolution: 2
});

// WebP with background and anti-aliasing
const image = await renderer.extract.image({
    target: graphics,
    format: 'webp',
    quality: 0.8,
    clearColor: '#ff0000',
    antialias: true
});
```

Combines all options from:
- [BaseExtractOptions](rendering.BaseExtractOptions.md) for basic extraction settings
- [ImageOptions](rendering.ImageOptions.md) for image format and quality settings

Common use cases:
- Capturing game screenshots
- Saving rendered content
- Creating image thumbnails
- Exporting canvas content

## See

 - [ExtractSystem.image](rendering.ExtractSystem.html#image) For the method that uses these options
 - [ExtractSystem.base64](rendering.ExtractSystem.html#base64) For base64 encoding

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

### format?

> `optional` **format**: `"png"` \| `"jpg"` \| `"webp"`

The format of the extracted image.
- 'png': Lossless format, best for images with text or sharp edges
- 'jpg': Lossy format, smaller file size, good for photos
- 'webp': Modern format with better compression

#### Example

```ts
// Extract as PNG
const pngImage = await renderer.extract.image({
    target: sprite,
    format: 'png'
});
// Extract as JPEG
const jpgImage = await renderer.extract.image({
    target: sprite,
    format: 'jpg',
});
```

#### Default

```ts
'png'
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

### quality?

> `optional` **quality**: `number`

The quality of the extracted image, between 0 and 1.
Only applies to lossy formats (jpg, webp).
- 1: Maximum quality
- 0: Maximum compression

#### Example

```ts
// Extract as JPEG with 80% quality
const jpgImage = await renderer.extract.image({
    target: sprite,
    format: 'jpg',
    quality: 0.8
});
// Extract as WebP with 90% quality
const webpImage = await renderer.extract.image({
    target: sprite,
    format: 'webp',
    quality: 0.9
});
```

#### Default

```ts
1
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
