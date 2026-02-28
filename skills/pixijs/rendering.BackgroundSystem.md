# Class: BackgroundSystem

**`Advanced`**

The background system manages the background color and alpha of the main view.

## Implements

- [`System`](rendering.System.md)\<[`BackgroundSystemOptions`](rendering.BackgroundSystemOptions.md)\>

## Constructors

### Constructor

> **new BackgroundSystem**(): `BackgroundSystem`

#### Returns

`BackgroundSystem`

## Properties

### clearBeforeRender

> **clearBeforeRender**: `boolean`

This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
to clear the canvas every frame. Disable this by setting this to false. For example, if
your game has a canvas filling background image you often don't need this set.

***

### defaultOptions

> `static` **defaultOptions**: [`BackgroundSystemOptions`](rendering.BackgroundSystemOptions.md)

default options used by the system

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

The background color alpha. Setting this to 0 will make the canvas transparent.

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### color

#### Get Signature

> **get** **color**(): [`Color`](color.Color.md)

The background color to fill if not transparent

##### Returns

[`Color`](color.Color.md)

#### Set Signature

> **set** **color**(`value`): `void`

##### Parameters

###### value

[`ColorSource`](color.ColorSource.md)

##### Returns

`void`

***

### colorRgba

#### Get Signature

> **get** **colorRgba**(): [`RgbaArray`](color.RgbaArray.md)

The background color as an [R, G, B, A] array.

##### Returns

[`RgbaArray`](color.RgbaArray.md)

## Methods

### init()

> **init**(`options`): `void`

initiates the background system

#### Parameters

##### options

[`BackgroundSystemOptions`](rendering.BackgroundSystemOptions.md)

the options for the background colors

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)
