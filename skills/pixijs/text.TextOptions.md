# Interface: TextOptions\<TEXT_STYLE, TEXT_STYLE_OPTIONS\>

Options for creating text objects in PixiJS. This interface defines the common properties
used across different text rendering implementations (Canvas, HTML, and Bitmap).

## Example

```ts
// Create basic text with minimal options
const basicText = new Text({
    text: 'Hello Pixi!',
    style: {
        fontSize: 24,
        fill: 0xff1010
    }
});

// Create text with advanced styling
const styledText = new Text({
    text: 'Styled Text',
    style: {
        fontFamily: 'Arial',
        fontSize: 32,
        fill: new FillGradient({
            end: { x: 1, y: 1 },
            stops: [
                { color: 0xff0000, offset: 0 }, // Red at start
                { color: 0x0000ff, offset: 1 }, // Blue at end
            ]
        }),
        stroke: { color: '#4a1850', width: 5 },
        dropShadow: {
            color: '#000000',
            blur: 4,
            distance: 6
        },
        align: 'center'
    },
    anchor: 0.5,
    resolution: window.devicePixelRatio
});

// Create multiline text with word wrap
const wrappedText = new Text({
    text: 'This is a long piece of text that will wrap onto multiple lines',
    style: {
        fontSize: 20,
        wordWrap: true,
        wordWrapWidth: 200,
        lineHeight: 30
    },
    resolution: 2,
    roundPixels: true
});
```

## Extends

- `TextOptions`.[`ViewContainerOptions`](scene.ViewContainerOptions.md)

## Extended by

- [`HTMLTextOptions`](text.HTMLTextOptions.md)
- [`CanvasTextOptions`](scene.CanvasTextOptions.md)

## Type Parameters

### TEXT_STYLE

`TEXT_STYLE` *extends* [`TextStyle`](text.TextStyle.md) = [`TextStyle`](text.TextStyle.md)

### TEXT_STYLE_OPTIONS

`TEXT_STYLE_OPTIONS` *extends* [`TextStyleOptions`](text.TextStyleOptions.md) = [`TextStyleOptions`](text.TextStyleOptions.md)

## Properties

### anchor?

> `optional` **anchor**: `number` \| [`PointData`](maths.PointData.md)

The anchor point of the text that controls the origin point for positioning and rotation.
Can be a number (same value for x/y) or a PointData object.
- (0,0) is top-left
- (0.5,0.5) is center
- (1,1) is bottom-right
```ts
// Set anchor to center
const text = new Text({
    text: 'Hello Pixi!',
    anchor: 0.5 // Same as { x: 0.5, y: 0.5 }
});
// Set anchor to top-left
const text2 = new Text({
    text: 'Hello Pixi!',
    anchor: { x: 0, y: 0 } // Top-left corner
});
// Set anchor to bottom-right
const text3 = new Text({
    text: 'Hello Pixi!',
    anchor: { x: 1, y: 1 } // Bottom-right corner
});
```

#### Default

```ts
{ x: 0, y: 0 }
```

***

### resolution?

> `optional` **resolution**: `number`

The resolution/device pixel ratio for rendering.
Higher values result in sharper text at the cost of performance.
Set to null for auto-resolution based on device.

#### Example

```ts
const text = new Text({
    text: 'Hello Pixi!',
    resolution: 2 // High DPI for sharper text
});
const autoResText = new Text({
    text: 'Auto Resolution',
    resolution: null // Use device's pixel ratio
});
```

#### Default

```ts
null
```

***

### roundPixels?

> `optional` **roundPixels**: `boolean`

Whether to round the x/y position to whole pixels.
Enabling can prevent anti-aliasing of text edges but may cause slight position shifting.

#### Example

```ts
const text = new Text({
    text: 'Rounded Text',
    roundPixels: true // Rounds position to whole pixels
});
@default false

***

### style?

> `optional` **style**: `TEXT_STYLE` \| `TEXT_STYLE_OPTIONS`

The style configuration for the text.
Can be a TextStyle instance or a configuration object.
Supports canvas text styles, HTML text styles, and bitmap text styles.

#### Example

```ts
const text = new Text({
    text: 'Styled Text',
    style: {
        fontSize: 24,
        fill: 0xff1010, // Red color
        fontFamily: 'Arial',
        align: 'center', // Center alignment
        stroke: { color: '#4a1850', width: 5 }, // Purple stroke
        dropShadow: {
            color: '#000000', // Black shadow
            blur: 4, // Shadow blur
            distance: 6 // Shadow distance
        }
    }
});
const htmlText = new HTMLText({
    text: 'HTML Styled Text',
    style: {
        fontSize: '20px',
        fill: 'blue',
        fontFamily: 'Verdana',
    }
});
const bitmapText = new BitmapText({
    text: 'Bitmap Styled Text',
    style: {
        fontName: 'Arial',
        fontSize: 32,
    }
})

***

### text?

> `optional` **text**: [`TextString`](text.TextString.md)

The text content to display. Use '\n' for line breaks.
Accepts strings, numbers, or objects with toString() method.

#### Example

```ts
const text = new Text({
    text: 'Hello Pixi!',
});
const multilineText = new Text({
    text: 'Line 1\nLine 2\nLine 3',
});
const numberText = new Text({
    text: 12345, // Will be converted to '12345'
});
const objectText = new Text({
    text: { toString: () => 'Object Text' }, // Custom toString
});
```

#### Default

```ts
''
```
