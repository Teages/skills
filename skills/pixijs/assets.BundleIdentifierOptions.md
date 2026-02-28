# Interface: BundleIdentifierOptions

**`Advanced`**

Options for how the resolver deals with generating bundle ids

## Properties

### connector?

> `optional` **connector**: `string`

The character that is used to connect the bundleId and the assetId when generating a bundle asset id key

***

### createBundleAssetId()?

> `optional` **createBundleAssetId**: (`bundleId`, `assetId`) => `string`

A function that generates a bundle asset id key from a bundleId and an assetId

#### Parameters

##### bundleId

`string`

the bundleId

##### assetId

`string`

the assetId

#### Returns

`string`

the bundle asset id key

***

### extractAssetIdFromBundle()?

> `optional` **extractAssetIdFromBundle**: (`bundleId`, `assetBundleId`) => `string`

A function that generates an assetId from a bundle asset id key. This is the reverse of generateBundleAssetId

#### Parameters

##### bundleId

`string`

the bundleId

##### assetBundleId

`string`

the bundle asset id key

#### Returns

`string`

the assetId
