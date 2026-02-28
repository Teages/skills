# Function: autoDetectRenderer()

> **autoDetectRenderer**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Renderer`](rendering.Renderer.md)\>

Automatically determines the most appropriate renderer for the current environment.

The function will prioritize the WebGL renderer as it is the most tested safe API to use.
In the near future as WebGPU becomes more stable and ubiquitous, it will be prioritized over WebGL.

The selected renderer's code is then dynamically imported to optimize
performance and minimize the initial bundle size.

To maximize the benefits of dynamic imports, it's recommended to use a modern bundler
that supports code splitting. This will place the renderer code in a separate chunk,
which is loaded only when needed.

## Parameters

### options

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`AutoDetectOptions`](rendering.AutoDetectOptions.md)\>

A partial configuration object based on the `AutoDetectOptions` type.

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Renderer`](rendering.Renderer.md)\>

A Promise that resolves to an instance of the selected renderer.

## Example

```ts
// create a renderer
const renderer = await autoDetectRenderer({
  width: 800,
  height: 600,
  antialias: true,
});

// custom for each renderer
const renderer = await autoDetectRenderer({
  width: 800,
  height: 600,
  webgpu:{
    antialias: true,
    backgroundColor: 'red'
  },
  webgl:{
    antialias: true,
    backgroundColor: 'green'
  }
 });
```

## Standard
