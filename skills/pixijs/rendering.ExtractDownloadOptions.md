# Interface: ExtractDownloadOptions

**`Advanced`**

Options for extracting and downloading content from a renderer.
Combines base extraction options with download-specific settings.

## Example

```ts
// Basic download with default filename
renderer.extract.download({
    target: sprite
});

// Download with custom filename and region
renderer.extract.download({
    target: container,
    filename: 'screenshot.png',
    frame: new Rectangle(0, 0, 100, 100)
});

// Download with high resolution and background
renderer.extract.download({
    target: stage,
    filename: 'hd-capture.png',
    resolution: 2,
    clearColor: '#ff0000'
});

// Download with anti-aliasing
renderer.extract.download({
    target: graphics,
    filename: 'smooth.png',
    antialias: true
});
```

Combines all options from:
- [BaseExtractOptions](rendering.BaseExtractOptions.md) for basic extraction settings
- Additional download-specific options

Common use cases:
- Saving game screenshots
- Exporting rendered content
- Creating downloadable assets
- Saving canvas state

## See

 - [ExtractSystem.download](rendering.ExtractSystem.html#download) For the method that uses these options
 - [ExtractSystem.image](rendering.ExtractSystem.html#image) For creating images without download

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

### filename

> **filename**: `string`

The filename to use when downloading the content.
Should include the desired file extension (e.g., .png).

#### Default

```ts
'image.png'
```

#### Example

```ts
renderer.extract.download({
    target: sprite,
    filename: 'my-screenshot.png'
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
