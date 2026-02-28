# Class: BlurFilter

The BlurFilter applies a Gaussian blur to an object.
The strength of the blur can be set for the x-axis and y-axis separately.

## Example

```ts
import { BlurFilter } from 'pixi.js';

// Create with default settings
const filter = new BlurFilter();

// Create with custom settings
const filter = new BlurFilter({
    strength: 8,      // Overall blur strength
    quality: 4,       // Blur quality (higher = better but slower)
    kernelSize: 5     // Size of blur kernel matrix
});

// Apply to a display object
sprite.filters = [filter];

// Update properties
filter.strength = 10;          // Set both X and Y blur
filter.strengthX = 5;          // Set only horizontal blur
filter.strengthY = 15;         // Set only vertical blur
filter.quality = 2;            // Adjust quality

// Enable edge pixel clamping
filter.repeatEdgePixels = true;
```

## Remarks

- Higher quality values produce better blur but impact performance
- Strength controls blur intensity independently for X and Y
- Can be optimized using quality and kernelSize settings
- Supports edge pixel clamping for special effects

## See

 - [BlurFilterPass](filters.BlurFilterPass.md) For single-direction blur
 - [FilterOptions](filters.FilterOptions.md) For base filter options

## Extends

- [`Filter`](filters.Filter.md)

## Constructors

### Constructor

> **new BlurFilter**(`options?`): `BlurFilter`

#### Parameters

##### options?

[`BlurFilterOptions`](filters.BlurFilterOptions.md)

The options of the blur filter.

#### Returns

`BlurFilter`

#### Overrides

[`Filter`](filters.Filter.md).[`constructor`](filters.Filter.html#constructor)

### Constructor

> **new BlurFilter**(`strength?`, `quality?`, `resolution?`, `kernelSize?`): `BlurFilter`

#### Parameters

##### strength?

`number`

##### quality?

`number`

##### resolution?

`number`

##### kernelSize?

`number`

#### Returns

`BlurFilter`

#### Deprecated

since 8.0.0

#### Overrides

`Filter.constructor`

## Properties

### blurXFilter

> **blurXFilter**: [`BlurFilterPass`](filters.BlurFilterPass.md)

**`Advanced`**

The horizontal blur filter

***

### blurYFilter

> **blurYFilter**: [`BlurFilterPass`](filters.BlurFilterPass.md)

**`Advanced`**

The vertical blur filter

***

### defaultOptions

> `static` **defaultOptions**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`BlurFilterOptions`](filters.BlurFilterOptions.md)\>

Default blur filter options

#### Example

```ts
// Set default options for all BlurFilters
BlurFilter.defaultOptions = {
    strength: 10,       // Default blur strength
    quality: 2,        // Default blur quality
    kernelSize: 7      // Default kernel size
};
// Create a filter with these defaults
const filter = new BlurFilter(); // Uses default options
```

#### Remarks

- These options are used when creating a new BlurFilter without specific parameters
- Can be overridden by passing options to the constructor
- Useful for setting global defaults for all blur filters in your application

#### See

 - [BlurFilterOptions](filters.BlurFilterOptions.md) For detailed options
 - BlurFilter The filter that uses these options

#### Overrides

[`Filter`](filters.Filter.md).[`defaultOptions`](filters.Filter.html#defaultoptions)

## Accessors

### blur

#### Get Signature

> **get** **blur**(): `number`

Sets the strength of both the blurX and blurY properties simultaneously

##### Default

```ts
2
```

##### Deprecated

since 8.3.0

##### See

BlurFilter.strength

##### Returns

`number`

#### Set Signature

> **set** **blur**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### blurX

#### Get Signature

> **get** **blurX**(): `number`

Sets the strength of the blurX property

##### Default

```ts
2
```

##### Deprecated

since 8.3.0

##### See

BlurFilter.strengthX

##### Returns

`number`

#### Set Signature

> **set** **blurX**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### blurY

#### Get Signature

> **get** **blurY**(): `number`

Sets the strength of the blurY property

##### Default

```ts
2
```

##### Deprecated

since 8.3.0

##### See

BlurFilter.strengthY

##### Returns

`number`

#### Set Signature

> **set** **blurY**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### quality

#### Get Signature

> **get** **quality**(): `number`

Sets the number of passes for blur. More passes means higher quality blurring.
Controls the precision and smoothness of the blur effect at the cost of performance.

##### Example

```ts
// High quality blur (slower)
filter.quality = 8;

// Low quality blur (faster)
filter.quality = 2;
```

##### Default

```ts
4
```

##### Remarks

Higher values produce better quality but impact performance

##### Returns

`number`

#### Set Signature

> **set** **quality**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### repeatEdgePixels

#### Get Signature

> **get** **repeatEdgePixels**(): `boolean`

If set to true the edge of the target will be clamped

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **repeatEdgePixels**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### strength

#### Get Signature

> **get** **strength**(): `number`

Sets the strength of both the blurX and blurY properties simultaneously.
Controls the overall intensity of the Gaussian blur effect.

##### Example

```ts
// Set equal blur strength for both axes
filter.strength = 8;

// Will throw error if X and Y are different
filter.strengthX = 4;
filter.strengthY = 8;
filter.strength; // Error: BlurFilter's strengthX and strengthY are different
```

##### Default

```ts
8
```

##### Throws

If strengthX and strengthY are different values

##### Returns

`number`

#### Set Signature

> **set** **strength**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### strengthX

#### Get Signature

> **get** **strengthX**(): `number`

Sets the strength of horizontal blur.
Controls the blur intensity along the x-axis independently.

##### Example

```ts
// Apply horizontal-only blur
filter.strengthX = 8;
filter.strengthY = 0;

// Create motion blur effect
filter.strengthX = 16;
filter.strengthY = 2;
```

##### Default

```ts
8
```

##### Returns

`number`

#### Set Signature

> **set** **strengthX**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### strengthY

#### Get Signature

> **get** **strengthY**(): `number`

Sets the strength of the vertical blur.
Controls the blur intensity along the y-axis independently.

##### Example

```ts
// Apply vertical-only blur
filter.strengthX = 0;
filter.strengthY = 8;

// Create radial blur effect
filter.strengthX = 8;
filter.strengthY = 8;
```

##### Default

```ts
8
```

##### Returns

`number`

#### Set Signature

> **set** **strengthY**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

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

[`RenderSurface`](rendering.RenderSurface.md)

The output target.

##### clearMode

`boolean`

How to clear

#### Returns

`void`

#### Overrides

[`Filter`](filters.Filter.md).[`apply`](filters.Filter.html#apply)
