# ~~Class: RenderableGCSystem~~

**`Advanced`**

The RenderableGCSystem is responsible for cleaning up GPU resources that are no longer being used.

When rendering objects like sprites, text, etc - GPU resources are created and managed by the renderer.
If these objects are no longer needed but not properly destroyed (via sprite.destroy()), their GPU resources
would normally leak. This system prevents that by automatically cleaning up unused GPU resources.

Key features:
- Runs every 30 seconds by default to check for unused resources
- Cleans up resources not rendered for over 1 minute
- Works independently of rendering - will clean up even when not actively rendering
- When cleaned up resources are needed again, new GPU objects are quickly assigned from a pool
- Can be disabled with renderableGCActive:false for manual control

Best practices:
- Always call destroy() explicitly when done with renderables (e.g. sprite.destroy())
- This system is a safety net, not a replacement for proper cleanup
- Adjust frequency and timeouts via options if needed

## Example

```js
// Sprite created but reference lost without destroy
let sprite = new Sprite(texture);

// internally the renderer will assign a resource to the sprite
renderer.render(sprite);

sprite = null; // Reference lost but GPU resources still exist

// After 1 minute of not being rendered:
// - RenderableGC will clean up the sprite's GPU resources
// - JS garbage collector can then clean up the sprite itself
```

## Deprecated

since 8.15.0

## Implements

- [`System`](rendering.System.md)\<[`RenderableGCSystemOptions`](rendering.RenderableGCSystemOptions.md)\>

## Constructors

### Constructor

> **new RenderableGCSystem**(`renderer`): `RenderableGCSystem`

Creates a new RenderableGCSystem instance.

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

The renderer this garbage collection system works for

#### Returns

`RenderableGCSystem`

## Properties

### ~~maxUnusedTime~~

> **maxUnusedTime**: `number`

Maximum time in ms a resource can be unused before being garbage collected

***

### ~~defaultOptions~~

> `static` **defaultOptions**: [`RenderableGCSystemOptions`](rendering.RenderableGCSystemOptions.md)

Default configuration options for the garbage collection system.
These can be overridden when initializing the renderer.

#### Deprecated

since 8.15.0

## Accessors

### ~~enabled~~

#### Get Signature

> **get** **enabled**(): `boolean`

Gets whether the garbage collection system is currently enabled.

##### Returns

`boolean`

True if GC is enabled, false otherwise

#### Set Signature

> **set** **enabled**(`value`): `void`

Enables or disables the garbage collection system.
When enabled, schedules periodic cleanup of resources.
When disabled, cancels all scheduled cleanups.

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### ~~addManagedArray()~~

> **addManagedArray**\<`T`\>(`context`, `hash`): `void`

Adds an array to be managed by the garbage collector.

#### Type Parameters

##### T

`T`

#### Parameters

##### context

`T`

The object containing the array

##### hash

`string`

The property name of the array

#### Returns

`void`

***

### ~~addManagedHash()~~

> **addManagedHash**\<`T`\>(`context`, `hash`): `void`

Adds a hash table to be managed by the garbage collector.

#### Type Parameters

##### T

`T`

#### Parameters

##### context

`T`

The object containing the hash table

##### hash

`string`

The property name of the hash table

#### Returns

`void`

***

### ~~addRenderable()~~

> **addRenderable**(`_renderable`): `void`

Starts tracking a renderable for garbage collection.

#### Parameters

##### \_renderable

`Renderable`

The renderable to track

#### Returns

`void`

#### Deprecated

since 8.15.0

***

### ~~destroy()~~

> **destroy**(): `void`

Cleans up the garbage collection system. Disables GC and removes all tracked resources.

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### ~~init()~~

> **init**(`options`): `void`

Initializes the garbage collection system with the provided options.

#### Parameters

##### options

[`RenderableGCSystemOptions`](rendering.RenderableGCSystemOptions.md)

Configuration options for the renderer

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)

***

### ~~run()~~

> **run**(): `void`

Performs garbage collection by cleaning up unused renderables.
Removes renderables that haven't been used for longer than maxUnusedTime.

#### Returns

`void`
