# Class: AlphaFilter

Simplest filter - applies alpha.

Use this instead of Container's alpha property to avoid visual layering of individual elements.
AlphaFilter applies alpha evenly across the entire display object and any opaque elements it contains.
If elements are not opaque, they will blend with each other anyway.

Very handy if you want to use common features of all filters:

1. Assign a blendMode to this filter, blend all elements inside display object with background.

2. To use clipping in display coordinates, assign a filterArea to the same container that has this filter.

## Example

```ts
import { AlphaFilter } from 'pixi.js';

const filter = new AlphaFilter({ alpha: 0.5 });
sprite.filters = filter;

// update alpha
filter.alpha = 0.8;
```

## Extends

- [`Filter`](filters.Filter.md)

## Constructors

### Constructor

> **new AlphaFilter**(`options?`): `AlphaFilter`

#### Parameters

##### options?

[`AlphaFilterOptions`](filters.AlphaFilterOptions.md)

#### Returns

`AlphaFilter`

#### Overrides

[`Filter`](filters.Filter.md).[`constructor`](filters.Filter.html#constructor)

## Properties

### defaultOptions

> `static` **defaultOptions**: [`AlphaFilterOptions`](filters.AlphaFilterOptions.md)

Default options for the AlphaFilter.

#### Example

```ts
AlphaFilter.defaultOptions = {
    alpha: 0.5, // Default alpha value
};
// Use default options
const filter = new AlphaFilter(); // Uses default alpha of 0.5
```

#### Overrides

[`Filter`](filters.Filter.md).[`defaultOptions`](filters.Filter.html#defaultoptions)

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

The alpha value of the filter.
Controls the transparency of the filtered display object.

##### Example

```ts
// Create filter with initial alpha
const filter = new AlphaFilter({ alpha: 0.5 });

// Update alpha value dynamically
filter.alpha = 0.8;
```

##### Default

```ts
1
```

##### Remarks

- 0 = fully transparent
- 1 = fully opaque
- Values are clamped between 0 and 1

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`
