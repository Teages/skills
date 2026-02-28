# Class: HelloSystem

**`Advanced`**

A simple system responsible for initiating the renderer.

## Implements

- [`System`](rendering.System.md)\<[`HelloSystemOptions`](rendering.HelloSystemOptions.md)\>

## Constructors

### Constructor

> **new HelloSystem**(`renderer`): `HelloSystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

#### Returns

`HelloSystem`

## Properties

### defaultOptions

> `static` **defaultOptions**: [`HelloSystemOptions`](rendering.HelloSystemOptions.md)

The default options for the system.

## Methods

### init()

> **init**(`options`): `void`

It all starts here! This initiates every system, passing in the options for any system by name.

#### Parameters

##### options

[`HelloSystemOptions`](rendering.HelloSystemOptions.md)

the config for the renderer and all its systems

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)
