# Class: Resolver

**`Advanced`**

A class that is responsible for resolving mapping asset URLs to keys.
At its most basic it can be used for Aliases:

```js
resolver.add('foo', 'bar');
resolver.resolveUrl('foo') // => 'bar'
```

It can also be used to resolve the most appropriate asset for a given URL:

```js
resolver.prefer({
    params: {
        format: 'webp',
        resolution: 2,
    }
});

resolver.add('foo', ['bar@2x.webp', 'bar@2x.png', 'bar.webp', 'bar.png']);

resolver.resolveUrl('foo') // => 'bar@2x.webp'
```
Other features include:
- Ability to process a manifest file to get the correct understanding of how to resolve all assets
- Ability to add custom parsers for specific file types
- Ability to add custom prefer rules

This class only cares about the URL, not the loading of the asset itself.

It is not intended that this class is created by developers - its part of the Asset class
This is the third major system of PixiJS' main Assets class

## Constructors

### Constructor

> **new Resolver**(): `Resolver`

#### Returns

`Resolver`

## Properties

### RETINA\_PREFIX

> `static` **RETINA\_PREFIX**: [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

The prefix that denotes a URL is for a retina asset.

#### Default

```ts
/@([0-9\.]+)x/
```

#### Example

```ts
`@2x`
```

## Accessors

### basePath

#### Get Signature

> **get** **basePath**(): `string`

##### Returns

`string`

#### Set Signature

> **set** **basePath**(`basePath`): `void`

Set the base path to prepend to all urls when resolving

##### Example

```ts
resolver.basePath = 'https://home.com/';
resolver.add('foo', 'bar.ong');
resolver.resolveUrl('foo', 'bar.png'); // => 'https://home.com/bar.png'
```

##### Parameters

###### basePath

`string`

the base path to use

##### Returns

`void`

***

### parsers

#### Get Signature

> **get** **parsers**(): [`ResolveURLParser`](assets.ResolveURLParser.md)[]

All the active URL parsers that help the parser to extract information and create
an asset object-based on parsing the URL itself.

Can be added using the extensions API

##### Example

```ts
resolver.add('foo', [
    {
        resolution: 2,
        format: 'png',
        src: 'image@2x.png',
    },
    {
        resolution:1,
        format:'png',
        src: 'image.png',
    },
]);

// With a url parser the information such as resolution and file format could extracted from the url itself:
extensions.add({
    extension: ExtensionType.ResolveParser,
    test: loadTextures.test, // test if url ends in an image
    parse: (value: string) =>
    ({
        resolution: parseFloat(Resolver.RETINA_PREFIX.exec(value)?.[1] ?? '1'),
        format: value.split('.').pop(),
        src: value,
    }),
});

// Now resolution and format can be extracted from the url
resolver.add('foo', [
    'image@2x.png',
    'image.png',
]);
```

##### Returns

[`ResolveURLParser`](assets.ResolveURLParser.md)[]

***

### rootPath

#### Get Signature

> **get** **rootPath**(): `string`

##### Returns

`string`

#### Set Signature

> **set** **rootPath**(`rootPath`): `void`

Set the root path for root-relative URLs. By default the `basePath`'s root is used. If no `basePath` is set, then the
default value for browsers is `window.location.origin`

##### Example

```ts
// Application hosted on https://home.com/some-path/index.html
resolver.basePath = 'https://home.com/some-path/';
resolver.rootPath = 'https://home.com/';
resolver.add('foo', '/bar.png');
resolver.resolveUrl('foo', '/bar.png'); // => 'https://home.com/bar.png'
```

##### Parameters

###### rootPath

`string`

the root path to use

##### Returns

`void`

## Methods

### add()

> **add**(`aliases`): `void`

Tells the resolver what keys are associated with witch asset.
The most important thing the resolver does

#### Parameters

##### aliases

[`ArrayOr`](utils.ArrayOr.md)\<[`UnresolvedAsset`](assets.UnresolvedAsset.md)\>

the UnresolvedAsset or array of UnresolvedAssets to add to the resolver

#### Returns

`void`

#### Example

```ts
// Single key, single asset:
resolver.add({alias: 'foo', src: 'bar.png');
resolver.resolveUrl('foo') // => 'bar.png'

// Multiple keys, single asset:
resolver.add({alias: ['foo', 'boo'], src: 'bar.png'});
resolver.resolveUrl('foo') // => 'bar.png'
resolver.resolveUrl('boo') // => 'bar.png'

// Multiple keys, multiple assets:
resolver.add({alias: ['foo', 'boo'], src: ['bar.png', 'bar.webp']});
resolver.resolveUrl('foo') // => 'bar.png'

// Add custom data attached to the resolver
Resolver.add({
    alias: 'bunnyBooBooSmooth',
    src: 'bunny{png,webp}',
    data: { scaleMode:SCALE_MODES.NEAREST }, // Base texture options
});

resolver.resolve('bunnyBooBooSmooth') // => { src: 'bunny.png', data: { scaleMode: SCALE_MODES.NEAREST } }
```

***

### addBundle()

> **addBundle**(`bundleId`, `assets`): `void`

This adds a bundle of assets in one go so that you can resolve them as a group.
For example you could add a bundle for each screen in you pixi app

#### Parameters

##### bundleId

`string`

The id of the bundle to add

##### assets

A record of the asset or assets that will be chosen from when loading via the specified key

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ArrayOr`](utils.ArrayOr.md)\<`string`\> \| [`UnresolvedAsset`](assets.UnresolvedAsset.md)\<`any`\>\> | [`UnresolvedAsset`](assets.UnresolvedAsset.md)\<`any`\>[]

#### Returns

`void`

#### Example

```ts
resolver.addBundle('animals', [
 { alias: 'bunny', src: 'bunny.png' },
 { alias: 'chicken', src: 'chicken.png' },
 { alias: 'thumper', src: 'thumper.png' },
]);
// or
resolver.addBundle('animals', {
    bunny: 'bunny.png',
    chicken: 'chicken.png',
    thumper: 'thumper.png',
});

const resolvedAssets = await resolver.resolveBundle('animals');
```

***

### addManifest()

> **addManifest**(`manifest`): `void`

Add a manifest to the asset resolver. This is a nice way to add all the asset information in one go.
generally a manifest would be built using a tool.

#### Parameters

##### manifest

[`AssetsManifest`](assets.AssetsManifest.md)

the manifest to add to the resolver

#### Returns

`void`

***

### getAlias()

> **getAlias**(`asset`): `string`[]

Returns the aliases for a given asset

#### Parameters

##### asset

[`UnresolvedAsset`](assets.UnresolvedAsset.md)

the asset to get the aliases for

#### Returns

`string`[]

***

### hasBundle()

> **hasBundle**(`key`): `boolean`

Checks if a bundle with the given key exists in the resolver

#### Parameters

##### key

`string`

The key of the bundle

#### Returns

`boolean`

***

### hasKey()

> **hasKey**(`key`): `boolean`

Checks if an asset with a given key exists in the resolver

#### Parameters

##### key

`string`

The key of the asset

#### Returns

`boolean`

***

### prefer()

> **prefer**(...`preferOrders`): `void`

Let the resolver know which assets you prefer to use when resolving assets.
Multiple prefer user defined rules can be added.

#### Parameters

##### preferOrders

...[`PreferOrder`](assets.PreferOrder.md)[]

the prefer options

#### Returns

`void`

#### Example

```ts
resolver.prefer({
    // first look for something with the correct format, and then then correct resolution
    priority: ['format', 'resolution'],
    params:{
        format:'webp', // prefer webp images
        resolution: 2, // prefer a resolution of 2
    }
})
resolver.add('foo', ['bar@2x.webp', 'bar@2x.png', 'bar.webp', 'bar.png']);
resolver.resolveUrl('foo') // => 'bar@2x.webp'
```

***

### removeAlias()

> **removeAlias**(`alias`, `asset?`): `void`

Removes the specified alias for an asset

This does not remove or destroy the asset!

#### Parameters

##### alias

`string`

the alias to remove

##### asset?

[`ResolvedAsset`](assets.ResolvedAsset.md)

only remove the alias if it is assigned to the asset

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Used for testing, this resets the resolver to its initial state

#### Returns

`void`

***

### resolve()

#### Call Signature

> **resolve**(`keys`): [`ResolvedAsset`](assets.ResolvedAsset.md)

Resolves each key in the list to an asset object.
Another key function of the resolver! After adding all the various key/asset pairs. this will run the logic
of finding which asset to return based on any preferences set using the `prefer` function
by default the same key passed in will be returned if nothing is matched by the resolver.

##### Parameters

###### keys

`string`

key or keys to resolve

##### Returns

[`ResolvedAsset`](assets.ResolvedAsset.md)

- the resolve asset or a hash of resolve assets for each key specified

##### Example

```ts
resolver.add('boo', 'bunny.png');

resolver.resolve('boo') // => { src: 'bunny.png' }

// Will return the same string as no key was added for this value..
resolver.resolve('another-thing.png') // => { src: 'another-thing.png' }
```

#### Call Signature

> **resolve**(`keys`): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ResolvedAsset`](assets.ResolvedAsset.md)\>

Resolves each key in the list to an asset object.
Another key function of the resolver! After adding all the various key/asset pairs. this will run the logic
of finding which asset to return based on any preferences set using the `prefer` function
by default the same key passed in will be returned if nothing is matched by the resolver.

##### Parameters

###### keys

`string`[]

key or keys to resolve

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ResolvedAsset`](assets.ResolvedAsset.md)\>

- the resolve asset or a hash of resolve assets for each key specified

##### Example

```ts
resolver.add('boo', 'bunny.png');

resolver.resolve('boo') // => { src: 'bunny.png' }

// Will return the same string as no key was added for this value..
resolver.resolve('another-thing.png') // => { src: 'another-thing.png' }
```

***

### resolveBundle()

> **resolveBundle**(`bundleIds`): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>\> \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>\>\>

If the resolver has had a manifest set via setManifest, this will return the assets urls for
a given bundleId or bundleIds.

#### Parameters

##### bundleIds

[`ArrayOr`](utils.ArrayOr.md)\<`string`\>

The bundle ids to resolve

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>\> \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ResolvedAsset`](assets.ResolvedAsset.md)\<`any`\>\>\>

All the bundles assets or a hash of assets for each bundle specified

#### Example

```ts
// Manifest Example
const manifest = {
    bundles: [
        {
            name: 'load-screen',
            assets: [
                {
                    alias: 'background',
                    src: 'sunset.png',
                },
                {
                    alias: 'bar',
                    src: 'load-bar.{png,webp}',
                },
            ],
        },
        {
            name: 'game-screen',
            assets: [
                {
                    alias: 'character',
                    src: 'robot.png',
                },
                {
                    alias: 'enemy',
                    src: 'bad-guy.png',
                },
            ],
        },
    ]
};

resolver.setManifest(manifest);
const resolved = resolver.resolveBundle('load-screen');
```

***

### resolveUrl()

> **resolveUrl**(`key`): `string` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Does exactly what resolve does, but returns just the URL rather than the whole asset object

#### Parameters

##### key

[`ArrayOr`](utils.ArrayOr.md)\<`string`\>

The key or keys to resolve

#### Returns

`string` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

- The URLs associated with the key(s)

***

### setBundleIdentifier()

> **setBundleIdentifier**(`bundleIdentifier`): `void`

Override how the resolver deals with generating bundle ids.
must be called before any bundles are added

#### Parameters

##### bundleIdentifier

[`BundleIdentifierOptions`](assets.BundleIdentifierOptions.md)

the bundle identifier options

#### Returns

`void`

***

### setDefaultSearchParams()

> **setDefaultSearchParams**(`searchParams`): `void`

Sets the default URL search parameters for the URL resolver. The urls can be specified as a string or an object.

#### Parameters

##### searchParams

the default url parameters to append when resolving urls

`string` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

#### Returns

`void`
