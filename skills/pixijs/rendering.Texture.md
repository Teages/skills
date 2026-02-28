# Class: Texture\<TextureSourceType\>

A texture stores the information that represents an image or part of an image.

A texture must have a loaded resource passed to it to work. It does not contain any
loading mechanisms.

The Assets class can be used to load a texture from a file. This is the recommended
way as it will handle the loading and caching for you.

```js

const texture = await Assets.load('assets/image.png');

// once Assets has loaded the image it will be available via the from method
const sameTexture = Texture.from('assets/image.png');
// another way to access the texture once loaded
const sameAgainTexture = Assets.get('assets/image.png');

const sprite1 = new Sprite(texture);

```

It cannot be added to the display list directly; instead use it as the texture for a Sprite.
If no frame is provided for a texture, then the whole image is used.

You can directly create a texture from an image and then reuse it multiple times like this :

```js
import { Sprite, Texture } from 'pixi.js';

const texture = await Assets.load('assets/image.png');
const sprite1 = new Sprite(texture);
const sprite2 = new Sprite(texture);
```

If you didn't pass the texture frame to constructor, it enables `noFrame` mode:
it subscribes on baseTexture events, it automatically resizes at the same time as baseTexture.

## Extends

- `EventEmitter`\<\{ `destroy`: `Texture`; `update`: `Texture`; \}\>

## Extended by

- [`RenderTexture`](rendering.RenderTexture.md)

## Type Parameters

### TextureSourceType

`TextureSourceType` *extends* [`TextureSource`](rendering.TextureSource.md) = [`TextureSource`](rendering.TextureSource.md)

## Implements

- [`BindableTexture`](rendering.BindableTexture.md)

## Constructors

### Constructor

> **new Texture**\<`TextureSourceType`\>(`options`): `Texture`\<`TextureSourceType`\>

#### Parameters

##### options

[`TextureOptions`](rendering.TextureOptions.md)\<`TextureSourceType`\> = `{}`

Options for the texture

#### Returns

`Texture`\<`TextureSourceType`\>

#### Overrides

`EventEmitter<{ update: Texture destroy: Texture }>.constructor`

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

***

### defaultBorders?

> `readonly` `optional` **defaultBorders**: [`TextureBorders`](rendering.TextureBorders.md)

Default width of the non-scalable border that is used if 9-slice plane is created with this texture.

#### Since

7.2.0

#### See

NineSliceSprite

***

### destroyed

> `readonly` **destroyed**: `boolean`

Has the texture been destroyed?

***

### dynamic

> **dynamic**: `boolean` = `false`

Set to true if you plan on modifying the uvs of this texture.
When this is the case, sprites and other objects using the texture will
make sure to listen for changes to the uvs and update their vertices accordingly.

***

### frame

> `readonly` **frame**: [`Rectangle`](maths.Rectangle.md)

This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)

***

### isTexture

> `readonly` **isTexture**: `true` = `true`

is it a texture? yes! used for type checking

***

### label?

> `optional` **label**: `string`

label used for debugging

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

***

### orig

> `readonly` **orig**: [`Rectangle`](maths.Rectangle.md)

This is the area of original texture, before it was put in atlas.

***

### rotate

> `readonly` **rotate**: `number`

Indicates whether the texture is rotated inside the atlas
set to 2 to compensate for texture packer rotation
set to 6 to compensate for spine packer rotation
can be used to rotate or mirror sprites
See [groupD8](maths.groupD8.md) for explanation

***

### trim

> `readonly` **trim**: [`Rectangle`](maths.Rectangle.md)

This is the trimmed area of original texture, before it was put in atlas
Please call `updateUvs()` after you change coordinates of `trim` manually.

***

### uid

> `readonly` **uid**: `number`

unique id for this texture

***

### uvs

> `readonly` **uvs**: [`UVs`](rendering.UVs.md)

A uvs object based on the given frame and the texture source

***

### EMPTY

> `static` **EMPTY**: `Texture`

an Empty Texture used internally by the engine

***

### from()

> `static` **from**: (`id`, `skipCache?`) => `Texture`

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

`Texture`

The texture based on the Id provided

***

### WHITE

> `static` **WHITE**: `Texture`\<[`BufferImageSource`](rendering.BufferImageSource.md)\>

a White texture used internally by the engine

## Accessors

### baseTexture

#### Get Signature

> **get** **baseTexture**(): [`TextureSource`](rendering.TextureSource.md)

##### Deprecated

since 8.0.0

##### Returns

[`TextureSource`](rendering.TextureSource.md)

***

### height

#### Get Signature

> **get** **height**(): `number`

The height of the Texture in pixels.

##### Returns

`number`

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

#### Implementation of

[`BindableTexture`](rendering.BindableTexture.md).[`source`](rendering.BindableTexture.html#source)

***

### textureMatrix

#### Get Signature

> **get** **textureMatrix**(): [`TextureMatrix`](rendering.TextureMatrix.md)

returns a TextureMatrix instance for this texture. By default, that object is not created because its heavy.

##### Returns

[`TextureMatrix`](rendering.TextureMatrix.md)

***

### width

#### Get Signature

> **get** **width**(): `number`

The width of the Texture in pixels.

##### Returns

`number`

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

***

### update()

> **update**(): `void`

Call this if you have modified the `texture outside` of the constructor.

If you have modified this texture's source, you must separately call `texture.source.update()` to see those changes.

#### Returns

`void`

***

### updateUvs()

> **updateUvs**(): `void`

Call this function when you have modified the frame of this texture.

#### Returns

`void`
