# Abstract Class: AbstractTextSystem

**`Advanced`**

Base system plugin to the renderer to manage canvas text.

## Extended by

- [`CanvasRendererTextSystem`](rendering.CanvasRendererTextSystem.md)
- [`CanvasTextSystem`](rendering.CanvasTextSystem.md)

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new AbstractTextSystem**(`renderer`, `retainCanvasContext`): `AbstractTextSystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

##### retainCanvasContext

`boolean`

#### Returns

`AbstractTextSystem`

## Methods

### decreaseReferenceCount()

> **decreaseReferenceCount**(`textKey`): `void`

Decreases the reference count for a texture associated with a text key.
When the reference count reaches zero, the texture is returned to the pool.

#### Parameters

##### textKey

`string`

The unique key identifying the text style configuration

#### Returns

`void`

#### Remarks

This method is crucial for memory management, ensuring textures are properly
cleaned up when they are no longer needed by any Text instances.

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

> **getManagedTexture**(`text`): [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

Gets or creates a managed texture for a Text object. This method handles texture reuse and reference counting.

#### Parameters

##### text

[`Text`](scene.Text.md)

The Text object that needs a texture

#### Returns

[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

A Texture instance that represents the rendered text

#### Remarks

This method performs the following:
1. Sets the appropriate resolution based on auto-resolution settings
2. Checks if a texture already exists for the text's style
3. Creates a new texture if needed or returns an existing one
4. Manages reference counting for texture reuse

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

### getTexture()

#### Call Signature

> **getTexture**(`text`, `resolution`, `style`, `textKey`): [`Texture`](rendering.Texture.md)

##### Parameters

###### text

`string`

###### resolution

`number`

###### style

[`TextStyle`](text.TextStyle.md)

###### textKey

`string`

##### Returns

[`Texture`](rendering.Texture.md)

##### Deprecated

since 8.0.0

#### Call Signature

> **getTexture**(`options`): [`Texture`](rendering.Texture.md)

This is a function that will create a texture from a text string, style and resolution.
Useful if you want to make a texture of your text and use if for various pixi things!

##### Parameters

###### options

[`CanvasTextOptions`](scene.CanvasTextOptions.md)

The options of the text that will be used to generate the texture.

##### Returns

[`Texture`](rendering.Texture.md)

the newly created texture

***

### ~~renderTextToCanvas()~~

> **renderTextToCanvas**(): `void`

Renders text to its canvas, and updates its texture.

#### Returns

`void`

#### Deprecated

since 8.10.0

***

### returnTexture()

> **returnTexture**(`texture`): `void`

Returns a texture that was created wit the above `getTexture` function.
Handy if you are done with a texture and want to return it to the pool.

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

The texture to be returned.

#### Returns

`void`
