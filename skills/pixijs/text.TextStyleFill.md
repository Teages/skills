# Type Alias: TextStyleFill

> **TextStyleFill** = `string` \| `string`[] \| `number` \| `number`[] \| [`CanvasGradient`](https://developer.mozilla.org/docs/Web/API/CanvasGradient) \| [`CanvasPattern`](https://developer.mozilla.org/docs/Web/API/CanvasPattern)

The fill style input for text styles.

This can be:
- A color string like 'red', '#00FF00', or 'rgba(255,0,0,0.5)'
- A hex number like 0xff0000 for red
- A FillStyle object with properties like { color: 0xff0000, alpha: 0.5 }
- A FillGradient for gradient fills
- A FillPattern for pattern/texture fills

## Example

```ts
// Simple Fills
new TextStyle({ fill: 'red' }); // Color string
new TextStyle({ fill: 0x00ff00 }); // Hex color
new TextStyle({ fill: 'rgb(255,0,0)' }); // RGB string
// Gradients
new TextStyle({
    fill: new FillGradient({
        end: { x: 1, y: 1 },
        stops: [
            { color: 0xff0000, offset: 0 }, // Red at start
            { color: 0x0000ff, offset: 1 }, // Blue at end
        ]
    }),
});
// Patterns
new TextStyle({
   fill: new FillPattern(Assets.get('pattern.png'))
});
```
