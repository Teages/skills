# Type Alias: TextStyleWhiteSpace

> **TextStyleWhiteSpace** = `"normal"` \| `"pre"` \| `"pre-line"`

Controls how whitespace (spaces, tabs, and line breaks) is handled within the text.
This affects text wrapping and spacing behavior.

## Example

```ts
// Normal mode (collapse spaces and newlines)
const normalText = new Text({
    text: 'Hello    World\n\nNew Line',
    style: {
        whiteSpace: 'normal',
        fontSize: 24
    }
}); // Renders as: "Hello World New Line"

// Pre mode (preserve all whitespace)
const preText = new Text({
    text: 'Hello    World\n\nNew Line',
    style: {
        whiteSpace: 'pre',
        fontSize: 24
    }
}); // Preserves spaces and line breaks exactly

// Pre-line mode (preserve newlines, collapse spaces)
const preLineText = new Text({
    text: 'Hello    World\n\nNew Line',
    style: {
        whiteSpace: 'pre-line',
        fontSize: 24
    }
}); // Preserves line breaks, collapses multiple spaces

// With word wrap enabled
const wrappedText = new Text({
    text: 'A long text with    multiple spaces\nand line breaks',
    style: {
        whiteSpace: 'pre-line',
        wordWrap: true,
        wordWrapWidth: 200,
        fontSize: 24
    }
});
```

Supported values:
- 'normal': Collapses all whitespace (spaces, tabs, line breaks) into a single space
- 'pre': Preserves all whitespace characters exactly as written
- 'pre-line': Preserves line breaks but collapses multiple spaces into a single space

## Remarks

- 'normal' is best for single-line text or when you want to ignore formatting
- 'pre' is useful for code blocks or when exact spacing is important
- 'pre-line' is good for formatted text where you want to keep line breaks but clean up spaces

## See

 - [MDN white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
 - [TextStyle#wordWrap](text.TextStyle.html#wordwrap) For controlling text wrapping
