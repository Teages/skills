# Class: DisplacementFilter

A filter that applies a displacement map effect using a sprite's texture.

The DisplacementFilter uses another texture (from a sprite) as a displacement map,
where the red and green channels of each pixel in the map determine how the corresponding
pixel in the filtered object should be offset:
- Red channel controls horizontal displacement
- Green channel controls vertical displacement

Common use cases:
- Creating ripple or wave effects
- Distorting images dynamically
- Implementing heat haze effects
- Creating transition effects

## Example

```ts
import { Sprite, DisplacementFilter } from 'pixi.js';

// Create a sprite to use as the displacement map
const displacementSprite = Sprite.from('displacement-map.png');

// Create and configure the filter
const displacementFilter = new DisplacementFilter({
    sprite: displacementSprite,
    scale: { x: 20, y: 20 }
});

// Apply to any display object
container.filters = [displacementFilter];
```

## Author

Vico: vicocotea

## Extends

- [`Filter`](filters.Filter.md)

## Constructors

### Constructor

> **new DisplacementFilter**(`options`): `DisplacementFilter`

#### Parameters

##### options

The sprite or options object.

[`Sprite`](scene.Sprite.md) | [`DisplacementFilterOptions`](filters.DisplacementFilterOptions.md)

#### Returns

`DisplacementFilter`

#### Overrides

[`Filter`](filters.Filter.md).[`constructor`](filters.Filter.html#constructor)

### Constructor

> **new DisplacementFilter**(`sprite`, `scale?`): `DisplacementFilter`

#### Parameters

##### sprite

[`Sprite`](scene.Sprite.md)

##### scale?

`number` | [`PointData`](maths.PointData.md)

#### Returns

`DisplacementFilter`

#### Deprecated

since 8.0.0

#### Overrides

`Filter.constructor`

## Accessors

### scale

#### Get Signature

> **get** **scale**(): [`Point`](maths.Point.md)

The scale of the displacement effect.

Gets the current x and y scaling values used for the displacement mapping.
- x: Horizontal displacement scale
- y: Vertical displacement scale

##### Example

```ts
const filter = new DisplacementFilter({ sprite });

// Get current scale
console.log(filter.scale.x, filter.scale.y);

// Update scale
filter.scale.x = 100;
filter.scale.y = 50;
```

##### Returns

[`Point`](maths.Point.md)

The current scale as a Point object

## Methods

### apply()

> **apply**(`filterManager`, `input`, `output`, `clearMode`): `void`

**`Advanced`**

Applies the filter.

#### Parameters

##### filterManager

[`FilterSystem`](rendering.FilterSystem.md)

The manager.

##### input

[`Texture`](rendering.Texture.md)

The input target.

##### output

[`Texture`](rendering.Texture.md)

The output target.

##### clearMode

`boolean`

clearMode.

#### Returns

`void`

#### Overrides

[`Filter`](filters.Filter.md).[`apply`](filters.Filter.html#apply)
