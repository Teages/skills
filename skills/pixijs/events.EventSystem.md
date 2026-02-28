# Class: EventSystem

The system for handling UI events in PixiJS applications. This class manages mouse, touch, and pointer events,
normalizing them into a consistent event model.

## Example

```ts
// Access event system through renderer
const eventSystem = app.renderer.events;

// Configure event features
eventSystem.features.globalMove = false;  // Disable global move events
eventSystem.features.click = true;        // Enable click events

// Set custom cursor styles
eventSystem.cursorStyles.default = 'pointer';
eventSystem.cursorStyles.grab = 'grab';

// Get current pointer position
const pointer = eventSystem.pointer;
console.log(pointer.global.x, pointer.global.y);
```

Features:
- Normalizes browser events into consistent format
- Supports mouse, touch, and pointer events
- Handles event delegation and bubbling
- Provides cursor management
- Configurable event features

## See

 - [EventBoundary](events.EventBoundary.md) For event propagation and handling
 - [FederatedEvent](events.FederatedEvent.md) For the base event class
 - [EventMode](events.EventMode.md) For interaction modes

## Implements

- [`System`](rendering.System.md)\<[`EventSystemOptions`](events.EventSystemOptions.md)\>

## Constructors

### Constructor

> **new EventSystem**(`renderer`): `EventSystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

#### Returns

`EventSystem`

## Properties

### autoPreventDefault

> **autoPreventDefault**: `boolean`

Controls whether default browser actions are automatically prevented on pointer events.
When true, prevents default browser actions from occurring on pointer events.

#### Remarks

- Does not apply to pointer events for backwards compatibility
- preventDefault on pointer events stops mouse events from firing
- For every pointer event, there will always be either a mouse or touch event alongside it
- Setting this to false allows default browser actions (text selection, dragging images, etc.)

#### Example

```ts
// Allow default browser actions
app.renderer.events.autoPreventDefault = false;

// Block default actions (default)
app.renderer.events.autoPreventDefault = true;

// Example with text selection
const text = new Text('Selectable text');
text.eventMode = 'static';
app.renderer.events.autoPreventDefault = false; // Allow text selection
```

#### Default

```ts
true
```

***

### cursorStyles

> **cursorStyles**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| (`mode`) => `void` \| [`CSSStyleDeclaration`](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration)\>

Dictionary of custom cursor styles that can be used across the application.
Used to define how different cursor modes are handled when interacting with display objects.

#### Example

```ts
// Access event system through renderer
const eventSystem = app.renderer.events;

// Set string-based cursor styles
eventSystem.cursorStyles.default = 'pointer';
eventSystem.cursorStyles.hover = 'grab';
eventSystem.cursorStyles.drag = 'grabbing';

// Use CSS object for complex styling
eventSystem.cursorStyles.custom = {
    cursor: 'url("custom.png") 2 2, auto',
    userSelect: 'none'
};

// Use a url for custom cursors
const defaultIcon = 'url(\'https://pixijs.com/assets/bunny.png\'),auto';
eventSystem.cursorStyles.icon = defaultIcon;

// Use callback function for dynamic cursors
eventSystem.cursorStyles.dynamic = (mode) => {
    // Update cursor based on mode
    document.body.style.cursor = mode === 'hover'
        ? 'pointer'
        : 'default';
};

// Apply cursor style to a sprite
sprite.cursor = 'hover'; // Will use the hover style defined above
sprite.cursor = 'icon'; // Will apply the icon cursor
sprite.cursor = 'custom'; // Will apply the custom CSS styles
sprite.cursor = 'drag'; // Will apply the grabbing cursor
sprite.cursor = 'default'; // Will apply the default pointer cursor
sprite.cursor = 'dynamic'; // Will call the dynamic function
```

#### Remarks

- Strings are treated as CSS cursor values
- Objects are applied as CSS styles to the DOM element
- Functions are called directly for custom cursor handling
- Default styles for 'default' and 'pointer' are provided

#### Default

```ts
{
    default: 'inherit',
    pointer: 'pointer' // Default cursor styles
}
```

***

### domElement

> **domElement**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) = `null`

The DOM element to which the root event listeners are bound. This is automatically set to
the renderer's [view](rendering.AbstractRenderer.html#view).

***

### features

> `readonly` **features**: [`EventSystemFeatures`](events.EventSystemFeatures.md)

The event features that are enabled by the EventSystem

#### Since

7.2.0

#### Example

```ts
const app = new Application()
app.renderer.events.features.globalMove = false

// to override all features use Object.assign
Object.assign(app.renderer.events.features, {
 move: false,
 globalMove: false,
 click: false,
 wheel: false,
})
```

***

### renderer

> **renderer**: [`Renderer`](rendering.Renderer.md)

The renderer managing this EventSystem.

***

### resolution

> **resolution**: `number` = `1`

The resolution used to convert between the DOM client space into world space.

***

### rootBoundary

> `readonly` **rootBoundary**: [`EventBoundary`](events.EventBoundary.md)

**`Advanced`**

The [EventBoundary](events.EventBoundary.md) for the stage.

The [rootTarget](events.EventBoundary.html#roottarget) of this root boundary is automatically set to
the last rendered object before any event processing is initiated. This means the main scene
needs to be rendered atleast once before UI events will start propagating.

The root boundary should only be changed during initialization. Otherwise, any state held by the
event boundary may be lost (like hovered & pressed Containers).

***

### supportsPointerEvents

> `readonly` **supportsPointerEvents**: `boolean` = `!!globalThis.PointerEvent`

Indicates whether the current device supports pointer events according to the W3C Pointer Events spec.
Used to optimize event handling and provide more consistent cross-device interaction.

#### See

[https://www.w3.org/TR/pointerevents/](https://www.w3.org/TR/pointerevents/) W3C Pointer Events Specification

#### Default

```ts
!!globalThis.PointerEvent
```

***

### supportsTouchEvents

> `readonly` **supportsTouchEvents**: `boolean`

Indicates whether the current device supports touch events according to the W3C Touch Events spec.
This is used to determine the appropriate event handling strategy.

#### See

[https://www.w3.org/TR/touch-events/](https://www.w3.org/TR/touch-events/) W3C Touch Events Specification

#### Default

```ts
'ontouchstart' in globalThis
```

***

### defaultEventFeatures

> `static` **defaultEventFeatures**: [`EventSystemFeatures`](events.EventSystemFeatures.md)

The event features that are enabled by the EventSystem

#### Since

7.2.0

#### Example

```ts
import { EventSystem, EventSystemFeatures } from 'pixi.js';
// Access the default event features
EventSystem.defaultEventFeatures = {
    // Enable pointer movement events
    move: true,
    // Enable global pointer move events
    globalMove: true,
    // Enable click events
    click: true,
    // Enable wheel events
    wheel: true,
};
```

## Accessors

### pointer

#### Get Signature

> **get** **pointer**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

The global pointer event instance containing the most recent pointer state.
This is useful for accessing pointer information without listening to events.

##### Example

```ts
// Access current pointer position at any time
const eventSystem = app.renderer.events;
const pointer = eventSystem.pointer;

// Get global coordinates
console.log('Position:', pointer.global.x, pointer.global.y);

// Check button state
console.log('Buttons pressed:', pointer.buttons);

// Get pointer type and pressure
console.log('Type:', pointer.pointerType);
console.log('Pressure:', pointer.pressure);
```

##### Since

7.2.0

##### See

[FederatedPointerEvent](events.FederatedPointerEvent.md) For all available pointer properties

##### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

***

### defaultEventMode

#### Get Signature

> **get** `static` **defaultEventMode**(): [`EventMode`](events.EventMode.md)

The default interaction mode for all display objects.

##### See

Container.eventMode

##### Since

7.2.0

##### Returns

[`EventMode`](events.EventMode.md)

## Methods

### destroy()

> **destroy**(): `void`

Destroys all event listeners and detaches the renderer.

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### mapPositionToPoint()

> **mapPositionToPoint**(`point`, `x`, `y`): `void`

Maps coordinates from DOM/screen space into PixiJS normalized coordinates.
This takes into account the current scale, position, and resolution of the DOM element.

#### Parameters

##### point

[`PointData`](maths.PointData.md)

The point to store the mapped coordinates in

##### x

`number`

The x coordinate in DOM/client space

##### y

`number`

The y coordinate in DOM/client space

#### Returns

`void`

#### Example

```ts
// Map mouse coordinates to PixiJS space
const point = new Point();
app.renderer.events.mapPositionToPoint(
    point,
    event.clientX,
    event.clientY
);
console.log('Mapped position:', point.x, point.y);

// Using with pointer events
sprite.on('pointermove', (event) => {
    // event.global already contains mapped coordinates
    console.log('Global:', event.global.x, event.global.y);

    // Map to local coordinates
    const local = event.getLocalPosition(sprite);
    console.log('Local:', local.x, local.y);
});
```

#### Remarks

- Accounts for element scaling and positioning
- Adjusts for device pixel ratio/resolution

***

### setCursor()

> **setCursor**(`mode`): `void`

Sets the current cursor mode, handling any callbacks or CSS style changes.
The cursor can be a CSS cursor string, a custom callback function, or a key from the cursorStyles dictionary.

#### Parameters

##### mode

`string`

Cursor mode to set. Can be:
- A CSS cursor string (e.g., 'pointer', 'grab')
- A key from the cursorStyles dictionary
- null/undefined to reset to default

#### Returns

`void`

#### Example

```ts
// Using predefined cursor styles
app.renderer.events.setCursor('pointer');    // Set standard pointer cursor
app.renderer.events.setCursor('grab');       // Set grab cursor
app.renderer.events.setCursor(null);         // Reset to default

// Using custom cursor styles
app.renderer.events.cursorStyles.custom = 'url("cursor.png"), auto';
app.renderer.events.setCursor('custom');     // Apply custom cursor

// Using callback-based cursor
app.renderer.events.cursorStyles.dynamic = (mode) => {
    document.body.style.cursor = mode === 'hover' ? 'pointer' : 'default';
};
app.renderer.events.setCursor('dynamic');    // Trigger cursor callback
```

#### Remarks

- Has no effect on OffscreenCanvas except for callback-based cursors
- Caches current cursor to avoid unnecessary DOM updates
- Supports CSS cursor values, style objects, and callback functions

#### See

 - [EventSystem.cursorStyles](#cursorstyles) For defining custom cursor styles
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) MDN Cursor Reference

***

### setTargetElement()

> **setTargetElement**(`element`): `void`

Sets the [domElement](#domelement) and binds event listeners.
This method manages the DOM event bindings for the event system, allowing you to
change or remove the target element that receives input events.
> [!IMPORTANT] This will default to the canvas element of the renderer, so you
> should not need to call this unless you are using a custom element.

#### Parameters

##### element

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The new DOM element to bind events to, or null to remove all event bindings

#### Returns

`void`

#### Example

```ts
// Set a new canvas element as the target
const canvas = document.createElement('canvas');
app.renderer.events.setTargetElement(canvas);

// Remove all event bindings
app.renderer.events.setTargetElement(null);

// Switch to a different canvas
const newCanvas = document.querySelector('#game-canvas');
app.renderer.events.setTargetElement(newCanvas);
```

#### Remarks

- Automatically removes event listeners from previous element
- Required for the event system to function
- Safe to call multiple times

#### See

 - [EventSystem#domElement](#domelement) The current DOM element
 - [EventsTicker](events.EventsTicker.md) For the ticker system that tracks pointer movement
