# Class: GpuStencilSystem

**`Advanced`**

This manages the stencil buffer. Used primarily for masking

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GpuStencilSystem**(`renderer`): `GpuStencilSystem`

#### Parameters

##### renderer

[`WebGPURenderer`](rendering.WebGPURenderer.md)

#### Returns

`GpuStencilSystem`

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### setStencilMode()

> **setStencilMode**(`stencilMode`, `stencilReference`): `void`

#### Parameters

##### stencilMode

[`STENCIL_MODES`](rendering.STENCIL_MODES.md)

##### stencilReference

`number`

#### Returns

`void`
