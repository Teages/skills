# Interface: BlurFilterOptions

Configuration options for the BlurFilter.
Controls how the Gaussian blur effect is applied.

## Example

```ts
// Basic blur with default values
const filter = new BlurFilter();

// Custom blur configuration
const filter = new BlurFilter({
    strength: 8,        // Overall blur strength
    quality: 4,         // Higher quality = better blur
    kernelSize: 5      // Size of blur kernel
});

// Different horizontal/vertical blur
const filter = new BlurFilter({
    strengthX: 4,      // Horizontal blur only
    strengthY: 12,     // Stronger vertical blur
    quality: 2         // Lower quality for better performance
});
```

## Remarks

- Higher quality values produce better blur but impact performance
- KernelSize affects blur precision and performance
- Strength values determine blur intensity

## See

 - [BlurFilter](filters.BlurFilter.md) The filter that uses these options
 - [FilterOptions](filters.FilterOptions.md) Base filter options

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

### kernelSize?

> `optional` **kernelSize**: `number`

The kernelSize of the blur filter.
Larger values create more precise blur but impact performance.
Options: 5, 7, 9, 11, 13, 15.

#### Default

```ts
5
```

***

### legacy?

> `optional` **legacy**: `boolean`

When true, uses the legacy (pre-v8.x) blur pass behavior where strength
is distributed uniformly across passes (`strength / passes`) instead of
the optimized halving scheme. This also disables per-pass WebGPU UBO batching.

#### Default

```ts
false
```

***

### padding?

> `optional` **padding**: `number`

the amount of pixels to pad the container with when applying the filter. For example a blur extends the
container out as it blurs, so padding is applied to ensure that extra detail is rendered as well
without clipping occurring. (default 0)

#### Inherited from

[`FilterOptions`](filters.FilterOptions.md).[`padding`](filters.FilterOptions.html#padding)

***

### quality?

> `optional` **quality**: `number`

The quality of the blur filter.
Higher values mean better quality but slower performance.

#### Default

```ts
4
```

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

### strength?

> `optional` **strength**: `number`

The strength of the blur filter.
Applied to both horizontal and vertical blur if strengthX/Y not set.

#### Default

```ts
8
```

***

### strengthX?

> `optional` **strengthX**: `number`

The horizontal strength of the blur.
Overrides strength parameter for x-axis.

#### Default

```ts
8
```

***

### strengthY?

> `optional` **strengthY**: `number`

The vertical strength of the blur.
Overrides strength parameter for y-axis.

#### Default

```ts
8
```
