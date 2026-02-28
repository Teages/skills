# Class: Spritesheet\<S\>

Utility class for maintaining reference to a collection
of Textures on a single Spritesheet.

To access a sprite sheet from your code you may pass its JSON data file to Pixi's loader:

```js
import { Assets } from 'pixi.js';

const sheet = await Assets.load('images/spritesheet.json');
```

Alternately, you may circumvent the loader by instantiating the Spritesheet directly:

```js
import { Spritesheet } from 'pixi.js';

const sheet = new Spritesheet(texture, spritesheetData);
await sheet.parse();
console.log('Spritesheet ready to use!');
```

With the `sheet.textures` you can create Sprite objects, and `sheet.animations` can be used to create an AnimatedSprite.

Here's an example of a sprite sheet JSON data file:
```json
{
    "frames": {
        "enemy1.png":
        {
            "frame": {"x":103,"y":1,"w":32,"h":32},
            "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
            "sourceSize": {"w":32,"h":32},
            "anchor": {"x":0.5,"y":0.5}
        },
        "enemy2.png":
        {
            "frame": {"x":103,"y":35,"w":32,"h":32},
            "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
            "sourceSize": {"w":32,"h":32},
            "anchor": {"x":0.5,"y":0.5}
        },
        "button.png":
        {
            "frame": {"x":1,"y":1,"w":100,"h":100},
            "spriteSourceSize": {"x":0,"y":0,"w":100,"h":100},
            "sourceSize": {"w":100,"h":100},
            "anchor": {"x":0,"y":0},
            "borders": {"left":35,"top":35,"right":35,"bottom":35}
        }
    },

    "animations": {
        "enemy": ["enemy1.png","enemy2.png"]
    },

    "meta": {
        "image": "sheet.png",
        "format": "RGBA8888",
        "size": {"w":136,"h":102},
        "scale": "1"
    }
}
```
Sprite sheets can be packed using tools like [https://codeandweb.com/texturepacker\|TexturePacker](https://codeandweb.com/texturepacker|TexturePacker),
[https://renderhjs.net/shoebox/\|Shoebox](https://renderhjs.net/shoebox/|Shoebox) or [https://github.com/krzysztof-o/spritesheet.js\|Spritesheet.js](https://github.com/krzysztof-o/spritesheet.js|Spritesheet.js).
Default anchor points (see [Texture#defaultAnchor](rendering.Texture.html#defaultanchor)), default 9-slice borders
(see [Texture#defaultBorders](rendering.RenderTexture.html#defaultborders)) and grouping of animation sprites are currently only
supported by TexturePacker.

Alternative ways for loading spritesheet image if you need more control:

```js
import { Assets } from 'pixi.js';

const sheetTexture = await Assets.load('images/spritesheet.png');
Assets.add({
    alias: 'atlas',
    src: 'images/spritesheet.json',
    data: {texture: sheetTexture} // using of preloaded texture
});
const sheet = await Assets.load('atlas')
```

or:

```js
import { Assets } from 'pixi.js';

Assets.add({
    alias: 'atlas',
    src: 'images/spritesheet.json',
    data: {imageFilename: 'my-spritesheet.2x.avif'} // using of custom filename located in "images/my-spritesheet.2x.avif"
});
const sheet = await Assets.load('atlas')
```

## Type Parameters

### S

`S` *extends* [`SpritesheetData`](assets.SpritesheetData.md) = [`SpritesheetData`](assets.SpritesheetData.md)

## Constructors

### Constructor

> **new Spritesheet**\<`S`\>(`options`): `Spritesheet`\<`S`\>

#### Parameters

##### options

[`SpritesheetOptions`](assets.SpritesheetOptions.md)\<`S`\>

Options to use when constructing a new Spritesheet.

#### Returns

`Spritesheet`\<`S`\>

### Constructor

> **new Spritesheet**\<`S`\>(`texture`, `data`): `Spritesheet`\<`S`\>

#### Parameters

##### texture

[`BindableTexture`](rendering.BindableTexture.md)

Reference to the source BaseTexture object.

##### data

`S`

Spritesheet image data.

#### Returns

`Spritesheet`\<`S`\>

## Properties

### animations

> **animations**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<keyof [`NonNullable`](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype)\<`S`\[`"animations"`\]\>, [`Texture`](rendering.Texture.md)[]\>

A map containing the textures for each animation.
Can be used to create an [AnimatedSprite](scene.AnimatedSprite.md):

#### Example

```ts
import { AnimatedSprite } from 'pixi.js';

new AnimatedSprite(sheet.animations['anim_name']);
```

***

### cachePrefix

> `readonly` **cachePrefix**: `string`

Prefix string to add to global cache

***

### data

> **data**: `S`

Reference to the original JSON data.

***

### linkedSheets

> **linkedSheets**: `Spritesheet`\<`S`\>[] = `[]`

For multi-packed spritesheets, this contains a reference to all the other spritesheets it depends on.

***

### resolution

> **resolution**: `number`

The resolution of the spritesheet.

***

### textures

> **textures**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<keyof `S`\[`"frames"`\], [`Texture`](rendering.Texture.md)\>

A map containing all textures of the sprite sheet.
Can be used to create a [Sprite](scene.Sprite.md):

#### Example

```ts
import { Sprite } from 'pixi.js';

new Sprite(sheet.textures['image.png']);
```

***

### textureSource

> **textureSource**: [`TextureSource`](rendering.TextureSource.md)

Reference to the source texture.

***

### BATCH\_SIZE

> `readonly` `static` **BATCH\_SIZE**: `1000` = `1000`

**`Advanced`**

The maximum number of Textures to build per process.

## Methods

### destroy()

> **destroy**(`destroyBase?`): `void`

Destroy Spritesheet and don't use after this.

#### Parameters

##### destroyBase?

`boolean` = `false`

Whether to destroy the base texture as well

#### Returns

`void`

***

### parse()

> **parse**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>\>

Parse spritesheet from loaded data. This is done asynchronously
to prevent creating too many Texture within a single process.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>\>

***

### parseSync()

> **parseSync**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<keyof `S`\[`"frames"`\], [`Texture`](rendering.Texture.md)\>

Parse spritesheet from loaded data. This is done synchronously
and is only suitable for smaller spritesheets (less than ~1000 frames)
or may cause too many Texture within a single process. However, synchronous parsing may be
more convenient since the called does not need to be asynchronous and is safe for
small-to-medium sized spritesheets.

Other than being synchronous, `parseSync` is otherwise identical to `.parse()`.

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<keyof `S`\[`"frames"`\], [`Texture`](rendering.Texture.md)\>
