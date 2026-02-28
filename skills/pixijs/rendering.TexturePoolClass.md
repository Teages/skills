# Class: TexturePoolClass

**`Advanced`**

Texture pool, used by FilterSystem and plugins.

Stores collection of temporary pow2 or screen-sized renderTextures

If you use custom RenderTexturePool for your filters, you can use methods
`getFilterTexture` and `returnFilterTexture` same as in default pool

## Constructors

### Constructor

> **new TexturePoolClass**(`textureOptions?`): `TexturePoolClass`

#### Parameters

##### textureOptions?

[`TextureSourceOptions`](rendering.TextureSourceOptions.md)

options that will be passed to BaseRenderTexture constructor

#### Returns

`TexturePoolClass`

## Properties

### enableFullScreen

> **enableFullScreen**: `boolean`

Allow renderTextures of the same size as screen, not just pow2

Automatically sets to true after `setScreenSize`

#### Default

```ts
false
```

***

### textureOptions

> **textureOptions**: [`TextureSourceOptions`](rendering.TextureSourceOptions.md)

The default options for texture pool

***

### textureStyle

> **textureStyle**: [`TextureStyle`](rendering.TextureStyle.md)

The default texture style for the pool

## Methods

### clear()

> **clear**(`destroyTextures?`): `void`

Clears the pool.

#### Parameters

##### destroyTextures?

`boolean`

Destroy all stored textures.

#### Returns

`void`

***

### createTexture()

> **createTexture**(`pixelWidth`, `pixelHeight`, `antialias`): [`Texture`](rendering.Texture.md)

Creates texture with params that were specified in pool constructor.

#### Parameters

##### pixelWidth

`number`

Width of texture in pixels.

##### pixelHeight

`number`

Height of texture in pixels.

##### antialias

`boolean`

#### Returns

[`Texture`](rendering.Texture.md)

***

### getOptimalTexture()

> **getOptimalTexture**(`frameWidth`, `frameHeight`, `resolution`, `antialias`): [`Texture`](rendering.Texture.md)

Gets a Power-of-Two render texture or fullScreen texture

#### Parameters

##### frameWidth

`number`

The minimum width of the render texture.

##### frameHeight

`number`

The minimum height of the render texture.

##### resolution

`number` = `1`

The resolution of the render texture.

##### antialias

`boolean`

#### Returns

[`Texture`](rendering.Texture.md)

The new render texture.

***

### getSameSizeTexture()

> **getSameSizeTexture**(`texture`, `antialias`): [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

Gets extra texture of the same size as input renderTexture

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

The texture to check what size it is.

##### antialias

`boolean` = `false`

Whether to use antialias.

#### Returns

[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

A texture that is a power of two

***

### returnTexture()

> **returnTexture**(`renderTexture`, `resetStyle`): `void`

Place a render texture back into the pool. Optionally reset the style of the texture to the default texture style.
useful if you modified the style of the texture after getting it from the pool.

#### Parameters

##### renderTexture

[`Texture`](rendering.Texture.md)

The renderTexture to free

##### resetStyle

`boolean` = `false`

Whether to reset the style of the texture to the default texture style

#### Returns

`void`
