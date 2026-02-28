# Class: BackgroundLoader

**`Advanced`**

The BackgroundLoader handles loading assets passively in the background to prepare them for future use.
It loads one asset at a time to minimize impact on application performance.

Key features:
- Sequential loading of assets
- Automatic pause when high-priority loads occur
- Configurable concurrency

## Example

```ts
import { Assets } from 'pixi.js';

// Background load level assets while in menu
Assets.backgroundLoad([
    'level1/background.png',
    'level1/sprites.json',
    'level1/music.mp3'
]);

// Assets will be instantly available when needed
const assets = await Assets.load([
    'level1/background.png',
    'level1/sprites.json'
]);

// Background load bundles
Assets.backgroundLoadBundle('level2');

// Later, instant access
const level2 = await Assets.loadBundle('level2');
```
> [!NOTE] You typically do not need to use this class directly. Use the main [Assets.backgroundLoad](assets.Assets.html#backgroundload) API instead.

## Remarks

- Background loading is automatically paused when `Assets.load()` is called
- Assets are loaded sequentially to minimize performance impact
- Assets are cached as they complete loading
- No progress tracking is available for background loading

## See

 - [Assets.backgroundLoad](assets.Assets.html#backgroundload) For the main background loading API
 - [Assets.backgroundLoadBundle](assets.Assets.html#backgroundloadbundle) For background loading bundles

## Constructors

### Constructor

> **new BackgroundLoader**(`loader`, `verbose`): `BackgroundLoader`

#### Parameters

##### loader

[`Loader`](assets.Loader.md)

##### verbose

`boolean` = `false`

should the loader log to the console

#### Returns

`BackgroundLoader`

## Properties

### verbose

> **verbose**: `boolean`

**`Advanced`**

Should the loader log to the console.

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Controls the active state of the background loader. When active, the loader will
continue processing its queue. When inactive, loading is paused.

##### Example

```ts
// Pause background loading
backgroundLoader.active = false;

// Resume background loading
backgroundLoader.active = true;

// Check current state
console.log(backgroundLoader.active); // true/false

// Common use case: Pause during intensive operations
backgroundLoader.active = false;  // Pause background loading
... // Perform high-priority tasks
backgroundLoader.active = true;   // Resume background loading
```

##### Remarks

- Setting to true resumes loading immediately
- Setting to false pauses after current asset completes
- Background loading is automatically paused during `Assets.load()`
- Assets already being loaded will complete even when set to false

##### Returns

`boolean`

Whether the background loader is currently active

#### Set Signature

> **set** **active**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`
