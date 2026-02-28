# Interface: ImageLike

**`Advanced`**

Interface for HTMLImageElement.

## Extends

- [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

## Properties

### complete

> `readonly` **complete**: `boolean`

Whether or not the image has completely loaded.

***

### crossOrigin

> **crossOrigin**: `string`

The Cross-Origin Resource Sharing (CORS) setting to use when retrieving the image.

***

### currentSrc

> `readonly` **currentSrc**: `string`

The URL of the image which is currently presented in the <img> element it represents.

***

### height

> **height**: `number`

The height.

***

### onerror()

> **onerror**: (`this`, `ev`) => `any`

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

[`Event`](https://developer.mozilla.org/docs/Web/API/Event)

#### Returns

`any`

***

### onload()

> **onload**: (`this`, `ev`) => `any`

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

[`Event`](https://developer.mozilla.org/docs/Web/API/Event)

#### Returns

`any`

***

### src

> **src**: `string`

The address or URL of the a media resource that is to be considered.

***

### width

> **width**: `number`

The width.

## Methods

### decode()

> **decode**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Returns a Promise that resolves once the image is decoded.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### remove()

> **remove**(): `void`

Removes the image from the DOM and cleans up resources.

#### Returns

`void`
