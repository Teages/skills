# Class: CanvasContextSystem

**`Advanced`**

Canvas 2D context system for the CanvasRenderer.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new CanvasContextSystem**(`renderer`): `CanvasContextSystem`

#### Parameters

##### renderer

[`CanvasRenderer`](rendering.CanvasRenderer.md)

The owning CanvasRenderer.

#### Returns

`CanvasContextSystem`

## Properties

### \_activeBlendMode

> **\_activeBlendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md) = `'normal'`

Current canvas blend mode.

***

### \_outerBlend

> **\_outerBlend**: `boolean` = `false`

True when external blend mode control is in use.

***

### \_projTransform

> **\_projTransform**: [`Matrix`](maths.Matrix.md) = `null`

Optional projection transform for render targets.

***

### activeContext

> **activeContext**: `CrossPlatformCanvasRenderingContext2D`

Active 2D context for rendering (root or render target).

***

### activeResolution

> **activeResolution**: `number` = `1`

Resolution of the active context.

***

### blendModes

> `readonly` **blendModes**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`BLEND_MODES`](filters.BLEND_MODES.md), `GlobalCompositeOperation`\>

Map of Pixi blend modes to canvas composite operations.

***

### rootContext

> **rootContext**: `CrossPlatformCanvasRenderingContext2D`

Root 2D context tied to the renderer's canvas.

***

### smoothProperty

> **smoothProperty**: `SmoothingEnabledProperties` = `'imageSmoothingEnabled'`

The image smoothing property to toggle for this browser.

## Methods

### clear()

> **clear**(`clearColor?`, `alpha?`): `void`

Clears the current render target, optionally filling with a color.

#### Parameters

##### clearColor?

Color to fill after clearing.

`string` | `number` | `number`[]

##### alpha?

`number`

Alpha override for the clear color.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Releases context references.

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### init()

> **init**(): `void`

Initializes the root context and smoothing flag selection.

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)

***

### setBlendMode()

> **setBlendMode**(`blendMode`): `void`

Sets the active blend mode.

#### Parameters

##### blendMode

[`BLEND_MODES`](filters.BLEND_MODES.md)

Pixi blend mode.

#### Returns

`void`

***

### setContextTransform()

> **setContextTransform**(`transform`, `roundPixels?`, `localResolution?`, `skipGlobalTransform?`): `void`

Sets the current transform on the active context.

#### Parameters

##### transform

[`Matrix`](maths.Matrix.md)

Transform to apply.

##### roundPixels?

`boolean`

Whether to round translation to integers.

##### localResolution?

`number`

Optional local resolution multiplier.

##### skipGlobalTransform?

`boolean`

If true, skip applying the global world transform matrix.

#### Returns

`void`
