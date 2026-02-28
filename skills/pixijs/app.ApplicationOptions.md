# Interface: ApplicationOptions

Application options supplied to the [Application#init](app.Application.html#init) method.
These options configure how your PixiJS application behaves.

## Example

```js
import { Application } from 'pixi.js';

const app = new Application();

// Initialize with common options
await app.init({
   // Rendering options
   width: 800,                    // Canvas width
   height: 600,                   // Canvas height
   backgroundColor: 0x1099bb,     // Background color
   antialias: true,              // Enable antialiasing
   resolution: window.devicePixelRatio, // Screen resolution

   // Performance options
   autoStart: true,              // Auto-starts the render loop
   sharedTicker: true,           // Use shared ticker for better performance

   // Automatic resize options
   resizeTo: window,             // Auto-resize to window
   autoDensity: true,           // Adjust for device pixel ratio

   // Advanced options
   preference: 'webgl',         // Renderer preference ('webgl' or 'webgpu')
   powerPreference: 'high-performance' // GPU power preference
});
```

## See

 - [WebGLOptions](rendering.WebGLOptions.md) For resize-related options
 - [WebGPUOptions](rendering.WebGPUOptions.md) For resize-related options
 - [TickerPlugin](app.TickerPlugin.md) For ticker-related options
 - [ResizePlugin](app.ResizePlugin.md) For resize-related options

## Extends

- [`AutoDetectOptions`](rendering.AutoDetectOptions.md).`ApplicationOptions`

## Properties

### antialias?

> `optional` **antialias**: `boolean`

Whether to enable anti-aliasing. This may affect performance.

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`antialias`](rendering.AutoDetectOptions.html#antialias)

***

### autoDensity?

> `optional` **autoDensity**: `boolean`

Resizes renderer view in CSS pixels to allow for resolutions other than 1.

This is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas.

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`autoDensity`](rendering.AutoDetectOptions.html#autodensity)

***

### autoStart?

> `optional` **autoStart**: `boolean`

Controls whether the animation loop starts automatically after initialization.
> [!IMPORTANT]
> Setting this to `false` does NOT stop the shared ticker even if `sharedTicker` is `true`.
> You must stop the shared ticker manually if needed.

#### Example

```ts
// Auto-start (default behavior)
await app.init({ autoStart: true });

// Manual start
await app.init({ autoStart: false });
app.start(); // Start when ready
```

#### Default

```ts
true
```

#### Inherited from

`PixiMixins.ApplicationOptions.autoStart`

***

### background?

> `optional` **background**: [`ColorSource`](color.ColorSource.md)

Alias for `backgroundColor`

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`background`](rendering.AutoDetectOptions.html#background)

***

### backgroundAlpha?

> `optional` **backgroundAlpha**: `number`

Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
This value determines whether the canvas is initialized with alpha transparency support.
Note: This cannot be changed after initialization. If set to `1`, the canvas will remain opaque,
even if a transparent background color is set later.

#### Default

```ts
1
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`backgroundAlpha`](rendering.AutoDetectOptions.html#backgroundalpha)

***

### backgroundColor

> **backgroundColor**: [`ColorSource`](color.ColorSource.md)

The background color used to clear the canvas. See [ColorSource](color.ColorSource.md) for accepted color values.

#### Default

```ts
'black'
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`backgroundColor`](rendering.AutoDetectOptions.html#backgroundcolor)

***

### bezierSmoothness

> **bezierSmoothness**: `number`

A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother)

#### Default

```ts
0.5
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`bezierSmoothness`](rendering.AutoDetectOptions.html#beziersmoothness)

***

### canvas?

> `optional` **canvas**: [`ICanvas`](environment.ICanvas.md)

The canvas to use as a view, optional.

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`canvas`](rendering.AutoDetectOptions.html#canvas)

***

### canvasOptions?

> `optional` **canvasOptions**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`CanvasOptions`](rendering.CanvasOptions.md)\>

Optional CanvasOptions to pass only to the Canvas renderer

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`canvasOptions`](rendering.AutoDetectOptions.html#canvasoptions)

***

### clearBeforeRender?

> `optional` **clearBeforeRender**: `boolean`

Whether to clear the canvas before new render passes.

#### Default

```ts
true
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`clearBeforeRender`](rendering.AutoDetectOptions.html#clearbeforerender)

***

### context

> **context**: [`WebGL2RenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext)

User-provided WebGL rendering context object.

#### Default

```ts
null
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`context`](rendering.AutoDetectOptions.html#context)

***

### culler?

> `optional` **culler**: `object`

Options for the culler behavior.

#### updateTransform?

> `optional` **updateTransform**: `boolean`

Update the transform of culled objects.

> [!IMPORTANT] Keeping this as `false` can improve performance by avoiding unnecessary calculations,
> however, the transform used for culling may not be up-to-date if the object has moved since the last render.

##### Default

```ts
true
```

##### Example

```ts
const app = new Application();
await app.init({
    culler: {
        updateTransform: false // Skip updating transforms for culled objects
    }
});
```

#### Example

```ts
// Basic culling options
const app = new Application();
await app.init({
    culler: {...}
});
```

#### Inherited from

[`CullerPluginOptions`](app.CullerPluginOptions.md).[`culler`](app.CullerPluginOptions.html#culler)

***

### depth?

> `optional` **depth**: `boolean`

Whether to ensure the main view has can make use of the depth buffer. Always true for WebGL renderer.

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`depth`](rendering.AutoDetectOptions.html#depth)

***

### eventFeatures?

> `optional` **eventFeatures**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`EventSystemFeatures`](events.EventSystemFeatures.md)\>

Configuration for enabling/disabling specific event features.
Use this to optimize performance by turning off unused functionality.

#### Example

```ts
const app = new Application();
await app.init({
    eventFeatures: {
        // Core interaction events
        move: true,        // Pointer/mouse/touch movement
        click: true,       // Click/tap events
        wheel: true,       // Mouse wheel/scroll events
        // Global tracking
        globalMove: false  // Global pointer movement
    }
});
```

#### Since

7.2.0

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`eventFeatures`](rendering.AutoDetectOptions.html#eventfeatures)

***

### eventMode?

> `optional` **eventMode**: [`EventMode`](events.EventMode.md)

The type of interaction behavior for a Container. This is set via the [Container#eventMode](events.FederatedOptions.html#eventmode) property.

#### Example

```ts
// Basic event mode setup
const sprite = new Sprite(texture);
sprite.eventMode = 'static';    // Enable standard interaction
sprite.on('pointerdown', () => { console.log('clicked!'); });

// Different event modes
sprite.eventMode = 'none';      // Disable all interaction
sprite.eventMode = 'passive';   // Only allow interaction on children
sprite.eventMode = 'auto';      // Like DOM pointer-events: auto
sprite.eventMode = 'dynamic';   // For moving/animated objects
```

Available modes:
- `'none'`: Ignores all interaction events, even on its children
- `'passive'`: **(default)** Does not emit events and ignores hit testing on itself and
non-interactive children. Interactive children will still emit events.
- `'auto'`: Does not emit events but is hit tested if parent is interactive.
Same as `interactive = false` in v7
- `'static'`: Emit events and is hit tested. Same as `interactive = true` in v7
- `'dynamic'`: Emits events and is hit tested but will also receive mock interaction events fired from
a ticker to allow for interaction when the mouse isn't moving

Performance tips:
- Use `'none'` for pure visual elements
- Use `'passive'` for containers with some interactive children
- Use `'static'` for standard buttons/controls
- Use `'dynamic'` only for moving/animated interactive elements

#### Since

7.2.0

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`eventMode`](rendering.AutoDetectOptions.html#eventmode)

***

### failIfMajorPerformanceCaveat?

> `optional` **failIfMajorPerformanceCaveat**: `boolean`

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`failIfMajorPerformanceCaveat`](rendering.AutoDetectOptions.html#failifmajorperformancecaveat)

***

### forceFallbackAdapter

> **forceFallbackAdapter**: `boolean`

Force the use of the fallback adapter

#### Default

```ts
false
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`forceFallbackAdapter`](rendering.AutoDetectOptions.html#forcefallbackadapter)

***

### gcActive

> **gcActive**: `boolean`

If set to true, this will enable the garbage collector.

#### Default

```ts
true
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`gcActive`](rendering.AutoDetectOptions.html#gcactive)

***

### gcFrequency

> **gcFrequency**: `number`

How frequently to run garbage collection in milliseconds.

#### Default

```ts
30000
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`gcFrequency`](rendering.AutoDetectOptions.html#gcfrequency)

***

### gcMaxUnusedTime

> **gcMaxUnusedTime**: `number`

The maximum time in milliseconds a resource can be unused before being garbage collected.

#### Default

```ts
60000
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`gcMaxUnusedTime`](rendering.AutoDetectOptions.html#gcmaxunusedtime)

***

### gpu?

> `optional` **gpu**: [`GPU`](rendering.GPU.md)

Using shared device and adaptor from other engine

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`gpu`](rendering.AutoDetectOptions.html#gpu)

***

### height?

> `optional` **height**: `number`

The height of the screen.

#### Default

```ts
600
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`height`](rendering.AutoDetectOptions.html#height)

***

### hello

> **hello**: `boolean`

Whether to log the version and type information of renderer to console.

#### Default

```ts
false
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`hello`](rendering.AutoDetectOptions.html#hello)

***

### ~~manageImports?~~

> `optional` **manageImports**: `boolean`

#### Default

```ts
true
```

#### Deprecated

since 8.1.6

#### See

`skipExtensionImports`

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`manageImports`](rendering.AutoDetectOptions.html#manageimports)

***

### multiView

> **multiView**: `boolean`

Whether to enable multi-view rendering. Set to true when rendering to multiple
canvases on the dom.

#### Default

```ts
false
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`multiView`](rendering.AutoDetectOptions.html#multiview)

***

### powerPreference?

> `optional` **powerPreference**: [`GpuPowerPreference`](rendering.GpuPowerPreference.md)

An optional hint indicating what configuration of GPU is suitable for the WebGL context,
can be `'high-performance'` or `'low-power'`.
Setting to `'high-performance'` will prioritize rendering performance over power consumption,
while setting to `'low-power'` will prioritize power saving over rendering performance.

#### Default

```ts
undefined
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`powerPreference`](rendering.AutoDetectOptions.html#powerpreference)

***

### preference?

> `optional` **preference**: `"canvas"` \| `"webgl"` \| `"webgpu"`

The preferred renderer type. WebGPU is recommended as its generally faster than WebGL.

#### Inherited from

`ApplicationOptions`.[`preference`](#preference)

***

### preferWebGLVersion?

> `optional` **preferWebGLVersion**: `1` \| `2`

The preferred WebGL version to use.

#### Default

```ts
2
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`preferWebGLVersion`](rendering.AutoDetectOptions.html#preferwebglversion)

***

### premultipliedAlpha

> **premultipliedAlpha**: `boolean`

Whether the compositor will assume the drawing buffer contains colors with premultiplied alpha.

#### Default

```ts
true
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`premultipliedAlpha`](rendering.AutoDetectOptions.html#premultipliedalpha)

***

### preserveDrawingBuffer

> **preserveDrawingBuffer**: `boolean`

Whether to enable drawing buffer preservation. If enabled, the drawing buffer will preserve
its value until cleared or overwritten. Enable this if you need to call `toDataUrl` on the WebGL context.

#### Default

```ts
false
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`preserveDrawingBuffer`](rendering.AutoDetectOptions.html#preservedrawingbuffer)

***

### renderableGCActive

> **renderableGCActive**: `boolean`

If set to true, this will enable the garbage collector on the GPU.

#### Default

```ts
true
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`renderableGCActive`](rendering.AutoDetectOptions.html#renderablegcactive)

***

### renderableGCFrequency

> **renderableGCFrequency**: `number`

Frames between two garbage collections.

#### Default

```ts
600
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`renderableGCFrequency`](rendering.AutoDetectOptions.html#renderablegcfrequency)

***

### renderableGCMaxUnusedTime

> **renderableGCMaxUnusedTime**: `number`

The maximum idle frames before a texture is destroyed by garbage collection.

#### Default

```ts
60 * 60
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`renderableGCMaxUnusedTime`](rendering.AutoDetectOptions.html#renderablegcmaxunusedtime)

***

### resizeTo?

> `optional` **resizeTo**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| [`Window`](https://developer.mozilla.org/docs/Web/API/Window)

Element to automatically resize the renderer to.

#### Example

```ts
const app = new Application();
await app.init({
    resizeTo: window, // Resize to the entire window
    // or
    resizeTo: document.querySelector('#game-container'), // Resize to a specific element
    // or
    resizeTo: null, // Disable auto-resize
});
```

#### Default

```ts
null
```

#### Inherited from

`PixiMixins.ApplicationOptions.resizeTo`

***

### resolution?

> `optional` **resolution**: `number`

The resolution / device pixel ratio of the renderer.

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`resolution`](rendering.AutoDetectOptions.html#resolution)

***

### roundPixels?

> `optional` **roundPixels**: `boolean`

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`roundPixels`](rendering.AutoDetectOptions.html#roundpixels)

***

### sharedTicker?

> `optional` **sharedTicker**: `boolean`

Controls whether to use the shared global ticker or create a new instance.

The shared ticker is useful when you have multiple instances that should sync their updates.
However, it has some limitations regarding update order control.

Update Order:
1. System ticker (always runs first)
2. Shared ticker (if enabled)
3. App ticker (if using own ticker)

#### Example

```ts
// Use shared ticker (global instance)
await app.init({ sharedTicker: true });

// Use dedicated ticker (default)
await app.init({ sharedTicker: false });

// Access ticker properties
console.log(app.ticker.FPS);    // Current FPS
console.log(app.ticker.deltaMS); // MS since last update
```

#### Default

```ts
false
```

#### Inherited from

`PixiMixins.ApplicationOptions.sharedTicker`

***

### skipExtensionImports?

> `optional` **skipExtensionImports**: `boolean`

Whether to stop PixiJS from dynamically importing default extensions for the renderer.
It is false by default, and means PixiJS will load all the default extensions, based
on the environment e.g browser/webworker.
If you set this to true, then you will need to manually import the systems and extensions you need.

e.g.
```js
import 'accessibility';
import 'app';
import 'events';
import 'spritesheet';
import 'graphics';
import 'mesh';
import 'text';
import 'text-bitmap';
import 'text-html';
import { autoDetectRenderer } from 'pixi.js';

const renderer = await autoDetectRenderer({
  width: 800,
  height: 600,
  skipExtensionImports: true,
});
```

#### Default

```ts
false
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`skipExtensionImports`](rendering.AutoDetectOptions.html#skipextensionimports)

***

### ~~textureGCActive~~

> **textureGCActive**: `boolean`

If set to true, this will enable the garbage collector on the GPU.

#### Default

```ts
true
```

#### Deprecated

since 8.15.0

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`textureGCActive`](rendering.AutoDetectOptions.html#texturegcactive)

***

### ~~textureGCAMaxIdle~~

> **textureGCAMaxIdle**: `number`

#### Deprecated

since 8.3.0

#### See

[TextureGCSystemOptions.textureGCMaxIdle](rendering.TextureGCSystemOptions.html#texturegcmaxidle)

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`textureGCAMaxIdle`](rendering.AutoDetectOptions.html#texturegcamaxidle)

***

### ~~textureGCCheckCountMax~~

> **textureGCCheckCountMax**: `number`

Frames between two garbage collections.

#### Default

```ts
600
```

#### Deprecated

since 8.15.0

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`textureGCCheckCountMax`](rendering.AutoDetectOptions.html#texturegccheckcountmax)

***

### ~~textureGCMaxIdle~~

> **textureGCMaxIdle**: `number`

The maximum idle frames before a texture is destroyed by garbage collection.

#### Default

```ts
60 * 60
```

#### Deprecated

since 8.15.0

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`textureGCMaxIdle`](rendering.AutoDetectOptions.html#texturegcmaxidle)

***

### useBackBuffer?

> `optional` **useBackBuffer**: `boolean`

if true will use the back buffer where required

#### Default

```ts
false
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`useBackBuffer`](rendering.AutoDetectOptions.html#usebackbuffer)

***

### ~~view?~~

> `optional` **view**: [`ICanvas`](environment.ICanvas.md)

Alias for `canvas`.

#### Deprecated

since 8.0.0

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`view`](rendering.AutoDetectOptions.html#view)

***

### webgl?

> `optional` **webgl**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WebGLOptions`](rendering.WebGLOptions.md)\>

Optional WebGLOptions to pass only to the WebGL renderer

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`webgl`](rendering.AutoDetectOptions.html#webgl)

***

### webgpu?

> `optional` **webgpu**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WebGPUOptions`](rendering.WebGPUOptions.md)\>

Optional WebGPUOptions to pass only to WebGPU renderer.

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`webgpu`](rendering.AutoDetectOptions.html#webgpu)

***

### width?

> `optional` **width**: `number`

The width of the screen.

#### Default

```ts
800
```

#### Inherited from

[`AutoDetectOptions`](rendering.AutoDetectOptions.md).[`width`](rendering.AutoDetectOptions.html#width)
