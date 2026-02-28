# Interface: EventSystemOptions

**`Advanced`**

Options for configuring the PixiJS event system. These options control how the event system
handles different types of interactions and event propagation.

## Example

```ts
// Basic event system configuration
const app = new Application();
await app.init({
    // Configure default interaction mode
    eventMode: 'static',

    // Configure event features
    eventFeatures: {
        move: true,           // Enable pointer movement events
        globalMove: false,    // Disable global move events
        click: true,          // Enable click events
        wheel: true          // Enable wheel/scroll events
    }
});

// Access event system after initialization
const eventSystem = app.renderer.events;
console.log(eventSystem.features); // Check enabled features
```

## See

 - [EventSystem](events.EventSystem.md) For the main event system implementation
 - [EventMode](events.EventMode.md) For interaction mode details
 - [EventSystemFeatures](events.EventSystemFeatures.md) For all available feature options

## Properties

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

***

### eventMode?

> `optional` **eventMode**: [`EventMode`](events.EventMode.md)

The default event mode for all display objects.
Controls how objects respond to interaction events.

Possible values:
- `'none'`: No interaction events
- `'passive'`: Only container's children receive events (default)
- `'auto'`: Receives events when parent is interactive
- `'static'`: Standard interaction events
- `'dynamic'`: Like static but with additional synthetic events

#### Default

```ts
'passive'
```
