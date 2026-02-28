# Interface: GpuProgramOptions

**`Advanced`**

The options for the gpu program

## Properties

### fragment?

> `optional` **fragment**: [`ProgramSource`](rendering.ProgramSource.md)

The fragment glsl shader source.

***

### gpuLayout?

> `optional` **gpuLayout**: [`ProgramPipelineLayoutDescription`](rendering.ProgramPipelineLayoutDescription.md)

The gpu layout of the program. If not provided, it will be generated from the shader sources.

***

### layout?

> `optional` **layout**: [`ProgramLayout`](rendering.ProgramLayout.md)

The layout of the program. If not provided, it will be generated from the shader sources.

***

### name?

> `optional` **name**: `string`

the name of the program, this is added to the label of the GPU Program created
under the hood. Makes it much easier to debug!

***

### vertex?

> `optional` **vertex**: [`ProgramSource`](rendering.ProgramSource.md)

The vertex glsl shader source.
