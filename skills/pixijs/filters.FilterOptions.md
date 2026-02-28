# Interface: FilterOptions

**`Advanced`**

The options to use when creating a new filter.

## Extended by

- [`AlphaFilterOptions`](filters.AlphaFilterOptions.md)
- [`BlurFilterOptions`](filters.BlurFilterOptions.md)
- [`DisplacementFilterOptions`](filters.DisplacementFilterOptions.md)
- [`NoiseFilterOptions`](filters.NoiseFilterOptions.md)

## Properties

### antialias?

> `optional` **antialias**: `boolean` \| [`FilterAntialias`](filters.FilterAntialias.md)

If true the filter will make use of antialiasing. Although it looks better this can have a performance impact.
If set to 'inherit', the filter will detect the antialiasing of the render target and change this automatically.
Definitely don't set this to true if the render target has antialiasing set to false. As it will antialias,
but you won't see the difference. (default 'off')

This can be a boolean or [FilterAntialias][FilterAntialias](filters.FilterAntialias.md) string.

***

### blendMode?

> `optional` **blendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md)

optional blend mode used by the filter when rendering (defaults to 'normal')

***

### blendRequired?

> `optional` **blendRequired**: `boolean`

If this is set to true, the filter system will grab a snap shot of the area being rendered
to and pass this into the shader. This is useful for blend modes that need to be aware of the pixels
they are rendering to. Only use if you need that data, otherwise its an extra gpu copy you don't need!
(default false)

If given, the shader should have a uniform named `uBackTexture`, which is where the pixels of the
area being rendered to can be sampled from.

***

### clipToViewport?

> `optional` **clipToViewport**: `boolean`

If this is set to true, the filter system will clip filter texture into viewport
This is useful for filters that applied to whole texture.
(default true)

***

### padding?

> `optional` **padding**: `number`

the amount of pixels to pad the container with when applying the filter. For example a blur extends the
container out as it blurs, so padding is applied to ensure that extra detail is rendered as well
without clipping occurring. (default 0)

***

### resolution?

> `optional` **resolution**: `number` \| `"inherit"`

the resolution the filter should be rendered at. The lower the resolution, the more performant
the filter will be, but the lower the quality of the output. (default 1)
If 'inherit', the resolution of the render target is used.
Consider lowering this for things like blurs filters
