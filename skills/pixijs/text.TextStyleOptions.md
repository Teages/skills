# Interface: TextStyleOptions

Constructor options used for `TextStyle` instances. Defines the visual appearance and layout of text.

## Example

```ts
// Basic text style
const basicStyle = new TextStyle({
    fontSize: 24,
    fill: 'black',
    fontFamily: 'Arial'
});

// Rich text style with multiple features
const richStyle = new TextStyle({
    fontFamily: ['Arial', 'Helvetica', 'sans-serif'],
    fontSize: 36,
    fontWeight: 'bold',
    fill: 'red',
    stroke: { color: '#4a1850', width: 5 },
    align: 'center',
    dropShadow: {
        color: '#000000',
        blur: 4,
        distance: 6,
        angle: Math.PI / 6
    },
    wordWrap: true,
    wordWrapWidth: 440,
    lineHeight: 40,
    textBaseline: 'middle'
});
```

## See

[TextStyle](text.TextStyle.md) For the main style class

## Properties

### align?

> `optional` **align**: [`TextStyleAlign`](text.TextStyleAlign.md)

Alignment for multiline text, does not affect single line text

#### Default

```ts
'left'
```

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

***

### dropShadow?

> `optional` **dropShadow**: `boolean` \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`TextDropShadow`](text.TextDropShadow.md)\>

Drop shadow configuration for the text.
Can be boolean or a TextDropShadow object.

#### Default

```ts
null
```

***

### fill?

> `optional` **fill**: [`FillInput`](scene.FillInput.md)

Fill style for the text.
Can be a color, gradient, or pattern.

#### Default

```ts
'black'
```

***

### filters?

> `optional` **filters**: readonly [`Filter`](filters.Filter.md)[] \| [`Filter`](filters.Filter.md)[]

Array of filters to apply to the text.

These filters will be applied to the text as it is created, resulting in faster rendering for static text
compared to applying the filter directly to the text object (which would be applied at run time).

#### Default

```ts
undefined
```

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

***

### fontStyle?

> `optional` **fontStyle**: [`TextStyleFontStyle`](text.TextStyleFontStyle.md)

Font style (normal, italic, oblique).

#### Default

```ts
'normal'
```

***

### fontVariant?

> `optional` **fontVariant**: [`TextStyleFontVariant`](text.TextStyleFontVariant.md)

Font variant (normal, small-caps).

#### Default

```ts
'normal'
```

***

### fontWeight?

> `optional` **fontWeight**: [`TextStyleFontWeight`](text.TextStyleFontWeight.md)

Font weight (normal, bold, bolder, lighter, 100-900).

#### Default

```ts
'normal'
```

***

### leading?

> `optional` **leading**: `number`

The height of the line, a number that represents the vertical space that a letter uses.

***

### letterSpacing?

> `optional` **letterSpacing**: `number`

The amount of spacing between letters, default is 0

***

### lineHeight?

> `optional` **lineHeight**: `number`

The line height, a number that represents the vertical space that a letter uses

***

### padding?

> `optional` **padding**: `number`

Padding around the text.

Occasionally some fonts are cropped. Adding some padding will prevent this from
happening by adding padding to all sides of the text.

***

### stroke?

> `optional` **stroke**: [`StrokeInput`](scene.StrokeInput.md)

Stroke style for text outline.

#### Default

```ts
null
```

***

### tagStyles?

> `optional` **tagStyles**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `TextStyleOptions`\>

Custom styles to apply to specific tags within the text.
Allows for rich text formatting using simple tag markup like `<red>text</red>`.

Tags are only parsed when this property has entries. If `tagStyles` is empty or undefined,
`<` characters in text are treated as literal.

Nested tags are supported via a style stack - inner tags inherit from outer tags
but can override specific properties.

#### Example

```ts
const text = new Text({
    text: '<red>Red</red>, <blue>Blue</blue>, <big>Big</big>',
    style: {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 'white',
        tagStyles: {
            red: { fill: 'red' },
            blue: { fill: 'blue' },
            big: { fontSize: 48 }
        }
    }
});
```

#### Default

```ts
undefined
```

***

### textBaseline?

> `optional` **textBaseline**: [`TextStyleTextBaseline`](text.TextStyleTextBaseline.md)

Vertical alignment baseline.

#### Default

```ts
'alphabetic'
```

***

### trim?

> `optional` **trim**: `boolean`

Whether to trim transparent edges.
> [!NOTE] This is an expensive operation and should only be used when necessary.

#### Default

```ts
false
```

***

### whiteSpace?

> `optional` **whiteSpace**: [`TextStyleWhiteSpace`](text.TextStyleWhiteSpace.md)

How to handle whitespace.

It needs wordWrap to be set to true for this to have an effect.

#### Default

```ts
'pre'
```

***

### wordWrap?

> `optional` **wordWrap**: `boolean`

Indicates if word wrap should be used

***

### wordWrapWidth?

> `optional` **wordWrapWidth**: `number`

The width at which text will wrap, it needs wordWrap to be set to true
