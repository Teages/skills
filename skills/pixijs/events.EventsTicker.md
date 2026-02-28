# Class: EventsTicker

**`Advanced`**

This class handles automatic firing of PointerEvents
in the case where the pointer is stationary for too long.
This is to ensure that hit-tests are still run on moving objects.

## Since

7.2.0

## Properties

### domElement

> `static` **domElement**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The DOM element to listen to events on.

***

### events

> `static` **events**: [`EventSystem`](events.EventSystem.md)

The event system.

***

### interactionFrequency

> `static` **interactionFrequency**: `number` = `10`

The frequency that fake events will be fired.

## Accessors

### pauseUpdate

#### Get Signature

> **get** `static` **pauseUpdate**(): `boolean`

Whether to pause the update checks or not.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **pauseUpdate**(`paused`): `void`

##### Parameters

###### paused

`boolean`

##### Returns

`void`

## Methods

### addTickerListener()

> `static` **addTickerListener**(): `void`

Adds the ticker listener.

#### Returns

`void`

***

### destroy()

> `static` **destroy**(): `void`

Destroys the event ticker.

#### Returns

`void`

***

### init()

> `static` **init**(`events`): `void`

Initializes the event ticker.

#### Parameters

##### events

[`EventSystem`](events.EventSystem.md)

The event system.

#### Returns

`void`

***

### pointerMoved()

> `static` **pointerMoved**(): `void`

Sets flag to not fire extra events when the user has already moved there mouse

#### Returns

`void`

***

### removeTickerListener()

> `static` **removeTickerListener**(): `void`

Removes the ticker listener.

#### Returns

`void`
