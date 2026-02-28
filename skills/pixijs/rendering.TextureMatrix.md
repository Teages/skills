# Class: TextureMatrix

**`Advanced`**

Class controls uv mapping from Texture normal space to BaseTexture normal space.

Takes `trim` and `rotate` into account. May contain clamp settings for Meshes and TilingSprite.

Can be used in Texture `uvMatrix` field, or separately, you can use different clamp settings on the same texture.
If you want to add support for texture region of certain feature or filter, that's what you're looking for.

Takes track of Texture changes through `_lastTextureID` private field.
Use `update()` method call to track it from outside.

## See

 - Texture
 - Mesh
 - TilingSprite

## Constructors

### Constructor

> **new TextureMatrix**(`texture`, `clampMargin?`): `TextureMatrix`

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

observed texture

##### clampMargin?

`number`

Changes frame clamping, 0.5 by default. Use -0.5 for extra border.

#### Returns

`TextureMatrix`

## Properties

### clampMargin

> **clampMargin**: `number`

Changes frame clamping
Works with TilingSprite and Mesh
Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas

#### Default

```ts
0.5
```

***

### clampOffset

> **clampOffset**: `number`

Changes frame clamping
Works with TilingSprite and Mesh
Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders

#### Default

```ts
0
```

***

### isSimple

> `readonly` **isSimple**: `boolean`

If texture size is the same as baseTexture.

#### Default

```ts
false
@readonly
```

***

### mapCoord

> `readonly` **mapCoord**: [`Matrix`](maths.Matrix.md)

Matrix operation that converts texture region coords to texture coords

***

### uClampFrame

> `readonly` **uClampFrame**: [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

Clamp region for normalized coords, left-top pixel center in xy , bottom-right in zw.
Calculated based on clampOffset.

***

### uClampOffset

> `readonly` **uClampOffset**: [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

Normalized clamp offset. Calculated based on clampOffset.

## Accessors

### texture

#### Get Signature

> **get** **texture**(): [`Texture`](rendering.Texture.md)

Texture property.

##### Returns

[`Texture`](rendering.Texture.md)

#### Set Signature

> **set** **texture**(`value`): `void`

##### Parameters

###### value

[`Texture`](rendering.Texture.md)

##### Returns

`void`

## Methods

### multiplyUvs()

> **multiplyUvs**(`uvs`, `out?`): [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

Multiplies uvs array to transform

#### Parameters

##### uvs

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

mesh uvs

##### out?

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

output

#### Returns

[`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

- output

***

### update()

> **update**(): `boolean`

Updates matrices if texture was changed

#### Returns

`boolean`

- whether or not it was updated
