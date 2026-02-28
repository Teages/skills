# Class: GlEncoderSystem

**`Advanced`**

The system that handles encoding commands for the WebGL.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GlEncoderSystem**(`renderer`): `GlEncoderSystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

#### Returns

`GlEncoderSystem`

## Properties

### commandFinished

> `readonly` **commandFinished**: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

## Methods

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

### finishRenderPass()

> **finishRenderPass**(): `void`

#### Returns

`void`

***

### setGeometry()

> **setGeometry**(`geometry`, `shader?`): `void`

#### Parameters

##### geometry

[`Geometry`](rendering.Geometry.md)

##### shader?

[`Shader`](rendering.Shader.md)

#### Returns

`void`
