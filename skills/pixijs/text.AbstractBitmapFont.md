# Abstract Class: AbstractBitmapFont\<FontType\>

**`Advanced`**

An abstract representation of a bitmap font.

## Extends

- `EventEmitter`\<`BitmapFontEvents`\<`FontType`\>\>

## Extended by

- [`BitmapFont`](text.BitmapFont.md)

## Type Parameters

### FontType

`FontType`

## Implements

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`BitmapFontData`](text.BitmapFontData.md), `"chars"` \| `"pages"` \| `"fontSize"`\>

## Constructors

### Constructor

> **new AbstractBitmapFont**\<`FontType`\>(): `AbstractBitmapFont`\<`FontType`\>

#### Returns

`AbstractBitmapFont`\<`FontType`\>

#### Inherited from

`EventEmitter<BitmapFontEvents<FontType>>.constructor`

## Properties

### applyFillAsTint

> **applyFillAsTint**: `boolean` = `true`

should the fill for this font be applied as a tint to the text.

***

### baseLineOffset

> `readonly` **baseLineOffset**: `number` = `0`

The offset of the font face from the baseline.

#### Implementation of

[`BitmapFontData`](text.BitmapFontData.md).[`baseLineOffset`](text.BitmapFontData.html#baselineoffset)

***

### baseMeasurementFontSize

> `readonly` **baseMeasurementFontSize**: `number` = `100`

The size of the font face in pixels.

***

### chars

> `readonly` **chars**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`CharData`](text.CharData.md)\>

The map of characters by character code.

***

### distanceField

> `readonly` **distanceField**: `object`

The range and type of the distance field for this font.

#### range

> **range**: `number`

Range of the distance field in pixels

#### type

> **type**: `"none"` \| `"sdf"` \| `"msdf"`

Type of distance field

#### Implementation of

[`BitmapFontData`](text.BitmapFontData.md).[`distanceField`](text.BitmapFontData.html#distancefield)

***

### fontFamily

> `readonly` **fontFamily**: `string` = `''`

The name of the font face

#### Implementation of

[`BitmapFontData`](text.BitmapFontData.md).[`fontFamily`](text.BitmapFontData.html#fontfamily)

***

### fontMetrics

> `readonly` **fontMetrics**: [`FontMetrics`](text.FontMetrics.md)

The metrics of the font face.

***

### lineHeight

> `readonly` **lineHeight**: `number` = `0`

The line-height of the font face in pixels.

#### Implementation of

[`BitmapFontData`](text.BitmapFontData.md).[`lineHeight`](text.BitmapFontData.html#lineheight)

***

### pages

> `readonly` **pages**: `object`[] = `[]`

The map of base page textures (i.e., sheets of glyphs).

#### texture

> **texture**: [`Texture`](rendering.Texture.md)

## Accessors

### distanceFieldRange

#### Get Signature

> **get** **distanceFieldRange**(): `number`

The kind of distance field for this font or "none".

##### Deprecated

since 8.0.0 Use `distanceField.type` instead.

##### Returns

`number`

***

### distanceFieldType

#### Get Signature

> **get** **distanceFieldType**(): `"none"` \| `"sdf"` \| `"msdf"`

The range of the distance field in pixels.

##### Deprecated

since 8.0.0 Use `distanceField.range` instead.

##### Returns

`"none"` \| `"sdf"` \| `"msdf"`

***

### font

#### Get Signature

> **get** **font**(): `string`

The name of the font face.

##### Deprecated

since 8.0.0 Use `fontFamily` instead.

##### Returns

`string`

***

### pageTextures

#### Get Signature

> **get** **pageTextures**(): `object`[]

The map of base page textures (i.e., sheets of glyphs).

##### Deprecated

since 8.0.0 Use `pages` instead.

##### Returns

`object`[]

***

### size

#### Get Signature

> **get** **size**(): `number`

The size of the font face in pixels.

##### Deprecated

since 8.0.0 Use `fontMetrics.fontSize` instead.

##### Returns

`number`

## Methods

### destroy()

> **destroy**(`destroyTextures`): `void`

#### Parameters

##### destroyTextures

`boolean` = `false`

#### Returns

`void`
