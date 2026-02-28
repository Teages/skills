# Class: GpuStateSystem

**`Advanced`**

System plugin to the renderer to manage WebGL state machines.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GpuStateSystem**(): `GpuStateSystem`

#### Returns

`GpuStateSystem`

## Properties

### blendMode

> `readonly` **blendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md)

Blend mode

#### Default

```ts
'none'
@readonly
```

***

### polygonOffset

> `readonly` **polygonOffset**: `number`

Polygon offset

***

### stateId

> `readonly` **stateId**: `number`

State ID

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### getColorTargets()

> **getColorTargets**(`state`, `count`): `GPUColorTargetState`[]

Gets the blend mode data for the current state

#### Parameters

##### state

[`State`](rendering.State.md)

The state to get the blend mode from

##### count

`number`

The number of color targets to create

#### Returns

`GPUColorTargetState`[]
