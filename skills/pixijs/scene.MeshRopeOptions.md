# Interface: MeshRopeOptions

Constructor options used for `MeshRope` instances. Allows configuration of a rope-like mesh
that follows a series of points with a texture applied.

## Example

```ts
// Create a basic rope with two points
const rope = new MeshRope({
    texture: Texture.from('snake.png'),
    points: [
        new Point(0, 0),
        new Point(100, 0)
    ]
});

// Create a rope with high-quality texture scaling
const highQualityRope = new MeshRope({
    texture: Texture.from('rope-hd.png'),
    points: [
        new Point(0, 0),
        new Point(50, 25),
        new Point(100, 0)
    ],
    textureScale: 0.5  // Downscale HD texture for better quality
});
```

## See

 - [MeshRope](scene.MeshRope.md) For the rope implementation
 - [RopeGeometry](scene.RopeGeometry.md) For the underlying geometry

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`MeshOptions`](scene.MeshOptions.md), `"geometry"`\>

## Properties

### points

> **points**: [`PointData`](maths.PointData.md)[]

An array of points that determine the rope's shape and path

***

### texture

> **texture**: [`Texture`](rendering.Texture.md)

The texture to use on the rope

#### Overrides

`Omit.texture`

***

### textureScale?

> `optional` **textureScale**: `number`

Controls how the texture is scaled along the rope.
- If 0 (default), the texture stretches to fit between points
- If > 0, texture repeats with preserved aspect ratio
- Larger textures with textureScale < 1 can reduce artifacts

#### Default

```ts
0
```
