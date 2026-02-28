# Class: CullerPlugin

An [Application](app.Application.md) plugin that automatically culls (hides) display objects that are outside
the visible screen area. This improves performance by not rendering objects that aren't visible.

Key Features:
- Automatic culling based on screen boundaries
- Configurable culling areas and behavior per container
- Can improve rendering performance

## Example

```ts
import { Application, CullerPlugin, Container, Rectangle } from 'pixi.js';

// Register the plugin
extensions.add(CullerPlugin);

// Create application
const app = new Application();
await app.init({...});

// Create a container with culling enabled
const container = new Container();
container.cullable = true;         // Enable culling for this container
container.cullableChildren = true; // Enable culling for children (default)
app.stage.addChild(container);

// Optional: Set custom cull area to avoid expensive bounds calculations
container.cullArea = new Rectangle(0, 0, app.screen.width, app.screen.height);

// Add many sprites to the group
for (let j = 0; j < 100; j++) {
    const sprite = Sprite.from('texture.png');
    sprite.x = Math.random() * 2000;
    sprite.y = Math.random() * 2000;

    sprite.cullable = true; // Enable culling for each sprite

    // Set cullArea if needed
    // sprite.cullArea = new Rectangle(0, 0, 100, 100); // Optional

    // Add to container
    container.addChild(sprite);
}
```

## Remarks

To enable culling, you must set the following properties on your containers:
- `cullable`: Set to `true` to enable culling for the container
- `cullableChildren`: Set to `true` to enable culling for children (default)
- `cullArea`: Optional custom Rectangle for culling bounds

Performance Tips:
- Group objects that are spatially related
- Use `cullArea` for containers with many children to avoid bounds calculations
- Set `cullableChildren = false` for containers that are always fully visible

## See

 - [Culler](scene.Culler.md) For the underlying culling implementation
 - [CullingMixinConstructor](scene.CullingMixinConstructor.md) For culling properties documentation

## Constructors

### Constructor

> **new CullerPlugin**(): `CullerPlugin`

#### Returns

`CullerPlugin`
