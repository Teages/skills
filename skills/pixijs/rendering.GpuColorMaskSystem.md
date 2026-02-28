# Class: GpuColorMaskSystem

**`Advanced`**

The system that handles color masking for the GPU.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GpuColorMaskSystem**(`renderer`): `GpuColorMaskSystem`

#### Parameters

##### renderer

[`WebGPURenderer`](rendering.WebGPURenderer.md)

#### Returns

`GpuColorMaskSystem`

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### setMask()

> **setMask**(`colorMask`): `void`

#### Parameters

##### colorMask

`number`

#### Returns

`void`
