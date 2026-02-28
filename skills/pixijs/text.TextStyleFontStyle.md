# Type Alias: TextStyleFontStyle

> **TextStyleFontStyle** = `"normal"` \| `"italic"` \| `"oblique"`

The font style input for text styles. Controls the slant or italicization of the text.

## Example

```ts
// Create text with normal font style
const normalText = new Text({
    text: 'Normal Style Text',
    style: {
        fontStyle: 'normal',
        fontSize: 24
    }
});

// Create italic text
const italicText = new Text({
    text: 'Italic Style Text',
    style: {
        fontStyle: 'italic',
        fontSize: 24,
        fontFamily: 'Arial'
    }
});

// Create oblique text
const obliqueText = new Text({
    text: 'Oblique Style Text',
    style: {
        fontStyle: 'oblique',
        fontSize: 24,
        fontFamily: 'Times New Roman'
    }
});

// Dynamic style changes
let isItalic = false;
text.style = {
    ...text.style,
    fontStyle: isItalic ? 'italic' : 'normal'
};
```

Supported values:
- 'normal': Regular upright text with no slant
- 'italic': True italics using specifically designed italic glyphs
- 'oblique': Slanted version of the regular glyphs

## Remarks

- 'italic' uses specially designed glyphs with cursive characteristics
- 'oblique' is a mechanical slant of the normal glyphs
- Not all fonts include true italic designs; some may fall back to oblique

## See

[MDN font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
