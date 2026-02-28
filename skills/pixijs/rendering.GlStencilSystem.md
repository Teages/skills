# Class: GlStencilSystem

**`Advanced`**

This manages the stencil buffer. Used primarily for masking

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GlStencilSystem**(`renderer`): `GlStencilSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

#### Returns

`GlStencilSystem`

## Properties

### destroy()?

> `optional` **destroy**: () => `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

## Methods

### resetState()

> **resetState**(): `void`

#### Returns

`void`

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
