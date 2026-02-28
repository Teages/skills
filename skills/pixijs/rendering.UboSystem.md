# Class: UboSystem

**`Advanced`**

System plugin to the renderer to manage uniform buffers.

## Extended by

- [`GlUboSystem`](rendering.GlUboSystem.md)
- [`GpuUboSystem`](rendering.GpuUboSystem.md)

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new UboSystem**(`adaptor`): `UboSystem`

#### Parameters

##### adaptor

`UboAdaptor`

#### Returns

`UboSystem`

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### ensureUniformGroup()

> **ensureUniformGroup**(`uniformGroup`): `void`

#### Parameters

##### uniformGroup

[`UniformGroup`](rendering.UniformGroup.md)

#### Returns

`void`

***

### getUniformGroupData()

> **getUniformGroupData**(`uniformGroup`): `object`

#### Parameters

##### uniformGroup

[`UniformGroup`](rendering.UniformGroup.md)

#### Returns

`object`

##### layout

> **layout**: `UboLayout`

##### syncFunction()

> **syncFunction**: (`uniforms`, `data`, `dataInt32`, `offset`) => `void`

###### Parameters

###### uniforms

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### data

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

###### dataInt32

[`Int32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)

###### offset

`number`

###### Returns

`void`

***

### syncUniformGroup()

> **syncUniformGroup**(`uniformGroup`, `data?`, `offset?`): `boolean`

#### Parameters

##### uniformGroup

[`UniformGroup`](rendering.UniformGroup.md)

##### data?

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

##### offset?

`number`

#### Returns

`boolean`

***

### updateUniformGroup()

> **updateUniformGroup**(`uniformGroup`): `boolean`

#### Parameters

##### uniformGroup

[`UniformGroup`](rendering.UniformGroup.md)

#### Returns

`boolean`
