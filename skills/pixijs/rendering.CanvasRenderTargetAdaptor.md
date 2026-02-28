# Class: CanvasRenderTargetAdaptor

**`Advanced`**

Canvas adaptor for render targets.

## Constructors

### Constructor

> **new CanvasRenderTargetAdaptor**(): `CanvasRenderTargetAdaptor`

#### Returns

`CanvasRenderTargetAdaptor`

## Methods

### clear()

> **clear**(`renderTarget`, `_clear`, `clearColor?`, `viewport?`): `void`

**`Advanced`**

Clears the render target.

#### Parameters

##### renderTarget

[`RenderTarget`](rendering.RenderTarget.md)

Target to clear.

##### \_clear

[`CLEAR_OR_BOOL`](rendering.CLEAR_OR_BOOL.md)

Clear mode (unused).

##### clearColor?

`number`[]

Optional clear color.

##### viewport?

[`Rectangle`](maths.Rectangle.md)

Optional viewport rectangle.

#### Returns

`void`

#### Implementation of

`RenderTargetAdaptor.clear`

***

### copyToTexture()

> **copyToTexture**(`sourceRenderSurfaceTexture`, `destinationTexture`, `originSrc`, `size`, `originDest?`): [`Texture`](rendering.Texture.md)

**`Advanced`**

Copies a render target into a texture source.

#### Parameters

##### sourceRenderSurfaceTexture

[`RenderTarget`](rendering.RenderTarget.md)

Source render target.

##### destinationTexture

[`Texture`](rendering.Texture.md)

Destination texture.

##### originSrc

Source origin.

###### x

`number`

Source x origin.

###### y

`number`

Source y origin.

##### size

Copy size.

###### height

`number`

Copy height.

###### width

`number`

Copy width.

##### originDest?

Destination origin.

###### x

`number`

Destination x origin.

###### y

`number`

Destination y origin.

#### Returns

[`Texture`](rendering.Texture.md)

#### Implementation of

`RenderTargetAdaptor.copyToTexture`

***

### destroyGpuRenderTarget()

> **destroyGpuRenderTarget**(`_gpuRenderTarget`): `void`

**`Advanced`**

Destroys a GPU render target (no-op for canvas).

#### Parameters

##### \_gpuRenderTarget

`CanvasRenderTarget`

Target to destroy.

#### Returns

`void`

#### Implementation of

`RenderTargetAdaptor.destroyGpuRenderTarget`

***

### finishRenderPass()

> **finishRenderPass**(): `void`

**`Advanced`**

Finishes the render pass (no-op for canvas).

#### Returns

`void`

#### Implementation of

`RenderTargetAdaptor.finishRenderPass`

***

### init()

> **init**(`renderer`, `renderTargetSystem`): `void`

**`Advanced`**

Initializes the adaptor.

#### Parameters

##### renderer

[`CanvasRenderer`](rendering.CanvasRenderer.md)

Canvas renderer instance.

##### renderTargetSystem

[`RenderTargetSystem`](rendering.RenderTargetSystem.md)\<`CanvasRenderTarget`\>

The render target system.

#### Returns

`void`

#### Implementation of

`RenderTargetAdaptor.init`

***

### initGpuRenderTarget()

> **initGpuRenderTarget**(`renderTarget`): `CanvasRenderTarget`

**`Advanced`**

Creates a GPU render target for canvas.

#### Parameters

##### renderTarget

[`RenderTarget`](rendering.RenderTarget.md)

Render target to initialize.

#### Returns

`CanvasRenderTarget`

#### Implementation of

`RenderTargetAdaptor.initGpuRenderTarget`

***

### resizeGpuRenderTarget()

> **resizeGpuRenderTarget**(`renderTarget`): `void`

**`Advanced`**

Resizes the backing canvas for a render target.

#### Parameters

##### renderTarget

[`RenderTarget`](rendering.RenderTarget.md)

Render target to resize.

#### Returns

`void`

#### Implementation of

`RenderTargetAdaptor.resizeGpuRenderTarget`

***

### startRenderPass()

> **startRenderPass**(`renderTarget`, `clear`, `clearColor?`, `viewport?`): `void`

**`Advanced`**

Starts a render pass on the canvas target.

#### Parameters

##### renderTarget

[`RenderTarget`](rendering.RenderTarget.md)

Target to render to.

##### clear

[`CLEAR_OR_BOOL`](rendering.CLEAR_OR_BOOL.md)

Clear mode.

##### clearColor?

`number`[]

Optional clear color.

##### viewport?

[`Rectangle`](maths.Rectangle.md)

Optional viewport.

#### Returns

`void`

#### Implementation of

`RenderTargetAdaptor.startRenderPass`
