# Interface: MeshPlaneOptions

Constructor options used for `MeshPlane` instances. Defines how a texture is mapped
onto a plane with configurable vertex density.

## Example

```ts
// Basic plane with default vertex density
const plane = new MeshPlane({
    texture: Assets.get('background.png')
});

// High-detail plane for complex deformations
const detailedPlane = new MeshPlane({
    texture: Assets.get('landscape.jpg'),
    verticesX: 20,
    verticesY: 20
});
```

## See

 - [MeshPlane](scene.MeshPlane.md) For the mesh implementation
 - [PlaneGeometry](scene.PlaneGeometry.md) For the underlying geometry

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`MeshOptions`](scene.MeshOptions.md), `"geometry"`\>

## Extended by

- [`PerspectivePlaneOptions`](scene.PerspectivePlaneOptions.md)

## Properties

### texture

> **texture**: [`Texture`](rendering.Texture.md)

The texture to use on the plane.

#### Overrides

`Omit.texture`

***

### verticesX?

> `optional` **verticesX**: `number`

Number of vertices along the X axis. More vertices allow for more detailed deformations.

#### Default

```ts
10
```

***

### verticesY?

> `optional` **verticesY**: `number`

Number of vertices along the Y axis. More vertices allow for more detailed deformations.

#### Default

```ts
10
```
