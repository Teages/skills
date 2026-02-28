# Variable: loadBasis

> `const` **loadBasis**: `object`

**`Advanced`**

Loads Basis textures using a web worker.

## Type Declaration

### extension

> **extension**: `object`

#### extension.name

> **name**: `string` = `'loadBasis'`

#### extension.priority

> **priority**: [`LoaderParserPriority`](assets.LoaderParserPriority.md) = `LoaderParserPriority.High`

#### extension.type

> **type**: [`LoadParser`](extensions.ExtensionType.html#loadparser) = `ExtensionType.LoadParser`

### id

> **id**: `string` = `'basis'`

### name

> **name**: `string` = `'loadBasis'`

used for deprecation purposes

### load()

> **load**\<`T`\>(`url`, `_asset`, `loader`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> \| [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>[]\>

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

##### \_asset

[`ResolvedAsset`](assets.ResolvedAsset.md)

##### loader

[`Loader`](assets.Loader.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> \| [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>[]\>

### test()

> **test**(`url`): `boolean`

#### Parameters

##### url

`string`

#### Returns

`boolean`

### unload()

> **unload**(`texture`): `void`

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> | [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>[]

#### Returns

`void`
