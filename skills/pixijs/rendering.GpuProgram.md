# Class: GpuProgram

**`Advanced`**

A wrapper for a WebGPU Program, specifically designed for the WebGPU renderer.
This class facilitates the creation and management of shader code that integrates with the WebGPU pipeline.

To leverage the full capabilities of this class, familiarity with WGSL shaders is recommended.

## See

https://gpuweb.github.io/gpuweb/#index

## Example

```ts
// Create a new program
const program = new GpuProgram({
  vertex: {
   source: '...',
   entryPoint: 'main',
  },
  fragment:{
   source: '...',
   entryPoint: 'main',
  },
});

Note: Both fragment and vertex shader sources can coexist within a single WGSL source file
this can make things a bit simpler.

For optimal usage and best performance, it help to reuse programs whenever possible.
The {@link GpuProgram.from} helper function is designed for this purpose, utilizing an
internal cache to efficiently manage and retrieve program instances.
By leveraging this function, you can significantly reduce overhead and enhance the performance of your rendering pipeline.

An important distinction between WebGL and WebGPU regarding program data retrieval:
While WebGL allows extraction of program information directly from its compiled state,
WebGPU does not offer such a capability. Therefore, in the context of WebGPU, we're required
to manually extract the program layout information from the source code itself.
```

## Constructors

### Constructor

> **new GpuProgram**(`options`): `GpuProgram`

Create a new GpuProgram

#### Parameters

##### options

[`GpuProgramOptions`](rendering.GpuProgramOptions.md)

The options for the gpu program

#### Returns

`GpuProgram`

## Properties

### autoAssignGlobalUniforms

> **autoAssignGlobalUniforms**: `boolean`

if true, the program will automatically assign global uniforms to group[0]

***

### autoAssignLocalUniforms

> **autoAssignLocalUniforms**: `boolean`

if true, the program will automatically assign local uniforms to group[1]

***

### fragment?

> `readonly` `optional` **fragment**: [`ProgramSource`](rendering.ProgramSource.md)

The fragment glsl shader source.

***

### gpuLayout

> `readonly` **gpuLayout**: [`ProgramPipelineLayoutDescription`](rendering.ProgramPipelineLayoutDescription.md)

Configuration for the WebGPU bind group layouts, detailing resource organization for the shader.
Generated from shader sources if not explicitly provided.

#### Example

```ts
// Assuming a shader program that requires two bind groups:
[
  // First bind group layout entries
  [{ binding: 0, visibility: GPUShaderStage.VERTEX, type: "uniform-buffer" }],
  // Second bind group layout entries
  [{ binding: 1, visibility: GPUShaderStage.FRAGMENT, type: "sampler" },
   { binding: 2, visibility: GPUShaderStage.FRAGMENT, type: "sampled-texture" }]
]
```

***

### layout

> `readonly` **layout**: [`ProgramLayout`](rendering.ProgramLayout.md)

Mapping of uniform names to group indexes for organizing shader program uniforms.
Automatically generated from shader sources if not provided.

#### Example

```ts
// Assuming a shader with two uniforms, `u_time` and `u_resolution`, grouped respectively:
[
  { "u_time": 0 },
  { "u_resolution": 1 }
]
```

***

### name

> `readonly` **name**: `string`

the name of the program, this is added to the label of the GPU Program created under the hood.
Makes it much easier to debug!

***

### structsAndGroups

> `readonly` **structsAndGroups**: [`StructsAndGroups`](rendering.StructsAndGroups.md)

the structs and groups extracted from the shader sources

***

### vertex?

> `readonly` `optional` **vertex**: [`ProgramSource`](rendering.ProgramSource.md)

The vertex glsl shader source

## Accessors

### attributeData

#### Get Signature

> **get** **attributeData**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ExtractedAttributeData`](rendering.ExtractedAttributeData.md)\>

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ExtractedAttributeData`](rendering.ExtractedAttributeData.md)\>

## Methods

### destroy()

> **destroy**(): `void`

destroys the program

#### Returns

`void`

***

### from()

> `static` **from**(`options`): `GpuProgram`

Helper function that creates a program for a given source.
It will check the program cache if the program has already been created.
If it has that one will be returned, if not a new one will be created and cached.

#### Parameters

##### options

[`GpuProgramOptions`](rendering.GpuProgramOptions.md)

The options for the program.

#### Returns

`GpuProgram`

A program using the same source
