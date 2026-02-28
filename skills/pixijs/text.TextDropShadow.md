# Type Alias: TextDropShadow

> **TextDropShadow** = `object`

Defines a drop shadow effect for text rendering.
Drop shadows add depth and emphasis to text by creating a shadow offset from the text.

## Example

```ts
// Create text with basic drop shadow
const text = new Text({
    text: 'Shadow Text',
    style: {
        fontSize: 48,
        dropShadow: {
            alpha: 0.5,         // 50% opacity shadow
            angle: Math.PI / 6, // 30 degrees
            blur: 4,            // Soft shadow edge
            color: '#000000',   // Black shadow
            distance: 6         // Shadow offset
        }
    }
});

// Dynamic shadow updates
text.style.dropShadow = {
    alpha: Math.sin(Date.now() / 1000) * 0.5 + 0.5, // Pulsing opacity
    angle: Date.now() / 1000,                        // Rotating angle
    blur: 4,
    color: '#000000',
    distance: 6
};
```

## Properties

### alpha

> **alpha**: `number`

The opacity of the drop shadow.
- Range: 0 to 1
- 0 = fully transparent
- 1 = fully opaque

#### Example

```ts
// Set drop shadow opacity to 50%
dropShadow: {
   alpha: 0.5
}
```

#### Default

```ts
1
```

***

### angle

> **angle**: `number`

The angle of the drop shadow in radians.
- 0 = right
- Math.PI/2 = down
- Math.PI = left
- Math.PI*1.5 = up

#### Example

```ts
// Set drop shadow angle to 30 degrees
dropShadow: {
   angle: Math.PI / 6 // 30 degrees
}
```

#### Default

```ts
Math.PI/6 (30 degrees)
```

***

### blur

> **blur**: `number`

The blur radius of the shadow.
- 0 = sharp shadow
- Higher values = softer shadow

#### Example

```ts
// Set drop shadow blur radius to 10 pixels
dropShadow: {
  blur: 10
}
```

#### Default

```ts
0
```

***

### color

> **color**: [`ColorSource`](color.ColorSource.md)

The color of the drop shadow.
Accepts any valid CSS color string, hex number, or RGB/RGBA values.

#### Example

```ts
'#000000', 'rgba(0,0,0,0.5)', 0x000000
```

#### Default

```ts
'black'
```

***

### distance

> **distance**: `number`

The distance of the drop shadow from the text.
Measured in pixels.

#### Example

```ts
// Set drop shadow distance to 5 pixels
dropShadow: {
  distance: 5
}
```

#### Default

```ts
5
```
