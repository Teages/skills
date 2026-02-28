# Interface: CacheParser\<T\>

**`Advanced`**

For every asset that is cached, it will call the parsers test function
the flow is as follows:

1. `cacheParser.test()`: Test the asset.
2. `cacheParser.getCacheableAssets()`: If the test passes call the getCacheableAssets function with the asset

Useful if you want to add more than just a raw asset to the cache
(for example a spritesheet will want to make all its sub textures easily accessible in the cache)

## Type Parameters

### T

`T` = `any`

## Properties

### config?

> `optional` **config**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

A config to adjust the parser

***

### extension?

> `optional` **extension**: [`ExtensionMetadata`](extensions.ExtensionMetadata.md)

The extension type of this cache parser

***

### getCacheableAssets()

> **getCacheableAssets**: (`keys`, `asset`) => [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

If the test passes, this function is called to get the cacheable assets
an example may be that a spritesheet object will return all the sub textures it has so they can
be cached.

#### Parameters

##### keys

`string`[]

The keys to cache the assets under

##### asset

`T`

The asset to get the cacheable assets from

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

A key-value pair of cacheable assets

***

### test()

> **test**: (`asset`) => `boolean`

Gets called by the cache when a dev caches an asset

#### Parameters

##### asset

`T`

the asset to test

#### Returns

`boolean`
