# Interface: GeometryPathOptions

**`Advanced`**

Options for building geometry from a graphics path.
Provides a possibility to specify a transformation Matrix for the texture's UVs and output mesh geometry.

## Example

```ts
const options: GeometryPathOptions = {
    path: new GraphicsPath().rect(0, 0, 64, 64),
    textureMatrix: new Matrix()
        .scale(2, 2)
        .rotate(Math.PI / 4),
    out: meshGeometry
};
const geometry:MeshGeometry = buildGeometryFromPath(options);
const mesh = new Mesh({
    geometry: meshGeometry,
    texture: bunnyTexture
});
```

## Properties

### out?

> `optional` **out**: [`MeshGeometry`](scene.MeshGeometry.md)

an optional `MeshGeometry` to write too instead of creating a new one

***

### path

> **path**: [`GraphicsPath`](scene.GraphicsPath.md)

the path to build the geometry from

***

### textureMatrix?

> `optional` **textureMatrix**: [`Matrix`](maths.Matrix.md)

a `Matrix` that can be used to modify the texture UVs of the path being built
