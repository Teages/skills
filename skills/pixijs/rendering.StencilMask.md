# Class: StencilMask

**`Advanced`**

A mask that uses the stencil buffer to clip the rendering of a container.
This is useful for complex masks that cannot be achieved with simple shapes.
It is more performant than using a `Graphics` mask, but requires WebGL support.
It is also useful for masking with `Container` objects that have complex shapes.

## Implements

- [`Effect`](rendering.Effect.md)
- [`PoolItem`](utils.PoolItem.md)

## Constructors

### Constructor

> **new StencilMask**(`options`): `StencilMask`

#### Parameters

##### options

###### mask

[`Container`](scene.Container.md)

#### Returns

`StencilMask`

## Properties

### mask

> **mask**: [`Container`](scene.Container.md)

***

### pipe

> **pipe**: `string` = `'stencilMask'`

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

### addBounds()

> **addBounds**(`bounds`, `skipUpdateTransform`): `void`

#### Parameters

##### bounds

[`Bounds`](rendering.Bounds.md)

##### skipUpdateTransform

`boolean`

#### Returns

`void`

#### Implementation of

[`Effect`](rendering.Effect.md).[`addBounds`](rendering.Effect.html#addbounds)

***

### addLocalBounds()

> **addLocalBounds**(`bounds`, `localRoot`): `void`

#### Parameters

##### bounds

[`Bounds`](rendering.Bounds.md)

##### localRoot

[`Container`](scene.Container.md)

#### Returns

`void`

#### Implementation of

[`Effect`](rendering.Effect.md).[`addLocalBounds`](rendering.Effect.html#addlocalbounds)

***

### containsPoint()

> **containsPoint**(`point`, `hitTestFn`): `boolean`

#### Parameters

##### point

[`Point`](maths.Point.md)

##### hitTestFn

(`container`, `point`) => `boolean`

#### Returns

`boolean`

#### Implementation of

[`Effect`](rendering.Effect.md).[`containsPoint`](rendering.Effect.html#containspoint)

***

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

[`Container`](scene.Container.md)

#### Returns

`void`

#### Implementation of

`PoolItem.init`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Implementation of

`PoolItem.reset`

***

### test()

> `static` **test**(`mask`): `boolean`

#### Parameters

##### mask

`any`

#### Returns

`boolean`
