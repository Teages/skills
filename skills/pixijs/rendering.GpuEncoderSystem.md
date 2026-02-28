# Class: GpuEncoderSystem

**`Advanced`**

The system that handles encoding commands for the GPU.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GpuEncoderSystem**(`renderer`): `GpuEncoderSystem`

#### Parameters

##### renderer

[`WebGPURenderer`](rendering.WebGPURenderer.md)

#### Returns

`GpuEncoderSystem`

## Properties

### commandEncoder

> **commandEncoder**: [`GPUCommandEncoder`](https://developer.mozilla.org/docs/Web/API/GPUCommandEncoder)

***

### commandFinished

> **commandFinished**: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### renderPassEncoder

> **renderPassEncoder**: [`GPURenderPassEncoder`](https://developer.mozilla.org/docs/Web/API/GPURenderPassEncoder)

## Methods

### beginRenderPass()

> **beginRenderPass**(`gpuRenderTarget`): `void`

#### Parameters

##### gpuRenderTarget

`GpuRenderTarget`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### draw()

> **draw**(`options`): `void`

#### Parameters

##### options

###### geometry

[`Geometry`](rendering.Geometry.md)

###### instanceCount?

`number`

###### shader

[`Shader`](rendering.Shader.md)

###### size?

`number`

###### skipSync?

`boolean`

###### start?

`number`

###### state?

[`State`](rendering.State.md)

###### topology?

[`Topology`](rendering.Topology.md)

#### Returns

`void`

***

### endRenderPass()

> **endRenderPass**(): `void`

#### Returns

`void`

***

### finishRenderPass()

> **finishRenderPass**(): `void`

#### Returns

`void`

***

### postrender()

> **postrender**(): `void`

#### Returns

`void`

***

### renderStart()

> **renderStart**(): `void`

#### Returns

`void`

***

### resetBindGroup()

> **resetBindGroup**(`index`): `void`

#### Parameters

##### index

`number`

#### Returns

`void`

***

### restoreRenderPass()

> **restoreRenderPass**(): `void`

#### Returns

`void`

***

### setBindGroup()

> **setBindGroup**(`index`, `bindGroup`, `program`): `void`

#### Parameters

##### index

`number`

##### bindGroup

[`BindGroup`](rendering.BindGroup.md)

##### program

[`GpuProgram`](rendering.GpuProgram.md)

#### Returns

`void`

***

### setGeometry()

> **setGeometry**(`geometry`, `program`): `void`

#### Parameters

##### geometry

[`Geometry`](rendering.Geometry.md)

##### program

[`GpuProgram`](rendering.GpuProgram.md)

#### Returns

`void`

***

### setPipeline()

> **setPipeline**(`pipeline`): `void`

#### Parameters

##### pipeline

[`GPURenderPipeline`](https://developer.mozilla.org/docs/Web/API/GPURenderPipeline)

#### Returns

`void`

***

### setPipelineFromGeometryProgramAndState()

> **setPipelineFromGeometryProgramAndState**(`geometry`, `program`, `state`, `topology?`): `void`

#### Parameters

##### geometry

[`Geometry`](rendering.Geometry.md)

##### program

[`GpuProgram`](rendering.GpuProgram.md)

##### state

`any`

##### topology?

[`Topology`](rendering.Topology.md)

#### Returns

`void`

***

### setViewport()

> **setViewport**(`viewport`): `void`

#### Parameters

##### viewport

[`Rectangle`](maths.Rectangle.md)

#### Returns

`void`
