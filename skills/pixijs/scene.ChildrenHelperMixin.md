# Interface: ChildrenHelperMixin\<C\>

**`Advanced`**

Mixin interface for containers that allows them to manage children.
It provides methods for adding, removing, and manipulating child containers.

## Type Parameters

### C

`C` = [`ContainerChild`](scene.ContainerChild.md)

## Methods

### addChild()

> **addChild**\<`U`\>(...`children`): `U`\[`0`\]

#### Type Parameters

##### U

`U` *extends* `C`[]

#### Parameters

##### children

...`U`

#### Returns

`U`\[`0`\]

***

### addChildAt()

> **addChildAt**\<`U`\>(`child`, `index`): `U`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown.
If the child is already in this container, it will be moved to the specified index.

#### Type Parameters

##### U

`U`

#### Parameters

##### child

`U`

The child to add

##### index

`number`

The index where the child will be placed

#### Returns

`U`

The child that was added

#### Example

```ts
// Add at specific index
container.addChildAt(sprite, 0); // Add to front

// Move existing child
const index = container.children.length - 1;
container.addChildAt(existingChild, index); // Move to back

// With error handling
try {
    container.addChildAt(sprite, 1000);
} catch (e) {
    console.warn('Index out of bounds');
}
```

#### Throws

If index is out of bounds

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding to the end
 - [Container#setChildIndex](scene.Container.html#setchildindex) For moving existing children

***

### getChildAt()

> **getChildAt**\<`U`\>(`index`): `U`

Returns the child at the specified index.

#### Type Parameters

##### U

`U`

#### Parameters

##### index

`number`

The index to get the child from

#### Returns

`U`

The child at the given index

#### Example

```ts
// Get first child
const first = container.getChildAt(0);

// Type-safe access
const sprite = container.getChildAt<Sprite>(1);

// With error handling
try {
    const child = container.getChildAt(10);
} catch (e) {
    console.warn('Index out of bounds');
}
```

#### Throws

If index is out of bounds

#### See

 - [Container#children](scene.Container.html#children) For direct array access
 - [Container#getChildByLabel](scene.Container.html#getchildbylabel) For name-based lookup

***

### getChildIndex()

> **getChildIndex**(`child`): `number`

Returns the index position of a child Container instance.

#### Parameters

##### child

`C`

The Container instance to identify

#### Returns

`number`

The index position of the child container

#### Example

```ts
// Basic index lookup
const index = container.getChildIndex(sprite);
console.log(`Sprite is at index ${index}`);

// With error handling
try {
    const index = container.getChildIndex(sprite);
} catch (e) {
    console.warn('Child not found in container');
}
```

#### Throws

If child is not in this container

#### See

 - [Container#setChildIndex](scene.Container.html#setchildindex) For changing index
 - [Container#children](scene.Container.html#children) For direct array access

***

### removeChild()

> **removeChild**\<`U`\>(...`children`): `U`\[`0`\]

#### Type Parameters

##### U

`U` *extends* `C`[]

#### Parameters

##### children

...`U`

#### Returns

`U`\[`0`\]

***

### removeChildAt()

> **removeChildAt**\<`U`\>(`index`): `U`

Removes a child from the specified index position.

#### Type Parameters

##### U

`U`

#### Parameters

##### index

`number`

The index to remove the child from

#### Returns

`U`

The child that was removed

#### Example

```ts
// Remove first child
const removed = container.removeChildAt(0);

// type safe access
const sprite = container.removeChildAt<Sprite>(1);

// With error handling
try {
    const child = container.removeChildAt(10);
} catch (e) {
    console.warn('Index out of bounds');
}
```

#### Throws

If index is out of bounds

#### See

 - [Container#removeChild](scene.Container.html#removechild) For removing specific children
 - [Container#removeChildren](scene.Container.html#removechildren) For removing multiple children

***

### removeChildren()

> **removeChildren**(`beginIndex?`, `endIndex?`): `C`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

##### beginIndex?

`number`

The beginning position

##### endIndex?

`number`

The ending position. Default is container size

#### Returns

`C`[]

List of removed children

#### Example

```ts
// Remove all children
container.removeChildren();

// Remove first 3 children
const removed = container.removeChildren(0, 3);
console.log('Removed:', removed.length); // 3

// Remove children from index 2 onwards
container.removeChildren(2);

// Remove specific range
const middle = container.removeChildren(1, 4);
```

#### Throws

If begin/end indexes are invalid

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding children
 - [Container#removeChild](scene.Container.html#removechild) For removing specific children

***

### removeFromParent()

> **removeFromParent**(): `void`

Remove the Container from its parent Container. If the Container has no parent, do nothing.

#### Returns

`void`

#### Example

```ts
// Basic removal
sprite.removeFromParent();

// With validation
if (sprite.parent) {
    sprite.removeFromParent();
}
```

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding to a new parent
 - [Container#removeChild](scene.Container.html#removechild) For parent removing children

***

### reparentChild()

> **reparentChild**\<`U`\>(...`child`): `U`\[`0`\]

Reparent a child or multiple children to this container while preserving their world transform.
This ensures that the visual position and rotation of the children remain the same even when changing parents.

#### Type Parameters

##### U

`U` *extends* `C`[]

#### Parameters

##### child

...`U`

The child or children to reparent

#### Returns

`U`\[`0`\]

The first child that was reparented

#### Example

```ts
// Basic reparenting
const sprite = new Sprite(texture);
oldContainer.addChild(sprite);
// Move to new parent, keeping visual position
newContainer.reparentChild(sprite);

// Reparent multiple children
const batch = [sprite1, sprite2, sprite3];
newContainer.reparentChild(...batch);
```

#### See

 - [Container#reparentChildAt](scene.Container.html#reparentchildat) For index-specific reparenting
 - [Container#addChild](scene.Container.html#addchild) For simple parenting

***

### reparentChildAt()

> **reparentChildAt**\<`U`\>(`child`, `index`): `U`

Reparent the child to this container at the specified index while preserving its world transform.
This ensures that the visual position and rotation of the child remain the same even when changing parents.

#### Type Parameters

##### U

`U`

#### Parameters

##### child

`U`

The child to reparent

##### index

`number`

The index to reparent the child to

#### Returns

`U`

The reparented child

#### Example

```ts
// Basic index-specific reparenting
const sprite = new Sprite(texture);
oldContainer.addChild(sprite);
// Move to new parent at index 0 (front)
newContainer.reparentChildAt(sprite, 0);
```

#### Throws

If index is out of bounds

#### See

 - [Container#reparentChild](scene.Container.html#reparentchild) For appending reparented children
 - [Container#addChildAt](scene.Container.html#addchildat) For simple indexed parenting

***

### replaceChild()

> **replaceChild**\<`U`, `T`\>(`oldChild`, `newChild`): `void`

Replace a child in the container with a new child. Copying the local transform from the old child to the new one.

#### Type Parameters

##### U

`U`

##### T

`T`

#### Parameters

##### oldChild

`U`

The child to replace.

##### newChild

`T`

The new child to add.

#### Returns

`void`

***

### setChildIndex()

> **setChildIndex**(`child`, `index`): `void`

Changes the position of an existing child in the container.

#### Parameters

##### child

`C`

The child Container instance to reposition

##### index

`number`

The resulting index number for the child

#### Returns

`void`

#### Example

```ts
// Basic index change
container.setChildIndex(sprite, 0); // Move to front
container.setChildIndex(sprite, container.children.length - 1); // Move to back

// With error handling
try {
    container.setChildIndex(sprite, 5);
} catch (e) {
    console.warn('Invalid index or child not found');
}
```

#### Throws

If index is out of bounds

#### Throws

If child is not in container

#### See

 - [Container#getChildIndex](scene.Container.html#getchildindex) For getting current index
 - [Container#swapChildren](scene.Container.html#swapchildren) For swapping positions

***

### swapChildren()

> **swapChildren**\<`U`\>(`child`, `child2`): `void`

Swaps the position of 2 Containers within this container.

#### Type Parameters

##### U

`U`

#### Parameters

##### child

`U`

First container to swap

##### child2

`U`

Second container to swap

#### Returns

`void`

#### Example

```ts
// Basic swap
container.swapChildren(sprite1, sprite2);

// With error handling
try {
    container.swapChildren(sprite1, sprite2);
} catch (e) {
    console.warn('One or both children not found in container');
}
```

#### Remarks

- Updates render groups
- No effect if same child
- Triggers container changes
- Common in z-ordering

#### Throws

If either child is not in container

#### See

 - [Container#setChildIndex](scene.Container.html#setchildindex) For direct index placement
 - [Container#getChildIndex](scene.Container.html#getchildindex) For getting current positions
