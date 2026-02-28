# Class: GraphicsContextSystem

**`Advanced`**

A system that manages the rendering of GraphicsContexts.

## Implements

- [`System`](rendering.System.md)\<[`GraphicsContextSystemOptions`](rendering.GraphicsContextSystemOptions.md)\>

## Constructors

### Constructor

> **new GraphicsContextSystem**(`renderer`): `GraphicsContextSystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

#### Returns

`GraphicsContextSystem`

## Properties

### defaultOptions

> `readonly` `static` **defaultOptions**: [`GraphicsContextSystemOptions`](rendering.GraphicsContextSystemOptions.md)

The default options for the GraphicsContextSystem.

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)
