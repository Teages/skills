# Class: Assets

The global Assets class is a singleton that manages loading, caching, and unloading of all resources
in your PixiJS application.

Key responsibilities:
- **URL Resolution**: Maps URLs/keys to browser-compatible resources
- **Resource Loading**: Handles loading and transformation of assets
- **Asset Caching**: Manages a global cache to prevent duplicate loads
- **Memory Management**: Provides unloading capabilities to free memory

Advanced Features:
- **Asset Bundles**: Group and manage related assets together
- **Background Loading**: Load assets before they're needed over time
- **Format Detection**: Automatically select optimal asset formats

Supported Asset Types:
| Type                | Extensions                                                       | Loaders                                                               |
| ------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| Textures            | `.png`, `.jpg`, `.gif`, `.webp`, `.avif`, `.svg`                 | [loadTextures](assets.loadTextures.md), [loadSvg](assets.loadSvg.md)                                 |
| Video Textures      | `.mp4`, `.m4v`, `.webm`, `.ogg`, `.ogv`, `.h264`, `.avi`, `.mov` | [loadVideoTextures](assets.loadVideoTextures.md)                                             |
| Sprite Sheets       | `.json`                                                          | [spritesheetAsset](assets.spritesheetAsset.md)                                              |
| Bitmap Fonts        | `.fnt`, `.xml`, `.txt`                                           | [loadBitmapFont](assets.loadBitmapFont.md)                                                |
| Web Fonts           | `.ttf`, `.otf`, `.woff`, `.woff2`                                | [loadWebFont](assets.loadWebFont.md)                                                   |
| JSON                | `.json`                                                          | [loadJson](assets.loadJson.md)                                                      |
| Text                | `.txt`                                                           | [loadTxt](assets.loadTxt.md)                                                       |
| Compressed Textures | `.basis`, `.dds`, `.ktx`, `.ktx2`                                | [loadBasis](assets.loadBasis.md), [loadDDS](assets.loadDDS.md), [loadKTX](assets.loadKTX.md), [loadKTX2](assets.loadKTX2.md) |
> [!NOTE] Some loaders allow for custom configuration, please refer to the specific loader documentation for details.

## Example

```typescript
import { Assets } from 'pixi.js';

// Initialize with options (optional). You can call Assets.load directly without init.
await Assets.init({
    // Base path for all asset URLs
    basePath: 'https://my-cdn.com/assets/',
    // Manifest object that defines all assets
    manifest: {
       bundles: [{ name: 'gameAssets', assets: [] }, ...],
    }, *
    // Preferred texture settings
    texturePreference: {
        resolution: window.devicePixelRatio,
        format: ['avif', 'webp', 'png']
    }
});

// Basic loading
const texture = await Assets.load('images/sprite.png');

// Load multiple assets
const assets = await Assets.load([
    'images/bg.png',
    'images/character.png',
    'fonts/game.fnt'
]);

// Using aliases + multiple formats
await Assets.load({ alias: 'hero', src: 'images/hero.{webp,png}' });
const sprite = Sprite.from('hero'); // Uses the best available format

// background loading
Assets.backgroundLoad(['images/level1.json', 'images/level2.json']); // Loads in the background one at a time

// Load a bundle of assets from the manifest
const levelAssets = await Assets.loadBundle('gameAssets');
// Background loading of a bundle. This will load assets in the background one at a time.
// Can be interrupted at any time by calling Assets.loadBundle('gameAssets') again.
Assets.backgroundLoadBundle('resultsAssets');

// Memory management
await Assets.unload('hero');
await Assets.unloadBundle('levelOne');
```

## Remarks

- Assets are cached automatically and only loaded once
- Background loading helps eliminate loading screens
- Format detection ensures optimal asset delivery
- Bundle management simplifies resource organization

> [!IMPORTANT]
> When unloading assets, ensure they aren't being used elsewhere
> in your application to prevent missing texture references.

## See

 - [AssetInitOptions](assets.AssetInitOptions.md) For initialization options
 - [AssetsPreferences](assets.AssetsPreferences.md) For advanced preferences
 - [BackgroundLoader](assets.BackgroundLoader.md) For background loading capabilities
 - [AssetsManifest](assets.AssetsManifest.md) For manifest-based asset management
 - [Loader](assets.Loader.md) For the underlying loading system
 - [Cache](assets.Cache.md) For the caching system
 - [Resolver](assets.Resolver.md) For URL resolution details

## Properties

### cache

> `static` **cache**: `CacheClass`

The global cache for all loaded assets. Manages storage and retrieval of
processed assets.

#### Example

```ts
// Check if an asset is cached
if (Assets.cache.has('myTexture')) {
    const texture = Assets.cache.get('myTexture');
}
```

#### See

[Cache](assets.Cache.md) For detailed cache documentation

***

### loader

> `static` **loader**: [`Loader`](assets.Loader.md)

**`Advanced`**

The loader responsible for loading all assets. Handles different file types
and transformations.

***

### resolver

> `static` **resolver**: [`Resolver`](assets.Resolver.md)

**`Advanced`**

The URL resolver for assets. Maps various asset keys and URLs to their final loadable form.

## Accessors

### detections

#### Get Signature

> **get** `static` **detections**(): [`FormatDetectionParser`](assets.FormatDetectionParser.md)[]

**`Advanced`**

All the detection parsers currently added to the Assets class.

##### Returns

[`FormatDetectionParser`](assets.FormatDetectionParser.md)[]

## Methods

### add()

> `static` **add**(`assets`): `void`

**`Advanced`**

Registers assets with the Assets resolver. This method maps keys (aliases) to asset sources,
allowing you to load assets using friendly names instead of direct URLs.

#### Parameters

##### assets

[`ArrayOr`](utils.ArrayOr.md)\<[`UnresolvedAsset`](assets.UnresolvedAsset.md)\>

The unresolved assets to add to the resolver

#### Returns

`void`

#### Example

```ts
// Basic usage - single asset
Assets.add({
    alias: 'myTexture',
    src: 'assets/texture.png'
});
const texture = await Assets.load('myTexture');

// Multiple aliases for the same asset
Assets.add({
    alias: ['hero', 'player'],
    src: 'hero.png'
});
const hero1 = await Assets.load('hero');
const hero2 = await Assets.load('player'); // Same texture

// Multiple format support
Assets.add({
    alias: 'character',
    src: 'character.{webp,png}' // Will choose best format
});
Assets.add({
    alias: 'character',
    src: ['character.webp', 'character.png'], // Explicitly specify formats
});

// With texture options
Assets.add({
    alias: 'sprite',
    src: 'sprite.png',
    data: { scaleMode: 'nearest' }
});

// Multiple assets at once
Assets.add([
    { alias: 'bg', src: 'background.png' },
    { alias: 'music', src: 'music.mp3' },
    { alias: 'spritesheet', src: 'sheet.json', data: { ignoreMultiPack: false } }
]);
```

#### Remarks

- Assets are resolved when loaded, not when added
- Multiple formats use the best available format for the browser
- Adding with same alias overwrites previous definition
- The `data` property is passed to the asset loader

#### See

 - [Resolver](assets.Resolver.md) For details on asset resolution
 - [LoaderParser](assets.LoaderParser.md) For asset-specific data options

***

### addBundle()

> `static` **addBundle**(`bundleId`, `assets`): `void`

Registers a bundle of assets that can be loaded as a group. Bundles are useful for organizing
assets into logical groups, such as game levels or UI screens.

#### Parameters

##### bundleId

`string`

Unique identifier for the bundle

##### assets

Assets to include in the bundle

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ArrayOr`](utils.ArrayOr.md)\<`string`\> \| [`UnresolvedAsset`](assets.UnresolvedAsset.md)\<`any`\>\> | [`UnresolvedAsset`](assets.UnresolvedAsset.md)\<`any`\>[]

#### Returns

`void`

#### Example

```ts
// Add a bundle using array format
Assets.addBundle('animals', [
    { alias: 'bunny', src: 'bunny.png' },
    { alias: 'chicken', src: 'chicken.png' },
    { alias: 'thumper', src: 'thumper.png' },
]);

// Add a bundle using object format
Assets.addBundle('animals', {
    bunny: 'bunny.png',
    chicken: 'chicken.png',
    thumper: 'thumper.png',
});

// Add a bundle with advanced options
Assets.addBundle('ui', [
    {
        alias: 'button',
        src: 'button.{webp,png}',
        data: { scaleMode: 'nearest' }
    },
    {
        alias: ['logo', 'brand'],  // Multiple aliases
        src: 'logo.svg',
        data: { resolution: 2 }
    }
]);

// Load the bundle
await Assets.loadBundle('animals');

// Use the loaded assets
const bunny = Sprite.from('bunny');
const chicken = Sprite.from('chicken');
```

#### Remarks

- Bundle IDs must be unique
- Assets in bundles are not loaded until `loadBundle` is called
- Bundles can be background loaded using `backgroundLoadBundle`
- Assets in bundles can be loaded individually using their aliases

#### See

 - [Assets.loadBundle](#loadbundle) For loading bundles
 - [Assets.backgroundLoadBundle](#backgroundloadbundle) For background loading bundles
 - [Assets.unloadBundle](#unloadbundle) For unloading bundles
 - [AssetsManifest](assets.AssetsManifest.md) For manifest format details

***

### backgroundLoad()

> `static` **backgroundLoad**(`urls`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Initiates background loading of assets. This allows assets to be loaded passively while other operations
continue, making them instantly available when needed later.

Background loading is useful for:
- Preloading game levels while in a menu
- Loading non-critical assets during gameplay
- Reducing visible loading screens

#### Parameters

##### urls

[`ArrayOr`](utils.ArrayOr.md)\<`string`\>

Single URL/alias or array of URLs/aliases to load in the background

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example

```ts
// Basic background loading
Assets.backgroundLoad('images/level2-assets.png');

// Background load multiple assets
Assets.backgroundLoad([
    'images/sprite1.png',
    'images/sprite2.png',
    'images/background.png'
]);

// Later, when you need the assets
const textures = await Assets.load([
    'images/sprite1.png',
    'images/sprite2.png'
]); // Resolves immediately if background loading completed
```

#### Remarks

- Background loading happens one asset at a time to avoid blocking the main thread
- Loading can be interrupted safely by calling `Assets.load()`
- Assets are cached as they complete loading
- No progress tracking is available for background loading

***

### backgroundLoadBundle()

> `static` **backgroundLoadBundle**(`bundleIds`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Initiates background loading of asset bundles. Similar to backgroundLoad but works with
predefined bundles of assets.

Perfect for:
- Preloading level bundles during gameplay
- Loading UI assets during splash screens
- Preparing assets for upcoming game states

#### Parameters

##### bundleIds

[`ArrayOr`](utils.ArrayOr.md)\<`string`\>

Single bundle ID or array of bundle IDs to load in the background

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example

```ts
// Define bundles in your manifest
await Assets.init({
    manifest: {
        bundles: [
            {
              name: 'home',
              assets: [
                {
                    alias: 'background',
                    src: 'images/home-bg.png',
                },
                {
                    alias: 'logo',
                    src: 'images/logo.png',
                }
             ]
           },
           {
            name: 'level-1',
            assets: [
                {
                    alias: 'background',
                    src: 'images/level1/bg.png',
                },
                {
                    alias: 'sprites',
                    src: 'images/level1/sprites.json'
                }
            ]
        }]
    }
});

// Load the home screen assets right away
await Assets.loadBundle('home');
showHomeScreen();

// Start background loading while showing home screen
Assets.backgroundLoadBundle('level-1');

// When player starts level, load completes faster
await Assets.loadBundle('level-1');
hideHomeScreen();
startLevel();
```

#### Remarks

- Bundle assets are loaded one at a time
- Loading can be interrupted safely by calling `Assets.loadBundle()`
- Assets are cached as they complete loading
- Requires bundles to be registered via manifest or `addBundle`

#### See

 - [Assets.addBundle](#addbundle) For adding bundles programmatically
 - [Assets.loadBundle](#loadbundle) For immediate bundle loading
 - [AssetsManifest](assets.AssetsManifest.md) For manifest format details

***

### get()

#### Call Signature

> `static` **get**\<`T`\>(`keys`): `T`

Instantly gets an asset already loaded from the cache. Returns undefined if the asset hasn't been loaded yet.

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### keys

`string`

The key or keys for the assets to retrieve

##### Returns

`T`

The cached asset(s) or undefined if not loaded

##### Example

```ts
// Get a single cached asset
const texture = Assets.get('hero');
if (texture) {
    const sprite = new Sprite(texture);
}

// Get multiple cached assets
const textures = Assets.get([
    'hero',
    'background',
    'enemy'
]);

// Safe pattern with loading fallback
let texture = Assets.get('hero');
if (!texture) {
    texture = await Assets.load('hero');
}

// Working with bundles
await Assets.loadBundle('game-ui');
const uiAssets = Assets.get([
    'button',
    'panel',
    'icons'
]);
```

##### Remarks

- Returns undefined if asset isn't loaded
- No automatic loading - use `Assets.load()` for that
- Cached assets are shared instances
- Faster than `load()` for already cached assets

> [!TIP]
> When in doubt, use `Assets.load()` instead. It will return cached
> assets instantly if they're already loaded.

##### See

 - [Assets.load](#load) For loading assets that aren't cached
 - [Assets.cache](#cache) For direct cache access

#### Call Signature

> `static` **get**\<`T`\>(`keys`): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `T`\>

Instantly gets an asset already loaded from the cache. Returns undefined if the asset hasn't been loaded yet.

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### keys

`string`[]

The key or keys for the assets to retrieve

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `T`\>

The cached asset(s) or undefined if not loaded

##### Example

```ts
// Get a single cached asset
const texture = Assets.get('hero');
if (texture) {
    const sprite = new Sprite(texture);
}

// Get multiple cached assets
const textures = Assets.get([
    'hero',
    'background',
    'enemy'
]);

// Safe pattern with loading fallback
let texture = Assets.get('hero');
if (!texture) {
    texture = await Assets.load('hero');
}

// Working with bundles
await Assets.loadBundle('game-ui');
const uiAssets = Assets.get([
    'button',
    'panel',
    'icons'
]);
```

##### Remarks

- Returns undefined if asset isn't loaded
- No automatic loading - use `Assets.load()` for that
- Cached assets are shared instances
- Faster than `load()` for already cached assets

> [!TIP]
> When in doubt, use `Assets.load()` instead. It will return cached
> assets instantly if they're already loaded.

##### See

 - [Assets.load](#load) For loading assets that aren't cached
 - [Assets.cache](#cache) For direct cache access

***

### init()

> `static` **init**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Initializes the Assets class with configuration options. While not required,
calling this before loading assets is recommended to set up default behaviors.

#### Parameters

##### options

[`AssetInitOptions`](assets.AssetInitOptions.md) = `{}`

Configuration options for the Assets system

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example

```ts
// Basic initialization (optional as Assets.load will call this automatically)
await Assets.init();

// With CDN configuration
await Assets.init({
    basePath: 'https://my-cdn.com/assets/',
    defaultSearchParams: { version: '1.0.0' }
});

// With manifest and preferences
await Assets.init({
    manifest: {
        bundles: [{
            name: 'game-screen',
            assets: [
                {
                    alias: 'hero',
                    src: 'hero.{png,webp}',
                    data: { scaleMode: SCALE_MODES.NEAREST }
                },
                {
                    alias: 'map',
                    src: 'map.json'
                }
            ]
        }]
    },
    // Optimize for device capabilities
    texturePreference: {
        resolution: window.devicePixelRatio,
        format: ['webp', 'png']
    },
    // Set global preferences
    preferences: {
        crossOrigin: 'anonymous',
    }
});

// Load assets after initialization
const heroTexture = await Assets.load('hero');
```

#### Remarks

- Can be called only once; subsequent calls will be ignored with a warning
- Format detection runs automatically unless `skipDetections` is true
- The manifest can be a URL to a JSON file or an inline object

#### See

 - [AssetInitOptions](assets.AssetInitOptions.md) For all available initialization options
 - [AssetsManifest](assets.AssetsManifest.md) For manifest format details

***

### load()

#### Call Signature

> `static` **load**\<`T`\>(`urls`, `onProgress?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Loads one or more assets and returns a promise that resolves with the loaded content.
Assets are cached, so subsequent loads will return the same instance of the asset without re-fetching.

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### urls

Single URL/alias or array of URLs/aliases to load

`string` | [`UnresolvedAsset`](assets.UnresolvedAsset.md)

###### onProgress?

Optional callback for load progress (0.0 to 1.0)

[`LoadOptions`](assets.LoadOptions.md) | [`ProgressCallback`](assets.ProgressCallback.md)

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Promise that resolves with loaded asset(s)

##### Example

```ts
// Load a single asset
const texture = await Assets.load('images/sprite.png');

// Load using an alias
const heroTexture = await Assets.load({ alias: 'hero', src: 'images/hero.png' });

// Load multiple assets
const assets = await Assets.load([
    'images/background.png',
    'images/character.png',
    'fonts/game.fnt'
]);
console.log(assets['images/background.png']); // Access by URL

// Load with progress tracking
const textures = await Assets.load(['sprite1.png', 'sprite2.png'],
    (progress) => console.log(`Loading: ${Math.round(progress * 100)}%`)
);

// Load with format preference
const characterTexture = await Assets.load({
    alias: 'character',
    src: 'character.{webp,png}' // Will choose best format
});

// Load with custom options
const spriteTexture = await Assets.load({
    alias: 'sprite',
    src: 'sprite.png',
    data: {
        scaleMode: SCALE_MODES.NEAREST,
        mipmap: MIPMAP_MODES.ON
    }
});

// Load with a specific loader, can be useful if your asset does not have an extension
const image = await Assets.load({
   alias: 'imageWithoutExtension',
   src: 'images/imageWithoutExtension',
   parser: 'texture' // Use the JSON loader
});
```

##### Remarks

- Assets are cached automatically to prevent duplicate loading
- URLs are resolved to the best format for the current browser
- Asset types are detected automatically based on file extension
- Progress callback receives values from 0.0 to 1.0
- You can define with loader to use for an asset by specifying the `parser` property, which is useful for assets that do not have a file extension.

##### Throws

If the asset cannot be loaded or parsed

##### See

 - [Assets.add](#add) For registering assets with aliases
 - [Assets.backgroundLoad](#backgroundload) For loading assets in the background
 - [Assets.unload](#unload) For releasing loaded assets

#### Call Signature

> `static` **load**\<`T`\>(`urls`, `onProgress?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `T`\>\>

Loads one or more assets and returns a promise that resolves with the loaded content.
Assets are cached, so subsequent loads will return the same instance of the asset without re-fetching.

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### urls

Single URL/alias or array of URLs/aliases to load

`string`[] | [`UnresolvedAsset`](assets.UnresolvedAsset.md)[]

###### onProgress?

Optional callback for load progress (0.0 to 1.0)

[`LoadOptions`](assets.LoadOptions.md) | [`ProgressCallback`](assets.ProgressCallback.md)

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `T`\>\>

Promise that resolves with loaded asset(s)

##### Example

```ts
// Load a single asset
const texture = await Assets.load('images/sprite.png');

// Load using an alias
const heroTexture = await Assets.load({ alias: 'hero', src: 'images/hero.png' });

// Load multiple assets
const assets = await Assets.load([
    'images/background.png',
    'images/character.png',
    'fonts/game.fnt'
]);
console.log(assets['images/background.png']); // Access by URL

// Load with progress tracking
const textures = await Assets.load(['sprite1.png', 'sprite2.png'],
    (progress) => console.log(`Loading: ${Math.round(progress * 100)}%`)
);

// Load with format preference
const characterTexture = await Assets.load({
    alias: 'character',
    src: 'character.{webp,png}' // Will choose best format
});

// Load with custom options
const spriteTexture = await Assets.load({
    alias: 'sprite',
    src: 'sprite.png',
    data: {
        scaleMode: SCALE_MODES.NEAREST,
        mipmap: MIPMAP_MODES.ON
    }
});

// Load with a specific loader, can be useful if your asset does not have an extension
const image = await Assets.load({
   alias: 'imageWithoutExtension',
   src: 'images/imageWithoutExtension',
   parser: 'texture' // Use the JSON loader
});
```

##### Remarks

- Assets are cached automatically to prevent duplicate loading
- URLs are resolved to the best format for the current browser
- Asset types are detected automatically based on file extension
- Progress callback receives values from 0.0 to 1.0
- You can define with loader to use for an asset by specifying the `parser` property, which is useful for assets that do not have a file extension.

##### Throws

If the asset cannot be loaded or parsed

##### See

 - [Assets.add](#add) For registering assets with aliases
 - [Assets.backgroundLoad](#backgroundload) For loading assets in the background
 - [Assets.unload](#unload) For releasing loaded assets

***

### loadBundle()

> `static` **loadBundle**(`bundleIds`, `onProgress?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

Loads a bundle or multiple bundles of assets. Bundles are collections of related assets
that can be loaded together.

#### Parameters

##### bundleIds

[`ArrayOr`](utils.ArrayOr.md)\<`string`\>

Single bundle ID or array of bundle IDs to load

##### onProgress?

[`ProgressCallback`](assets.ProgressCallback.md)

Optional callback for load progress (0.0 to 1.0)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

Promise that resolves with the loaded bundle assets

#### Example

```ts
// Define bundles in your manifest
const manifest = {
    bundles: [
        {
            name: 'load-screen',
            assets: [
                {
                    alias: 'background',
                    src: 'sunset.png',
                },
                {
                    alias: 'bar',
                    src: 'load-bar.{png,webp}', // use an array of individual assets
                },
            ],
        },
        {
            name: 'game-screen',
            assets: [
                {
                    alias: 'character',
                    src: 'robot.png',
                },
                {
                    alias: 'enemy',
                    src: 'bad-guy.png',
                },
            ],
        },
    ]
};

// Initialize with manifest
await Assets.init({ manifest });

// Or add bundles programmatically
Assets.addBundle('load-screen', [...]);
Assets.loadBundle('load-screen');

// Load a single bundle
await Assets.loadBundle('load-screen');
const bg = Sprite.from('background'); // Uses alias from bundle

// Load multiple bundles
await Assets.loadBundle([
    'load-screen',
    'game-screen'
]);

// Load with progress tracking
await Assets.loadBundle('game-screen', (progress) => {
    console.log(`Loading: ${Math.round(progress * 100)}%`);
});
```

#### Remarks

- Bundle assets are cached automatically
- Bundles can be pre-loaded using `backgroundLoadBundle`
- Assets in bundles can be accessed by their aliases
- Progress callback receives values from 0.0 to 1.0

#### Throws

If the bundle ID doesn't exist in the manifest

#### See

 - [Assets.addBundle](#addbundle) For adding bundles programmatically
 - [Assets.backgroundLoadBundle](#backgroundloadbundle) For background loading bundles
 - [Assets.unloadBundle](#unloadbundle) For unloading bundles
 - [AssetsManifest](assets.AssetsManifest.md) For manifest format details

***

### setPreferences()

> `static` **setPreferences**(`preferences`): `void`

Sets global preferences for asset loading behavior. This method configures how assets
are loaded and processed across all parsers.

#### Parameters

##### preferences

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`AssetsPreferences`](assets.AssetsPreferences.md)\>

Asset loading preferences

#### Returns

`void`

#### Example

```ts
// Basic preferences
Assets.setPreferences({
    crossOrigin: 'anonymous',
    parseAsGraphicsContext: false
});
```

#### Remarks

Preferences are applied to all compatible parsers and affect future asset loading.
Common preferences include:
- `crossOrigin`: CORS setting for loaded assets
- `preferWorkers`: Whether to use web workers for loading textures
- `preferCreateImageBitmap`: Use `createImageBitmap` for texture creation. Turning this off will use the `Image` constructor instead.

#### See

[AssetsPreferences](assets.AssetsPreferences.md) For all available preferences

***

### unload()

> `static` **unload**(`urls`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Unloads assets and releases them from memory. This method ensures proper cleanup of
loaded assets when they're no longer needed.

#### Parameters

##### urls

Single URL/alias or array of URLs/aliases to unload

[`ArrayOr`](utils.ArrayOr.md)\<`string`\> | [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\> | [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example

```ts
// Unload a single asset
await Assets.unload('images/sprite.png');

// Unload using an alias
await Assets.unload('hero'); // Unloads the asset registered with 'hero' alias

// Unload multiple assets
await Assets.unload([
    'images/background.png',
    'images/character.png',
    'hero'
]);

// Unload and handle creation of new instances
await Assets.unload('hero');
const newHero = await Assets.load('hero'); // Will load fresh from source
```

#### Remarks

> [!WARNING]
> Make sure assets aren't being used before unloading:
> - Remove sprites using the texture
> - Clear any references to the asset
> - Textures will be destroyed and can't be used after unloading

#### Throws

If the asset is not found in cache

***

### unloadBundle()

> `static` **unloadBundle**(`bundleIds`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Unloads all assets in a bundle. Use this to free memory when a bundle's assets
are no longer needed, such as when switching game levels.

#### Parameters

##### bundleIds

[`ArrayOr`](utils.ArrayOr.md)\<`string`\>

Single bundle ID or array of bundle IDs to unload

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example

```ts
// Define and load a bundle
Assets.addBundle('level-1', {
    background: 'level1/bg.png',
    sprites: 'level1/sprites.json',
    music: 'level1/music.mp3'
});

// Load the bundle
const level1 = await Assets.loadBundle('level-1');

// Use the assets
const background = Sprite.from(level1.background);

// When done with the level, unload everything
await Assets.unloadBundle('level-1');
// background sprite is now invalid!

// Unload multiple bundles
await Assets.unloadBundle([
    'level-1',
    'level-2',
    'ui-elements'
]);
```

#### Remarks

> [!WARNING]
> - All assets in the bundle will be destroyed
> - Bundle needs to be reloaded to use assets again
> - Make sure no sprites or other objects are using the assets

#### Throws

If the bundle is not found

#### See

 - [Assets.addBundle](#addbundle) For adding bundles
 - [Assets.loadBundle](#loadbundle) For loading bundles
