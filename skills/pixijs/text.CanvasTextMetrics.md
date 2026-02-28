# Class: CanvasTextMetrics

**`Advanced`**

The TextMetrics object represents the measurement of a block of text with a specified style.

## Example

```ts
import { CanvasTextMetrics, TextStyle } from 'pixi.js';

const style = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 24,
    fill: 0xff1010,
    align: 'center',
});
const textMetrics = CanvasTextMetrics.measureText('Your text', style);
```

## Constructors

### Constructor

> **new CanvasTextMetrics**(`text`, `style`, `width`, `height`, `lines`, `lineWidths`, `lineHeight`, `maxLineWidth`, `fontProperties`, `taggedData?`): `CanvasTextMetrics`

#### Parameters

##### text

`string`

the text that was measured

##### style

[`TextStyle`](text.TextStyle.md)

the style that was measured

##### width

`number`

the measured width of the text

##### height

`number`

the measured height of the text

##### lines

`string`[]

an array of the lines of text broken by new lines and wrapping if specified in style

##### lineWidths

`number`[]

an array of the line widths for each line matched to `lines`

##### lineHeight

`number`

the measured line height for this style

##### maxLineWidth

`number`

the maximum line width for all measured lines

##### fontProperties

[`FontMetrics`](text.FontMetrics.md)

the font properties object from TextMetrics.measureFont

##### taggedData?

optional object containing tagged text specific data

###### hasDropShadow?

`boolean`

whether any run has a drop shadow

###### lineAscents?

`number`[]

per-line ascent values for tagged text

###### lineDescents?

`number`[]

per-line descent values for tagged text

###### lineHeights?

`number`[]

per-line height values for tagged text

###### runsByLine?

`TextStyleRun`[][]

per-line style runs for tagged text

#### Returns

`CanvasTextMetrics`

## Properties

### fontProperties

> **fontProperties**: [`FontMetrics`](text.FontMetrics.md)

The font properties object from TextMetrics.measureFont.

***

### height

> **height**: `number`

The measured height of the text.

***

### lineHeight

> **lineHeight**: `number`

The measured line height for this style.

***

### lines

> **lines**: `string`[]

An array of lines of the text broken by new lines and wrapping is specified in style.

***

### lineWidths

> **lineWidths**: `number`[]

An array of the line widths for each line matched to `lines`.

***

### maxLineWidth

> **maxLineWidth**: `number`

The maximum line width for all measured lines.

***

### style

> **style**: [`TextStyle`](text.TextStyle.md)

The style that was measured.

***

### text

> **text**: `string`

The text that was measured.

***

### width

> **width**: `number`

The measured width of the text.

***

### \_experimentalLetterSpacingSupported?

> `static` `optional` **\_experimentalLetterSpacingSupported**: `boolean`

***

### BASELINE\_MULTIPLIER

> `static` **BASELINE\_MULTIPLIER**: `number` = `1.4`

Baseline multiplier for calculate font metrics.

***

### BASELINE\_SYMBOL

> `static` **BASELINE\_SYMBOL**: `string` = `'M'`

Baseline symbol for calculate font metrics.

***

### experimentalLetterSpacing

> `static` **experimentalLetterSpacing**: `boolean` = `false`

New rendering behavior for letter-spacing which uses Chrome's new native API. This will
lead to more accurate letter-spacing results because it does not try to manually draw
each character. However, this Chrome API is experimental and may not serve all cases yet.

#### See

CanvasTextMetrics.experimentalLetterSpacingSupported

***

### graphemeSegmenter()

> `static` **graphemeSegmenter**: (`s`) => `string`[]

A Unicode "character", or "grapheme cluster", can be composed of multiple Unicode code points,
such as letters with diacritical marks (e.g. `'\u0065\u0301'`, letter e with acute)
or emojis with modifiers (e.g. `'\uD83E\uDDD1\u200D\uD83D\uDCBB'`, technologist).
The new `Intl.Segmenter` API in ES2022 can split the string into grapheme clusters correctly. If it is not available,
PixiJS will fallback to use the iterator of String, which can only spilt the string into code points.
If you want to get full functionality in environments that don't support `Intl.Segmenter` (such as Firefox),
you can use other libraries such as [grapheme-splitter][https://www.npmjs.com/package/grapheme-splitter](https://www.npmjs.com/package/grapheme-splitter)
or [graphemer][https://www.npmjs.com/package/graphemer](https://www.npmjs.com/package/graphemer) to create a polyfill. Since these libraries can be
relatively large in size to handle various Unicode grapheme clusters properly, PixiJS won't use them directly.

#### Parameters

##### s

`string`

#### Returns

`string`[]

***

### HEIGHT\_MULTIPLIER

> `static` **HEIGHT\_MULTIPLIER**: `number` = `2.0`

Height multiplier for setting height of canvas to calculate font metrics.

***

### METRICS\_STRING

> `static` **METRICS\_STRING**: `string` = `'|ÉqÅ'`

String used for calculate font metrics.
These characters are all tall to help calculate the height required for text.

## Accessors

### experimentalLetterSpacingSupported

#### Get Signature

> **get** `static` **experimentalLetterSpacingSupported**(): `boolean`

Checking that we can use modern canvas 2D API.

Note: This is an unstable API, Chrome < 94 use `textLetterSpacing`, later versions use `letterSpacing`.

##### See

 - CanvasTextMetrics.experimentalLetterSpacing
 - https://developer.mozilla.org/en-US/docs/Web/API/ICanvasRenderingContext2D/letterSpacing
 - https://developer.chrome.com/origintrials/#/view_trial/3585991203293757441

##### Returns

`boolean`

## Methods

### canBreakChars()

> `static` **canBreakChars**(`_char`, `_nextChar`, `_token`, `_index`, `_breakWords`): `boolean`

Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.

It allows one to determine whether a pair of characters
should be broken by newlines
For example certain characters in CJK langs or numbers.
It must return a boolean.

#### Parameters

##### \_char

`string`

The character

##### \_nextChar

`string`

The next character

##### \_token

`string`

The token/word the characters are from

##### \_index

`number`

The index in the token of the char

##### \_breakWords

`boolean`

The style attr break words

#### Returns

`boolean`

whether to break word or not

***

### canBreakWords()

> `static` **canBreakWords**(`_token`, `breakWords`): `boolean`

Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.

It allows one to customise which words should break
Examples are if the token is CJK or numbers.
It must return a boolean.

#### Parameters

##### \_token

`string`

The token

##### breakWords

`boolean`

The style attr break words

#### Returns

`boolean`

Whether to break word or not

***

### clearMetrics()

> `static` **clearMetrics**(`font?`): `void`

Clear font metrics in metrics cache.

#### Parameters

##### font?

`string` = `''`

font name. If font name not set then clear cache for all fonts.

#### Returns

`void`

***

### isBreakingSpace()

> `static` **isBreakingSpace**(`char`, `_nextChar?`): `boolean`

Determines if char is a breaking whitespace.

It allows one to determine whether char should be a breaking whitespace
For example certain characters in CJK langs or numbers.
It must return a boolean.

#### Parameters

##### char

`string`

The character

##### \_nextChar?

`string`

The next character

#### Returns

`boolean`

True if whitespace, False otherwise.

***

### measureFont()

> `static` **measureFont**(`font`): [`FontMetrics`](text.FontMetrics.md)

Calculates the ascent, descent and fontSize of a given font-style

#### Parameters

##### font

`string`

String representing the style of the font

#### Returns

[`FontMetrics`](text.FontMetrics.md)

Font properties object

***

### measureText()

> `static` **measureText**(`text`, `style`, `canvas`, `wordWrap`): `CanvasTextMetrics`

Measures the supplied string of text and returns a Rectangle.

#### Parameters

##### text

`string` = `' '`

The text to measure.

##### style

[`TextStyle`](text.TextStyle.md)

The text style to use for measuring

##### canvas

[`ICanvas`](environment.ICanvas.md) = `CanvasTextMetrics._canvas`

optional specification of the canvas to use for measuring.

##### wordWrap

`boolean` = `style.wordWrap`

#### Returns

`CanvasTextMetrics`

Measured width and height of the text.

***

### wordWrapSplit()

> `static` **wordWrapSplit**(`token`): `string`[]

Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.

It is called when a token (usually a word) has to be split into separate pieces
in order to determine the point to break a word.
It must return an array of characters.

#### Parameters

##### token

`string`

The token to split

#### Returns

`string`[]

The characters of the token

#### See

CanvasTextMetrics.graphemeSegmenter
