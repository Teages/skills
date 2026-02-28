# Enumeration: LoaderParserPriority

**`Advanced`**

The extension priority for loader parsers.
Helpful when managing multiple parsers that share the same extension test.
The higher priority parsers will be checked first.

## Enumeration Members

### High

> **High**: `2`

Specific texture types: svg, png, ktx, dds, basis

***

### Low

> **Low**: `0`

Generic parsers: txt, json, webfonts

***

### Normal

> **Normal**: `1`

PixiJS assets with generic extensions: spritesheets, bitmapfonts
