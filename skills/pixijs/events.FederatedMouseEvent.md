# Class: FederatedMouseEvent

A specialized event class for mouse interactions in PixiJS applications.
Extends [FederatedEvent](events.FederatedEvent.md) to provide mouse-specific properties and methods
while maintaining compatibility with the DOM MouseEvent interface.

Key features:
- Tracks mouse button states
- Provides modifier key states
- Supports coordinate systems (client, screen, global)
- Enables precise position tracking

## Example

```ts
// Basic mouse event handling
sprite.on('mousemove', (event: FederatedMouseEvent) => {
    // Get coordinates in different spaces
    console.log('Global position:', event.global.x, event.global.y);
    console.log('Client position:', event.client.x, event.client.y);
    console.log('Screen position:', event.screen.x, event.screen.y);

    // Check button and modifier states
    if (event.buttons === 1 && event.ctrlKey) {
        console.log('Left click + Control key');
    }

    // Get local coordinates relative to any container
    const localPos = event.getLocalPosition(container);
    console.log('Local position:', localPos.x, localPos.y);
});

// Handle mouse button states
sprite.on('mousedown', (event: FederatedMouseEvent) => {
    console.log('Mouse button:', event.button); // 0=left, 1=middle, 2=right
    console.log('Active buttons:', event.buttons);
});
```

## See

 - [FederatedEvent](events.FederatedEvent.md) For base event functionality
 - [https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) DOM MouseEvent Interface

## Extends

- [`FederatedEvent`](events.FederatedEvent.md)\<[`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent) \| [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent) \| [`PixiTouch`](events.PixiTouch.md)\>

## Extended by

- [`FederatedPointerEvent`](events.FederatedPointerEvent.md)
- [`FederatedWheelEvent`](events.FederatedWheelEvent.md)

## Implements

- [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent)

## Constructors

### Constructor

> **new FederatedMouseEvent**(`manager`): `FederatedMouseEvent`

#### Parameters

##### manager

[`EventBoundary`](events.EventBoundary.md)

The event boundary which manages this event. Propagation can only occur
 within the boundary's jurisdiction.

#### Returns

`FederatedMouseEvent`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`constructor`](events.FederatedEvent.html#constructor)

## Properties

### altKey

> **altKey**: `boolean`

Whether the "alt" key was pressed when this mouse event occurred.

#### Implementation of

`MouseEvent.altKey`

***

### AT\_TARGET

> `readonly` **AT\_TARGET**: `2` = `2`

**`Advanced`**

The event propagation phase AT_TARGET that indicates that the event is at the target.

#### Default

```ts
2
```

#### Implementation of

`MouseEvent.AT_TARGET`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`AT_TARGET`](events.FederatedEvent.html#at_target)

***

### bubbles

> **bubbles**: `boolean` = `true`

Flags whether this event bubbles. This will take effect only if it is set before propagation.

#### Implementation of

`MouseEvent.bubbles`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`bubbles`](events.FederatedEvent.html#bubbles)

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

`MouseEvent.BUBBLING_PHASE`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`BUBBLING_PHASE`](events.FederatedEvent.html#bubbling_phase)

***

### button

> **button**: `number`

The specific button that was pressed in this mouse event.

#### Implementation of

`MouseEvent.button`

***

### buttons

> **buttons**: `number`

The button depressed when this event occurred.

#### Implementation of

`MouseEvent.buttons`

***

### cancelable

> `readonly` **cancelable**: `false` = `false`

Flags whether this event can be canceled using [FederatedEvent.preventDefault](events.FederatedEvent.html#preventdefault). This is always
false (for now).

#### Implementation of

`MouseEvent.cancelable`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`cancelable`](events.FederatedEvent.html#cancelable)

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean` = `true`

#### Deprecated

since 7.0.0

#### Implementation of

`MouseEvent.cancelBubble`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`cancelBubble`](events.FederatedEvent.html#cancelbubble)

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

`MouseEvent.CAPTURING_PHASE`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`CAPTURING_PHASE`](events.FederatedEvent.html#capturing_phase)

***

### client

> **client**: [`Point`](maths.Point.md)

The coordinates of the mouse event relative to the canvas.

***

### ctrlKey

> **ctrlKey**: `boolean`

Whether the "control" key was pressed when this mouse event occurred.

#### Implementation of

`MouseEvent.ctrlKey`

***

### currentTarget

> **currentTarget**: [`Container`](scene.Container.md)

The listeners of the event target that are being notified.

#### Implementation of

`MouseEvent.currentTarget`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`currentTarget`](events.FederatedEvent.html#currenttarget)

***

### defaultPrevented

> **defaultPrevented**: `boolean` = `false`

Flags whether the default response of the user agent was prevent through this event.

#### Implementation of

`MouseEvent.defaultPrevented`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`defaultPrevented`](events.FederatedEvent.html#defaultprevented)

***

### detail

> **detail**: `number`

This is the number of clicks that occurs in 200ms/click of each other.

#### Implementation of

`MouseEvent.detail`

#### Overrides

[`FederatedEvent`](events.FederatedEvent.md).[`detail`](events.FederatedEvent.html#detail)

***

### eventPhase

> **eventPhase**: `number` = `FederatedEvent.prototype.NONE`

The propagation phase.

#### Default

[FederatedEvent.NONE](events.FederatedEvent.html#none)

#### Implementation of

`MouseEvent.eventPhase`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`eventPhase`](events.FederatedEvent.html#eventphase)

***

### global

> **global**: [`Point`](maths.Point.md)

The pointer coordinates in world space.

***

### isTrusted

> **isTrusted**: `boolean`

Flags whether this is a user-trusted event

#### Implementation of

`MouseEvent.isTrusted`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`isTrusted`](events.FederatedEvent.html#istrusted)

***

### layer

> **layer**: [`Point`](maths.Point.md)

The coordinates of the event relative to the nearest DOM layer. This is a non-standard property.

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`layer`](events.FederatedEvent.html#layer)

***

### manager

> `readonly` **manager**: [`EventBoundary`](events.EventBoundary.md)

The [EventBoundary](events.EventBoundary.md) that manages this event. Null for root events.

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`manager`](events.FederatedEvent.html#manager)

***

### metaKey

> **metaKey**: `boolean`

Whether the "meta" key was pressed when this mouse event occurred.

#### Implementation of

`MouseEvent.metaKey`

***

### movement

> **movement**: [`Point`](maths.Point.md)

The movement in this pointer relative to the last `mousemove` event.

***

### nativeEvent

> **nativeEvent**: [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent) \| [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent) \| [`PixiTouch`](events.PixiTouch.md)

The native event that caused the foremost original event.

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`nativeEvent`](events.FederatedEvent.html#nativeevent)

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

`MouseEvent.NONE`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`NONE`](events.FederatedEvent.html#none)

***

### offset

> **offset**: [`Point`](maths.Point.md)

The offset of the pointer coordinates w.r.t. target Container in world space. This is not supported at the moment.

***

### originalEvent

> **originalEvent**: [`FederatedEvent`](events.FederatedEvent.md)\<[`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent) \| [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent) \| [`PixiTouch`](events.PixiTouch.md)\>

The original event that caused this event, if any.

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`originalEvent`](events.FederatedEvent.html#originalevent)

***

### page

> **page**: [`Point`](maths.Point.md)

The coordinates of the event relative to the DOM document. This is a non-standard property.

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`page`](events.FederatedEvent.html#page)

***

### path

> **path**: [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

The composed path of the event's propagation. The `target` is at the end.

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`path`](events.FederatedEvent.html#path)

***

### propagationImmediatelyStopped

> **propagationImmediatelyStopped**: `boolean` = `false`

Flags whether propagation was immediately stopped.

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`propagationImmediatelyStopped`](events.FederatedEvent.html#propagationimmediatelystopped)

***

### propagationStopped

> **propagationStopped**: `boolean` = `false`

Flags whether propagation was stopped.

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`propagationStopped`](events.FederatedEvent.html#propagationstopped)

***

### relatedTarget

> **relatedTarget**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

This is currently not implemented in the Federated Events API.

#### Implementation of

`MouseEvent.relatedTarget`

***

### ~~returnValue~~

> **returnValue**: `boolean`

#### Deprecated

since 7.0.0

#### Implementation of

`MouseEvent.returnValue`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`returnValue`](events.FederatedEvent.html#returnvalue)

***

### screen

> **screen**: [`Point`](maths.Point.md)

The pointer coordinates in the renderer's [screen](rendering.AbstractRenderer.html#screen). This has slightly
different semantics than native PointerEvent screenX/screenY.

***

### shiftKey

> **shiftKey**: `boolean`

Whether the "shift" key was pressed when this mouse event occurred.

#### Implementation of

`MouseEvent.shiftKey`

***

### ~~srcElement~~

> **srcElement**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Deprecated

since 7.0.0

#### Implementation of

`MouseEvent.srcElement`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`srcElement`](events.FederatedEvent.html#srcelement)

***

### target

> **target**: [`Container`](scene.Container.md)

The event target that this will be dispatched to.

#### Implementation of

`MouseEvent.target`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`target`](events.FederatedEvent.html#target)

***

### timeStamp

> **timeStamp**: `number`

The timestamp of when the event was created.

#### Implementation of

`MouseEvent.timeStamp`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`timeStamp`](events.FederatedEvent.html#timestamp)

***

### type

> **type**: `string`

The type of event, e.g. `"mouseup"`.

#### Implementation of

`MouseEvent.type`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`type`](events.FederatedEvent.html#type)

***

### view

> **view**: [`Window`](https://developer.mozilla.org/docs/Web/API/Window)

The global Window object.

#### Implementation of

`MouseEvent.view`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`view`](events.FederatedEvent.html#view)

## Accessors

### clientX

#### Get Signature

> **get** **clientX**(): `number`

##### Returns

`number`

#### Implementation of

`MouseEvent.clientX`

***

### clientY

#### Get Signature

> **get** **clientY**(): `number`

##### Returns

`number`

#### Implementation of

`MouseEvent.clientY`

***

### data

#### Get Signature

> **get** **data**(): `this`

Fallback for the deprecated `InteractionEvent.data`.

##### Deprecated

since 7.0.0

##### Returns

`this`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`data`](events.FederatedEvent.html#data)

***

### globalX

#### Get Signature

> **get** **globalX**(): `number`

##### Returns

`number`

***

### globalY

#### Get Signature

> **get** **globalY**(): `number`

##### Returns

`number`

***

### layerX

#### Get Signature

> **get** **layerX**(): `number`

##### Returns

`number`

#### Implementation of

`MouseEvent.layerX`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`layerX`](events.FederatedEvent.html#layerx)

***

### layerY

#### Get Signature

> **get** **layerY**(): `number`

##### Returns

`number`

#### Implementation of

`MouseEvent.layerY`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`layerY`](events.FederatedEvent.html#layery)

***

### movementX

#### Get Signature

> **get** **movementX**(): `number`

##### Returns

`number`

#### Implementation of

`MouseEvent.movementX`

***

### movementY

#### Get Signature

> **get** **movementY**(): `number`

##### Returns

`number`

#### Implementation of

`MouseEvent.movementY`

***

### offsetX

#### Get Signature

> **get** **offsetX**(): `number`

##### Returns

`number`

#### Implementation of

`MouseEvent.offsetX`

***

### offsetY

#### Get Signature

> **get** **offsetY**(): `number`

##### Returns

`number`

#### Implementation of

`MouseEvent.offsetY`

***

### pageX

#### Get Signature

> **get** **pageX**(): `number`

##### Returns

`number`

#### Implementation of

`MouseEvent.pageX`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`pageX`](events.FederatedEvent.html#pagex)

***

### pageY

#### Get Signature

> **get** **pageY**(): `number`

##### Returns

`number`

#### Implementation of

`MouseEvent.pageY`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`pageY`](events.FederatedEvent.html#pagey)

***

### screenX

#### Get Signature

> **get** **screenX**(): `number`

The pointer coordinates in the renderer's screen. Alias for `screen.x`.

##### Returns

`number`

#### Implementation of

`MouseEvent.screenX`

***

### screenY

#### Get Signature

> **get** **screenY**(): `number`

The pointer coordinates in the renderer's screen. Alias for `screen.y`.

##### Returns

`number`

#### Implementation of

`MouseEvent.screenY`

***

### x

#### Get Signature

> **get** **x**(): `number`

Alias for [this.clientX](#clientx).

##### Returns

`number`

#### Implementation of

`MouseEvent.x`

***

### y

#### Get Signature

> **get** **y**(): `number`

Alias for [this.clientY](#clienty).

##### Returns

`number`

#### Implementation of

`MouseEvent.y`

## Methods

### composedPath()

> **composedPath**(): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

**`Advanced`**

The propagation path for this event. Alias for [EventBoundary.propagationPath](events.EventBoundary.html#propagationpath).

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

#### Implementation of

`MouseEvent.composedPath`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`composedPath`](events.FederatedEvent.html#composedpath)

***

### getLocalPosition()

> **getLocalPosition**\<`P`\>(`container`, `point?`, `globalPos?`): `P`

Converts global coordinates into container-local coordinates.

This method transforms coordinates from world space to a container's local space,
useful for precise positioning and hit testing.

#### Type Parameters

##### P

`P` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

#### Parameters

##### container

[`Container`](scene.Container.md)

The Container to get local coordinates for

##### point?

`P`

Optional Point object to store the result. If not provided, a new Point will be created

##### globalPos?

[`PointData`](maths.PointData.md)

Optional custom global coordinates. If not provided, the event's global position is used

#### Returns

`P`

The local coordinates as a Point object

#### Example

```ts
// Basic usage - get local coordinates relative to a container
sprite.on('pointermove', (event: FederatedMouseEvent) => {
    // Get position relative to the sprite
    const localPos = event.getLocalPosition(sprite);
    console.log('Local position:', localPos.x, localPos.y);
});
// Using custom global coordinates
const customGlobal = new Point(100, 100);
sprite.on('pointermove', (event: FederatedMouseEvent) => {
    // Transform custom coordinates
    const localPos = event.getLocalPosition(sprite, undefined, customGlobal);
    console.log('Custom local position:', localPos.x, localPos.y);
});
```

#### See

 - [Container.worldTransform](scene.Container.html#worldtransform) For the transformation matrix
 - [Point](maths.Point.md) For the point class used to store coordinates

***

### getModifierState()

> **getModifierState**(`key`): `boolean`

Whether the modifier key was pressed when this event natively occurred.

#### Parameters

##### key

`string`

The modifier key.

#### Returns

`boolean`

#### Implementation of

`MouseEvent.getModifierState`

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

`MouseEvent.preventDefault`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`preventDefault`](events.FederatedEvent.html#preventdefault)

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

`MouseEvent.stopImmediatePropagation`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`stopImmediatePropagation`](events.FederatedEvent.html#stopimmediatepropagation)

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

`MouseEvent.stopPropagation`

#### Inherited from

[`FederatedEvent`](events.FederatedEvent.md).[`stopPropagation`](events.FederatedEvent.html#stoppropagation)
