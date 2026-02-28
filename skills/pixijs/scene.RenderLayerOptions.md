# Interface: RenderLayerOptions

Options for configuring a RenderLayer. A RenderLayer allows control over rendering order
independent of the scene graph hierarchy.

## Example

```ts
// Basic layer with automatic sorting
const layer = new RenderLayer({
    sortableChildren: true
});

// Layer with custom sort function
const customLayer = new RenderLayer({
    sortableChildren: true,
    sortFunction: (a, b) => {
        // Sort by y position
        return a.position.y - b.position.y;
    }
});

// Add objects to layer while maintaining scene graph parent
const sprite = new Sprite(texture);
container.addChild(sprite);      // Add to scene graph
layer.attach(sprite);            // Add to render layer

// Manual sorting when needed
const manualLayer = new RenderLayer({
    sortableChildren: false
});
manualLayer.attach(sprite1, sprite2);
manualLayer.sortRenderLayerChildren(); // Sort manually
```

## Properties

### sortableChildren?

> `optional` **sortableChildren**: `boolean`

If true, the layer's children will be sorted by zIndex before rendering.
If false, you can manually sort the children using sortRenderLayerChildren when needed.

#### Default

```ts
false
```

#### Example

```ts
const layer = new RenderLayer({
    sortableChildren: true // Automatically sorts children by zIndex
});
```

#### See

 - [RenderLayer#sortRenderLayerChildren](scene.RenderLayer.html#sortrenderlayerchildren) For manual sorting
 - [RenderLayer#sortFunction](scene.RenderLayer.html#sortfunction) For customizing the sort logic
 - [Container#zIndex](scene.DOMContainer.html#zindex) For the default sort property

***

### sortFunction()?

> `optional` **sortFunction**: (`a`, `b`) => `number`

Custom sort function to sort layer children. Default sorts by zIndex.

#### Parameters

##### a

[`Container`](scene.Container.md)

First container to compare

##### b

[`Container`](scene.Container.md)

Second container to compare

#### Returns

`number`

Negative if a should render before b, positive if b should render before a

#### Example

```ts
const layer = new RenderLayer({
    sortFunction: (a, b) => {
        // Sort by y position
        return a.position.y - b.position.y;
    }
});
```

#### See

 - [RenderLayer#sortableChildren](scene.RenderLayer.html#sortablechildren) For enabling automatic sorting
 - [RenderLayer#sortRenderLayerChildren](scene.RenderLayer.html#sortrenderlayerchildren) For manual sorting
 - [Container#zIndex](scene.DOMContainer.html#zindex) For the default sort property

#### Default

```ts
(a, b) => a.zIndex - b.zIndex
```
