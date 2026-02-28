# Class: Color

Color utility class for managing colors in various formats. Provides a unified way to work
with colors across your PixiJS application.

Features:
- Accepts multiple color formats (hex, RGB, HSL, etc.)
- Automatic format conversion
- Color manipulation methods
- Component access (r,g,b,a)
- Chainable operations

## Example

```js
import { Color } from 'pixi.js';

new Color('red').toArray(); // [1, 0, 0, 1]
new Color(0xff0000).toArray(); // [1, 0, 0, 1]
new Color('ff0000').toArray(); // [1, 0, 0, 1]
new Color('#f00').toArray(); // [1, 0, 0, 1]
new Color('0xff0000ff').toArray(); // [1, 0, 0, 1]
new Color('#f00f').toArray(); // [1, 0, 0, 1]
new Color({ r: 255, g: 0, b: 0, a: 0.5 }).toArray(); // [1, 0, 0, 0.5]
new Color('rgb(255, 0, 0, 0.5)').toArray(); // [1, 0, 0, 0.5]
new Color([1, 1, 1]).toArray(); // [1, 1, 1, 1]
new Color([1, 0, 0, 0.5]).toArray(); // [1, 0, 0, 0.5]
new Color(new Float32Array([1, 0, 0, 0.5])).toArray(); // [1, 0, 0, 0.5]
new Color(new Uint8Array([255, 0, 0, 255])).toArray(); // [1, 0, 0, 1]
new Color(new Uint8ClampedArray([255, 0, 0, 255])).toArray(); // [1, 0, 0, 1]
new Color({ h: 0, s: 100, l: 50, a: 0.5 }).toArray(); // [1, 0, 0, 0.5]
new Color('hsl(0, 100%, 50%, 50%)').toArray(); // [1, 0, 0, 0.5]
new Color({ h: 0, s: 100, v: 100, a: 0.5 }).toArray(); // [1, 0, 0, 0.5]

// Convert between formats
const color = new Color('red');
color.toHex();        // "#ff0000"
color.toRgbString();  // "rgb(255,0,0,1)"
color.toNumber();     // 0xff0000

// Access components
color.red;    // 1
color.green;  // 0
color.blue;   // 0
color.alpha;  // 1

// Chain operations
color
  .setAlpha(0.5)
  .multiply([0.5, 0.5, 0.5])
  .premultiply(0.8);
```

## Remarks

The Color class automatically normalizes all color values internally:
- RGB components are stored as floats between 0-1
- Alpha is always between 0-1
- Color operations clamp values to valid ranges
- Original input format is preserved when possible

## Since

7.2.0

## Constructors

### Constructor

> **new Color**(`value`): `Color`

#### Parameters

##### value

[`ColorSource`](color.ColorSource.md) = `0xffffff`

Optional value to use, if not provided, white is used.

#### Returns

`Color`

## Other

### shared

> `readonly` `static` **shared**: `Color`

Static shared Color instance used for utility operations. This is a singleton color object
that can be reused to avoid creating unnecessary Color instances.
> [!IMPORTANT] You should be careful when using this shared instance, as it is mutable and can be
> changed by any code that uses it.
>
> It is best used for one-off color operations or temporary transformations.
> For persistent colors, create your own Color instance instead.

#### Example

```ts
import { Color } from 'pixi.js';

// Use shared instance for one-off color operations
Color.shared.setValue(0xff0000);
const redHex = Color.shared.toHex();     // "#ff0000"
const redRgb = Color.shared.toRgbArray(); // [1, 0, 0]

// Temporary color transformations
const colorNumber = Color.shared
    .setValue('#ff0000')     // Set to red
    .setAlpha(0.5)          // Make semi-transparent
    .premultiply(0.8)       // Apply premultiplication
    .toNumber();            // Convert to number

// Chain multiple operations
const result = Color.shared
    .setValue(someColor)
    .multiply(tintColor)
    .toPremultiplied(alpha);
```

#### Remarks

- This is a shared instance - be careful about multiple code paths using it simultaneously
- Use for temporary color operations to avoid allocating new Color instances
- The value is preserved between operations, so reset if needed
- For persistent colors, create your own Color instance instead

***

### alpha

#### Get Signature

> **get** **alpha**(): `number`

Get the alpha component of the color, normalized between 0 and 1.

##### Example

```ts
const color = new Color('red');
console.log(color.alpha); // 1 (fully opaque)

const transparent = new Color('rgba(255, 0, 0, 0.5)');
console.log(transparent.alpha); // 0.5 (semi-transparent)
```

##### Returns

`number`

***

### blue

#### Get Signature

> **get** **blue**(): `number`

Get the blue component of the color, normalized between 0 and 1.

##### Example

```ts
const color = new Color('blue');
console.log(color.blue); // 1

const yellow = new Color('#ffff00');
console.log(yellow.blue); // 0
```

##### Returns

`number`

***

### green

#### Get Signature

> **get** **green**(): `number`

Get the green component of the color, normalized between 0 and 1.

##### Example

```ts
const color = new Color('lime');
console.log(color.green); // 1

const red = new Color('#ff0000');
console.log(red.green); // 0
```

##### Returns

`number`

***

### red

#### Get Signature

> **get** **red**(): `number`

Get the red component of the color, normalized between 0 and 1.

##### Example

```ts
const color = new Color('red');
console.log(color.red); // 1

const green = new Color('#00ff00');
console.log(green.red); // 0
```

##### Returns

`number`

***

### value

#### Get Signature

> **get** **value**(): `string` \| `number` \| `number`[] \| `RgbColor` \| `HslColor` \| `HsvColor` \| `RgbaColor` \| `HslaColor` \| `HsvaColor` \| [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)\<`ArrayBufferLike`\> \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\> \| [`Uint8ClampedArray`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)\<`ArrayBufferLike`\>

##### Returns

`string` \| `number` \| `number`[] \| `RgbColor` \| `HslColor` \| `HsvColor` \| `RgbaColor` \| `HslaColor` \| `HsvaColor` \| [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)\<`ArrayBufferLike`\> \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\> \| [`Uint8ClampedArray`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)\<`ArrayBufferLike`\>

#### Set Signature

> **set** **value**(`value`): `void`

The current color source. This property allows getting and setting the color value
while preserving the original format where possible.

##### Remarks

When setting:
- Setting to a `Color` instance copies its source and components
- Setting to other valid sources normalizes and stores the value
- Setting to `null` throws an Error
- The color remains unchanged if normalization fails

When getting:
- Returns `null` if color was modified by [Color.multiply](#multiply) or [Color.premultiply](#premultiply)
- Otherwise returns the original color source

##### Example

```ts
// Setting different color formats
const color = new Color();

color.value = 0xff0000;         // Hex number
color.value = '#ff0000';        // Hex string
color.value = [1, 0, 0];        // RGB array
color.value = [1, 0, 0, 0.5];   // RGBA array
color.value = { r: 1, g: 0, b: 0 }; // RGB object

// Copying from another color
const red = new Color('red');
color.value = red;  // Copies red's components

// Getting the value
console.log(color.value);  // Returns original format

// After modifications
color.multiply([0.5, 0.5, 0.5]);
console.log(color.value);  // Returns null
```

##### Throws

When attempting to set `null`

##### Parameters

###### value

[`ColorSource`](color.ColorSource.md)

##### Returns

`void`

***

### multiply()

> **multiply**(`value`): `this`

Multiply with another color.

This action is destructive and modifies the original color.

#### Parameters

##### value

[`ColorSource`](color.ColorSource.md)

The color to multiply by. Accepts any valid color format:
- Hex strings/numbers (e.g., '#ff0000', 0xff0000)
- RGB/RGBA arrays ([1, 0, 0], [1, 0, 0, 1])
- Color objects ({ r: 1, g: 0, b: 0 })
- CSS color names ('red', 'blue')

#### Returns

`this`

this - The Color instance for chaining

#### Example

```ts
// Basic multiplication
const color = new Color('#ff0000');
color.multiply(0x808080); // 50% darker red

// With transparency
color.multiply([1, 1, 1, 0.5]); // 50% transparent

// Chain operations
color
    .multiply('#808080')
    .multiply({ r: 1, g: 1, b: 1, a: 0.5 });
```

#### Remarks

- Multiplies each RGB component and alpha separately
- Values are clamped between 0-1
- Original color format is lost (value becomes null)
- Operation cannot be undone

***

### premultiply()

> **premultiply**(`alpha`, `applyToRGB?`): `this`

Converts color to a premultiplied alpha format.

This action is destructive and modifies the original color.

#### Parameters

##### alpha

`number`

The alpha value to multiply by (0-1)

##### applyToRGB?

`boolean` = `true`

Whether to premultiply RGB channels

#### Returns

`this`

The Color instance for chaining

#### Example

```ts
// Basic premultiplication
const color = new Color('red');
color.premultiply(0.5); // 50% transparent red with premultiplied RGB

// Alpha only (RGB unchanged)
color.premultiply(0.5, false); // 50% transparent, original RGB

// Chain with other operations
color
    .multiply(0x808080)
    .premultiply(0.5)
    .toNumber();
```

#### Remarks

- RGB channels are multiplied by alpha when applyToRGB is true
- Alpha is always set to the provided value
- Values are clamped between 0-1
- Original color format is lost (value becomes null)
- Operation cannot be undone

***

### setAlpha()

> **setAlpha**(`alpha`): `this`

Set alpha (transparency) value while preserving color components.

Provides a chainable interface for setting alpha.

#### Parameters

##### alpha

`number`

Alpha value between 0 (fully transparent) and 1 (fully opaque)

#### Returns

`this`

The Color instance for chaining

#### Example

```ts
// Basic alpha setting
const color = new Color('red');
color.setAlpha(0.5);  // 50% transparent red

// Chain with other operations
color
    .setValue('#ff0000')
    .setAlpha(0.8)    // 80% opaque
    .premultiply(0.5); // Further modify alpha

// Reset to fully opaque
color.setAlpha(1);
```

#### Remarks

- Alpha value is clamped between 0-1
- Can be chained with other color operations

***

### setValue()

> **setValue**(`value`): `this`

Sets the color value and returns the instance for chaining.

This is a chainable version of setting the `value` property.

#### Parameters

##### value

[`ColorSource`](color.ColorSource.md)

The color to set. Accepts various formats:
- Hex strings/numbers (e.g., '#ff0000', 0xff0000)
- RGB/RGBA values (arrays, objects)
- CSS color names
- HSL/HSLA values
- HSV/HSVA values

#### Returns

`this`

The Color instance for chaining

#### Example

```ts
// Basic usage
const color = new Color();
color.setValue('#ff0000')
    .setAlpha(0.5)
    .premultiply(0.8);

// Different formats
color.setValue(0xff0000);          // Hex number
color.setValue('#ff0000');         // Hex string
color.setValue([1, 0, 0]);         // RGB array
color.setValue([1, 0, 0, 0.5]);    // RGBA array
color.setValue({ r: 1, g: 0, b: 0 }); // RGB object

// Copy from another color
const red = new Color('red');
color.setValue(red);
```

#### Throws

If the color value is invalid or null

#### See

[Color.value](#value) For the underlying value property

***

### toArray()

> **toArray**\<`T`\>(`out?`): `T`

Convert to an [R, G, B, A] array of normalized floats (numbers from 0.0 to 1.0).

#### Type Parameters

##### T

`T` *extends* `number`[] \| [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)\<`ArrayBufferLike`\> = `number`[]

#### Parameters

##### out?

`T`

Optional output array. If not provided,
a cached array will be used and returned.

#### Returns

`T`

Array containing RGBA components as floats between 0-1

#### Example

```ts
// Basic usage
new Color('white').toArray();  // returns [1, 1, 1, 1]
new Color('red').toArray();    // returns [1, 0, 0, 1]

// With alpha
new Color('rgba(255,0,0,0.5)').toArray(); // returns [1, 0, 0, 0.5]

// Using custom output array
const rgba = new Float32Array(4);
new Color('blue').toArray(rgba); // rgba is now [0, 0, 1, 1]
```

#### Remarks

- Output values are normalized between 0-1
- Includes alpha component as the fourth value
- Reuses internal cache array if no output array provided

***

### toBgrNumber()

> **toBgrNumber**(): `number`

Convert to a BGR number.

Useful for platforms that expect colors in BGR format.

#### Returns

`number`

The color as a 24-bit BGR integer

#### Example

```ts
// Convert RGB to BGR
new Color(0xffcc99).toBgrNumber(); // returns 0x99ccff

// Common use case: platform-specific color format
const color = new Color('orange');
const bgrColor = color.toBgrNumber(); // Color with swapped R/B channels
```

#### Remarks

This swaps the red and blue channels compared to the normal RGB format:
- RGB 0xRRGGBB becomes BGR 0xBBGGRR

***

### toHex()

> **toHex**(): `string`

Convert to a hexadecimal string (6 characters).

#### Returns

`string`

A CSS-compatible hex color string (e.g., "#ff0000")

#### Example

```ts
import { Color } from 'pixi.js';

// Basic colors
new Color('red').toHex();    // returns "#ff0000"
new Color('white').toHex();  // returns "#ffffff"
new Color('black').toHex();  // returns "#000000"

// From different formats
new Color(0xff0000).toHex(); // returns "#ff0000"
new Color([1, 0, 0]).toHex(); // returns "#ff0000"
new Color({ r: 1, g: 0, b: 0 }).toHex(); // returns "#ff0000"
```

#### Remarks

- Always returns a 6-character hex string
- Includes leading "#" character
- Alpha channel is ignored
- Values are rounded to nearest hex value

***

### toHexa()

> **toHexa**(): `string`

Convert to a hexadecimal string with alpha (8 characters).

#### Returns

`string`

A CSS-compatible hex color string with alpha (e.g., "#ff0000ff")

#### Example

```ts
import { Color } from 'pixi.js';

// Fully opaque colors
new Color('red').toHexa();   // returns "#ff0000ff"
new Color('white').toHexa(); // returns "#ffffffff"

// With transparency
new Color('rgba(255, 0, 0, 0.5)').toHexa(); // returns "#ff00007f"
new Color([1, 0, 0, 0]).toHexa(); // returns "#ff000000"
```

#### Remarks

- Returns an 8-character hex string
- Includes leading "#" character
- Alpha is encoded in last two characters
- Values are rounded to nearest hex value

***

### toLittleEndianNumber()

> **toLittleEndianNumber**(): `number`

Convert to a hexadecimal number in little endian format (e.g., BBGGRR).

Useful for platforms that expect colors in little endian byte order.

#### Returns

`number`

The color as a number in little endian format (BBGGRR)

#### Example

```ts
import { Color } from 'pixi.js';

// Convert RGB color to little endian format
new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff

// Common use cases:
const color = new Color('orange');
const leColor = color.toLittleEndianNumber(); // Swaps byte order for LE systems

// Multiple conversions
const colors = {
    normal: 0xffcc99,
    littleEndian: new Color(0xffcc99).toLittleEndianNumber(), // 0x99ccff
    backToNormal: new Color(0x99ccff).toLittleEndianNumber()  // 0xffcc99
};
```

#### Remarks

- Swaps R and B channels in the color value
- RGB 0xRRGGBB becomes 0xBBGGRR
- Useful for systems that use little endian byte order
- Can be used to convert back and forth between formats

#### See

[Color.toBgrNumber](#tobgrnumber) For BGR format without byte swapping

***

### toNumber()

> **toNumber**(): `number`

Convert to a hexadecimal number.

#### Returns

`number`

The color as a 24-bit RGB integer

#### Example

```ts
// Basic usage
new Color('white').toNumber(); // returns 0xffffff
new Color('red').toNumber();   // returns 0xff0000

// Store as hex
const color = new Color('blue');
const hex = color.toNumber(); // 0x0000ff
```

***

### toPremultiplied()

> **toPremultiplied**(`alpha`, `applyToRGB?`): `number`

Returns the color as a 32-bit premultiplied alpha integer.

Format: 0xAARRGGBB

#### Parameters

##### alpha

`number`

The alpha value to multiply by (0-1)

##### applyToRGB?

`boolean` = `true`

Whether to premultiply RGB channels

#### Returns

`number`

The premultiplied color as a 32-bit integer

#### Example

```ts
// Convert to premultiplied format
const color = new Color('red');

// Full opacity (0xFFRRGGBB)
color.toPremultiplied(1.0); // 0xFFFF0000

// 50% transparency with premultiplied RGB
color.toPremultiplied(0.5); // 0x7F7F0000

// 50% transparency without RGB premultiplication
color.toPremultiplied(0.5, false); // 0x7FFF0000
```

#### Remarks

- Returns full opacity (0xFF000000) when alpha is 1.0
- Returns 0 when alpha is 0.0 and applyToRGB is true
- RGB values are rounded during premultiplication

***

### toRgb()

> **toRgb**(): `RgbColor`

Convert to a RGB color object with normalized components (0-1).

Alpha component is omitted in the output.

#### Returns

`RgbColor`

An RGB object with normalized components

#### Example

```ts
import { Color } from 'pixi.js';

// Convert colors to RGB objects
new Color('white').toRgb();     // returns { r: 1, g: 1, b: 1 }
new Color('#ff0000').toRgb();   // returns { r: 1, g: 0, b: 0 }

// Alpha is ignored
new Color('rgba(255,0,0,0.5)').toRgb(); // returns { r: 1, g: 0, b: 0 }
```

***

### toRgba()

> **toRgba**(): `RgbaColor`

Convert to a RGBA color object with normalized components (0-1).

#### Returns

`RgbaColor`

An RGBA object with normalized components

#### Example

```ts
import { Color } from 'pixi.js';

// Convert colors to RGBA objects
new Color('white').toRgba();     // returns { r: 1, g: 1, b: 1, a: 1 }
new Color('#ff0000').toRgba();   // returns { r: 1, g: 0, b: 0, a: 1 }

// With transparency
new Color('rgba(255,0,0,0.5)').toRgba(); // returns { r: 1, g: 0, b: 0, a: 0.5 }
```

***

### toRgbArray()

> **toRgbArray**\<`T`\>(`out?`): `T`

Convert to an [R, G, B] array of normalized floats (numbers from 0.0 to 1.0).

#### Type Parameters

##### T

`T` *extends* `number`[] \| [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)\<`ArrayBufferLike`\> = `number`[]

#### Parameters

##### out?

`T`

Optional output array. If not provided,
a cached array will be used and returned.

#### Returns

`T`

Array containing RGB components as floats between 0-1

#### Example

```ts
// Basic usage
new Color('white').toRgbArray(); // returns [1, 1, 1]
new Color('red').toRgbArray();   // returns [1, 0, 0]

// Using custom output array
const rgb = new Float32Array(3);
new Color('blue').toRgbArray(rgb); // rgb is now [0, 0, 1]
```

#### Remarks

- Output values are normalized between 0-1
- Alpha component is omitted from output
- Reuses internal cache array if no output array provided

***

### toRgbaString()

> **toRgbaString**(): `string`

Convert to a CSS-style rgba string representation.

RGB components are scaled to 0-255 range, alpha remains 0-1.

#### Returns

`string`

A CSS-compatible rgba string

#### Example

```ts
import { Color } from 'pixi.js';

// Convert colors to RGBA strings
new Color('white').toRgbaString();     // returns "rgba(255,255,255,1)"
new Color('#ff0000').toRgbaString();   // returns "rgba(255,0,0,1)"

// With transparency
new Color([1, 0, 0, 0.5]).toRgbaString(); // returns "rgba(255,0,0,0.5)"
```

***

### toUint8RgbArray()

> **toUint8RgbArray**\<`T`\>(`out?`): `T`

Convert to an [R, G, B] array of clamped uint8 values (0 to 255).

#### Type Parameters

##### T

`T` *extends* `number`[] \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\> \| [`Uint8ClampedArray`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)\<`ArrayBufferLike`\> = `number`[]

#### Parameters

##### out?

`T`

Optional output array. If not provided,
a cached array will be used and returned.

#### Returns

`T`

Array containing RGB components as integers between 0-255

#### Example

```ts
// Basic usage
new Color('white').toUint8RgbArray(); // returns [255, 255, 255]
new Color('#ff0000').toUint8RgbArray(); // returns [255, 0, 0]

// Using custom output array
const rgb = new Uint8Array(3);
new Color('blue').toUint8RgbArray(rgb); // rgb is now [0, 0, 255]

// Using different array types
new Color('red').toUint8RgbArray(new Uint8ClampedArray(3)); // [255, 0, 0]
new Color('red').toUint8RgbArray([]); // [255, 0, 0]
```

#### Remarks

- Output values are always clamped between 0-255
- Alpha component is not included in output
- Reuses internal cache array if no output array provided

## utility

### isColorLike()

> `static` **isColorLike**(`value`): `value is ColorSource`

Check if a value can be interpreted as a valid color format.
Supports all color formats that can be used with the Color class.

#### Parameters

##### value

`unknown`

Value to check

#### Returns

`value is ColorSource`

True if the value can be used as a color

#### Example

```ts
import { Color } from 'pixi.js';

// CSS colors and hex values
Color.isColorLike('red');          // true
Color.isColorLike('#ff0000');      // true
Color.isColorLike(0xff0000);       // true

// Arrays (RGB/RGBA)
Color.isColorLike([1, 0, 0]);      // true
Color.isColorLike([1, 0, 0, 0.5]); // true

// TypedArrays
Color.isColorLike(new Float32Array([1, 0, 0]));          // true
Color.isColorLike(new Uint8Array([255, 0, 0]));          // true
Color.isColorLike(new Uint8ClampedArray([255, 0, 0]));   // true

// Object formats
Color.isColorLike({ r: 1, g: 0, b: 0 });            // true (RGB)
Color.isColorLike({ r: 1, g: 0, b: 0, a: 0.5 });    // true (RGBA)
Color.isColorLike({ h: 0, s: 100, l: 50 });         // true (HSL)
Color.isColorLike({ h: 0, s: 100, l: 50, a: 0.5 }); // true (HSLA)
Color.isColorLike({ h: 0, s: 100, v: 100 });        // true (HSV)
Color.isColorLike({ h: 0, s: 100, v: 100, a: 0.5 });// true (HSVA)

// Color instances
Color.isColorLike(new Color('red')); // true

// Invalid values
Color.isColorLike(null);           // false
Color.isColorLike(undefined);      // false
Color.isColorLike({});             // false
Color.isColorLike([]);             // false
Color.isColorLike('not-a-color');  // false
```

#### Remarks

Checks for the following formats:
- Numbers (0x000000 to 0xffffff)
- CSS color strings
- RGB/RGBA arrays and objects
- HSL/HSLA objects
- HSV/HSVA objects
- TypedArrays (Float32Array, Uint8Array, Uint8ClampedArray)
- Color instances

#### See

 - [ColorSource](color.ColorSource.md) For supported color format types
 - [Color.setValue](#setvalue) For setting color values
