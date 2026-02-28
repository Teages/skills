# Interface: AbstractSplitOptions

Configuration options for text splitting.

## Extended by

- [`AbstractSplitTextOptions`](text.AbstractSplitTextOptions.md)
- [`SplitBitmapOptions`](text.SplitBitmapOptions.md)
- [`SplitOptions`](text.SplitOptions.md)

## Properties

### autoSplit?

> `optional` **autoSplit**: `boolean`

Enables automatic splitting on text/style changes

#### Default

```ts
true
```

***

### charAnchor?

> `optional` **charAnchor**: `number` \| [`PointData`](maths.PointData.md)

Transform origin for character segments. Range: [0-1]

#### Example

```ts
charAnchor: { x: 0.5, y: 1 }  // Bottom-center alignment
charAnchor: 0.5  // Center alignment
```

#### Default

```ts
0
```

***

### lineAnchor?

> `optional` **lineAnchor**: `number` \| [`PointData`](maths.PointData.md)

Transform origin for line segments. Range: [0-1]

#### Example

```ts
lineAnchor: 0.5        // Center horizontally and vertically
lineAnchor: { x: 0, y: 0.5 }  // Left-center alignment

```

#### Default

```ts
0
```

***

### style

> **style**: [`TextStyle`](text.TextStyle.md) \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`TextStyleOptions`](text.TextStyleOptions.md)\>

Text styling - accepts TextStyle instance or style object

***

### text

> **text**: `string`

Text content to be split

***

### wordAnchor?

> `optional` **wordAnchor**: `number` \| [`PointData`](maths.PointData.md)

Transform origin for word segments. Range: [0-1]

#### Example

```ts
wordAnchor: { x: 1, y: 0 }  // Top-right alignment
wordAnchor: 0.5  // Center alignment
```

#### Default

```ts
0
```
