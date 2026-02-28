# Type Alias: AssetSrc

> **AssetSrc** = [`ArrayOr`](utils.ArrayOr.md)\<`string`\> \| [`ArrayOr`](utils.ArrayOr.md)\<[`ResolvedSrc`](assets.ResolvedSrc.md)\> & `object`

A valid asset source specification. This can be a URL string, a [ResolvedSrc](assets.ResolvedSrc.md),
or an array of either. The source defines where and how to load an asset.

## Example

```ts
// Single URL string
const src: AssetSrc = 'images/sprite.png';

// Multiple format options
const src: AssetSrc = ['sprite.webp', 'sprite.png'];

// With format pattern
const src: AssetSrc = 'sprite.{webp,png}';

// Resolved source with options
const src: AssetSrc = {
    src: 'sprite.png',
    format: 'png',
    parser: 'texture',
    data: {
        scaleMode: 'nearest',
    }
};

// Array of resolved sources
const src: AssetSrc = [
    {
        src: 'sprite@2x.webp',
        format: 'webp',
    },
    {
        src: 'sprite.png',
        format: 'png',
    }
];
```

## Remarks

When specifying multiple formats:
- The format that is selected will depend on [AssetInitOptions.texturePreference](assets.AssetInitOptions.html#texturepreference)
- Resolution is parsed from file names
- Custom data can be passed to loaders

## See

 - [ResolvedSrc](assets.ResolvedSrc.md) For resolved source format
 - [Assets.add](assets.Assets.html#add) For adding assets with sources
