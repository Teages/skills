# Interface: LoaderParser\<ASSET, META_DATA, CONFIG\>

**`Advanced`**

The interface to define a loader parser *(all functions are optional)*.

When you create a `parser` object, the flow for every asset loaded is:

1. `parser.test()` - Each URL to load will be tested here, if the test is passed the assets are
loaded using the load function below. Good place to test for things like file extensions!
2. `parser.load()` - This is the promise that loads the URL provided resolves with a loaded asset
if returned by the parser.
3. `parser.testParse()` - This function is used to test if the parse function should be run on the
 asset If this returns true then parse is called with the asset
4. `parse.parse()` - Gets called on the asset it testParse passes. Useful to convert a raw asset
 into something more useful

<br/>
Some loaders may only be used for parsing, some only for loading, and some for both!

## Extends

- [`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md)\<`ASSET`, `ASSET`, `ASSET`, `META_DATA`, `CONFIG`\>

## Type Parameters

### ASSET

`ASSET` = `any`

### META_DATA

`META_DATA` = `any`

### CONFIG

`CONFIG` = [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

## Properties

### config?

> `optional` **config**: `CONFIG`

A config to adjust the parser

#### Inherited from

[`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md).[`config`](assets.LoaderParserAdvanced.html#config-1)

***

### extension?

> `optional` **extension**: [`ExtensionMetadata`](extensions.ExtensionMetadata.md)

Should be ExtensionType.LoaderParser

#### Inherited from

[`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md).[`extension`](assets.LoaderParserAdvanced.html#extension)

***

### id

> **id**: `string`

The name of the parser (this can be used when specifying parser in a ResolvedAsset)

#### Inherited from

[`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md).[`id`](assets.LoaderParserAdvanced.html#id)

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

#### Inherited from

[`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md).[`load`](assets.LoaderParserAdvanced.html#load)

***

### ~~name?~~

> `optional` **name**: `string`

#### Deprecated

Use `id` instead.

#### Inherited from

[`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md).[`name`](assets.LoaderParserAdvanced.html#name)

***

### parse()?

> `optional` **parse**: \<`T`\>(`asset`, `resolvedAsset?`, `loader?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ASSET` \| `T`\>

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ASSET` \| `T`\>

#### Inherited from

[`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md).[`parse`](assets.LoaderParserAdvanced.html#parse)

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

#### Inherited from

[`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md).[`test`](assets.LoaderParserAdvanced.html#test)

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

#### Inherited from

[`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md).[`testParse`](assets.LoaderParserAdvanced.html#testparse)

***

### unload()?

> `optional` **unload**: (`asset`, `resolvedAsset?`, `loader?`) => `void` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

If an asset is parsed using this parser, the unload function will be called when the user requests an asset
to be unloaded. This is useful for things like sounds or textures that can be unloaded from memory

#### Parameters

##### asset

`ASSET`

The asset to unload/destroy

##### resolvedAsset?

[`ResolvedAsset`](assets.ResolvedAsset.md)\<`META_DATA`\>

Any custom additional information relevant to the asset being loaded

##### loader?

[`Loader`](assets.Loader.md)

The loader instance

#### Returns

`void` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md).[`unload`](assets.LoaderParserAdvanced.html#unload)
