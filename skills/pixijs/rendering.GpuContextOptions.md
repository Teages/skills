# Interface: GpuContextOptions

**`Advanced`**

Options for the WebGPU context.

## Properties

### forceFallbackAdapter

> **forceFallbackAdapter**: `boolean`

Force the use of the fallback adapter

***

### gpu?

> `optional` **gpu**: [`GPU`](rendering.GPU.md)

Using shared device and adaptor from other engine

***

### powerPreference?

> `optional` **powerPreference**: [`GpuPowerPreference`](rendering.GpuPowerPreference.md)

An optional hint indicating what configuration of GPU
is suitable for the WebGPU context, can be `'high-performance'` or `'low-power'`.
Setting to `'high-performance'` will prioritize rendering performance over power consumption,
while setting to `'low-power'` will prioritize power saving over rendering performance.
