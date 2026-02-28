# Interface: BindResource

**`Advanced`**

an interface that allows a resource to be bound to the gpu in a bind group

## Properties

### \_touched

> **\_touched**: `number`

## Methods

### off()?

> `optional` **off**(`event`, `listenerFunction`, `listener`): `void`

todo

#### Parameters

##### event

`"change"`

##### listenerFunction

(`resource`) => `void`

##### listener

[`BindGroup`](rendering.BindGroup.md)

#### Returns

`void`

***

### on()?

> `optional` **on**(`event`, `listenerFunction`, `listener`): `void`

event dispatch whenever the underlying resource needs to change
this could be a texture or buffer that has been resized.
This is important as it allows the renderer to know that it needs to rebind the resource

#### Parameters

##### event

`"change"`

##### listenerFunction

(`resource`) => `void`

##### listener

[`BindGroup`](rendering.BindGroup.md)

#### Returns

`void`
