# Interface: BitmapFontInstallOptions

The options for installing a new BitmapFont. Once installed, the font will be available
for use in BitmapText objects through the fontFamily property of TextStyle.

## Example

```ts
import { BitmapFont, BitmapText } from 'pixi.js';

// Basic font installation
BitmapFont.install({
    name: 'BasicFont',
    style: {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: '#ffffff'
    }
});

// Advanced font installation
BitmapFont.install({
    name: 'AdvancedFont',
    style: {
        fontFamily: 'Arial',
        fontSize: 32,
        fill: '#ff0000',
        stroke: { color: '#000000', width: 2 }
    },
    // Include specific character ranges
    chars: [
        ['a', 'z'],           // lowercase letters
        ['A', 'Z'],           // uppercase letters
        ['0', '9'],           // numbers
        '!@#$%^&*()_+-=[]{}' // symbols
    ],
    resolution: 2,            // High-DPI support
    padding: 4,              // Glyph padding
    skipKerning: false,      // Enable kerning
    textureStyle: {
        scaleMode: 'linear',
    }
});

// Using the installed font
const text = new BitmapText({
    text: 'Hello World',
    style: {
        fontFamily: 'AdvancedFont',
        fontSize: 48
    }
});
```

## Properties

### chars?

> `optional` **chars**: `string` \| (`string` \| `string`[])[]

Characters included in the font set. You can specify individual characters or ranges.
Don't forget to include spaces ' ' in your character set!

#### Default

```ts
BitmapFont.ALPHANUMERIC
```

#### Example

```ts
// Different ways to specify characters
BitmapFont.install({
    name: 'RangeFont',
    chars: [
        ['a', 'z'],              // Range of characters
        '0123456789',            // String of characters
        [['0', '9'], ['A', 'Z']] // Multiple ranges
    ]
});
```

***

### dynamicFill?

> `optional` **dynamicFill**: `boolean`

Whether to allow overriding the fill color with a tint at runtime.

When enabled, the font can be dynamically tinted using the `tint` property of BitmapText,
allowing a single font to display multiple colors without creating separate font textures.
This is memory efficient but requires the font to be rendered with white fill color.

When disabled, the fill color is permanently baked into the font texture. This allows
any fill color but prevents runtime tinting - each color variation requires a separate font.

#### Default

false (automatically determined based on style)

**Requirements for tinting:**
- Fill color must be white (`0xFFFFFF` or `'#ffffff'`)
- No stroke effects
- No drop shadows (or only black shadows)
- No gradient or pattern fills

**Performance considerations:**
- ✅ Enabled: One font texture, multiple colors via tinting (memory efficient)
- ❌ Disabled: Separate font texture per color (higher memory usage)

#### Examples

```ts
// Correct usage - white fill with tinting enabled
BitmapFont.install({
    name: 'TintableFont',
    style: {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 0xFFFFFF  // Must be white for tinting
    },
    dynamicFill: true
});

// Use the font with different colors via tinting
const redText = new BitmapText({
    text: 'Red Text',
    style: { fontFamily: 'TintableFont', fill: 'red }, // Red tint
});

const blueText = new BitmapText({
    text: 'Blue Text',
    style: { fontFamily: 'TintableFont', fill: 'blue' }, // Blue tint
});
```

```ts
// Incorrect usage - colored fill with tinting enabled
BitmapFont.install({
    name: 'BadTintFont',
    style: {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 0xFF0000  // ❌ Red fill won't tint properly
    },
    dynamicFill: true  // ❌ Will not work as expected
});
```

```ts
// Alternative - baked colors (no tinting)
BitmapFont.install({
    name: 'BakedColorFont',
    style: {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 0xFF0000,  // Any color works
        stroke: { color: 0x000000, width: 2 }  // Strokes allowed
    },
    dynamicFill: false  // Color is baked in
});
```

***

### name?

> `optional` **name**: `string`

The name of the font. This will be used as the fontFamily in text styles to access this font.
Must be unique across all installed bitmap fonts.

#### Example

```ts
BitmapFont.install({
    name: 'MyCustomFont',
    style: { fontFamily: 'Arial' }
});
```

***

### padding?

> `optional` **padding**: `number`

Padding between glyphs on texture atlas. Balances visual quality with texture space.
- Lower values: More compact, but may have visual artifacts
- Higher values: Better quality, but uses more texture space

#### Default

```ts
4
```

#### Example

```ts
BitmapFont.install({
    name: 'PaddedFont',
    padding: 8 // More padding for better quality
});
```

***

### resolution?

> `optional` **resolution**: `number`

Render resolution for glyphs. Higher values create sharper text at the cost of memory.
Useful for supporting high-DPI displays.

#### Default

```ts
1
```

#### Example

```ts
BitmapFont.install({
    name: 'HiDPIFont',
    resolution: window.devicePixelRatio || 2
});
```

***

### skipKerning?

> `optional` **skipKerning**: `boolean`

Skip generation of kerning information for the BitmapFont.
- true: Faster generation, but text may have inconsistent spacing
- false: Better text appearance, but slower generation

#### Default

```ts
false
```

#### Example

```ts
BitmapFont.install({
    name: 'FastFont',
    skipKerning: true // Prioritize performance
});
```

***

### style?

> `optional` **style**: [`TextStyle`](text.TextStyle.md) \| [`TextStyleOptions`](text.TextStyleOptions.md)

Style options to render the BitmapFont with.
Supports all TextStyle properties including fill, stroke, and shadow effects.

#### Example

```ts
BitmapFont.install({
    name: 'StyledFont',
    style: {
        fontFamily: 'Arial',
        fontSize: 32,
        fill: 'white',
        stroke: { color: '#000000', width: 2 },
        dropShadow: {
            color: '#000000',
            blur: 2,
            distance: 3
        }
    }
});
```

***

### textureStyle?

> `optional` **textureStyle**: [`TextureStyleOptions`](rendering.TextureStyleOptions.md) \| [`TextureStyle`](rendering.TextureStyle.md)

Optional texture style to use when creating the font textures.
Controls how the font textures are rendered and filtered.

#### Example

```ts
BitmapFont.install({
    name: 'CrispFont',
    textureStyle: {
        scaleMode: 'nearest',
    }
});
```
