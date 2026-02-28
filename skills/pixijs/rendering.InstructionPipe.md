# Interface: InstructionPipe\<INSTRUCTION\>

**`Advanced`**

An interface for a pipe that can be used to build instructions for the renderer.
InstructionPipes are specifically  used to manage the state of the renderer.
For example, the BlendModePipe is used to set the blend mode of the renderer.

## Type Parameters

### INSTRUCTION

`INSTRUCTION` *extends* [`Instruction`](rendering.Instruction.md)

## Properties

### buildEnd()?

> `optional` **buildEnd**: (`instructionSet`) => `void`

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

#### Returns

`void`

***

### buildReset()?

> `optional` **buildReset**: (`instructionSet`) => `void`

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

#### Returns

`void`

***

### buildStart()?

> `optional` **buildStart**: (`instructionSet`) => `void`

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

#### Returns

`void`

***

### execute()?

> `optional` **execute**: (`instruction`) => `void`

this is where the actual instruction is executed - eg make the draw call
activate a filter. Any instructions that have the same renderPipeId have their
execute method called

#### Parameters

##### instruction

`INSTRUCTION`

the instruction to execute

#### Returns

`void`

***

### pop()?

> `optional` **pop**: (`effect`, `targetContainer`, `instructionSet`) => `void`

Used by effect pipes to pop effects from the renderer.

#### Parameters

##### effect

[`Effect`](rendering.Effect.md)

the effect to pop

##### targetContainer

[`Container`](scene.Container.md)

the container that the effect is being applied to

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

the instruction set currently being built

#### Returns

`void`

***

### push()?

> `optional` **push**: (`effect`, `targetContainer`, `instructionSet`) => `void`

Used by the effect pipes push and pop effects to the renderer. A push effect allows
the renderer to change its state to support the effect. A pop effect allows the renderer
to return to its previous state. An example of this would be the filter effect.

#### Parameters

##### effect

[`Effect`](rendering.Effect.md)

the effect to push

##### targetContainer

[`Container`](scene.Container.md)

the container that the effect is being applied to

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

the instruction set currently being built

#### Returns

`void`

***

### renderEnd()?

> `optional` **renderEnd**: () => `void`

Called just after the render ends giving the RenderPipes a chance to do any cleanup

#### Returns

`void`

***

### renderStart()?

> `optional` **renderStart**: () => `void`

Called just before the render starts giving the RenderPipes a chance to do any setup

#### Returns

`void`

***

### upload()?

> `optional` **upload**: (`instructionSet`) => `void`

called just before we execute the draw calls , this is where the pipes have an opportunity to
upload data to the GPU. This is only called if data changes.

#### Parameters

##### instructionSet

[`InstructionSet`](rendering.InstructionSet.md)

the instruction set currently being built

#### Returns

`void`
