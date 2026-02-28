# Class: Filter

**`Advanced`**

The Filter class is the base for all filter effects used in Pixi.js
As it extends a shader, it requires that a glProgram is parsed in to work with WebGL and a gpuProgram for WebGPU.
If you don't proved one, then the filter is skipped and just rendered as if it wasn't there for that renderer.

A filter can be applied to anything that extends Container in Pixi.js which also includes Sprites, Graphics etc.

Its worth noting Performance-wise filters can be pretty expensive if used too much in a single scene.
The following happens under the hood when a filter is applied:

.1. Break the current batch
<br>
.2. The target is measured using getGlobalBounds
(recursively go through all children and figure out how big the object is)
<br>
.3. Get the closest Po2 Textures from the texture pool
<br>
.4. Render the target to that texture
<br>
.5. Render that texture back to the main frame buffer as a quad using the filters program.
<br>
<br>
Some filters (such as blur) require multiple passes too which can result in an even bigger performance hit. So be careful!
Its not generally the complexity of the shader that is the bottle neck,
but all the framebuffer / shader switching that has to take place.
One filter applied to a container with many objects is MUCH faster than many filter applied to many objects.

## Example

```ts
import { Filter } from 'pixi.js';

const customFilter = new Filter({
    glProgram: new GlProgram({
        fragment,
        vertex,
    }),
    resources: {
        timeUniforms: {
            uTime: { value: 0.0, type: 'f32' },
        },
    },
});

// Apply the filter
sprite.filters = [customFilter];

// Update uniform
app.ticker.add((ticker) => {
    filter.resources.timeUniforms.uniforms.uTime += 0.04 * ticker.deltaTime;
});
```

## Extends

- [`Shader`](rendering.Shader.md)

## Extended by

- [`AlphaFilter`](filters.AlphaFilter.md)
- [`BlurFilter`](filters.BlurFilter.md)
- [`BlurFilterPass`](filters.BlurFilterPass.md)
- [`ColorMatrixFilter`](filters.ColorMatrixFilter.md)
- [`DisplacementFilter`](filters.DisplacementFilter.md)
- [`NoiseFilter`](filters.NoiseFilter.md)

## Constructors

### Constructor

> **new Filter**(`options`): `Filter`

#### Parameters

##### options

[`FilterWithShader`](filters.FilterWithShader.md)

The optional parameters of this filter.

#### Returns

`Filter`

#### Overrides

[`Shader`](rendering.Shader.md).[`constructor`](rendering.Shader.html#constructor)

## Properties

### antialias

> **antialias**: [`FilterAntialias`](filters.FilterAntialias.md)

should the filter use antialiasing?

#### Default

```ts
inherit
```

***

### blendRequired

> **blendRequired**: `boolean`

Whether or not this filter requires the previous render texture for blending.

#### Default

```ts
false
```

***

### clipToViewport

> **clipToViewport**: `boolean`

Clip texture into viewport or not

#### Default

```ts
true
```

***

### compatibleRenderers

> `readonly` **compatibleRenderers**: `number`

A number that uses two bits on whether the shader is compatible with the WebGL renderer and/or the WebGPU renderer.
0b00 - not compatible with either
0b01 - compatible with WebGL
0b10 - compatible with WebGPU
This is automatically set based on if a [GlProgram](rendering.GlProgram.md) or [GpuProgram](rendering.GpuProgram.md) is provided.

#### Inherited from

[`Shader`](rendering.Shader.md).[`compatibleRenderers`](rendering.Shader.html#compatiblerenderers)

***

### enabled

> **enabled**: `boolean` = `true`

If enabled is true the filter is applied, if false it will not.

***

### glProgram

> **glProgram**: [`GlProgram`](rendering.GlProgram.md)

An instance of the GL program used by the WebGL renderer

#### Inherited from

[`Shader`](rendering.Shader.md).[`glProgram`](rendering.Shader.html#glprogram)

***

### gpuProgram

> **gpuProgram**: [`GpuProgram`](rendering.GpuProgram.md)

An instance of the GPU program used by the WebGPU renderer

#### Inherited from

[`Shader`](rendering.Shader.md).[`gpuProgram`](rendering.Shader.html#gpuprogram)

***

### groups

> **groups**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`number`, [`BindGroup`](rendering.BindGroup.md)\>

#### Inherited from

[`Shader`](rendering.Shader.md).[`groups`](rendering.Shader.html#groups)

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

***

### resolution

> **resolution**: `number` \| `"inherit"`

The resolution of the filter. Setting this to be lower will lower the quality but
increase the performance of the filter.

#### Default

```ts
1
```

***

### resources

> **resources**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

A record of the resources used by the shader.

#### Inherited from

[`Shader`](rendering.Shader.md).[`resources`](rendering.Shader.html#resources)

***

### uid

> `readonly` **uid**: `number`

A unique identifier for the shader

#### Inherited from

[`Shader`](rendering.Shader.md).[`uid`](rendering.Shader.html#uid)

***

### defaultOptions

> `static` **defaultOptions**: [`FilterOptions`](filters.FilterOptions.md)

The default filter settings

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

[`Shader`](rendering.Shader.md).[`addResource`](rendering.Shader.html#addresource)

***

### apply()

> **apply**(`filterManager`, `input`, `output`, `clearMode`): `void`

Applies the filter

#### Parameters

##### filterManager

[`FilterSystem`](rendering.FilterSystem.md)

The renderer to retrieve the filter from

##### input

[`Texture`](rendering.Texture.md)

The input render target.

##### output

[`RenderSurface`](rendering.RenderSurface.md)

The target to output to.

##### clearMode

`boolean`

Should the output be cleared before rendering to it

#### Returns

`void`

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

[`Shader`](rendering.Shader.md).[`destroy`](rendering.Shader.html#destroy)

***

### from()

> `static` **from**(`options`): `Filter`

A short hand function to create a filter based of a vertex and fragment shader src.

#### Parameters

##### options

[`FilterOptions`](filters.FilterOptions.md) & [`ShaderFromResources`](rendering.ShaderFromResources.md)

#### Returns

`Filter`

A shiny new PixiJS filter!

#### Overrides

[`Shader`](rendering.Shader.md).[`from`](rendering.Shader.html#from)
