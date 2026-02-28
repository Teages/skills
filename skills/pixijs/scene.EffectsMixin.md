# Interface: EffectsMixin

**`Advanced`**

The EffectsMixin interface provides methods and properties for managing effects
such as masks and filters on a display object.
It allows for adding, removing, and configuring effects, as well as setting a mask for the display object.

## Extends

- [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)\<`EffectsMixinConstructor`\>

## Properties

### effects?

> `optional` **effects**: [`Effect`](rendering.Effect.md)[]

**`Advanced`**

todo Needs docs

***

### filterArea?

> `optional` **filterArea**: [`Rectangle`](maths.Rectangle.md)

The area the filter is applied to. This is used as an optimization to define a specific region
for filter effects instead of calculating the display object bounds each frame.

> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for filter effects,
> which can improve performance by avoiding expensive bounds calculations.

#### Example

```ts
// Set specific filter area
container.filterArea = new Rectangle(0, 0, 100, 100);

// Optimize filter region
const screen = app.screen;
container.filterArea = new Rectangle(
    screen.x,
    screen.y,
    screen.width,
    screen.height
);
```

#### See

 - [Container#filters](scene.Container.html#filters) For applying filters
 - [Rectangle](maths.Rectangle.md) For area definition

***

### mask

> **mask**: [`Mask`](scene.Mask.md)

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it.

> [!IMPORTANT] In PixiJS a regular mask must be a [Graphics](scene.Graphics.md) or a [Sprite](scene.Sprite.md) object.
> This allows for much faster masking in canvas as it utilities shape clipping.
> Furthermore, a mask of an object must be in the subtree of its parent.
> Otherwise, `getLocalBounds` may calculate incorrect bounds, which makes the container's width and height wrong.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

#### Example

```ts
// Apply mask to sprite
const sprite = new Sprite(texture);
sprite.mask = graphics;

// Remove mask
sprite.mask = null;
```

#### See

 - [Graphics](scene.Graphics.md) For creating mask shapes
 - [Sprite](scene.Sprite.md) For texture-based masks
 - [Container#setMask](#setmask) For advanced mask options

#### Overrides

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`mask`](scene.ViewContainerOptions.html#mask)

## Accessors

### filters

#### Get Signature

> **get** **filters**(): readonly [`Filter`](filters.Filter.md)[]

Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer.

##### Example

```ts
new Container({
    filters: [new BlurFilter(2), new ColorMatrixFilter()],
});
```

##### See

[Filter](filters.Filter.md) For filter base class

##### Returns

readonly [`Filter`](filters.Filter.md)[]

#### Set Signature

> **set** **filters**(`value`): `void`

Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer.

##### Example

```ts
// Add a single filter
sprite.filters = new BlurFilter(2);

// Apply multiple filters
container.filters = [
    new BlurFilter(2),
    new ColorMatrixFilter(),
];

// Remove filters
sprite.filters = null;
```

##### See

[Filter](filters.Filter.md) For filter base class

##### Parameters

###### value

[`Filter`](filters.Filter.md) | [`Filter`](filters.Filter.md)[]

##### Returns

`void`

#### Overrides

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`filters`](scene.ViewContainerOptions.html#filters)

## Methods

### setMask()

> **setMask**(`options`): `void`

Used to set mask and control mask options on a display object.
Allows for more detailed control over masking behavior compared to the mask property.

#### Parameters

##### options

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`MaskOptionsAndMask`](scene.MaskOptionsAndMask.md)\>

Configuration options for the mask

#### Returns

`void`

#### Example

```ts
import { Graphics, Sprite } from 'pixi.js';

// Create a circular mask
const graphics = new Graphics()
    .beginFill(0xFF3300)
    .drawCircle(100, 100, 50)
    .endFill();

// Apply mask with options
sprite.setMask({
    mask: graphics,
    inverse: true, // Create a hole effect
});

// Clear existing mask
sprite.setMask({ mask: null });
```

#### See

 - [Container#mask](#mask) For simple masking
 - [MaskOptionsAndMask](scene.MaskOptionsAndMask.md) For full options API

#### Overrides

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`setMask`](scene.ViewContainerOptions.html#setmask)
