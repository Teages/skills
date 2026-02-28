# Class: Application\<R\>

Convenience class to create a new PixiJS application.

The Application class is the main entry point for creating a PixiJS application. It handles the setup of all core
components needed to start rendering and managing your game or interactive experience.

Key features:
- Automatically creates and manages the renderer
- Provides a stage (root container) for your display objects
- Handles canvas creation and management
- Supports plugins for extending functionality
  - [ResizePlugin](app.ResizePlugin.md) for automatic resizing
  - [TickerPlugin](app.TickerPlugin.md) for managing frame updates
  - [CullerPlugin](app.CullerPlugin.md) for culling off-screen objects

## Example

```js
import { Assets, Application, Sprite } from 'pixi.js';

// Create a new application
const app = new Application();

// Initialize with options
await app.init({
    width: 800,           // Canvas width
    height: 600,          // Canvas height
    backgroundColor: 0x1099bb, // Background color
    antialias: true,     // Enable antialiasing
    resolution: 1,       // Resolution / device pixel ratio
    preference: 'webgl', // or 'webgpu' // Renderer preference
});

// Add the canvas to your webpage
document.body.appendChild(app.canvas);

// Start adding content to your application
const texture = await Assets.load('your-image.png');
const sprite = new Sprite(texture);
app.stage.addChild(sprite);
```
> [!IMPORTANT] From PixiJS v8.0.0, the application must be initialized using the async `init()` method
> rather than passing options to the constructor.

## See

 - [ApplicationOptions](app.ApplicationOptions.md) For all available initialization options
 - [Container](scene.Container.md) For information about the stage container
 - [Renderer](rendering.Renderer.md) For details about the rendering system

## Extends

- `Application`

## Type Parameters

### R

`R` *extends* [`Renderer`](rendering.Renderer.md) = [`Renderer`](rendering.Renderer.md)

## Constructors

### Constructor

> **new Application**\<`R`\>(): `Application`\<`R`\>

Create new Application instance

#### Returns

`Application`\<`R`\>

#### Inherited from

`PixiMixins.Application.constructor`

### Constructor

> **new Application**\<`R`\>(`options?`): `Application`\<`R`\>

#### Parameters

##### options?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApplicationOptions`](app.ApplicationOptions.md)\>

#### Returns

`Application`\<`R`\>

#### Deprecated

since 8.0.0

#### Inherited from

`PixiMixins.Application.constructor`

## Properties

### renderer

> **renderer**: `R`

The renderer instance that handles all drawing operations.

Unless specified, it will automatically create a WebGL renderer if available.
If WebGPU is available and the `preference` is set to `webgpu`, it will create a WebGPU renderer.

#### Example

```js
// Create a new application
const app = new Application();
await app.init({
    width: 800,
    height: 600,
    preference: 'webgl', // or 'webgpu'
});

// Access renderer properties
console.log(app.renderer.width, app.renderer.height);
```

***

### resizeTo

> **resizeTo**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| [`Window`](https://developer.mozilla.org/docs/Web/API/Window)

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

`PixiMixins.Application.resizeTo`

***

### stage

> **stage**: [`Container`](scene.Container.md)

The root display container for your application.
All visual elements should be added to this container or its children.

#### Example

```js
// Create a sprite and add it to the stage
const sprite = Sprite.from('image.png');
app.stage.addChild(sprite);

// Create a container for grouping objects
const container = new Container();
app.stage.addChild(container);
```

***

### ticker

> **ticker**: [`Ticker`](ticker.Ticker.md)

The application's ticker instance that manages the update/render loop.

#### Example

```ts
// Basic animation
app.ticker.add((ticker) => {
    sprite.rotation += 0.1 * ticker.deltaTime;
});

// Control update priority
app.ticker.add(
    (ticker) => {
        // Physics update (runs first)
    },
    undefined,
    UPDATE_PRIORITY.HIGH
);

// One-time update
app.ticker.addOnce(() => {
    console.log('Runs next frame only');
});

// Access timing info
console.log(app.ticker.FPS);      // Current FPS
console.log(app.ticker.deltaTime); // Scaled time delta
console.log(app.ticker.deltaMS);   // MS since last update
```

#### See

 - [Ticker](ticker.Ticker.md) For detailed ticker functionality
 - [UPDATE\_PRIORITY](ticker.UPDATE_PRIORITY.md) For priority constants

#### Inherited from

`PixiMixins.Application.ticker`

## Accessors

### canvas

#### Get Signature

> **get** **canvas**(): `R`\[`"canvas"`\]

Reference to the renderer's canvas element. This is the HTML element
that displays your application's graphics.

##### Example

```js
// Create a new application
const app = new Application();
// Initialize the application
await app.init({...});
// Add canvas to the page
document.body.appendChild(app.canvas);

// Access the canvas directly
console.log(app.canvas); // HTMLCanvasElement
```

##### Returns

`R`\[`"canvas"`\]

***

### screen

#### Get Signature

> **get** **screen**(): [`Rectangle`](maths.Rectangle.md)

Reference to the renderer's screen rectangle. This represents the visible area of your application.

It's commonly used for:
- Setting filter areas for full-screen effects
- Defining hit areas for screen-wide interaction
- Determining the visible bounds of your application

##### Example

```js
// Use as filter area for a full-screen effect
const blurFilter = new BlurFilter();
sprite.filterArea = app.screen;

// Use as hit area for screen-wide interaction
const screenSprite = new Sprite();
screenSprite.hitArea = app.screen;

// Get screen dimensions
console.log(app.screen.width, app.screen.height);
```

##### See

[Rectangle](maths.Rectangle.md) For all available properties and methods

##### Returns

[`Rectangle`](maths.Rectangle.md)

***

### view

#### Get Signature

> **get** **view**(): `R`\[`"canvas"`\]

Reference to the renderer's canvas element.

##### Deprecated

since 8.0.0

##### See

[Application#canvas](#canvas)

##### Returns

`R`\[`"canvas"`\]

## Methods

### cancelResize()

> **cancelResize**(): `void`

Cancel any pending resize operation that was queued with `queueResize()`.

#### Returns

`void`

#### Remarks

- Clears the resize operation queued for next frame

#### Example

```ts
// Queue a resize
app.queueResize();

// Cancel if needed
app.cancelResize();
```

#### Inherited from

`PixiMixins.Application.cancelResize`

***

### destroy()

> **destroy**(`rendererDestroyOptions`, `options`): `void`

Destroys the application and all of its resources.

This method should be called when you want to completely
clean up the application and free all associated memory.

#### Parameters

##### rendererDestroyOptions

[`RendererDestroyOptions`](rendering.RendererDestroyOptions.md) = `false`

Options for destroying the renderer:
 - `false` or `undefined`: Preserves the canvas element (default)
 - `true`: Removes the canvas element
 - `{ removeView: boolean }`: Object with removeView property to control canvas removal

##### options

[`DestroyOptions`](scene.DestroyOptions.md) = `false`

Options for destroying the application:
 - `false` or `undefined`: Basic cleanup (default)
 - `true`: Complete cleanup including children
 - Detailed options object:
   - `children`: Remove children
   - `texture`: Destroy textures
   - `textureSource`: Destroy texture sources
   - `context`: Destroy WebGL context

#### Returns

`void`

#### Example

```js
// Basic cleanup
app.destroy();

// Remove canvas and do complete cleanup
app.destroy(true, true);

// Remove canvas with explicit options
app.destroy({ removeView: true }, true);

// Detailed cleanup with specific options
app.destroy(
    { removeView: true },
    {
        children: true,
        texture: true,
        textureSource: true,
        context: true
    }
);
```
> [!WARNING] After calling destroy, the application instance should no longer be used.
> All properties will be null and further operations will throw errors.

***

### init()

> **init**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Initializes the PixiJS application with the specified options.

This method must be called after creating a new Application instance.

#### Parameters

##### options?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApplicationOptions`](app.ApplicationOptions.md)\>

Configuration options for the application and renderer

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when initialization is complete

#### Example

```js
const app = new Application();

// Initialize with custom options
await app.init({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
    preference: 'webgl', // or 'webgpu'
});
```

***

### queueResize()

> **queueResize**(): `void`

Queue a resize operation for the next animation frame. This method is throttled
and optimized for frequent calls.
> [!IMPORTANT]
> You do not need to call this method manually in most cases.
> A `resize` event will be dispatched automatically when the `resizeTo` element changes size.

#### Returns

`void`

#### Remarks

- Safe to call multiple times per frame
- Only one resize will occur on next frame
- Cancels any previously queued resize

#### Example

```ts
app.queueResize(); // Queue for next frame
```

#### Inherited from

`PixiMixins.Application.queueResize`

***

### render()

> **render**(): `void`

Renders the current stage to the screen.

When using the default setup with [TickerPlugin](app.TickerPlugin.md) (enabled by default), you typically don't need to call
this method directly as rendering is handled automatically.

Only use this method if you've disabled the [TickerPlugin](app.TickerPlugin.md) or need custom
render timing control.

#### Returns

`void`

#### Example

```js
// Example 1: Default setup (TickerPlugin handles rendering)
const app = new Application();
await app.init();
// No need to call render() - TickerPlugin handles it

// Example 2: Custom rendering loop (if TickerPlugin is disabled)
const app = new Application();
await app.init({ autoStart: false }); // Disable automatic rendering

function animate() {
    app.render();
    requestAnimationFrame(animate);
}
animate();
```

***

### resize()

> **resize**(): `void`

Element to automatically resize the renderer to.
> [!IMPORTANT]
> You do not need to call this method manually in most cases.
> A `resize` event will be dispatched automatically when the `resizeTo` element changes size.

#### Returns

`void`

#### Remarks

- Automatically resizes the renderer to match the size of the `resizeTo` element
- If `resizeTo` is `null`, auto-resizing is disabled
- If `resizeTo` is a `Window`, it resizes to the full window size
- If `resizeTo` is an `HTMLElement`, it resizes to the element's bounding client rectangle

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

// Manually trigger a resize
app.resize();
```

#### Default

```ts
null
```

#### Inherited from

`PixiMixins.Application.resize`

***

### start()

> **start**(): `void`

Starts the render/update loop.

#### Returns

`void`

#### Example

```ts
// Initialize without auto-start
await app.init({ autoStart: false });

// Start when ready
app.start();
```

#### Inherited from

`PixiMixins.Application.start`

***

### stop()

> **stop**(): `void`

Stops the render/update loop.

#### Returns

`void`

#### Example

```ts
// Stop the application
app.stop();
// ... custom update logic ...
app.render(); // Manual render
```

#### Inherited from

`PixiMixins.Application.stop`
