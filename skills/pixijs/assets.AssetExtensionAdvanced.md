# Interface: AssetExtensionAdvanced\<ASSET, PARSED_ASSET, UNLOAD_ASSET, CACHE_ASSET, META_DATA\>

**`Advanced`**

A more verbose version of the AssetExtension,
allowing you to set the cached, loaded, parsed, and unloaded asset separately

## Extended by

- [`AssetExtension`](assets.AssetExtension.md)

## Type Parameters

### ASSET

`ASSET` = `any`

### PARSED_ASSET

`PARSED_ASSET` = `ASSET`

### UNLOAD_ASSET

`UNLOAD_ASSET` = `ASSET`

### CACHE_ASSET

`CACHE_ASSET` = `ASSET`

### META_DATA

`META_DATA` = `any`

## Properties

### cache?

> `optional` **cache**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`CacheParser`](assets.CacheParser.md)\<`CACHE_ASSET`\>\>

the asset cache parser

***

### detection?

> `optional` **detection**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`FormatDetectionParser`](assets.FormatDetectionParser.md)\>

the asset format detection parser

***

### extension

> **extension**: [`Asset`](extensions.ExtensionType.html#asset)

The type of extension

***

### loader?

> `optional` **loader**: [`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md)\<`ASSET`, `PARSED_ASSET`, `UNLOAD_ASSET`, `META_DATA`\>

the asset loader

***

### resolver?

> `optional` **resolver**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ResolveURLParser`](assets.ResolveURLParser.md)\>

the asset resolve parser
