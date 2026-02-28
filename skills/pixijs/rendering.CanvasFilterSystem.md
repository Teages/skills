# Class: CanvasFilterSystem

**`Advanced`**

Canvas2D filter system that applies compatible filters using CSS filter strings.
Unsupported filters are skipped with a warn-once message.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new CanvasFilterSystem**(`renderer`): `CanvasFilterSystem`

#### Parameters

##### renderer

The Canvas renderer

###### canvasContext

\{ `activeContext`: [`ICanvasRenderingContext2D`](environment.ICanvasRenderingContext2D.md); `activeResolution`: `number`; \}

###### canvasContext.activeContext

[`ICanvasRenderingContext2D`](environment.ICanvasRenderingContext2D.md)

###### canvasContext.activeResolution

`number`

#### Returns

`CanvasFilterSystem`

## Properties

### renderer

> `readonly` **renderer**: `object`

The renderer this system is attached to

#### canvasContext

> **canvasContext**: `object`

##### canvasContext.activeContext

> **activeContext**: [`ICanvasRenderingContext2D`](environment.ICanvasRenderingContext2D.md)

##### canvasContext.activeResolution

> **activeResolution**: `number`

## Accessors

### alphaMultiplier

#### Get Signature

> **get** **alphaMultiplier**(): `number`

##### Returns

`number`

## Methods

### destroy()

> **destroy**(): `void`

Destroys the system

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### generateFilteredTexture()

> **generateFilteredTexture**(`params`): [`Texture`](rendering.Texture.md)

Applies supported filters to a texture and returns a new texture.
Unsupported filters are skipped with a warn-once message.

#### Parameters

##### params

The parameters for applying filters.

###### filters

[`Filter`](filters.Filter.md)[]

###### texture

[`Texture`](rendering.Texture.md)

#### Returns

[`Texture`](rendering.Texture.md)

The resulting texture after filters are applied.

***

### pop()

> **pop**(): `void`

Pop a filter from the stack. Called when exiting a filtered container.

#### Returns

`void`

***

### push()

> **push**(`instruction`): `void`

Push a filter instruction onto the stack.
Called when entering a filtered container.

#### Parameters

##### instruction

`FilterInstruction`

The filter instruction from FilterPipe

#### Returns

`void`
