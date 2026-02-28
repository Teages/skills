# Interface: GCable

**`Advanced`**

Interface for resources that can be garbage collected.

## Extends

- [`GPUDataOwner`](rendering.GPUDataOwner.md)

## Extended by

- [`ViewContainer`](scene.ViewContainer.md)

## Properties

### \_gcData?

> `optional` **\_gcData**: [`GCData`](rendering.GCData.md)

GC tracking data, null if not being tracked

***

### \_gcLastUsed

> **\_gcLastUsed**: `number`

Timestamp of last use

***

### \_gpuData

> **\_gpuData**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`number`, `GPU_DATA`\>

#### Inherited from

[`GPUDataOwner`](rendering.GPUDataOwner.md).[`_gpuData`](rendering.GPUDataOwner.html#_gpudata)

***

### autoGarbageCollect?

> `optional` **autoGarbageCollect**: `boolean`

If set to true, the resource will be garbage collected automatically when it is not used.

***

### unload()

> **unload**: () => `void`

#### Returns

`void`

#### Inherited from

[`GPUDataOwner`](rendering.GPUDataOwner.md).[`unload`](rendering.GPUDataOwner.html#unload)

## Methods

### \_onTouch()?

> `optional` **\_onTouch**(`now`): `void`

An optional callback for when an item is touched

#### Parameters

##### now

`number`

#### Returns

`void`
