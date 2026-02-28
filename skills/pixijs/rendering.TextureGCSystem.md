# ~~Class: TextureGCSystem~~

**`Advanced`**

System plugin to the renderer to manage texture garbage collection on the GPU,
ensuring that it does not get clogged up with textures that are no longer being used.

## Deprecated

since 8.15.0

## See

[GCSystem](rendering.GCSystem.md)

## Implements

- [`System`](rendering.System.md)\<[`TextureGCSystemOptions`](rendering.TextureGCSystemOptions.md)\>

## Constructors

### Constructor

> **new TextureGCSystem**(`renderer`): `TextureGCSystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

The renderer this System works for.

#### Returns

`TextureGCSystem`

## Properties

### ~~defaultOptions~~

> `static` **defaultOptions**: [`TextureGCSystemOptions`](rendering.TextureGCSystemOptions.md)

Default options for the TextureGCSystem

#### Deprecated

since 8.15.0

## Accessors

### ~~active~~

#### Get Signature

> **get** **active**(): `boolean`

Current garbage collection mode.

##### See

TextureGCSystem.defaultMode

##### Deprecated

since 8.15.0

##### Returns

`boolean`

#### Set Signature

> **set** **active**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ~~checkCount~~

#### Get Signature

> **get** **checkCount**(): `number`

Frame count since last garbage collection.

##### Deprecated

since 8.15.0

##### Returns

`number`

***

### ~~checkCountMax~~

#### Get Signature

> **get** **checkCountMax**(): `number`

Frames between two garbage collections.

##### See

TextureGCSystem.defaultCheckCountMax

##### Deprecated

since 8.15.0

##### Returns

`number`

#### Set Signature

> **set** **checkCountMax**(`_value`): `void`

##### Parameters

###### \_value

`number`

##### Returns

`void`

***

### ~~count~~

#### Get Signature

> **get** **count**(): `number`

Frame count since started.

##### Deprecated

since 8.15.0

##### Returns

`number`

***

### ~~maxIdle~~

#### Get Signature

> **get** **maxIdle**(): `number`

Maximum idle frames before a texture is destroyed by garbage collection.

##### See

TextureGCSystem.defaultMaxIdle

##### Deprecated

since 8.15.0

##### Returns

`number`

#### Set Signature

> **set** **maxIdle**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### ~~destroy()~~

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### ~~init()~~

> **init**(`options`): `void`

#### Parameters

##### options

[`TextureGCSystemOptions`](rendering.TextureGCSystemOptions.md)

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`init`](rendering.System.html#init)

***

### ~~run()~~

> **run**(): `void`

Checks to see when the last time a texture was used.
If the texture has not been used for a specified amount of time, it will be removed from the GPU.

#### Returns

`void`

#### Deprecated

since 8.15.0
