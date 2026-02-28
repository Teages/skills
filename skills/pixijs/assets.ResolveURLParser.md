# Interface: ResolveURLParser

**`Advanced`**

Format for url parser, will test a string and if it pass will then parse it, turning it into an ResolvedAsset

## Properties

### config?

> `optional` **config**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

A config to adjust the parser

***

### extension?

> `optional` **extension**: [`ExtensionMetadata`](extensions.ExtensionMetadata.md)

***

### parse()

> **parse**: (`value`) => [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\> & `object`

the function that will convert the url into an object

#### Parameters

##### value

`string`

#### Returns

[`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\> & `object`

***

### test()

> **test**: (`url`) => `boolean`

the test to perform on the url to determine if it should be parsed

#### Parameters

##### url

`string`

#### Returns

`boolean`
