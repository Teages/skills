# Interface: AssetsPreferences

**`Advanced`**

Extensible preferences that can be used, for instance, when configuring loaders.

## Since

7.2.0

## Extends

- [`LoadTextureConfig`](assets.LoadTextureConfig.md).[`LoadSVGConfig`](assets.LoadSVGConfig.md).`AssetsPreferences`

## Properties

### crossOrigin

> **crossOrigin**: `string`

The crossOrigin value to use for images when `preferCreateImageBitmap` is `false`.

#### Default

```ts
'anonymous'
```

#### Inherited from

[`LoadTextureConfig`](assets.LoadTextureConfig.md).[`crossOrigin`](assets.LoadTextureConfig.html#crossorigin)

***

### parseAsGraphicsContext

> **parseAsGraphicsContext**: `boolean`

When set to `true`, loading and decoding images will happen with `new Image()`,

#### Default

```ts
false
```

#### Inherited from

[`LoadSVGConfig`](assets.LoadSVGConfig.md).[`parseAsGraphicsContext`](assets.LoadSVGConfig.html#parseasgraphicscontext)

***

### preferCreateImageBitmap

> **preferCreateImageBitmap**: `boolean`

When set to `true`, loading and decoding images will happen with `createImageBitmap`,
otherwise it will use `new Image()`.

#### Default

```ts
true
```

#### Inherited from

[`LoadTextureConfig`](assets.LoadTextureConfig.md).[`preferCreateImageBitmap`](assets.LoadTextureConfig.html#prefercreateimagebitmap)

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

#### Inherited from

[`LoadTextureConfig`](assets.LoadTextureConfig.md).[`preferWorkers`](assets.LoadTextureConfig.html#preferworkers)
