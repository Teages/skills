# Class: CanvasRenderer\<T\>

The Canvas PixiJS Renderer. This renderer allows you to use the HTML Canvas 2D context.

## Extends

- [`AbstractRenderer`](rendering.AbstractRenderer.md)\<`CanvasPipes`, [`CanvasOptions`](rendering.CanvasOptions.md), `T`\>.[`CanvasSystems`](rendering.CanvasSystems.md)

## Type Parameters

### T

`T` *extends* [`ICanvas`](environment.ICanvas.md) = [`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)

## Implements

- [`CanvasSystems`](rendering.CanvasSystems.md)

## Constructors

### Constructor

> **new CanvasRenderer**\<`T`\>(): `CanvasRenderer`\<`T`\>

#### Returns

`CanvasRenderer`\<`T`\>

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`constructor`](rendering.AbstractRenderer.html#constructor)

## rendering

### prepare

> **prepare**: [`PrepareBase`](rendering.PrepareBase.md)

**`Advanced`**

The prepare mixin provides methods to prepare display objects for rendering.
It is used to ensure that textures and other resources are ready before rendering.

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`prepare`](rendering.CanvasSystems.html#prepare)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`prepare`](rendering.CanvasSystems.html#prepare)

## Other

### accessibility

> **accessibility**: [`AccessibilitySystem`](accessibility.AccessibilitySystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`accessibility`](rendering.CanvasSystems.html#accessibility)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`accessibility`](rendering.CanvasSystems.html#accessibility)

***

### background

> **background**: [`BackgroundSystem`](rendering.BackgroundSystem.md)

The background system manages the background color and alpha of the main view.

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`background`](rendering.CanvasSystems.html#background)

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`background`](rendering.AbstractRenderer.html#background)

***

### canvasContext

> **canvasContext**: [`CanvasContextSystem`](rendering.CanvasContextSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`canvasContext`](rendering.CanvasSystems.html#canvascontext)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`canvasContext`](rendering.CanvasSystems.html#canvascontext)

***

### canvasText

> **canvasText**: [`AbstractTextSystem`](rendering.AbstractTextSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`canvasText`](rendering.CanvasSystems.html#canvastext)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`canvasText`](rendering.CanvasSystems.html#canvastext)

***

### events

> **events**: [`EventSystem`](events.EventSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`events`](rendering.CanvasSystems.html#events)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`events`](rendering.CanvasSystems.html#events)

***

### extract

> **extract**: [`ExtractSystem`](rendering.ExtractSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`extract`](rendering.CanvasSystems.html#extract)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`extract`](rendering.CanvasSystems.html#extract)

***

### filter

> **filter**: [`FilterSystem`](rendering.FilterSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`filter`](rendering.CanvasSystems.html#filter)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`filter`](rendering.CanvasSystems.html#filter)

***

### gc

> **gc**: [`GCSystem`](rendering.GCSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`gc`](rendering.CanvasSystems.html#gc)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`gc`](rendering.CanvasSystems.html#gc)

***

### globalUniforms

> **globalUniforms**: [`GlobalUniformSystem`](rendering.GlobalUniformSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`globalUniforms`](rendering.CanvasSystems.html#globaluniforms)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`globalUniforms`](rendering.CanvasSystems.html#globaluniforms)

***

### graphicsContext

> **graphicsContext**: [`CanvasGraphicsContextSystem`](rendering.CanvasGraphicsContextSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`graphicsContext`](rendering.CanvasSystems.html#graphicscontext)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`graphicsContext`](rendering.CanvasSystems.html#graphicscontext)

***

### hello

> **hello**: [`HelloSystem`](rendering.HelloSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`hello`](rendering.CanvasSystems.html#hello)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`hello`](rendering.CanvasSystems.html#hello)

***

### htmlText

> **htmlText**: [`HTMLTextSystem`](rendering.HTMLTextSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`htmlText`](rendering.CanvasSystems.html#htmltext)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`htmlText`](rendering.CanvasSystems.html#htmltext)

***

### initHook

> **initHook**: `RendererInitHook`

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`initHook`](rendering.CanvasSystems.html#inithook)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`initHook`](rendering.CanvasSystems.html#inithook)

***

### limits

> **limits**: [`CanvasLimitsSystem`](rendering.CanvasLimitsSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`limits`](rendering.CanvasSystems.html#limits)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`limits`](rendering.CanvasSystems.html#limits)

***

### name

> `readonly` **name**: `string`

The name of the renderer.

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`name`](rendering.AbstractRenderer.html#name)

***

### renderableGC

> **renderableGC**: [`RenderableGCSystem`](rendering.RenderableGCSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`renderableGC`](rendering.CanvasSystems.html#renderablegc)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`renderableGC`](rendering.CanvasSystems.html#renderablegc)

***

### renderGroup

> **renderGroup**: `RenderGroupSystem`

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`renderGroup`](rendering.CanvasSystems.html#rendergroup)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`renderGroup`](rendering.CanvasSystems.html#rendergroup)

***

### renderTarget

> **renderTarget**: [`CanvasRenderTargetSystem`](rendering.CanvasRenderTargetSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`renderTarget`](rendering.CanvasSystems.html#rendertarget)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`renderTarget`](rendering.CanvasSystems.html#rendertarget)

***

### scheduler

> **scheduler**: [`SchedulerSystem`](rendering.SchedulerSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`scheduler`](rendering.CanvasSystems.html#scheduler)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`scheduler`](rendering.CanvasSystems.html#scheduler)

***

### texture

> **texture**: [`CanvasTextureSystem`](rendering.CanvasTextureSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`texture`](rendering.CanvasSystems.html#texture)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`texture`](rendering.CanvasSystems.html#texture)

***

### textureGC

> **textureGC**: [`TextureGCSystem`](rendering.TextureGCSystem.md)

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`textureGC`](rendering.CanvasSystems.html#texturegc)

#### Inherited from

[`CanvasSystems`](rendering.CanvasSystems.md).[`textureGC`](rendering.CanvasSystems.html#texturegc)

***

### textureGenerator

> **textureGenerator**: [`GenerateTextureSystem`](rendering.GenerateTextureSystem.md)

System that manages the generation of textures from the renderer

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`textureGenerator`](rendering.CanvasSystems.html#texturegenerator)

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`textureGenerator`](rendering.AbstractRenderer.html#texturegenerator)

***

### tick

> **tick**: `number` = `0`

The current tick of the renderer.

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`tick`](rendering.AbstractRenderer.html#tick)

***

### view

> **view**: [`ViewSystem`](rendering.ViewSystem.md)

The view system manages the main canvas that is attached to the DOM

#### Implementation of

[`CanvasSystems`](rendering.CanvasSystems.md).[`view`](rendering.CanvasSystems.html#view)

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`view`](rendering.AbstractRenderer.html#view)

***

### defaultOptions

> `static` **defaultOptions**: `object`

The default options for the renderer.

#### failIfMajorPerformanceCaveat

> **failIfMajorPerformanceCaveat**: `boolean` = `false`

Should the `failIfMajorPerformanceCaveat` flag be enabled as a context option used in the `isWebGLSupported`
function. If set to true, a WebGL renderer can fail to be created if the browser thinks there could be
performance issues when using WebGL.

In PixiJS v6 this has changed from true to false by default, to allow WebGL to work in as many
scenarios as possible. However, some users may have a poor experience, for example, if a user has a gpu or
driver version blacklisted by the
browser.

If your application requires high performance rendering, you may wish to set this to false.
We recommend one of two options if you decide to set this flag to false:

1: Use the Canvas renderer as a fallback in case high performance WebGL is
   not supported.

2: Call `isWebGLSupported` (which if found in the utils package) in your code before attempting to create a
   PixiJS renderer, and show an error message to the user if the function returns false, explaining that their
   device & browser combination does not support high performance WebGL.
   This is a much better strategy than trying to create a PixiJS renderer and finding it then fails.

##### Default

```ts
false
```

#### resolution

> **resolution**: `number` = `1`

Default resolution / device pixel ratio of the renderer.

##### Default

```ts
1
```

#### roundPixels

> **roundPixels**: `boolean` = `false`

Should round pixels be forced when rendering?

##### Default

```ts
false
```

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`defaultOptions`](rendering.AbstractRenderer.html#defaultoptions)

***

### canvas

#### Get Signature

> **get** **canvas**(): `CANVAS`

The canvas element that everything is drawn to.

##### Returns

`CANVAS`

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`canvas`](rendering.AbstractRenderer.html#canvas-1)

***

### height

#### Get Signature

> **get** **height**(): `number`

Same as view.height, actual number of pixels in the canvas by vertical.

##### Default

```ts
600
```

##### Returns

`number`

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`height`](rendering.AbstractRenderer.html#height)

***

### lastObjectRendered

#### Get Signature

> **get** **lastObjectRendered**(): [`Container`](scene.Container.md)

the last object rendered by the renderer. Useful for other plugins like interaction managers

##### Returns

[`Container`](scene.Container.md)

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`lastObjectRendered`](rendering.AbstractRenderer.html#lastobjectrendered)

***

### renderingToScreen

#### Get Signature

> **get** **renderingToScreen**(): `boolean`

Flag if we are rendering to the screen vs renderTexture

##### Default

```ts
true
```

##### Returns

`boolean`

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`renderingToScreen`](rendering.AbstractRenderer.html#renderingtoscreen)

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

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`resolution`](rendering.AbstractRenderer.html#resolution)

***

### roundPixels

#### Get Signature

> **get** **roundPixels**(): `boolean`

Whether the renderer will round coordinates to whole pixels when rendering.
Can be overridden on a per scene item basis.

##### Returns

`boolean`

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`roundPixels`](rendering.AbstractRenderer.html#roundpixels)

***

### screen

#### Get Signature

> **get** **screen**(): [`Rectangle`](maths.Rectangle.md)

Measurements of the screen. (0, 0, screenWidth, screenHeight).

Its safe to use as filterArea or hitArea for the whole stage.

##### Returns

[`Rectangle`](maths.Rectangle.md)

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`screen`](rendering.AbstractRenderer.html#screen)

***

### width

#### Get Signature

> **get** **width**(): `number`

Same as view.width, actual number of pixels in the canvas by horizontal.

##### Default

```ts
800
```

##### Returns

`number`

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`width`](rendering.AbstractRenderer.html#width)

***

### clear()

> **clear**(`options`): `void`

**`Advanced`**

Clears the render target.

#### Parameters

##### options

[`ClearOptions`](rendering.ClearOptions.md) = `{}`

The options to use when clearing the render target.

#### Returns

`void`

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`clear`](rendering.AbstractRenderer.html#clear)

***

### destroy()

> **destroy**(`options`): `void`

#### Parameters

##### options

[`RendererDestroyOptions`](rendering.RendererDestroyOptions.md) = `false`

#### Returns

`void`

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`destroy`](rendering.AbstractRenderer.html#destroy)

***

### generateTexture()

> **generateTexture**(`options`): [`Texture`](rendering.Texture.md)

Generate a texture from a container.

#### Parameters

##### options

options or container target to use when generating the texture

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> | [`GenerateTextureOptions`](rendering.GenerateTextureOptions.md)

#### Returns

[`Texture`](rendering.Texture.md)

a texture

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`generateTexture`](rendering.AbstractRenderer.html#generatetexture)

***

### init()

> **init**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Initialize the renderer.

#### Parameters

##### options

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`OPTIONS`\> = `{}`

The options to use to create the renderer.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`init`](rendering.AbstractRenderer.html#init)

***

### render()

#### Call Signature

> **render**(`options`): `void`

Renders the object to its view.

##### Parameters

###### options

The options to render with.

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> | [`RenderOptions`](rendering.RenderOptions.md)

##### Returns

`void`

##### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`render`](rendering.AbstractRenderer.html#render)

#### Call Signature

> **render**(`container`, `options`): `void`

##### Parameters

###### container

[`Container`](scene.Container.md)

###### options

###### renderTexture

`any`

##### Returns

`void`

##### Deprecated

since 8.0.0

##### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`render`](rendering.AbstractRenderer.html#render)

***

### resetState()

> **resetState**(): `void`

**`Advanced`**

Resets the rendering state of the renderer.
This is useful when you want to use the WebGL context directly and need to ensure PixiJS's internal state
stays synchronized. When modifying the WebGL context state externally, calling this method before the next Pixi
render will reset all internal caches and ensure it executes correctly.

This is particularly useful when combining PixiJS with other rendering engines like Three.js:
```js
// Reset Three.js state
threeRenderer.resetState();

// Render a Three.js scene
threeRenderer.render(threeScene, threeCamera);

// Reset PixiJS state since Three.js modified the WebGL context
pixiRenderer.resetState();

// Now render Pixi content
pixiRenderer.render(pixiScene);
```

#### Returns

`void`

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`resetState`](rendering.AbstractRenderer.html#resetstate)

***

### resize()

> **resize**(`desiredScreenWidth`, `desiredScreenHeight`, `resolution?`): `void`

Resizes the WebGL view to the specified width and height.

#### Parameters

##### desiredScreenWidth

`number`

The desired width of the screen.

##### desiredScreenHeight

`number`

The desired height of the screen.

##### resolution?

`number`

The resolution / device pixel ratio of the renderer.

#### Returns

`void`

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`resize`](rendering.AbstractRenderer.html#resize)
