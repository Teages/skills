# Class: GlUniformGroupSystem

**`Advanced`**

System plugin to the renderer to manage shaders.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GlUniformGroupSystem**(`renderer`): `GlUniformGroupSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

The renderer this System works for.

#### Returns

`GlUniformGroupSystem`

## Methods

### destroy()

> **destroy**(): `void`

Destroys this System and removes all its textures.

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### updateUniformGroup()

> **updateUniformGroup**(`group`, `program`, `syncData`): `void`

Uploads the uniforms values to the currently bound shader.

#### Parameters

##### group

[`UniformGroup`](rendering.UniformGroup.md)

the uniforms values that be applied to the current shader

##### program

[`GlProgram`](rendering.GlProgram.md)

##### syncData

###### textureCount

`number`

#### Returns

`void`
