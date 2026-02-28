# Class: WebGPURenderer\<T\>

The WebGPU PixiJS Renderer. This renderer allows you to use the next-generation graphics API, WebGPU.
```ts
// Create a new renderer
const renderer = new WebGPURenderer();
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
import { autoDetectRenderer } from 'pixi.js';
// Create a new renderer
const renderer = await autoDetectRenderer();
```

The renderer is composed of systems that manage specific tasks. The following systems are added by default
whenever you create a WebGPU renderer:

| WebGPU Core Systems                      | Systems that are specific to the WebGL renderer                               |
| ---------------------------------------- | ----------------------------------------------------------------------------- |
| [GpuUboSystem](rendering.GpuUboSystem.md)           | This manages WebGPU uniform buffer objects feature for shaders                |
| [GpuEncoderSystem](rendering.GpuEncoderSystem.md)       | This manages the WebGPU command encoder                                       |
| [GpuDeviceSystem](rendering.GpuDeviceSystem.md)        | This manages the WebGPU Device and its extensions                             |
| [GpuBufferSystem](rendering.GpuBufferSystem.md)        | This manages buffers and their GPU resources, keeps everything in sync        |
| [GpuTextureSystem](rendering.GpuTextureSystem.md)       | This manages textures and their GPU resources, keeps everything in sync       |
| [GpuRenderTargetSystem](rendering.GpuRenderTargetSystem.md)  | This manages what we render too. For example the screen, or another texture   |
| [GpuShaderSystem](rendering.GpuShaderSystem.md)        | This manages shaders, programs that run on the GPU to output lovely pixels    |
| [GpuStateSystem](rendering.GpuStateSystem.md)         | This manages the state of the WebGPU Pipelines. eg the various flags that can be set blend modes / depthTesting etc |
| [PipelineSystem](rendering.PipelineSystem.md)         | This manages the WebGPU pipelines, used for rendering                         |
| [GpuColorMaskSystem](rendering.GpuColorMaskSystem.md)     | This manages the color mask. Used for color masking                           |
| [GpuStencilSystem](rendering.GpuStencilSystem.md)       | This manages the stencil buffer. Used primarily for masking                   |
| [BindGroupSystem](rendering.BindGroupSystem.md)        | This manages the WebGPU bind groups. this is how data is bound to a shader when rendering |

The breadth of the API surface provided by the renderer is contained within these systems.

## Extends

- [`AbstractRenderer`](rendering.AbstractRenderer.md)\<`WebGPUPipes`, [`WebGPUOptions`](rendering.WebGPUOptions.md), `T`\>.[`WebGPUSystems`](rendering.WebGPUSystems.md)

## Type Parameters

### T

`T` *extends* [`ICanvas`](environment.ICanvas.md) = [`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)

## Implements

- [`WebGPUSystems`](rendering.WebGPUSystems.md)

## Constructors

### Constructor

> **new WebGPURenderer**\<`T`\>(): `WebGPURenderer`\<`T`\>

#### Returns

`WebGPURenderer`\<`T`\>

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`constructor`](rendering.AbstractRenderer.html#constructor)

## rendering

### prepare

> **prepare**: [`PrepareBase`](rendering.PrepareBase.md)

**`Advanced`**

The prepare mixin provides methods to prepare display objects for rendering.
It is used to ensure that textures and other resources are ready before rendering.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`prepare`](rendering.WebGPUSystems.html#prepare)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`prepare`](rendering.WebGPUSystems.html#prepare)

## Other

### accessibility

> **accessibility**: [`AccessibilitySystem`](accessibility.AccessibilitySystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`accessibility`](rendering.WebGPUSystems.html#accessibility)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`accessibility`](rendering.WebGPUSystems.html#accessibility)

***

### background

> **background**: [`BackgroundSystem`](rendering.BackgroundSystem.md)

The background system manages the background color and alpha of the main view.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`background`](rendering.WebGPUSystems.html#background)

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`background`](rendering.AbstractRenderer.html#background)

***

### bindGroup

> **bindGroup**: [`BindGroupSystem`](rendering.BindGroupSystem.md)

BindGroupSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`bindGroup`](rendering.WebGPUSystems.html#bindgroup)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`bindGroup`](rendering.WebGPUSystems.html#bindgroup)

***

### buffer

> **buffer**: [`GpuBufferSystem`](rendering.GpuBufferSystem.md)

BufferSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`buffer`](rendering.WebGPUSystems.html#buffer)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`buffer`](rendering.WebGPUSystems.html#buffer)

***

### canvasText

> **canvasText**: [`AbstractTextSystem`](rendering.AbstractTextSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`canvasText`](rendering.WebGPUSystems.html#canvastext)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`canvasText`](rendering.WebGPUSystems.html#canvastext)

***

### colorMask

> **colorMask**: [`GpuColorMaskSystem`](rendering.GpuColorMaskSystem.md)

ColorMaskSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`colorMask`](rendering.WebGPUSystems.html#colormask)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`colorMask`](rendering.WebGPUSystems.html#colormask)

***

### device

> **device**: [`GpuDeviceSystem`](rendering.GpuDeviceSystem.md)

DeviceSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`device`](rendering.WebGPUSystems.html#device)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`device`](rendering.WebGPUSystems.html#device)

***

### encoder

> **encoder**: [`GpuEncoderSystem`](rendering.GpuEncoderSystem.md)

EncoderSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`encoder`](rendering.WebGPUSystems.html#encoder)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`encoder`](rendering.WebGPUSystems.html#encoder)

***

### events

> **events**: [`EventSystem`](events.EventSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`events`](rendering.WebGPUSystems.html#events)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`events`](rendering.WebGPUSystems.html#events)

***

### extract

> **extract**: [`ExtractSystem`](rendering.ExtractSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`extract`](rendering.WebGPUSystems.html#extract)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`extract`](rendering.WebGPUSystems.html#extract)

***

### filter

> **filter**: [`FilterSystem`](rendering.FilterSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`filter`](rendering.WebGPUSystems.html#filter)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`filter`](rendering.WebGPUSystems.html#filter)

***

### gc

> **gc**: [`GCSystem`](rendering.GCSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`gc`](rendering.WebGPUSystems.html#gc)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`gc`](rendering.WebGPUSystems.html#gc)

***

### globalUniforms

> **globalUniforms**: [`GlobalUniformSystem`](rendering.GlobalUniformSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`globalUniforms`](rendering.WebGPUSystems.html#globaluniforms)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`globalUniforms`](rendering.WebGPUSystems.html#globaluniforms)

***

### gpu

> **gpu**: [`GPU`](rendering.GPU.md)

The WebGPU Device.

***

### graphicsContext

> **graphicsContext**: [`GraphicsContextSystem`](rendering.GraphicsContextSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`graphicsContext`](rendering.WebGPUSystems.html#graphicscontext)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`graphicsContext`](rendering.WebGPUSystems.html#graphicscontext)

***

### hello

> **hello**: [`HelloSystem`](rendering.HelloSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`hello`](rendering.WebGPUSystems.html#hello)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`hello`](rendering.WebGPUSystems.html#hello)

***

### htmlText

> **htmlText**: [`HTMLTextSystem`](rendering.HTMLTextSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`htmlText`](rendering.WebGPUSystems.html#htmltext)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`htmlText`](rendering.WebGPUSystems.html#htmltext)

***

### initHook

> **initHook**: `RendererInitHook`

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`initHook`](rendering.WebGPUSystems.html#inithook)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`initHook`](rendering.WebGPUSystems.html#inithook)

***

### limits

> **limits**: [`GpuLimitsSystem`](rendering.GpuLimitsSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`limits`](rendering.WebGPUSystems.html#limits)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`limits`](rendering.WebGPUSystems.html#limits)

***

### name

> `readonly` **name**: `string`

The name of the renderer.

#### Inherited from

[`AbstractRenderer`](rendering.AbstractRenderer.md).[`name`](rendering.AbstractRenderer.html#name)

***

### pipeline

> **pipeline**: [`PipelineSystem`](rendering.PipelineSystem.md)

PipelineSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`pipeline`](rendering.WebGPUSystems.html#pipeline)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`pipeline`](rendering.WebGPUSystems.html#pipeline)

***

### renderableGC

> **renderableGC**: [`RenderableGCSystem`](rendering.RenderableGCSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`renderableGC`](rendering.WebGPUSystems.html#renderablegc)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`renderableGC`](rendering.WebGPUSystems.html#renderablegc)

***

### renderGroup

> **renderGroup**: `RenderGroupSystem`

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`renderGroup`](rendering.WebGPUSystems.html#rendergroup)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`renderGroup`](rendering.WebGPUSystems.html#rendergroup)

***

### renderTarget

> **renderTarget**: [`GpuRenderTargetSystem`](rendering.GpuRenderTargetSystem.md)

RenderTargetSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`renderTarget`](rendering.WebGPUSystems.html#rendertarget)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`renderTarget`](rendering.WebGPUSystems.html#rendertarget)

***

### scheduler

> **scheduler**: [`SchedulerSystem`](rendering.SchedulerSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`scheduler`](rendering.WebGPUSystems.html#scheduler)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`scheduler`](rendering.WebGPUSystems.html#scheduler)

***

### shader

> **shader**: [`GpuShaderSystem`](rendering.GpuShaderSystem.md)

ShaderSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`shader`](rendering.WebGPUSystems.html#shader)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`shader`](rendering.WebGPUSystems.html#shader)

***

### state

> **state**: [`GpuStateSystem`](rendering.GpuStateSystem.md)

StateSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`state`](rendering.WebGPUSystems.html#state)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`state`](rendering.WebGPUSystems.html#state)

***

### stencil

> **stencil**: [`GpuStencilSystem`](rendering.GpuStencilSystem.md)

StencilSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`stencil`](rendering.WebGPUSystems.html#stencil)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`stencil`](rendering.WebGPUSystems.html#stencil)

***

### texture

> **texture**: [`GpuTextureSystem`](rendering.GpuTextureSystem.md)

TextureSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`texture`](rendering.WebGPUSystems.html#texture)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`texture`](rendering.WebGPUSystems.html#texture)

***

### textureGC

> **textureGC**: [`TextureGCSystem`](rendering.TextureGCSystem.md)

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`textureGC`](rendering.WebGPUSystems.html#texturegc)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`textureGC`](rendering.WebGPUSystems.html#texturegc)

***

### textureGenerator

> **textureGenerator**: [`GenerateTextureSystem`](rendering.GenerateTextureSystem.md)

System that manages the generation of textures from the renderer

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`textureGenerator`](rendering.WebGPUSystems.html#texturegenerator)

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

> **ubo**: [`GpuUboSystem`](rendering.GpuUboSystem.md)

UboSystem instance.

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`ubo`](rendering.WebGPUSystems.html#ubo)

#### Inherited from

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`ubo`](rendering.WebGPUSystems.html#ubo)

***

### view

> **view**: [`ViewSystem`](rendering.ViewSystem.md)

The view system manages the main canvas that is attached to the DOM

#### Implementation of

[`WebGPUSystems`](rendering.WebGPUSystems.md).[`view`](rendering.WebGPUSystems.html#view)

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
