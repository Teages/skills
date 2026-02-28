# Class: ColorMask

**`Advanced`**

The ColorMask effect allows you to apply a color mask to the rendering process.
This can be useful for selectively rendering certain colors or for creating
effects based on color values.

## Implements

- [`Effect`](rendering.Effect.md)
- [`PoolItem`](utils.PoolItem.md)

## Constructors

### Constructor

> **new ColorMask**(`options`): `ColorMask`

#### Parameters

##### options

###### mask

`number`

#### Returns

`ColorMask`

## Properties

### mask

> **mask**: `number`

***

### pipe

> **pipe**: `string` = `'colorMask'`

#### Implementation of

[`Effect`](rendering.Effect.md).[`pipe`](rendering.Effect.html#pipe)

***

### priority

> **priority**: `number` = `0`

#### Implementation of

[`Effect`](rendering.Effect.md).[`priority`](rendering.Effect.html#priority)

***

### extension

> `static` **extension**: [`ExtensionMetadata`](extensions.ExtensionMetadata.md) = `ExtensionType.MaskEffect`

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[`Effect`](rendering.Effect.md).[`destroy`](rendering.Effect.html#destroy)

***

### init()

> **init**(`mask`): `void`

#### Parameters

##### mask

`number`

#### Returns

`void`

#### Implementation of

`PoolItem.init`

***

### test()

> `static` **test**(`mask`): `boolean`

#### Parameters

##### mask

`any`

#### Returns

`boolean`
