# Interface: Instruction

**`Advanced`**

An instruction that can be executed by the renderer

## Properties

### action?

> `optional` **action**: `string`

the name of the instruction

***

### canBundle

> **canBundle**: `boolean`

true if this instruction can be compiled into a WebGPU bundle

***

### renderPipeId

> **renderPipeId**: `string`

a the id of the render pipe that can run this instruction
