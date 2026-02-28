# Class: RenderGroup

**`Advanced`**

A RenderGroup is a class that is responsible for I generating a set of instructions that are used to render the
root container and its children. It also watches for any changes in that container or its children,
these changes are analysed and either the instruction set is rebuild or the instructions data is updated.

## Implements

- [`Instruction`](rendering.Instruction.md)

## Constructors

### Constructor

> **new RenderGroup**(): `RenderGroup`

#### Returns

`RenderGroup`

## Properties

### canBundle

> **canBundle**: `boolean` = `false`

true if this instruction can be compiled into a WebGPU bundle

#### Implementation of

[`Instruction`](rendering.Instruction.md).[`canBundle`](rendering.Instruction.html#canbundle)

***

### childrenRenderablesToUpdate

> `readonly` **childrenRenderablesToUpdate**: `object`

#### index

> **index**: `number`

#### list

> **list**: [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

***

### childrenToUpdate

> `readonly` **childrenToUpdate**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`number`, \{ `index`: `number`; `list`: [`Container`](scene.Container.md)[]; \}\>

***

### gcTick

> **gcTick**: `number` = `0`

***

### instructionSet

> **instructionSet**: [`InstructionSet`](rendering.InstructionSet.md)

***

### isCachedAsTexture

> **isCachedAsTexture**: `boolean` = `false`

Indicates if the container should be cached as a texture.

#### Default

```ts
false
```

***

### renderGroupChildren

> **renderGroupChildren**: `RenderGroup`[] = `[]`

***

### renderGroupParent

> **renderGroupParent**: `RenderGroup` = `null`

***

### renderPipeId

> **renderPipeId**: `string` = `'renderGroup'`

a the id of the render pipe that can run this instruction

#### Implementation of

[`Instruction`](rendering.Instruction.md).[`renderPipeId`](rendering.Instruction.html#renderpipeid)

***

### root

> **root**: [`Container`](scene.Container.md) = `null`

***

### structureDidChange

> **structureDidChange**: `boolean` = `true`

***

### texture?

> `optional` **texture**: [`Texture`](rendering.Texture.md)

The texture used for caching the container. this is only set if isCachedAsTexture is true.
It can only be accessed after a render pass.

***

### textureNeedsUpdate

> **textureNeedsUpdate**: `boolean` = `true`

Indicates if the cached texture needs to be updated.

#### Default

```ts
true
```

***

### textureOptions

> **textureOptions**: [`CacheAsTextureOptions`](rendering.CacheAsTextureOptions.md)

The options for caching the container as a texture.

***

### updateTick

> **updateTick**: `number` = `0`

***

### worldAlpha

> **worldAlpha**: `number` = `1`

***

### worldColor

> **worldColor**: `number` = `0xffffff`

***

### worldColorAlpha

> **worldColorAlpha**: `number` = `0xffffffff`

***

### worldTransform

> **worldTransform**: [`Matrix`](maths.Matrix.md)

## Accessors

### cacheToLocalTransform

#### Get Signature

> **get** **cacheToLocalTransform**(): [`Matrix`](maths.Matrix.md)

Returns a matrix that transforms coordinates to the correct coordinate space of the texture being rendered to.
This is the texture offset inverse transform of the closest parent RenderGroup that is cached as a texture.

##### Returns

[`Matrix`](maths.Matrix.md)

The transform matrix for the cached texture coordinate space,
or null if no parent is cached as texture.

***

### inverseParentTextureTransform

#### Get Signature

> **get** **inverseParentTextureTransform**(): [`Matrix`](maths.Matrix.md)

Returns the inverse of the parent texture transform matrix.
This is used to properly transform coordinates when rendering into cached textures.

##### Returns

[`Matrix`](maths.Matrix.md)

The inverse of the parent texture transform matrix.

***

### inverseWorldTransform

#### Get Signature

> **get** **inverseWorldTransform**(): [`Matrix`](maths.Matrix.md)

Returns the inverse of the world transform matrix.

##### Returns

[`Matrix`](maths.Matrix.md)

The inverse of the world transform matrix.

***

### isRenderable

#### Get Signature

> **get** **isRenderable**(): `boolean`

##### Returns

`boolean`

***

### localTransform

#### Get Signature

> **get** **localTransform**(): [`Matrix`](maths.Matrix.md)

##### Returns

[`Matrix`](maths.Matrix.md)

***

### textureOffsetInverseTransform

#### Get Signature

> **get** **textureOffsetInverseTransform**(): [`Matrix`](maths.Matrix.md)

Returns the inverse of the texture offset transform matrix.

##### Returns

[`Matrix`](maths.Matrix.md)

The inverse of the texture offset transform matrix.

## Methods

### addChild()

> **addChild**(`child`): `void`

#### Parameters

##### child

[`Container`](scene.Container.md)

#### Returns

`void`

***

### addOnRender()

> **addOnRender**(`container`): `void`

adding a container to the onRender list will make sure the user function
passed in to the user defined 'onRender` callBack

#### Parameters

##### container

[`Container`](scene.Container.md)

the container to add to the onRender list

#### Returns

`void`

***

### addRenderGroupChild()

> **addRenderGroupChild**(`renderGroupChild`): `void`

#### Parameters

##### renderGroupChild

`RenderGroup`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### disableCacheAsTexture()

> **disableCacheAsTexture**(): `void`

#### Returns

`void`

***

### enableCacheAsTexture()

> **enableCacheAsTexture**(`options`): `void`

#### Parameters

##### options

[`CacheAsTextureOptions`](rendering.CacheAsTextureOptions.md) = `{}`

#### Returns

`void`

***

### getChildren()

> **getChildren**(`out`): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

#### Parameters

##### out

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[] = `[]`

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

***

### init()

> **init**(`root`): `void`

#### Parameters

##### root

[`Container`](scene.Container.md)

#### Returns

`void`

***

### invalidateMatrices()

> **invalidateMatrices**(): `void`

#### Returns

`void`

***

### onChildUpdate()

> **onChildUpdate**(`child`): `void`

#### Parameters

##### child

[`Container`](scene.Container.md)

#### Returns

`void`

***

### onChildViewUpdate()

> **onChildViewUpdate**(`child`): `void`

#### Parameters

##### child

[`Container`](scene.Container.md)

#### Returns

`void`

***

### removeChild()

> **removeChild**(`child`): `void`

#### Parameters

##### child

[`Container`](scene.Container.md)

#### Returns

`void`

***

### removeChildren()

> **removeChildren**(`children`): `void`

#### Parameters

##### children

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

#### Returns

`void`

***

### removeOnRender()

> **removeOnRender**(`container`): `void`

#### Parameters

##### container

[`Container`](scene.Container.md)

#### Returns

`void`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### runOnRender()

> **runOnRender**(`renderer`): `void`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

#### Returns

`void`

***

### updateCacheTexture()

> **updateCacheTexture**(): `void`

#### Returns

`void`

***

### updateRenderable()

> **updateRenderable**(`renderable`): `void`

#### Parameters

##### renderable

[`ViewContainer`](scene.ViewContainer.md)

#### Returns

`void`
