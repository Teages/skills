# Interface: StencilState

**`Advanced`**

The stencil state for the GPU renderer.
This is used to define how the stencil buffer should be configured.

## Properties

### stencilBack?

> `optional` **stencilBack**: `object`

#### compare

> **compare**: `"equal"` \| `"always"` \| `"not-equal"`

#### passOp

> **passOp**: `"replace"` \| `"keep"` \| `"increment-clamp"` \| `"decrement-clamp"`

***

### stencilFront?

> `optional` **stencilFront**: `object`

#### compare

> **compare**: `"equal"` \| `"always"` \| `"not-equal"`

#### passOp

> **passOp**: `"replace"` \| `"keep"` \| `"increment-clamp"` \| `"decrement-clamp"`

***

### stencilReadMask?

> `optional` **stencilReadMask**: `number`

***

### stencilWriteMask?

> `optional` **stencilWriteMask**: `number`
