# Interface: IHitArea

Interface defining a hit area for pointer interaction. The hit area specifies
the region in which pointer events should be captured by a display object.

## Example

```ts
// Create a rectangular hit area
sprite.hitArea = new Rectangle(0, 0, 100, 100);

// Create a circular hit area
sprite.hitArea = new Circle(50, 50, 50);

// Custom hit area implementation
sprite.hitArea = {
    contains(x: number, y: number) {
        // Custom hit testing logic
        return x >= 0 && x <= 100 && y >= 0 && y <= 100;
    }
};
```

## Remarks

- Hit areas override the default bounds-based hit testing
- Can improve performance by simplifying hit tests
- Useful for irregular shapes or precise interaction areas
- Common implementations include Rectangle, Circle, Polygon

## See

 - [Container.eventMode](events.FederatedOptions.html#eventmode) For enabling interactivity
 - [Container.interactive](events.FederatedOptions.html#interactive) For backwards compatibility

## Methods

### contains()

> **contains**(`x`, `y`): `boolean`

Checks if the given coordinates are inside this hit area.

#### Parameters

##### x

`number`

The x coordinate to check

##### y

`number`

The y coordinate to check

#### Returns

`boolean`

True if the coordinates are inside the hit area
