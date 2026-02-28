# Class: CanvasGraphicsContextSystem

**`Advanced`**

A system that manages the rendering of GraphicsContexts for Canvas2D.

## Implements

- [`System`](rendering.System.md)\<[`GraphicsContextSystemOptions`](rendering.GraphicsContextSystemOptions.md)\>

## Constructors

### Constructor

> **new CanvasGraphicsContextSystem**(`renderer`): `CanvasGraphicsContextSystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

#### Returns

`CanvasGraphicsContextSystem`

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
