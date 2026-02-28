# Interface: ImageOptions

**`Advanced`**

Options for creating an image from a renderer.
Controls the output format and quality of extracted images.

## Example

```ts
// Extract as PNG (default)
const pngImage = await renderer.extract.image({
    target: sprite,
    format: 'png'
});

// Extract as JPEG with quality setting
const jpgImage = await renderer.extract.image({
    target: sprite,
    format: 'jpg',
    quality: 0.8
});

// Extract as WebP for better compression
const webpImage = await renderer.extract.image({
    target: sprite,
    format: 'webp',
    quality: 0.9
});
```

## Properties

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
