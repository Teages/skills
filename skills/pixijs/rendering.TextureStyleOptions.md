# Interface: TextureStyleOptions

**`Advanced`**

The options for the texture style.

## Extends

- [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`TextureStyle`](rendering.TextureStyle.md)\>

## Extended by

- [`TextureSourceOptions`](rendering.TextureSourceOptions.md)

## Properties

### \_resourceId?

> `optional` **\_resourceId**: `number`

#### Inherited from

`Partial._resourceId`

***

### addressMode?

> `optional` **addressMode**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

setting this will set wrapModeU,wrapModeV and wrapModeW all at once!

#### Overrides

`Partial.addressMode`

***

### addressModeU?

> `optional` **addressModeU**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth coordinates, respectively.

#### Overrides

[`TextureStyle`](rendering.TextureStyle.md).[`addressModeU`](rendering.TextureStyle.html#addressmodeu)

***

### addressModeV?

> `optional` **addressModeV**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth coordinates, respectively.

#### Overrides

[`TextureStyle`](rendering.TextureStyle.md).[`addressModeV`](rendering.TextureStyle.html#addressmodev)

***

### addressModeW?

> `optional` **addressModeW**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

Specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth coordinates, respectively.

#### Overrides

[`TextureStyle`](rendering.TextureStyle.md).[`addressModeW`](rendering.TextureStyle.html#addressmodew)

***

### compare?

> `optional` **compare**: [`COMPARE_FUNCTION`](rendering.COMPARE_FUNCTION.md)

When provided the sampler will be a comparison sampler with the specified
[COMPARE\_FUNCTION](rendering.COMPARE_FUNCTION.md).
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules.

#### Overrides

[`TextureStyle`](rendering.TextureStyle.md).[`compare`](rendering.TextureStyle.html#compare)

***

### destroyed?

> `readonly` `optional` **destroyed**: `boolean` = `false`

Has the style been destroyed?

#### Inherited from

`Partial.destroyed`

***

### lodMaxClamp?

> `optional` **lodMaxClamp**: `number`

Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture.

#### Overrides

[`TextureStyle`](rendering.TextureStyle.md).[`lodMaxClamp`](rendering.TextureStyle.html#lodmaxclamp)

***

### lodMinClamp?

> `optional` **lodMinClamp**: `number`

specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture.

#### Overrides

[`TextureStyle`](rendering.TextureStyle.md).[`lodMinClamp`](rendering.TextureStyle.html#lodminclamp)

***

### magFilter?

> `optional` **magFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

specifies the sampling behavior when the sample footprint is smaller than or equal to one texel.

#### Overrides

[`TextureStyle`](rendering.TextureStyle.md).[`magFilter`](rendering.TextureStyle.html#magfilter)

***

### maxAnisotropy?

> `optional` **maxAnisotropy**: `number`

Specifies the maximum anisotropy value clamp used by the sampler.
Note: Most implementations support [TextureStyle#maxAnisotropy](rendering.TextureStyle.html#maxanisotropy) values in range
between 1 and 16, inclusive. The used value of [TextureStyle#maxAnisotropy](rendering.TextureStyle.html#maxanisotropy) will
be clamped to the maximum value that the platform supports.

setting this to anything higher than 1 will set scale modes to 'linear'

#### Overrides

`Partial.maxAnisotropy`

***

### minFilter?

> `optional` **minFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

specifies the sampling behavior when the sample footprint is larger than one texel.

#### Overrides

[`TextureStyle`](rendering.TextureStyle.md).[`minFilter`](rendering.TextureStyle.html#minfilter)

***

### mipmapFilter?

> `optional` **mipmapFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

specifies behavior for sampling between mipmap levels.

#### Overrides

[`TextureStyle`](rendering.TextureStyle.md).[`mipmapFilter`](rendering.TextureStyle.html#mipmapfilter)

***

### scaleMode?

> `optional` **scaleMode**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

setting this will set magFilter,minFilter and mipmapFilter all at once!

#### Overrides

`Partial.scaleMode`

***

### wrapMode?

> `optional` **wrapMode**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

#### Inherited from

`Partial.wrapMode`

## Methods

### destroy()?

> `optional` **destroy**(): `void`

Destroys the style

#### Returns

`void`

#### Inherited from

`Partial.destroy`

***

### update()?

> `optional` **update**(): `void`

#### Returns

`void`

#### Inherited from

`Partial.update`
