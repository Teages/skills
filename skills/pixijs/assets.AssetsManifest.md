# Interface: AssetsManifest

The manifest format for defining all assets in your application. Manifests provide a
structured way to organize and manage your assets through bundles.

## Example

```ts
const manifest: AssetsManifest = {
    bundles: [
        {
            name: 'loading',
            assets: [
                {
                    alias: 'logo',
                    src: 'logo.{webp,png}',
                    data: { scaleMode: 'nearest' }
                },
                {
                    alias: 'progress-bar',
                    src: 'progress.png'
                }
            ]
        },
        {
            name: 'game',
            assets: {
                background: ['bg.webp', 'bg.png'],
                character: 'hero.json',
                music: 'theme.mp3'
            }
        }
    ]
};

// Initialize with manifest
await Assets.init({ manifest });

// Load bundles as needed
await Assets.loadBundle('loading');
await Assets.loadBundle('game');
```

## See

 - [Assets.init](assets.Assets.html#init) For initializing with a manifest
 - [AssetsBundle](assets.AssetsBundle.md) For bundle structure details

## Properties

### bundles

> **bundles**: [`AssetsBundle`](assets.AssetsBundle.md)[]

Array of asset bundles that make up the manifest
