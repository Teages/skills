# Class: Cache

**`Advanced`**

A global cache for all assets in your PixiJS application. The cache system provides fast
access to loaded assets and prevents duplicate loading.

Key Features:
- Automatic caching of loaded assets
- Support for custom cache parsers
- Automatic parsing of complex assets (e.g., spritesheets)
- Memory management utilities
> [!IMPORTANT] You typically do not need to use this class directly.
> Use the main [Assets](assets.Assets.md) class for high-level asset management.
> `Assets.get(key)` will automatically use the cache.

## Example

```ts
import { Cache } from 'pixi.js';

// Store an asset in the cache
Cache.set('myTexture', texture);

// Retrieve an asset
const texture = Cache.get('myTexture');

// Check if an asset exists
if (Cache.has('myTexture')) {
    // Use the cached asset
    const sprite = new Sprite(Cache.get('myTexture'));
}

// Remove an asset from cache
Cache.remove('myTexture');

// Clear all cached assets
Cache.reset();
```

## Remarks

The Cache is a core component of PixiJS' asset management system:
- Used internally by the [Assets](assets.Assets.md) class
- Supports automatic parsing via [CacheParser](assets.CacheParser.md)
- Handles complex asset types like spritesheets
- Manages memory through asset removal

> [!IMPORTANT]
> This is a singleton class and should not be instantiated directly.
> Use the exported `Cache` instance instead.

## See

 - [Assets](assets.Assets.md) For high-level asset management
 - [CacheParser](assets.CacheParser.md) For custom cache parsing

## Accessors

### parsers

#### Get Signature

> **get** `static` **parsers**(): [`CacheParser`](assets.CacheParser.md)\<`any`\>[]

**`Advanced`**

All loader parsers registered

##### Returns

[`CacheParser`](assets.CacheParser.md)\<`any`\>[]

## Methods

### get()

> `static` **get**\<`T`\>(`key`): `T`

Fetch entry by key

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### key

`any`

The key of the entry to get

#### Returns

`T`

***

### has()

> `static` **has**(`key`): `boolean`

Check if the key exists

#### Parameters

##### key

`any`

The key to check

#### Returns

`boolean`

***

### remove()

> `static` **remove**(`key`): `void`

Remove entry by key

This function will also remove any associated alias from the cache also.

#### Parameters

##### key

`any`

The key of the entry to remove

#### Returns

`void`

***

### reset()

> `static` **reset**(): `void`

Clear all entries.

#### Returns

`void`

***

### set()

> `static` **set**\<`T`\>(`key`, `value`): `void`

Set a value by key or keys name

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### key

`any`

The key or keys to set

##### value

`T`

The value to store in the cache or from which cacheable assets will be derived.

#### Returns

`void`
