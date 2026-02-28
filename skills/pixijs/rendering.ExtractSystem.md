# Class: ExtractSystem

System for exporting content from a renderer. It provides methods to extract content as images,
canvases, or raw pixel data. Available through `renderer.extract`.

## Example

```ts
import { Application, Graphics } from 'pixi.js';

// Create a new application
const app = new Application();
await app.init();

// Draw something to extract
const graphics = new Graphics()
    .circle(0, 0, 50)
    .fill(0xFF0000);

// Basic extraction examples
const image = await app.renderer.extract.image(graphics);    // As IImage (HTMLImageElement)
const canvas = app.renderer.extract.canvas(graphics);        // As Canvas
const pixels = app.renderer.extract.pixels(graphics);        // As pixel data
const base64 = await app.renderer.extract.base64(graphics); // As base64 string

// Advanced extraction with options
const customImage = await app.renderer.extract.image({
    target: graphics,
    format: 'png',
    resolution: 2,
    frame: new Rectangle(0, 0, 100, 100),
    clearColor: '#00000000'
});

// Download content
app.renderer.extract.download({
    target: graphics,
    filename: 'my-image.png'
});

// Debug visualization
app.renderer.extract.log(graphics);
```

Features:
- Extract as various formats (PNG, JPEG, WebP)
- Control output quality and resolution
- Extract specific regions
- Download extracted content
- Debug visualization

Common Use Cases:
- Creating thumbnails
- Saving game screenshots
- Processing visual content
- Debugging renders
- Creating textures from rendered content

Performance Considerations:
- Extraction operations are relatively expensive
- Consider caching results for frequently used content
- Be mindful of resolution and format choices
- Large extractions may impact performance

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new ExtractSystem**(`renderer`): `ExtractSystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

The renderer this System works for.

#### Returns

`ExtractSystem`

## rendering

### base64()

> **base64**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Converts the target into a base64 encoded string.

This method works by first creating
a canvas using `Extract.canvas` and then converting it to a base64 string.

#### Parameters

##### options

The options for creating the base64 string, or the target to extract

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> | [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> | [`ExtractImageOptions`](rendering.ExtractImageOptions.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Promise that resolves with the base64 encoded string

#### Example

```ts
// Basic usage with a sprite
const sprite = new Sprite(texture);
const base64 = await renderer.extract.base64(sprite);
console.log(base64); // data:image/png;base64,...

// Advanced usage with options
const base64 = await renderer.extract.base64({
    target: container,
    format: 'webp',
    quality: 0.8,
    frame: new Rectangle(0, 0, 100, 100),
    resolution: 2
});
```

#### Throws

Will throw an error if the platform doesn't support any of:
- ICanvas.toDataURL
- ICanvas.toBlob
- ICanvas.convertToBlob

#### See

 - [ExtractImageOptions](rendering.ExtractImageOptions.md) For detailed options
 - [ExtractSystem.canvas](#canvas) For canvas output
 - [ExtractSystem.image](#image) For HTMLImage output

***

### canvas()

> **canvas**(`options`): [`ICanvas`](environment.ICanvas.md)

Creates a Canvas element, renders the target to it and returns it.
This method is useful for creating static images or when you need direct canvas access.

#### Parameters

##### options

The options for creating the canvas, or the target to extract

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> | [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> | [`ExtractOptions`](rendering.ExtractOptions.md)

#### Returns

[`ICanvas`](environment.ICanvas.md)

A Canvas element with the texture rendered on

#### Example

```ts
// Basic canvas extraction from a sprite
const sprite = new Sprite(texture);
const canvas = renderer.extract.canvas(sprite);
document.body.appendChild(canvas);

// Extract with custom region
const canvas = renderer.extract.canvas({
    target: container,
    frame: new Rectangle(0, 0, 100, 100)
});

// Extract with high resolution
const canvas = renderer.extract.canvas({
    target: sprite,
    resolution: 2,
    clearColor: '#ff0000'
});

// Extract directly from a texture
const texture = Texture.from('myTexture.png');
const canvas = renderer.extract.canvas(texture);

// Extract with anti-aliasing
const canvas = renderer.extract.canvas({
    target: graphics,
    antialias: true
});
```

#### See

 - [ExtractOptions](rendering.ExtractOptions.md) For detailed options
 - [ExtractSystem.image](#image) For HTMLImage output
 - [ExtractSystem.pixels](#pixels) For raw pixel data

***

### download()

> **download**(`options`): `void`

Extracts and downloads content from the renderer as an image file.
This is a convenient way to save screenshots or export rendered content.
> [!NOTE] The download will use PNG format regardless of the filename extension

#### Parameters

##### options

The options for downloading and extracting the image, or the target to extract

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> | [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> | [`ExtractDownloadOptions`](rendering.ExtractDownloadOptions.md)

#### Returns

`void`

#### Example

```ts
// Basic download with default filename
const sprite = new Sprite(texture);
renderer.extract.download(sprite); // Downloads as 'image.png'

// Download with custom filename
renderer.extract.download({
    target: sprite,
    filename: 'screenshot.png'
});

// Download with custom region
renderer.extract.download({
    target: container,
    filename: 'region.png',
    frame: new Rectangle(0, 0, 100, 100)
});

// Download with high resolution and background
renderer.extract.download({
    target: stage,
    filename: 'hd-screenshot.png',
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

#### See

 - [ExtractDownloadOptions](rendering.ExtractDownloadOptions.md) For detailed options
 - [ExtractSystem.image](#image) For creating images without download
 - [ExtractSystem.canvas](#canvas) For canvas output

***

### image()

> **image**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ImageLike`](environment.ImageLike.md)\>

Creates an IImage from a display object or texture.

#### Parameters

##### options

Options for creating the image, or the target to extract

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> | [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> | [`ExtractImageOptions`](rendering.ExtractImageOptions.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ImageLike`](environment.ImageLike.md)\>

Promise that resolves with the generated IImage

#### Example

```ts
// Basic usage with a sprite
const sprite = new Sprite(texture);
const image = await renderer.extract.image(sprite);
document.body.appendChild(image);

// Advanced usage with options
const image = await renderer.extract.image({
    target: container,
    format: 'webp',
    quality: 0.8,
    frame: new Rectangle(0, 0, 100, 100),
    resolution: 2,
    clearColor: '#ff0000',
    antialias: true
});

// Extract directly from a texture
const texture = Texture.from('myTexture.png');
const image = await renderer.extract.image(texture);
```

#### See

 - [ExtractImageOptions](rendering.ExtractImageOptions.md) For detailed options
 - [ExtractSystem.base64](#base64) For base64 string output
 - [ExtractSystem.canvas](#canvas) For canvas output
 - [ImageLike](environment.ImageLike.md) For the image interface

***

### log()

> **log**(`options`): `void`

**`Advanced`**

Logs the target to the console as an image. This is a useful way to debug what's happening in the renderer.
The image will be displayed in the browser's console using CSS background images.

#### Parameters

##### options

The options for logging the image, or the target to log

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> | [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> | ExtractOptions & \{ width?: number; \}

#### Returns

`void`

#### Example

```ts
// Basic usage
const sprite = new Sprite(texture);
renderer.extract.log(sprite);
```

#### See

 - [ExtractSystem.canvas](#canvas) For getting raw canvas output
 - [ExtractSystem.pixels](#pixels) For raw pixel data

***

### pixels()

> **pixels**(`options`): [`GetPixelsOutput`](rendering.GetPixelsOutput.md)

Returns a one-dimensional array containing the pixel data of the entire texture in RGBA order,
with integer values between 0 and 255 (inclusive).
> [!NOE] The returned array is a flat Uint8Array where every 4 values represent RGBA

#### Parameters

##### options

The options for extracting the image, or the target to extract

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> | [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> | [`ExtractOptions`](rendering.ExtractOptions.md)

#### Returns

[`GetPixelsOutput`](rendering.GetPixelsOutput.md)

One-dimensional Uint8Array containing the pixel data in RGBA format

#### Example

```ts
// Basic pixel extraction
const sprite = new Sprite(texture);
const pixels = renderer.extract.pixels(sprite);
console.log(pixels[0], pixels[1], pixels[2], pixels[3]); // R,G,B,A values

// Extract with custom region
const pixels = renderer.extract.pixels({
    target: sprite,
    frame: new Rectangle(0, 0, 100, 100)
});

// Extract with high resolution
const pixels = renderer.extract.pixels({
    target: sprite,
    resolution: 2
});
```

#### See

 - [ExtractOptions](rendering.ExtractOptions.md) For detailed options
 - [ExtractSystem.canvas](#canvas) For canvas output
 - [ExtractSystem.image](#image) For image output

***

### texture()

> **texture**(`options`): [`Texture`](rendering.Texture.md)

Creates a texture from a display object or existing texture.

This is useful for creating
reusable textures from rendered content or making copies of existing textures.
> [!NOTE] The returned texture should be destroyed when no longer needed

#### Parameters

##### options

The options for creating the texture, or the target to extract

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> | [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> | [`ExtractOptions`](rendering.ExtractOptions.md)

#### Returns

[`Texture`](rendering.Texture.md)

A new texture containing the extracted content

#### Example

```ts
// Basic texture extraction from a sprite
const sprite = new Sprite(texture);
const extractedTexture = renderer.extract.texture(sprite);

// Extract with custom region
const regionTexture = renderer.extract.texture({
    target: container,
    frame: new Rectangle(0, 0, 100, 100)
});

// Extract with high resolution
const hiResTexture = renderer.extract.texture({
    target: sprite,
    resolution: 2,
    clearColor: '#ff0000'
});

// Create a new sprite from extracted texture
const newSprite = new Sprite(
    renderer.extract.texture({
        target: graphics,
        antialias: true
    })
);

// Clean up when done
extractedTexture.destroy(true);
```

#### See

 - [ExtractOptions](rendering.ExtractOptions.md) For detailed options
 - [Texture](rendering.Texture.md) For texture management
 - [GenerateTextureSystem](rendering.GenerateTextureSystem.md) For texture generation

## Other

### defaultImageOptions

> `static` **defaultImageOptions**: [`ImageOptions`](rendering.ImageOptions.md)

Default options for image extraction.

#### Example

```ts
// Customize default options
ExtractSystem.defaultImageOptions.format = 'webp';
ExtractSystem.defaultImageOptions.quality = 0.8;

// Use defaults
const image = await renderer.extract.image(sprite);
```

***

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)
