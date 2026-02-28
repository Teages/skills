# Interface: GeometryDescriptor

**`Advanced`**

the interface that describes the structure of the geometry

## Properties

### attributes?

> `optional` **attributes**: [`AttributeOptions`](rendering.AttributeOptions.md)

the attributes that make up the geometry

***

### indexBuffer?

> `optional` **indexBuffer**: `number`[] \| [`Buffer`](rendering.Buffer.md) \| [`TypedArray`](rendering.TypedArray.md)

optional index buffer for this geometry

***

### instanceCount?

> `optional` **instanceCount**: `number`

***

### label?

> `optional` **label**: `string`

an optional label to easily identify the geometry

***

### topology?

> `optional` **topology**: [`Topology`](rendering.Topology.md)

the topology of the geometry, defaults to 'triangle-list'
