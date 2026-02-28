# Class: GenerateTextureSystem

System that manages the generation of textures from display objects in the renderer.
This system is responsible for creating reusable textures from containers, sprites, and other display objects.
Available through `renderer.textureGenerator`.

## Example

```ts
import { Application, Sprite, Graphics } from 'pixi.js';

const app = new Application();
await app.init();

// Create a complex display object
const container = new Container();

const graphics = new Graphics()
    .circle(0, 0, 50)
    .fill('red');

const sprite = new Sprite(texture);
sprite.x = 100;

container.addChild(graphics, sprite);

// Generate a texture from the container
const generatedTexture = app.renderer.textureGenerator.generateTexture({
    target: container,
    resolution: 2,
    antialias: true
});

// Use the generated texture
const newSprite = new Sprite(generatedTexture);
app.stage.addChild(newSprite);

// Clean up when done
generatedTexture.destroy(true);
```

Features:
- Convert any display object to a texture
- Support for custom regions and resolutions
- Anti-aliasing support
- Background color configuration
- Texture source options customization

Common Use Cases:
- Creating texture atlases dynamically
- Caching complex container content
- Generating thumbnails
- Creating reusable textures from rendered content

Performance Considerations:
- Generating textures is relatively expensive
- Cache results when possible
- Be mindful of resolution and size
- Clean up unused textures

## See

 - [GenerateTextureOptions](rendering.GenerateTextureOptions.md) For detailed texture generation options
 - [AbstractRenderer.generateTexture](rendering.AbstractRenderer.html#generatetexture) For the main renderer method
 - [RenderTexture](rendering.RenderTexture.md) For the resulting texture type

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GenerateTextureSystem**(`renderer`): `GenerateTextureSystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

#### Returns

`GenerateTextureSystem`

## rendering

### generateTexture()

> **generateTexture**(`options`): [`RenderTexture`](rendering.RenderTexture.md)

Creates a texture from a display object that can be used for creating sprites and other textures.
This is particularly useful for optimizing performance when a complex container needs to be reused.

#### Parameters

##### options

Generate texture options or a container to convert to texture

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> | [`GenerateTextureOptions`](rendering.GenerateTextureOptions.md)

#### Returns

[`RenderTexture`](rendering.RenderTexture.md)

A new RenderTexture containing the rendered display object

#### Example

```ts
// Basic usage with a container
const container = new Container();
container.addChild(
    new Graphics()
        .circle(0, 0, 50)
        .fill('red')
);

const texture = renderer.textureGenerator.generateTexture(container);

// Advanced usage with options
const texture = renderer.textureGenerator.generateTexture({
    target: container,
    frame: new Rectangle(0, 0, 100, 100), // Specific region
    resolution: 2,                        // High DPI
    clearColor: '#ff0000',               // Red background
    antialias: true                      // Smooth edges
});

// Create a sprite from the generated texture
const sprite = new Sprite(texture);

// Clean up when done
texture.destroy(true);
```

#### See

 - [GenerateTextureOptions](rendering.GenerateTextureOptions.md) For detailed texture generation options
 - [RenderTexture](rendering.RenderTexture.md) For the type of texture created

## Other

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)
