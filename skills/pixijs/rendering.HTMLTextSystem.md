# Class: HTMLTextSystem

**`Advanced`**

System plugin to the renderer to manage HTMLText

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new HTMLTextSystem**(`renderer`): `HTMLTextSystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

#### Returns

`HTMLTextSystem`

## Methods

### decreaseReferenceCount()

> **decreaseReferenceCount**(`textKey`): `void`

Decreases the reference count for a texture.
If the count reaches zero, the texture is cleaned up.

#### Parameters

##### textKey

`string`

The key associated with the HTMLText instance.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### getManagedTexture()

> **getManagedTexture**(`text`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>

Increases the reference count for a texture.

#### Parameters

##### text

[`HTMLText`](scene.HTMLText.md)

The HTMLText instance associated with the texture.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>

***

### getReferenceCount()

> **getReferenceCount**(`textKey`): `number`

Gets the current reference count for a texture associated with a text key.

#### Parameters

##### textKey

`string`

The unique key identifying the text style configuration

#### Returns

`number`

The number of Text instances currently using this texture

***

### ~~getTexture()~~

> **getTexture**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>

#### Parameters

##### options

[`HTMLTextOptions`](text.HTMLTextOptions.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>

#### Deprecated

Use getTexturePromise instead

***

### getTexturePromise()

> **getTexturePromise**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>

Returns a promise that resolves to a texture for the given HTMLText options.

#### Parameters

##### options

[`HTMLTextOptions`](text.HTMLTextOptions.md)

The options for the HTMLText.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>

A promise that resolves to a Texture.

***

### returnTexturePromise()

> **returnTexturePromise**(`texturePromise`): `void`

#### Parameters

##### texturePromise

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>

#### Returns

`void`
