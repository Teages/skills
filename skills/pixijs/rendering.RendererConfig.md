# Interface: RendererConfig

**`Advanced`**

The configuration for the renderer.
This is used to define the systems and render pipes that will be used by the renderer.

## Properties

### name

> **name**: `string`

***

### renderPipeAdaptors

> **renderPipeAdaptors**: `object`[]

#### name

> **name**: `string`

#### value

> **value**: `any`

***

### renderPipes

> **renderPipes**: `object`[]

#### name

> **name**: `string`

#### value

> **value**: [`PipeConstructor`](rendering.PipeConstructor.md)

***

### runners?

> `optional` **runners**: `string`[]

***

### systems

> **systems**: `object`[]

#### name

> **name**: `string`

#### value

> **value**: [`SystemConstructor`](rendering.SystemConstructor.md)

***

### type

> **type**: `number`
