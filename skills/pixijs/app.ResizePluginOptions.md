# Interface: ResizePluginOptions

Application options for the [ResizePlugin](app.ResizePlugin.md).
These options control how your application handles window and element resizing.

## Example

```ts
// Auto-resize to window
await app.init({ resizeTo: window });

// Auto-resize to container element
await app.init({ resizeTo: document.querySelector('#game') });
```

## Properties

### resizeTo?

> `optional` **resizeTo**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| [`Window`](https://developer.mozilla.org/docs/Web/API/Window)

Element to automatically resize the renderer to.

#### Example

```ts
const app = new Application();
await app.init({
    resizeTo: window, // Resize to the entire window
    // or
    resizeTo: document.querySelector('#game-container'), // Resize to a specific element
    // or
    resizeTo: null, // Disable auto-resize
});
```

#### Default

```ts
null
```
