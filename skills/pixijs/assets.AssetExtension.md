# Interface: AssetExtension\<ASSET, META_DATA\>

**`Advanced`**

This developer convenience object allows developers to group
together the various asset parsers into a single object.

## Example

```ts
import { AssetExtension, extensions } from 'pixi.js';

// create the CacheParser
const cache = {
   test(asset: item): boolean {
      // Gets called by the cache when a dev caches an asset
   },
   getCacheableAssets(keys: string[], asset: item): Record<string, any> {
      // If the test passes, this function is called to get the cacheable assets
      // an example may be that a spritesheet object will return all the sub textures it has so they can
      // be cached.
   },
};

// create the ResolveURLParser
const resolver = {
   test(value: string): boolean {
      // the test to perform on the url to determine if it should be parsed
   },
   parse(value: string): ResolvedAsset {
      // the function that will convert the url into an object
   },
};

// create the LoaderParser
const loader = {
   name: 'itemLoader',
   extension: {
      type: ExtensionType.LoadParser,
   },
   async testParse(asset: any, options: ResolvedAsset) {
      // This function is used to test if the parse function should be run on the asset
   },
   async parse(asset: any, options: ResolvedAsset, loader: Loader) {
      // Gets called on the asset it testParse passes. Useful to convert a raw asset into something more useful
   },
   async load(url: string, options: ResolvedAsset, loader: Loader) {
      // This is the promise that loads the URL provided
   },
   unload(item: any) {
      // If an asset is parsed using this parser, the unload function will be called when the user requests an asset
      // to be unloaded. This is useful for things like sounds or textures that can be unloaded from memory
   },
};

// put it all together and create the AssetExtension
extensions.add({
    extension: ExtensionType.Asset,
    cache,
    resolver,
    loader,
}
```

## Extends

- [`AssetExtensionAdvanced`](assets.AssetExtensionAdvanced.md)\<`ASSET`, `ASSET`, `ASSET`, `ASSET`, `META_DATA`\>

## Type Parameters

### ASSET

`ASSET` = `any`

### META_DATA

`META_DATA` = `any`

## Properties

### cache?

> `optional` **cache**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`CacheParser`](assets.CacheParser.md)\<`CACHE_ASSET`\>\>

the asset cache parser

#### Inherited from

[`AssetExtensionAdvanced`](assets.AssetExtensionAdvanced.md).[`cache`](assets.AssetExtensionAdvanced.html#cache)

***

### detection?

> `optional` **detection**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`FormatDetectionParser`](assets.FormatDetectionParser.md)\>

the asset format detection parser

#### Inherited from

[`AssetExtensionAdvanced`](assets.AssetExtensionAdvanced.md).[`detection`](assets.AssetExtensionAdvanced.html#detection)

***

### extension

> **extension**: [`Asset`](extensions.ExtensionType.html#asset)

The type of extension

#### Inherited from

[`AssetExtensionAdvanced`](assets.AssetExtensionAdvanced.md).[`extension`](assets.AssetExtensionAdvanced.html#extension)

***

### loader?

> `optional` **loader**: [`LoaderParserAdvanced`](assets.LoaderParserAdvanced.md)\<`ASSET`, `ASSET`, `ASSET`, `META_DATA`\>

the asset loader

#### Inherited from

[`AssetExtensionAdvanced`](assets.AssetExtensionAdvanced.md).[`loader`](assets.AssetExtensionAdvanced.html#loader)

***

### resolver?

> `optional` **resolver**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ResolveURLParser`](assets.ResolveURLParser.md)\>

the asset resolve parser

#### Inherited from

[`AssetExtensionAdvanced`](assets.AssetExtensionAdvanced.md).[`resolver`](assets.AssetExtensionAdvanced.html#resolver)
