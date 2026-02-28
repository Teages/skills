# Class: GlobalUniformSystem

**`Advanced`**

System plugin to the renderer to manage global uniforms for the renderer.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GlobalUniformSystem**(`renderer`): `GlobalUniformSystem`

#### Parameters

##### renderer

`GlobalUniformRenderer`

#### Returns

`GlobalUniformSystem`

## Accessors

### bindGroup

#### Get Signature

> **get** **bindGroup**(): [`BindGroup`](rendering.BindGroup.md)

##### Returns

[`BindGroup`](rendering.BindGroup.md)

***

### globalUniformData

#### Get Signature

> **get** **globalUniformData**(): [`GlobalUniformData`](rendering.GlobalUniformData.md)

##### Returns

[`GlobalUniformData`](rendering.GlobalUniformData.md)

***

### uniformGroup

#### Get Signature

> **get** **uniformGroup**(): [`UniformGroup`](rendering.UniformGroup.md)\<`any`\>

##### Returns

[`UniformGroup`](rendering.UniformGroup.md)\<`any`\>

## Methods

### bind()

> **bind**(`__namedParameters`): `void`

#### Parameters

##### \_\_namedParameters

[`GlobalUniformOptions`](rendering.GlobalUniformOptions.md)

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

### pop()

> **pop**(): `void`

#### Returns

`void`

***

### push()

> **push**(`options`): `void`

#### Parameters

##### options

[`GlobalUniformOptions`](rendering.GlobalUniformOptions.md)

#### Returns

`void`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### start()

> **start**(`options`): `void`

#### Parameters

##### options

[`GlobalUniformOptions`](rendering.GlobalUniformOptions.md)

#### Returns

`void`
