# Function: isWebGPUSupported()

> **isWebGPUSupported**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Helper for checking for WebGPU support in the current environment.
Results are cached after first call for better performance.

## Parameters

### options

`GPURequestAdapterOptions` = `{}`

The options for requesting a GPU adapter

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Promise that resolves to true if WebGPU is supported

## Example

```ts
// Basic WebGPU support check
const hasWebGPU = await isWebGPUSupported();
console.log('WebGPU available:', hasWebGPU);
```

## Standard
