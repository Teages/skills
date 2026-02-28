# Interface: TextureShader

**`Advanced`**

Shader that uses a texture.
This is the default shader used by `Mesh` when no shader is provided.
It is a simple shader that samples a texture and applies it to the geometry.

## Extends

- [`Shader`](rendering.Shader.md)

## Properties

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

### resources

> **resources**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

A record of the resources used by the shader.

#### Inherited from

[`Shader`](rendering.Shader.md).[`resources`](rendering.Shader.html#resources)

***

### texture

> **texture**: [`Texture`](rendering.Texture.md)

The texture that the shader uses.

***

### uid

> `readonly` **uid**: `number`

A unique identifier for the shader

#### Inherited from

[`Shader`](rendering.Shader.md).[`uid`](rendering.Shader.html#uid)

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
