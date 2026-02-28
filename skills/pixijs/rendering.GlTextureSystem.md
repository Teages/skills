# Class: GlTextureSystem

**`Advanced`**

The system for managing textures in WebGL.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GlTextureSystem**(`renderer`): `GlTextureSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

#### Returns

`GlTextureSystem`

## Accessors

### managedTextures

#### Get Signature

> **get** **managedTextures**(): readonly [`TextureSource`](rendering.TextureSource.md)\<`any`\>[]

##### Deprecated

since 8.15.0

##### Returns

readonly [`TextureSource`](rendering.TextureSource.md)\<`any`\>[]

## Methods

### bind()

> **bind**(`texture`, `location`): `void`

#### Parameters

##### texture

[`BindableTexture`](rendering.BindableTexture.md)

##### location

`number` = `0`

#### Returns

`void`

***

### bindSource()

> **bindSource**(`source`, `location`): `void`

#### Parameters

##### source

[`TextureSource`](rendering.TextureSource.md)

##### location

`number` = `0`

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

### generateCanvas()

> **generateCanvas**(`texture`): [`ICanvas`](environment.ICanvas.md)

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

#### Returns

[`ICanvas`](environment.ICanvas.md)

#### Implementation of

`CanvasGenerator.generateCanvas`

***

### getGlSource()

> **getGlSource**(`source`): `GlTexture`

#### Parameters

##### source

[`TextureSource`](rendering.TextureSource.md)

#### Returns

`GlTexture`

***

### getPixels()

> **getPixels**(`texture`): [`GetPixelsOutput`](rendering.GetPixelsOutput.md)

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

#### Returns

[`GetPixelsOutput`](rendering.GetPixelsOutput.md)

#### Implementation of

`CanvasGenerator.getPixels`

***

### initSource()

> **initSource**(`source`): `void`

Initializes a texture source, if it has already been initialized nothing will happen.

#### Parameters

##### source

[`TextureSource`](rendering.TextureSource.md)

The texture source to initialize.

#### Returns

`void`

The initialized texture source.

***

### resetState()

> **resetState**(): `void`

#### Returns

`void`

***

### unbind()

> **unbind**(`texture`): `void`

#### Parameters

##### texture

[`BindableTexture`](rendering.BindableTexture.md)

#### Returns

`void`
