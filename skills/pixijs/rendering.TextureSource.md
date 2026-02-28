# Class: TextureSource\<T\>

**`Advanced`**

A TextureSource stores the information that represents an image.
All textures have require TextureSource, which contains information about the source.
Therefore you can have many textures all using a single TextureSource (eg a sprite sheet)

This is an class is extended depending on the source of the texture.
Eg if you are using an an image as your resource, then an ImageSource is used.

## Extends

- `EventEmitter`\<\{ `change`: [`BindResource`](rendering.BindResource.md); `destroy`: `TextureSource`; `error`: [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error); `resize`: `TextureSource`; `styleChange`: `TextureSource`; `unload`: `TextureSource`; `update`: `TextureSource`; `updateMipmaps`: `TextureSource`; \}\>

## Extended by

- [`BufferImageSource`](rendering.BufferImageSource.md)
- [`CanvasSource`](rendering.CanvasSource.md)
- [`CompressedSource`](rendering.CompressedSource.md)
- [`CubeTextureSource`](rendering.CubeTextureSource.md)
- [`ExternalSource`](rendering.ExternalSource.md)
- [`ImageSource`](rendering.ImageSource.md)
- [`VideoSource`](rendering.VideoSource.md)

## Type Parameters

### T

`T` *extends* [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\> = `any`

## Implements

- [`BindResource`](rendering.BindResource.md)
- [`GPUDataOwner`](rendering.GPUDataOwner.md)
- [`GCable`](rendering.GCable.md)

## Constructors

### Constructor

> **new TextureSource**\<`T`\>(`options`): `TextureSource`\<`T`\>

#### Parameters

##### options

[`TextureSourceOptions`](rendering.TextureSourceOptions.md)\<`T`\> = `{}`

options for creating a new TextureSource

#### Returns

`TextureSource`\<`T`\>

#### Overrides

`EventEmitter<{ change: BindResource; update: TextureSource; unload: TextureSource; destroy: TextureSource; resize: TextureSource; styleChange: TextureSource; updateMipmaps: TextureSource; error: Error; }>.constructor`

## Properties

### \_gcData?

> `optional` **\_gcData**: [`GCData`](rendering.GCData.md)

GC tracking data, undefined if not being tracked

#### Implementation of

[`GCable`](rendering.GCable.md).[`_gcData`](rendering.GCable.html#_gcdata)

***

### alphaMode

> **alphaMode**: [`ALPHA_MODES`](rendering.ALPHA_MODES.md)

the alpha mode of the texture

***

### antialias

> **antialias**: `boolean` = `false`

Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture.

***

### arrayLayerCount

> **arrayLayerCount**: `number` = `1`

how many array layers this texture has (WebGPU depthOrArrayLayers)

***

### autoGarbageCollect

> **autoGarbageCollect**: `boolean`

If true, the Garbage Collector will unload this texture if it is not used after a period of time

#### Implementation of

[`GCable`](rendering.GCable.md).[`autoGarbageCollect`](rendering.GCable.html#autogarbagecollect)

***

### autoGenerateMipmaps

> **autoGenerateMipmaps**: `boolean` = `false`

Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture.

***

### destroyed

> `readonly` **destroyed**: `boolean`

Has the source been destroyed?

#### Implementation of

`BindResource.destroyed`

***

### dimension

> **dimension**: [`TEXTURE_DIMENSIONS`](rendering.TEXTURE_DIMENSIONS.md) = `'2d'`

how many dimensions does this texture have? currently v8 only supports 2d

***

### format

> **format**: [`TEXTURE_FORMATS`](rendering.TEXTURE_FORMATS.md) = `'rgba8unorm'`

the format that the texture data has

***

### height

> **height**: `number` = `1`

the height of this texture source, accounting for resolution
eg pixelHeight 200, resolution 2, then height will be 100

***

### isPowerOfTwo

> **isPowerOfTwo**: `boolean`

***

### label

> **label**: `string`

optional label, can be used for debugging

***

### mipLevelCount

> **mipLevelCount**: `number` = `1`

The number of mip levels to generate for this texture.
this is overridden if autoGenerateMipmaps is true. it is read only!

***

### pixelHeight

> **pixelHeight**: `number` = `1`

the pixel height of this texture source. This is the REAL pure number, not accounting resolution

***

### pixelWidth

> **pixelWidth**: `number` = `1`

the pixel width of this texture source. This is the REAL pure number, not accounting resolution

***

### resource

> **resource**: `T`

the resource that will be uploaded to the GPU. This is where we get our pixels from
eg an ImageBimt / Canvas / Video etc

***

### uid

> `readonly` **uid**: `number`

unique id for this Texture source

***

### viewDimension

> **viewDimension**: [`TEXTURE_VIEW_DIMENSIONS`](rendering.TEXTURE_VIEW_DIMENSIONS.md) = `'2d'`

how this texture is viewed/sampled by shaders (WebGPU view dimension)

***

### width

> **width**: `number` = `1`

the width of this texture source, accounting for resolution
eg pixelWidth 200, resolution 2, then width will be 100

***

### defaultOptions

> `static` **defaultOptions**: [`TextureSourceOptions`](rendering.TextureSourceOptions.md)

The default options used when creating a new TextureSource. override these to add your own defaults

***

### from()

> `static` **from**: (`resource`) => `TextureSource`

A helper function that creates a new TextureSource based on the resource you provide.

#### Parameters

##### resource

[`TextureResourceOrOptions`](rendering.TextureResourceOrOptions.md)

The resource to create the texture source from.

#### Returns

`TextureSource`

## Accessors

### addressMode

#### Get Signature

> **get** **addressMode**(): [`WRAP_MODE`](rendering.WRAP_MODE.md)

setting this will set wrapModeU, wrapModeV and wrapModeW all at once!

##### Returns

[`WRAP_MODE`](rendering.WRAP_MODE.md)

#### Set Signature

> **set** **addressMode**(`value`): `void`

##### Parameters

###### value

[`WRAP_MODE`](rendering.WRAP_MODE.md)

##### Returns

`void`

***

### lodMaxClamp

#### Get Signature

> **get** **lodMaxClamp**(): `number`

Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture.

##### Returns

`number`

#### Set Signature

> **set** **lodMaxClamp**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### lodMinClamp

#### Get Signature

> **get** **lodMinClamp**(): `number`

Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture.

##### Returns

`number`

#### Set Signature

> **set** **lodMinClamp**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### magFilter

#### Get Signature

> **get** **magFilter**(): [`SCALE_MODE`](rendering.SCALE_MODE.md)

Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel.

##### Returns

[`SCALE_MODE`](rendering.SCALE_MODE.md)

#### Set Signature

> **set** **magFilter**(`value`): `void`

##### Parameters

###### value

[`SCALE_MODE`](rendering.SCALE_MODE.md)

##### Returns

`void`

***

### maxAnisotropy

#### Get Signature

> **get** **maxAnisotropy**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **maxAnisotropy**(`value`): `void`

Specifies the maximum anisotropy value clamp used by the sampler.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### minFilter

#### Get Signature

> **get** **minFilter**(): [`SCALE_MODE`](rendering.SCALE_MODE.md)

Specifies the sampling behavior when the sample footprint is larger than one texel.

##### Returns

[`SCALE_MODE`](rendering.SCALE_MODE.md)

#### Set Signature

> **set** **minFilter**(`value`): `void`

##### Parameters

###### value

[`SCALE_MODE`](rendering.SCALE_MODE.md)

##### Returns

`void`

***

### mipmapFilter

#### Get Signature

> **get** **mipmapFilter**(): [`SCALE_MODE`](rendering.SCALE_MODE.md)

Specifies behavior for sampling between mipmap levels.

##### Returns

[`SCALE_MODE`](rendering.SCALE_MODE.md)

#### Set Signature

> **set** **mipmapFilter**(`value`): `void`

##### Parameters

###### value

[`SCALE_MODE`](rendering.SCALE_MODE.md)

##### Returns

`void`

***

### repeatMode

#### Get Signature

> **get** **repeatMode**(): [`WRAP_MODE`](rendering.WRAP_MODE.md)

setting this will set wrapModeU, wrapModeV and wrapModeW all at once!

##### Returns

[`WRAP_MODE`](rendering.WRAP_MODE.md)

#### Set Signature

> **set** **repeatMode**(`value`): `void`

##### Parameters

###### value

[`WRAP_MODE`](rendering.WRAP_MODE.md)

##### Returns

`void`

***

### resolution

#### Get Signature

> **get** **resolution**(): `number`

the resolution of the texture. Changing this number, will not change the number of pixels in the actual texture
but will the size of the texture when rendered.

changing the resolution of this texture to 2 for example will make it appear twice as small when rendered (as pixel
density will have increased)

##### Returns

`number`

#### Set Signature

> **set** **resolution**(`resolution`): `void`

##### Parameters

###### resolution

`number`

##### Returns

`void`

***

### resourceHeight

#### Get Signature

> **get** **resourceHeight**(): `number`

the height of the resource. This is the REAL pure number, not accounting resolution

##### Returns

`number`

***

### resourceWidth

#### Get Signature

> **get** **resourceWidth**(): `number`

the width of the resource. This is the REAL pure number, not accounting resolution

##### Returns

`number`

***

### scaleMode

#### Get Signature

> **get** **scaleMode**(): [`SCALE_MODE`](rendering.SCALE_MODE.md)

setting this will set magFilter,minFilter and mipmapFilter all at once!

##### Returns

[`SCALE_MODE`](rendering.SCALE_MODE.md)

#### Set Signature

> **set** **scaleMode**(`value`): `void`

##### Parameters

###### value

[`SCALE_MODE`](rendering.SCALE_MODE.md)

##### Returns

`void`

***

### source

#### Get Signature

> **get** **source**(): `TextureSource`

returns itself

##### Returns

`TextureSource`

***

### style

#### Get Signature

> **get** **style**(): [`TextureStyle`](rendering.TextureStyle.md)

the style of the texture

##### Returns

[`TextureStyle`](rendering.TextureStyle.md)

#### Set Signature

> **set** **style**(`value`): `void`

##### Parameters

###### value

[`TextureStyle`](rendering.TextureStyle.md)

##### Returns

`void`

***

### wrapMode

#### Get Signature

> **get** **wrapMode**(): [`WRAP_MODE`](rendering.WRAP_MODE.md)

##### Returns

[`WRAP_MODE`](rendering.WRAP_MODE.md)

#### Set Signature

> **set** **wrapMode**(`value`): `void`

##### Parameters

###### value

[`WRAP_MODE`](rendering.WRAP_MODE.md)

##### Returns

`void`

## Methods

### destroy()

> **destroy**(): `void`

Destroys this texture source

#### Returns

`void`

***

### resize()

> **resize**(`width?`, `height?`, `resolution?`): `boolean`

Resize the texture, this is handy if you want to use the texture as a render texture

#### Parameters

##### width?

`number`

the new width of the texture

##### height?

`number`

the new height of the texture

##### resolution?

`number`

the new resolution of the texture

#### Returns

`boolean`

- if the texture was resized

***

### unload()

> **unload**(): `void`

This will unload the Texture source from the GPU. This will free up the GPU memory
As soon as it is required fore rendering, it will be re-uploaded.

#### Returns

`void`

#### Implementation of

[`GCable`](rendering.GCable.md).[`unload`](rendering.GCable.html#unload)

***

### update()

> **update**(): `void`

call this if you have modified the texture outside of the constructor

#### Returns

`void`

***

### updateMipmaps()

> **updateMipmaps**(): `void`

Lets the renderer know that this texture has been updated and its mipmaps should be re-generated.
This is only important for RenderTexture instances, as standard Texture instances will have their
mipmaps generated on upload. You should call this method after you make any change to the texture

The reason for this is is can be quite expensive to update mipmaps for a texture. So by default,
We want you, the developer to specify when this action should happen.

Generally you don't want to have mipmaps generated on Render targets that are changed every frame,

#### Returns

`void`

***

### test()

> `static` **test**(`_resource`): `any`

#### Parameters

##### \_resource

`any`

#### Returns

`any`
