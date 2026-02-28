# Interface: CullerPluginOptions

Application options for the [CullerPlugin](app.CullerPlugin.md).
These options control how your application handles culling of display objects.

## Example

```ts
import { Application } from 'pixi.js';

// Create application
const app = new Application();
await app.init({
    culler: {
        updateTransform: false // Skip updating transforms for culled objects
    }
});
```

## Properties

### culler?

> `optional` **culler**: `object`

Options for the culler behavior.

#### updateTransform?

> `optional` **updateTransform**: `boolean`

Update the transform of culled objects.

> [!IMPORTANT] Keeping this as `false` can improve performance by avoiding unnecessary calculations,
> however, the transform used for culling may not be up-to-date if the object has moved since the last render.

##### Default

```ts
true
```

##### Example

```ts
const app = new Application();
await app.init({
    culler: {
        updateTransform: false // Skip updating transforms for culled objects
    }
});
```

#### Example

```ts
// Basic culling options
const app = new Application();
await app.init({
    culler: {...}
});
```
