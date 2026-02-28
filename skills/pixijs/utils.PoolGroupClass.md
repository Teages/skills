# Class: PoolGroupClass

**`Advanced`**

A group of pools that can be used to store objects of different types.

## Constructors

### Constructor

> **new PoolGroupClass**(): `PoolGroupClass`

#### Returns

`PoolGroupClass`

## Methods

### clear()

> **clear**(): `void`

Clears all pools in the group. This will reset all pools and free their resources.

#### Returns

`void`

***

### get()

> **get**\<`T`\>(`Class`, `data?`): `T`

Gets an item from a specific pool.

#### Type Parameters

##### T

`T` *extends* [`PoolItem`](utils.PoolItem.md)

The type of items in the pool. Must extend PoolItem.

#### Parameters

##### Class

[`PoolItemConstructor`](utils.PoolItemConstructor.md)\<`T`\>

The constructor of the items in the pool.

##### data?

`unknown`

Optional data to pass to the item's constructor.

#### Returns

`T`

The item from the pool.

***

### getPool()

> **getPool**\<`T`\>(`ClassType`): [`Pool`](utils.Pool.md)\<`T`\>

Gets a specific pool based on the class type.

#### Type Parameters

##### T

`T` *extends* [`PoolItem`](utils.PoolItem.md)

The type of items in the pool. Must extend PoolItem.

#### Parameters

##### ClassType

[`PoolItemConstructor`](utils.PoolItemConstructor.md)\<`T`\>

The constructor of the items in the pool.

#### Returns

[`Pool`](utils.Pool.md)\<`T`\>

The pool of the given class type.

***

### prepopulate()

> **prepopulate**\<`T`\>(`Class`, `total`): `void`

Prepopulates a specific pool with a given number of items.

#### Type Parameters

##### T

`T` *extends* [`PoolItem`](utils.PoolItem.md)

The type of items in the pool. Must extend PoolItem.

#### Parameters

##### Class

[`PoolItemConstructor`](utils.PoolItemConstructor.md)\<`T`\>

The constructor of the items in the pool.

##### total

`number`

The number of items to add to the pool.

#### Returns

`void`

***

### return()

> **return**(`item`): `void`

Returns an item to its respective pool.

#### Parameters

##### item

[`PoolItem`](utils.PoolItem.md)

The item to return to the pool.

#### Returns

`void`

***

### stats()

> **stats**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, \{ `free`: `number`; `size`: `number`; `used`: `number`; \}\>

gets the usage stats of each pool in the system

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, \{ `free`: `number`; `size`: `number`; `used`: `number`; \}\>
