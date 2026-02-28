# Type Alias: Renderer\<T\>

> **Renderer**\<`T`\> = [`WebGLRenderer`](rendering.WebGLRenderer.md)\<`T`\> \| [`WebGPURenderer`](rendering.WebGPURenderer.md)\<`T`\> \| [`CanvasRenderer`](rendering.CanvasRenderer.md)\<`T`\>

A generic renderer that can be either a WebGL, WebGPU, or Canvas renderer.

## Type Parameters

### T

`T` *extends* [`ICanvas`](environment.ICanvas.md) = [`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)
