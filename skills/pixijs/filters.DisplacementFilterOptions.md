# Interface: DisplacementFilterOptions

Configuration options for the DisplacementFilter.

A displacement filter uses a sprite's texture as a displacement map,
moving pixels of the target based on the color values of corresponding
pixels in the displacement sprite.

## Example

```ts
const options: DisplacementFilterOptions = {
    sprite: displacementSprite,
    scale: { x: 20, y: 20 }
};

const filter = new DisplacementFilter(options);
```

## Extends

- [`FilterOptions`](filters.FilterOptions.md)

## Properties

### antialias?

> `optional` **antialias**: `boolean` \| [`FilterAntialias`](filters.FilterAntialias.md)

If true the filter will make use of antialiasing. Although it looks better this can have a performance impact.
If set to 'inherit', the filter will detect the antialiasing of the render target and change this automatically.
Definitely don't set this to true if the render target has antialiasing set to false. As it will antialias,
but you won't see the difference. (default 'off')

This can be a boolean or [FilterAntialias][FilterAntialias](filters.FilterAntialias.md) string.

#### Inherited from

[`FilterOptions`](filters.FilterOptions.md).[`antialias`](filters.FilterOptions.html#antialias)

***

### blendMode?

> `optional` **blendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md)

optional blend mode used by the filter when rendering (defaults to 'normal')

#### Inherited from

[`FilterOptions`](filters.FilterOptions.md).[`blendMode`](filters.FilterOptions.html#blendmode)

***

### blendRequired?

> `optional` **blendRequired**: `boolean`

If this is set to true, the filter system will grab a snap shot of the area being rendered
to and pass this into the shader. This is useful for blend modes that need to be aware of the pixels
they are rendering to. Only use if you need that data, otherwise its an extra gpu copy you don't need!
(default false)

If given, the shader should have a uniform named `uBackTexture`, which is where the pixels of the
area being rendered to can be sampled from.

#### Inherited from

[`FilterOptions`](filters.FilterOptions.md).[`blendRequired`](filters.FilterOptions.html#blendrequired)

***

### clipToViewport?

> `optional` **clipToViewport**: `boolean`

If this is set to true, the filter system will clip filter texture into viewport
This is useful for filters that applied to whole texture.
(default true)

#### Inherited from

[`FilterOptions`](filters.FilterOptions.md).[`clipToViewport`](filters.FilterOptions.html#cliptoviewport)

***

### padding?

> `optional` **padding**: `number`

the amount of pixels to pad the container with when applying the filter. For example a blur extends the
container out as it blurs, so padding is applied to ensure that extra detail is rendered as well
without clipping occurring. (default 0)

#### Inherited from

[`FilterOptions`](filters.FilterOptions.md).[`padding`](filters.FilterOptions.html#padding)

***

### resolution?

> `optional` **resolution**: `number` \| `"inherit"`

the resolution the filter should be rendered at. The lower the resolution, the more performant
the filter will be, but the lower the quality of the output. (default 1)
If 'inherit', the resolution of the render target is used.
Consider lowering this for things like blurs filters

#### Inherited from

[`FilterOptions`](filters.FilterOptions.md).[`resolution`](filters.FilterOptions.html#resolution)

***

### scale?

> `optional` **scale**: `number` \| [`PointData`](maths.PointData.md)

The scale of the displacement effect. Can be a single number for uniform
scaling or a point-like object for separate x/y scaling.

#### Default

```ts
20
```

#### Example

```ts
// Uniform scaling
new DisplacementFilter({ sprite, scale: 20 });
// Separate scaling
new DisplacementFilter({ sprite, scale: { x: 10, y: 15 } });
```

***

### sprite

> **sprite**: [`Sprite`](scene.Sprite.md)

The sprite whose texture will be used as the displacement map.
Red channel = horizontal displacement
Green channel = vertical displacement

#### Example

```ts
const displacementSprite = new Sprite(texture);
const filter = new DisplacementFilter({ sprite: displacementSprite });
```
