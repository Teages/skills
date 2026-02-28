# Interface: LoaderParserAdvanced\<ASSET, PARSED_ASSET, UNLOAD_ASSET, META_DATA, CONFIG\>

**`Advanced`**

A more verbose version of the LoaderParser, allowing you to set the loaded, parsed, and unloaded asset separately

## Extended by

- [`LoaderParser`](assets.LoaderParser.md)

## Type Parameters

### ASSET

`ASSET` = `any`

### PARSED_ASSET

`PARSED_ASSET` = `ASSET`

### UNLOAD_ASSET

`UNLOAD_ASSET` = `ASSET`

### META_DATA

`META_DATA` = `any`

### CONFIG

`CONFIG` = [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

## Properties

### config?

> `optional` **config**: `CONFIG`

A config to adjust the parser

***

### extension?

> `optional` **extension**: [`ExtensionMetadata`](extensions.ExtensionMetadata.md)

Should be ExtensionType.LoaderParser

***

### id

> **id**: `string`

The name of the parser (this can be used when specifying parser in a ResolvedAsset)

***

### load()?

> `optional` **load**: \<`T`\>(`url`, `resolvedAsset?`, `loader?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ASSET` \| `T`\>

This is the promise that loads the URL provided
resolves with a loaded asset if returned by the parser.

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

The URL to load

##### resolvedAsset?

[`ResolvedAsset`](assets.ResolvedAsset.md)\<`META_DATA`\>

Any custom additional information relevant to the asset being loaded

##### loader?

[`Loader`](assets.Loader.md)

The loader instance

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ASSET` \| `T`\>

***

### ~~name?~~

> `optional` **name**: `string`

#### Deprecated

Use `id` instead.

***

### parse()?

> `optional` **parse**: \<`T`\>(`asset`, `resolvedAsset?`, `loader?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`PARSED_ASSET` \| `T`\>

Gets called on the asset it testParse passes. Useful to convert a raw asset into something more useful

#### Type Parameters

##### T

`T`

#### Parameters

##### asset

`ASSET`

The loaded asset data

##### resolvedAsset?

[`ResolvedAsset`](assets.ResolvedAsset.md)\<`META_DATA`\>

Any custom additional information relevant to the asset being loaded

##### loader?

[`Loader`](assets.Loader.md)

The loader instance

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`PARSED_ASSET` \| `T`\>

***

### test()?

> `optional` **test**: (`url`, `resolvedAsset?`, `loader?`) => `boolean`

Each URL to load will be tested here,
if the test is passed the assets are loaded using the load function below.
Good place to test for things like file extensions!

#### Parameters

##### url

`string`

The URL to test

##### resolvedAsset?

[`ResolvedAsset`](assets.ResolvedAsset.md)\<`META_DATA`\>

Any custom additional information relevant to the asset being loaded

##### loader?

[`Loader`](assets.Loader.md)

The loader instance

#### Returns

`boolean`

***

### testParse()?

> `optional` **testParse**: (`asset`, `resolvedAsset?`, `loader?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

This function is used to test if the parse function should be run on the asset
If this returns true then parse is called with the asset

#### Parameters

##### asset

`ASSET`

The loaded asset data

##### resolvedAsset?

[`ResolvedAsset`](assets.ResolvedAsset.md)\<`META_DATA`\>

Any custom additional information relevant to the asset being loaded

##### loader?

[`Loader`](assets.Loader.md)

The loader instance

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

***

### unload()?

> `optional` **unload**: (`asset`, `resolvedAsset?`, `loader?`) => `void` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

If an asset is parsed using this parser, the unload function will be called when the user requests an asset
to be unloaded. This is useful for things like sounds or textures that can be unloaded from memory

#### Parameters

##### asset

`UNLOAD_ASSET`

The asset to unload/destroy

##### resolvedAsset?

[`ResolvedAsset`](assets.ResolvedAsset.md)\<`META_DATA`\>

Any custom additional information relevant to the asset being loaded

##### loader?

[`Loader`](assets.Loader.md)

The loader instance

#### Returns

`void` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
