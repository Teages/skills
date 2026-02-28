# Interface: ExtractedAttributeData

**`Advanced`**

This interface represents the extracted attribute data from a WebGL program.
It extends the `Attribute` interface but omits the `buffer` property.
It includes an optional `location` property that indicates where the shader location is for this attribute.

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`Attribute`](rendering.Attribute.md), `"buffer"`\>

## Properties

### divisor?

> `optional` **divisor**: `number`

attribute divisor for instanced rendering. Note: this is a **WebGL-only** feature, the WebGPU renderer will
issue a warning if one of the attributes has divisor set.

#### Inherited from

[`Attribute`](rendering.Attribute.md).[`divisor`](rendering.Attribute.html#divisor)

***

### format?

> `optional` **format**: [`VertexFormat`](rendering.VertexFormat.md)

the format of the attribute

#### Inherited from

[`Attribute`](rendering.Attribute.md).[`format`](rendering.Attribute.html#format)

***

### instance?

> `optional` **instance**: `boolean`

is this an instanced buffer? (defaults to false)

#### Inherited from

[`Attribute`](rendering.Attribute.md).[`instance`](rendering.Attribute.html#instance)

***

### location?

> `optional` **location**: `number`

set where the shader location is for this attribute

***

### offset?

> `optional` **offset**: `number`

the offset of the attribute from the buffer, defaults to 0 - in bytes

#### Inherited from

[`Attribute`](rendering.Attribute.md).[`offset`](rendering.Attribute.html#offset)

***

### size?

> `optional` **size**: `number`

the number of elements to be rendered. If not specified, all vertices after the starting vertex will be drawn.

#### Inherited from

[`Attribute`](rendering.Attribute.md).[`size`](rendering.Attribute.html#size)

***

### start?

> `optional` **start**: `number`

the starting vertex in the geometry to start drawing from. If not specified,
 drawing will start from the first vertex.

#### Inherited from

[`Attribute`](rendering.Attribute.md).[`start`](rendering.Attribute.html#start)

***

### stride?

> `optional` **stride**: `number`

the stride of the data in the buffer - in bytes

#### Inherited from

[`Attribute`](rendering.Attribute.md).[`stride`](rendering.Attribute.html#stride)
