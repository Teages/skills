# Interface: ContextDestroyOptions

Options when destroying a graphics context.
Controls the cleanup of graphics-specific resources.

## Example

```ts
// Basic context cleanup
graphics.destroy({
    context: true
});

// Full graphics cleanup
graphics.destroy({
    context: true,
    texture: true,
    textureSource: true
});
```

## See

 - [Graphics#destroy](scene.Graphics.html#destroy) For graphics destruction
 - [DestroyOptions](scene.DestroyOptions.md) For all destroy options

## Properties

### context?

> `optional` **context**: `boolean`

Whether to destroy the graphics context associated with the graphics object.

#### Default

```ts
false
```

#### Example

```js
graphics.destroy({ context: true });
```
