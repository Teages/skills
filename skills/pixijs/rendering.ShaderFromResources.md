# Type Alias: ShaderFromResources

> **ShaderFromResources** = `GlShaderFromWith` \| `GpuShaderFromWith` & [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`ShaderWithResources`](rendering.ShaderWithResources.md), `"glProgram"` \| `"gpuProgram"`\>

**`Advanced`**

A descriptor for a shader that can be used with both WebGL and WebGPU.
