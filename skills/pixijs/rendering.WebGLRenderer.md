# Class: WebGLRenderer\<T\>

The WebGL PixiJS Renderer. This renderer allows you to use the most common graphics API, WebGL (and WebGL2).

```ts
// Create a new renderer
const renderer = new WebGLRenderer();
await renderer.init();

// Add the renderer to the stage
document.body.appendChild(renderer.canvas);

// Create a new stage
const stage = new Container();

// Render the stage
renderer.render(stage);
```

You can use [autoDetectRenderer](rendering.autoDetectRenderer.md) to create a renderer that will automatically detect the best
renderer for the environment.

```ts
// Create a new renderer
const renderer = await rendering.autoDetectRenderer({
   preference:'webgl',
});
```

The renderer is composed of systems that manage specific tasks. The following systems are added by default
whenever you create a WebGL renderer:

| WebGL Core Systems                          | Systems that are specific to the WebGL renderer                               |
| ------------------------------------------- | ----------------------------------------------------------------------------- |
| [GlUboSystem](rendering.GlUboSystem.md)               | This manages WebGL2 uniform buffer objects feature for shaders                |
| [GlBackBufferSystem](rendering.GlBackBufferSystem.md)        | manages the back buffer, used so that we can pixi can pixels from the screen  |
| [GlContextSystem](rendering.GlContextSystem.md)           | This manages the WebGL context and its extensions                             |
| [GlBufferSystem](rendering.GlBufferSystem.md)            | This manages buffers and their GPU resources, keeps everything in sync        |
| [GlTextureSystem](rendering.GlTextureSystem.md)           | This manages textures and their GPU resources, keeps everything in sync       |
| [GlRenderTargetSystem](rendering.GlRenderTargetSystem.md)      | This manages what we render too. For example the screen, or another texture   |
| [GlGeometrySystem](rendering.GlGeometrySystem.md)          | This manages geometry, used for drawing meshes via the GPU                    |
| [GlUniformGroupSystem](rendering.GlUniformGroupSystem.md)      | This manages uniform groups. Syncing shader properties with the GPU           |
| [GlShaderSystem](rendering.GlShaderSystem.md)            | This manages shaders, programs that run on the GPU to output lovely pixels    |
| [GlEncoderSystem](rendering.GlEncoderSystem.md)           | This manages encoders, a WebGPU Paradigm, use it to draw a mesh + shader      |
| [GlStateSystem](rendering.GlStateSystem.md)             | This manages the state of the WebGL context. eg the various flags that can be set blend modes / depthTesting etc |
| [GlStencilSystem](rendering.GlStencilSystem.md)           | This manages the stencil buffer. Used primarily for masking                   |
| [GlColorMaskSystem](rendering.GlColorMaskSystem.md)         | This manages the color mask. Used for color masking                           |

The breadth of the API surface provided by the renderer is contained within these systems.

## Extends

- [`AbstractRenderer`](rendering.AbstractRenderer.md)\<`WebGLPipes`, [`WebGLOptions`](rendering.WebGLOptions.md), `T`\>.[`WebGLSystems`](rendering.WebGLSystems.md)

## Type Parameters

### T

`T` *extends* [`ICanvas`](environment.ICanvas.md) = [`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)

## Implements

- [`WebGLSystems`](rendering.WebGLSystems.md)

## Constructors

### Constructor

> **new WebGLRenderer**\<`T`\>(): `WebGLRenderer`\<`T`\>

#### Returns

`WebGLRenderer`\<`T`\>

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`constructor`](rendering.AbstractRenderer.html#constructor)

## rendering

### prepare

> **prepare**: [`PrepareBase`](rendering.PrepareBase.md)

**`Advanced`**

The prepare mixin provides methods to prepare display objects for rendering.
It is used to ensure that textures and other resources are ready before rendering.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`prepare`](rendering.WebGLSystems.html#prepare)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`prepare`](rendering.WebGLSystems.html#prepare)

## Other

### accessibility

> **accessibility**: [`AccessibilitySystem`](accessibility.AccessibilitySystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`accessibility`](rendering.WebGLSystems.html#accessibility)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`accessibility`](rendering.WebGLSystems.html#accessibility)

***

### backBuffer

> **backBuffer**: [`GlBackBufferSystem`](rendering.GlBackBufferSystem.md)

BackBufferSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`backBuffer`](rendering.WebGLSystems.html#backbuffer)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`backBuffer`](rendering.WebGLSystems.html#backbuffer)

***

### background

> **background**: [`BackgroundSystem`](rendering.BackgroundSystem.md)

The background system manages the background color and alpha of the main view.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`background`](rendering.WebGLSystems.html#background)

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`background`](rendering.AbstractRenderer.html#background)

***

### buffer

> **buffer**: [`GlBufferSystem`](rendering.GlBufferSystem.md)

BufferSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`buffer`](rendering.WebGLSystems.html#buffer)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`buffer`](rendering.WebGLSystems.html#buffer)

***

### canvasText

> **canvasText**: [`AbstractTextSystem`](rendering.AbstractTextSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`canvasText`](rendering.WebGLSystems.html#canvastext)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`canvasText`](rendering.WebGLSystems.html#canvastext)

***

### colorMask

> **colorMask**: [`GlColorMaskSystem`](rendering.GlColorMaskSystem.md)

ColorMaskSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`colorMask`](rendering.WebGLSystems.html#colormask)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`colorMask`](rendering.WebGLSystems.html#colormask)

***

### context

> **context**: [`GlContextSystem`](rendering.GlContextSystem.md)

ContextSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`context`](rendering.WebGLSystems.html#context)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`context`](rendering.WebGLSystems.html#context)

***

### encoder

> **encoder**: [`GlEncoderSystem`](rendering.GlEncoderSystem.md)

EncoderSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`encoder`](rendering.WebGLSystems.html#encoder)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`encoder`](rendering.WebGLSystems.html#encoder)

***

### events

> **events**: [`EventSystem`](events.EventSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`events`](rendering.WebGLSystems.html#events)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`events`](rendering.WebGLSystems.html#events)

***

### extract

> **extract**: [`ExtractSystem`](rendering.ExtractSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`extract`](rendering.WebGLSystems.html#extract)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`extract`](rendering.WebGLSystems.html#extract)

***

### filter

> **filter**: [`FilterSystem`](rendering.FilterSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`filter`](rendering.WebGLSystems.html#filter)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`filter`](rendering.WebGLSystems.html#filter)

***

### gc

> **gc**: [`GCSystem`](rendering.GCSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`gc`](rendering.WebGLSystems.html#gc)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`gc`](rendering.WebGLSystems.html#gc)

***

### geometry

> **geometry**: [`GlGeometrySystem`](rendering.GlGeometrySystem.md)

GeometrySystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`geometry`](rendering.WebGLSystems.html#geometry)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`geometry`](rendering.WebGLSystems.html#geometry)

***

### gl

> **gl**: [`WebGL2RenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext)

***

### globalUniforms

> **globalUniforms**: [`GlobalUniformSystem`](rendering.GlobalUniformSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`globalUniforms`](rendering.WebGLSystems.html#globaluniforms)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`globalUniforms`](rendering.WebGLSystems.html#globaluniforms)

***

### graphicsContext

> **graphicsContext**: [`GraphicsContextSystem`](rendering.GraphicsContextSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`graphicsContext`](rendering.WebGLSystems.html#graphicscontext)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`graphicsContext`](rendering.WebGLSystems.html#graphicscontext)

***

### hello

> **hello**: [`HelloSystem`](rendering.HelloSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`hello`](rendering.WebGLSystems.html#hello)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`hello`](rendering.WebGLSystems.html#hello)

***

### htmlText

> **htmlText**: [`HTMLTextSystem`](rendering.HTMLTextSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`htmlText`](rendering.WebGLSystems.html#htmltext)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`htmlText`](rendering.WebGLSystems.html#htmltext)

***

### initHook

> **initHook**: `RendererInitHook`

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`initHook`](rendering.WebGLSystems.html#inithook)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`initHook`](rendering.WebGLSystems.html#inithook)

***

### limits

> **limits**: [`GlLimitsSystem`](rendering.GlLimitsSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`limits`](rendering.WebGLSystems.html#limits)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`limits`](rendering.WebGLSystems.html#limits)

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

[`WebGLSystems`](rendering.WebGLSystems.md).[`renderableGC`](rendering.WebGLSystems.html#renderablegc)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`renderableGC`](rendering.WebGLSystems.html#renderablegc)

***

### renderGroup

> **renderGroup**: `RenderGroupSystem`

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`renderGroup`](rendering.WebGLSystems.html#rendergroup)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`renderGroup`](rendering.WebGLSystems.html#rendergroup)

***

### renderTarget

> **renderTarget**: [`GlRenderTargetSystem`](rendering.GlRenderTargetSystem.md)

RenderTargetSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`renderTarget`](rendering.WebGLSystems.html#rendertarget)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`renderTarget`](rendering.WebGLSystems.html#rendertarget)

***

### scheduler

> **scheduler**: [`SchedulerSystem`](rendering.SchedulerSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`scheduler`](rendering.WebGLSystems.html#scheduler)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`scheduler`](rendering.WebGLSystems.html#scheduler)

***

### shader

> **shader**: [`GlShaderSystem`](rendering.GlShaderSystem.md)

ShaderSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`shader`](rendering.WebGLSystems.html#shader)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`shader`](rendering.WebGLSystems.html#shader)

***

### state

> **state**: [`GlStateSystem`](rendering.GlStateSystem.md)

StateSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`state`](rendering.WebGLSystems.html#state)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`state`](rendering.WebGLSystems.html#state)

***

### stencil

> **stencil**: [`GlStencilSystem`](rendering.GlStencilSystem.md)

StencilSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`stencil`](rendering.WebGLSystems.html#stencil)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`stencil`](rendering.WebGLSystems.html#stencil)

***

### texture

> **texture**: [`GlTextureSystem`](rendering.GlTextureSystem.md)

TextureSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`texture`](rendering.WebGLSystems.html#texture)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`texture`](rendering.WebGLSystems.html#texture)

***

### textureGC

> **textureGC**: [`TextureGCSystem`](rendering.TextureGCSystem.md)

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`textureGC`](rendering.WebGLSystems.html#texturegc)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`textureGC`](rendering.WebGLSystems.html#texturegc)

***

### textureGenerator

> **textureGenerator**: [`GenerateTextureSystem`](rendering.GenerateTextureSystem.md)

System that manages the generation of textures from the renderer

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`textureGenerator`](rendering.WebGLSystems.html#texturegenerator)

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`textureGenerator`](rendering.AbstractRenderer.html#texturegenerator)

***

### tick

> **tick**: `number` = `0`

The current tick of the renderer.

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`tick`](rendering.AbstractRenderer.html#tick)

***

### ubo

> **ubo**: [`GlUboSystem`](rendering.GlUboSystem.md)

UboSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`ubo`](rendering.WebGLSystems.html#ubo)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`ubo`](rendering.WebGLSystems.html#ubo)

***

### uniformGroup

> **uniformGroup**: [`GlUniformGroupSystem`](rendering.GlUniformGroupSystem.md)

UniformGroupSystem instance.

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`uniformGroup`](rendering.WebGLSystems.html#uniformgroup)

#### Inherited from

[`WebGLSystems`](rendering.WebGLSystems.md).[`uniformGroup`](rendering.WebGLSystems.html#uniformgroup)

***

### view

> **view**: [`ViewSystem`](rendering.ViewSystem.md)

The view system manages the main canvas that is attached to the DOM

#### Implementation of

[`WebGLSystems`](rendering.WebGLSystems.md).[`view`](rendering.WebGLSystems.html#view)

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
