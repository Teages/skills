# Interface: ToLocalGlobalMixin

**`Advanced`**

Interface for a mixin that provides methods to convert between local and global coordinates.
This mixin allows you to get the global position of a container,
convert a point from local to global coordinates,
and convert a point from global to local coordinates.

It includes methods to optimize performance by using cached matrices when available.

## Methods

### getGlobalPosition()

> **getGlobalPosition**(`point?`, `skipUpdate?`): [`Point`](maths.Point.md)

Returns the global position of the container, taking into account the container hierarchy.

#### Parameters

##### point?

[`Point`](maths.Point.md)

The optional point to write the global value to

##### skipUpdate?

`boolean`

Should we skip the update transform

#### Returns

[`Point`](maths.Point.md)

The updated point

#### Example

```ts
// Basic position check
const globalPos = sprite.getGlobalPosition();
console.log(`Global: (${globalPos.x}, ${globalPos.y})`);

// Reuse point object
const point = new Point();
sprite.getGlobalPosition(point);

// Skip transform update for performance
const fastPos = container.getGlobalPosition(undefined, true);
```

#### See

 - [Container#toGlobal](#toglobal) For converting specific points
 - [Container#toLocal](#tolocal) For converting to local space

***

### toGlobal()

> **toGlobal**\<`P`\>(`position`, `point?`, `skipUpdate?`): `P`

Calculates the global position of a point relative to this container.
Takes into account the container hierarchy and transforms.

#### Type Parameters

##### P

`P` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

#### Parameters

##### position

[`PointData`](maths.PointData.md)

The local point to convert

##### point?

`P`

Optional point to store the result

##### skipUpdate?

`boolean`

Whether to skip transform updates

#### Returns

`P`

The global position

#### Example

```ts
// Basic point conversion
const localPoint = { x: 10, y: 20 };
const globalPoint = container.toGlobal(localPoint);

// With point reuse
const reusePoint = new Point();
container.toGlobal(localPoint, reusePoint);

// Performance optimization
const fastPoint = container.toGlobal(
    { x: 50, y: 50 },
    undefined,
    true // Skip transform update
);
```

#### See

 - [Container#toLocal](#tolocal) For reverse conversion
 - [Container#getGlobalPosition](#getglobalposition) For container position

***

### toLocal()

> **toLocal**\<`P`\>(`position`, `from?`, `point?`, `skipUpdate?`): `P`

Calculates the local position of the container relative to another point.
Converts coordinates from any coordinate space to this container's local coordinate space.

#### Type Parameters

##### P

`P` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

#### Parameters

##### position

[`PointData`](maths.PointData.md)

The world origin to calculate from

##### from?

[`Container`](scene.Container.md)

The Container to calculate the global position from

##### point?

`P`

A Point object in which to store the value

##### skipUpdate?

`boolean`

Should we skip the update transform

#### Returns

`P`

A point object representing the position in local space

#### Example

```ts
// Basic coordinate conversion
const worldPoint = { x: 100, y: 100 };
const localPos = container.toLocal(worldPoint);

// Convert from another container
const fromSprite = new Sprite(texture);
fromSprite.position.set(50, 50);
const pointInSprite = { x: 10, y: 10 };
const localPoint = container.toLocal(pointInSprite, fromSprite);

// With point reuse for performance
const reusePoint = new Point();
container.toLocal(worldPoint, undefined, reusePoint);

// Skip transform update for static objects
const fastLocal = container.toLocal(
    worldPoint,
    undefined,
    undefined,
    true
);
```

#### See

 - [Container#toGlobal](#toglobal) For reverse conversion
 - [Container#getGlobalPosition](#getglobalposition) For container position
