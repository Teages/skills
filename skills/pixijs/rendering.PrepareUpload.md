# Abstract Class: PrepareUpload

**`Advanced`**

Part of the prepare system. Responsible for uploading all the items to the GPU.
This class extends the resolver functionality and uploads the given queue items.

## Extends

- [`PrepareQueue`](rendering.PrepareQueue.md)

## Extended by

- [`PrepareSystem`](rendering.PrepareSystem.md)

## Constructors

### Constructor

> **new PrepareUpload**(`renderer`): `PrepareUpload`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

A reference to the current renderer

#### Returns

`PrepareUpload`

#### Inherited from

[`PrepareQueue`](rendering.PrepareQueue.md).[`constructor`](rendering.PrepareQueue.html#constructor)

## Properties

### uploadsPerFrame

> `static` **uploadsPerFrame**: `number` = `4`

The number of uploads to process per frame

#### Inherited from

[`PrepareQueue`](rendering.PrepareQueue.md).[`uploadsPerFrame`](rendering.PrepareQueue.html#uploadsperframe)

## Methods

### add()

> **add**(`resource`): `this`

Add a textures or graphics resource to the queue

#### Parameters

##### resource

[`PrepareSourceItem`](rendering.PrepareSourceItem.md) | [`PrepareSourceItem`](rendering.PrepareSourceItem.md)[]

#### Returns

`this`

#### Inherited from

[`PrepareQueue`](rendering.PrepareQueue.md).[`add`](rendering.PrepareQueue.html#add)

***

### dedupeQueue()

> **dedupeQueue**(): `void`

eliminate duplicates before processing

#### Returns

`void`

#### Inherited from

[`PrepareQueue`](rendering.PrepareQueue.md).[`dedupeQueue`](rendering.PrepareQueue.html#dedupequeue)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`PrepareQueue`](rendering.PrepareQueue.md).[`destroy`](rendering.PrepareQueue.html#destroy)

***

### getQueue()

> **getQueue**(): [`PrepareQueueItem`](rendering.PrepareQueueItem.md)[]

Return a copy of the queue

#### Returns

[`PrepareQueueItem`](rendering.PrepareQueueItem.md)[]

The queue

#### Inherited from

[`PrepareQueue`](rendering.PrepareQueue.md).[`getQueue`](rendering.PrepareQueue.html#getqueue)

***

### upload()

> **upload**(`resource?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Upload all the textures and graphics to the GPU (optionally add more resources to the queue first)

#### Parameters

##### resource?

[`PrepareSourceItem`](rendering.PrepareSourceItem.md) | [`PrepareSourceItem`](rendering.PrepareSourceItem.md)[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`PrepareQueue`](rendering.PrepareQueue.md).[`upload`](rendering.PrepareQueue.html#upload)
