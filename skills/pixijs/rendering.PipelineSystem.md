# Class: PipelineSystem

**`Advanced`**

A system that creates and manages the GPU pipelines.

Caching Mechanism: At its core, the system employs a two-tiered caching strategy to minimize
the redundant creation of GPU pipelines (or "pipes"). This strategy is based on generating unique
keys that represent the state of the graphics settings and the specific requirements of the
item being rendered. By caching these pipelines, subsequent draw calls with identical configurations
can reuse existing pipelines instead of generating new ones.

State Management: The system differentiates between "global" state properties (like color masks
and stencil masks, which do not change frequently) and properties that may vary between draw calls
(such as geometry, shaders, and blend modes). Unique keys are generated for both these categories
using getStateKey for global state and getGraphicsStateKey for draw-specific settings. These keys are
then then used to caching the pipe. The next time we need a pipe we can check
the cache by first looking at the state cache and then the pipe cache.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new PipelineSystem**(`renderer`): `PipelineSystem`

#### Parameters

##### renderer

[`WebGPURenderer`](rendering.WebGPURenderer.md)

#### Returns

`PipelineSystem`

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### getBufferNamesToBind()

> **getBufferNamesToBind**(`geometry`, `program`): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Returns a hash of buffer names mapped to bind locations.
This is used to bind the correct buffer to the correct location in the shader.

#### Parameters

##### geometry

[`Geometry`](rendering.Geometry.md)

The geometry where to get the buffer names

##### program

[`GpuProgram`](rendering.GpuProgram.md)

The program where to get the buffer names

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

An object of buffer names mapped to the bind location.

***

### getPipeline()

> **getPipeline**(`geometry`, `program`, `state`, `topology?`): [`GPURenderPipeline`](https://developer.mozilla.org/docs/Web/API/GPURenderPipeline)

#### Parameters

##### geometry

[`Geometry`](rendering.Geometry.md)

##### program

[`GpuProgram`](rendering.GpuProgram.md)

##### state

[`State`](rendering.State.md)

##### topology?

[`Topology`](rendering.Topology.md)

#### Returns

[`GPURenderPipeline`](https://developer.mozilla.org/docs/Web/API/GPURenderPipeline)

***

### setColorMask()

> **setColorMask**(`colorMask`): `void`

#### Parameters

##### colorMask

`number`

#### Returns

`void`

***

### setMultisampleCount()

> **setMultisampleCount**(`multisampleCount`): `void`

#### Parameters

##### multisampleCount

`number`

#### Returns

`void`

***

### setPipeline()

> **setPipeline**(`geometry`, `program`, `state`, `passEncoder`): `void`

#### Parameters

##### geometry

[`Geometry`](rendering.Geometry.md)

##### program

[`GpuProgram`](rendering.GpuProgram.md)

##### state

[`State`](rendering.State.md)

##### passEncoder

[`GPURenderPassEncoder`](https://developer.mozilla.org/docs/Web/API/GPURenderPassEncoder)

#### Returns

`void`

***

### setRenderTarget()

> **setRenderTarget**(`renderTarget`): `void`

#### Parameters

##### renderTarget

`GpuRenderTarget`

#### Returns

`void`

***

### setStencilMode()

> **setStencilMode**(`stencilMode`): `void`

#### Parameters

##### stencilMode

[`STENCIL_MODES`](rendering.STENCIL_MODES.md)

#### Returns

`void`
