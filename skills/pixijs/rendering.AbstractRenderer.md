# Abstract Class: AbstractRenderer\<PIPES, OPTIONS, CANVAS\>

**`Advanced`**

The base class for a PixiJS Renderer. It contains the shared logic for all renderers.

You should not use this class directly, but instead use [WebGLRenderer](rendering.WebGLRenderer.md)
or [WebGPURenderer](rendering.WebGPURenderer.md).
Alternatively, you can also use [autoDetectRenderer](rendering.autoDetectRenderer.md) if you want us to
determine the best renderer for you.

The renderer is composed of systems that manage specific tasks. The following systems are added by default
whenever you create a renderer:

| Generic Systems                      | Systems that manage functionality that all renderer types share               |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| [ViewSystem](rendering.ViewSystem.md)              | This manages the main view of the renderer usually a Canvas              |
| [BackgroundSystem](rendering.BackgroundSystem.md)        | This manages the main views background color and alpha                   |
| [EventSystem](events.EventSystem.md)           | This manages UI events.                                                       |
| [AccessibilitySystem](accessibility.AccessibilitySystem.md) | This manages accessibility features. Requires `import 'pixi.js/accessibility'`|

| Core Systems                   | Provide an optimised, easy to use API to work with WebGL/WebGPU               |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| [GlobalUniformSystem](rendering.GlobalUniformSystem.md) | This manages shaders, programs that run on the GPU to calculate 'em pixels.   |
| [TextureGCSystem](rendering.TextureGCSystem.md)     | This will automatically remove textures from the GPU if they are not used.    |

| PixiJS High-Level Systems            | Set of specific systems designed to work with PixiJS objects                  |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| [HelloSystem](rendering.HelloSystem.md)               | Says hello, buy printing out the pixi version into the console log (along with the renderer type)       |
| [GenerateTextureSystem](rendering.GenerateTextureSystem.md) | This adds the ability to generate textures from any Container       |
| [FilterSystem](rendering.FilterSystem.md)          | This manages the filtering pipeline for post-processing effects.             |
| [PrepareSystem](rendering.PrepareSystem.md)               | This manages uploading assets to the GPU. Requires `import 'pixi.js/prepare'`|
| [ExtractSystem](rendering.ExtractSystem.md)               | This extracts image data from display objects.                               |

The breadth of the API surface provided by the renderer is contained within these systems.

## Extends

- `EventEmitter`\<\{ `resize`: \[`number`, `number`, `number`\]; \}\>

## Extended by

- [`CanvasRenderer`](rendering.CanvasRenderer.md)
- [`WebGLRenderer`](rendering.WebGLRenderer.md)
- [`WebGPURenderer`](rendering.WebGPURenderer.md)

## Type Parameters

### PIPES

`PIPES`

### OPTIONS

`OPTIONS` *extends* [`SharedRendererOptions`](rendering.SharedRendererOptions.md)

### CANVAS

`CANVAS` *extends* [`ICanvas`](environment.ICanvas.md) = [`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)

## Constructors

### Constructor

> **new AbstractRenderer**\<`PIPES`, `OPTIONS`, `CANVAS`\>(`config`): `AbstractRenderer`\<`PIPES`, `OPTIONS`, `CANVAS`\>

Set up a system with a collection of SystemClasses and runners.
Systems are attached dynamically to this class when added.

#### Parameters

##### config

[`RendererConfig`](rendering.RendererConfig.md)

the config for the system manager

#### Returns

`AbstractRenderer`\<`PIPES`, `OPTIONS`, `CANVAS`\>

#### Overrides

`EventEmitter<{resize: [screenWidth: number, screenHeight: number, resolution: number]}>.constructor`

## Properties

### background

> **background**: [`BackgroundSystem`](rendering.BackgroundSystem.md)

The background system manages the background color and alpha of the main view.

***

### name

> `readonly` **name**: `string`

The name of the renderer.

***

### textureGenerator

> **textureGenerator**: [`GenerateTextureSystem`](rendering.GenerateTextureSystem.md)

System that manages the generation of textures from the renderer

***

### tick

> **tick**: `number` = `0`

The current tick of the renderer.

***

### view

> **view**: [`ViewSystem`](rendering.ViewSystem.md)

The view system manages the main canvas that is attached to the DOM

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

## Accessors

### canvas

#### Get Signature

> **get** **canvas**(): `CANVAS`

The canvas element that everything is drawn to.

##### Returns

`CANVAS`

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

***

### lastObjectRendered

#### Get Signature

> **get** **lastObjectRendered**(): [`Container`](scene.Container.md)

the last object rendered by the renderer. Useful for other plugins like interaction managers

##### Returns

[`Container`](scene.Container.md)

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

***

### roundPixels

#### Get Signature

> **get** **roundPixels**(): `boolean`

Whether the renderer will round coordinates to whole pixels when rendering.
Can be overridden on a per scene item basis.

##### Returns

`boolean`

***

### screen

#### Get Signature

> **get** **screen**(): [`Rectangle`](maths.Rectangle.md)

Measurements of the screen. (0, 0, screenWidth, screenHeight).

Its safe to use as filterArea or hitArea for the whole stage.

##### Returns

[`Rectangle`](maths.Rectangle.md)

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

## Methods

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

***

### destroy()

> **destroy**(`options`): `void`

#### Parameters

##### options

[`RendererDestroyOptions`](rendering.RendererDestroyOptions.md) = `false`

#### Returns

`void`

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
