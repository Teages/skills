# Interface: SharedRendererOptions

**`Advanced`**

Options for the shared systems of a renderer.

## Extends

- `RendererOptions`

## Extended by

- [`CanvasOptions`](rendering.CanvasOptions.md)
- [`WebGLOptions`](rendering.WebGLOptions.md)
- [`WebGPUOptions`](rendering.WebGPUOptions.md)

## Properties

### antialias?

> `optional` **antialias**: `boolean`

Whether to enable anti-aliasing. This may affect performance.

#### Inherited from

`ExtractRendererOptions.antialias`

***

### autoDensity?

> `optional` **autoDensity**: `boolean`

Resizes renderer view in CSS pixels to allow for resolutions other than 1.

This is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas.

#### Inherited from

`ExtractRendererOptions.autoDensity`

***

### background?

> `optional` **background**: [`ColorSource`](color.ColorSource.md)

Alias for `backgroundColor`

#### Inherited from

`ExtractRendererOptions.background`

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

`ExtractRendererOptions.backgroundAlpha`

***

### backgroundColor

> **backgroundColor**: [`ColorSource`](color.ColorSource.md)

The background color used to clear the canvas. See [ColorSource](color.ColorSource.md) for accepted color values.

#### Default

```ts
'black'
```

#### Inherited from

`ExtractRendererOptions.backgroundColor`

***

### bezierSmoothness

> **bezierSmoothness**: `number`

A value from 0 to 1 that controls the smoothness of bezier curves (the higher the smoother)

#### Default

```ts
0.5
```

#### Inherited from

`PixiMixins.RendererOptions.bezierSmoothness`

***

### canvas?

> `optional` **canvas**: [`ICanvas`](environment.ICanvas.md)

The canvas to use as a view, optional.

#### Inherited from

`ExtractRendererOptions.canvas`

***

### clearBeforeRender?

> `optional` **clearBeforeRender**: `boolean`

Whether to clear the canvas before new render passes.

#### Default

```ts
true
```

#### Inherited from

`ExtractRendererOptions.clearBeforeRender`

***

### depth?

> `optional` **depth**: `boolean`

Whether to ensure the main view has can make use of the depth buffer. Always true for WebGL renderer.

#### Inherited from

`ExtractRendererOptions.depth`

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

`PixiMixins.RendererOptions.eventFeatures`

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

`PixiMixins.RendererOptions.eventMode`

***

### failIfMajorPerformanceCaveat?

> `optional` **failIfMajorPerformanceCaveat**: `boolean`

#### Inherited from

`PixiMixins.RendererOptions.failIfMajorPerformanceCaveat`

***

### gcActive

> **gcActive**: `boolean`

If set to true, this will enable the garbage collector.

#### Default

```ts
true
```

#### Inherited from

`ExtractRendererOptions.gcActive`

***

### gcFrequency

> **gcFrequency**: `number`

How frequently to run garbage collection in milliseconds.

#### Default

```ts
30000
```

#### Inherited from

`ExtractRendererOptions.gcFrequency`

***

### gcMaxUnusedTime

> **gcMaxUnusedTime**: `number`

The maximum time in milliseconds a resource can be unused before being garbage collected.

#### Default

```ts
60000
```

#### Inherited from

`ExtractRendererOptions.gcMaxUnusedTime`

***

### height?

> `optional` **height**: `number`

The height of the screen.

#### Default

```ts
600
```

#### Inherited from

`ExtractRendererOptions.height`

***

### hello

> **hello**: `boolean`

Whether to log the version and type information of renderer to console.

#### Default

```ts
false
```

#### Inherited from

`ExtractRendererOptions.hello`

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

***

### renderableGCActive

> **renderableGCActive**: `boolean`

If set to true, this will enable the garbage collector on the GPU.

#### Default

```ts
true
```

#### Inherited from

`ExtractRendererOptions.renderableGCActive`

***

### renderableGCFrequency

> **renderableGCFrequency**: `number`

Frames between two garbage collections.

#### Default

```ts
600
```

#### Inherited from

`ExtractRendererOptions.renderableGCFrequency`

***

### renderableGCMaxUnusedTime

> **renderableGCMaxUnusedTime**: `number`

The maximum idle frames before a texture is destroyed by garbage collection.

#### Default

```ts
60 * 60
```

#### Inherited from

`ExtractRendererOptions.renderableGCMaxUnusedTime`

***

### resolution?

> `optional` **resolution**: `number`

The resolution / device pixel ratio of the renderer.

#### Inherited from

`ExtractRendererOptions.resolution`

***

### roundPixels?

> `optional` **roundPixels**: `boolean`

#### Inherited from

`PixiMixins.RendererOptions.roundPixels`

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

`ExtractRendererOptions.textureGCActive`

***

### ~~textureGCAMaxIdle~~

> **textureGCAMaxIdle**: `number`

#### Deprecated

since 8.3.0

#### See

[TextureGCSystemOptions.textureGCMaxIdle](rendering.TextureGCSystemOptions.html#texturegcmaxidle)

#### Inherited from

`ExtractRendererOptions.textureGCAMaxIdle`

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

`ExtractRendererOptions.textureGCCheckCountMax`

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

`ExtractRendererOptions.textureGCMaxIdle`

***

### ~~view?~~

> `optional` **view**: [`ICanvas`](environment.ICanvas.md)

Alias for `canvas`.

#### Deprecated

since 8.0.0

#### Inherited from

`ExtractRendererOptions.view`

***

### width?

> `optional` **width**: `number`

The width of the screen.

#### Default

```ts
800
```

#### Inherited from

`ExtractRendererOptions.width`
