# Class: BitmapFont

A BitmapFont object represents a particular font face, size, and style.
This class handles both pre-loaded bitmap fonts and dynamically generated ones.

## Example

```ts
import { BitmapFont, Texture } from 'pixi.js';

// Create a bitmap font from loaded textures and data
const font = new BitmapFont({
    data: {
        pages: [{ id: 0, file: 'font.png' }],
        chars: {
            '65': { // 'A'
                id: 65,
                page: 0,
                x: 0,
                y: 0,
                width: 32,
                height: 32,
                xOffset: 0,
                yOffset: 0,
                xAdvance: 32,
                letter: 'A'
            }
        },
        fontSize: 32,
        lineHeight: 36,
        baseLineOffset: 26,
        fontFamily: 'MyFont',
        distanceField: {
            type: 'msdf',
            range: 4
        }
    },
    textures: [Texture.from('font.png')]
});

// Install a font for global use
BitmapFont.install({
    name: 'MyCustomFont',
    style: {
        fontFamily: 'Arial',
        fontSize: 32,
        fill: '#ffffff',
        stroke: { color: '#000000', width: 2 }
    }
});

// Uninstall when no longer needed
BitmapFont.uninstall('MyCustomFont');
```

## Extends

- [`AbstractBitmapFont`](text.AbstractBitmapFont.md)\<`BitmapFont`\>

## Constructors

### Constructor

> **new BitmapFont**(`options`, `url?`): `BitmapFont`

#### Parameters

##### options

[`BitmapFontOptions`](text.BitmapFontOptions.md)

##### url?

`string`

#### Returns

`BitmapFont`

#### Overrides

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`constructor`](text.AbstractBitmapFont.html#constructor)

## Properties

### applyFillAsTint

> **applyFillAsTint**: `boolean` = `true`

should the fill for this font be applied as a tint to the text.

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`applyFillAsTint`](text.AbstractBitmapFont.html#applyfillastint)

***

### baseLineOffset

> `readonly` **baseLineOffset**: `number` = `0`

The offset of the font face from the baseline.

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`baseLineOffset`](text.AbstractBitmapFont.html#baselineoffset)

***

### baseMeasurementFontSize

> `readonly` **baseMeasurementFontSize**: `number` = `100`

The size of the font face in pixels.

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`baseMeasurementFontSize`](text.AbstractBitmapFont.html#basemeasurementfontsize)

***

### chars

> `readonly` **chars**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`CharData`](text.CharData.md)\>

The map of characters by character code.

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`chars`](text.AbstractBitmapFont.html#chars)

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

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`distanceField`](text.AbstractBitmapFont.html#distancefield)

***

### fontFamily

> `readonly` **fontFamily**: `string` = `''`

The name of the font face

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`fontFamily`](text.AbstractBitmapFont.html#fontfamily)

***

### fontMetrics

> `readonly` **fontMetrics**: [`FontMetrics`](text.FontMetrics.md)

The metrics of the font face.

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`fontMetrics`](text.AbstractBitmapFont.html#fontmetrics)

***

### lineHeight

> `readonly` **lineHeight**: `number` = `0`

The line-height of the font face in pixels.

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`lineHeight`](text.AbstractBitmapFont.html#lineheight)

***

### pages

> `readonly` **pages**: `object`[] = `[]`

The map of base page textures (i.e., sheets of glyphs).

#### texture

> **texture**: [`Texture`](rendering.Texture.md)

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`pages`](text.AbstractBitmapFont.html#pages)

***

### url?

> `optional` **url**: `string`

The URL from which the font was loaded, if applicable.
This is useful for tracking font sources and reloading.

#### Example

```ts
console.log(font.url); // 'fonts/myFont.fnt'
```

## Accessors

### distanceFieldRange

#### Get Signature

> **get** **distanceFieldRange**(): `number`

The kind of distance field for this font or "none".

##### Deprecated

since 8.0.0 Use `distanceField.type` instead.

##### Returns

`number`

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`distanceFieldRange`](text.AbstractBitmapFont.html#distancefieldrange)

***

### distanceFieldType

#### Get Signature

> **get** **distanceFieldType**(): `"none"` \| `"sdf"` \| `"msdf"`

The range of the distance field in pixels.

##### Deprecated

since 8.0.0 Use `distanceField.range` instead.

##### Returns

`"none"` \| `"sdf"` \| `"msdf"`

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`distanceFieldType`](text.AbstractBitmapFont.html#distancefieldtype)

***

### font

#### Get Signature

> **get** **font**(): `string`

The name of the font face.

##### Deprecated

since 8.0.0 Use `fontFamily` instead.

##### Returns

`string`

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`font`](text.AbstractBitmapFont.html#font)

***

### pageTextures

#### Get Signature

> **get** **pageTextures**(): `object`[]

The map of base page textures (i.e., sheets of glyphs).

##### Deprecated

since 8.0.0 Use `pages` instead.

##### Returns

`object`[]

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`pageTextures`](text.AbstractBitmapFont.html#pagetextures)

***

### size

#### Get Signature

> **get** **size**(): `number`

The size of the font face in pixels.

##### Deprecated

since 8.0.0 Use `fontMetrics.fontSize` instead.

##### Returns

`number`

#### Inherited from

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`size`](text.AbstractBitmapFont.html#size)

## Methods

### destroy()

> **destroy**(): `void`

Destroys the BitmapFont object.

#### Returns

`void`

#### Overrides

[`AbstractBitmapFont`](text.AbstractBitmapFont.md).[`destroy`](text.AbstractBitmapFont.html#destroy)

***

### install()

> `static` **install**(`options`): `void`

Generates and installs a bitmap font with the specified options.
The font will be cached and available for use in BitmapText objects.

#### Parameters

##### options

[`BitmapFontInstallOptions`](text.BitmapFontInstallOptions.md)

Setup options for font generation

#### Returns

`void`

Installed font instance

#### Example

```ts
// Install a basic font
BitmapFont.install({
    name: 'Title',
    style: {
        fontFamily: 'Arial',
        fontSize: 32,
        fill: '#ffffff'
    }
});

// Install with advanced options
BitmapFont.install({
    name: 'Custom',
    style: {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: '#00ff00',
        stroke: { color: '#000000', width: 2 }
    },
    chars: [['a', 'z'], ['A', 'Z'], ['0', '9']],
    resolution: 2,
    padding: 4,
    textureStyle: {
        scaleMode: 'nearest'
    }
});
```

***

### uninstall()

> `static` **uninstall**(`name`): `void`

Uninstalls a bitmap font from the cache.
This frees up memory and resources associated with the font.

#### Parameters

##### name

`string`

The name of the bitmap font to uninstall

#### Returns

`void`

#### Example

```ts
// Remove a font when it's no longer needed
BitmapFont.uninstall('MyCustomFont');

// Clear multiple fonts
['Title', 'Heading', 'Body'].forEach(BitmapFont.uninstall);
```
