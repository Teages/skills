# Class: BindGroup

**`Advanced`**

A bind group is a collection of resources that are bound together for use by a shader.
They are essentially a wrapper for the WebGPU BindGroup class. But with the added bonus
that WebGL can also work with them.

## See

https://gpuweb.github.io/gpuweb/#dictdef-gpubindgroupdescriptor

## Example

```ts
// Create a bind group with a single texture and sampler
const bindGroup = new BindGroup({
   uTexture: texture.source,
   uTexture: texture.style,
});

Bind groups resources must implement the {@link BindResource} interface.
The following resources are supported:
- {@link TextureSource}
- {@link TextureStyle}
- {@link Buffer}
- {@link BufferResource}
- {@link UniformGroup}

The keys in the bind group must correspond to the names of the resources in the GPU program.

This bind group class will also watch for changes in its resources ensuring that the changes
are reflected in the WebGPU BindGroup.
```

## Constructors

### Constructor

> **new BindGroup**(`resources?`): `BindGroup`

Create a new instance eof the Bind Group.

#### Parameters

##### resources?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`BindResource`](rendering.BindResource.md)\>

The resources that are bound together for use by a shader.

#### Returns

`BindGroup`

## Properties

### resources

> **resources**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`BindResource`](rendering.BindResource.md)\>

The resources that are bound together for use by a shader.

## Methods

### destroy()

> **destroy**(): `void`

Destroys this bind group and removes all listeners.

#### Returns

`void`

***

### getResource()

> **getResource**(`index`): [`BindResource`](rendering.BindResource.md)

Returns the resource at the current specified index.

#### Parameters

##### index

`number`

The index of the resource to get.

#### Returns

[`BindResource`](rendering.BindResource.md)

- The resource at the specified index.

***

### setResource()

> **setResource**(`resource`, `index`): `void`

Set a resource at a given index. this function will
ensure that listeners will be removed from the current resource
and added to the new resource.

#### Parameters

##### resource

[`BindResource`](rendering.BindResource.md)

The resource to set.

##### index

`number`

The index to set the resource at.

#### Returns

`void`
