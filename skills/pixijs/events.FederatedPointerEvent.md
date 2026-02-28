# Class: FederatedPointerEvent

A specialized event class for pointer interactions in PixiJS applications.
Extends [FederatedMouseEvent](events.FederatedMouseEvent.md) to provide advanced pointer-specific features
while maintaining compatibility with the DOM PointerEvent interface.

Key features:
- Supports multi-touch interactions
- Provides pressure sensitivity
- Handles stylus input
- Tracks pointer dimensions
- Supports tilt detection

## Example

```ts
// Basic pointer event handling
sprite.on('pointerdown', (event: FederatedPointerEvent) => {
    // Access pointer information
    console.log('Pointer ID:', event.pointerId);
    console.log('Pointer Type:', event.pointerType);
    console.log('Is Primary:', event.isPrimary);

    // Get pressure and tilt data
    console.log('Pressure:', event.pressure);
    console.log('Tilt:', event.tiltX, event.tiltY);

    // Access contact geometry
    console.log('Size:', event.width, event.height);
});

// Handle stylus-specific features
sprite.on('pointermove', (event: FederatedPointerEvent) => {
    if (event.pointerType === 'pen') {
        // Handle stylus tilt
        const tiltAngle = Math.atan2(event.tiltY, event.tiltX);
        console.log('Tilt angle:', tiltAngle);

        // Use barrel button pressure
        console.log('Tangential pressure:', event.tangentialPressure);
    }
});
```

## See

 - [FederatedMouseEvent](events.FederatedMouseEvent.md) For base mouse event functionality
 - [https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent) DOM PointerEvent Interface
 - [EventSystem](events.EventSystem.md) For the event management system

## Extends

- [`FederatedMouseEvent`](events.FederatedMouseEvent.md)

## Implements

- [`PointerEvent`](https://developer.mozilla.org/docs/Web/API/PointerEvent)

## Constructors

### Constructor

> **new FederatedPointerEvent**(`manager`): `FederatedPointerEvent`

#### Parameters

##### manager

[`EventBoundary`](events.EventBoundary.md)

The event boundary which manages this event. Propagation can only occur
 within the boundary's jurisdiction.

#### Returns

`FederatedPointerEvent`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`constructor`](events.FederatedMouseEvent.html#constructor)

## Properties

### altitudeAngle

> **altitudeAngle**: `number`

The angle in radians of a pointer or stylus measuring the vertical angle between
the device's surface to the pointer or stylus.
A stylus at 0 degrees would be directly parallel whereas at π/2 degrees it would be perpendicular.

#### See

https://developer.mozilla.org/docs/Web/API/PointerEvent/altitudeAngle)

#### Implementation of

`PointerEvent.altitudeAngle`

***

### altKey

> **altKey**: `boolean`

Whether the "alt" key was pressed when this mouse event occurred.

#### Implementation of

`PointerEvent.altKey`

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

`PointerEvent.AT_TARGET`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`AT_TARGET`](events.FederatedMouseEvent.html#at_target)

***

### azimuthAngle

> **azimuthAngle**: `number`

The angle in radians of a pointer or stylus measuring an arc from the X axis of the device to
the pointer or stylus projected onto the screen's plane.
A stylus at 0 degrees would be pointing to the "0 o'clock" whereas at π/2 degrees it would be pointing at "6 o'clock".

#### See

https://developer.mozilla.org/docs/Web/API/PointerEvent/azimuthAngle)

#### Implementation of

`PointerEvent.azimuthAngle`

***

### bubbles

> **bubbles**: `boolean` = `true`

Flags whether this event bubbles. This will take effect only if it is set before propagation.

#### Implementation of

`PointerEvent.bubbles`

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

`PointerEvent.BUBBLING_PHASE`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`BUBBLING_PHASE`](events.FederatedMouseEvent.html#bubbling_phase)

***

### button

> **button**: `number`

The specific button that was pressed in this mouse event.

#### Implementation of

`PointerEvent.button`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`button`](events.FederatedMouseEvent.html#button)

***

### buttons

> **buttons**: `number`

The button depressed when this event occurred.

#### Implementation of

`PointerEvent.buttons`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`buttons`](events.FederatedMouseEvent.html#buttons)

***

### cancelable

> `readonly` **cancelable**: `false` = `false`

Flags whether this event can be canceled using [FederatedEvent.preventDefault](events.FederatedEvent.html#preventdefault). This is always
false (for now).

#### Implementation of

`PointerEvent.cancelable`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`cancelable`](events.FederatedMouseEvent.html#cancelable)

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean` = `true`

#### Deprecated

since 7.0.0

#### Implementation of

`PointerEvent.cancelBubble`

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

`PointerEvent.CAPTURING_PHASE`

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

`PointerEvent.ctrlKey`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`ctrlKey`](events.FederatedMouseEvent.html#ctrlkey)

***

### currentTarget

> **currentTarget**: [`Container`](scene.Container.md)

The listeners of the event target that are being notified.

#### Implementation of

`PointerEvent.currentTarget`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`currentTarget`](events.FederatedMouseEvent.html#currenttarget)

***

### defaultPrevented

> **defaultPrevented**: `boolean` = `false`

Flags whether the default response of the user agent was prevent through this event.

#### Implementation of

`PointerEvent.defaultPrevented`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`defaultPrevented`](events.FederatedMouseEvent.html#defaultprevented)

***

### detail

> **detail**: `number`

This is the number of clicks that occurs in 200ms/click of each other.

#### Implementation of

`PointerEvent.detail`

#### Overrides

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`detail`](events.FederatedMouseEvent.html#detail)

***

### eventPhase

> **eventPhase**: `number` = `FederatedEvent.prototype.NONE`

The propagation phase.

#### Default

[FederatedEvent.NONE](events.FederatedEvent.html#none)

#### Implementation of

`PointerEvent.eventPhase`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`eventPhase`](events.FederatedMouseEvent.html#eventphase)

***

### global

> **global**: [`Point`](maths.Point.md)

The pointer coordinates in world space.

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`global`](events.FederatedMouseEvent.html#global)

***

### height

> **height**: `number` = `0`

The height of the pointer's contact along the y-axis, measured in CSS pixels.
radiusY of TouchEvents will be represented by this value.

#### See

https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height

#### Implementation of

`PointerEvent.height`

***

### isPrimary

> **isPrimary**: `boolean` = `false`

Indicates whether or not the pointer device that created the event is the primary pointer.

#### See

https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary

#### Implementation of

`PointerEvent.isPrimary`

***

### isTrusted

> **isTrusted**: `boolean`

Flags whether this is a user-trusted event

#### Implementation of

`PointerEvent.isTrusted`

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

`PointerEvent.metaKey`

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

`PointerEvent.NONE`

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

### pointerId

> **pointerId**: `number`

The unique identifier of the pointer.

#### See

[https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId)

#### Implementation of

`PointerEvent.pointerId`

***

### pointerType

> **pointerType**: `string`

The type of pointer that triggered the event.

#### See

https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType

#### Implementation of

`PointerEvent.pointerType`

***

### pressure

> **pressure**: `number`

Pressure applied by the pointing device during the event.
s
A Touch's force property will be represented by this value.

#### See

https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure

#### Implementation of

`PointerEvent.pressure`

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

`PointerEvent.relatedTarget`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`relatedTarget`](events.FederatedMouseEvent.html#relatedtarget)

***

### ~~returnValue~~

> **returnValue**: `boolean`

#### Deprecated

since 7.0.0

#### Implementation of

`PointerEvent.returnValue`

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

`PointerEvent.shiftKey`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`shiftKey`](events.FederatedMouseEvent.html#shiftkey)

***

### ~~srcElement~~

> **srcElement**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Deprecated

since 7.0.0

#### Implementation of

`PointerEvent.srcElement`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`srcElement`](events.FederatedMouseEvent.html#srcelement)

***

### tangentialPressure

> **tangentialPressure**: `number`

Barrel pressure on a stylus pointer.

#### See

https://w3c.github.io/pointerevents/#pointerevent-interface

#### Implementation of

`PointerEvent.tangentialPressure`

***

### target

> **target**: [`Container`](scene.Container.md)

The event target that this will be dispatched to.

#### Implementation of

`PointerEvent.target`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`target`](events.FederatedMouseEvent.html#target)

***

### tiltX

> **tiltX**: `number`

The angle, in degrees, between the pointer device and the screen.

#### See

https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX

#### Implementation of

`PointerEvent.tiltX`

***

### tiltY

> **tiltY**: `number`

The angle, in degrees, between the pointer device and the screen.

#### See

https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY

#### Implementation of

`PointerEvent.tiltY`

***

### timeStamp

> **timeStamp**: `number`

The timestamp of when the event was created.

#### Implementation of

`PointerEvent.timeStamp`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`timeStamp`](events.FederatedMouseEvent.html#timestamp)

***

### twist

> **twist**: `number`

Twist of a stylus pointer.

#### See

https://w3c.github.io/pointerevents/#pointerevent-interface

#### Implementation of

`PointerEvent.twist`

***

### type

> **type**: `string`

The type of event, e.g. `"mouseup"`.

#### Implementation of

`PointerEvent.type`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`type`](events.FederatedMouseEvent.html#type)

***

### view

> **view**: [`Window`](https://developer.mozilla.org/docs/Web/API/Window)

The global Window object.

#### Implementation of

`PointerEvent.view`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`view`](events.FederatedMouseEvent.html#view)

***

### width

> **width**: `number` = `0`

The width of the pointer's contact along the x-axis, measured in CSS pixels.
radiusX of TouchEvents will be represented by this value.

#### See

https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width

#### Implementation of

`PointerEvent.width`

## Accessors

### clientX

#### Get Signature

> **get** **clientX**(): `number`

##### Returns

`number`

#### Implementation of

`PointerEvent.clientX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`clientX`](events.FederatedMouseEvent.html#clientx)

***

### clientY

#### Get Signature

> **get** **clientY**(): `number`

##### Returns

`number`

#### Implementation of

`PointerEvent.clientY`

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

`PointerEvent.layerX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`layerX`](events.FederatedMouseEvent.html#layerx)

***

### layerY

#### Get Signature

> **get** **layerY**(): `number`

##### Returns

`number`

#### Implementation of

`PointerEvent.layerY`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`layerY`](events.FederatedMouseEvent.html#layery)

***

### movementX

#### Get Signature

> **get** **movementX**(): `number`

##### Returns

`number`

#### Implementation of

`PointerEvent.movementX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`movementX`](events.FederatedMouseEvent.html#movementx)

***

### movementY

#### Get Signature

> **get** **movementY**(): `number`

##### Returns

`number`

#### Implementation of

`PointerEvent.movementY`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`movementY`](events.FederatedMouseEvent.html#movementy)

***

### offsetX

#### Get Signature

> **get** **offsetX**(): `number`

##### Returns

`number`

#### Implementation of

`PointerEvent.offsetX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`offsetX`](events.FederatedMouseEvent.html#offsetx)

***

### offsetY

#### Get Signature

> **get** **offsetY**(): `number`

##### Returns

`number`

#### Implementation of

`PointerEvent.offsetY`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`offsetY`](events.FederatedMouseEvent.html#offsety)

***

### pageX

#### Get Signature

> **get** **pageX**(): `number`

##### Returns

`number`

#### Implementation of

`PointerEvent.pageX`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`pageX`](events.FederatedMouseEvent.html#pagex)

***

### pageY

#### Get Signature

> **get** **pageY**(): `number`

##### Returns

`number`

#### Implementation of

`PointerEvent.pageY`

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

`PointerEvent.screenX`

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

`PointerEvent.screenY`

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

`PointerEvent.x`

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

`PointerEvent.y`

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

`PointerEvent.composedPath`

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

`PointerEvent.getModifierState`

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

`PointerEvent.preventDefault`

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

`PointerEvent.stopImmediatePropagation`

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

`PointerEvent.stopPropagation`

#### Inherited from

[`FederatedMouseEvent`](events.FederatedMouseEvent.md).[`stopPropagation`](events.FederatedMouseEvent.html#stoppropagation)
