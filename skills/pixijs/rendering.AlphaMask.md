# Class: AlphaMask

**`Advanced`**

AlphaMask is an effect that applies a mask to a container using the alpha channel of a sprite.
It can be used to create complex masking effects by using a sprite as the mask.
The mask can be inverted, and it can render the mask to a texture if the mask is not a sprite.

## Implements

- [`Effect`](rendering.Effect.md)
- [`PoolItem`](utils.PoolItem.md)

## Constructors

### Constructor

> **new AlphaMask**(`options?`): `AlphaMask`

#### Parameters

##### options?

###### mask

[`Container`](scene.Container.md)

#### Returns

`AlphaMask`

## Properties

### inverse

> **inverse**: `boolean` = `false`

***

### mask

> **mask**: [`Container`](scene.Container.md)

***

### pipe

> **pipe**: `string` = `'alphaMask'`

#### Implementation of

[`Effect`](rendering.Effect.md).[`pipe`](rendering.Effect.html#pipe)

***

### priority

> **priority**: `number` = `0`

#### Implementation of

[`Effect`](rendering.Effect.md).[`priority`](rendering.Effect.html#priority)

***

### renderMaskToTexture

> **renderMaskToTexture**: `boolean`

***

### extension

> `static` **extension**: [`ExtensionMetadata`](extensions.ExtensionMetadata.md) = `ExtensionType.MaskEffect`

## Methods

### addBounds()

> **addBounds**(`bounds`, `skipUpdateTransform?`): `void`

#### Parameters

##### bounds

[`Bounds`](rendering.Bounds.md)

##### skipUpdateTransform?

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
