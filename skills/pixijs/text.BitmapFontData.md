# Interface: BitmapFontData

**`Advanced`**

The raw data of a bitmap font.

## Properties

### baseLineOffset

> **baseLineOffset**: `number`

The offset of the font face from the baseline.

***

### chars

> **chars**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`RawCharData`](text.RawCharData.md)\>

The map of characters by character code.

***

### distanceField?

> `optional` **distanceField**: `object`

The range and type of the distance field for this font.

#### range

> **range**: `number`

Range of the distance field in pixels

#### type

> **type**: `"none"` \| `"sdf"` \| `"msdf"`

Type of distance field

***

### fontFamily

> **fontFamily**: `string`

The name of the font face.

***

### fontSize

> **fontSize**: `number`

The size of the font face in pixels.

***

### lineHeight

> **lineHeight**: `number`

The line-height of the font face in pixels.

***

### pages

> **pages**: `object`[]

The map of base page textures (i.e., sheets of glyphs).

#### file

> **file**: `string`

File name

#### id

> **id**: `number`

Unique id for bitmap texture
