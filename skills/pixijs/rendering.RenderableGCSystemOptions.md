# ~~Interface: RenderableGCSystemOptions~~

**`Advanced`**

Options for the [RenderableGCSystem](rendering.RenderableGCSystem.md).

## Deprecated

since 8.15.0

## Properties

### ~~renderableGCActive~~

> **renderableGCActive**: `boolean`

If set to true, this will enable the garbage collector on the renderables.

***

### ~~renderableGCFrequency~~

> **renderableGCFrequency**: `number`

Frames between two garbage collections.

#### Default

```ts
600
```

***

### ~~renderableGCMaxUnusedTime~~

> **renderableGCMaxUnusedTime**: `number`

The maximum idle frames before a texture is destroyed by garbage collection.

#### Default

```ts
60 * 60
```
