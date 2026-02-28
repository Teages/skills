# Interface: BaseDestroyOptions

Base options for destroying display objects.
Controls how deep the destruction process should go through the display tree.

## Example

```ts
// Basic destruction - only this container
container.destroy({ children: false });

// Deep destruction - container and all children
container.destroy({ children: true });

// Cleanup pattern
function cleanupScene(scene: Container) {
    // Remove from parent first
    scene.parent?.removeChild(scene);
    // Then destroy with all children
    scene.destroy({ children: true });
}
```

## See

 - [Container#destroy](scene.Container.html#destroy) For destruction method
 - [DestroyOptions](scene.DestroyOptions.md) For all destroy options

## Properties

### children?

> `optional` **children**: `boolean`

Whether to destroy children recursively.
When true, runs destroy() on all children in the display tree.

#### Default

```ts
false
```

#### Example

```js
container.destroy({ children: true });
```
