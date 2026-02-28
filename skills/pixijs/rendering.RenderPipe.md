# Interface: RenderPipe\<RENDERABLE\>

**`Advanced`**

An interface for a pipe that can be used to build instructions for the renderer.
RenderPipes are specifically used to render Renderables like a Mesh.

## Type Parameters

### RENDERABLE

`RENDERABLE` = `Renderable`

## Properties

### addRenderable()

> **addRenderable**: (`renderable`, `instructionSet`) => `void`

This is where the renderable is added to the instruction set. This is called once per renderable.
For instance, a MeshRenderPipe could be used to enqueue a 'draw mesh' command
to the rendering instruction set, catering to the rendering of mesh geometry.
In more complex scenarios, such as the SpritePipe, this seamlessly coordinates
with a batchPipe to efficiently batch and add batch instructions to the instructions set

Add is called when the instructions set is being built.

#### Parameters

##### renderable

`RENDERABLE`

the renderable that needs to be rendered

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

the instruction set currently being built

#### Returns

`void`

***

### destroyRenderable()?

> `optional` **destroyRenderable**: (`renderable`) => `void`

Called whenever a renderable is destroyed, often the pipes keep a webGL / webGPU specific representation
of the renderable that needs to be tidied up when the renderable is destroyed.

#### Parameters

##### renderable

`RENDERABLE`

the renderable that needs to be rendered

#### Returns

`void`

***

### updateRenderable()

> **updateRenderable**: (`renderable`) => `void`

Called whenever a renderable has been been updated, eg its position has changed.
This is only called in the render loop if the instructions set is being reused
from the last frame. Otherwise addRenderable is called.

#### Parameters

##### renderable

`RENDERABLE`

the renderable that needs to be rendered

#### Returns

`void`

***

### validateRenderable()

> **validateRenderable**: (`renderable`) => `boolean`

This function is called when the renderer is determining if it can use the same instruction set again to
improve performance. If this function returns true, the renderer will rebuild the whole instruction set
for the scene. This is only called if the scene has not its changed its structure .

#### Parameters

##### renderable

`RENDERABLE`

#### Returns

`boolean`
