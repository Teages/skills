# Function: isWebGLSupported()

> **isWebGLSupported**(`failIfMajorPerformanceCaveat?`): `boolean`

Helper for checking for WebGL support in the current environment.

Results are cached after first call for better performance.

## Parameters

### failIfMajorPerformanceCaveat?

`boolean`

Whether to fail if there is a major performance caveat

## Returns

`boolean`

True if WebGL is supported

## Example

```ts
// Basic WebGL support check
if (isWebGLSupported()) {
    console.log('WebGL is available');
}
```

## Standard
