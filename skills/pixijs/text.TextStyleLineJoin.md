# Type Alias: TextStyleLineJoin

> **TextStyleLineJoin** = `"miter"` \| `"round"` \| `"bevel"`

The line join style for text strokes. Determines how lines connect at corners.

## Example

```ts
// Create text with miter joins (sharp corners)
const sharpText = new Text({
    text: 'Sharp Corners',
    style: {
        fontSize: 36,
        stroke: {
            color: '#4a1850',
            width: 4,
            lineJoin: 'miter'  // Sharp corners
        }
    }
});

// Create text with round joins
const roundText = new Text({
    text: 'Rounded Corners',
    style: {
        fontSize: 36,
        stroke: {
            color: '#4a1850',
            width: 4,
            lineJoin: 'round'  // Smooth rounded corners
        }
    }
});

// Create text with beveled joins
const bevelText = new Text({
    text: 'Beveled Corners',
    style: {
        fontSize: 36,
        stroke: {
            color: '#4a1850',
            width: 4,
            lineJoin: 'bevel'  // Flattened corners
        }
    }
});
```
Available values:
- 'miter': Creates sharp corners by extending the outer edges until they meet
- 'round': Creates smooth, rounded corners using a circular arc
- 'bevel': Creates flattened corners by filling an additional triangle between the outer edges

## See

[MDN lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)
