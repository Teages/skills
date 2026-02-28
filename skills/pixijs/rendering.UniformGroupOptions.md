# Type Alias: UniformGroupOptions

> **UniformGroupOptions** = `object`

**`Advanced`**

Uniform group options

## Properties

### isStatic?

> `optional` **isStatic**: `boolean`

if true, then you are responsible for when the data is uploaded to the GPU by calling `update()`

***

### ubo?

> `optional` **ubo**: `boolean`

if true the UniformGroup is handled as an Uniform buffer object.
This is the only way WebGPU can work with uniforms. WebGL2 can also use this.
So don't set to true if you want to use WebGPU :D
