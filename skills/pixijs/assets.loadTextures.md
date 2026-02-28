# Variable: loadTextures

> `const` **loadTextures**: [`LoaderParser`](assets.LoaderParser.md)\<[`Texture`](rendering.Texture.md), [`TextureSourceOptions`](rendering.TextureSourceOptions.md), [`LoadTextureConfig`](assets.LoadTextureConfig.md)\>

**`Advanced`**

A simple plugin to load our textures!
This makes use of imageBitmaps where available.
We load the `ImageBitmap` on a different thread using workers if possible.
We can then use the `ImageBitmap` as a source for a Pixi texture

You can customize the behavior of this loader by setting the `config` property.
Which can be found [here][LoadTextureConfig](assets.LoadTextureConfig.md)
```js
// Set the config
import { loadTextures } from 'pixi.js';

loadTextures.config = {
   // If true we will use a worker to load the ImageBitmap
   preferWorkers: true,
   // If false we will use new Image() instead of createImageBitmap,
   // we'll also disable the use of workers as it requires createImageBitmap
   preferCreateImageBitmap: true,
   crossOrigin: 'anonymous',
};
```
