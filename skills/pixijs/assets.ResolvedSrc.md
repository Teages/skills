# Interface: ResolvedSrc

**`Advanced`**

A fully resolved src specification after pattern resolution and format detection.
Unlike raw asset sources, this type represents the final, concrete source path and format.

## Example

```ts
// Basic resolved source
const src: ResolvedSrc = {
    src: 'images/sprite.png',
    format: 'png'
};

// With resolution and format preferences
const src: ResolvedSrc = {
    src: 'images/sprite@2x.webp',
    format: 'webp',
    data: { resolution: 2 }
};

// With specific loader
const src: ResolvedSrc = {
    src: 'data/config.txt',
    format: 'txt',
    parser: 'text',
};
```

## Remarks

- Pattern strings like `{png,webp}` are resolved to specific formats
- Resolution and format are determined based on browser support
- Used internally by the Assets system after resolution
- Data property can contain format-specific options

## See

 - [AssetSrc](assets.AssetSrc.md) For unresolved source format
 - [ResolvedAsset](assets.ResolvedAsset.md) For complete resolved asset specification

## Properties

### data?

> `optional` **data**: `any`

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

### src?

> `optional` **src**: `string`

The URL or relative path to the asset. This is the final, resolved path that will be used for loading.
