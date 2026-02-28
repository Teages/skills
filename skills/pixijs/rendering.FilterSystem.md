# Class: FilterSystem

**`Advanced`**

System that manages the filter pipeline

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new FilterSystem**(`renderer`): `FilterSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)\<[`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)\> | [`WebGPURenderer`](rendering.WebGPURenderer.md)\<[`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)\>

#### Returns

`FilterSystem`

## Properties

### renderer

> `readonly` **renderer**: [`WebGLRenderer`](rendering.WebGLRenderer.md)\<[`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)\> \| [`WebGPURenderer`](rendering.WebGPURenderer.md)\<[`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)\>

## Accessors

### activeBackTexture

#### Get Signature

> **get** **activeBackTexture**(): [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

The back texture of the currently active filter. Requires the filter to have `blendRequired` set to true.

##### Returns

[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

## Methods

### applyFilter()

> **applyFilter**(`filter`, `input`, `output`, `clear`): `void`

Applies a filter to a texture.

#### Parameters

##### filter

[`Filter`](filters.Filter.md)

The filter to apply.

##### input

[`Texture`](rendering.Texture.md)

The input texture.

##### output

[`RenderSurface`](rendering.RenderSurface.md)

The output render surface.

##### clear

`boolean`

Whether to clear the output surface before applying the filter.

#### Returns

`void`

***

### calculateSpriteMatrix()

> **calculateSpriteMatrix**(`outputMatrix`, `sprite`): [`Matrix`](maths.Matrix.md)

Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.

Use `outputMatrix * vTextureCoord` in the shader.

#### Parameters

##### outputMatrix

[`Matrix`](maths.Matrix.md)

The matrix to output to.

##### sprite

[`Sprite`](scene.Sprite.md)

The sprite to map to.

#### Returns

[`Matrix`](maths.Matrix.md)

The mapped matrix.

***

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### generateFilteredTexture()

> **generateFilteredTexture**(`params`): [`Texture`](rendering.Texture.md)

Applies filters to a texture.

This method takes a texture and a list of filters, applies the filters to the texture,
and returns the resulting texture.

#### Parameters

##### params

The parameters for applying filters.

###### filters

[`Filter`](filters.Filter.md)[]

The filters to apply.

###### texture

[`Texture`](rendering.Texture.md)

The texture to apply filters to.

#### Returns

[`Texture`](rendering.Texture.md)

The resulting texture after all filters have been applied.

#### Example

```ts
// Create a texture and a list of filters
const texture = new Texture(...);
const filters = [new BlurFilter(), new ColorMatrixFilter()];

// Apply the filters to the texture
const resultTexture = filterSystem.applyToTexture({ texture, filters });

// Use the resulting texture
sprite.texture = resultTexture;
```

Key Points:
1. padding is not currently supported here - so clipping may occur with filters that use padding.
2. If all filters are disabled or skipped, the original texture is returned.

***

### getBackTexture()

> **getBackTexture**(`lastRenderSurface`, `bounds`, `previousBounds?`): [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

Copies the last render surface to a texture.

#### Parameters

##### lastRenderSurface

[`RenderTarget`](rendering.RenderTarget.md)

The last render surface to copy from.

##### bounds

[`Bounds`](rendering.Bounds.md)

The bounds of the area to copy.

##### previousBounds?

[`Bounds`](rendering.Bounds.md)

The previous bounds to use for offsetting the copy.

#### Returns

[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>
