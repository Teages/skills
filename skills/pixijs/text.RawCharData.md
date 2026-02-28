# Interface: RawCharData

**`Advanced`**

The raw data of a character in a bitmap font.

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`CharData`](text.CharData.md), `"texture"`\>

## Properties

### height

> **height**: `number`

The height of the character in the page.

***

### id

> **id**: `number`

Unique id of character

#### Inherited from

[`CharData`](text.CharData.md).[`id`](text.CharData.html#id)

***

### kerning

> **kerning**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `number`\>

The kerning values for this character.

#### Inherited from

[`CharData`](text.CharData.md).[`kerning`](text.CharData.html#kerning)

***

### letter

> **letter**: `string`

The letter of the character.

***

### page

> **page**: `number`

The page of the font texture that the character is on.

***

### width

> **width**: `number`

The width of the character in the page.

***

### x

> **x**: `number`

The x position of the character in the page.

***

### xAdvance

> **xAdvance**: `number`

Advancement to apply to next character.

#### Inherited from

[`CharData`](text.CharData.md).[`xAdvance`](text.CharData.html#xadvance)

***

### xOffset

> **xOffset**: `number`

x-offset to apply when rendering character

#### Inherited from

[`CharData`](text.CharData.md).[`xOffset`](text.CharData.html#xoffset)

***

### y

> **y**: `number`

The y position of the character in the page.

***

### yOffset

> **yOffset**: `number`

y-offset to apply when rendering character.

#### Inherited from

[`CharData`](text.CharData.md).[`yOffset`](text.CharData.html#yoffset)
