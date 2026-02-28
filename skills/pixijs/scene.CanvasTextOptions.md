# Interface: CanvasTextOptions

Constructor options used for `Text` instances. These options extend TextOptions with
canvas-specific features like texture styling.

## Example

```ts
// Create basic canvas text
const text = new Text({
    text: 'Hello Pixi!',
    style: {
        fontSize: 24,
        fill: 0xff1010,
    }
});

// Create text with custom texture style
const customText = new Text({
    text: 'Custom Text',
    style: {
        fontSize: 32,
        fill: 0x4a4a4a
    },
    textureStyle: {
        scaleMode: 'nearest',
    }
});
```

## Extends

- [`TextOptions`](text.TextOptions.md)

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

#### Inherited from

[`TextOptions`](text.TextOptions.md).[`anchor`](text.TextOptions.html#anchor)

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

#### Inherited from

[`TextOptions`](text.TextOptions.md).[`resolution`](text.TextOptions.html#resolution)

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

#### Inherited from

[`TextOptions`](text.TextOptions.md).[`roundPixels`](text.TextOptions.html#roundpixels)

***

### style?

> `optional` **style**: [`TextStyle`](text.TextStyle.md) \| [`TextStyleOptions`](text.TextStyleOptions.md)

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

#### Inherited from

[`TextOptions`](text.TextOptions.md).[`style`](text.TextOptions.html#style)

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

#### Inherited from

[`TextOptions`](text.TextOptions.md).[`text`](text.TextOptions.html#text)

***

### textureStyle?

> `optional` **textureStyle**: [`TextureStyleOptions`](rendering.TextureStyleOptions.md) \| [`TextureStyle`](rendering.TextureStyle.md)

**`Advanced`**

Optional texture style to use for the text texture. This allows fine control over
how the text is rendered to a texture before being displayed.

The texture style can affect:
- Scale mode (nearest/linear)
- Resolution
- Format (rgb/rgba)
- Alpha handling

#### Example

```ts
const text = new Text({
    text: 'Crisp Text',
    textureStyle: {
        scaleMode: 'nearest', // Pixel-perfect scaling
    }
});
```
