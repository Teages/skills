# Class: HTMLTextStyle

A TextStyle object rendered by the HTMLTextSystem.

## Extends

- [`TextStyle`](text.TextStyle.md)

## Constructors

### Constructor

> **new HTMLTextStyle**(`options`): `HTMLTextStyle`

#### Parameters

##### options

[`HTMLTextStyleOptions`](text.HTMLTextStyleOptions.md) = `{}`

#### Returns

`HTMLTextStyle`

#### Overrides

[`TextStyle`](text.TextStyle.md).[`constructor`](text.TextStyle.html#constructor)

## Properties

### \_tagStyles

> **\_tagStyles**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`HTMLTextStyleOptions`](text.HTMLTextStyleOptions.md)\>

Custom styles to apply to specific HTML tags.
Allows for consistent styling of custom elements without CSS overrides.

#### Example

```ts
new HTMLText({
  text:'<red>Red</red>,<blue>Blue</blue>,<green>Green</green>',
  style:{
      fontFamily: 'DM Sans',
      fill: 'white',
      fontSize:100,
      tagStyles:{
          red:{
              fill:'red',
          },
          blue:{
              fill:'blue',
          },
          green:{
              fill:'green',
          }
      }
  }
);
```

#### Overrides

`TextStyle._tagStyles`

***

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`defaultDropShadow`](text.TextStyle.html#defaultdropshadow)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`defaultTextStyle`](text.TextStyle.html#defaulttextstyle)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`align`](text.TextStyle.html#align)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`breakWords`](text.TextStyle.html#breakwords)

***

### cssOverrides

#### Get Signature

> **get** **cssOverrides**(): `string`[]

**`Advanced`**

##### Returns

`string`[]

#### Set Signature

> **set** **cssOverrides**(`value`): `void`

**`Advanced`**

List of CSS style overrides to apply to the HTML text.
These styles are added after the built-in styles and can override any default styling.

##### Parameters

###### value

`string` | `string`[]

##### Returns

`void`

***

### cssStyle

#### Get Signature

> **get** **cssStyle**(): `string`

**`Advanced`**

The CSS style string that will be applied to the HTML text.

##### Returns

`string`

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`dropShadow`](text.TextStyle.html#dropshadow)

***

### fill

#### Set Signature

> **set** **fill**(`value`): `void`

Sets the fill style for the text. HTML text only supports color fills (string or number values).
Texture fills are not supported and will trigger a warning in debug mode.

##### Example

```ts
// Using hex colors
const text = new HTMLText({
    text: 'Colored Text',
    style: {
        fill: 0xff0000 // Red color
    }
});

// Using CSS color strings
text.style.fill = '#00ff00';     // Hex string (Green)
text.style.fill = 'blue';        // Named color
text.style.fill = 'rgb(255,0,0)' // RGB
text.style.fill = '#f0f';        // Short hex

// Invalid usage (will trigger warning in debug)
text.style.fill = {
    type: 'pattern',
    texture: Texture.from('pattern.png')
}; // Not supported, falls back to default
```

##### Throws

In debug mode when attempting to use unsupported fill types

##### See

[TextStyle#fill](text.TextStyle.html#fill) For full fill options in canvas text

##### Standard

##### Parameters

###### value

[`FillInput`](scene.FillInput.md)

The fill color to use. Must be a string or number.

##### Returns

`void`

#### Overrides

[`TextStyle`](text.TextStyle.md).[`fill`](text.TextStyle.html#fill)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`filters`](text.TextStyle.html#filters)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`fontFamily`](text.TextStyle.html#fontfamily)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`fontSize`](text.TextStyle.html#fontsize)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`fontStyle`](text.TextStyle.html#fontstyle)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`fontVariant`](text.TextStyle.html#fontvariant)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`fontWeight`](text.TextStyle.html#fontweight)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`leading`](text.TextStyle.html#leading)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`letterSpacing`](text.TextStyle.html#letterspacing)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`lineHeight`](text.TextStyle.html#lineheight)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`padding`](text.TextStyle.html#padding)

***

### stroke

#### Set Signature

> **set** **stroke**(`value`): `void`

Sets the stroke style for the text. HTML text only supports color strokes (string or number values).
Texture strokes are not supported and will trigger a warning in debug mode.

##### Example

```ts
// Using hex colors
const text = new HTMLText({
    text: 'Outlined Text',
    style: {
        stroke: 0xff0000 // Red outline
    }
});

// Using CSS color strings
text.style.stroke = '#00ff00';     // Hex string (Green)
text.style.stroke = 'blue';        // Named color
text.style.stroke = 'rgb(255,0,0)' // RGB
text.style.stroke = '#f0f';        // Short hex

// Using stroke width
text.style = {
    stroke: {
        color: '#ff0000',
        width: 2
    }
};

// Remove stroke
text.style.stroke = null;

// Invalid usage (will trigger warning in debug)
text.style.stroke = {
    type: 'pattern',
    texture: Texture.from('pattern.png')
}; // Not supported, falls back to default
```

##### Throws

In debug mode when attempting to use unsupported stroke types

##### See

[TextStyle#stroke](text.TextStyle.html#stroke) For full stroke options in canvas text

##### Standard

##### Parameters

###### value

[`StrokeInput`](scene.StrokeInput.md)

The stroke style to use. Must be a string, number, or stroke configuration object

##### Returns

`void`

#### Overrides

[`TextStyle`](text.TextStyle.md).[`stroke`](text.TextStyle.html#stroke)

***

### styleKey

#### Get Signature

> **get** **styleKey**(): `string`

Returns a unique key for this instance.
This key is used for caching.

##### Returns

`string`

Unique key for the instance

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`styleKey`](text.TextStyle.html#stylekey)

***

### tagStyles

#### Get Signature

> **get** **tagStyles**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`HTMLTextStyleOptions`](text.HTMLTextStyleOptions.md)\>

Custom styles to apply to specific HTML tags.
Allows for consistent styling of custom elements without CSS overrides.

##### Example

```ts
const text = new HTMLText({
    text: '<red>Red</red>, <blue>Blue</blue>, <green>Green</green>',
    style: {
        tagStyles: {
            red: { fill: 'red' },
            blue: { fill: 'blue' },
            green: { fill: 'green' },
        }
    }
});
```

##### Standard

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`HTMLTextStyleOptions`](text.HTMLTextStyleOptions.md)\>

#### Set Signature

> **set** **tagStyles**(`value`): `void`

##### Standard

##### Parameters

###### value

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`HTMLTextStyleOptions`](text.HTMLTextStyleOptions.md)\>

##### Returns

`void`

#### Overrides

[`TextStyle`](text.TextStyle.md).[`tagStyles`](text.TextStyle.html#tagstyles)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`textBaseline`](text.TextStyle.html#textbaseline)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`trim`](text.TextStyle.html#trim)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`whiteSpace`](text.TextStyle.html#whitespace)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`wordWrap`](text.TextStyle.html#wordwrap)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`wordWrapWidth`](text.TextStyle.html#wordwrapwidth)

## Methods

### addOverride()

> **addOverride**(...`value`): `void`

**`Advanced`**

Add a style override, this can be any CSS property
it will override any built-in style. This is the
property and the value as a string (e.g., `color: red`).
This will override any other internal style.

#### Parameters

##### value

...`string`[]

CSS style(s) to add.

#### Returns

`void`

#### Example

```ts
style.addOverride('background-color: red');
```

***

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`assign`](text.TextStyle.html#assign)

***

### clone()

> **clone**(): `HTMLTextStyle`

Creates a new HTMLTextStyle object with the same values as this one.
This creates a deep copy of all style properties, including dropShadow and tag styles.

#### Returns

`HTMLTextStyle`

A new HTMLTextStyle instance with the same properties

#### Example

```ts
// Create original style
const originalStyle = new HTMLTextStyle({
    fontSize: 24,
    fill: '#ff0000',
    tagStyles: {
        header: { fontSize: 32, fill: '#00ff00' }
    }
});

// Clone the style
const clonedStyle = originalStyle.clone();

// Modify cloned style independently
clonedStyle.fontSize = 36;
clonedStyle.fill = '#0000ff';

// Original style remains unchanged
console.log(originalStyle.fontSize); // Still 24
console.log(originalStyle.fill); // Still '#ff0000'
```

Properties that are cloned:
- Basic text properties (fontSize, fontFamily, etc.)
- Fill and stroke styles
- Drop shadow configuration
- CSS overrides
- Tag styles (deep copied)
- Word wrap settings
- Alignment and spacing

#### See

 - HTMLTextStyle For available style properties
 - [HTMLTextStyle#cssOverrides](#cssoverrides) For CSS override handling
 - [HTMLTextStyle#tagStyles](#tagstyles) For tag style configuration

#### Standard

#### Overrides

[`TextStyle`](text.TextStyle.md).[`clone`](text.TextStyle.html#clone)

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

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`destroy`](text.TextStyle.html#destroy)

***

### removeOverride()

> **removeOverride**(...`value`): `void`

**`Advanced`**

Remove any overrides that match the value.

#### Parameters

##### value

...`string`[]

CSS style to remove.

#### Returns

`void`

#### Example

```ts
style.removeOverride('background-color: red');
```

***

### reset()

> **reset**(): `void`

Resets all properties to the default values

#### Returns

`void`

#### Inherited from

[`TextStyle`](text.TextStyle.md).[`reset`](text.TextStyle.html#reset)

***

### update()

> **update**(): `void`

**`Advanced`**

Updates the text style and triggers a refresh of the CSS style cache.
This method is called automatically when style properties are changed.

#### Returns

`void`

#### Example

```ts
// Update after multiple changes
const text = new HTMLText({
    text: 'Hello World',
    style
});

style.fontSize = 32;
style.fill = '#00ff00';
style.fontFamily = 'Arial';
style.update(); // Apply all changes at once
```

#### See

 - [HTMLTextStyle#cssStyle](#cssstyle) For accessing the generated CSS
 - [HTMLTextStyle#cssOverrides](#cssoverrides) For managing CSS overrides

#### Overrides

[`TextStyle`](text.TextStyle.md).[`update`](text.TextStyle.html#update)
