# Class: GpuLimitsSystem

**`Advanced`**

The GpuLimitsSystem provides information about the capabilities and limitations of the underlying GPU.
These limits, such as the maximum number of textures that can be used in a shader
(`maxTextures`) or the maximum number of textures that can be batched together (`maxBatchableTextures`),
are determined by the specific graphics hardware and driver.

The values for these limits are not available immediately upon instantiation of the class.
They are populated when the WebGPU Device rendering context is successfully initialized and ready,
which occurs after the `renderer.init()` method has completed.
Attempting to access these properties before the context is ready will result in undefined or default values.

This system allows the renderer to adapt its behavior and resource allocation strategies
to stay within the supported boundaries of the GPU, ensuring optimal performance and stability.

## Example

```ts
const renderer = new WebGPURenderer();
await renderer.init(); // GPU limits are populated after this call

console.log(renderer.limits.maxTextures);
console.log(renderer.limits.maxBatchableTextures);
```

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GpuLimitsSystem**(`renderer`): `GpuLimitsSystem`

#### Parameters

##### renderer

[`WebGPURenderer`](rendering.WebGPURenderer.md)

#### Returns

`GpuLimitsSystem`

## Properties

### maxBatchableTextures

> **maxBatchableTextures**: `number`

The maximum number of batchable textures

***

### maxTextures

> **maxTextures**: `number`

The maximum number of textures that can be used by a shader

## Methods

### contextChange()

> **contextChange**(): `void`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)
