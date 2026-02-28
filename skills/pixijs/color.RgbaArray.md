# Type Alias: RgbaArray

> **RgbaArray** = \[`number`, `number`, `number`, `number`\]

Array of RGBA color components, where each component is a number between 0 and 1.
The array must contain exactly 4 numbers in the order: red, green, blue, alpha.

## Example

```ts
// Full white (opaque)
const white: RgbaArray = [1, 1, 1, 1];

// Semi-transparent red
const transparentRed: RgbaArray = [1, 0, 0, 0.5];
```

## Remarks

- All components must be between 0 and 1
- Array must contain exactly 4 values
- Order is [red, green, blue, alpha]

## See

[Color](color.Color.md) For the main color utility class
