# Type Alias: ShaderFromGroups

> **ShaderFromGroups** = `GlShaderFromWith` \| `GpuShaderFromWith` & [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`ShaderWithGroups`](rendering.ShaderWithGroups.md), `"glProgram"` \| `"gpuProgram"`\>

**`Advanced`**

A descriptor for a shader that can be used with both WebGL and WebGPU.
