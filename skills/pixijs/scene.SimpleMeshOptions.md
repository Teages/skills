# Interface: SimpleMeshOptions

**`Advanced`**

Options for creating a SimpleMesh instance. Defines the texture, geometry data, and rendering topology
for a basic mesh with direct vertex manipulation capabilities.

## Example

```ts
// Create a basic textured triangle
const mesh = new MeshSimple({
    texture: Texture.from('sprite.png'),
    vertices: new Float32Array([
        0, 0,      // Vertex 1
        100, 0,    // Vertex 2
        50, 100    // Vertex 3
    ]),
    uvs: new Float32Array([
        0, 0,    // UV 1
        1, 0,    // UV 2
        0.5, 1   // UV 3
    ])
});

// Create an indexed quad with custom topology
const quadMesh = new MeshSimple({
    texture: Texture.from('square.png'),
    vertices: new Float32Array([
        0, 0,     // Top-left
        100, 0,   // Top-right
        100, 100, // Bottom-right
        0, 100    // Bottom-left
    ]),
    uvs: new Float32Array([
        0, 0,  // Top-left
        1, 0,  // Top-right
        1, 1,  // Bottom-right
        0, 1   // Bottom-left
    ]),
    indices: new Uint32Array([
        0, 1, 2,  // Triangle 1
        0, 2, 3   // Triangle 2
    ]),
    topology: 'triangle-list'
});
```

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`MeshOptions`](scene.MeshOptions.md), `"geometry"`\>

## Properties

### indices?

> `optional` **indices**: [`Uint32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)

Array of indices defining triangles. Each triangle is 3 indices into the vertices array.

***

### texture

> **texture**: [`Texture`](rendering.Texture.md)

The texture to use

#### Overrides

`Omit.texture`

***

### topology?

> `optional` **topology**: [`Topology`](rendering.Topology.md)

How vertices are connected to form triangles.
- 'triangle-list': Individual triangles (default)
- 'triangle-strip': Connected triangle strip
- 'line-list': Lines between vertices
- 'line-strip': Connected line strip
- 'point-list': Points rendered individually

#### Default

```ts
'triangle-list'
```

***

### uvs?

> `optional` **uvs**: [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

Array of UV coordinates for texture mapping. Each UV is 2 floats - u, v

***

### vertices?

> `optional` **vertices**: [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

Array of vertex positions as x,y pairs. Each vertex is 2 floats - x, y
