# Interface: StrokeAttributes

A stroke attribute object that defines how lines and shape outlines are drawn.
Controls properties like width, alignment, line caps, joins, and more.

## Example

```ts
const graphics = new Graphics();

// Basic stroke with width
graphics.stroke({
    width: 4,
    color: 0xff0000 // Or use a Color object
});

// Stroke with rounded corners and ends
const text = new Text('Hello World', {
    fontSize: 32,
    fill: 0x000000, // Text color
    stroke: {
    width: 8,
        color: 0x00ff00, // Or use a Color object
        cap: 'round',    // Round end caps
        join: 'round',   // Round corner joins
        alignment: 0.5   // Center alignment
    }
});

// Stroke with mitered corners
graphics.stroke({
    width: 6,
    color: 0x0000ff, // Or use a Color object
    join: 'miter',
    miterLimit: 3,   // Limit how far miter extends
    alignment: 0     // Outside alignment
});

// Pixel-perfect line
graphics.stroke({
    width: 1,
    pixelLine: true, // Ensures crisp 1px lines
    color: 0x000000  // Or use a Color object
});
```

## See

 - [Graphics#stroke](scene.Graphics.html#stroke) For applying strokes to paths
 - [LineCap](scene.LineCap.md) For line end cap options
 - [LineJoin](scene.LineJoin.md) For line join options

## Extended by

- [`StrokeStyle`](scene.StrokeStyle.md)

## Properties

### alignment?

> `optional` **alignment**: `number`

The alignment of the stroke relative to the path.
- 1: Inside the shape
- 0.5: Centered on the path (default)
- 0: Outside the shape

#### Example

```ts
// Inside alignment
const stroke = { alignment: 1 };
// Centered alignment
const stroke = { alignment: 0.5 };
// Outside alignment
const stroke = { alignment: 0 };
```

#### Default

```ts
0.5
```

***

### cap?

> `optional` **cap**: [`LineCap`](scene.LineCap.md)

The style to use for the ends of open paths.
- 'butt': Ends at path end
- 'round': Rounds past path end
- 'square': Squares past path end

#### Example

```ts
const stroke = { cap: 'round' };
```

#### Default

```ts
'butt'
```

#### See

[LineCap](scene.LineCap.md) For line cap options

***

### join?

> `optional` **join**: [`LineJoin`](scene.LineJoin.md)

The style to use where paths connect.
- 'miter': Sharp corner
- 'round': Rounded corner
- 'bevel': Beveled corner

#### Example

```ts
const stroke = { join: 'round' };
```

#### Default

```ts
'miter'
```

#### See

[LineJoin](scene.LineJoin.md) For line join options

***

### miterLimit?

> `optional` **miterLimit**: `number`

Controls how far miter joins can extend. Only applies when join is 'miter'.
Higher values allow sharper corners.

#### Example

```ts
const stroke = {
    join: 'miter',
    miterLimit: 3,
};
```

#### Default

```ts
10
```

***

### pixelLine?

> `optional` **pixelLine**: `boolean`

When true, ensures crisp 1px lines by aligning to pixel boundaries.
> [!NOTE] Only available for Graphics fills.

#### Example

```ts
const graphics = new Graphics();

// Draw pixel-perfect line
graphics
    .moveTo(50, 50)
    .lineTo(150, 50)
    .stroke({
        width: 1,
        pixelLine: true,
        color: 0x000000
    });
```

#### Default

```ts
false
```

***

### width?

> `optional` **width**: `number`

The width of the stroke in pixels.

#### Example

```ts
const stroke = { width: 4 };
```

#### Default

```ts
1
```
