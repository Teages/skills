# Class: Batch

**`Advanced`**

A batch pool is used to store batches when they are not currently in use.

## Implements

- [`Instruction`](rendering.Instruction.md)

## Constructors

### Constructor

> **new Batch**(): `Batch`

#### Returns

`Batch`

## Properties

### action

> **action**: [`BatchAction`](rendering.BatchAction.md) = `'startBatch'`

the name of the instruction

#### Implementation of

[`Instruction`](rendering.Instruction.md).[`action`](rendering.Instruction.html#action)

***

### batcher

> **batcher**: [`Batcher`](rendering.Batcher.md)

***

### bindGroup

> **bindGroup**: [`BindGroup`](rendering.BindGroup.md)

breaking rules slightly here in the name of performance..
storing references to these bindgroups here is just faster for access!
keeps a reference to the bind group to set when rendering this batch for WebGPU. Will be null if using WebGl.

***

### blendMode

> **blendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md) = `'normal'`

***

### canBundle

> **canBundle**: `boolean` = `true`

true if this instruction can be compiled into a WebGPU bundle

#### Implementation of

[`Instruction`](rendering.Instruction.md).[`canBundle`](rendering.Instruction.html#canbundle)

***

### elements

> **elements**: [`BatchableElement`](rendering.BatchableElement.md)[]

Elements contained in this batch. Used by the Canvas renderer.

***

### gpuBindGroup

> **gpuBindGroup**: [`GPUBindGroup`](https://developer.mozilla.org/docs/Web/API/GPUBindGroup)

breaking rules slightly here in the name of performance..
storing references to these bindgroups here is just faster for access!
keeps a reference to the GPU bind group to set when rendering this batch for WebGPU. Will be null is using WebGL.

***

### renderPipeId

> **renderPipeId**: `string` = `'batch'`

a the id of the render pipe that can run this instruction

#### Implementation of

[`Instruction`](rendering.Instruction.md).[`renderPipeId`](rendering.Instruction.html#renderpipeid)

***

### size

> **size**: `number` = `0`

***

### start

> **start**: `number` = `0`

***

### textures

> **textures**: [`BatchTextureArray`](rendering.BatchTextureArray.md)

***

### topology

> **topology**: [`Topology`](rendering.Topology.md) = `'triangle-strip'`

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`
