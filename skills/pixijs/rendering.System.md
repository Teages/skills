# Interface: System\<INIT_OPTIONS, DESTROY_OPTIONS\>

**`Advanced`**

A system is a generic interface for a renderer system.
It is used to define the methods that a system should implement.

## Extended by

- [`ShaderSystem`](rendering.ShaderSystem.md)

## Type Parameters

### INIT_OPTIONS

`INIT_OPTIONS` = `null`

### DESTROY_OPTIONS

`DESTROY_OPTIONS` = [`RendererDestroyOptions`](rendering.RendererDestroyOptions.md)

## Properties

### destroy()?

> `optional` **destroy**: (`options?`) => `void`

Generic destroy methods to be overridden by the subclass

#### Parameters

##### options?

`DESTROY_OPTIONS`

#### Returns

`void`

***

### init()?

> `optional` **init**: (`options`) => `void`

#### Parameters

##### options

`INIT_OPTIONS`

#### Returns

`void`
