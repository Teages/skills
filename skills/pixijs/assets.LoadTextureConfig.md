# Interface: LoadTextureConfig

**`Advanced`**

Configuration for the [loadTextures][loadTextures](assets.loadTextures.md) plugin.

## See

loadTextures

## Extended by

- [`AssetsPreferences`](assets.AssetsPreferences.md)

## Properties

### crossOrigin

> **crossOrigin**: `string`

The crossOrigin value to use for images when `preferCreateImageBitmap` is `false`.

#### Default

```ts
'anonymous'
```

***

### preferCreateImageBitmap

> **preferCreateImageBitmap**: `boolean`

When set to `true`, loading and decoding images will happen with `createImageBitmap`,
otherwise it will use `new Image()`.

#### Default

```ts
true
```

***

### preferWorkers

> **preferWorkers**: `boolean`

When set to `true`, loading and decoding images will happen with Worker thread,
if available on the browser. This is much more performant as network requests
and decoding can be expensive on the CPU. However, not all environments support
Workers, in some cases it can be helpful to disable by setting to `false`.

#### Default

```ts
true
```
