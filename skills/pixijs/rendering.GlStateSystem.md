# Class: GlStateSystem

**`Advanced`**

System plugin to the renderer to manage WebGL state machines

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GlStateSystem**(`renderer`): `GlStateSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

#### Returns

`GlStateSystem`

## Properties

### blendMode

> `readonly` **blendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md)

Blend mode

#### Default

```ts
'none'
@readonly
```

***

### polygonOffset

> `readonly` **polygonOffset**: `number`

Polygon offset

***

### stateId

> `readonly` **stateId**: `number`

State ID

## Methods

### forceState()

> **forceState**(`state`): `void`

Sets the state, when previous state is unknown.

#### Parameters

##### state

[`State`](rendering.State.md)

The state to set

#### Returns

`void`

***

### resetState()

> **resetState**(): `void`

Resets all the logic and disables the VAOs.

#### Returns

`void`

***

### set()

> **set**(`state`): `void`

Sets the current state

#### Parameters

##### state

[`State`](rendering.State.md)

The state to set.

#### Returns

`void`

***

### setBlend()

> **setBlend**(`value`): `void`

Sets whether to enable or disable blending.

#### Parameters

##### value

`boolean`

Turn on or off WebGl blending.

#### Returns

`void`

***

### setBlendMode()

> **setBlendMode**(`value`): `void`

Sets the blend mode.

#### Parameters

##### value

[`BLEND_MODES`](filters.BLEND_MODES.md)

The blend mode to set to.

#### Returns

`void`

***

### setCullFace()

> **setCullFace**(`value`): `void`

Sets whether to enable or disable cull face.

#### Parameters

##### value

`boolean`

Turn on or off webgl cull face.

#### Returns

`void`

***

### setDepthMask()

> **setDepthMask**(`value`): `void`

Sets whether to enable or disable depth mask.

#### Parameters

##### value

`boolean`

Turn on or off webgl depth mask.

#### Returns

`void`

***

### setDepthTest()

> **setDepthTest**(`value`): `void`

Sets whether to enable or disable depth test.

#### Parameters

##### value

`boolean`

Turn on or off webgl depth testing.

#### Returns

`void`

***

### setFrontFace()

> **setFrontFace**(`value`): `void`

Sets the gl front face.

#### Parameters

##### value

`boolean`

true is clockwise and false is counter-clockwise

#### Returns

`void`

***

### setOffset()

> **setOffset**(`value`): `void`

Sets whether to enable or disable polygon offset fill.

#### Parameters

##### value

`boolean`

Turn on or off webgl polygon offset testing.

#### Returns

`void`

***

### setPolygonOffset()

> **setPolygonOffset**(`value`, `scale`): `void`

Sets the polygon offset.

#### Parameters

##### value

`number`

the polygon offset

##### scale

`number`

the polygon offset scale

#### Returns

`void`
