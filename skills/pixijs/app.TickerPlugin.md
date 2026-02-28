# Class: TickerPlugin

Middleware for Application's [Ticker](ticker.Ticker.md) functionality. This plugin manages the
animation loop and update cycle of your PixiJS application.

Adds the following features to [Application](app.Application.md):
- `ticker`: Access to the application's ticker
- `start`: Start the animation loop
- `stop`: Stop the animation loop

## Example

```ts
import { Application, TickerPlugin, extensions } from 'pixi.js';

// Create application
const app = new Application();

// Example 1: Basic ticker usage (default autoStart)
await app.init({ autoStart: true });      // Starts ticker automatically

// Example 2: Manual ticker control
await app.init({ autoStart: false });     // Don't start automatically
app.start();                              // Start manually
app.stop();                               // Stop manually

// Example 3: Add custom update logic
app.ticker.add((ticker) => {
    // Run every frame, delta is the time since last update
    sprite.rotation += 0.1 * ticker.deltaTime;
});

// Example 4: Control update priority
import { UPDATE_PRIORITY } from 'pixi.js';

app.ticker.add(
    (ticker) => {
        // Run before normal priority updates
    },
    null,
    UPDATE_PRIORITY.HIGH
);

// Example 5: One-time update
app.ticker.addOnce(() => {
    console.log('Runs next frame only');
});
```

## See

 - [Ticker](ticker.Ticker.md) For detailed ticker functionality
 - [UPDATE\_PRIORITY](ticker.UPDATE_PRIORITY.md) For priority constants

## Constructors

### Constructor

> **new TickerPlugin**(): `TickerPlugin`

#### Returns

`TickerPlugin`
