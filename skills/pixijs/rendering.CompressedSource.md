# Class: CompressedSource

**`Advanced`**

A texture source that uses a compressed resource, such as an array of Uint8Arrays.
It is used for compressed textures that can be uploaded to the GPU.

## Extends

- [`TextureSource`](rendering.TextureSource.md)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)[]\>

## Constructors

### Constructor

> **new CompressedSource**(`options`): `CompressedSource`

#### Parameters

##### options

[`TextureSourceOptions`](rendering.TextureSourceOptions.md)

#### Returns

`CompressedSource`

#### Overrides

[`TextureSource`](rendering.TextureSource.md).[`constructor`](rendering.TextureSource.html#constructor)

## Properties

### \_gcData?

> `optional` **\_gcData**: [`GCData`](rendering.GCData.md)

GC tracking data, undefined if not being tracked

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`_gcData`](rendering.TextureSource.html#_gcdata)

***

### alphaMode

> **alphaMode**: [`ALPHA_MODES`](rendering.ALPHA_MODES.md)

the alpha mode of the texture

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`alphaMode`](rendering.TextureSource.html#alphamode)

***

### antialias

> **antialias**: `boolean` = `false`

Only really affects RenderTextures.
Should we use antialiasing for this texture. It will look better, but may impact performance as a
Blit operation will be required to resolve the texture.

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`antialias`](rendering.TextureSource.html#antialias)

***

### arrayLayerCount

> **arrayLayerCount**: `number` = `1`

how many array layers this texture has (WebGPU depthOrArrayLayers)

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`arrayLayerCount`](rendering.TextureSource.html#arraylayercount)

***

### autoGarbageCollect

> **autoGarbageCollect**: `boolean`

If true, the Garbage Collector will unload this texture if it is not used after a period of time

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`autoGarbageCollect`](rendering.TextureSource.html#autogarbagecollect)

***

### autoGenerateMipmaps

> **autoGenerateMipmaps**: `boolean` = `false`

Should we auto generate mipmaps for this texture? This will automatically generate mipmaps
for this texture when uploading to the GPU. Mipmapped textures take up more memory, but
can look better when scaled down.

For performance reasons, it is recommended to NOT use this with RenderTextures, as they are often updated every frame.
If you do, make sure to call `updateMipmaps` after you update the texture.

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`autoGenerateMipmaps`](rendering.TextureSource.html#autogeneratemipmaps)

***

### destroyed

> `readonly` **destroyed**: `boolean`

Has the source been destroyed?

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`destroyed`](rendering.TextureSource.html#destroyed)

***

### dimension

> **dimension**: [`TEXTURE_DIMENSIONS`](rendering.TEXTURE_DIMENSIONS.md) = `'2d'`

how many dimensions does this texture have? currently v8 only supports 2d

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`dimension`](rendering.TextureSource.html#dimension)

***

### format

> **format**: [`TEXTURE_FORMATS`](rendering.TEXTURE_FORMATS.md) = `'rgba8unorm'`

the format that the texture data has

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`format`](rendering.TextureSource.html#format)

***

### height

> **height**: `number` = `1`

the height of this texture source, accounting for resolution
eg pixelHeight 200, resolution 2, then height will be 100

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`height`](rendering.TextureSource.html#height)

***

### isPowerOfTwo

> **isPowerOfTwo**: `boolean`

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`isPowerOfTwo`](rendering.TextureSource.html#ispoweroftwo)

***

### label

> **label**: `string`

optional label, can be used for debugging

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`label`](rendering.TextureSource.html#label)

***

### mipLevelCount

> **mipLevelCount**: `number` = `1`

The number of mip levels to generate for this texture.
this is overridden if autoGenerateMipmaps is true. it is read only!

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`mipLevelCount`](rendering.TextureSource.html#miplevelcount)

***

### pixelHeight

> **pixelHeight**: `number` = `1`

the pixel height of this texture source. This is the REAL pure number, not accounting resolution

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`pixelHeight`](rendering.TextureSource.html#pixelheight)

***

### pixelWidth

> **pixelWidth**: `number` = `1`

the pixel width of this texture source. This is the REAL pure number, not accounting resolution

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`pixelWidth`](rendering.TextureSource.html#pixelwidth)

***

### resource

> **resource**: [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>[]

the resource that will be uploaded to the GPU. This is where we get our pixels from
eg an ImageBimt / Canvas / Video etc

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`resource`](rendering.TextureSource.html#resource)

***

### uid

> `readonly` **uid**: `number`

unique id for this Texture source

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`uid`](rendering.TextureSource.html#uid)

***

### viewDimension

> **viewDimension**: [`TEXTURE_VIEW_DIMENSIONS`](rendering.TEXTURE_VIEW_DIMENSIONS.md) = `'2d'`

how this texture is viewed/sampled by shaders (WebGPU view dimension)

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`viewDimension`](rendering.TextureSource.html#viewdimension)

***

### width

> **width**: `number` = `1`

the width of this texture source, accounting for resolution
eg pixelWidth 200, resolution 2, then width will be 100

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`width`](rendering.TextureSource.html#width)

***

### defaultOptions

> `static` **defaultOptions**: [`TextureSourceOptions`](rendering.TextureSourceOptions.md)

The default options used when creating a new TextureSource. override these to add your own defaults

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`defaultOptions`](rendering.TextureSource.html#defaultoptions)

***

### from()

> `static` **from**: (`resource`) => [`TextureSource`](rendering.TextureSource.md)

A helper function that creates a new TextureSource based on the resource you provide.

#### Parameters

##### resource

[`TextureResourceOrOptions`](rendering.TextureResourceOrOptions.md)

The resource to create the texture source from.

#### Returns

[`TextureSource`](rendering.TextureSource.md)

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`from`](rendering.TextureSource.html#from)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`addressMode`](rendering.TextureSource.html#addressmode)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`lodMaxClamp`](rendering.TextureSource.html#lodmaxclamp)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`lodMinClamp`](rendering.TextureSource.html#lodminclamp)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`magFilter`](rendering.TextureSource.html#magfilter)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`maxAnisotropy`](rendering.TextureSource.html#maxanisotropy)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`minFilter`](rendering.TextureSource.html#minfilter)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`mipmapFilter`](rendering.TextureSource.html#mipmapfilter)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`repeatMode`](rendering.TextureSource.html#repeatmode)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`resolution`](rendering.TextureSource.html#resolution)

***

### resourceHeight

#### Get Signature

> **get** **resourceHeight**(): `number`

the height of the resource. This is the REAL pure number, not accounting resolution

##### Returns

`number`

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`resourceHeight`](rendering.TextureSource.html#resourceheight)

***

### resourceWidth

#### Get Signature

> **get** **resourceWidth**(): `number`

the width of the resource. This is the REAL pure number, not accounting resolution

##### Returns

`number`

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`resourceWidth`](rendering.TextureSource.html#resourcewidth)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`scaleMode`](rendering.TextureSource.html#scalemode)

***

### source

#### Get Signature

> **get** **source**(): [`TextureSource`](rendering.TextureSource.md)

returns itself

##### Returns

[`TextureSource`](rendering.TextureSource.md)

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`source`](rendering.TextureSource.html#source)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`style`](rendering.TextureSource.html#style)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`wrapMode`](rendering.TextureSource.html#wrapmode)

## Methods

### destroy()

> **destroy**(): `void`

Destroys this texture source

#### Returns

`void`

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`destroy`](rendering.TextureSource.html#destroy)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`resize`](rendering.TextureSource.html#resize)

***

### unload()

> **unload**(): `void`

This will unload the Texture source from the GPU. This will free up the GPU memory
As soon as it is required fore rendering, it will be re-uploaded.

#### Returns

`void`

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`unload`](rendering.TextureSource.html#unload)

***

### update()

> **update**(): `void`

call this if you have modified the texture outside of the constructor

#### Returns

`void`

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`update`](rendering.TextureSource.html#update)

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

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`updateMipmaps`](rendering.TextureSource.html#updatemipmaps)

***

### test()

> `static` **test**(`_resource`): `any`

#### Parameters

##### \_resource

`any`

#### Returns

`any`

#### Inherited from

[`TextureSource`](rendering.TextureSource.md).[`test`](rendering.TextureSource.html#test)
