# Interface: OnRenderMixin

**`Advanced`**

The OnRenderMixin interface provides a way to define a callback that is executed
every time the container is rendered. This is useful for adding custom rendering logic
or animations that need to be updated each frame.

## Extends

- [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)\<`OnRenderMixinConstructor`\>

## Properties

### onRender()

> **onRender**: (`renderer`) => `void`

This callback is used when the container is rendered. It runs every frame during the render process,
making it ideal for per-frame updates and animations.

> [!NOTE] In v7 many users used `updateTransform` for this, however the way v8 renders objects is different
> and "updateTransform" is no longer called every frame

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

The renderer instance

#### Returns

`void`

#### Example

```ts
// Basic rotation animation
const container = new Container();
container.onRender = () => {
    container.rotation += 0.01;
};

// Cleanup when done
container.onRender = null; // Removes callback
```

#### See

[Renderer](rendering.Renderer.md) For renderer capabilities

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`onRender`](scene.ViewContainerOptions.html#onrender)
