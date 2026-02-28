# Interface: FindMixin

**`Advanced`**

The FindMixin interface provides methods for finding children within a container by their label.
It allows for searching for a single child or multiple children with a specific label,
either directly or recursively through the container's hierarchy.

## Extends

- [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)\<`FindMixinConstructor`\>

## Properties

### label

> **label**: `string`

The instance label of the object.

#### Default

```ts
null
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`label`](scene.ViewContainerOptions.html#label)

***

### ~~name~~

> **name**: `string`

The instance name of the object.

#### Deprecated

since 8.0.0

#### See

Container#label

#### Default

```ts
null
```

## Methods

### getChildByLabel()

> **getChildByLabel**(`label`, `deep?`): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>

Returns the first child in the container with the specified label.
Recursive searches are done in a pre-order traversal.

#### Parameters

##### label

Instance label to search for

`string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

##### deep?

`boolean`

Whether to search recursively through children

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>

The first child with the specified label, or null if none found

#### Example

```ts
// Basic label search
const child = container.getChildByLabel('player');

// Search with regular expression
const enemy = container.getChildByLabel(/enemy-\d+/);

// Deep search through children
const deepChild = container.getChildByLabel('powerup', true);
```

#### See

 - [Container#getChildrenByLabel](scene.Container.html#getchildrenbylabel) For finding all matches
 - [Container#label](scene.DOMContainer.html#label) For setting labels

***

### ~~getChildByName()~~

> **getChildByName**(`label`, `deep?`): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>

#### Parameters

##### label

Instance name.

`string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

##### deep?

`boolean`

Whether to search recursively

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>

The child with the specified name.

#### Deprecated

since 8.0.0

#### See

Container#getChildByLabel

***

### getChildrenByLabel()

> **getChildrenByLabel**(`label`, `deep?`, `out?`): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

Returns all children in the container with the specified label.
Recursive searches are done in a pre-order traversal.

#### Parameters

##### label

Instance label to search for

`string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

##### deep?

`boolean`

Whether to search recursively through children

##### out?

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

Optional array to store matching children in

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

An array of children with the specified label

#### Example

```ts
// Basic label search
const enemies = container.getChildrenByLabel('enemy');
// Search with regular expression
const powerups = container.getChildrenByLabel(/powerup-\d+/);
// Deep search with collection
const buttons = [];
container.getChildrenByLabel('button', true, buttons);
```

#### See

 - [Container#getChildByLabel](scene.Container.html#getchildbylabel) For finding first match
 - [Container#label](scene.DOMContainer.html#label) For setting labels
