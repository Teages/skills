# Interface: CacheAsTextureOptions

**`Advanced`**

Options for caching a container as a texture.

## Properties

### antialias?

> `optional` **antialias**: `boolean`

If true, the texture will be antialiased. This smooths out the edges of the texture.

#### Default

```ts
false
```

***

### resolution?

> `optional` **resolution**: `number`

The resolution of the texture. A higher resolution means a sharper texture but uses more memory.
By default the resolution is 1 which is the same as the rendererers resolution.

***

### scaleMode?

> `optional` **scaleMode**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

Scale Mode to use for the cached texture

#### Default

```ts
'linear'
```

#### Example

```ts
const container = new Container();
container.cacheAsTexture({ scaleMode: 'nearest' });
```

#### See

[SCALE\_MODE](rendering.SCALE_MODE.md)
