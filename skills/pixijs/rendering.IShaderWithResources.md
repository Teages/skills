# Interface: IShaderWithResources

**`Advanced`**

A shader that can be used with both WebGL and WebGPU.

## Extends

- `ShaderWithResourcesDescriptor`.`ShaderBase`

## Properties

### compatibleRenderers?

> `optional` **compatibleRenderers**: `number`

A number that uses two bits on whether the shader is compatible with the WebGL renderer and/or the WebGPU renderer.
0b00 - not compatible with either
0b01 - compatible with WebGL
0b10 - compatible with WebGPU
This is automatically set based on if a [GlProgram](rendering.GlProgram.md) or [GpuProgram](rendering.GpuProgram.md) is provided.

#### Inherited from

`ShaderBase.compatibleRenderers`

***

### glProgram?

> `optional` **glProgram**: [`GlProgram`](rendering.GlProgram.md)

The WebGL program used by the WebGL renderer.

#### Inherited from

`ShaderBase.glProgram`

***

### gpuProgram?

> `optional` **gpuProgram**: [`GpuProgram`](rendering.GpuProgram.md)

The WebGPU program used by the WebGPU renderer.

#### Inherited from

`ShaderBase.gpuProgram`

***

### resources?

> `optional` **resources**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

A key value of uniform resources used by the shader.
Under the hood pixi will look at the provided shaders and figure out where
the resources are mapped. Its up to you to make sure the resource key
matches the uniform name in the webGPU program. WebGL is a little more forgiving!

#### Inherited from

`ShaderWithResourcesDescriptor.resources`
