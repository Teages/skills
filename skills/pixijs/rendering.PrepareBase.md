# Abstract Class: PrepareBase

**`Advanced`**

Part of the prepare system. Responsible for uploading all the items to the GPU.
This class provides the base functionality and handles processing the queue asynchronously.

## Extended by

- [`PrepareQueue`](rendering.PrepareQueue.md)

## Constructors

### Constructor

> **new PrepareBase**(`renderer`): `PrepareBase`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

A reference to the current renderer

#### Returns

`PrepareBase`

## Properties

### uploadsPerFrame

> `static` **uploadsPerFrame**: `number` = `4`

The number of uploads to process per frame

## Methods

### add()

> **add**(`resource`): `this`

Add a textures or graphics resource to the queue

#### Parameters

##### resource

[`PrepareSourceItem`](rendering.PrepareSourceItem.md) | [`PrepareSourceItem`](rendering.PrepareSourceItem.md)[]

#### Returns

`this`

***

### dedupeQueue()

> **dedupeQueue**(): `void`

eliminate duplicates before processing

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### getQueue()

> **getQueue**(): [`PrepareQueueItem`](rendering.PrepareQueueItem.md)[]

Return a copy of the queue

#### Returns

[`PrepareQueueItem`](rendering.PrepareQueueItem.md)[]

The queue

***

### upload()

> **upload**(`resource?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Upload all the textures and graphics to the GPU (optionally add more resources to the queue first)

#### Parameters

##### resource?

[`PrepareSourceItem`](rendering.PrepareSourceItem.md) | [`PrepareSourceItem`](rendering.PrepareSourceItem.md)[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
