# Interface: AssetInitOptions

Options for initializing the Assets class. These options configure how assets are loaded,
resolved, and managed in your PixiJS application.

## Properties

### basePath?

> `optional` **basePath**: `string`

Base path prepended to all asset URLs. Useful for CDN hosting.

#### Example

```ts
await Assets.init({
    basePath: 'https://my-cdn.com/assets/'
});

// Now you can load assets like this:
// Will load from: https://my-cdn.com/assets/images/sprite.png
const texture = await Assets.load('images/sprite.png');
```

***

### bundleIdentifier?

> `optional` **bundleIdentifier**: [`BundleIdentifierOptions`](assets.BundleIdentifierOptions.md)

**`Advanced`**

Override how bundle IDs are generated and resolved.

This allows you to customize how assets are grouped and accessed via bundles and allow for
multiple bundles to share the same asset keys.

#### Example

```ts
const manifest = {
    bundles: [
        {
            name: 'bunny1',
            assets: [
                {
                    alias: ['character', 'character2'],
                    src: 'textures/bunny.png',
                },
            ],
        },
        {
            name: 'bunny2',
            assets: [
                {
                    alias: ['character', 'character2'],
                    src: 'textures/bunny-2.png',
                },
            ],
        },
    ]
};

const bundleIdentifier: BundleIdentifierOptions = {
    connector: ':',
};

await Assets.init({ manifest, basePath, bundleIdentifier });

const resources = await Assets.loadBundle('bunny1');
const resources2 = await Assets.loadBundle('bunny2');

console.log(resources.character === resources2.character); // false
```

***

### defaultSearchParams?

> `optional` **defaultSearchParams**: `string` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

**`Advanced`**

URL parameters to append to all asset URLs.
Useful for cache-busting or version control.

#### Example

```ts
// As a string
await Assets.init({
    defaultSearchParams: 'version=1.0.0'
});

// As an object
await Assets.init({
    defaultSearchParams: {
        version: '1.0.0',
        t: Date.now()
    }
});
```

***

### loadOptions?

> `optional` **loadOptions**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`LoadOptions`](assets.LoadOptions.md)\>

Options for defining the loading behavior of assets.

#### Example

```ts
await Assets.init({
   loadOptions: {
      onProgress: (progress) => console.log(`Loading: ${Math.round(progress * 100)}%`),
      onError: (error, asset) => console.error(`Error loading ${asset.src}: ${error.message}`),
      strategy: 'retry',
      retryCount: 5,
      retryDelay: 500,
  }
});
```

#### Remarks

- `onProgress` callback receives values from 0.0 to 1.0
- `onError` callback is invoked for individual asset load failures
- `strategy` can be 'throw' (default), 'retry', or 'skip'
- `retryCount` sets how many times to retry failed assets (default 3)
- `retryDelay` sets the delay between retries in milliseconds (default 250ms)

#### See

[LoadOptions](assets.LoadOptions.md) For all available load options

***

### manifest?

> `optional` **manifest**: `string` \| [`AssetsManifest`](assets.AssetsManifest.md)

A manifest defining all your application's assets.
Can be a URL to a JSON file or a manifest object.

#### Example

```ts
// Using a manifest object
await Assets.init({
    manifest: {
        bundles: [{
            name: 'game-screen',
            assets: [
                {
                    alias: 'hero',
                    src: 'hero.{png,webp}'
                },
                {
                    alias: 'map',
                    src: 'map.json'
                }
            ]
        }]
    }
});

// Using a URL to manifest
await Assets.init({
    manifest: 'assets/manifest.json'
});

// loading a bundle from the manifest
await Assets.loadBundle('game-screen');

// load individual assets from the manifest
const heroTexture = await Assets.load('hero');
```

***

### preferences?

> `optional` **preferences**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`AssetsPreferences`](assets.AssetsPreferences.md)\>

Optional preferences for asset loading behavior.

#### Example

```ts
await Assets.init({
    preferences: {
        crossOrigin: 'anonymous',
        parseAsGraphicsContext: false
    }
});
```

***

### skipDetections?

> `optional` **skipDetections**: `boolean`

**`Advanced`**

Skip browser format detection for faster initialization.
Only use if you know exactly what formats your target browsers support.

#### Example

```ts
await Assets.init({
    skipDetections: true,
    texturePreference: {
        format: ['webp', 'png'] // Must explicitly set formats
    }
});
```

***

### texturePreference?

> `optional` **texturePreference**: `object`

Configure texture loading preferences.
Useful for optimizing asset delivery based on device capabilities.

#### format?

> `optional` **format**: [`ArrayOr`](utils.ArrayOr.md)\<`string`\>

Preferred texture formats in order of preference. Default: ['avif', 'webp', 'png', 'jpg', 'jpeg']

#### resolution?

> `optional` **resolution**: `number` \| `number`[]

Preferred texture resolution(s). Can be a single number or array of resolutions in order of preference.

#### Example

```ts
await Assets.init({
    texturePreference: {
        // Prefer high-res textures on retina displays
        resolution: window.devicePixelRatio,

        // Prefer modern formats, fallback to traditional
        format: ['avif', 'webp', 'png']
    }
});
```
