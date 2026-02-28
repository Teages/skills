# Variable: spritesheetAsset

> `const` **spritesheetAsset**: `object`

**`Advanced`**

Asset extension for loading spritesheets

## Type Declaration

### cache

> **cache**: `object`

Handle the caching of the related Spritesheet Textures

#### cache.getCacheableAssets()

> **getCacheableAssets**: (`keys`, `asset`) => [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

##### Parameters

###### keys

`string`[]

###### asset

[`Spritesheet`](assets.Spritesheet.md)

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

#### cache.test()

> **test**: (`asset`) => `boolean`

##### Parameters

###### asset

[`Spritesheet`](assets.Spritesheet.md)

##### Returns

`boolean`

### extension

> **extension**: [`Asset`](extensions.ExtensionType.html#asset) = `ExtensionType.Asset`

### loader

> **loader**: `object`

Loader plugin that parses sprite sheets!
once the JSON has been loaded this checks to see if the JSON is spritesheet data.
If it is, we load the spritesheets image and parse the data into Spritesheet
All textures in the sprite sheet are then added to the cache

#### loader.extension

> **extension**: `object`

#### loader.extension.name

> **name**: `string` = `'spritesheetLoader'`

#### loader.extension.priority

> **priority**: [`LoaderParserPriority`](assets.LoaderParserPriority.md) = `LoaderParserPriority.Normal`

#### loader.extension.type

> **type**: [`LoadParser`](extensions.ExtensionType.html#loadparser) = `ExtensionType.LoadParser`

#### loader.id

> **id**: `string` = `'spritesheet'`

#### loader.name

> **name**: `string` = `'spritesheetLoader'`

used for deprecation purposes

#### loader.parse()

> **parse**\<`T`\>(`asset`, `options`, `loader?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Spritesheet`](assets.Spritesheet.md)\<[`SpritesheetData`](assets.SpritesheetData.md)\>\>

##### Type Parameters

###### T

`T`

##### Parameters

###### asset

[`SpriteSheetJson`](assets.SpriteSheetJson.md)

###### options

[`ResolvedAsset`](assets.ResolvedAsset.md)\<\{ `cachePrefix?`: `string`; `ignoreMultiPack?`: `boolean`; `imageFilename?`: `string`; `texture?`: [`Texture`](rendering.Texture.md); `textureOptions?`: [`TextureSourceOptions`](rendering.TextureSourceOptions.md); \}\>

###### loader?

[`Loader`](assets.Loader.md)

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Spritesheet`](assets.Spritesheet.md)\<[`SpritesheetData`](assets.SpritesheetData.md)\>\>

#### loader.testParse()

> **testParse**(`asset`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

##### Parameters

###### asset

[`SpriteSheetJson`](assets.SpriteSheetJson.md)

###### options

[`ResolvedAsset`](assets.ResolvedAsset.md)

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

#### loader.unload()

> **unload**(`spritesheet`, `_resolvedAsset`, `loader`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### Parameters

###### spritesheet

[`Spritesheet`](assets.Spritesheet.md)

###### \_resolvedAsset

[`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>

###### loader

[`Loader`](assets.Loader.md)

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### resolver

> **resolver**: `object`

Resolve the resolution of the asset.

#### resolver.extension

> **extension**: `object`

#### resolver.extension.name

> **name**: `string` = `'resolveSpritesheet'`

#### resolver.extension.type

> **type**: [`ResolveParser`](extensions.ExtensionType.html#resolveparser) = `ExtensionType.ResolveParser`

#### resolver.parse()

> **parse**: (`value`) => `object`

##### Parameters

###### value

`string`

##### Returns

`object`

###### format

> **format**: `string`

###### resolution

> **resolution**: `number`

###### src

> **src**: `string` = `value`

#### resolver.test()

> **test**: (`value`) => `boolean`

##### Parameters

###### value

`string`

##### Returns

`boolean`

## Example

```ts
import { Assets } from 'pixi.js';

Assets.load({
    alias: 'spritesheet',
    src: 'path/to/spritesheet.json',
    data: {
        ignoreMultiPack: true,
        textureOptions: {
            scaleMode: "nearest"
        }
    }
})
```
