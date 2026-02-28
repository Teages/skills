# Class: FederatedWheelEvent

A specialized event class for wheel/scroll interactions in PixiJS applications.
Extends [FederatedMouseEvent](events.FederatedMouseEvent.md) to provide wheel-specific properties while
maintaining compatibility with the DOM WheelEvent interface.

Key features:
- Provides scroll delta information
- Supports different scroll modes (pixel, line, page)
- Inherits mouse event properties
- Normalizes cross-browser wheel events

## Example

```ts
// Basic wheel event handling
sprite.on('wheel', (event: FederatedWheelEvent) => {
    // Get scroll amount
    console.log('Vertical scroll:', event.deltaY);
    console.log('Horizontal scroll:', event.deltaX);

    // Check scroll mode
    if (event.deltaMode === FederatedWheelEvent.DOM_DELTA_LINE) {
        console.log('Scrolling by lines');
    } else if (event.deltaMode === FederatedWheelEvent.DOM_DELTA_PAGE) {
        console.log('Scrolling by pages');
    } else {
        console.log('Scrolling by pixels');
    }

    // Get scroll position
    console.log('Scroll at:', event.global.x, event.global.y);
});

// Common use case: Zoom control
container.on('wheel', (event: FederatedWheelEvent) => {
    // Prevent page scrolling
    event.preventDefault();

    // Zoom in/out based on scroll direction
    const zoomFactor = 1 + (event.deltaY / 1000);
    container.scale.set(container.scale.x * zoomFactor);
});
```

## See

 - [FederatedMouseEvent](events.FederatedMouseEvent.md) For base mouse event functionality
 - [https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent) DOM WheelEvent Interface
 - [EventSystem](events.EventSystem.md) For the event management system

## Extends

- [`FederatedMouseEvent`](events.FederatedMouseEvent.md)

## Implements

- [`WheelEvent`](https://developer.mozilla.org/docs/Web/API/WheelEvent)

## Constructors

### Constructor

> **new FederatedWheelEvent**(`manager`): `FederatedWheelEvent`

#### Parameters

##### manager

[`EventBoundary`](events.EventBoundary.md)

The event boundary which manages this event. Propagation can only occur
 within the boundary's jurisdiction.

#### Returns

`FederatedWheelEvent`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`constructor`](events.FederatedMouseEvent.html#constructor)

## Properties

### altKey

> **altKey**: `boolean`

Whether the "alt" key was pressed when this mouse event occurred.

#### Implementation of

`WheelEvent.altKey`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`altKey`](events.FederatedMouseEvent.html#altkey)

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

`WheelEvent.AT_TARGET`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`AT_TARGET`](events.FederatedMouseEvent.html#at_target)

***

### bubbles

> **bubbles**: `boolean` = `true`

Flags whether this event bubbles. This will take effect only if it is set before propagation.

#### Implementation of

`WheelEvent.bubbles`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`bubbles`](events.FederatedMouseEvent.html#bubbles)

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

`WheelEvent.BUBBLING_PHASE`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`BUBBLING_PHASE`](events.FederatedMouseEvent.html#bubbling_phase)

***

### button

> **button**: `number`

The specific button that was pressed in this mouse event.

#### Implementation of

`WheelEvent.button`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`button`](events.FederatedMouseEvent.html#button)

***

### buttons

> **buttons**: `number`

The button depressed when this event occurred.

#### Implementation of

`WheelEvent.buttons`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`buttons`](events.FederatedMouseEvent.html#buttons)

***

### cancelable

> `readonly` **cancelable**: `false` = `false`

Flags whether this event can be canceled using [FederatedEvent.preventDefault](events.FederatedEvent.html#preventdefault). This is always
false (for now).

#### Implementation of

`WheelEvent.cancelable`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`cancelable`](events.FederatedMouseEvent.html#cancelable)

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean` = `true`

#### Deprecated

since 7.0.0

#### Implementation of

`WheelEvent.cancelBubble`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`cancelBubble`](events.FederatedMouseEvent.html#cancelbubble)

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

`WheelEvent.CAPTURING_PHASE`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`CAPTURING_PHASE`](events.FederatedMouseEvent.html#capturing_phase)

***

### client

> **client**: [`Point`](maths.Point.md)

The coordinates of the mouse event relative to the canvas.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`client`](events.FederatedMouseEvent.html#client)

***

### ctrlKey

> **ctrlKey**: `boolean`

Whether the "control" key was pressed when this mouse event occurred.

#### Implementation of

`WheelEvent.ctrlKey`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`ctrlKey`](events.FederatedMouseEvent.html#ctrlkey)

***

### currentTarget

> **currentTarget**: [`Container`](scene.Container.md)

The listeners of the event target that are being notified.

#### Implementation of

`WheelEvent.currentTarget`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`currentTarget`](events.FederatedMouseEvent.html#currenttarget)

***

### defaultPrevented

> **defaultPrevented**: `boolean` = `false`

Flags whether the default response of the user agent was prevent through this event.

#### Implementation of

`WheelEvent.defaultPrevented`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`defaultPrevented`](events.FederatedMouseEvent.html#defaultprevented)

***

### deltaMode

> **deltaMode**: `number`

The units of `deltaX`, `deltaY`, and `deltaZ`. This is one of `DOM_DELTA_LINE`,
`DOM_DELTA_PAGE`, `DOM_DELTA_PIXEL`.

#### Implementation of

`WheelEvent.deltaMode`

***

### deltaX

> **deltaX**: `number`

Horizontal scroll amount

#### Implementation of

`WheelEvent.deltaX`

***

### deltaY

> **deltaY**: `number`

Vertical scroll amount

#### Implementation of

`WheelEvent.deltaY`

***

### deltaZ

> **deltaZ**: `number`

z-axis scroll amount.

#### Implementation of

`WheelEvent.deltaZ`

***

### detail

> **detail**: `number`

This is the number of clicks that occurs in 200ms/click of each other.

#### Implementation of

`WheelEvent.detail`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`detail`](events.FederatedMouseEvent.html#detail)

***

### eventPhase

> **eventPhase**: `number` = `FederatedEvent.prototype.NONE`

The propagation phase.

#### Default

[FederatedEvent.NONE](events.FederatedEvent.html#none)

#### Implementation of

`WheelEvent.eventPhase`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`eventPhase`](events.FederatedMouseEvent.html#eventphase)

***

### global

> **global**: [`Point`](maths.Point.md)

The pointer coordinates in world space.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`global`](events.FederatedMouseEvent.html#global)

***

### isTrusted

> **isTrusted**: `boolean`

Flags whether this is a user-trusted event

#### Implementation of

`WheelEvent.isTrusted`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`isTrusted`](events.FederatedMouseEvent.html#istrusted)

***

### layer

> **layer**: [`Point`](maths.Point.md)

The coordinates of the event relative to the nearest DOM layer. This is a non-standard property.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`layer`](events.FederatedMouseEvent.html#layer)

***

### manager

> `readonly` **manager**: [`EventBoundary`](events.EventBoundary.md)

The [EventBoundary](events.EventBoundary.md) that manages this event. Null for root events.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`manager`](events.FederatedMouseEvent.html#manager)

***

### metaKey

> **metaKey**: `boolean`

Whether the "meta" key was pressed when this mouse event occurred.

#### Implementation of

`WheelEvent.metaKey`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`metaKey`](events.FederatedMouseEvent.html#metakey)

***

### movement

> **movement**: [`Point`](maths.Point.md)

The movement in this pointer relative to the last `mousemove` event.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`movement`](events.FederatedMouseEvent.html#movement)

***

### nativeEvent

> **nativeEvent**: [`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent) \| [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent) \| [`PixiTouch`](events.PixiTouch.md)

The native event that caused the foremost original event.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`nativeEvent`](events.FederatedMouseEvent.html#nativeevent)

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

`WheelEvent.NONE`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`NONE`](events.FederatedMouseEvent.html#none)

***

### offset

> **offset**: [`Point`](maths.Point.md)

The offset of the pointer coordinates w.r.t. target Container in world space. This is not supported at the moment.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`offset`](events.FederatedMouseEvent.html#offset)

***

### originalEvent

> **originalEvent**: [`FederatedEvent`](events.FederatedEvent.md)\<[`MouseEvent`](https://developer.mozilla.org/docs/Web/API/MouseEvent) \| [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent) \| [`PixiTouch`](events.PixiTouch.md)\>

The original event that caused this event, if any.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`originalEvent`](events.FederatedMouseEvent.html#originalevent)

***

### page

> **page**: [`Point`](maths.Point.md)

The coordinates of the event relative to the DOM document. This is a non-standard property.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`page`](events.FederatedMouseEvent.html#page)

***

### path

> **path**: [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

The composed path of the event's propagation. The `target` is at the end.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`path`](events.FederatedMouseEvent.html#path)

***

### propagationImmediatelyStopped

> **propagationImmediatelyStopped**: `boolean` = `false`

Flags whether propagation was immediately stopped.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`propagationImmediatelyStopped`](events.FederatedMouseEvent.html#propagationimmediatelystopped)

***

### propagationStopped

> **propagationStopped**: `boolean` = `false`

Flags whether propagation was stopped.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`propagationStopped`](events.FederatedMouseEvent.html#propagationstopped)

***

### relatedTarget

> **relatedTarget**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

This is currently not implemented in the Federated Events API.

#### Implementation of

`WheelEvent.relatedTarget`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`relatedTarget`](events.FederatedMouseEvent.html#relatedtarget)

***

### ~~returnValue~~

> **returnValue**: `boolean`

#### Deprecated

since 7.0.0

#### Implementation of

`WheelEvent.returnValue`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`returnValue`](events.FederatedMouseEvent.html#returnvalue)

***

### screen

> **screen**: [`Point`](maths.Point.md)

The pointer coordinates in the renderer's [screen](rendering.AbstractRenderer.html#screen). This has slightly
different semantics than native PointerEvent screenX/screenY.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`screen`](events.FederatedMouseEvent.html#screen)

***

### shiftKey

> **shiftKey**: `boolean`

Whether the "shift" key was pressed when this mouse event occurred.

#### Implementation of

`WheelEvent.shiftKey`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`shiftKey`](events.FederatedMouseEvent.html#shiftkey)

***

### ~~srcElement~~

> **srcElement**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Deprecated

since 7.0.0

#### Implementation of

`WheelEvent.srcElement`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`srcElement`](events.FederatedMouseEvent.html#srcelement)

***

### target

> **target**: [`Container`](scene.Container.md)

The event target that this will be dispatched to.

#### Implementation of

`WheelEvent.target`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`target`](events.FederatedMouseEvent.html#target)

***

### timeStamp

> **timeStamp**: `number`

The timestamp of when the event was created.

#### Implementation of

`WheelEvent.timeStamp`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`timeStamp`](events.FederatedMouseEvent.html#timestamp)

***

### type

> **type**: `string`

The type of event, e.g. `"mouseup"`.

#### Implementation of

`WheelEvent.type`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`type`](events.FederatedMouseEvent.html#type)

***

### view

> **view**: [`Window`](https://developer.mozilla.org/docs/Web/API/Window)

The global Window object.

#### Implementation of

`WheelEvent.view`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`view`](events.FederatedMouseEvent.html#view)

## Accessors

### clientX

#### Get Signature

> **get** **clientX**(): `number`

##### Returns

`number`

#### Implementation of

`WheelEvent.clientX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`clientX`](events.FederatedMouseEvent.html#clientx)

***

### clientY

#### Get Signature

> **get** **clientY**(): `number`

##### Returns

`number`

#### Implementation of

`WheelEvent.clientY`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`clientY`](events.FederatedMouseEvent.html#clienty)

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

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`data`](events.FederatedMouseEvent.html#data)

***

### globalX

#### Get Signature

> **get** **globalX**(): `number`

##### Returns

`number`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`globalX`](events.FederatedMouseEvent.html#globalx)

***

### globalY

#### Get Signature

> **get** **globalY**(): `number`

##### Returns

`number`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`globalY`](events.FederatedMouseEvent.html#globaly)

***

### layerX

#### Get Signature

> **get** **layerX**(): `number`

##### Returns

`number`

#### Implementation of

`WheelEvent.layerX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`layerX`](events.FederatedMouseEvent.html#layerx)

***

### layerY

#### Get Signature

> **get** **layerY**(): `number`

##### Returns

`number`

#### Implementation of

`WheelEvent.layerY`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`layerY`](events.FederatedMouseEvent.html#layery)

***

### movementX

#### Get Signature

> **get** **movementX**(): `number`

##### Returns

`number`

#### Implementation of

`WheelEvent.movementX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`movementX`](events.FederatedMouseEvent.html#movementx)

***

### movementY

#### Get Signature

> **get** **movementY**(): `number`

##### Returns

`number`

#### Implementation of

`WheelEvent.movementY`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`movementY`](events.FederatedMouseEvent.html#movementy)

***

### offsetX

#### Get Signature

> **get** **offsetX**(): `number`

##### Returns

`number`

#### Implementation of

`WheelEvent.offsetX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`offsetX`](events.FederatedMouseEvent.html#offsetx)

***

### offsetY

#### Get Signature

> **get** **offsetY**(): `number`

##### Returns

`number`

#### Implementation of

`WheelEvent.offsetY`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`offsetY`](events.FederatedMouseEvent.html#offsety)

***

### pageX

#### Get Signature

> **get** **pageX**(): `number`

##### Returns

`number`

#### Implementation of

`WheelEvent.pageX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`pageX`](events.FederatedMouseEvent.html#pagex)

***

### pageY

#### Get Signature

> **get** **pageY**(): `number`

##### Returns

`number`

#### Implementation of

`WheelEvent.pageY`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`pageY`](events.FederatedMouseEvent.html#pagey)

***

### screenX

#### Get Signature

> **get** **screenX**(): `number`

The pointer coordinates in the renderer's screen. Alias for `screen.x`.

##### Returns

`number`

#### Implementation of

`WheelEvent.screenX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`screenX`](events.FederatedMouseEvent.html#screenx)

***

### screenY

#### Get Signature

> **get** **screenY**(): `number`

The pointer coordinates in the renderer's screen. Alias for `screen.y`.

##### Returns

`number`

#### Implementation of

`WheelEvent.screenY`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`screenY`](events.FederatedMouseEvent.html#screeny)

***

### x

#### Get Signature

> **get** **x**(): `number`

Alias for [this.clientX](events.FederatedMouseEvent.html#clientx).

##### Returns

`number`

#### Implementation of

`WheelEvent.x`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`x`](events.FederatedMouseEvent.html#x)

***

### y

#### Get Signature

> **get** **y**(): `number`

Alias for [this.clientY](events.FederatedMouseEvent.html#clienty).

##### Returns

`number`

#### Implementation of

`WheelEvent.y`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`y`](events.FederatedMouseEvent.html#y)

## Methods

### composedPath()

> **composedPath**(): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

**`Advanced`**

The propagation path for this event. Alias for [EventBoundary.propagationPath](events.EventBoundary.html#propagationpath).

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

#### Implementation of

`WheelEvent.composedPath`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`composedPath`](events.FederatedMouseEvent.html#composedpath)

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

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`getLocalPosition`](events.FederatedMouseEvent.html#getlocalposition)

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

`WheelEvent.getModifierState`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`getModifierState`](events.FederatedMouseEvent.html#getmodifierstate)

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

`WheelEvent.preventDefault`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`preventDefault`](events.FederatedMouseEvent.html#preventdefault)

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

`WheelEvent.stopImmediatePropagation`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`stopImmediatePropagation`](events.FederatedMouseEvent.html#stopimmediatepropagation)

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

`WheelEvent.stopPropagation`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`stopPropagation`](events.FederatedMouseEvent.html#stoppropagation)
