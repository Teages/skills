# Class: FederatedEvent\<N\>

A DOM-compatible synthetic event implementation for PixiJS's event system.
This class implements the standard DOM Event interface while providing additional
functionality specific to PixiJS events.
> [!NOTE] You wont receive an instance of this class directly, but rather a subclass
> of this class, such as [FederatedPointerEvent](events.FederatedPointerEvent.md), [FederatedMouseEvent](events.FederatedMouseEvent.md), or
> [FederatedWheelEvent](events.FederatedWheelEvent.md). This class is the base for all federated events.

## Example

```ts
// Basic event handling
sprite.on('pointerdown', (event: FederatedEvent) => {
    // Access standard DOM event properties
    console.log('Target:', event.target);
    console.log('Phase:', event.eventPhase);
    console.log('Type:', event.type);

    // Control propagation
    event.stopPropagation();
});
```

## Remarks

- Implements the standard DOM UIEvent interface
- Provides event bubbling and capturing phases
- Supports propagation control
- Manages event paths through display tree
- Normalizes native browser events

## See

 - [https://dom.spec.whatwg.org/#event](https://dom.spec.whatwg.org/#event) DOM Event Specification
 - [FederatedPointerEvent](events.FederatedPointerEvent.md) For pointer-specific events
 - [FederatedMouseEvent](events.FederatedMouseEvent.md) For mouse-specific events
 - [FederatedWheelEvent](events.FederatedWheelEvent.md) For wheel-specific events

## Extended by

- [`FederatedMouseEvent`](events.FederatedMouseEvent.md)

## Type Parameters

### N

`N` *extends* [`UIEvent`](https://developer.mozilla.org/docs/Web/API/UIEvent) \| [`PixiTouch`](events.PixiTouch.md) = [`UIEvent`](https://developer.mozilla.org/docs/Web/API/UIEvent) \| [`PixiTouch`](events.PixiTouch.md)

The type of native event held. Can be either a UIEvent or PixiTouch.

## Implements

- [`UIEvent`](https://developer.mozilla.org/docs/Web/API/UIEvent)

## Constructors

### Constructor

> **new FederatedEvent**\<`N`\>(`manager`): `FederatedEvent`\<`N`\>

#### Parameters

##### manager

[`EventBoundary`](events.EventBoundary.md)

The event boundary which manages this event. Propagation can only occur
 within the boundary's jurisdiction.

#### Returns

`FederatedEvent`\<`N`\>

## Properties

### AT\_TARGET

> `readonly` **AT\_TARGET**: `2` = `2`

**`Advanced`**

The event propagation phase AT_TARGET that indicates that the event is at the target.

#### Default

```ts
2
```

#### Implementation of

`UIEvent.AT_TARGET`

***

### bubbles

> **bubbles**: `boolean` = `true`

Flags whether this event bubbles. This will take effect only if it is set before propagation.

#### Implementation of

`UIEvent.bubbles`

***

### BUBBLING\_PHASE

> `readonly` **BUBBLING\_PHASE**: `3` = `3`

**`Advanced`**

The event propagation phase BUBBLING_PHASE that indicates that the event is in the bubbling phase.

#### Default

```ts
3
```

#### Implementation of

`UIEvent.BUBBLING_PHASE`

***

### cancelable

> `readonly` **cancelable**: `false` = `false`

Flags whether this event can be canceled using [FederatedEvent.preventDefault](#preventdefault). This is always
false (for now).

#### Implementation of

`UIEvent.cancelable`

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean` = `true`

#### Deprecated

since 7.0.0

#### Implementation of

`UIEvent.cancelBubble`

***

### CAPTURING\_PHASE

> `readonly` **CAPTURING\_PHASE**: `1` = `1`

**`Advanced`**

The event propagation phase CAPTURING_PHASE that indicates that the event is in the capturing phase.

#### Default

```ts
1
```

#### Implementation of

`UIEvent.CAPTURING_PHASE`

***

### currentTarget

> **currentTarget**: [`Container`](scene.Container.md)

The listeners of the event target that are being notified.

#### Implementation of

`UIEvent.currentTarget`

***

### defaultPrevented

> **defaultPrevented**: `boolean` = `false`

Flags whether the default response of the user agent was prevent through this event.

#### Implementation of

`UIEvent.defaultPrevented`

***

### detail

> **detail**: `number`

Event-specific detail

#### Implementation of

`UIEvent.detail`

***

### eventPhase

> **eventPhase**: `number` = `FederatedEvent.prototype.NONE`

The propagation phase.

#### Default

[FederatedEvent.NONE](#none)

#### Implementation of

`UIEvent.eventPhase`

***

### isTrusted

> **isTrusted**: `boolean`

Flags whether this is a user-trusted event

#### Implementation of

`UIEvent.isTrusted`

***

### layer

> **layer**: [`Point`](maths.Point.md)

The coordinates of the event relative to the nearest DOM layer. This is a non-standard property.

***

### manager

> `readonly` **manager**: [`EventBoundary`](events.EventBoundary.md)

The [EventBoundary](events.EventBoundary.md) that manages this event. Null for root events.

***

### nativeEvent

> **nativeEvent**: `N`

The native event that caused the foremost original event.

***

### NONE

> `readonly` **NONE**: `0` = `0`

**`Advanced`**

The event propagation phase NONE that indicates that the event is not in any phase.

#### Default

```ts
0
```

#### Implementation of

`UIEvent.NONE`

***

### originalEvent

> **originalEvent**: `FederatedEvent`\<`N`\>

The original event that caused this event, if any.

***

### page

> **page**: [`Point`](maths.Point.md)

The coordinates of the event relative to the DOM document. This is a non-standard property.

***

### path

> **path**: [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

The composed path of the event's propagation. The `target` is at the end.

***

### propagationImmediatelyStopped

> **propagationImmediatelyStopped**: `boolean` = `false`

Flags whether propagation was immediately stopped.

***

### propagationStopped

> **propagationStopped**: `boolean` = `false`

Flags whether propagation was stopped.

***

### ~~returnValue~~

> **returnValue**: `boolean`

#### Deprecated

since 7.0.0

#### Implementation of

`UIEvent.returnValue`

***

### ~~srcElement~~

> **srcElement**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Deprecated

since 7.0.0

#### Implementation of

`UIEvent.srcElement`

***

### target

> **target**: [`Container`](scene.Container.md)

The event target that this will be dispatched to.

#### Implementation of

`UIEvent.target`

***

### timeStamp

> **timeStamp**: `number`

The timestamp of when the event was created.

#### Implementation of

`UIEvent.timeStamp`

***

### type

> **type**: `string`

The type of event, e.g. `"mouseup"`.

#### Implementation of

`UIEvent.type`

***

### view

> **view**: [`Window`](https://developer.mozilla.org/docs/Web/API/Window)

The global Window object.

#### Implementation of

`UIEvent.view`

## Accessors

### data

#### Get Signature

> **get** **data**(): `this`

Fallback for the deprecated `InteractionEvent.data`.

##### Deprecated

since 7.0.0

##### Returns

`this`

***

### layerX

#### Get Signature

> **get** **layerX**(): `number`

##### Returns

`number`

***

### layerY

#### Get Signature

> **get** **layerY**(): `number`

##### Returns

`number`

***

### pageX

#### Get Signature

> **get** **pageX**(): `number`

##### Returns

`number`

***

### pageY

#### Get Signature

> **get** **pageY**(): `number`

##### Returns

`number`

## Methods

### composedPath()

> **composedPath**(): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

**`Advanced`**

The propagation path for this event. Alias for [EventBoundary.propagationPath](events.EventBoundary.html#propagationpath).

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

#### Implementation of

`UIEvent.composedPath`

***

### preventDefault()

> **preventDefault**(): `void`

Prevent default behavior of both PixiJS and the user agent.

#### Returns

`void`

#### Example

```ts
sprite.on('click', (event) => {
    // Prevent both browser's default click behavior
    // and PixiJS's default handling
    event.preventDefault();

    // Custom handling
    customClickHandler();
});
```

#### Remarks

- Only works if the native event is cancelable
- Does not stop event propagation

#### Implementation of

`UIEvent.preventDefault`

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Stop this event from propagating to any additional listeners, including those
on the current target and any following targets in the propagation path.

#### Returns

`void`

#### Example

```ts
container.on('pointerdown', (event) => {
    // Stop all further event handling
    event.stopImmediatePropagation();

    // These handlers won't be called:
    // - Other pointerdown listeners on this container
    // - Any pointerdown listeners on parent containers
});
```

#### Remarks

- Immediately stops all event propagation
- Prevents other listeners on same target from being called
- More aggressive than stopPropagation()

#### Implementation of

`UIEvent.stopImmediatePropagation`

***

### stopPropagation()

> **stopPropagation**(): `void`

Stop this event from propagating to the next target in the propagation path.
The rest of the listeners on the current target will still be notified.

#### Returns

`void`

#### Example

```ts
child.on('pointermove', (event) => {
    // Handle event on child
    updateChild();

    // Prevent parent handlers from being called
    event.stopPropagation();
});

// This won't be called if child handles the event
parent.on('pointermove', (event) => {
    updateParent();
});
```

#### Remarks

- Stops event bubbling to parent containers
- Does not prevent other listeners on same target
- Less aggressive than stopImmediatePropagation()

#### Implementation of

`UIEvent.stopPropagation`
