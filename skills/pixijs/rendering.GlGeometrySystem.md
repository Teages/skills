# Class: GlGeometrySystem

**`Advanced`**

System plugin to the renderer to manage geometry.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GlGeometrySystem**(`renderer`): `GlGeometrySystem`

#### Parameters

##### renderer

[`WebGLRenderer`](rendering.WebGLRenderer.md)

The renderer this System works for.

#### Returns

`GlGeometrySystem`

## Properties

### hasInstance

> `readonly` **hasInstance**: `boolean`

`true` if has `ANGLE_instanced_arrays` extension.

***

### hasVao

> `readonly` **hasVao**: `boolean`

`true` if we has `*_vertex_array_object` extension.

## Methods

### bind()

> **bind**(`geometry?`, `program?`): `void`

Binds geometry so that is can be drawn. Creating a Vao if required

#### Parameters

##### geometry?

[`Geometry`](rendering.Geometry.md)

Instance of geometry to bind.

##### program?

[`GlProgram`](rendering.GlProgram.md)

Instance of program to use vao for.

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

### destroyAll()

> **destroyAll**(`contextLost?`): `void`

Dispose all WebGL resources of all managed geometries.

#### Parameters

##### contextLost?

`boolean` = `false`

If context was lost, we suppress `gl.delete` calls

#### Returns

`void`

***

### draw()

> **draw**(`topology?`, `size?`, `start?`, `instanceCount?`): `this`

Draws the currently bound geometry.

#### Parameters

##### topology?

[`Topology`](rendering.Topology.md)

The type primitive to render.

##### size?

`number`

The number of elements to be rendered. If not specified, all vertices after the
 starting vertex will be drawn.

##### start?

`number`

The starting vertex in the geometry to start drawing from. If not specified,
 drawing will start from the first vertex.

##### instanceCount?

`number`

The number of instances of the set of elements to execute. If not specified,
 all instances will be drawn.

#### Returns

`this`

This instance of the geometry system.

***

### resetState()

> **resetState**(): `void`

Reset and unbind any active VAO and geometry.

#### Returns

`void`

***

### updateBuffers()

> **updateBuffers**(): `void`

Update buffers of the currently bound geometry.

#### Returns

`void`
