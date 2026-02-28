# Interface: TickerPluginOptions

Application options for the [TickerPlugin](app.TickerPlugin.md).
These options control the animation loop and update cycle of your PixiJS application.

## Example

```ts
import { Application } from 'pixi.js';

// Basic setup with default options
const app = new Application();
await app.init({
    autoStart: true,     // Start animation loop automatically
    sharedTicker: false  // Use dedicated ticker instance
});

// Advanced setup with shared ticker
const app2 = new Application();
await app2.init({
    autoStart: false,    // Don't start automatically
    sharedTicker: true   // Use global shared ticker
});

// Start animation when ready
app2.start();
```

## Remarks

The ticker is the heart of your application's animation system. It:
- Manages the render loop
- Provides accurate timing information
- Handles frame-based updates
- Supports priority-based execution order

## See

 - [Ticker](ticker.Ticker.md) For detailed ticker functionality
 - [UPDATE\_PRIORITY](ticker.UPDATE_PRIORITY.md) For update priority constants

## Properties

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
