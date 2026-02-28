# Class: RenderTexture

**`Advanced`**

A render texture, extends `Texture`.

## See

[Texture](rendering.Texture.md)

## Extends

- [`Texture`](rendering.Texture.md)

## Constructors

### Constructor

> **new RenderTexture**(`options`): `RenderTexture`

#### Parameters

##### options

[`TextureOptions`](rendering.TextureOptions.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> = `{}`

Options for the texture

#### Returns

`RenderTexture`

#### Inherited from

[`Texture`](rendering.Texture.md).[`constructor`](rendering.Texture.html#constructor)

## Properties

### defaultAnchor?

> `readonly` `optional` **defaultAnchor**: `object`

Anchor point that is used as default if sprite is created with this texture.
Changing the `defaultAnchor` at a later point of time will not update Sprite's anchor point.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Default

```ts
{0,0}
```

#### Inherited from

[`Texture`](rendering.Texture.md).[`defaultAnchor`](rendering.Texture.html#defaultanchor)

***

### defaultBorders?

> `readonly` `optional` **defaultBorders**: [`TextureBorders`](rendering.TextureBorders.md)

Default width of the non-scalable border that is used if 9-slice plane is created with this texture.

#### Since

7.2.0

#### See

NineSliceSprite

#### Inherited from

[`Texture`](rendering.Texture.md).[`defaultBorders`](rendering.Texture.html#defaultborders)

***

### destroyed

> `readonly` **destroyed**: `boolean`

Has the texture been destroyed?

#### Inherited from

[`Texture`](rendering.Texture.md).[`destroyed`](rendering.Texture.html#destroyed)

***

### dynamic

> **dynamic**: `boolean` = `false`

Set to true if you plan on modifying the uvs of this texture.
When this is the case, sprites and other objects using the texture will
make sure to listen for changes to the uvs and update their vertices accordingly.

#### Inherited from

[`Texture`](rendering.Texture.md).[`dynamic`](rendering.Texture.html#dynamic)

***

### frame

> `readonly` **frame**: [`Rectangle`](maths.Rectangle.md)

This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)

#### Inherited from

[`Texture`](rendering.Texture.md).[`frame`](rendering.Texture.html#frame)

***

### isTexture

> `readonly` **isTexture**: `true` = `true`

is it a texture? yes! used for type checking

#### Inherited from

[`Texture`](rendering.Texture.md).[`isTexture`](rendering.Texture.html#istexture)

***

### label?

> `optional` **label**: `string`

label used for debugging

#### Inherited from

[`Texture`](rendering.Texture.md).[`label`](rendering.Texture.html#label)

***

### noFrame

> **noFrame**: `boolean` = `false`

Does this Texture have any frame data assigned to it?

This mode is enabled automatically if no frame was passed inside constructor.

In this mode texture is subscribed to baseTexture events, and fires `update` on any change.

Beware, after loading or resize of baseTexture event can fired two times!
If you want more control, subscribe on baseTexture itself.

#### Example

```ts
texture.on('update', () => {});
```

#### Inherited from

[`Texture`](rendering.Texture.md).[`noFrame`](rendering.Texture.html#noframe)

***

### orig

> `readonly` **orig**: [`Rectangle`](maths.Rectangle.md)

This is the area of original texture, before it was put in atlas.

#### Inherited from

[`Texture`](rendering.Texture.md).[`orig`](rendering.Texture.html#orig)

***

### rotate

> `readonly` **rotate**: `number`

Indicates whether the texture is rotated inside the atlas
set to 2 to compensate for texture packer rotation
set to 6 to compensate for spine packer rotation
can be used to rotate or mirror sprites
See [groupD8](maths.groupD8.md) for explanation

#### Inherited from

[`Texture`](rendering.Texture.md).[`rotate`](rendering.Texture.html#rotate)

***

### trim

> `readonly` **trim**: [`Rectangle`](maths.Rectangle.md)

This is the trimmed area of original texture, before it was put in atlas
Please call `updateUvs()` after you change coordinates of `trim` manually.

#### Inherited from

[`Texture`](rendering.Texture.md).[`trim`](rendering.Texture.html#trim)

***

### uid

> `readonly` **uid**: `number`

unique id for this texture

#### Inherited from

[`Texture`](rendering.Texture.md).[`uid`](rendering.Texture.html#uid)

***

### uvs

> `readonly` **uvs**: [`UVs`](rendering.UVs.md)

A uvs object based on the given frame and the texture source

#### Inherited from

[`Texture`](rendering.Texture.md).[`uvs`](rendering.Texture.html#uvs)

***

### EMPTY

> `static` **EMPTY**: [`Texture`](rendering.Texture.md)

an Empty Texture used internally by the engine

#### Inherited from

[`Texture`](rendering.Texture.md).[`EMPTY`](rendering.Texture.html#empty)

***

### from()

> `static` **from**: (`id`, `skipCache?`) => [`Texture`](rendering.Texture.md)

Helper function that creates a returns Texture based on the source you provide.
The source should be loaded and ready to go. If not its best to grab the asset using Assets.

#### Parameters

##### id

[`TextureSourceLike`](rendering.TextureSourceLike.md)

String or Source to create texture from

##### skipCache?

`boolean`

Skip adding the texture to the cache

#### Returns

[`Texture`](rendering.Texture.md)

The texture based on the Id provided

#### Inherited from

[`Texture`](rendering.Texture.md).[`from`](rendering.Texture.html#from)

***

### WHITE

> `static` **WHITE**: [`Texture`](rendering.Texture.md)\<[`BufferImageSource`](rendering.BufferImageSource.md)\>

a White texture used internally by the engine

#### Inherited from

[`Texture`](rendering.Texture.md).[`WHITE`](rendering.Texture.html#white)

## Accessors

### baseTexture

#### Get Signature

> **get** **baseTexture**(): [`TextureSource`](rendering.TextureSource.md)

##### Deprecated

since 8.0.0

##### Returns

[`TextureSource`](rendering.TextureSource.md)

#### Inherited from

[`Texture`](rendering.Texture.md).[`baseTexture`](rendering.Texture.html#basetexture)

***

### height

#### Get Signature

> **get** **height**(): `number`

The height of the Texture in pixels.

##### Returns

`number`

#### Inherited from

[`Texture`](rendering.Texture.md).[`height`](rendering.Texture.html#height)

***

### source

#### Get Signature

> **get** **source**(): `TextureSourceType`

the underlying source of the texture (equivalent of baseTexture in v7)

##### Returns

`TextureSourceType`

#### Set Signature

> **set** **source**(`value`): `void`

##### Parameters

###### value

`TextureSourceType`

##### Returns

`void`

#### Inherited from

[`Texture`](rendering.Texture.md).[`source`](rendering.Texture.html#source)

***

### textureMatrix

#### Get Signature

> **get** **textureMatrix**(): [`TextureMatrix`](rendering.TextureMatrix.md)

returns a TextureMatrix instance for this texture. By default, that object is not created because its heavy.

##### Returns

[`TextureMatrix`](rendering.TextureMatrix.md)

#### Inherited from

[`Texture`](rendering.Texture.md).[`textureMatrix`](rendering.Texture.html#texturematrix)

***

### width

#### Get Signature

> **get** **width**(): `number`

The width of the Texture in pixels.

##### Returns

`number`

#### Inherited from

[`Texture`](rendering.Texture.md).[`width`](rendering.Texture.html#width)

## Methods

### destroy()

> **destroy**(`destroySource`): `void`

Destroys this texture

#### Parameters

##### destroySource

`boolean` = `false`

Destroy the source when the texture is destroyed.

#### Returns

`void`

#### Inherited from

[`Texture`](rendering.Texture.md).[`destroy`](rendering.Texture.html#destroy)

***

### resize()

> **resize**(`width`, `height`, `resolution?`): `this`

Resizes the render texture.

#### Parameters

##### width

`number`

The new width of the render texture.

##### height

`number`

The new height of the render texture.

##### resolution?

`number`

The new resolution of the render texture.

#### Returns

`this`

This texture.

***

### update()

> **update**(): `void`

Call this if you have modified the `texture outside` of the constructor.

If you have modified this texture's source, you must separately call `texture.source.update()` to see those changes.

#### Returns

`void`

#### Inherited from

[`Texture`](rendering.Texture.md).[`update`](rendering.Texture.html#update)

***

### updateUvs()

> **updateUvs**(): `void`

Call this function when you have modified the frame of this texture.

#### Returns

`void`

#### Inherited from

[`Texture`](rendering.Texture.md).[`updateUvs`](rendering.Texture.html#updateuvs)

***

### create()

> `static` **create**(`options`): `RenderTexture`

Creates a RenderTexture. Pass `dynamic: true` in options to allow resizing after creation.

#### Parameters

##### options

[`TextureSourceOptions`](rendering.TextureSourceOptions.md)

Options for the RenderTexture, including width, height, and dynamic.

#### Returns

`RenderTexture`

A new RenderTexture instance.

#### Example

```ts
const rt = RenderTexture.create({ width: 100, height: 100, dynamic: true });
rt.resize(500, 500);
```
