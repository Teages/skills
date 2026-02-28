# Class: Loader

**`Advanced`**

The Loader is responsible for loading all assets, such as images, spritesheets, audio files, etc.
It does not do anything clever with URLs - it just loads stuff!
Behind the scenes all things are cached using promises. This means it's impossible to load an asset more than once.
Through the use of LoaderParsers, the loader can understand how to load any kind of file!

It is not intended that this class is created by developers - its part of the Asset class
This is the second major system of PixiJS' main Assets class

## Constructors

### Constructor

> **new Loader**(): `Loader`

#### Returns

`Loader`

## Properties

### loadOptions

> **loadOptions**: [`LoadOptions`](assets.LoadOptions.md)

Options for loading assets with the loader.
These options will be used as defaults for all load calls made with this loader instance.
They can be overridden by passing options directly to the load method.

#### Example

```ts
// Create a loader with custom default options
const loader = new Loader();
loader.loadOptions = {
  strategy: 'skip', // Default strategy to 'skip'
  retryCount: 5,   // Default retry count to 5
  retryDelay: 500, // Default retry delay to 500ms
};

// This load call will use the loader's default options
await loader.load('image1.png');

***

### parsers

> **parsers**: [`LoaderParser`](assets.LoaderParser.md)\<`any`, `any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>[]

All loader parsers registered

***

### promiseCache

> **promiseCache**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`PromiseAndParser`](assets.PromiseAndParser.md)\> = `{}`

Cache loading promises that ae currently active

***

### defaultOptions

> `static` **defaultOptions**: [`LoadOptions`](assets.LoadOptions.md)

Default options for loading assets

#### Example

```ts
// Change default load options globally
Loader.defaultOptions = {
  strategy: 'skip', // Change default strategy to 'skip'
  retryCount: 5,   // Change default retry count to 5
  retryDelay: 500, // Change default retry delay to 500ms
};
```

## Methods

### load()

#### Call Signature

> **load**\<`T`\>(`assetsToLoadIn`, `onProgress?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Loads one or more assets using the parsers added to the Loader.

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### assetsToLoadIn

urls that you want to load, or a single one!

`string` | [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>

###### onProgress?

For multiple asset loading only, an optional function that is called
when progress on asset loading is made. The function is passed a single parameter, `progress`,
which represents the percentage (0.0 - 1.0) of the assets loaded. Do not use this function
to detect when assets are complete and available, instead use the Promise returned by this function.

[`LoadOptions`](assets.LoadOptions.md) | [`ProgressCallback`](assets.ProgressCallback.md)

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

##### Example

```ts
// Single asset:
const asset = await Loader.load('cool.png');
console.log(asset);

// Multiple assets:
const assets = await Loader.load(['cool.png', 'cooler.png']);
console.log(assets);
```

#### Call Signature

> **load**\<`T`\>(`assetsToLoadIn`, `onProgress?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `T`\>\>

Loads one or more assets using the parsers added to the Loader.

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### assetsToLoadIn

urls that you want to load, or a single one!

`string`[] | [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>[]

###### onProgress?

For multiple asset loading only, an optional function that is called
when progress on asset loading is made. The function is passed a single parameter, `progress`,
which represents the percentage (0.0 - 1.0) of the assets loaded. Do not use this function
to detect when assets are complete and available, instead use the Promise returned by this function.

[`LoadOptions`](assets.LoadOptions.md) | [`ProgressCallback`](assets.ProgressCallback.md)

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `T`\>\>

##### Example

```ts
// Single asset:
const asset = await Loader.load('cool.png');
console.log(asset);

// Multiple assets:
const assets = await Loader.load(['cool.png', 'cooler.png']);
console.log(assets);
```

***

### reset()

> **reset**(): `void`

function used for testing

#### Returns

`void`

***

### unload()

> **unload**(`assetsToUnloadIn`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Unloads one or more assets. Any unloaded assets will be destroyed, freeing up memory for your app.
The parser that created the asset, will be the one that unloads it.

#### Parameters

##### assetsToUnloadIn

urls that you want to unload, or a single one!

`string` | `string`[] | [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\> | [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example

```ts
// Single asset:
const asset = await Loader.load('cool.png');

await Loader.unload('cool.png');

console.log(asset.destroyed); // true
```
