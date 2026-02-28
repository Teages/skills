# Variable: DOMAdapter

> `const` **DOMAdapter**: `object`

**`Advanced`**

The DOMAdapter is a singleton that allows PixiJS to perform DOM operations, such as creating a canvas.
This allows PixiJS to be used in any environment, such as a web browser, Web Worker, or Node.js.
It uses the [Adapter](environment.Adapter.md) interface to abstract away the differences between these environments
and uses the [BrowserAdapter](environment.BrowserAdapter.md) by default.

It has two methods: `get():Adapter` and `set(adapter: Adapter)`.

Defaults to the [BrowserAdapter](environment.BrowserAdapter.md).

## Type Declaration

### get()

> **get**(): [`Adapter`](environment.Adapter.md)

Returns the current adapter.

#### Returns

[`Adapter`](environment.Adapter.md)

The current adapter.

### set()

> **set**(`adapter`): `void`

Sets the current adapter.

#### Parameters

##### adapter

[`Adapter`](environment.Adapter.md)

The new adapter.

#### Returns

`void`

## Example

```ts
import { DOMAdapter, WebWorkerAdapter } from 'pixi.js';

// WebWorkerAdapter is an implementation of the Adapter interface
DOMAdapter.set(WebWorkerAdapter);

// use the adapter to create a canvas (in this case an OffscreenCanvas)
DOMAdapter.get().createCanvas(800, 600);
```
