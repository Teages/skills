# Interface: LoadOptions

Options for loading assets with the Loader

## Example

```ts
await Assets.load(['file1.png', 'file2.png'], {
  onProgress: (progress) => console.log(`Progress: ${progress * 100}%`),
  onError: (error, url) => console.error(`Error loading ${url}: ${error.message}`),
  strategy: 'retry', // 'throw' | 'skip' | 'retry'
  retryCount: 5, // Number of retry attempts if strategy is 'retry'
  retryDelay: 500, // Delay in ms between retries
});
```

## Properties

### onError()?

> `optional` **onError**: (`error`, `url`) => `void`

Callback for handling errors during loading

#### Parameters

##### error

[`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

The error that occurred

##### url

The URL of the asset that failed to load

`string` | [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>

#### Returns

`void`

#### Example

```ts
const options: LoadOptions = {
  onError: (error, url) => {
    console.error(`Failed to load ${url}: ${error.message}`);
  },
};
await Assets.load('missing-file.png', options);
```

***

### onProgress()?

> `optional` **onProgress**: (`progress`) => `void`

Callback for progress updates during loading

#### Parameters

##### progress

`number`

A number between 0 and 1 indicating the load progress

#### Returns

`void`

#### Example

```ts
const options: LoadOptions = {
  onProgress: (progress) => {
    console.log(`Loading progress: ${progress * 100}%`);
  },
};
await Assets.load('image.png', options);
```

***

### retryCount?

> `optional` **retryCount**: `number`

Number of retry attempts if strategy is 'retry'

#### Default

```ts
3
```

#### Example

```ts
const options: LoadOptions = {
  strategy: 'retry',
  retryCount: 5, // Retry up to 5 times
};
await Assets.load('unstable-asset.png', options);
```

***

### retryDelay?

> `optional` **retryDelay**: `number`

Delay in milliseconds between retry attempts

#### Default

```ts
250
```

#### Example

```ts
const options: LoadOptions = {
  strategy: 'retry',
  retryDelay: 1000, // Wait 1 second between retries
};
await Assets.load('sometimes-fails.png', options);
```

***

### strategy?

> `optional` **strategy**: `"skip"` \| `"throw"` \| `"retry"`

Strategy to handle load failures
- 'throw': Immediately throw an error and stop loading (default)
- 'skip': Skip the failed asset and continue loading others
- 'retry': Retry loading the asset a specified number of times

#### Default

```ts
'throw'
```

#### Example

```ts
const options: LoadOptions = {
  strategy: 'skip',
};
await Assets.load('sometimes-fails.png', options);
```
