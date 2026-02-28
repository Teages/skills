# Class: GCSystem

**`Advanced`**

A unified garbage collection system for managing GPU resources.
Resources register themselves with a cleanup callback and are automatically
cleaned up when they haven't been used for a specified amount of time.

## Example

```ts
// Register a resource for GC
gc.addResource(myResource, () => {
    // cleanup logic here
    myResource.unload();
});

// Touch the resource when used (resets idle timer)
gc.touch(myResource);

// Remove from GC tracking (e.g., on manual destroy)
gc.removeResource(myResource);
```

## Implements

- [`System`](rendering.System.md)\<[`GCSystemOptions`](rendering.GCSystemOptions.md)\>

## Constructors

### Constructor

> **new GCSystem**(`renderer`): `GCSystem`

Creates a new GCSystem instance.

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

The renderer this garbage collection system works for

#### Returns

`GCSystem`

## Properties

### maxUnusedTime

> **maxUnusedTime**: `number`

Maximum time in ms a resource can be unused before being garbage collected

***

### now

> **now**: `number`

Current timestamp used for age calculations

***

### defaultOptions

> `static` **defaultOptions**: [`GCSystemOptions`](rendering.GCSystemOptions.md)

Default options for the GCSystem

## Accessors

### enabled

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

### addCollection()

> **addCollection**(`context`, `collection`, `type`): `void`

Registers a collection for garbage collection tracking.

#### Parameters

##### context

`any`

The object containing the collection

##### collection

`string`

The property name on context that holds the collection

##### type

The type of collection to track ('hash' or 'array')

`"array"` | `"hash"`

#### Returns

`void`

***

### addResource()

> **addResource**(`resource`, `type`): `void`

Registers a resource for garbage collection tracking.

#### Parameters

##### resource

`GCableEventEmitter`

The resource to track

##### type

The type of resource to track

`"resource"` | `"renderable"`

#### Returns

`void`

***

### addResourceHash()

> **addResourceHash**(`context`, `hash`, `type`, `priority`): `void`

Registers a hash-based resource collection for garbage collection tracking.
Resources in the hash will be automatically tracked and cleaned up when unused.

#### Parameters

##### context

`any`

The object containing the hash property

##### hash

`string`

The property name on context that holds the resource hash

##### type

The type of resources in the hash ('resource' or 'renderable')

`"resource"` | `"renderable"`

##### priority

`number` = `0`

Processing priority (lower values are processed first)

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Cleans up the garbage collection system. Disables GC and removes all tracked resources.

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### init()

> **init**(`options`): `void`

Initializes the garbage collection system with the provided options.

#### Parameters

##### options

[`GCSystemOptions`](rendering.GCSystemOptions.md)

Configuration options

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)

***

### removeResource()

> **removeResource**(`resource`): `void`

Removes a resource from garbage collection tracking.
Call this when manually destroying a resource.

#### Parameters

##### resource

[`GCable`](rendering.GCable.md)

The resource to stop tracking

#### Returns

`void`

***

### run()

> **run**(): `void`

Performs garbage collection by cleaning up unused resources.
Removes resources that haven't been used for longer than maxUnusedTime.

#### Returns

`void`
