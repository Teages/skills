# Class: BlurFilterPass

**`Advanced`**

The BlurFilterPass applies a horizontal or vertical Gaussian blur to an object.

## Example

```ts
import { BlurFilterPass } from 'pixi.js';

const filter = new BlurFilterPass({ horizontal: true, strength: 8 });
sprite.filters = filter;

// update blur
filter.blur = 16;
```

## Extends

- [`Filter`](filters.Filter.md)

## Constructors

### Constructor

> **new BlurFilterPass**(`options`): `BlurFilterPass`

#### Parameters

##### options

`BlurFilterPassOptions`

#### Returns

`BlurFilterPass`

#### Overrides

[`Filter`](filters.Filter.md).[`constructor`](filters.Filter.html#constructor)

## Properties

### antialias

> **antialias**: [`FilterAntialias`](filters.FilterAntialias.md)

should the filter use antialiasing?

#### Default

```ts
inherit
```

#### Inherited from

[`Filter`](filters.Filter.md).[`antialias`](filters.Filter.html#antialias)

***

### blendRequired

> **blendRequired**: `boolean`

Whether or not this filter requires the previous render texture for blending.

#### Default

```ts
false
```

#### Inherited from

[`Filter`](filters.Filter.md).[`blendRequired`](filters.Filter.html#blendrequired)

***

### clipToViewport

> **clipToViewport**: `boolean`

Clip texture into viewport or not

#### Default

```ts
true
```

#### Inherited from

[`Filter`](filters.Filter.md).[`clipToViewport`](filters.Filter.html#cliptoviewport)

***

### compatibleRenderers

> `readonly` **compatibleRenderers**: `number`

A number that uses two bits on whether the shader is compatible with the WebGL renderer and/or the WebGPU renderer.
0b00 - not compatible with either
0b01 - compatible with WebGL
0b10 - compatible with WebGPU
This is automatically set based on if a [GlProgram](rendering.GlProgram.md) or [GpuProgram](rendering.GpuProgram.md) is provided.

#### Inherited from

[`Filter`](filters.Filter.md).[`compatibleRenderers`](filters.Filter.html#compatiblerenderers)

***

### enabled

> **enabled**: `boolean` = `true`

If enabled is true the filter is applied, if false it will not.

#### Inherited from

[`Filter`](filters.Filter.md).[`enabled`](filters.Filter.html#enabled)

***

### glProgram

> **glProgram**: [`GlProgram`](rendering.GlProgram.md)

An instance of the GL program used by the WebGL renderer

#### Inherited from

[`Filter`](filters.Filter.md).[`glProgram`](filters.Filter.html#glprogram)

***

### gpuProgram

> **gpuProgram**: [`GpuProgram`](rendering.GpuProgram.md)

An instance of the GPU program used by the WebGPU renderer

#### Inherited from

[`Filter`](filters.Filter.md).[`gpuProgram`](filters.Filter.html#gpuprogram)

***

### groups

> **groups**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`number`, [`BindGroup`](rendering.BindGroup.md)\>

#### Inherited from

[`Filter`](filters.Filter.md).[`groups`](filters.Filter.html#groups)

***

### horizontal

> **horizontal**: `boolean`

Do pass along the x-axis (`true`) or y-axis (`false`).

***

### legacy

> **legacy**: `boolean`

Whether to use legacy blur pass behavior.

***

### padding

> **padding**: `number`

The padding of the filter. Some filters require extra space to breath such as a blur.
Increasing this will add extra width and height to the bounds of the object that the
filter is applied to.

#### Default

```ts
0
```

#### Inherited from

[`Filter`](filters.Filter.md).[`padding`](filters.Filter.html#padding)

***

### passes

> **passes**: `number`

The number of passes to run the filter.

***

### resolution

> **resolution**: `number` \| `"inherit"`

The resolution of the filter. Setting this to be lower will lower the quality but
increase the performance of the filter.

#### Default

```ts
1
```

#### Inherited from

[`Filter`](filters.Filter.md).[`resolution`](filters.Filter.html#resolution)

***

### resources

> **resources**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

A record of the resources used by the shader.

#### Inherited from

[`Filter`](filters.Filter.md).[`resources`](filters.Filter.html#resources)

***

### strength

> **strength**: `number`

The strength of the blur filter.

***

### uid

> `readonly` **uid**: `number`

A unique identifier for the shader

#### Inherited from

[`Filter`](filters.Filter.md).[`uid`](filters.Filter.html#uid)

***

### defaultOptions

> `static` **defaultOptions**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`BlurFilterPassOptions`\>

Default blur filter pass options

#### Overrides

[`Filter`](filters.Filter.md).[`defaultOptions`](filters.Filter.html#defaultoptions)

## Accessors

### blendMode

#### Get Signature

> **get** **blendMode**(): [`BLEND_MODES`](filters.BLEND_MODES.md)

Get the blend mode of the filter.

##### Default

```ts
"normal"
```

##### Returns

[`BLEND_MODES`](filters.BLEND_MODES.md)

#### Set Signature

> **set** **blendMode**(`value`): `void`

Sets the blend mode of the filter.

##### Parameters

###### value

[`BLEND_MODES`](filters.BLEND_MODES.md)

##### Returns

`void`

#### Inherited from

[`Filter`](filters.Filter.md).[`blendMode`](filters.Filter.html#blendmode)

***

### blur

#### Get Signature

> **get** **blur**(): `number`

Sets the strength of both the blur.

##### Default

```ts
16
```

##### Returns

`number`

#### Set Signature

> **set** **blur**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### quality

#### Get Signature

> **get** **quality**(): `number`

Sets the quality of the blur by modifying the number of passes. More passes means higher
quality blurring but the lower the performance.

##### Default

```ts
4
```

##### Returns

`number`

#### Set Signature

> **set** **quality**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addResource()

> **addResource**(`name`, `groupIndex`, `bindIndex`): `void`

Sometimes a resource group will be provided later (for example global uniforms)
In such cases, this method can be used to let the shader know about the group.

#### Parameters

##### name

`string`

the name of the resource group

##### groupIndex

`number`

the index of the group (should match the webGPU shader group location)

##### bindIndex

`number`

the index of the bind point (should match the webGPU shader bind point)

#### Returns

`void`

#### Inherited from

[`Filter`](filters.Filter.md).[`addResource`](filters.Filter.html#addresource)

***

### apply()

> **apply**(`filterManager`, `input`, `output`, `clearMode`): `void`

Applies the filter.

#### Parameters

##### filterManager

[`FilterSystem`](rendering.FilterSystem.md)

The manager.

##### input

[`Texture`](rendering.Texture.md)

The input target.

##### output

[`RenderSurface`](rendering.RenderSurface.md)

The output target.

##### clearMode

`boolean`

How to clear

#### Returns

`void`

#### Overrides

[`Filter`](filters.Filter.md).[`apply`](filters.Filter.html#apply)

***

### destroy()

> **destroy**(`destroyPrograms`): `void`

Use to destroy the shader when its not longer needed.
It will destroy the resources and remove listeners.

#### Parameters

##### destroyPrograms

`boolean` = `false`

if the programs should be destroyed as well.
Make sure its not being used by other shaders!

#### Returns

`void`

#### Inherited from

[`Filter`](filters.Filter.md).[`destroy`](filters.Filter.html#destroy)

***

### from()

> `static` **from**(`options`): [`Filter`](filters.Filter.md)

A short hand function to create a filter based of a vertex and fragment shader src.

#### Parameters

##### options

[`FilterOptions`](filters.FilterOptions.md) & [`ShaderFromResources`](rendering.ShaderFromResources.md)

#### Returns

[`Filter`](filters.Filter.md)

A shiny new PixiJS filter!

#### Inherited from

[`Filter`](filters.Filter.md).[`from`](filters.Filter.html#from)
