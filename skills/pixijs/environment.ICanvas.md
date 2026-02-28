# Interface: ICanvas

**`Advanced`**

Common interface for HTMLCanvasElement, OffscreenCanvas, and other custom canvas classes.

## Extends

- `ICanvas`.[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)\>

## Properties

### addEventListener()?

> `optional` **addEventListener**: \{(`type`, `listener`, `options?`): `void`; \<`K`\>(`type`, `listener`, `options?`): `void`; \}

Adds the listener for the specified event.

#### Call Signature

> (`type`, `listener`, `options?`): `void`

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

#### Call Signature

> \<`K`\>(`type`, `listener`, `options?`): `void`

##### Type Parameters

###### K

`K` *extends* keyof [`WebGLContextEventMap`](environment.WebGLContextEventMap.md)

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

#### Param

The type of event to listen for.

#### Param

The callback to invoke when the event is fired.

#### Param

The options for adding event listener.

#### Returns

#### Overrides

`Partial.addEventListener`

***

### height

> **height**: `number`

Height of the canvas.

***

### parentNode?

> `readonly` `optional` **parentNode**: [`ICanvasParentNode`](environment.ICanvasParentNode.md)

Parent node of the canvas.

***

### removeEventListener()?

> `optional` **removeEventListener**: \{(`type`, `listener`, `options?`): `void`; \<`K`\>(`type`, `listener`, `options?`): `void`; \}

Removes the listener for the specified event.

#### Call Signature

> (`type`, `listener`, `options?`): `void`

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

#### Call Signature

> \<`K`\>(`type`, `listener`, `options?`): `void`

##### Type Parameters

###### K

`K` *extends* keyof [`WebGLContextEventMap`](environment.WebGLContextEventMap.md)

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

#### Param

The type of event to listen for.

#### Param

The callback to invoke when the event is fired.

#### Param

The options for removing event listener.

#### Returns

#### Overrides

`Partial.removeEventListener`

***

### style?

> `readonly` `optional` **style**: [`ICanvasStyle`](environment.ICanvasStyle.md)

Style of the canvas.

***

### width

> **width**: `number`

Width of the canvas.

## Methods

### convertToBlob()?

> `optional` **convertToBlob**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Blob`](https://developer.mozilla.org/docs/Web/API/Blob)\>

Get the content of the canvas as Blob.

#### Parameters

##### options?

The options for creating Blob.

###### quality?

`number`

A number between 0 and 1 indicating the image quality to be used when
     creating images using file formats that support lossy compression (such as `image/jpeg` or `image/webp`).
     A user agent will use its default quality value if this option is not specified, or if the number
     is outside the allowed range.

###### type?

`string`

A string indicating the image format. The default type is `image/png`;
     that type is also used if the given type isn't supported.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Blob`](https://developer.mozilla.org/docs/Web/API/Blob)\>

A `Promise` returning a Blob object representing the image contained in the canvas.

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Dispatches a event.

#### Parameters

##### event

[`Event`](https://developer.mozilla.org/docs/Web/API/Event)

The Event object to dispatch. Its Event.target property will be set to the current EventTarget.

#### Returns

`boolean`

Returns false if event is cancelable, and at least one of the event handlers which received event
                   called Event.preventDefault(). Otherwise true.

#### Overrides

`Partial.dispatchEvent`

***

### getBoundingClientRect()?

> `optional` **getBoundingClientRect**(): [`ICanvasRect`](environment.ICanvasRect.md)

Get the position and the size of the canvas.

#### Returns

[`ICanvasRect`](environment.ICanvasRect.md)

The smallest rectangle which contains the entire canvas.

***

### getContext()

#### Call Signature

> **getContext**(`contextId`, `options?`): [`ICanvasRenderingContext2D`](environment.ICanvasRenderingContext2D.md)

Get rendering context of the canvas.

##### Parameters

###### contextId

`"2d"`

The identifier of the type of context to create.

###### options?

[`ICanvasRenderingContext2DSettings`](environment.ICanvasRenderingContext2DSettings.md)

The options for creating context.

##### Returns

[`ICanvasRenderingContext2D`](environment.ICanvasRenderingContext2D.md)

The created context, or null if contextId is not supported.

#### Call Signature

> **getContext**(`contextId`, `options?`): [`ImageBitmapRenderingContext`](https://developer.mozilla.org/docs/Web/API/ImageBitmapRenderingContext)

##### Parameters

###### contextId

`"bitmaprenderer"`

###### options?

`ImageBitmapRenderingContextSettings`

##### Returns

[`ImageBitmapRenderingContext`](https://developer.mozilla.org/docs/Web/API/ImageBitmapRenderingContext)

#### Call Signature

> **getContext**(`contextId`, `options?`): [`WebGLRenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext)

##### Parameters

###### contextId

`"webgl"` | `"experimental-webgl"`

###### options?

`WebGLContextAttributes`

##### Returns

[`WebGLRenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext)

#### Call Signature

> **getContext**(`contextId`, `options?`): [`WebGL2RenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext)

##### Parameters

###### contextId

`"webgl2"` | `"experimental-webgl2"`

###### options?

`WebGLContextAttributes`

##### Returns

[`WebGL2RenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext)

#### Call Signature

> **getContext**(`contextId`): [`GPUCanvasContext`](https://developer.mozilla.org/docs/Web/API/GPUCanvasContext)

##### Parameters

###### contextId

`"webgpu"`

##### Returns

[`GPUCanvasContext`](https://developer.mozilla.org/docs/Web/API/GPUCanvasContext)

#### Call Signature

> **getContext**(`contextId`, `options?`): [`RenderingContext`](environment.RenderingContext.md)

##### Parameters

###### contextId

[`ContextIds`](environment.ContextIds.md)

###### options?

[`ContextSettings`](environment.ContextSettings.md)

##### Returns

[`RenderingContext`](environment.RenderingContext.md)

***

### toBlob()?

> `optional` **toBlob**(`callback`, `type?`, `quality?`): `void`

Creates a Blob from the content of the canvas.

#### Parameters

##### callback

(`blob`) => `void`

A callback function with the resulting `Blob` object
     as a single argument. `null` may be passed if the image cannot be created for any reason.

##### type?

`string`

A string indicating the image format. The default type is `image/png`;
     that type is also used if the given type isn't supported.

##### quality?

`number`

A number between 0 and 1 indicating the image quality to be used when
     creating images using file formats that support lossy compression (such as `image/jpeg` or `image/webp`).
     A user agent will use its default quality value if this option is not specified, or if the number
     is outside the allowed range.

#### Returns

`void`

***

### toDataURL()?

> `optional` **toDataURL**(`type?`, `quality?`): `string`

Get the content of the canvas as data URL.

#### Parameters

##### type?

`string`

A string indicating the image format. The default type is `image/png`;
     that type is also used if the given type isn't supported.

##### quality?

`number`

A number between 0 and 1 indicating the image quality to be used when
     creating images using file formats that support lossy compression (such as `image/jpeg` or `image/webp`).
     A user agent will use its default quality value if this option is not specified, or if the number
     is outside the allowed range.

#### Returns

`string`

A string containing the requested data URL.
