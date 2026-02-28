# Interface: SpriteSheetJson

**`Advanced`**

Interface for the JSON data structure of a spritesheet.
This is used to define the structure of the JSON file that describes a spritesheet.
It includes metadata about the spritesheet and the frames it contains.

## See

 - [Spritesheet](assets.Spritesheet.md)
 - [SpritesheetData](assets.SpritesheetData.md)

## Extends

- [`SpritesheetData`](assets.SpritesheetData.md)

## Properties

### animations?

> `optional` **animations**: [`Dict`](utils.Dict.md)\<`string`[]\>

The animations of the atlas.

#### Inherited from

[`SpritesheetData`](assets.SpritesheetData.md).[`animations`](assets.SpritesheetData.html#animations)

***

### frames

> **frames**: [`Dict`](utils.Dict.md)\<[`SpritesheetFrameData`](assets.SpritesheetFrameData.md)\>

The frames of the atlas.

#### Inherited from

[`SpritesheetData`](assets.SpritesheetData.md).[`frames`](assets.SpritesheetData.html#frames)

***

### meta

> **meta**: `object`

The meta data of the atlas.

#### image

> **image**: `string`

#### related\_multi\_packs?

> `optional` **related\_multi\_packs**: `string`[]

#### scale

> **scale**: `string`

#### Overrides

[`SpritesheetData`](assets.SpritesheetData.md).[`meta`](assets.SpritesheetData.html#meta)
