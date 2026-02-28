# Interface: CacheAsTextureMixin

**`Advanced`**

The CacheAsTextureMixin interface provides methods and properties for caching a container as a texture.
This can improve rendering performance for complex static containers by allowing them to be rendered as a single texture.
It includes methods to enable or disable caching, update the cached texture, and check
1if the container is currently cached.

## Extends

- [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)\<`CacheAsTextureMixinConstructor`\>

## Properties

### ~~cacheAsBitmap~~

> **cacheAsBitmap**: `boolean`

Legacy property for backwards compatibility with PixiJS v7 and below.
Use `cacheAsTexture` instead.

#### Deprecated

since 8.0.0

***

### cacheAsTexture()

> **cacheAsTexture**: (`val`) => `void`

Caches this container as a texture. This allows the container to be rendered as a single texture,
which can improve performance for complex static containers.

#### Parameters

##### val

If true, enables caching with default options.
            If false, disables caching.
            Can also pass options object to configure caching behavior.

`boolean` | [`CacheAsTextureOptions`](rendering.CacheAsTextureOptions.md)

#### Returns

`void`

#### Example

```ts
// Basic caching
container.cacheAsTexture(true);

// With custom options
container.cacheAsTexture({
    resolution: 2,
    antialias: true,
});

// Disable caching
container.cacheAsTexture(false);

// Cache a complex UI
const ui = new Container();
// Add multiple children...
ui.cacheAsTexture(true);
ui.updateCacheTexture(); // Update if contents change
```

#### See

 - [Container#updateCacheTexture](scene.Container.html#updatecachetexture) For updating cached content
 - [Container#isCachedAsTexture](#iscachedastexture) For checking cache state

#### Overrides

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`cacheAsTexture`](scene.ViewContainerOptions.html#cacheastexture)

***

### isCachedAsTexture

> `readonly` **isCachedAsTexture**: `boolean`

Whether this container is currently cached as a texture.

#### Example

```ts
// Check cache state
if (container.isCachedAsTexture) {
    console.log('Container is cached');
}
```

#### See

 - [Container#cacheAsTexture](scene.Container.html#cacheastexture) For enabling caching
 - [Container#updateCacheTexture](scene.Container.html#updatecachetexture) For updating cache

***

### updateCacheTexture()

> **updateCacheTexture**: () => `void`

Updates the cached texture of this container. This will flag the container's cached texture
to be redrawn on the next render.

#### Returns

`void`

#### Example

```ts
// Basic update after changes
container.updateCacheTexture();
```
