# Interface: BatchPipe

**`Advanced`**

An interface for a pipe that can be used to build instructions for the renderer.
BatchPipes are specifically used to build and render Batches.

## Properties

### addToBatch()

> **addToBatch**: (`renderable`, `instructionSet`) => `void`

Add a add a batchable object to the batch.

#### Parameters

##### renderable

[`BatchableElement`](rendering.BatchableElement.md)

a batchable object that can be added to the batch

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

the instruction set currently being built

#### Returns

`void`

***

### break()

> **break**: (`instructionSet`) => `void`

Forces the batch to break. This can happen if for example you need to render everything and then
change the render target.

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

the instruction set currently being built

#### Returns

`void`
