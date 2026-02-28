# Interface: MaskOptions

Options for configuring mask behavior on a display object.

## Example

```ts
// Basic mask inversion
sprite.setMask({
    mask: graphics,
    inverse: true
});
```

## See

 - [Container#setMask](scene.EffectsMixin.html#setmask) For applying masks with options
 - [Container#mask](scene.EffectsMixin.html#mask) For basic masking

## Extended by

- [`MaskOptionsAndMask`](scene.MaskOptionsAndMask.md)

## Properties

### inverse

> **inverse**: `boolean`

Whether the mask should be inverted.
When true, the masked area becomes transparent and the unmasked area becomes visible.

#### Default

```ts
false
```

#### Example

```ts
// Invert the mask
sprite.setMask({
    mask: graphics,
    inverse: true
});
```
