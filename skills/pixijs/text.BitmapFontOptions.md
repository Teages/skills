# Interface: BitmapFontOptions

Options for creating a BitmapFont. Used when loading or creating bitmap fonts from existing textures and data.

## Example

```ts
import { BitmapFont, Texture } from 'pixi.js';

// Create a bitmap font from loaded textures and data
const font = new BitmapFont({
    // Font data containing character metrics and layout info
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
            // ... other characters
        },
        fontSize: 32,
        lineHeight: 36,
        baseLineOffset: 26,
        fontFamily: 'MyFont',
        // Optional distance field info for MSDF/SDF fonts
        distanceField: {
            type: 'msdf',
            range: 4
        }
    },
    // Array of textures containing the font glyphs
    textures: [
        Texture.from('font.png')
    ]
});
```

## Properties

### data

> **data**: [`BitmapFontData`](text.BitmapFontData.md)

The bitmap font data containing character metrics, layout information,
and font properties. This includes character positions, dimensions,
kerning data, and general font settings.

***

### textures

> **textures**: [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>[]

Array of textures containing the font glyphs. Each texture corresponds
to a page in the font data. For simple fonts this is typically just
one texture, but complex fonts may split glyphs across multiple textures.
