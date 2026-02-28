# Class: GpuUboSystem

**`Advanced`**

System plugin to the renderer to manage uniform buffers. With a WGSL twist!

## Extends

- [`UboSystem`](rendering.UboSystem.md)

## Constructors

### Constructor

> **new GpuUboSystem**(): `GpuUboSystem`

#### Returns

`GpuUboSystem`

#### Overrides

[`UboSystem`](rendering.UboSystem.md).[`constructor`](rendering.UboSystem.html#constructor)

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Inherited from

[`UboSystem`](rendering.UboSystem.md).[`destroy`](rendering.UboSystem.html#destroy)

***

### ensureUniformGroup()

> **ensureUniformGroup**(`uniformGroup`): `void`

#### Parameters

##### uniformGroup

[`UniformGroup`](rendering.UniformGroup.md)

#### Returns

`void`

#### Inherited from

[`UboSystem`](rendering.UboSystem.md).[`ensureUniformGroup`](rendering.UboSystem.html#ensureuniformgroup)

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

#### Inherited from

[`UboSystem`](rendering.UboSystem.md).[`getUniformGroupData`](rendering.UboSystem.html#getuniformgroupdata)

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

#### Inherited from

[`UboSystem`](rendering.UboSystem.md).[`syncUniformGroup`](rendering.UboSystem.html#syncuniformgroup)

***

### updateUniformGroup()

> **updateUniformGroup**(`uniformGroup`): `boolean`

#### Parameters

##### uniformGroup

[`UniformGroup`](rendering.UniformGroup.md)

#### Returns

`boolean`

#### Inherited from

[`UboSystem`](rendering.UboSystem.md).[`updateUniformGroup`](rendering.UboSystem.html#updateuniformgroup)
