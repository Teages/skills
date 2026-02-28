# Interface: MeasureMixin

**`Advanced`**

The MeasureMixin interface provides methods for measuring and manipulating the size and bounds of a display object.
It includes methods to get and set the size of the object, retrieve its local bounds,
and calculate its global bounds.

## Extends

- [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)\<`MeasureMixinConstructor`\>

## Properties

### height

> **height**: `number`

The height of the display object, in pixels.

#### Example

```ts
new Container({ height: 100});
```

#### Default

```ts
0
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`height`](scene.ViewContainerOptions.html#height)

***

### width

> **width**: `number`

The width of the display object, in pixels.

#### Example

```ts
new Container({ width: 100});
```

#### Default

```ts
0
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`width`](scene.ViewContainerOptions.html#width)

## Methods

### getBounds()

> **getBounds**(`skipUpdate?`, `bounds?`): [`Bounds`](rendering.Bounds.md)

Calculates and returns the (world) bounds of the display object as a Rectangle.
Takes into account transforms and child bounds.

#### Parameters

##### skipUpdate?

`boolean`

Setting to `true` will stop the transforms of the scene graph from
 being updated. This means the calculation returned MAY be out of date BUT will give you a
 nice performance boost.

##### bounds?

[`Bounds`](rendering.Bounds.md)

Optional bounds to store the result of the bounds calculation

#### Returns

[`Bounds`](rendering.Bounds.md)

The minimum axis-aligned rectangle in world space that fits around this object

#### Example

```ts
// Basic bounds calculation
const bounds = sprite.getBounds();
console.log(`World bounds: ${bounds.x}, ${bounds.y}, ${bounds.width}, ${bounds.height}`);

// Reuse bounds object for performance
const recycleBounds = new Bounds();
sprite.getBounds(false, recycleBounds);

// Skip update for performance
const fastBounds = sprite.getBounds(true);
```

#### Remarks

- Includes transform calculations
- Updates scene graph by default
- Can reuse bounds objects
- Common in hit testing

#### See

 - [Container#getLocalBounds](#getlocalbounds) For untransformed bounds
 - [Bounds](rendering.Bounds.md) For bounds properties

***

### getLocalBounds()

> **getLocalBounds**(): [`Bounds`](rendering.Bounds.md)

Retrieves the local bounds of the container as a Bounds object.
Uses cached values when possible for better performance.

#### Returns

[`Bounds`](rendering.Bounds.md)

The bounding area

#### Example

```ts
// Basic bounds check
const bounds = container.getLocalBounds();
console.log(`Width: ${bounds.width}, Height: ${bounds.height}`);
// subsequent calls will reuse the cached bounds
const cachedBounds = container.getLocalBounds();
console.log(bounds === cachedBounds); // true
```

#### See

 - [Container#getBounds](#getbounds) For world space bounds
 - [Bounds](rendering.Bounds.md) For bounds properties

***

### getSize()

> **getSize**(`out?`): [`Size`](maths.Size.md)

#### Parameters

##### out?

[`Size`](maths.Size.md)

#### Returns

[`Size`](maths.Size.md)

***

### setSize()

#### Call Signature

> **setSize**(`width`, `height?`): `void`

##### Parameters

###### width

`number`

###### height?

`number`

##### Returns

`void`

#### Call Signature

> **setSize**(`value`): `void`

##### Parameters

###### value

`Optional`\<[`Size`](maths.Size.md), `"height"`\>

##### Returns

`void`
