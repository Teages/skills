# Interface: Effect

**`Advanced`**

An effect that can be applied to a container. This is used to create effects such as filters/masks etc.

## Properties

### pipe

> **pipe**: `string`

***

### priority

> **priority**: `number`

## Methods

### addBounds()?

> `optional` **addBounds**(`bounds`, `skipUpdateTransform?`): `void`

#### Parameters

##### bounds

[`Bounds`](rendering.Bounds.md)

##### skipUpdateTransform?

`boolean`

#### Returns

`void`

***

### addLocalBounds()?

> `optional` **addLocalBounds**(`bounds`, `localRoot`): `void`

#### Parameters

##### bounds

[`Bounds`](rendering.Bounds.md)

##### localRoot

[`Container`](scene.Container.md)

#### Returns

`void`

***

### containsPoint()?

> `optional` **containsPoint**(`point`, `hitTestFn`): `boolean`

#### Parameters

##### point

[`PointData`](maths.PointData.md)

##### hitTestFn

(`container`, `point`) => `boolean`

#### Returns

`boolean`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`
