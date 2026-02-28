# Variable: loadTxt

> `const` **loadTxt**: `object`

**`Advanced`**

A simple loader plugin for loading text data

## Type Declaration

### extension

> **extension**: `object`

#### extension.name

> **name**: `string` = `'loadTxt'`

#### extension.priority

> **priority**: [`LoaderParserPriority`](assets.LoaderParserPriority.md) = `LoaderParserPriority.Low`

#### extension.type

> **type**: [`LoadParser`](extensions.ExtensionType.html#loadparser) = `ExtensionType.LoadParser`

### id

> **id**: `string` = `'text'`

### name

> **name**: `string` = `'loadTxt'`

used for deprecation purposes

### load()

> **load**\<`T`\>(`url`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

### test()

> **test**(`url`): `boolean`

#### Parameters

##### url

`string`

#### Returns

`boolean`
