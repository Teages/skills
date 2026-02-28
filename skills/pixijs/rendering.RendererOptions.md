# Interface: RendererOptions

Options for the renderer.

## Extends

- [`WebGLOptions`](rendering.WebGLOptions.md).[`WebGPUOptions`](rendering.WebGPUOptions.md).[`CanvasOptions`](rendering.CanvasOptions.md)

## Extended by

- [`AutoDetectOptions`](rendering.AutoDetectOptions.md)

## Properties

### antialias?

> `optional` **antialias**: `boolean`

Whether to enable anti-aliasing. This may affect performance.

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`antialias`](rendering.WebGLOptions.html#antialias)

***

### autoDensity?

> `optional` **autoDensity**: `boolean`

Resizes renderer view in CSS pixels to allow for resolutions other than 1.

This is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas.

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`autoDensity`](rendering.WebGLOptions.html#autodensity)

***

### background?

> `optional` **background**: [`ColorSource`](color.ColorSource.md)

Alias for `backgroundColor`

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`background`](rendering.WebGLOptions.html#background)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`backgroundAlpha`](rendering.WebGLOptions.html#backgroundalpha)

***

### backgroundColor

> **backgroundColor**: [`ColorSource`](color.ColorSource.md)

The background color used to clear the canvas. See [ColorSource](color.ColorSource.md) for accepted color values.

#### Default

```ts
'black'
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`backgroundColor`](rendering.WebGLOptions.html#backgroundcolor)

***

### bezierSmoothness

> **bezierSmoothness**: `number`

A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother)

#### Default

```ts
0.5
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`bezierSmoothness`](rendering.WebGLOptions.html#beziersmoothness)

***

### canvas?

> `optional` **canvas**: [`ICanvas`](environment.ICanvas.md)

The canvas to use as a view, optional.

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`canvas`](rendering.WebGLOptions.html#canvas)

***

### clearBeforeRender?

> `optional` **clearBeforeRender**: `boolean`

Whether to clear the canvas before new render passes.

#### Default

```ts
true
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`clearBeforeRender`](rendering.WebGLOptions.html#clearbeforerender)

***

### context

> **context**: [`WebGL2RenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext)

User-provided WebGL rendering context object.

#### Default

```ts
null
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`context`](rendering.WebGLOptions.html#context)

***

### depth?

> `optional` **depth**: `boolean`

Whether to ensure the main view has can make use of the depth buffer. Always true for WebGL renderer.

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`depth`](rendering.WebGLOptions.html#depth)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`eventFeatures`](rendering.WebGLOptions.html#eventfeatures)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`eventMode`](rendering.WebGLOptions.html#eventmode)

***

### failIfMajorPerformanceCaveat?

> `optional` **failIfMajorPerformanceCaveat**: `boolean`

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`failIfMajorPerformanceCaveat`](rendering.WebGLOptions.html#failifmajorperformancecaveat)

***

### forceFallbackAdapter

> **forceFallbackAdapter**: `boolean`

Force the use of the fallback adapter

#### Default

```ts
false
```

#### Inherited from

[`WebGPUOptions`](rendering.WebGPUOptions.md).[`forceFallbackAdapter`](rendering.WebGPUOptions.html#forcefallbackadapter)

***

### gcActive

> **gcActive**: `boolean`

If set to true, this will enable the garbage collector.

#### Default

```ts
true
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`gcActive`](rendering.WebGLOptions.html#gcactive)

***

### gcFrequency

> **gcFrequency**: `number`

How frequently to run garbage collection in milliseconds.

#### Default

```ts
30000
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`gcFrequency`](rendering.WebGLOptions.html#gcfrequency)

***

### gcMaxUnusedTime

> **gcMaxUnusedTime**: `number`

The maximum time in milliseconds a resource can be unused before being garbage collected.

#### Default

```ts
60000
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`gcMaxUnusedTime`](rendering.WebGLOptions.html#gcmaxunusedtime)

***

### gpu?

> `optional` **gpu**: [`GPU`](rendering.GPU.md)

Using shared device and adaptor from other engine

#### Inherited from

[`WebGPUOptions`](rendering.WebGPUOptions.md).[`gpu`](rendering.WebGPUOptions.html#gpu)

***

### height?

> `optional` **height**: `number`

The height of the screen.

#### Default

```ts
600
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`height`](rendering.WebGLOptions.html#height)

***

### hello

> **hello**: `boolean`

Whether to log the version and type information of renderer to console.

#### Default

```ts
false
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`hello`](rendering.WebGLOptions.html#hello)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`manageImports`](rendering.WebGLOptions.html#manageimports)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`multiView`](rendering.WebGLOptions.html#multiview)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`powerPreference`](rendering.WebGLOptions.html#powerpreference)

***

### preferWebGLVersion?

> `optional` **preferWebGLVersion**: `1` \| `2`

The preferred WebGL version to use.

#### Default

```ts
2
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`preferWebGLVersion`](rendering.WebGLOptions.html#preferwebglversion)

***

### premultipliedAlpha

> **premultipliedAlpha**: `boolean`

Whether the compositor will assume the drawing buffer contains colors with premultiplied alpha.

#### Default

```ts
true
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`premultipliedAlpha`](rendering.WebGLOptions.html#premultipliedalpha)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`preserveDrawingBuffer`](rendering.WebGLOptions.html#preservedrawingbuffer)

***

### renderableGCActive

> **renderableGCActive**: `boolean`

If set to true, this will enable the garbage collector on the GPU.

#### Default

```ts
true
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`renderableGCActive`](rendering.WebGLOptions.html#renderablegcactive)

***

### renderableGCFrequency

> **renderableGCFrequency**: `number`

Frames between two garbage collections.

#### Default

```ts
600
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`renderableGCFrequency`](rendering.WebGLOptions.html#renderablegcfrequency)

***

### renderableGCMaxUnusedTime

> **renderableGCMaxUnusedTime**: `number`

The maximum idle frames before a texture is destroyed by garbage collection.

#### Default

```ts
60 * 60
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`renderableGCMaxUnusedTime`](rendering.WebGLOptions.html#renderablegcmaxunusedtime)

***

### resolution?

> `optional` **resolution**: `number`

The resolution / device pixel ratio of the renderer.

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`resolution`](rendering.WebGLOptions.html#resolution)

***

### roundPixels?

> `optional` **roundPixels**: `boolean`

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`roundPixels`](rendering.WebGLOptions.html#roundpixels)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`skipExtensionImports`](rendering.WebGLOptions.html#skipextensionimports)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`textureGCActive`](rendering.WebGLOptions.html#texturegcactive)

***

### ~~textureGCAMaxIdle~~

> **textureGCAMaxIdle**: `number`

#### Deprecated

since 8.3.0

#### See

[TextureGCSystemOptions.textureGCMaxIdle](rendering.TextureGCSystemOptions.html#texturegcmaxidle)

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`textureGCAMaxIdle`](rendering.WebGLOptions.html#texturegcamaxidle)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`textureGCCheckCountMax`](rendering.WebGLOptions.html#texturegccheckcountmax)

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

[`WebGLOptions`](rendering.WebGLOptions.md).[`textureGCMaxIdle`](rendering.WebGLOptions.html#texturegcmaxidle)

***

### useBackBuffer?

> `optional` **useBackBuffer**: `boolean`

if true will use the back buffer where required

#### Default

```ts
false
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`useBackBuffer`](rendering.WebGLOptions.html#usebackbuffer)

***

### ~~view?~~

> `optional` **view**: [`ICanvas`](environment.ICanvas.md)

Alias for `canvas`.

#### Deprecated

since 8.0.0

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`view`](rendering.WebGLOptions.html#view)

***

### width?

> `optional` **width**: `number`

The width of the screen.

#### Default

```ts
800
```

#### Inherited from

[`WebGLOptions`](rendering.WebGLOptions.md).[`width`](rendering.WebGLOptions.html#width)
