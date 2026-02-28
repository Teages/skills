# Class: State

**`Advanced`**

This is a WebGL state, and is is passed to [GlStateSystem](rendering.GlStateSystem.md).

Each mesh rendered may require WebGL to be in a different state.
For example you may want different blend mode or to enable polygon offsets

## Constructors

### Constructor

> **new State**(): `State`

#### Returns

`State`

## Properties

### data

> **data**: `number`

The data is a unique number based on the states settings.
This lets us quickly compare states with a single number rather than looking
at all the individual settings.

***

### default2d

> `static` **default2d**: `State`

## Accessors

### blend

#### Get Signature

> **get** **blend**(): `boolean`

Activates blending of the computed fragment color values.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **blend**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### blendMode

#### Get Signature

> **get** **blendMode**(): [`BLEND_MODES`](filters.BLEND_MODES.md)

The blend mode to be applied when this state is set. Apply a value of `normal` to reset the blend mode.
Setting this mode to anything other than NO_BLEND will automatically switch blending on.

##### Default

```ts
'normal'
```

##### Returns

[`BLEND_MODES`](filters.BLEND_MODES.md)

#### Set Signature

> **set** **blendMode**(`value`): `void`

##### Parameters

###### value

[`BLEND_MODES`](filters.BLEND_MODES.md)

##### Returns

`void`

***

### clockwiseFrontFace

#### Get Signature

> **get** **clockwiseFrontFace**(): `boolean`

Specifies whether or not front or back-facing polygons can be culled.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **clockwiseFrontFace**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### culling

#### Get Signature

> **get** **culling**(): `boolean`

Activates culling of polygons.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **culling**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### cullMode

#### Get Signature

> **get** **cullMode**(): [`CULL_MODES`](rendering.CULL_MODES.md)

##### Returns

[`CULL_MODES`](rendering.CULL_MODES.md)

#### Set Signature

> **set** **cullMode**(`value`): `void`

The culling settings for this state none - No culling back - Back face culling front - Front face culling

##### Parameters

###### value

[`CULL_MODES`](rendering.CULL_MODES.md)

##### Returns

`void`

***

### depthMask

#### Get Signature

> **get** **depthMask**(): `boolean`

Enables or disables writing to the depth buffer.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **depthMask**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### depthTest

#### Get Signature

> **get** **depthTest**(): `boolean`

Activates depth comparisons and updates to the depth buffer.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **depthTest**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### offsets

#### Get Signature

> **get** **offsets**(): `boolean`

Activates adding an offset to depth values of polygon's fragments

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **offsets**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### polygonOffset

#### Get Signature

> **get** **polygonOffset**(): `number`

The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **polygonOffset**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

***

### for2d()

> `static` **for2d**(): `State`

A quickly getting an instance of a State that is configured for 2d rendering.

#### Returns

`State`

a new State with values set for 2d rendering
