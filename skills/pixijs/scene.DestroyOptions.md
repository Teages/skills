# Type Alias: DestroyOptions

> **DestroyOptions** = [`TypeOrBool`](utils.TypeOrBool.md)\<[`BaseDestroyOptions`](scene.BaseDestroyOptions.md) & [`ContextDestroyOptions`](scene.ContextDestroyOptions.md) & [`TextureDestroyOptions`](scene.TextureDestroyOptions.md) & [`TextDestroyOptions`](scene.TextDestroyOptions.md)\>

Options for destroying a container and its resources.
Combines all destroy options into a single configuration object.

## Example

```ts
// Destroy the container and all its children, including textures and styles
container.destroy({
    children: true,
    texture: true,
    textureSource: true,
    context: true,
    style: true
});
```
