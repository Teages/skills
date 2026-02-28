# Class: Pool\<T, I\>

**`Advanced`**

A generic class for managing a pool of items.

## Type Parameters

### T

`T` *extends* [`PoolItem`](utils.PoolItem.md)

The type of items in the pool. Must implement [PoolItem](utils.PoolItem.md).

### I

`I` = [`Parameters`](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)\<[`NonNullable`](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype)\<`T`\[`"init"`\]\>\>\[`0`\]

The type of argument passed to item's `init` method if it exists.

## Constructors

### Constructor

> **new Pool**\<`T`, `I`\>(`ClassType`, `initialSize?`): `Pool`\<`T`, `I`\>

Constructs a new Pool.

#### Parameters

##### ClassType

[`PoolItemConstructor`](utils.PoolItemConstructor.md)\<`T`\>

The constructor of the items in the pool.

##### initialSize?

`number`

The initial size of the pool.

#### Returns

`Pool`\<`T`, `I`\>

## Accessors

### totalFree

#### Get Signature

> **get** **totalFree**(): `number`

Gets the number of items in the pool that are free to use without needing to create more.

##### Returns

`number`

***

### totalSize

#### Get Signature

> **get** **totalSize**(): `number`

Gets the number of items in the pool.

##### Returns

`number`

***

### totalUsed

#### Get Signature

> **get** **totalUsed**(): `number`

Gets the number of items in the pool that are currently in use.

##### Returns

`number`

## Methods

### clear()

> **clear**(): `void`

clears the pool

#### Returns

`void`

***

### get()

> **get**(`data?`): `T`

Gets an item from the pool. Calls the item's `init` method if it exists.
If there are no items left in the pool, a new one will be created.

#### Parameters

##### data?

`I`

Optional data to pass to the item's constructor.

#### Returns

`T`

The item from the pool.

***

### prepopulate()

> **prepopulate**(`total`): `void`

Prepopulates the pool with a given number of items.

#### Parameters

##### total

`number`

The number of items to add to the pool.

#### Returns

`void`

***

### return()

> **return**(`item`): `void`

Returns an item to the pool. Calls the item's `reset` method if it exists.

#### Parameters

##### item

`T`

The item to return to the pool.

#### Returns

`void`
