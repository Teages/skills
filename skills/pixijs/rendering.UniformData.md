# Interface: UniformData

**`Advanced`**

This is the type of the uniform structures that are used in the UniformGroup.

## Properties

### name?

> `optional` **name**: `string`

***

### size?

> `optional` **size**: `number`

the size of the variable (eg 2 for vec2, 3 for vec3, 4 for vec4)

***

### type

> **type**: `UNIFORM_TYPES`

***

### value

> **value**: `unknown`

the value of the uniform, this could be any object - a parser will figure out how to write it to the buffer
