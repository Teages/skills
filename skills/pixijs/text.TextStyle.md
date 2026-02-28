# Class: TextStyle

A TextStyle Object contains information to decorate Text objects.
An instance can be shared between multiple Text objects; then changing the style will update all text objects using it.

## Example

```ts
// Create a basic text style
const style = new TextStyle({
    fontFamily: ['Helvetica', 'Arial', 'sans-serif'],
    fontSize: 36,
    fill: 0xff1010,
    align: 'center'
});

// Create a rich text style with multiple features
const richStyle = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 32,
    fill: 'white',
    stroke: {
        color: '#4a1850',
        width: 5
    },
    dropShadow: {
        color: '#000000',
        blur: 4,
        distance: 6,
        angle: Math.PI / 6
    },
    wordWrap: true,
    wordWrapWidth: 440,
    lineHeight: 40,
    align: 'center'
});

// Share style between multiple text objects
const text1 = new Text({
    text: 'Hello',
    style: richStyle
});

const text2 = new Text({
    text: 'World',
    style: richStyle
});

// Update style dynamically - affects all text objects
richStyle.fontSize = 48;
richStyle.fill = 0x00ff00;
```

Key Features:
- Shared styling between multiple text objects
- Rich text formatting options
- Gradient and pattern fills
- Drop shadows and strokes
- Word wrapping and alignment
- Dynamic updates

## Extends

- `EventEmitter`\<\{ `update`: [`TextDropShadow`](text.TextDropShadow.md); \}\>

## Extended by

- [`HTMLTextStyle`](text.HTMLTextStyle.md)

## Constructors

### Constructor

> **new TextStyle**(`style`): `TextStyle`

#### Parameters

##### style

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`TextStyleOptions`](text.TextStyleOptions.md)\> = `{}`

#### Returns

`TextStyle`

#### Overrides

`EventEmitter<{ update: TextDropShadow }>.constructor`

## Properties

### defaultDropShadow

> `static` **defaultDropShadow**: [`TextDropShadow`](text.TextDropShadow.md)

Default drop shadow settings used when enabling drop shadows on text.
These values are used as the base configuration when drop shadows are enabled without specific settings.

#### Example

```ts
// Customize default settings globally
TextStyle.defaultDropShadow.alpha = 0.5;    // 50% opacity for all shadows
TextStyle.defaultDropShadow.blur = 2;       // 2px blur for all shadows
TextStyle.defaultDropShadow.color = 'blue'; // Blue shadows by default
```

***

### defaultTextStyle

> `static` **defaultTextStyle**: [`TextStyleOptions`](text.TextStyleOptions.md)

Default text style settings used when creating new text objects.
These values serve as the base configuration and can be customized globally.

#### Example

```ts
// Customize default text style globally
TextStyle.defaultTextStyle.fontSize = 16;
TextStyle.defaultTextStyle.fill = 0x333333;
TextStyle.defaultTextStyle.fontFamily = ['Arial', 'Helvetica', 'sans-serif'];
```

## Accessors

### align

#### Get Signature

> **get** **align**(): [`TextStyleAlign`](text.TextStyleAlign.md)

Alignment for multiline text, does not affect single line text.

##### Returns

[`TextStyleAlign`](text.TextStyleAlign.md)

#### Set Signature

> **set** **align**(`value`): `void`

##### Parameters

###### value

[`TextStyleAlign`](text.TextStyleAlign.md)

##### Returns

`void`

***

### breakWords

#### Get Signature

> **get** **breakWords**(): `boolean`

Indicates if lines can be wrapped within words, it needs wordWrap to be set to true.

##### Returns

`boolean`

#### Set Signature

> **set** **breakWords**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### dropShadow

#### Get Signature

> **get** **dropShadow**(): [`TextDropShadow`](text.TextDropShadow.md)

Set a drop shadow for the text.

##### Returns

[`TextDropShadow`](text.TextDropShadow.md)

#### Set Signature

> **set** **dropShadow**(`value`): `void`

##### Parameters

###### value

`boolean` | [`TextDropShadow`](text.TextDropShadow.md)

##### Returns

`void`

***

### fill

#### Get Signature

> **get** **fill**(): [`FillInput`](scene.FillInput.md)

The fill style that will be used to color the text.
This can be:
- A color string like 'red', '#00FF00', or 'rgba(255,0,0,0.5)'
- A hex number like 0xff0000 for red
- A FillStyle object with properties like { color: 0xff0000, alpha: 0.5 }
- A FillGradient for gradient fills
- A FillPattern for pattern/texture fills

When using a FillGradient, vertical gradients (angle of 90 degrees) are applied per line of text,
while gradients at any other angle are spread across the entire text body as a whole.

##### Example

```ts
// Vertical gradient applied per line
const verticalGradient = new FillGradient(0, 0, 0, 1)
    .addColorStop(0, 0xff0000)
    .addColorStop(1, 0x0000ff);

const text = new Text({
    text: 'Line 1\nLine 2',
    style: { fill: verticalGradient }
});

To manage the gradient in a global scope, set the textureSpace property of the FillGradient to 'global'.
```

##### Returns

[`FillInput`](scene.FillInput.md)

#### Set Signature

> **set** **fill**(`value`): `void`

##### Parameters

###### value

[`FillInput`](scene.FillInput.md)

##### Returns

`void`

***

### filters

#### Get Signature

> **get** **filters**(): readonly [`Filter`](filters.Filter.md)[]

An optional filter or array of filters to apply to the text, allowing for advanced visual effects.
These filters will be applied to the text as it is created, resulting in faster rendering for static text
compared to applying the filter directly to the text object (which would be applied at run time).

##### Default

```ts
null
```

##### Returns

readonly [`Filter`](filters.Filter.md)[]

#### Set Signature

> **set** **filters**(`value`): `void`

##### Parameters

###### value

[`Filter`](filters.Filter.md)[]

##### Returns

`void`

***

### fontFamily

#### Get Signature

> **get** **fontFamily**(): `string` \| `string`[]

The font family, can be a single font name, or a list of names where the first is the preferred font.

##### Returns

`string` \| `string`[]

#### Set Signature

> **set** **fontFamily**(`value`): `void`

##### Parameters

###### value

`string` | `string`[]

##### Returns

`void`

***

### fontSize

#### Get Signature

> **get** **fontSize**(): `number`

The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')

##### Returns

`number`

#### Set Signature

> **set** **fontSize**(`value`): `void`

##### Parameters

###### value

`string` | `number`

##### Returns

`void`

***

### fontStyle

#### Get Signature

> **get** **fontStyle**(): [`TextStyleFontStyle`](text.TextStyleFontStyle.md)

The font style.

##### Returns

[`TextStyleFontStyle`](text.TextStyleFontStyle.md)

#### Set Signature

> **set** **fontStyle**(`value`): `void`

##### Parameters

###### value

[`TextStyleFontStyle`](text.TextStyleFontStyle.md)

##### Returns

`void`

***

### fontVariant

#### Get Signature

> **get** **fontVariant**(): [`TextStyleFontVariant`](text.TextStyleFontVariant.md)

The font variant.

##### Returns

[`TextStyleFontVariant`](text.TextStyleFontVariant.md)

#### Set Signature

> **set** **fontVariant**(`value`): `void`

##### Parameters

###### value

[`TextStyleFontVariant`](text.TextStyleFontVariant.md)

##### Returns

`void`

***

### fontWeight

#### Get Signature

> **get** **fontWeight**(): [`TextStyleFontWeight`](text.TextStyleFontWeight.md)

The font weight.

##### Returns

[`TextStyleFontWeight`](text.TextStyleFontWeight.md)

#### Set Signature

> **set** **fontWeight**(`value`): `void`

##### Parameters

###### value

[`TextStyleFontWeight`](text.TextStyleFontWeight.md)

##### Returns

`void`

***

### leading

#### Get Signature

> **get** **leading**(): `number`

The space between lines.

##### Returns

`number`

#### Set Signature

> **set** **leading**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### letterSpacing

#### Get Signature

> **get** **letterSpacing**(): `number`

The amount of spacing between letters, default is 0.

##### Returns

`number`

#### Set Signature

> **set** **letterSpacing**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### lineHeight

#### Get Signature

> **get** **lineHeight**(): `number`

The line height, a number that represents the vertical space that a letter uses.

##### Returns

`number`

#### Set Signature

> **set** **lineHeight**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### padding

#### Get Signature

> **get** **padding**(): `number`

Occasionally some fonts are cropped. Adding some padding will prevent this from happening
by adding padding to all sides of the text.
> [!NOTE] This will NOT affect the positioning or bounds of the text.

##### Returns

`number`

#### Set Signature

> **set** **padding**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### stroke

#### Get Signature

> **get** **stroke**(): [`StrokeInput`](scene.StrokeInput.md)

A fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'.

##### Returns

[`StrokeInput`](scene.StrokeInput.md)

#### Set Signature

> **set** **stroke**(`value`): `void`

##### Parameters

###### value

[`StrokeInput`](scene.StrokeInput.md)

##### Returns

`void`

***

### styleKey

#### Get Signature

> **get** **styleKey**(): `string`

Returns a unique key for this instance.
This key is used for caching.

##### Returns

`string`

Unique key for the instance

***

### tagStyles

#### Get Signature

> **get** **tagStyles**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`TextStyleOptions`](text.TextStyleOptions.md)\>

Custom styles to apply to specific tags within the text.
Allows for rich text formatting using simple tag markup like `<red>text</red>`.

Tags are only parsed when this property has entries. If `tagStyles` is undefined,
`<` characters in text are treated as literal.

##### Example

```ts
const text = new Text({
    text: '<red>Red</red>, <blue>Blue</blue>',
    style: {
        fill: 'white',
        tagStyles: {
            red: { fill: 'red' },
            blue: { fill: 'blue' }
        }
    }
});
```

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`TextStyleOptions`](text.TextStyleOptions.md)\>

#### Set Signature

> **set** **tagStyles**(`value`): `void`

##### Parameters

###### value

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`TextStyleOptions`](text.TextStyleOptions.md)\>

##### Returns

`void`

***

### textBaseline

#### Get Signature

> **get** **textBaseline**(): [`TextStyleTextBaseline`](text.TextStyleTextBaseline.md)

The baseline of the text that is rendered.

##### Returns

[`TextStyleTextBaseline`](text.TextStyleTextBaseline.md)

#### Set Signature

> **set** **textBaseline**(`value`): `void`

##### Parameters

###### value

[`TextStyleTextBaseline`](text.TextStyleTextBaseline.md)

##### Returns

`void`

***

### trim

#### Get Signature

> **get** **trim**(): `boolean`

Trim transparent borders from the text texture.
> [!IMPORTANT] PERFORMANCE WARNING:
> This is a costly operation as it requires scanning pixel alpha values.
> Avoid using `trim: true` for dynamic text, as it could significantly impact performance.

##### Returns

`boolean`

#### Set Signature

> **set** **trim**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### whiteSpace

#### Get Signature

> **get** **whiteSpace**(): [`TextStyleWhiteSpace`](text.TextStyleWhiteSpace.md)

How newlines and spaces should be handled.
Default is 'pre' (preserve, preserve).

 value       | New lines     |   Spaces
 ---         | ---           |   ---
'normal'     | Collapse      |   Collapse
'pre'        | Preserve      |   Preserve
'pre-line'   | Preserve      |   Collapse

##### Returns

[`TextStyleWhiteSpace`](text.TextStyleWhiteSpace.md)

#### Set Signature

> **set** **whiteSpace**(`value`): `void`

##### Parameters

###### value

[`TextStyleWhiteSpace`](text.TextStyleWhiteSpace.md)

##### Returns

`void`

***

### wordWrap

#### Get Signature

> **get** **wordWrap**(): `boolean`

Indicates if word wrap should be used.

##### Returns

`boolean`

#### Set Signature

> **set** **wordWrap**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### wordWrapWidth

#### Get Signature

> **get** **wordWrapWidth**(): `number`

The width at which text will wrap, it needs wordWrap to be set to true.

##### Returns

`number`

#### Set Signature

> **set** **wordWrapWidth**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### assign()

> **assign**(`values`): `this`

Assigns partial style options to this TextStyle instance.
Uses public setters to ensure proper value transformation.

#### Parameters

##### values

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`TextStyleOptions`](text.TextStyleOptions.md)\>

Partial style options to assign

#### Returns

`this`

This TextStyle instance for chaining

***

### clone()

> **clone**(): `TextStyle`

Creates a new TextStyle object with the same values as this one.

#### Returns

`TextStyle`

New cloned TextStyle object

***

### destroy()

> **destroy**(`options`): `void`

Destroys this text style.

#### Parameters

##### options

[`TypeOrBool`](utils.TypeOrBool.md)\<[`TextureDestroyOptions`](scene.TextureDestroyOptions.md)\> = `false`

Options parameter. A boolean will act as if all options
 have been set to that value

#### Returns

`void`

#### Example

```ts
// Destroy the text style and its textures
textStyle.destroy({ texture: true, textureSource: true });
textStyle.destroy(true);
```

***

### reset()

> **reset**(): `void`

Resets all properties to the default values

#### Returns

`void`

***

### update()

> **update**(): `void`

#### Returns

`void`
