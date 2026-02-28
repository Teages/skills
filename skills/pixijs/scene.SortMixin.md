# Interface: SortMixin

**`Advanced`**

The SortMixin interface provides methods and properties for sorting children of a container
based on their `zIndex` values. It allows for automatic sorting of children when their `zIndex`
changes or when new children are added. The mixin includes properties to manage sorting state
and methods to sort children explicitly.

## Extends

- [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)\<`SortMixinConstructor`\>

## Properties

### sortableChildren

> **sortableChildren**: `boolean`

If set to true, the container will sort its children by `zIndex` value
when the next render is called, or manually if `sortChildren()` is called.

This actually changes the order of elements in the array of children,
so it will affect the rendering order.

> [!NOTE] Also be aware of that this may not work nicely with the `addChildAt()` function,
> as the `zIndex` sorting may cause the child to automatically sorted to another position.

#### Example

```ts
container.sortableChildren = true;
```

#### Default

```ts
false
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`sortableChildren`](scene.ViewContainerOptions.html#sortablechildren)

***

### sortChildren()

> **sortChildren**: () => `void`

Sorts children by zIndex value. Only sorts if container is marked as dirty.

#### Returns

`void`

#### Example

```ts
// Basic sorting
particles.zIndex = 2;     // Will mark as dirty
container.sortChildren();
```

#### See

 - [Container#sortableChildren](scene.DOMContainer.html#sortablechildren) For enabling automatic sorting
 - [Container#zIndex](scene.DOMContainer.html#zindex) For setting child order

***

### zIndex

> **zIndex**: `number`

The zIndex of the container.

Controls the rendering order of children within their parent container.

A higher value will mean it will be moved towards the front of the rendering order.

#### Example

```ts
// Add in any order
container.addChild(character, background, foreground);

// Adjust rendering order
background.zIndex = 0;
character.zIndex = 1;
foreground.zIndex = 2;
```

#### See

 - [Container#sortableChildren](scene.DOMContainer.html#sortablechildren) For enabling sorting
 - [Container#sortChildren](scene.Container.html#sortchildren) For manual sorting

#### Default

```ts
0
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`zIndex`](scene.ViewContainerOptions.html#zindex)
