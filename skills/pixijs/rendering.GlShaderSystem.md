# Class: GlShaderSystem

**`Advanced`**

System plugin to the renderer to manage the shaders for WebGL.

## Constructors

### Constructor

> **new GlShaderSystem**(`renderer`): `GlShaderSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

#### Returns

`GlShaderSystem`

## Methods

### bind()

> **bind**(`shader`, `skipSync?`): `void`

Changes the current shader to the one given in parameter.

#### Parameters

##### shader

[`Shader`](rendering.Shader.md)

the new shader

##### skipSync?

`boolean`

false if the shader should automatically sync its uniforms.

#### Returns

`void`

the glProgram that belongs to the shader.

***

### bindUniformBlock()

> **bindUniformBlock**(`uniformGroup`, `name`, `index`): `void`

Binds a uniform block to the shader.

#### Parameters

##### uniformGroup

the uniform group to bind

[`UniformGroup`](rendering.UniformGroup.md)\<`any`\> | [`BufferResource`](rendering.BufferResource.md)

##### name

`string`

the name of the uniform block

##### index

`number` = `0`

the index of the uniform block

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### resetState()

> **resetState**(): `void`

#### Returns

`void`

***

### updateUniformGroup()

> **updateUniformGroup**(`uniformGroup`): `void`

Updates the uniform group.

#### Parameters

##### uniformGroup

[`UniformGroup`](rendering.UniformGroup.md)

the uniform group to update

#### Returns

`void`
