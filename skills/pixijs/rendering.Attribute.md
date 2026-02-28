# Interface: Attribute

**`Advanced`**

The attribute data for a geometries attributes

## Properties

### buffer

> **buffer**: [`Buffer`](rendering.Buffer.md)

the buffer that this attributes data belongs to

***

### divisor?

> `optional` **divisor**: `number`

attribute divisor for instanced rendering. Note: this is a **WebGL-only** feature, the WebGPU renderer will
issue a warning if one of the attributes has divisor set.

***

### format?

> `optional` **format**: [`VertexFormat`](rendering.VertexFormat.md)

the format of the attribute

***

### instance?

> `optional` **instance**: `boolean`

is this an instanced buffer? (defaults to false)

***

### offset?

> `optional` **offset**: `number`

the offset of the attribute from the buffer, defaults to 0 - in bytes

***

### size?

> `optional` **size**: `number`

the number of elements to be rendered. If not specified, all vertices after the starting vertex will be drawn.

***

### start?

> `optional` **start**: `number`

the starting vertex in the geometry to start drawing from. If not specified,
 drawing will start from the first vertex.

***

### stride?

> `optional` **stride**: `number`

the stride of the data in the buffer - in bytes
