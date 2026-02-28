# Class: ScissorMask

**`Advanced`**

ScissorMask is an effect that applies a scissor mask to a container.
It restricts rendering to the area defined by the mask.
The mask is a Container that defines the area to be rendered.
The mask must be a Container that is not renderable or measurable.
This effect is used to create clipping regions in the rendering process.

## Implements

- [`Effect`](rendering.Effect.md)

## Constructors

### Constructor

> **new ScissorMask**(`mask`): `ScissorMask`

#### Parameters

##### mask

[`Container`](scene.Container.md)

#### Returns

`ScissorMask`

## Properties

### mask

> **mask**: [`Container`](scene.Container.md)

***

### pipe

> **pipe**: `string` = `'scissorMask'`

#### Implementation of

[`Effect`](rendering.Effect.md).[`pipe`](rendering.Effect.html#pipe)

***

### priority

> **priority**: `number` = `0`

#### Implementation of

[`Effect`](rendering.Effect.md).[`priority`](rendering.Effect.html#priority)

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

### reset()

> **reset**(): `void`

#### Returns

`void`
