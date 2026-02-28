# Type Alias: TEXTURE\_VIEW\_DIMENSIONS

> **TEXTURE\_VIEW\_DIMENSIONS** = [`TEXTURE_DIMENSIONS`](rendering.TEXTURE_DIMENSIONS.md) \| `"2d-array"` \| `"cube"` \| `"cube-array"`

**`Advanced`**

The texture view dimensions that are supported by pixi.

This aligns with WebGPU's `GPUTextureViewDescriptor.dimension` and controls how a texture is viewed/sampled
(e.g. `cube` for cube maps).
