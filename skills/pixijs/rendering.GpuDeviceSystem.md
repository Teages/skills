# Class: GpuDeviceSystem

**`Advanced`**

System plugin to the renderer to manage the context.

## Implements

- [`System`](rendering.System.md)\<[`GpuContextOptions`](rendering.GpuContextOptions.md)\>

## Constructors

### Constructor

> **new GpuDeviceSystem**(`renderer`): `GpuDeviceSystem`

#### Parameters

##### renderer

[`WebGPURenderer`](rendering.WebGPURenderer.md)

The renderer this System works for.

#### Returns

`GpuDeviceSystem`

## Properties

### gpu

> **gpu**: [`GPU`](rendering.GPU.md)

The GPU device

***

### defaultOptions

> `static` **defaultOptions**: [`GpuContextOptions`](rendering.GpuContextOptions.md)

The default options for the GpuDeviceSystem.

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### init()

> **init**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Parameters

##### options

[`GpuContextOptions`](rendering.GpuContextOptions.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)
