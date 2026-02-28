# Variable: loadVideoTextures

> `const` **loadVideoTextures**: `object`

**`Advanced`**

A simple plugin to load video textures.

You can pass VideoSource options to the loader via the .data property of the asset descriptor
when using Assets.load().
```js
// Set the data
const texture = await Assets.load({
    src: './assets/city.mp4',
    data: {
        preload: true,
        autoPlay: true,
    },
});
```

## Type Declaration

### extension

> **extension**: `object`

#### extension.name

> **name**: `string` = `'loadVideo'`

#### extension.type

> **type**: [`LoadParser`](extensions.ExtensionType.html#loadparser) = `ExtensionType.LoadParser`

### id

> **id**: `string` = `'video'`

### name

> **name**: `string` = `'loadVideo'`

used for deprecation purposes

### load()

> **load**\<`T`\>(`url`, `asset`, `loader`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

##### asset

[`ResolvedAsset`](assets.ResolvedAsset.md)\<`LoadVideoData`\>

##### loader

[`Loader`](assets.Loader.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>\>

### test()

> **test**(`url`): `boolean`

#### Parameters

##### url

`string`

#### Returns

`boolean`

### unload()

> **unload**(`texture`): `void`

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

#### Returns

`void`
