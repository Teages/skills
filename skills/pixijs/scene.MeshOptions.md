# Interface: MeshOptions\<GEOMETRY, SHADER\>

**`Advanced`**

Options for creating a Mesh instance.

## Extends

- `MeshOptions`.[`ContainerOptions`](scene.ContainerOptions.md)

## Type Parameters

### GEOMETRY

`GEOMETRY` *extends* [`Geometry`](rendering.Geometry.md) = [`MeshGeometry`](scene.MeshGeometry.md)

### SHADER

`SHADER` *extends* [`Shader`](rendering.Shader.md) = [`TextureShader`](scene.TextureShader.md)

## Properties

### geometry

> **geometry**: `GEOMETRY`

Includes vertex positions, face indices, colors, UVs, and
custom attributes within buffers, reducing the cost of passing all
this data to the GPU. Can be shared between multiple Mesh objects.

***

### roundPixels?

> `optional` **roundPixels**: `boolean`

Whether or not to round the x/y position.

***

### shader?

> `optional` **shader**: `SHADER`

Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
Can be shared between multiple Mesh objects.

***

### state?

> `optional` **state**: [`State`](rendering.State.md)

The state of WebGL required to render the mesh.

***

### texture?

> `optional` **texture**: [`Texture`](rendering.Texture.md)

The texture that the Mesh uses. Null for non-MeshMaterial shaders
