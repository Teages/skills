# Class: CubeTexture

**`Advanced`**

A cube texture that can be bound to shaders (samplerCube / texture_cube).

This is a lightweight wrapper around a [CubeTextureSource](rendering.CubeTextureSource.md).

## Examples

Load 6 images and create a cube texture (paths are just examples):

```ts
import { Assets, CubeTexture } from 'pixi.js';

await Assets.load([
  'px.png', 'nx.png',
  'py.png', 'ny.png',
  'pz.png', 'nz.png',
]);

// IMPORTANT: string ids must already be in the cache (e.g. after Assets.load)
const cube = CubeTexture.from({
  faces: {
    right: 'px.png',  // +X
    left: 'nx.png',   // -X
    top: 'py.png',    // +Y
    bottom: 'ny.png', // -Y
    front: 'pz.png',  // +Z
    back: 'nz.png',   // -Z
  },
  label: 'skybox',
});
```

Bind to a shader (resources differ between WebGL and WebGPU, but the cube texture binding stays the same):

```ts
const shader = Shader.from({
  gl: { fragment: `uniform samplerCube uCube;` },
  gpu: { fragment: { source: `@group(0) @binding(0) var uCube : texture_cube<f32>;` } },
  resources: {
    uCube: cube.source,
    uSampler: cube.source.style,
  },
});
```

## Extends

- `EventEmitter`\<\{ `destroy`: `CubeTexture`; \}\>

## Implements

- [`BindableTexture`](rendering.BindableTexture.md)

## Constructors

### Constructor

> **new CubeTexture**(`options`): `CubeTexture`

#### Parameters

##### options

[`CubeTextureOptions`](rendering.CubeTextureOptions.md)

#### Returns

`CubeTexture`

#### Overrides

`EventEmitter<{ destroy: CubeTexture }>.constructor`

## Properties

### destroyed

> **destroyed**: `boolean` = `false`

Has the texture been destroyed?

***

### label?

> `optional` **label**: `string`

Optional label for debugging.

***

### source

> `readonly` **source**: [`CubeTextureSource`](rendering.CubeTextureSource.md)

The underlying cube texture source.

#### Implementation of

[`BindableTexture`](rendering.BindableTexture.md).[`source`](rendering.BindableTexture.html#source)

***

### uid

> `readonly` **uid**: `number`

unique id for this cube texture

## Methods

### destroy()

> **destroy**(`destroySource`): `void`

Destroy this CubeTexture.

#### Parameters

##### destroySource

`boolean` = `false`

If true, destroys the underlying [CubeTextureSource](rendering.CubeTextureSource.md).

#### Returns

`void`

***

### from()

#### Call Signature

> `static` **from**(`options`, `skipCache?`): `CubeTexture`

Convenience factory for creating a cube texture from a [CubeTextureSource](rendering.CubeTextureSource.md).

##### Parameters

###### options

[`CubeTextureSource`](rendering.CubeTextureSource.md)

A cube texture source.

###### skipCache?

`boolean`

Unused for this overload.

##### Returns

`CubeTexture`

#### Call Signature

> `static` **from**(`options`, `skipCache?`): `CubeTexture`

Convenience factory for creating a cube texture from 6 face inputs.

Face inputs are converted to [Texture](rendering.Texture.md) via [Texture.from](rendering.RenderTexture.html#from). This does **not** load resources;
string ids must already be present in the cache (e.g. after `Assets.load`).

##### Parameters

###### options

`CubeTextureFromOptions`

Options including the 6 face inputs.

###### skipCache?

`boolean`

Skip caching the resulting CubeTexture when all faces are string ids.

##### Returns

`CubeTexture`

##### Example

```ts
const cube = CubeTexture.from({
  faces: {
    right: 'px.png',
    left: 'nx.png',
    top: 'py.png',
    bottom: 'ny.png',
    front: 'pz.png',
    back: 'nz.png',
  },
});
```
