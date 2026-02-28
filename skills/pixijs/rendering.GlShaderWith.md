# Interface: GlShaderWith

**`Advanced`**

A base interface for shaders that includes the common properties.

## Extends

- `ShaderBase`

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

### glProgram

> **glProgram**: [`GlProgram`](rendering.GlProgram.md)

The WebGL program used by the WebGL renderer.

#### Overrides

`ShaderBase.glProgram`

***

### gpuProgram?

> `optional` **gpuProgram**: [`GpuProgram`](rendering.GpuProgram.md)

The WebGPU program used by the WebGPU renderer.

#### Inherited from

`ShaderBase.gpuProgram`
