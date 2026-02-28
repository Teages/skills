# Interface: UnresolvedAsset\<T\>

An asset that has not been resolved yet. This is the initial format used when adding assets
to the Assets system before they are processed into a [ResolvedAsset](assets.ResolvedAsset.md).

## Example

```ts
// Basic unresolved asset
const asset: UnresolvedAsset = {
    alias: 'hero',
    src: 'hero.png'
};

// Multiple aliases and formats
const asset: UnresolvedAsset = {
    alias: ['hero', 'player'],
    src: 'hero.{webp,png}',
    data: {
        scaleMode: 'nearest',
    }
};

// Asset with multiple sources and formats
const asset: UnresolvedAsset = {
    alias: 'background',
    src: [
        'bg@2x.webp',
        'bg@1x.webp',
        'bg@2x.png',
        'bg@1x.png',
    ]
};

// With specific loader
const asset: UnresolvedAsset = {
    alias: 'config',
    src: 'data.txt',
    parser: 'text'
};
```

## Remarks

- Used as input format when adding assets to the system
- Can specify multiple aliases for the same asset
- Supports format patterns for browser compatibility
- Can include loader-specific data and options

## See

 - [ResolvedAsset](assets.ResolvedAsset.md) For the resolved asset format
 - [Assets.add](assets.Assets.html#add) For adding unresolved assets

## Type Parameters

### T

`T` = `any`

## Indexable

\[`key`: `string`\]: `any`

## Properties

### alias?

> `optional` **alias**: [`ArrayOr`](utils.ArrayOr.md)\<`string`\>

Aliases associated with asset

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

### src?

> `optional` **src**: [`AssetSrc`](assets.AssetSrc.md)

The URL or relative path to the asset
