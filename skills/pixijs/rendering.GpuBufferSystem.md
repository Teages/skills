# Class: GpuBufferSystem

**`Advanced`**

System plugin to the renderer to manage buffers.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GpuBufferSystem**(`renderer`): `GpuBufferSystem`

#### Parameters

##### renderer

[`WebGPURenderer`](rendering.WebGPURenderer.md)

#### Returns

`GpuBufferSystem`

## Methods

### createGPUBuffer()

> **createGPUBuffer**(`buffer`): [`GPUBuffer`](https://developer.mozilla.org/docs/Web/API/GPUBuffer)

#### Parameters

##### buffer

[`Buffer`](rendering.Buffer.md)

#### Returns

[`GPUBuffer`](https://developer.mozilla.org/docs/Web/API/GPUBuffer)

***

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### destroyAll()

> **destroyAll**(): `void`

dispose all WebGL resources of all managed buffers

#### Returns

`void`

***

### getGPUBuffer()

> **getGPUBuffer**(`buffer`): [`GPUBuffer`](https://developer.mozilla.org/docs/Web/API/GPUBuffer)

#### Parameters

##### buffer

[`Buffer`](rendering.Buffer.md)

#### Returns

[`GPUBuffer`](https://developer.mozilla.org/docs/Web/API/GPUBuffer)

***

### updateBuffer()

> **updateBuffer**(`buffer`): [`GPUBuffer`](https://developer.mozilla.org/docs/Web/API/GPUBuffer)

#### Parameters

##### buffer

[`Buffer`](rendering.Buffer.md)

#### Returns

[`GPUBuffer`](https://developer.mozilla.org/docs/Web/API/GPUBuffer)
