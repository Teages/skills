# Interface: TextureDestroyOptions

Options when destroying textures through `.destroy()` calls.
Controls how thoroughly textures and their sources are cleaned up.

## Example

```ts
// Basic texture cleanup
sprite.destroy({
    texture: true
});

// Complete texture cleanup
sprite.destroy({
    texture: true,
    textureSource: true
});
```

## See

 - [Container#destroy](scene.Container.html#destroy) For general destruction
 - [Texture#destroy](rendering.Texture.html#destroy) For texture cleanup

## Properties

### texture?

> `optional` **texture**: `boolean`

Whether to destroy the texture for the display object.

#### Default

```ts
false
```

#### Example

```js
texturedObject.destroy({ texture: true });
```

***

### textureSource?

> `optional` **textureSource**: `boolean`

Whether to destroy the underlying texture source.
Use carefully with shared texture sources.

#### Default

```ts
false
```

#### Example

```js
texturedObject.destroy({ textureSource: true });
```
