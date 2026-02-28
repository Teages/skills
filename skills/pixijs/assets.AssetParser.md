# Type Alias: AssetParser

> **AssetParser** = `"json"` \| `"svg"` \| `"text"` \| `"video"` \| `"web-font"` \| `"bitmap-font"` \| `"spritesheet"` \| `"texture"` \| `"basis"` \| `"dds"` \| `"ktx2"` \| `"ktx"` \| `string` & `object`

**`Advanced`**

Names of the parsers that are built into PixiJS.

## Example

```ts
Assets.load({
    src: assetToLoad,
    parser: 'json' // Use the built-in JSON parser
});
```
