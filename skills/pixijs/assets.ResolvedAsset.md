# Interface: ResolvedAsset\<T\>

A fully resolved asset, with all the information needed to load it.
This represents an asset that has been processed by the resolver and is ready to be loaded.

## Example

```ts
// Basic resolved asset
const asset: ResolvedAsset = {
    alias: ['hero'],
    src: 'hero.png',
    format: 'png'
};

// Resolved asset with multiple aliases
const asset: ResolvedAsset = {
    alias: ['character', 'player'],
    src: 'character@2x.webp',
    format: 'webp',
};

// Resolved asset with specific parser
const asset: ResolvedAsset = {
    alias: ['config'],
    src: 'data.txt',
    format: 'txt',
    parser: 'text'
};
```

## Type Parameters

### T

`T` = `any`

## Properties

### alias?

> `optional` **alias**: `string`[]

Array of alternative names for this asset. Used for looking up the same asset by different keys.

***

### data?

> `optional` **data**: `T`

Optional data passed to the asset loader.
Can include texture settings, parser options, or other asset-specific data.

***

### format?

> `optional` **format**: `string`

File format of the asset, usually the file extension. Used to determine which loader parser to use.

***

### ~~loadParser?~~

> `optional` **loadParser**: [`LoadParserName`](assets.LoadParserName.md)

#### Deprecated

Use `parser` instead.

***

### parser?

> `optional` **parser**: [`AssetParser`](assets.AssetParser.md)

Override to specify which parser should load this asset. Useful when file extensions don't match the content type.

***

### progressSize?

> `optional` **progressSize**: `number`

The amount of progress an asset will contribute to the onProgress event when loading.
This can be any arbitrary value but typically represents the file size.

#### Default

```ts
1
```

***

### src?

> `optional` **src**: `string`

The URL or relative path to the asset. This is the final, resolved path that will be used for loading.
