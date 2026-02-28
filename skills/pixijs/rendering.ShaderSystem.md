# Interface: ShaderSystem

**`Advanced`**

System plugin to the renderer to manage the shaders.

## Extends

- [`System`](rendering.System.md)

## Properties

### destroy()?

> `optional` **destroy**: (`options?`) => `void`

Generic destroy methods to be overridden by the subclass

#### Parameters

##### options?

[`RendererDestroyOptions`](rendering.RendererDestroyOptions.md)

#### Returns

`void`

#### Inherited from

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### init()?

> `optional` **init**: (`options`) => `void`

#### Parameters

##### options

`null`

#### Returns

`void`

#### Inherited from

[`System`](rendering.System.md).[`init`](rendering.System.html#init)

***

### maxTextures

> `readonly` **maxTextures**: `number`

the maximum number of textures that can be bound to a shader
