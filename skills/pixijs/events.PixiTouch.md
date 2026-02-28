# Interface: PixiTouch

A PixiJS compatible touch event interface that extends the standard DOM Touch interface.
Provides additional properties to normalize touch input with mouse/pointer events.

## Example

```ts
// Access touch information
sprite.on('touchstart', (event) => {
    // Standard touch properties
    console.log('Touch position:', event.clientX, event.clientY);
    console.log('Touch ID:', event.pointerId);

    // Additional PixiJS properties
    console.log('Pressure:', event.pressure);
    console.log('Size:', event.width, event.height);
    console.log('Tilt:', event.tiltX, event.tiltY);
});
```

## See

[https://developer.mozilla.org/en-US/docs/Web/API/Touch](https://developer.mozilla.org/en-US/docs/Web/API/Touch) DOM Touch Interface

## Extends

- [`Touch`](https://developer.mozilla.org/docs/Web/API/Touch)

## Properties

### altKey

> **altKey**: `boolean`

Whether the "alt" key was pressed when this touch event occurred (copied from TouchEvent)

***

### button

> **button**: `number`

The button being pressed (0: left, 1: middle, 2: right)

***

### buttons

> **buttons**: `number`

Bitmap of currently pressed buttons

***

### ctrlKey

> **ctrlKey**: `boolean`

Whether the "control" key was pressed when this touch event occurred (copied from TouchEvent)

***

### height

> **height**: `number`

The height of the touch contact area

***

### isNormalized

> **isNormalized**: `boolean`

Whether the event was normalized by PixiJS

***

### isPrimary

> **isPrimary**: `boolean`

Whether this is the primary touch point

***

### layerX

> **layerX**: `number`

The x coordinate relative to the current layer

***

### layerY

> **layerY**: `number`

The y coordinate relative to the current layer

***

### metaKey

> **metaKey**: `boolean`

Whether the "meta" key was pressed when this touch event occurred (copied from TouchEvent)

***

### offsetX

> **offsetX**: `number`

The x coordinate relative to the target's offset parent

***

### offsetY

> **offsetY**: `number`

The y coordinate relative to the target's offset parent

***

### pointerId

> **pointerId**: `number`

Unique identifier for this touch point

***

### pointerType

> **pointerType**: `string`

The type of pointer that triggered this event

***

### pressure

> **pressure**: `number`

The normalized pressure of the pointer (0 to 1)

***

### shiftKey

> **shiftKey**: `boolean`

Whether the "shift" key was pressed when this touch event occurred (copied from TouchEvent)

***

### tangentialPressure

> **tangentialPressure**: `number`

The normalized tangential pressure of the pointer

***

### tiltX

> **tiltX**: `number`

The angle of tilt along the x-axis (in degrees)

***

### tiltY

> **tiltY**: `number`

The angle of tilt along the y-axis (in degrees)

***

### twist

> **twist**: `number`

The rotation angle of the pointer (e.g., pen)

***

### type

> **type**: `string`

The type of touch event

***

### width

> **width**: `number`

The width of the touch contact area
