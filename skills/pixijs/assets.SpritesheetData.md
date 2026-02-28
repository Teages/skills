# Interface: SpritesheetData

**`Advanced`**

Atlas format.

## Extended by

- [`SpriteSheetJson`](assets.SpriteSheetJson.md)

## Properties

### animations?

> `optional` **animations**: [`Dict`](utils.Dict.md)\<`string`[]\>

The animations of the atlas.

***

### frames

> **frames**: [`Dict`](utils.Dict.md)\<[`SpritesheetFrameData`](assets.SpritesheetFrameData.md)\>

The frames of the atlas.

***

### meta

> **meta**: `object`

The meta data of the atlas.

#### app?

> `optional` **app**: `string`

#### format?

> `optional` **format**: `string`

#### frameTags?

> `optional` **frameTags**: `object`[]

#### image?

> `optional` **image**: `string`

#### layers?

> `optional` **layers**: `object`[]

#### related\_multi\_packs?

> `optional` **related\_multi\_packs**: `string`[]

#### scale

> **scale**: `string` \| `number`

#### size?

> `optional` **size**: `object`

##### size.h

> **h**: `number`

##### size.w

> **w**: `number`

#### slices?

> `optional` **slices**: `object`[]

#### version?

> `optional` **version**: `string`
