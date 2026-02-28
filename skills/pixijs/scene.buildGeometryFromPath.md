# Function: buildGeometryFromPath()

> **buildGeometryFromPath**(`options`): [`MeshGeometry`](scene.MeshGeometry.md)

**`Advanced`**

When building a mesh, it helps to leverage the simple API we have in `GraphicsPath` as it can often be easier to
define the geometry in a more human-readable way. This function takes a `GraphicsPath` and returns a `MeshGeometry`.

## Parameters

### options

either a `GraphicsPath` or `GeometryPathOptions`

[`GraphicsPath`](scene.GraphicsPath.md) | [`GeometryPathOptions`](scene.GeometryPathOptions.md)

## Returns

[`MeshGeometry`](scene.MeshGeometry.md)

a new `MeshGeometry` instance build from the path

## Example

```ts

const path = new GraphicsPath()
   .drawRect(0, 0, 100, 100)

const geometry:MeshGeometry = buildGeometryFromPath(path);

const mesh = new Mesh({geometry});

```
You can also pass in a Matrix to transform the uvs as by default you may want to control how they are set up.
