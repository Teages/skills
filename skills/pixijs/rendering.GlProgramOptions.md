# Interface: GlProgramOptions

**`Advanced`**

The options for the gl program

## Properties

### fragment

> **fragment**: `string`

The fragment glsl shader source.

***

### name?

> `optional` **name**: `string`

the name of the program, defaults to 'pixi-program'

***

### preferredFragmentPrecision?

> `optional` **preferredFragmentPrecision**: `string`

the preferred fragment precision for the shader, this may not be used if the device does not support it

***

### preferredVertexPrecision?

> `optional` **preferredVertexPrecision**: `string`

the preferred vertex precision for the shader, this may not be used if the device does not support it

***

### transformFeedbackVaryings?

> `optional` **transformFeedbackVaryings**: `object`

#### bufferMode

> **bufferMode**: `"separate"` \| `"interleaved"`

#### names

> **names**: `string`[]

***

### vertex

> **vertex**: `string`

The vertex glsl shader source.
