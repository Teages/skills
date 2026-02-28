# Type Alias: ProgressCallback()

> **ProgressCallback** = (`progress`) => `void`

Callback function for tracking asset loading progress. The function is called repeatedly
during the loading process with a progress value between 0.0 and 1.0.

## Parameters

### progress

`number`

The loading progress from 0.0 (started) to 1.0 (complete)

## Returns

`void`

void

## Example

```ts
// Basic progress logging
const onProgress = (progress: number) => {
    console.log(`Loading: ${Math.round(progress * 100)}%`);
};

// Update loading bar
const onProgress = (progress: number) => {
    loadingBar.width = progress * 100;
    loadingText.text = `${Math.round(progress * 100)}%`;
};

// Load assets with progress tracking
await Assets.load(['sprite1.png', 'sprite2.png'], onProgress);

// Load bundle with progress tracking
await Assets.loadBundle('levelAssets', (progress) => {
    // Progress is normalized (0.0 - 1.0)
    updateLoadingScreen(progress);
});
```
> [!IMPORTANT] Do not rely on the progress callback to determine when all assets are loaded.
> Use the returned promise from `Assets.load()` or `Assets.loadBundle()` to know when loading is complete.
