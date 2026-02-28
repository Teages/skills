# Interface: View

**`Advanced`**

A view is something that is able to be rendered by the renderer.

## Properties

### \_roundPixels

> **\_roundPixels**: `0` \| `1`

this is an int because it is packed directly into an attribute in the shader

***

### batched

> **batched**: `boolean`

whether or not this view should be batched

***

### bounds

> **bounds**: [`BoundsData`](rendering.BoundsData.md)

this is the AABB rectangle bounds of the view in local untransformed space.

***

### containsPoint()

> **containsPoint**: (`point`) => `boolean`

Checks if the point is within the view

#### Parameters

##### point

[`Point`](maths.Point.md)

#### Returns

`boolean`

***

### renderPipeId

> `readonly` **renderPipeId**: `string`

an identifier that is used to identify the type of system that will be used to render this renderable
eg, 'sprite' will use the sprite system (based on the systems name

***

### uid

> `readonly` **uid**: `number`

a unique id for this view

## Accessors

### roundPixels

#### Get Signature

> **get** **roundPixels**(): `boolean`

Whether or not to round the x/y position of the object.

##### Returns

`boolean`

#### Set Signature

> **set** **roundPixels**(`value`): `void`

if true, the view will have its position rounded to the nearest whole number

##### Parameters

###### value

`boolean`

##### Returns

`void`
