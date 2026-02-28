# Type Alias: ColorSource

> **ColorSource** = `string` \| `number` \| `number`[] \| [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \| [`Uint8ClampedArray`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) \| `HslColor` \| `HslaColor` \| `HsvColor` \| `HsvaColor` \| `RgbColor` \| `RgbaColor` \| [`Color`](color.Color.md) \| `number`

Valid color formats supported by PixiJS. These types extend from [colord](https://www.npmjs.com/package/colord)
with additional PixiJS-specific formats.

Common Formats:
```ts
// CSS Color Names
new Color('red');
new Color('blue');
new Color('green');

// Hex Values
new Color(0xff0000);     // RGB integer
new Color('#ff0000');    // 6-digit hex
new Color('#f00');       // 3-digit hex
new Color('#ff0000ff');  // 8-digit hex (with alpha)
new Color('#f00f');      // 4-digit hex (with alpha)

// RGB/RGBA Objects
new Color({ r: 255, g: 0, b: 0 });
new Color({ r: 255, g: 0, b: 0, a: 0.5 });

// RGB/RGBA Strings
new Color('rgb(255, 0, 0)');
new Color('rgba(255, 0, 0, 0.5)');
new Color('rgb(100% 0% 0%)');
new Color('rgba(100% 0% 0% / 50%)');

// Arrays (normalized 0-1)
new Color([1, 0, 0]);           // RGB
new Color([1, 0, 0, 0.5]);      // RGBA
new Color(new Float32Array([1, 0, 0, 0.5]));

// Arrays (0-255)
new Color(new Uint8Array([255, 0, 0]));
new Color(new Uint8ClampedArray([255, 0, 0, 128]));

// HSL/HSLA
new Color({ h: 0, s: 100, l: 50 });
new Color({ h: 0, s: 100, l: 50, a: 0.5 });
new Color('hsl(0, 100%, 50%)');
new Color('hsla(0deg 100% 50% / 50%)');

// HSV/HSVA
new Color({ h: 0, s: 100, v: 100 });
new Color({ h: 0, s: 100, v: 100, a: 0.5 });
```

## Remarks

- All color values are normalized internally to 0-1 range
- Alpha is always between 0-1
- Invalid colors will throw an error
- Original format is preserved when possible

## See

 - [Color](color.Color.md) For the main color utility class
 - [https://www.w3.org/TR/css-color-4](https://www.w3.org/TR/css-color-4) CSS Color Level 4 Specification

## Since

7.2.0
