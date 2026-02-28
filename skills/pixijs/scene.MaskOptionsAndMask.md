# Interface: MaskOptionsAndMask

MaskOptionsAndMask combines MaskOptions with a Mask for configuring masking behavior.
Used when setting up complex masking effects with additional options.

## Example

```ts
sprite.setMask({
    mask: graphics,
    inverse: true,
});

// Clear existing mask
sprite.setMask({
    mask: null,
    inverse: false,
});
```

## See

 - [Container#setMask](scene.EffectsMixin.html#setmask) For applying masks
 - [MaskOptions](scene.MaskOptions.md) For base options

## Extends

- [`MaskOptions`](scene.MaskOptions.md)

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

#### Inherited from

[`MaskOptions`](scene.MaskOptions.md).[`inverse`](scene.MaskOptions.html#inverse)

***

### mask

> **mask**: [`Mask`](scene.Mask.md)

The mask to apply, which can be a Container or null.

If null, it clears the existing mask.

#### Example

```ts
// Set a mask
sprite.setMask({
    mask: graphics,
    inverse: false,
});
