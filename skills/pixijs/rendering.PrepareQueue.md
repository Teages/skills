# Abstract Class: PrepareQueue

**`Advanced`**

Part of the prepare system. Responsible for uploading all the items to the GPU.
This class extends the base functionality and resolves given resource items ready for the queue.

## Extends

- [`PrepareBase`](rendering.PrepareBase.md)

## Extended by

- [`PrepareUpload`](rendering.PrepareUpload.md)

## Constructors

### Constructor

> **new PrepareQueue**(`renderer`): `PrepareQueue`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

A reference to the current renderer

#### Returns

`PrepareQueue`

#### Inherited from

[`PrepareBase`](rendering.PrepareBase.md).[`constructor`](rendering.PrepareBase.html#constructor)

## Properties

### uploadsPerFrame

> `static` **uploadsPerFrame**: `number` = `4`

The number of uploads to process per frame

#### Inherited from

[`PrepareBase`](rendering.PrepareBase.md).[`uploadsPerFrame`](rendering.PrepareBase.html#uploadsperframe)

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

[`PrepareBase`](rendering.PrepareBase.md).[`add`](rendering.PrepareBase.html#add)

***

### dedupeQueue()

> **dedupeQueue**(): `void`

eliminate duplicates before processing

#### Returns

`void`

#### Inherited from

[`PrepareBase`](rendering.PrepareBase.md).[`dedupeQueue`](rendering.PrepareBase.html#dedupequeue)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`PrepareBase`](rendering.PrepareBase.md).[`destroy`](rendering.PrepareBase.html#destroy)

***

### getQueue()

> **getQueue**(): [`PrepareQueueItem`](rendering.PrepareQueueItem.md)[]

Return a copy of the queue

#### Returns

[`PrepareQueueItem`](rendering.PrepareQueueItem.md)[]

The queue

#### Inherited from

[`PrepareBase`](rendering.PrepareBase.md).[`getQueue`](rendering.PrepareBase.html#getqueue)

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

[`PrepareBase`](rendering.PrepareBase.md).[`upload`](rendering.PrepareBase.html#upload)
