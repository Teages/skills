# Interface: HTMLTextStyleOptions

Options for HTML text style, extends standard text styling with HTML-specific capabilities.
Omits certain base text properties that don't apply to HTML rendering.

## Example

```ts
// Basic HTML text style
const text = new HTMLText({
    text: '<p>Hello World</p>',
    style: {
        fontSize: 24,
        fill: '#ff0000',
        fontFamily: 'Arial',
        align: 'center'
    }
});

// Custom tag styling
const taggedText = new HTMLText({
    text: '<custom>Custom Tag</custom>',
    style: {
        fontSize: 16,
        tagStyles: {
            custom: {
                fontSize: 32,
                fill: '#00ff00',
                fontStyle: 'italic'
            }
        }
    }
});
```

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`TextStyleOptions`](text.TextStyleOptions.md), `"leading"` \| `"textBaseline"` \| `"trim"` \| `"filters"`\>

## Properties

### align?

> `optional` **align**: [`TextStyleAlign`](text.TextStyleAlign.md)

Alignment for multiline text, does not affect single line text

#### Default

```ts
'left'
```

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`align`](text.TextStyleOptions.html#align)

***

### breakWords?

> `optional` **breakWords**: `boolean`

Whether to allow line breaks within words.
Requires wordWrap to be true.

#### Example

```ts
// Enable word breaking
const style = new TextStyle({
   breakWords: true,
   wordWrap: true,
   wordWrapWidth: 200
});
```

#### Default

```ts
false
```

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`breakWords`](text.TextStyleOptions.html#breakwords)

***

### cssOverrides?

> `optional` **cssOverrides**: `string`[]

**`Advanced`**

List of CSS style overrides to apply to the HTML text.
These styles are added after the built-in styles and can override any default styling.

***

### dropShadow?

> `optional` **dropShadow**: `boolean` \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`TextDropShadow`](text.TextDropShadow.md)\>

Drop shadow configuration for the text.
Can be boolean or a TextDropShadow object.

#### Default

```ts
null
```

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`dropShadow`](text.TextStyleOptions.html#dropshadow)

***

### fill?

> `optional` **fill**: [`FillInput`](scene.FillInput.md)

Fill style for the text.
Can be a color, gradient, or pattern.

#### Default

```ts
'black'
```

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`fill`](text.TextStyleOptions.html#fill)

***

### fontFamily?

> `optional` **fontFamily**: `string` \| `string`[]

Font family or families to use.
Can be single name or array of fallbacks.

#### Example

```ts
// Single font family
fontFamily: 'Arial'
// Multiple font families
fontFamily: ['Helvetica', 'Arial', 'sans-serif']
```

#### Default

```ts
'Arial'
```

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`fontFamily`](text.TextStyleOptions.html#fontfamily)

***

### fontSize?

> `optional` **fontSize**: `string` \| `number`

Font size in pixels or as string.

Equivalents are '26px','20pt','160%' or '1.6em')

#### Example

```ts
// Numeric size
fontSize: 26
// String size
fontSize: '26px'
// Percentage size
fontSize: '160%' // 1.6 times the parent element's font size
// Em size
fontSize: '1.6em' // 1.6 times the parent element's font size
@default 26

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`fontSize`](text.TextStyleOptions.html#fontsize)

***

### fontStyle?

> `optional` **fontStyle**: [`TextStyleFontStyle`](text.TextStyleFontStyle.md)

Font style (normal, italic, oblique).

#### Default

```ts
'normal'
```

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`fontStyle`](text.TextStyleOptions.html#fontstyle)

***

### fontVariant?

> `optional` **fontVariant**: [`TextStyleFontVariant`](text.TextStyleFontVariant.md)

Font variant (normal, small-caps).

#### Default

```ts
'normal'
```

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`fontVariant`](text.TextStyleOptions.html#fontvariant)

***

### fontWeight?

> `optional` **fontWeight**: [`TextStyleFontWeight`](text.TextStyleFontWeight.md)

Font weight (normal, bold, bolder, lighter, 100-900).

#### Default

```ts
'normal'
```

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`fontWeight`](text.TextStyleOptions.html#fontweight)

***

### letterSpacing?

> `optional` **letterSpacing**: `number`

The amount of spacing between letters, default is 0

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`letterSpacing`](text.TextStyleOptions.html#letterspacing)

***

### lineHeight?

> `optional` **lineHeight**: `number`

The line height, a number that represents the vertical space that a letter uses

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`lineHeight`](text.TextStyleOptions.html#lineheight)

***

### padding?

> `optional` **padding**: `number`

Padding around the text.

Occasionally some fonts are cropped. Adding some padding will prevent this from
happening by adding padding to all sides of the text.

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`padding`](text.TextStyleOptions.html#padding)

***

### stroke?

> `optional` **stroke**: [`StrokeInput`](scene.StrokeInput.md)

Stroke style for text outline.

#### Default

```ts
null
```

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`stroke`](text.TextStyleOptions.html#stroke)

***

### tagStyles?

> `optional` **tagStyles**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `HTMLTextStyleOptions`\>

Custom styles to apply to specific HTML tags.
Allows for consistent styling of custom elements without CSS overrides.

#### Example

```ts
const text = new HTMLText({
    text: `
        <red>Main Title</red>
        <grey>The subtitle</grey>
        <blue>Regular content text</blue>
    `,
    style: {
        tagStyles: {
            red: {
                fill: '#ff0000',
            },
            grey: {
                fill: '#666666',
            },
            blue: {
                fill: 'blue',
            }
        }
    }
});
```

#### Overrides

[`TextStyleOptions`](text.TextStyleOptions.md).[`tagStyles`](text.TextStyleOptions.html#tagstyles)

***

### whiteSpace?

> `optional` **whiteSpace**: [`TextStyleWhiteSpace`](text.TextStyleWhiteSpace.md)

How to handle whitespace.

It needs wordWrap to be set to true for this to have an effect.

#### Default

```ts
'pre'
```

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`whiteSpace`](text.TextStyleOptions.html#whitespace)

***

### wordWrap?

> `optional` **wordWrap**: `boolean`

Indicates if word wrap should be used

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`wordWrap`](text.TextStyleOptions.html#wordwrap)

***

### wordWrapWidth?

> `optional` **wordWrapWidth**: `number`

The width at which text will wrap, it needs wordWrap to be set to true

#### Inherited from

[`TextStyleOptions`](text.TextStyleOptions.md).[`wordWrapWidth`](text.TextStyleOptions.html#wordwrapwidth)
