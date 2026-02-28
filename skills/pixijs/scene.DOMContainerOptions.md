# Interface: DOMContainerOptions

Options for configuring a [DOMContainer](scene.DOMContainer.md).
Controls how DOM elements are integrated into the PixiJS scene graph.

## Example

```ts
// Create with a custom element
const domContainer = new DOMContainer({
    element: document.createElement('input'),
    anchor: { x: 0.5, y: 0.5 } // or anchor: 0.5 to center both x and y
});
```

## Extends

- [`ViewContainerOptions`](scene.ViewContainerOptions.md)

## Properties

### anchor?

> `optional` **anchor**: `number` \| [`PointData`](maths.PointData.md)

The anchor point of the container.
- Can be a single number to set both x and y
- Can be a point-like object with x,y coordinates
- (0,0) is top-left
- (1,1) is bottom-right
- (0.5,0.5) is center

#### Default

```ts
0
```

***

### element?

> `optional` **element**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The DOM element to use for the container.
Can be any HTML element like div, input, textarea, etc.

If not provided, creates a new div element.

#### Default

```ts
document.createElement('div')
```
