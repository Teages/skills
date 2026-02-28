# Class: Ticker

A Ticker class that runs an update loop that other objects listen to.
Used for managing animation frames and timing in a PixiJS application.

It provides a way to add listeners that will be called on each frame,
allowing for smooth animations and updates.

## Time Units
- `deltaTime`: Dimensionless scalar (typically ~1.0 at 60 FPS) for frame-independent animations
- `deltaMS`: Milliseconds elapsed (capped and speed-scaled) for time-based calculations
- `elapsedMS`: Raw milliseconds elapsed (uncapped, unscaled) for measurements
- `lastTime`: Timestamp in milliseconds since epoch (performance.now() format)

Animation frames are requested
only when necessary, e.g., when the ticker is started and the emitter has listeners.

## Example

```ts
// Basic ticker usage with different time units
const ticker = new Ticker();
ticker.add((ticker) => {
    // Frame-independent animation using dimensionless deltaTime
    sprite.rotation += 0.1 * ticker.deltaTime;

    // Time-based animation using deltaMS (milliseconds)
    sprite.x += (100 / 1000) * ticker.deltaMS; // 100 pixels per second
});
ticker.start();

// Control update priority
ticker.add(
    (ticker) => {
        // High priority updates run first
        physics.update(ticker.deltaTime);
    },
    undefined,
    UPDATE_PRIORITY.HIGH
);

// One-time updates
ticker.addOnce(() => {
    console.log('Runs on next frame only');
});
```

## See

 - [TickerPlugin](app.TickerPlugin.md) For use with Application
 - [UPDATE\_PRIORITY](ticker.UPDATE_PRIORITY.md) For priority constants
 - [TickerCallback](ticker.TickerCallback.md) For listener function type

## Constructors

### Constructor

> **new Ticker**(): `Ticker`

#### Returns

`Ticker`

## Properties

### autoStart

> **autoStart**: `boolean` = `false`

Whether or not this ticker should invoke the method [start](#start)
automatically when a listener is added.

#### Example

```ts
// Default behavior (manual start)
const ticker = new Ticker();
ticker.autoStart = false;
ticker.add(() => {
    // Won't run until ticker.start() is called
});

// Auto-start behavior
const autoTicker = new Ticker();
autoTicker.autoStart = true;
autoTicker.add(() => {
    // Runs immediately when added
});
```

#### Default

```ts
false
```

#### See

 - [Ticker#start](#start) For manually starting the ticker
 - [Ticker#stop](#stop) For manually stopping the ticker

***

### deltaMS

> **deltaMS**: `number`

Scalar time elapsed in milliseconds from last frame to this frame.
Provides precise timing for animations and updates.

This value is capped by setting [minFPS](#minfps)
and is scaled with [speed](#speed).

If the platform supports DOMHighResTimeStamp,
this value will have a precision of 1 µs.

Defaults to target frame time

> [!NOTE] The cap may be exceeded by scaling.

#### Example

```ts
// Animation timing
ticker.add((ticker) => {
    // Use millisecond timing for precise animations
    const progress = (ticker.deltaMS / animationDuration);
    sprite.alpha = Math.min(1, progress);
});
```

#### Default

```ts
16.66
```

***

### deltaTime

> **deltaTime**: `number` = `1`

Scalar representing the delta time factor.
This is a dimensionless value representing the fraction of a frame at the target framerate.
At 60 FPS, this value is typically around 1.0.

This is NOT in milliseconds - it's a scalar multiplier for frame-independent animations.
For actual milliseconds, use [Ticker#deltaMS](#deltams).

#### Example

```ts
// Frame-independent animation using deltaTime scalar
ticker.add((ticker) => {
    // Rotate sprite by 0.1 radians per frame, scaled by deltaTime
    sprite.rotation += 0.1 * ticker.deltaTime;
});
```

***

### elapsedMS

> **elapsedMS**: `number`

Time elapsed in milliseconds from the last frame to this frame.
This value is not capped or scaled and provides raw timing information.

Unlike [Ticker#deltaMS](#deltams), this value is unmodified by speed scaling or FPS capping.

#### Example

```ts
ticker.add((ticker) => {
    console.log(`Raw frame time: ${ticker.elapsedMS}ms`);
});
```

***

### lastTime

> **lastTime**: `number` = `-1`

The last time update was invoked, in milliseconds since epoch.
Similar to performance.now() timestamp format.

Used internally for calculating time deltas between frames.

#### Example

```ts
ticker.add((ticker) => {
    const currentTime = performance.now();
    const timeSinceLastFrame = currentTime - ticker.lastTime;
    console.log(`Time since last frame: ${timeSinceLastFrame}ms`);
});
```

***

### speed

> **speed**: `number` = `1`

Factor of current [deltaTime](#deltatime).
Used to scale time for slow motion or fast-forward effects.

#### Example

```ts
// Basic speed adjustment
ticker.speed = 0.5; // Half speed (slow motion)
ticker.speed = 2.0; // Double speed (fast forward)

// Temporary speed changes
function slowMotion() {
    const normalSpeed = ticker.speed;
    ticker.speed = 0.2;
    setTimeout(() => {
        ticker.speed = normalSpeed;
    }, 1000);
}
```

***

### started

> **started**: `boolean` = `false`

Whether or not this ticker has been started.

`true` if [start](#start) has been called.
`false` if [Stop](#stop) has been called.

While `false`, this value may change to `true` in the
event of [autoStart](#autostart) being `true`
and a listener is added.

#### Example

```ts
// Check ticker state
const ticker = new Ticker();
console.log(ticker.started); // false

// Start and verify
ticker.start();
console.log(ticker.started); // true
```

***

### targetFPMS

> `static` **targetFPMS**: `number` = `0.06`

Target frame rate in frames per millisecond.
Used for converting deltaTime to a scalar time delta.

#### Example

```ts
// Default is 0.06 (60 FPS)
console.log(Ticker.targetFPMS); // 0.06

// Calculate target frame duration
const frameDuration = 1 / Ticker.targetFPMS; // ≈ 16.67ms

// Use in custom timing calculations
const deltaTime = elapsedMS * Ticker.targetFPMS;
```

#### Remarks

- Default is 0.06 (equivalent to 60 FPS)
- Used in deltaTime calculations
- Affects all ticker instances

#### Default

```ts
0.06
```

#### See

 - [Ticker#deltaTime](#deltatime) For time scaling
 - [Ticker#FPS](#fps) For actual frame rate

## Accessors

### count

#### Get Signature

> **get** **count**(): `number`

The number of listeners on this ticker, calculated by walking through linked list.

##### Example

```ts
// Check number of active listeners
const ticker = new Ticker();
console.log(ticker.count); // 0

// Add some listeners
ticker.add(() => {});
ticker.add(() => {});
console.log(ticker.count); // 2

// Check after cleanup
ticker.destroy();
console.log(ticker.count); // 0
```

##### See

 - [Ticker#add](#add) For adding listeners
 - [Ticker#remove](#remove) For removing listeners

##### Returns

`number`

***

### FPS

#### Get Signature

> **get** **FPS**(): `number`

The frames per second at which this ticker is running.
The default is approximately 60 in most modern browsers.
> [!NOTE] This does not factor in the value of
> [speed](#speed), which is specific
> to scaling [deltaTime](#deltatime).

##### Example

```ts
// Basic FPS monitoring
ticker.add(() => {
    console.log(`Current FPS: ${Math.round(ticker.FPS)}`);
});
```

##### Returns

`number`

***

### maxFPS

#### Get Signature

> **get** **maxFPS**(): `number`

Manages the minimum amount of milliseconds required to
elapse between invoking [update](#update).

This will effect the measured value of [FPS](#fps).

If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
Otherwise it will be at least `minFPS`

##### Example

```ts
// Set minimum acceptable frame rate
const ticker = new Ticker();
ticker.maxFPS = 60; // Never go above 60 FPS

// Use with maxFPS for frame rate clamping
ticker.minFPS = 30;
ticker.maxFPS = 60;

// Monitor delta capping
ticker.add(() => {
    // Delta time will be capped based on maxFPS
    console.log(`Delta time: ${ticker.deltaTime}`);
});
```

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **maxFPS**(`fps`): `void`

##### Parameters

###### fps

`number`

##### Returns

`void`

***

### minFPS

#### Get Signature

> **get** **minFPS**(): `number`

Manages the maximum amount of milliseconds allowed to
elapse between invoking [update](#update).

This value is used to cap [deltaTime](#deltatime),
but does not effect the measured value of [FPS](#fps).

When setting this property it is clamped to a value between
`0` and `Ticker.targetFPMS * 1000`.

##### Example

```ts
// Set minimum acceptable frame rate
const ticker = new Ticker();
ticker.minFPS = 30; // Never go below 30 FPS

// Use with maxFPS for frame rate clamping
ticker.minFPS = 30;
ticker.maxFPS = 60;

// Monitor delta capping
ticker.add(() => {
    // Delta time will be capped based on minFPS
    console.log(`Delta time: ${ticker.deltaTime}`);
});
```

##### Default

```ts
10
```

##### Returns

`number`

#### Set Signature

> **set** **minFPS**(`fps`): `void`

##### Parameters

###### fps

`number`

##### Returns

`void`

***

### shared

#### Get Signature

> **get** `static` **shared**(): `Ticker`

The shared ticker instance used by [AnimatedSprite](scene.AnimatedSprite.md) and by
[VideoSource](rendering.VideoSource.md) to update animation frames / video textures.

It may also be used by [Application](app.Application.md) if created with the `sharedTicker` option property set to true.

The property [autoStart](#autostart) is set to `true` for this instance.
Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.

##### Examples

```ts
import { Ticker } from 'pixi.js';

const ticker = Ticker.shared;
// Set this to prevent starting this ticker when listeners are added.
// By default this is true only for the Ticker.shared instance.
ticker.autoStart = false;

// FYI, call this to ensure the ticker is stopped. It should be stopped
// if you have not attempted to render anything yet.
ticker.stop();

// Call this when you are ready for a running shared ticker.
ticker.start();
```

```ts
import { autoDetectRenderer, Container } from 'pixi.js';

// You may use the shared ticker to render...
const renderer = autoDetectRenderer();
const stage = new Container();
document.body.appendChild(renderer.view);
ticker.add((time) => renderer.render(stage));

// Or you can just update it manually.
ticker.autoStart = false;
ticker.stop();
const animate = (time) => {
    ticker.update(time);
    renderer.render(stage);
    requestAnimationFrame(animate);
};
animate(performance.now());
```

##### Returns

`Ticker`

***

### system

#### Get Signature

> **get** `static` **system**(): `Ticker`

**`Advanced`**

The system ticker instance used by [PrepareBase](rendering.PrepareBase.md) for core timing
functionality that shouldn't usually need to be paused, unlike the `shared`
ticker which drives visual animations and rendering which may want to be paused.

The property [autoStart](#autostart) is set to `true` for this instance.

##### Returns

`Ticker`

## Methods

### add()

> **add**\<`T`\>(`fn`, `context?`, `priority?`): `this`

Register a handler for tick events.

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### fn

[`TickerCallback`](ticker.TickerCallback.md)\<`T`\>

The listener function to add. Receives the Ticker instance as parameter

##### context?

`T`

The context for the listener

##### priority?

`number` = `UPDATE_PRIORITY.NORMAL`

The priority of the listener

#### Returns

`this`

#### Example

```ts
// Access time properties through the ticker parameter
ticker.add((ticker) => {
    // Use deltaTime (dimensionless scalar) for frame-independent animations
    sprite.rotation += 0.1 * ticker.deltaTime;

    // Use deltaMS (milliseconds) for time-based calculations
    const progress = ticker.deltaMS / animationDuration;

    // Use elapsedMS for raw timing measurements
    console.log(`Raw frame time: ${ticker.elapsedMS}ms`);
});
```

***

### addOnce()

> **addOnce**\<`T`\>(`fn`, `context?`, `priority?`): `this`

Add a handler for the tick event which is only executed once on the next frame.

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### fn

[`TickerCallback`](ticker.TickerCallback.md)\<`T`\>

The listener function to be added for one update

##### context?

`T`

The listener context

##### priority?

`number` = `UPDATE_PRIORITY.NORMAL`

The priority for emitting (default: UPDATE_PRIORITY.NORMAL)

#### Returns

`this`

This instance of a ticker

#### Example

```ts
// Basic one-time update
ticker.addOnce(() => {
    console.log('Runs next frame only');
});

// With specific context
const game = {
    init(ticker) {
        this.loadResources();
        console.log('Game initialized');
    }
};
ticker.addOnce(game.init, game);

// With priority
ticker.addOnce(
    () => {
        // High priority one-time setup
        physics.init();
    },
    undefined,
    UPDATE_PRIORITY.HIGH
);
```

#### See

 - [Ticker#add](#add) For continuous updates
 - [Ticker#remove](#remove) For removing handlers

***

### destroy()

> **destroy**(): `void`

Destroy the ticker and don't use after this. Calling this method removes all references to internal events.

#### Returns

`void`

#### Example

```ts
// Clean up with active listeners
const ticker = new Ticker();
ticker.add(() => {});
ticker.destroy(); // Removes all listeners
```

#### See

 - [Ticker#stop](#stop) For stopping without destroying
 - [Ticker#remove](#remove) For removing specific listeners

***

### remove()

> **remove**\<`T`\>(`fn`, `context?`): `this`

Removes any handlers matching the function and context parameters.
If no handlers are left after removing, then it cancels the animation frame.

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### fn

[`TickerCallback`](ticker.TickerCallback.md)\<`T`\>

The listener function to be removed

##### context?

`T`

The listener context to be removed

#### Returns

`this`

This instance of a ticker

#### Example

```ts
// Basic removal
const onTick = () => {
    sprite.rotation += 0.1;
};
ticker.add(onTick);
ticker.remove(onTick);

// Remove with context
const game = {
    update(ticker) {
        this.physics.update(ticker.deltaTime);
    }
};
ticker.add(game.update, game);
ticker.remove(game.update, game);

// Remove all matching handlers
// (if same function was added multiple times)
ticker.add(onTick);
ticker.add(onTick);
ticker.remove(onTick); // Removes all instances
```

#### See

 - [Ticker#add](#add) For adding handlers
 - [Ticker#addOnce](#addonce) For one-time handlers

***

### start()

> **start**(): `void`

Starts the ticker. If the ticker has listeners a new animation frame is requested at this point.

#### Returns

`void`

#### Example

```ts
// Basic manual start
const ticker = new Ticker();
ticker.add(() => {
    // Animation code here
});
ticker.start();
```

#### See

 - [Ticker#stop](#stop) For stopping the ticker
 - [Ticker#autoStart](#autostart) For automatic starting
 - [Ticker#started](#started) For checking ticker state

***

### stop()

> **stop**(): `void`

Stops the ticker. If the ticker has requested an animation frame it is canceled at this point.

#### Returns

`void`

#### Example

```ts
// Basic stop
const ticker = new Ticker();
ticker.stop();
```

#### See

 - [Ticker#start](#start) For starting the ticker
 - [Ticker#started](#started) For checking ticker state
 - [Ticker#destroy](#destroy) For cleaning up the ticker

***

### update()

> **update**(`currentTime`): `void`

Triggers an update.

An update entails setting the
current [elapsedMS](#elapsedms),
the current [deltaTime](#deltatime),
invoking all listeners with current deltaTime,
and then finally setting [lastTime](#lasttime)
with the value of currentTime that was provided.

This method will be called automatically by animation
frame callbacks if the ticker instance has been started
and listeners are added.

#### Parameters

##### currentTime

`number` = `...`

The current time of execution (defaults to performance.now())

#### Returns

`void`

#### Example

```ts
// Basic manual update
const ticker = new Ticker();
ticker.update(performance.now());
```

#### See

 - [Ticker#deltaTime](#deltatime) For frame delta value
 - [Ticker#elapsedMS](#elapsedms) For raw elapsed time
