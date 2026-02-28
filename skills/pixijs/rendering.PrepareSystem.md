# Class: PrepareSystem

**`Advanced`**

The prepare system provides renderer-specific plugins for pre-rendering DisplayObjects. This is useful for
asynchronously preparing and uploading to the GPU assets, textures, graphics waiting to be displayed.

Do not instantiate this plugin directly. It is available from the `renderer.prepare` property.

## Example

```ts
import 'pixi.js/prepare';
import { Application, Graphics } from 'pixi.js';

// Create a new application (prepare will be auto-added to renderer)
const app = new Application();
await app.init();
document.body.appendChild(app.view);

// Don't start rendering right away
app.stop();

// Create a display object
const rect = new Graphics()
    .beginFill(0x00ff00)
    .drawRect(40, 40, 200, 200);

// Add to the stage
app.stage.addChild(rect);

// Don't start rendering until the graphic is uploaded to the GPU
app.renderer.prepare.upload(app.stage, () => {
    app.start();
});
```

## Extends

- [`PrepareUpload`](rendering.PrepareUpload.md)

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new PrepareSystem**(`renderer`): `PrepareSystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

A reference to the current renderer

#### Returns

`PrepareSystem`

#### Inherited from

[`PrepareUpload`](rendering.PrepareUpload.md).[`constructor`](rendering.PrepareUpload.html#constructor)

## Properties

### uploadsPerFrame

> `static` **uploadsPerFrame**: `number` = `4`

The number of uploads to process per frame

#### Inherited from

[`PrepareUpload`](rendering.PrepareUpload.md).[`uploadsPerFrame`](rendering.PrepareUpload.html#uploadsperframe)

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

[`PrepareUpload`](rendering.PrepareUpload.md).[`add`](rendering.PrepareUpload.html#add)

***

### dedupeQueue()

> **dedupeQueue**(): `void`

eliminate duplicates before processing

#### Returns

`void`

#### Inherited from

[`PrepareUpload`](rendering.PrepareUpload.md).[`dedupeQueue`](rendering.PrepareUpload.html#dedupequeue)

***

### destroy()

> **destroy**(): `void`

Destroys the plugin, don't use after this.

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

#### Overrides

[`PrepareUpload`](rendering.PrepareUpload.md).[`destroy`](rendering.PrepareUpload.html#destroy)

***

### getQueue()

> **getQueue**(): [`PrepareQueueItem`](rendering.PrepareQueueItem.md)[]

Return a copy of the queue

#### Returns

[`PrepareQueueItem`](rendering.PrepareQueueItem.md)[]

The queue

#### Inherited from

[`PrepareUpload`](rendering.PrepareUpload.md).[`getQueue`](rendering.PrepareUpload.html#getqueue)

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

[`PrepareUpload`](rendering.PrepareUpload.md).[`upload`](rendering.PrepareUpload.html#upload)
