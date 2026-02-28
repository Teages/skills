# Interface: EventSystemFeatures

**`Advanced`**

The event features that are enabled by the EventSystem. These features control
different types of interaction events in your PixiJS application.

## Example

```ts
// Configure features during application initialization
const app = new Application();
await app.init({
    eventFeatures: {
        // Basic interaction events
        move: true,        // Enable pointer movement tracking
        click: true,       // Enable click/tap events
        wheel: true,       // Enable mouse wheel/scroll events
        // Advanced features
        globalMove: false  // Disable global move tracking for performance
    }
});

// Or configure after initialization
app.renderer.events.features.move = false;      // Disable movement events
app.renderer.events.features.globalMove = true; // Enable global tracking
```

## Since

7.2.0

## Properties

### click

> **click**: `boolean`

Enables pointer events associated with clicking/tapping.

When enabled, these events will fire:
- `pointerdown` / `mousedown` / `touchstart` / `rightdown`
- `pointerup` / `mouseup` / `touchend` / `rightup`
- `pointerupoutside` / `mouseupoutside` / `touchendoutside` / `rightupoutside`
- `click` / `tap`

#### Example

```ts
// Enable click events
app.renderer.events.features.click = true;

// Handle clicks
sprite.on('click', (event) => {
    console.log('Clicked at:', event.global.x, event.global.y);
});
```

#### Default

```ts
true
```

***

### globalMove

> **globalMove**: `boolean`

Enables global pointer move events that fire regardless of target.

When enabled, these events will fire:
- `globalpointermove`
- `globalmousemove`
- `globaltouchmove`

#### Example

```ts
// Enable global tracking
app.renderer.events.features.globalMove = true;

// Track pointer globally
sprite.on('globalpointermove', (event) => {
    // Fires even when pointer is not over sprite
    console.log('Global position:', event.global.x, event.global.y);
});
```

#### Default

```ts
true
```

***

### move

> **move**: `boolean`

Enables pointer events associated with pointer movement.

When enabled, these events will fire:
- `pointermove` / `mousemove` / `touchmove`
- `pointerout` / `mouseout`
- `pointerover` / `mouseover`

#### Example

```ts
// Enable movement events
app.renderer.events.features.move = true;

// Listen for movement
sprite.on('pointermove', (event) => {
    console.log('Pointer position:', event.global.x, event.global.y);
});
```

#### Default

```ts
true
```

***

### wheel

> **wheel**: `boolean`

Enables mouse wheel/scroll events.

#### Example

```ts
// Enable wheel events
app.renderer.events.features.wheel = true;

// Handle scrolling
sprite.on('wheel', (event) => {
    // Zoom based on scroll direction
    const scale = 1 + (event.deltaY / 1000);
    sprite.scale.set(sprite.scale.x * scale);
});
```

#### Default

```ts
true
```
