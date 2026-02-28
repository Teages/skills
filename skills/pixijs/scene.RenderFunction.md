# Type Alias: RenderFunction()

> **RenderFunction** = (`renderer`) => `void`

**`Advanced`**

A function that takes a renderer and does the custom rendering logic.
This is the function that will be called each frame.

## Parameters

### renderer

[`Renderer`](rendering.Renderer.md)

The current renderer

## Returns

`void`

## Example

```js
import { RenderContainer } from 'pixi.js';

// create a new render container
const renderContainer = new RenderContainer((renderer) => {
    // custom render logic here
    renderer.clear({
        clearColor: 'green', // clear the screen to green when rendering this item
    });
});
```
