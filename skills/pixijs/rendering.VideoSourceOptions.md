# Interface: VideoSourceOptions

**`Advanced`**

Options for video sources.

## Extends

- [`TextureSourceOptions`](rendering.TextureSourceOptions.md)\<[`VideoResource`](rendering.VideoResource.md)\>

## Properties

### \_resourceId?

> `optional` **\_resourceId**: `number`

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`_resourceId`](rendering.TextureSourceOptions.html#_resourceid)

***

### addressMode?

> `optional` **addressMode**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

setting this will set wrapModeU,wrapModeV and wrapModeW all at once!

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`addressMode`](rendering.TextureSourceOptions.html#addressmode)

***

### addressModeU?

> `optional` **addressModeU**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth coordinates, respectively.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`addressModeU`](rendering.TextureSourceOptions.html#addressmodeu)

***

### addressModeV?

> `optional` **addressModeV**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth coordinates, respectively.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`addressModeV`](rendering.TextureSourceOptions.html#addressmodev)

***

### addressModeW?

> `optional` **addressModeW**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

Specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth coordinates, respectively.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`addressModeW`](rendering.TextureSourceOptions.html#addressmodew)

***

### alphaMode?

> `optional` **alphaMode**: [`ALPHA_MODES`](rendering.ALPHA_MODES.md)

The alpha mode of the video.

#### Overrides

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`alphaMode`](rendering.TextureSourceOptions.html#alphamode)

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

### autoLoad?

> `optional` **autoLoad**: `boolean`

If true, the video will start loading immediately.

***

### autoPlay?

> `optional` **autoPlay**: `boolean`

If true, the video will start playing as soon as it is loaded.

***

### compare?

> `optional` **compare**: [`COMPARE_FUNCTION`](rendering.COMPARE_FUNCTION.md)

When provided the sampler will be a comparison sampler with the specified
[COMPARE\_FUNCTION](rendering.COMPARE_FUNCTION.md).
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`compare`](rendering.TextureSourceOptions.html#compare)

***

### crossorigin?

> `optional` **crossorigin**: `string` \| `boolean`

If true, the video will be loaded with the `crossorigin` attribute.

***

### destroyed?

> `readonly` `optional` **destroyed**: `boolean` = `false`

Has the style been destroyed?

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`destroyed`](rendering.TextureSourceOptions.html#destroyed)

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

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`lodMaxClamp`](rendering.TextureSourceOptions.html#lodmaxclamp)

***

### lodMinClamp?

> `optional` **lodMinClamp**: `number`

specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`lodMinClamp`](rendering.TextureSourceOptions.html#lodminclamp)

***

### loop?

> `optional` **loop**: `boolean`

If true, the video will loop when it ends.

***

### magFilter?

> `optional` **magFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

specifies the sampling behavior when the sample footprint is smaller than or equal to one texel.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`magFilter`](rendering.TextureSourceOptions.html#magfilter)

***

### maxAnisotropy?

> `optional` **maxAnisotropy**: `number`

Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support [TextureStyle#maxAnisotropy](rendering.TextureStyle.html#maxanisotropy) values in range
between 1 and 16, inclusive. The used value of [TextureStyle#maxAnisotropy](rendering.TextureStyle.html#maxanisotropy) will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear'

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`maxAnisotropy`](rendering.TextureSourceOptions.html#maxanisotropy)

***

### minFilter?

> `optional` **minFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

specifies the sampling behavior when the sample footprint is larger than one texel.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`minFilter`](rendering.TextureSourceOptions.html#minfilter)

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

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`mipmapFilter`](rendering.TextureSourceOptions.html#mipmapfilter)

***

### muted?

> `optional` **muted**: `boolean`

If true, the video will be muted.

***

### playsinline?

> `optional` **playsinline**: `boolean`

If true, the video will play inline.

***

### preload?

> `optional` **preload**: `boolean`

If true, the video will be preloaded.

***

### preloadTimeoutMs?

> `optional` **preloadTimeoutMs**: `number`

The time in milliseconds to wait for the video to preload before timing out.

***

### resolution?

> `optional` **resolution**: `number`

the resolution of the texture.

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`resolution`](rendering.TextureSourceOptions.html#resolution)

***

### resource?

> `optional` **resource**: [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)

the resource that will be uploaded to the GPU. This is where we get our pixels from
eg an ImageBimt / Canvas / Video etc

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`resource`](rendering.TextureSourceOptions.html#resource)

***

### scaleMode?

> `optional` **scaleMode**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

setting this will set magFilter,minFilter and mipmapFilter all at once!

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`scaleMode`](rendering.TextureSourceOptions.html#scalemode)

***

### updateFPS?

> `optional` **updateFPS**: `number`

The number of times a second to update the texture from the video. Leave at 0 to update at every render.

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

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`wrapMode`](rendering.TextureSourceOptions.html#wrapmode)

## Methods

### destroy()?

> `optional` **destroy**(): `void`

Destroys the style

#### Returns

`void`

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`destroy`](rendering.TextureSourceOptions.html#destroy)

***

### update()?

> `optional` **update**(): `void`

#### Returns

`void`

#### Inherited from

[`TextureSourceOptions`](rendering.TextureSourceOptions.md).[`update`](rendering.TextureSourceOptions.html#update)
