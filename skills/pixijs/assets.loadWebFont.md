# Variable: loadWebFont

> `const` **loadWebFont**: `object`

**`Advanced`**

A loader plugin for handling web fonts

## Type Declaration

### extension

> **extension**: `object`

#### extension.priority

> **priority**: [`LoaderParserPriority`](assets.LoaderParserPriority.md) = `LoaderParserPriority.Low`

#### extension.type

> **type**: [`LoadParser`](extensions.ExtensionType.html#loadparser) = `ExtensionType.LoadParser`

### id

> **id**: `string` = `'web-font'`

### name

> **name**: `string` = `'loadWebFont'`

used for deprecation purposes

### load()

> **load**\<`T`\>(`url`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FontFace`](https://developer.mozilla.org/docs/Web/API/FontFace) \| [`FontFace`](https://developer.mozilla.org/docs/Web/API/FontFace)[]\>

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

##### options?

[`ResolvedAsset`](assets.ResolvedAsset.md)\<[`LoadFontData`](assets.LoadFontData.md)\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FontFace`](https://developer.mozilla.org/docs/Web/API/FontFace) \| [`FontFace`](https://developer.mozilla.org/docs/Web/API/FontFace)[]\>

### test()

> **test**(`url`): `boolean`

#### Parameters

##### url

`string`

#### Returns

`boolean`

### unload()

> **unload**(`font`): `void`

#### Parameters

##### font

[`FontFace`](https://developer.mozilla.org/docs/Web/API/FontFace) | [`FontFace`](https://developer.mozilla.org/docs/Web/API/FontFace)[]

#### Returns

`void`

## Example

```ts
import { Assets } from 'pixi.js';

Assets.load({
  alias: 'font',
  src: 'fonts/titan-one.woff',
  data: {
    family: 'Titan One',
    weights: ['normal', 'bold'],
  }
})
```
