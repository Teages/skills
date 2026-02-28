# Type Alias: ExtractOptions

> **ExtractOptions** = [`BaseExtractOptions`](rendering.BaseExtractOptions.md) \| [`ExtractImageOptions`](rendering.ExtractImageOptions.md) \| [`ExtractDownloadOptions`](rendering.ExtractDownloadOptions.md)

**`Advanced`**

Options for extracting content from a renderer. Represents a union of all possible extraction option types.
Used by various extraction methods to support different output formats and configurations.

## Example

```ts
// Basic canvas extraction
const canvas = renderer.extract.canvas({
    target: sprite
});

// Image extraction with format
const image = await renderer.extract.image({
    target: sprite,
    format: 'png',
    quality: 1
});

// Download with filename
renderer.extract.download({
    target: sprite,
    filename: 'screenshot.png'
});

// Advanced extraction with multiple options
const image = await renderer.extract.image({
    target: container,
    frame: new Rectangle(0, 0, 100, 100),
    resolution: 2,
    clearColor: '#ff0000',
    antialias: true,
    format: 'webp',
    quality: 0.8
});
```

Supports three types of options:
- [BaseExtractOptions](rendering.BaseExtractOptions.md) - Basic extraction settings
- [ExtractImageOptions](rendering.ExtractImageOptions.md) - Image-specific settings with format and quality
- [ExtractDownloadOptions](rendering.ExtractDownloadOptions.md) - Download settings with filename

Common use cases:
- Extracting raw pixels
- Creating canvas elements
- Generating downloadable images
- Taking screenshots
- Creating thumbnails

## See

 - [ExtractSystem.canvas](rendering.ExtractSystem.html#canvas) For canvas extraction
 - [ExtractSystem.image](rendering.ExtractSystem.html#image) For image extraction
 - [ExtractSystem.download](rendering.ExtractSystem.html#download) For downloading content
