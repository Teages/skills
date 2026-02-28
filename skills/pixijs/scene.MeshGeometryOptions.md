# Interface: MeshGeometryOptions

**`Advanced`**

Options for the mesh geometry.

## Properties

### indices?

> `optional` **indices**: [`Uint32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)

The indices of the mesh.

***

### positions?

> `optional` **positions**: [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

The positions of the mesh.

***

### shrinkBuffersToFit?

> `optional` **shrinkBuffersToFit**: `boolean`

Whether to shrink the buffers to fit the data.

***

### topology?

> `optional` **topology**: [`Topology`](rendering.Topology.md)

The topology of the mesh.

***

### uvs?

> `optional` **uvs**: [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

The UVs of the mesh. If not provided, they will be filled with 0 and match the size of the positions.
