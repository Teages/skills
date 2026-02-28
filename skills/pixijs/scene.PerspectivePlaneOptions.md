# Interface: PerspectivePlaneOptions

Constructor options used for `PerspectiveMesh` instances. Defines the geometry and appearance
of a 2D mesh with perspective projection.

## Example

```ts
// Create a perspective mesh with a texture
const mesh = new PerspectiveMesh({
    texture: Texture.from('myImage.png'),
    verticesX: 20,
    verticesY: 20,
    // Define corners clockwise from top-left
    x0: 0,   y0: 0,    // Top-left
    x1: 100, y1: 20,   // Top-right (raised)
    x2: 100, y2: 100,  // Bottom-right
    x3: 0,   y3: 80    // Bottom-left (raised)
});

// Create a skewed perspective
const skewedMesh = new PerspectiveMesh({
    texture: Texture.from('background.jpg'),
    verticesX: 15,     // More vertices for smoother perspective
    verticesY: 15,
    x0: 0,   y0: 30,   // Shifted top-left
    x1: 128, y1: 0,    // Raised top-right
    x2: 128, y2: 128,  // Normal bottom-right
    x3: 0,   y3: 98    // Shifted bottom-left
});
```

## See

 - [PerspectiveMesh](scene.PerspectiveMesh.md) For the mesh implementation
 - [PerspectivePlaneGeometry](scene.PerspectivePlaneGeometry.md) For the underlying geometry

## Extends

- [`MeshPlaneOptions`](scene.MeshPlaneOptions.md)

## Properties

### x0?

> `optional` **x0**: `number`

The x-coordinate of the top-left corner

***

### x1?

> `optional` **x1**: `number`

The x-coordinate of the top-right corner

***

### x2?

> `optional` **x2**: `number`

The x-coordinate of the bottom-right corner

***

### x3?

> `optional` **x3**: `number`

The x-coordinate of the bottom-left corner

***

### y0?

> `optional` **y0**: `number`

The y-coordinate of the top-left corner

***

### y1?

> `optional` **y1**: `number`

The y-coordinate of the top-right corner

***

### y2?

> `optional` **y2**: `number`

The y-coordinate of the bottom-right corner

***

### y3?

> `optional` **y3**: `number`

The y-coordinate of the bottom-left corner
