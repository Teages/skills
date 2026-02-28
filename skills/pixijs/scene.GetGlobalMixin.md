# Interface: GetGlobalMixin

**`Advanced`**

Interface for a mixin that provides methods to retrieve global properties of a container.
This mixin allows you to get the global alpha, transform matrix, and tint color of a container,
taking into account its parent containers and render groups.
It includes methods to optimize performance by using cached values when available.

## Methods

### getGlobalAlpha()

> **getGlobalAlpha**(`skipUpdate?`): `number`

Returns the global (compound) alpha of the container within the scene.

#### Parameters

##### skipUpdate?

`boolean`

Performance optimization flag:
  - If false (default): Recalculates the entire alpha chain through parents for accuracy
  - If true: Uses cached worldAlpha from the last render pass for better performance

#### Returns

`number`

The resulting alpha value (between 0 and 1)

#### Example

```ts
// Accurate but slower - recalculates entire alpha chain
const preciseAlpha = container.getGlobalAlpha();

// Faster but may be outdated - uses cached alpha
const cachedAlpha = container.getGlobalAlpha(true);
```

***

### getGlobalTint()

> **getGlobalTint**(`skipUpdate?`): `number`

Returns the global (compound) tint color of the container within the scene.

#### Parameters

##### skipUpdate?

`boolean`

Performance optimization flag:
  - If false (default): Recalculates the entire tint chain through parents for accuracy
  - If true: Uses cached worldColor from the last render pass for better performance

#### Returns

`number`

The resulting tint color as a 24-bit RGB number (0xRRGGBB)

#### Example

```ts
// Accurate but slower - recalculates entire tint chain
const preciseTint = container.getGlobalTint();

// Faster but may be outdated - uses cached tint
const cachedTint = container.getGlobalTint(true);
```

***

### getGlobalTransform()

> **getGlobalTransform**(`matrix?`, `skipUpdate?`): [`Matrix`](maths.Matrix.md)

Returns the global transform matrix of the container within the scene.

#### Parameters

##### matrix?

[`Matrix`](maths.Matrix.md)

Optional matrix to store the result. If not provided, a new Matrix will be created.

##### skipUpdate?

`boolean`

Performance optimization flag:
  - If false (default): Recalculates the entire transform chain for accuracy
  - If true: Uses cached worldTransform from the last render pass for better performance

#### Returns

[`Matrix`](maths.Matrix.md)

The resulting transformation matrix (either the input matrix or a new one)

#### Example

```ts
// Accurate but slower - recalculates entire transform chain
const preciseTransform = container.getGlobalTransform();

// Faster but may be outdated - uses cached transform
const cachedTransform = container.getGlobalTransform(undefined, true);

// Reuse existing matrix
const existingMatrix = new Matrix();
container.getGlobalTransform(existingMatrix);
```
