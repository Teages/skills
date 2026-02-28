# Variable: loadBitmapFont

> `const` **loadBitmapFont**: `object`

**`Advanced`**

Loader plugin for loading bitmap fonts.
It supports both XML and text formats, and can handle distance field fonts.

## Type Declaration

### extension

> **extension**: `object`

#### extension.priority

> **priority**: [`LoaderParserPriority`](assets.LoaderParserPriority.md) = `LoaderParserPriority.Normal`

#### extension.type

> **type**: [`LoadParser`](extensions.ExtensionType.html#loadparser) = `ExtensionType.LoadParser`

### id

> **id**: `string` = `'bitmap-font'`

### name

> **name**: `string` = `'loadBitmapFont'`

used for deprecation purposes

### load()

> **load**\<`T`\>(`url`, `_options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

##### \_options

[`ResolvedAsset`](assets.ResolvedAsset.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

### parse()

> **parse**\<`T`\>(`asset`, `data`, `loader`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BitmapFont`](text.BitmapFont.md)\>

#### Type Parameters

##### T

`T`

#### Parameters

##### asset

`string`

##### data

[`ResolvedAsset`](assets.ResolvedAsset.md)

##### loader

[`Loader`](assets.Loader.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BitmapFont`](text.BitmapFont.md)\>

### test()

> **test**(`url`): `boolean`

#### Parameters

##### url

`string`

#### Returns

`boolean`

### testParse()

> **testParse**(`data`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

#### Parameters

##### data

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

### unload()

> **unload**(`bitmapFont`, `_resolvedAsset`, `loader`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Parameters

##### bitmapFont

[`BitmapFont`](text.BitmapFont.md)

##### \_resolvedAsset

[`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>

##### loader

[`Loader`](assets.Loader.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
