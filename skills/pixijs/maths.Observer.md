# Interface: Observer\<T\>

Observer used to listen for observable point changes.
Provides callback mechanism for point value updates.

## Example

```ts
// Basic observer implementation
const observer: Observer<ObservablePoint> = {
    _onUpdate: (point) => {
        console.log(`Point updated to (${point.x}, ${point.y})`);
    }
};

// Create observable point with observer
const point = new ObservablePoint(observer, 100, 100);

// Observer will be notified on changes
point.x = 200; // Logs: Point updated to (200, 100)
```

## Remarks

- Used internally by ObservablePoint
- Triggered on x/y changes
- Can track multiple points
- Useful for change detection

## See

 - [ObservablePoint](maths.ObservablePoint.md) The observable point class
 - [PointLike](maths.PointLike.md) For point interface

## Type Parameters

### T

`T`

The type of point being observed

## Properties

### \_onUpdate()

> **\_onUpdate**: (`point?`) => `void`

Callback to call when the point has updated.
Triggered whenever x or y coordinates change.

#### Parameters

##### point?

`T`

The point that was updated

#### Returns

`void`
