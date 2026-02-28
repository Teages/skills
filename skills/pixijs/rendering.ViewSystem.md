# Class: ViewSystem

**`Advanced`**

The view system manages the main canvas that is attached to the DOM.
This main role is to deal with how the holding the view reference and dealing with how it is resized.

## Implements

- [`System`](rendering.System.md)\<[`ViewSystemOptions`](rendering.ViewSystemOptions.md), [`TypeOrBool`](utils.TypeOrBool.md)\<[`ViewSystemDestroyOptions`](rendering.ViewSystemDestroyOptions.md)\>\>

## Constructors

### Constructor

> **new ViewSystem**(): `ViewSystem`

#### Returns

`ViewSystem`

## Properties

### antialias

> **antialias**: `boolean`

Whether to enable anti-aliasing. This may affect performance.

***

### canvas

> **canvas**: [`ICanvas`](environment.ICanvas.md)

The canvas element that everything is drawn to.

***

### renderTarget

> **renderTarget**: [`RenderTarget`](rendering.RenderTarget.md)

The render target that the view is drawn to.

***

### screen

> **screen**: [`Rectangle`](maths.Rectangle.md)

Measurements of the screen. (0, 0, screenWidth, screenHeight).

Its safe to use as filterArea or hitArea for the whole stage.

***

### texture

> **texture**: [`Texture`](rendering.Texture.md)\<[`CanvasSource`](rendering.CanvasSource.md)\>

The texture that is used to draw the canvas to the screen.

***

### defaultOptions

> `static` **defaultOptions**: [`ViewSystemOptions`](rendering.ViewSystemOptions.md)

The default options for the view system.

## Accessors

### autoDensity

#### Get Signature

> **get** **autoDensity**(): `boolean`

Whether CSS dimensions of canvas view should be resized to screen dimensions automatically.
This is only supported for HTMLCanvasElement and will be ignored if the canvas is an OffscreenCanvas.

##### Returns

`boolean`

#### Set Signature

> **set** **autoDensity**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### resolution

#### Get Signature

> **get** **resolution**(): `number`

The resolution / device pixel ratio of the renderer.

##### Returns

`number`

#### Set Signature

> **set** **resolution**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### destroy()

> **destroy**(`options`): `void`

Destroys this System and optionally removes the canvas from the dom.

#### Parameters

##### options

[`TypeOrBool`](utils.TypeOrBool.md)\<[`ViewSystemDestroyOptions`](rendering.ViewSystemDestroyOptions.md)\> = `false`

The options for destroying the view, or "false".

#### Returns

`void`

#### Example

```ts
viewSystem.destroy();
viewSystem.destroy(true);
viewSystem.destroy({ removeView: true });
```

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### init()

> **init**(`options`): `void`

initiates the view system

#### Parameters

##### options

[`ViewSystemOptions`](rendering.ViewSystemOptions.md)

the options for the view

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)

***

### resize()

> **resize**(`desiredScreenWidth`, `desiredScreenHeight`, `resolution`): `void`

Resizes the screen and canvas to the specified dimensions.

#### Parameters

##### desiredScreenWidth

`number`

The new width of the screen.

##### desiredScreenHeight

`number`

The new height of the screen.

##### resolution

`number`

#### Returns

`void`
