# Interface: AssetsBundle

Structure of a bundle found in a [AssetsManifest](assets.AssetsManifest.md) file. Bundles allow you to
group related assets together for easier management and loading.

## Example

```ts
// Basic bundle structure
const bundle: AssetsBundle = {
    name: 'level-1',
    assets: [
        {
            alias: 'background',
            src: 'level1/bg.{webp,png}'
        },
        {
            alias: 'sprites',
            src: 'level1/sprites.json'
        }
    ]
};

// Using object format for assets
const bundle: AssetsBundle = {
    name: 'ui',
    assets: {
        button: 'ui/button.png',
        panel: 'ui/panel.png',
        icons: ['ui/icons.webp', 'ui/icons.png']
    }
};
```

## See

 - [Assets.addBundle](assets.Assets.html#addbundle) For adding bundles programmatically
 - [Assets.loadBundle](assets.Assets.html#loadbundle) For loading bundles

## Properties

### assets

> **assets**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ArrayOr`](utils.ArrayOr.md)\<`string`\> \| [`UnresolvedAsset`](assets.UnresolvedAsset.md)\<`any`\>\> \| [`UnresolvedAsset`](assets.UnresolvedAsset.md)\<`any`\>[]

Assets contained in the bundle. Can be an array of assets or a record mapping aliases to sources.

***

### name

> **name**: `string`

Unique identifier for the bundle
