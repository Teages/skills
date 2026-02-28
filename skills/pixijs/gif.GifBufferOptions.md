# Interface: GifBufferOptions

**`Advanced`**

Options when constructing from buffer

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`CanvasSourceOptions`](rendering.CanvasSourceOptions.md), `"resource"`\>

## Properties

### \_resourceId?

> `optional` **\_resourceId**: `number`

#### Inherited from

`Omit._resourceId`

***

### addressMode?

> `optional` **addressMode**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

setting this will set wrapModeU,wrapModeV and wrapModeW all at once!

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`addressMode`](rendering.TextureStyleOptions.html#addressmode)

***

### addressModeU?

> `optional` **addressModeU**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth coordinates, respectively.

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`addressModeU`](rendering.TextureStyleOptions.html#addressmodeu)

***

### addressModeV?

> `optional` **addressModeV**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth coordinates, respectively.

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`addressModeV`](rendering.TextureStyleOptions.html#addressmodev)

***

### addressModeW?

> `optional` **addressModeW**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

Specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth coordinates, respectively.

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`addressModeW`](rendering.TextureStyleOptions.html#addressmodew)

***

### alphaMode?

> `optional` **alphaMode**: [`ALPHA_MODES`](rendering.ALPHA_MODES.md)

the alpha mode of the texture

#### Inherited from

[`CanvasSourceOptions`](rendering.CanvasSourceOptions.md).[`alphaMode`](rendering.CanvasSourceOptions.html#alphamode)

***

### antialias?

> `optional` **antialias**: `boolean`

Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`antialias`](rendering.TextureSourceOptions.html#antialias)

***

### arrayLayerCount?

> `optional` **arrayLayerCount**: `number`

**`Advanced`**

The number of array layers for this texture source.

This maps to WebGPU's `GPUTextureDescriptor.size.depthOrArrayLayers` and is used for array-backed textures
such as cube maps (6 layers).

#### Default

```ts
1
```

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`arrayLayerCount`](rendering.TextureSourceOptions.html#arraylayercount)

***

### autoDensity?

> `optional` **autoDensity**: `boolean`

Should the canvas be resized to preserve its screen width and height regardless
of the resolution of the renderer, this is only supported for HTMLCanvasElement
and will be ignored if the canvas is an OffscreenCanvas.

#### Inherited from

[`CanvasSourceOptions`](rendering.CanvasSourceOptions.md).[`autoDensity`](rendering.CanvasSourceOptions.html#autodensity)

***

### autoGarbageCollect?

> `optional` **autoGarbageCollect**: `boolean`

If true, the Garbage Collector will unload this texture if it is not used after a period of time

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`autoGarbageCollect`](rendering.TextureSourceOptions.html#autogarbagecollect)

***

### autoGenerateMipmaps?

> `optional` **autoGenerateMipmaps**: `boolean`

Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`autoGenerateMipmaps`](rendering.TextureSourceOptions.html#autogeneratemipmaps)

***

### compare?

> `optional` **compare**: [`COMPARE_FUNCTION`](rendering.COMPARE_FUNCTION.md)

When provided the sampler will be a comparison sampler with the specified
[COMPARE\_FUNCTION](rendering.COMPARE_FUNCTION.md).
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules.

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`compare`](rendering.TextureStyleOptions.html#compare)

***

### destroyed?

> `readonly` `optional` **destroyed**: `boolean` = `false`

Has the style been destroyed?

#### Inherited from

`Omit.destroyed`

***

### dimensions?

> `optional` **dimensions**: [`TEXTURE_DIMENSIONS`](rendering.TEXTURE_DIMENSIONS.md)

how many dimensions does this texture have? currently v8 only supports 2d

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`dimensions`](rendering.TextureSourceOptions.html#dimensions)

***

### dynamic?

> `optional` **dynamic**: `boolean`

Used by RenderTexture.create to allow resizing. Not used by TextureSource itself.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`dynamic`](rendering.TextureSourceOptions.html#dynamic)

***

### format?

> `optional` **format**: [`TEXTURE_FORMATS`](rendering.TEXTURE_FORMATS.md)

the format that the texture data has

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`format`](rendering.TextureSourceOptions.html#format)

***

### fps?

> `optional` **fps**: `number`

FPS to use when the GIF animation doesn't define any delay between frames

***

### height?

> `optional` **height**: `number`

the pixel height of this texture source. This is the REAL pure number, not accounting resolution

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`height`](rendering.TextureSourceOptions.html#height)

***

### label?

> `optional` **label**: `string`

optional label, can be used for debugging

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`label`](rendering.TextureSourceOptions.html#label)

***

### lodMaxClamp?

> `optional` **lodMaxClamp**: `number`

Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture.

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`lodMaxClamp`](rendering.TextureStyleOptions.html#lodmaxclamp)

***

### lodMinClamp?

> `optional` **lodMinClamp**: `number`

specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture.

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`lodMinClamp`](rendering.TextureStyleOptions.html#lodminclamp)

***

### magFilter?

> `optional` **magFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

specifies the sampling behavior when the sample footprint is smaller than or equal to one texel.

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`magFilter`](rendering.TextureStyleOptions.html#magfilter)

***

### maxAnisotropy?

> `optional` **maxAnisotropy**: `number`

Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support [TextureStyle#maxAnisotropy](rendering.TextureStyle.html#maxanisotropy) values in range
between 1 and 16, inclusive. The used value of [TextureStyle#maxAnisotropy](rendering.TextureStyle.html#maxanisotropy) will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear'

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`maxAnisotropy`](rendering.TextureStyleOptions.html#maxanisotropy)

***

### minFilter?

> `optional` **minFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

specifies the sampling behavior when the sample footprint is larger than one texel.

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`minFilter`](rendering.TextureStyleOptions.html#minfilter)

***

### mipLevelCount?

> `optional` **mipLevelCount**: `number`

The number of mip levels to generate for this texture. this is  overridden if autoGenerateMipmaps is true

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`mipLevelCount`](rendering.TextureSourceOptions.html#miplevelcount)

***

### mipmapFilter?

> `optional` **mipmapFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

specifies behavior for sampling between mipmap levels.

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`mipmapFilter`](rendering.TextureStyleOptions.html#mipmapfilter)

***

### resolution?

> `optional` **resolution**: `number`

the resolution of the texture.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`resolution`](rendering.TextureSourceOptions.html#resolution)

***

### scaleMode?

> `optional` **scaleMode**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

setting this will set magFilter,minFilter and mipmapFilter all at once!

#### Inherited from

[`TextureStyleOptions`](rendering.TextureStyleOptions.md).[`scaleMode`](rendering.TextureStyleOptions.html#scalemode)

***

### transparent?

> `optional` **transparent**: `boolean`

if true, this canvas will be set up to be transparent where possible

#### Inherited from

[`CanvasSourceOptions`](rendering.CanvasSourceOptions.md).[`transparent`](rendering.CanvasSourceOptions.html#transparent)

***

### viewDimension?

> `optional` **viewDimension**: [`TEXTURE_VIEW_DIMENSIONS`](rendering.TEXTURE_VIEW_DIMENSIONS.md)

How this texture is viewed/sampled by shaders.

This aligns with WebGPU's `GPUTextureViewDescriptor.dimension`. For example, cube maps are typically stored as a
2D texture with 6 array layers (`dimensions: '2d'`) but viewed as `viewDimension: 'cube'`.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`viewDimension`](rendering.TextureSourceOptions.html#viewdimension)

***

### width?

> `optional` **width**: `number`

the pixel width of this texture source. This is the REAL pure number, not accounting resolution

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`width`](rendering.TextureSourceOptions.html#width)

***

### wrapMode?

> `optional` **wrapMode**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

#### Inherited from

`Omit.wrapMode`

## Methods

### destroy()?

> `optional` **destroy**(): `void`

Destroys the style

#### Returns

`void`

#### Inherited from

`Omit.destroy`

***

### update()?

> `optional` **update**(): `void`

#### Returns

`void`

#### Inherited from

`Omit.update`
