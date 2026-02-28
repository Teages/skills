# Class: TextureStyle

**`Advanced`**

A texture style describes how a texture should be sampled by a shader.

## Extends

- `EventEmitter`\<\{ `change`: `TextureStyle`; `destroy`: `TextureStyle`; \}\>

## Implements

- [`BindResource`](rendering.BindResource.md)

## Constructors

### Constructor

> **new TextureStyle**(`options`): `TextureStyle`

#### Parameters

##### options

[`TextureStyleOptions`](rendering.TextureStyleOptions.md) = `{}`

options for the style

#### Returns

`TextureStyle`

#### Overrides

`EventEmitter<{ change: TextureStyle, destroy: TextureStyle, }>.constructor`

## Properties

### addressModeU?

> `optional` **addressModeU**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

***

### addressModeV?

> `optional` **addressModeV**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

***

### addressModeW?

> `optional` **addressModeW**: [`WRAP_MODE`](rendering.WRAP_MODE.md)

Specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth coordinates, respectively.

***

### compare?

> `optional` **compare**: [`COMPARE_FUNCTION`](rendering.COMPARE_FUNCTION.md)

When provided the sampler will be a comparison sampler with the specified
[COMPARE\_FUNCTION](rendering.COMPARE_FUNCTION.md).
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules.

***

### destroyed

> `readonly` **destroyed**: `boolean` = `false`

Has the style been destroyed?

#### Implementation of

`BindResource.destroyed`

***

### lodMaxClamp?

> `optional` **lodMaxClamp**: `number`

Specifies the minimum and maximum levels of detail, respectively, used internally when sampling a texture.

***

### lodMinClamp?

> `optional` **lodMinClamp**: `number`

***

### magFilter?

> `optional` **magFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

Specifies the sampling behavior when the sample footprint is smaller than or equal to one texel.

***

### minFilter?

> `optional` **minFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

Specifies the sampling behavior when the sample footprint is larger than one texel.

***

### mipmapFilter?

> `optional` **mipmapFilter**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

Specifies behavior for sampling between mipmap levels.

***

### defaultOptions

> `readonly` `static` **defaultOptions**: [`TextureStyleOptions`](rendering.TextureStyleOptions.md)

default options for the style

## Accessors

### addressMode

#### Get Signature

> **get** **addressMode**(): [`WRAP_MODE`](rendering.WRAP_MODE.md)

setting this will set wrapModeU,wrapModeV and wrapModeW all at once!

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

Destroys the style

#### Returns

`void`

***

### update()

> **update**(): `void`

#### Returns

`void`
