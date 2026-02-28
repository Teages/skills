# Class: CanvasTextureSystem

**`Advanced`**

Texture helper system for CanvasRenderer.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new CanvasTextureSystem**(`renderer`): `CanvasTextureSystem`

#### Parameters

##### renderer

[`CanvasRenderer`](rendering.CanvasRenderer.md)

The owning CanvasRenderer.

#### Returns

`CanvasTextureSystem`

## Methods

### destroy()

> **destroy**(): `void`

Destroys the system (no-op for canvas).

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### generateCanvas()

> **generateCanvas**(`texture`): [`ICanvas`](environment.ICanvas.md)

Creates a canvas containing the texture's frame.

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

Texture to render.

#### Returns

[`ICanvas`](environment.ICanvas.md)

#### Implementation of

`CanvasGenerator.generateCanvas`

***

### getPixels()

> **getPixels**(`texture`): [`GetPixelsOutput`](rendering.GetPixelsOutput.md)

Reads pixel data from a texture.

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

Texture to read.

#### Returns

[`GetPixelsOutput`](rendering.GetPixelsOutput.md)

#### Implementation of

`CanvasGenerator.getPixels`

***

### init()

> **init**(): `void`

Initializes the system (no-op for canvas).

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)

***

### initSource()

> **initSource**(`_source`): `void`

Initializes a texture source (no-op for canvas).

#### Parameters

##### \_source

[`TextureSource`](rendering.TextureSource.md)

Texture source.

#### Returns

`void`
