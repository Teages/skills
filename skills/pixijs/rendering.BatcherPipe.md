# Class: BatcherPipe

**`Advanced`**

A pipe that batches elements into batches and sends them to the renderer.

You can install new Batchers using ExtensionType.Batcher. Each render group will
have a default batcher and any required ones will be created on demand.

## Implements

- [`InstructionPipe`](rendering.InstructionPipe.md)\<[`Batch`](rendering.Batch.md)\>
- [`BatchPipe`](rendering.BatchPipe.md)

## Constructors

### Constructor

> **new BatcherPipe**(`renderer`, `adaptor`): `BatcherPipe`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

##### adaptor

`BatcherAdaptor`

#### Returns

`BatcherPipe`

## Properties

### renderer

> **renderer**: [`Renderer`](rendering.Renderer.md)

***

### state

> **state**: [`State`](rendering.State.md)

***

### \_availableBatchers

> `static` **\_availableBatchers**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, () => [`Batcher`](rendering.Batcher.md)\>

## Methods

### addToBatch()

> **addToBatch**(`batchableObject`, `instructionSet`): `void`

Add a add a batchable object to the batch.

#### Parameters

##### batchableObject

[`BatchableElement`](rendering.BatchableElement.md)

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

the instruction set currently being built

#### Returns

`void`

#### Implementation of

[`BatchPipe`](rendering.BatchPipe.md).[`addToBatch`](rendering.BatchPipe.html#addtobatch)

***

### break()

> **break**(`instructionSet`): `void`

Forces the batch to break. This can happen if for example you need to render everything and then
change the render target.

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

the instruction set currently being built

#### Returns

`void`

#### Implementation of

[`BatchPipe`](rendering.BatchPipe.md).[`break`](rendering.BatchPipe.html#break)

***

### buildEnd()

> **buildEnd**(`instructionSet`): `void`

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

#### Returns

`void`

#### Implementation of

[`InstructionPipe`](rendering.InstructionPipe.md).[`buildEnd`](rendering.InstructionPipe.html#buildend)

***

### buildStart()

> **buildStart**(`instructionSet`): `void`

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

#### Returns

`void`

#### Implementation of

[`InstructionPipe`](rendering.InstructionPipe.md).[`buildStart`](rendering.InstructionPipe.html#buildstart)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### execute()

> **execute**(`batch`): `void`

this is where the actual instruction is executed - eg make the draw call
activate a filter. Any instructions that have the same renderPipeId have their
execute method called

#### Parameters

##### batch

[`Batch`](rendering.Batch.md)

#### Returns

`void`

#### Implementation of

[`InstructionPipe`](rendering.InstructionPipe.md).[`execute`](rendering.InstructionPipe.html#execute)

***

### upload()

> **upload**(`instructionSet`): `void`

called just before we execute the draw calls , this is where the pipes have an opportunity to
upload data to the GPU. This is only called if data changes.

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

the instruction set currently being built

#### Returns

`void`

#### Implementation of

[`InstructionPipe`](rendering.InstructionPipe.md).[`upload`](rendering.InstructionPipe.html#upload)

***

### getBatcher()

> `static` **getBatcher**(`name`): [`Batcher`](rendering.Batcher.md)

#### Parameters

##### name

`string`

#### Returns

[`Batcher`](rendering.Batcher.md)
