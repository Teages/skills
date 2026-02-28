# Class: BindGroupSystem

**`Advanced`**

This manages the WebGPU bind groups. this is how data is bound to a shader when rendering

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new BindGroupSystem**(`renderer`): `BindGroupSystem`

#### Parameters

##### renderer

[`WebGPURenderer`](rendering.WebGPURenderer.md)

#### Returns

`BindGroupSystem`

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### getBindGroup()

> **getBindGroup**(`bindGroup`, `program`, `groupIndex`): [`GPUBindGroup`](https://developer.mozilla.org/docs/Web/API/GPUBindGroup)

#### Parameters

##### bindGroup

[`BindGroup`](rendering.BindGroup.md)

##### program

[`GpuProgram`](rendering.GpuProgram.md)

##### groupIndex

`number`

#### Returns

[`GPUBindGroup`](https://developer.mozilla.org/docs/Web/API/GPUBindGroup)
