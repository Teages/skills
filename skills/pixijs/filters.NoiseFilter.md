# Class: NoiseFilter

A filter that adds configurable random noise to rendered content.

This filter generates pixel noise based on a noise intensity value and an optional seed.
It can be used to create various effects like film grain, static, or texture variation.

Based on: https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/noise.js

## Example

```ts
import { NoiseFilter } from 'pixi.js';

// Create with options
const filter = new NoiseFilter({
    noise: 0.5,    // 50% noise intensity
    seed: 12345    // Fixed seed for consistent noise
});

// Apply to a display object
sprite.filters = [filter];

// Adjust noise dynamically
filter.noise = 0.8;    // Increase noise
filter.seed = Math.random(); // New random pattern
```

## Author

Vico: vicocotea

## Extends

- [`Filter`](filters.Filter.md)

## Constructors

### Constructor

> **new NoiseFilter**(`options`): `NoiseFilter`

#### Parameters

##### options

[`NoiseFilterOptions`](filters.NoiseFilterOptions.md) = `{}`

The options of the noise filter.

#### Returns

`NoiseFilter`

#### Overrides

[`Filter`](filters.Filter.md).[`constructor`](filters.Filter.html#constructor)

## Properties

### defaultOptions

> `static` **defaultOptions**: [`NoiseFilterOptions`](filters.NoiseFilterOptions.md)

The default configuration options for the NoiseFilter.

These values will be used when no specific options are provided to the constructor.
You can override any of these values by passing your own options object.

#### Example

```ts
NoiseFilter.defaultOptions.noise = 0.7; // Change default noise to 0.7
const filter = new NoiseFilter(); // Will use noise 0.7 by default
```

#### Overrides

[`Filter`](filters.Filter.md).[`defaultOptions`](filters.Filter.html#defaultoptions)

## Accessors

### noise

#### Get Signature

> **get** **noise**(): `number`

The amount of noise to apply to the filtered content.

This value controls the intensity of the random noise effect:
- Values close to 0 produce subtle noise
- Values around 0.5 produce moderate noise
- Values close to 1 produce strong noise

##### Default

```ts
0.5
```

##### Example

```ts
const noiseFilter = new NoiseFilter();

// Set to subtle noise
noiseFilter.noise = 0.2;

// Set to maximum noise
noiseFilter.noise = 1.0;
```

##### Returns

`number`

#### Set Signature

> **set** **noise**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### seed

#### Get Signature

> **get** **seed**(): `number`

The seed value used for random noise generation.

This value determines the noise pattern:
- Using the same seed will generate identical noise patterns
- Different seeds produce different but consistent patterns
- `Math.random()` can be used for random patterns

##### Default

```ts
Math.random()
```

##### Example

```ts
const noiseFilter = new NoiseFilter();

// Use a fixed seed for consistent noise
noiseFilter.seed = 12345;

// Generate new random pattern
noiseFilter.seed = Math.random();
```

##### Returns

`number`

#### Set Signature

> **set** **seed**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`
