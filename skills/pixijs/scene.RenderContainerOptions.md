# Interface: RenderContainerOptions

**`Advanced`**

Options for the [RenderContainer](scene.RenderContainer.md) constructor.

## Extends

- [`ContainerOptions`](scene.ContainerOptions.md)

## Properties

### addBounds()?

> `optional` **addBounds**: (`bounds`) => `void`

how to add the bounds of this object when measuring

#### Parameters

##### bounds

[`BoundsData`](rendering.BoundsData.md)

#### Returns

`void`

***

### containsPoint()?

> `optional` **containsPoint**: (`point`) => `boolean`

how to know if the custom render logic contains a point or not, used for interaction

#### Parameters

##### point

[`Point`](maths.Point.md)

#### Returns

`boolean`

***

### render?

> `optional` **render**: [`RenderFunction`](scene.RenderFunction.md)

the optional custom render function if you want to inject the function via the constructor
