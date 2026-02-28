# Type Alias: TextStyleFontVariant

> **TextStyleFontVariant** = `"normal"` \| `"small-caps"`

The font variant input for text styles. Controls the capitalization and presentation of letters.
Used to enable special rendering like small caps.

## Example

```ts
// Create text with normal font variant
const normalText = new Text({
    text: 'Normal Text',
    style: {
        fontVariant: 'normal',
        fontSize: 24
    }
});

// Create text with small-caps variant
const smallCapsText = new Text({
    text: 'Small Caps Text',
    style: {
        fontVariant: 'small-caps',
        fontSize: 24,
        fontFamily: 'Arial'
    }
});

// Use in a TextStyle instance
const style = new TextStyle({
    fontVariant: 'small-caps',
    fontSize: 32,
    fill: 0x4a4a4a
});

// Update variant dynamically
text.style = {
    ...text.style,
    fontVariant: text.style.fontVariant === 'normal' ? 'small-caps' : 'normal'
};
```

Supported values:
- 'normal': Regular text rendering with standard capitalization
- 'small-caps': Renders lowercase letters as smaller versions of capital letters

## Remarks

Small caps are only available if the font supports them.
Not all fonts include true small caps glyphs.

## See

[MDN font-variant](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)
