# Variable: loadJson

> `const` **loadJson**: `object`

**`Advanced`**

A simple loader plugin for loading json data

## Type Declaration

### extension

> **extension**: `object`

#### extension.priority

> **priority**: [`LoaderParserPriority`](assets.LoaderParserPriority.md) = `LoaderParserPriority.Low`

#### extension.type

> **type**: [`LoadParser`](extensions.ExtensionType.html#loadparser) = `ExtensionType.LoadParser`

### id

> **id**: `string` = `'json'`

### name

> **name**: `string` = `'loadJson'`

used for deprecation purposes

### load()

> **load**\<`T`\>(`url`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

### test()

> **test**(`url`): `boolean`

#### Parameters

##### url

`string`

#### Returns

`boolean`
