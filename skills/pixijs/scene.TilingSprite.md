# Class: TilingSprite

A TilingSprite is a fast and efficient way to render a repeating texture across a given area.
The texture can be scrolled, scaled, and rotated independently of the sprite itself.

## Example

```ts
// Create a simple tiling background
const background = new TilingSprite({
    texture: Texture.from('background.png'),
    width: app.screen.width,
    height: app.screen.height,
});
app.stage.addChild(background);

// Create a scrolling parallax background
const parallax = new TilingSprite({
    texture: Texture.from('clouds.png'),
    width: app.screen.width,
    height: app.screen.height,
    tileScale: { x: 0.5, y: 0.5 }
});

// Animate the tiling position
app.ticker.add(() => {
    parallax.tilePosition.x -= 1; // Scroll left
    parallax.tilePosition.y -= 0.5; // Scroll up slowly
});

// Create a repeating pattern with rotation
const pattern = new TilingSprite({
    texture: Texture.from('pattern.png'),
    width: 300,
    height: 200,
    tileRotation: Math.PI / 4, // 45 degree rotation
    anchor: 0.5 // Center anchor point
});
```

## See

 - [TilingSpriteOptions](scene.TilingSpriteOptions.md) For configuration options
 - [Texture](rendering.Texture.md) For texture management
 - [Assets](assets.Assets.md) For asset loading

## Extends

- `TilingSprite`.[`ViewContainer`](scene.ViewContainer.md)\<`TilingSpriteGpuData`\>

## Implements

- [`View`](scene.View.md)
- [`Instruction`](rendering.Instruction.md)

## Constructors

### Constructor

> **new TilingSprite**(`options?`): `TilingSprite`

#### Parameters

##### options?

The options for creating the tiling sprite.

[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\> | [`TilingSpriteOptions`](scene.TilingSpriteOptions.md)

#### Returns

`TilingSprite`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`constructor`](scene.ViewContainer.html#constructor)

### Constructor

> **new TilingSprite**(`texture`, `width`, `height`): `TilingSprite`

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

##### width

`number`

##### height

`number`

#### Returns

`TilingSprite`

#### Deprecated

since 8.0.0

#### Inherited from

`PixiMixins.TilingSprite.constructor`

## Properties

### accessible?

> `optional` **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set

#### Default

```ts
false
```

#### Example

```js
const container = new Container();
container.accessible = true;
```

#### Inherited from

[`AccessibleOptions`](accessibility.AccessibleOptions.md).[`accessible`](accessibility.AccessibleOptions.html#accessible)

***

### accessibleChildren?

> `optional` **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

#### Default

```ts
true
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessibleChildren = false; // This will prevent any children from being accessible

const sprite = new Sprite(texture);
sprite.accessible = true; // This will not work since accessibleChildren is false
```

#### Inherited from

[`AccessibleOptions`](accessibility.AccessibleOptions.md).[`accessibleChildren`](accessibility.AccessibleOptions.html#accessiblechildren)

***

### accessibleHint?

> `optional` **accessibleHint**: `string`

**`Advanced`**

Sets the aria-label attribute of the shadow div

#### Default

```ts
null
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessibleHint = 'This is a container';
```

#### Inherited from

[`AccessibleOptions`](accessibility.AccessibleOptions.md).[`accessibleHint`](accessibility.AccessibleOptions.html#accessiblehint)

***

### accessiblePointerEvents?

> `optional` **accessiblePointerEvents**: [`PointerEvents`](accessibility.PointerEvents.md)

**`Advanced`**

Specify the pointer-events the accessible div will use
Defaults to auto.

#### Default

```ts
'auto'
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessiblePointerEvents = 'none'; // or 'auto', 'visiblePainted', etc.
```

#### Inherited from

[`AccessibleOptions`](accessibility.AccessibleOptions.md).[`accessiblePointerEvents`](accessibility.AccessibleOptions.html#accessiblepointerevents)

***

### accessibleText?

> `optional` **accessibleText**: `string`

Sets the text content of the shadow

#### Default

```ts
null
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessibleText = 'This is a container';
```

#### Inherited from

[`AccessibleOptions`](accessibility.AccessibleOptions.md).[`accessibleText`](accessibility.AccessibleOptions.html#accessibletext)

***

### accessibleTitle?

> `optional` **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]'

#### Default

```ts
null
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessibleTitle = 'My Container';
```

#### Inherited from

[`AccessibleOptions`](accessibility.AccessibleOptions.md).[`accessibleTitle`](accessibility.AccessibleOptions.html#accessibletitle)

***

### accessibleType?

> `optional` **accessibleType**: keyof `HTMLElementTagNameMap`

**`Advanced`**

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

#### Default

```ts
'button'
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessibleType = 'button'; // or 'link', 'checkbox', etc.
```

#### Inherited from

[`AccessibleOptions`](accessibility.AccessibleOptions.md).[`accessibleType`](accessibility.AccessibleOptions.html#accessibletype)

***

### applyAnchorToTexture

> **applyAnchorToTexture**: `boolean`

Flags whether the tiling pattern should originate from the origin instead of the top-left corner in
local space.

This will make the texture coordinates assigned to each vertex dependent on the value of the anchor. Without
this, the top-left corner always gets the (0, 0) texture coordinate.

#### Example

```ts
// Enable anchor-based tiling
tilingSprite.applyAnchorToTexture = true;
```

#### Default

```ts
false
```

***

### autoGarbageCollect

> **autoGarbageCollect**: `boolean` = `true`

If set to true, the resource will be garbage collected automatically when it is not used.

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`autoGarbageCollect`](scene.ViewContainer.html#autogarbagecollect)

***

### batched

> `readonly` **batched**: `true` = `true`

**`Advanced`**

#### Implementation of

[`View`](scene.View.md).[`batched`](scene.View.html#batched)

#### Inherited from

`ViewContainer.batched`

***

### boundsArea

> **boundsArea**: [`Rectangle`](maths.Rectangle.md)

An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set.

#### Example

```ts
const container = new Container();
container.boundsArea = new Rectangle(0, 0, 500, 500);
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`boundsArea`](scene.ViewContainer.html#boundsarea)

***

### ~~cacheAsBitmap~~

> **cacheAsBitmap**: `boolean`

Legacy property for backwards compatibility with PixiJS v7 and below.
Use `cacheAsTexture` instead.

#### Deprecated

since 8.0.0

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`cacheAsBitmap`](scene.ViewContainer.html#cacheasbitmap)

***

### cacheAsTexture()

> **cacheAsTexture**: (`val`) => `void`

Caches this container as a texture. This allows the container to be rendered as a single texture,
which can improve performance for complex static containers.

#### Parameters

##### val

If true, enables caching with default options.
            If false, disables caching.
            Can also pass options object to configure caching behavior.

`boolean` | [`CacheAsTextureOptions`](rendering.CacheAsTextureOptions.md)

#### Returns

`void`

#### Example

```ts
// Basic caching
container.cacheAsTexture(true);

// With custom options
container.cacheAsTexture({
    resolution: 2,
    antialias: true,
});

// Disable caching
container.cacheAsTexture(false);

// Cache a complex UI
const ui = new Container();
// Add multiple children...
ui.cacheAsTexture(true);
ui.updateCacheTexture(); // Update if contents change
```

#### See

 - [Container#updateCacheTexture](scene.Container.html#updatecachetexture) For updating cached content
 - [Container#isCachedAsTexture](scene.CacheAsTextureMixin.html#iscachedastexture) For checking cache state

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`cacheAsTexture`](scene.ViewContainer.html#cacheastexture)

***

### children

> `readonly` **children**: [`ContainerChild`](scene.ContainerChild.md)[] = `[]`

The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods.

#### Example

```ts
// Access children
const firstChild = container.children[0];
const lastChild = container.children[container.children.length - 1];
```

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding children
 - [Container#removeChild](scene.Container.html#removechild) For removing children

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`children`](scene.ViewContainer.html#children)

***

### cullable?

> `optional` **cullable**: `boolean`

Controls whether this object should be culled when out of view.
When true, the object will not be rendered if its bounds are outside the visible area.

#### Example

```ts
const sprite = new Sprite(texture);

// Enable culling
sprite.cullable = true;

// Force object to always render
sprite.cullable = false;
```

#### Remarks

- Does not affect transform updates
- Applies to this object only
- Children follow their own cullable setting

#### Default

```ts
false
```

#### Inherited from

[`CullingMixinConstructor`](scene.CullingMixinConstructor.md).[`cullable`](scene.CullingMixinConstructor.html#cullable)

***

### cullableChildren?

> `optional` **cullableChildren**: `boolean`

Controls whether children of this container can be culled.
When false, skips recursive culling checks for better performance.

#### Example

```ts
const container = new Container();

// Enable container culling
container.cullable = true;

// Disable child culling for performance
container.cullableChildren = false;

// Children will always render if container is visible
container.addChild(sprite1, sprite2, sprite3);
```

#### Remarks

- Improves performance for static scenes
- Useful when children are always within container bounds
- Parent culling still applies

#### Default

```ts
true
```

#### Inherited from

[`CullingMixinConstructor`](scene.CullingMixinConstructor.md).[`cullableChildren`](scene.CullingMixinConstructor.html#cullablechildren)

***

### cullArea?

> `optional` **cullArea**: [`Rectangle`](maths.Rectangle.md)

Custom shape used for culling calculations instead of object bounds.
Defined in local space coordinates relative to the object.
> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for culling,
> which can improve performance by avoiding expensive bounds calculations.

#### Example

```ts
const container = new Container();

// Define custom culling boundary
container.cullArea = new Rectangle(0, 0, 800, 600);

// Reset to use object bounds
container.cullArea = null;
```

#### Remarks

- Improves performance by avoiding bounds calculations
- Useful for containers with many children
- Set to null to use object bounds

#### Default

```ts
null
```

#### Inherited from

[`CullingMixinConstructor`](scene.CullingMixinConstructor.md).[`cullArea`](scene.CullingMixinConstructor.html#cullarea)

***

### cursor?

> `optional` **cursor**: `string` & `object` \| [`Cursor`](events.Cursor.md)

The cursor style to display when the mouse pointer is hovering over the object.
Accepts any valid CSS cursor value or custom cursor URL.

#### Example

```ts
// Common cursor types
sprite.cursor = 'pointer';     // Hand cursor for clickable elements
sprite.cursor = 'grab';        // Grab cursor for draggable elements
sprite.cursor = 'crosshair';   // Precise cursor for selection
sprite.cursor = 'not-allowed'; // Indicate disabled state

// Direction cursors
sprite.cursor = 'n-resize';    // North resize
sprite.cursor = 'ew-resize';   // East-west resize
sprite.cursor = 'nesw-resize'; // Northeast-southwest resize

// Custom cursor with fallback
sprite.cursor = 'url("custom.png"), auto';
sprite.cursor = 'url("cursor.cur") 2 2, pointer'; // With hotspot offset
```

#### Default

```ts
undefined
```

#### See

 - [EventSystem.cursorStyles](events.EventSystem.html#cursorstyles) For setting global cursor styles
 - [https://developer.mozilla.org/en-US/docs/Web/CSS/cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) MDN Cursor Documentation

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`cursor`](scene.ViewContainer.html#cursor)

***

### destroyed

> **destroyed**: `boolean` = `false`

Whether this object has been destroyed. If true, the object should no longer be used.
After an object is destroyed, all of its functionality is disabled and references are removed.

#### Example

```ts
// Cleanup with destroy
sprite.destroy();
console.log(sprite.destroyed); // true
```

#### Default

```ts
false
```

#### See

[Container#destroy](scene.Container.html#destroy) For destroying objects

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`destroyed`](scene.ViewContainer.html#destroyed)

***

### effects?

> `optional` **effects**: [`Effect`](rendering.Effect.md)[]

**`Advanced`**

todo Needs docs

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`effects`](scene.ViewContainer.html#effects)

***

### eventMode?

> `optional` **eventMode**: [`EventMode`](events.EventMode.md)

Enable interaction events for the Container. Touch, pointer and mouse events are supported.

#### Example

```ts
const sprite = new Sprite(texture);

// Enable standard interaction (like buttons)
sprite.eventMode = 'static';
sprite.on('pointerdown', () => console.log('clicked!'));

// Enable for moving objects
sprite.eventMode = 'dynamic';
sprite.on('pointermove', () => updatePosition());

// Disable all interaction
sprite.eventMode = 'none';

// Only allow child interactions
sprite.eventMode = 'passive';
```

Available modes:

- `'none'`: Ignores all interaction events, even on its children. Best for pure visuals.
- `'passive'`: **(default)** Does not emit events and ignores hit testing on itself and non-interactive
children. Interactive children will still emit events.
- `'auto'`: Does not emit events but is hit tested if parent is interactive. Same as `interactive = false` in v7.
- `'static'`: Emit events and is hit tested. Same as `interactive = true` in v7. Best for buttons/UI.
- `'dynamic'`: Like static but also receives synthetic events when pointer is idle. Best for moving objects.

Performance tips:
- Use `'none'` for pure visual elements
- Use `'passive'` for containers with some interactive children
- Use `'static'` for standard UI elements
- Use `'dynamic'` only when needed for moving/animated elements

#### Since

7.2.0

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`eventMode`](scene.ViewContainer.html#eventmode)

***

### filterArea?

> `optional` **filterArea**: [`Rectangle`](maths.Rectangle.md)

The area the filter is applied to. This is used as an optimization to define a specific region
for filter effects instead of calculating the display object bounds each frame.

> [!NOTE]
> Setting this to a custom Rectangle allows you to define a specific area for filter effects,
> which can improve performance by avoiding expensive bounds calculations.

#### Example

```ts
// Set specific filter area
container.filterArea = new Rectangle(0, 0, 100, 100);

// Optimize filter region
const screen = app.screen;
container.filterArea = new Rectangle(
    screen.x,
    screen.y,
    screen.width,
    screen.height
);
```

#### See

 - [Container#filters](scene.Container.html#filters) For applying filters
 - [Rectangle](maths.Rectangle.md) For area definition

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`filterArea`](scene.ViewContainer.html#filterarea)

***

### groupTransform

> `readonly` **groupTransform**: [`Matrix`](maths.Matrix.md)

**`Advanced`**

The group transform is a transform relative to the render group it belongs too.
If this container is render group then this will be an identity matrix. other wise it
will be the same as the relativeGroupTransform.
Use this value when actually rendering things to the screen

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`groupTransform`](scene.ViewContainer.html#grouptransform)

***

### hitArea?

> `optional` **hitArea**: [`IHitArea`](events.IHitArea.md)

Defines a custom hit area for pointer interaction testing. When set, this shape will be used
for hit testing instead of the container's standard bounds.

#### Example

```ts
import { Rectangle, Circle, Sprite } from 'pixi.js';

// Rectangular hit area
const button = new Sprite(texture);
button.eventMode = 'static';
button.hitArea = new Rectangle(0, 0, 100, 50);

// Circular hit area
const icon = new Sprite(texture);
icon.eventMode = 'static';
icon.hitArea = new Circle(32, 32, 32);

// Custom hit area with polygon
const custom = new Sprite(texture);
custom.eventMode = 'static';
custom.hitArea = new Polygon([0,0, 100,0, 100,100, 0,100]);

// Custom hit testing logic
sprite.hitArea = {
    contains(x: number, y: number) {
        // Custom collision detection
        return x >= 0 && x <= width && y >= 0 && y <= height;
    }
};
```

#### Remarks

- Takes precedence over the container's bounds for hit testing
- Can improve performance by simplifying collision checks
- Useful for irregular shapes or precise click areas

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`hitArea`](scene.ViewContainer.html#hitarea)

***

### interactive?

> `optional` **interactive**: `boolean`

Whether this object should fire UI events. This is an alias for `eventMode` set to `'static'` or `'passive'`.
Setting this to true will enable interaction events like `pointerdown`, `click`, etc.
Setting it to false will disable all interaction events on this object.

#### See

[Container.eventMode](events.FederatedOptions.html#eventmode)

#### Example

```ts
// Enable interaction events
sprite.interactive = true;  // Sets eventMode = 'static'
sprite.interactive = false; // Sets eventMode = 'passive'
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`interactive`](scene.ViewContainer.html#interactive)

***

### interactiveChildren?

> `optional` **interactiveChildren**: `boolean`

Controls whether children of this container can receive pointer events.

Setting this to false allows PixiJS to skip hit testing on all children,
improving performance for containers with many non-interactive children.

#### Default

```ts
true
```

#### Example

```ts
// Container with many visual-only children
const container = new Container();
container.interactiveChildren = false; // Skip hit testing children

// Menu with interactive buttons
const menu = new Container();
menu.interactiveChildren = true; // Test all children
menu.addChild(button1, button2, button3);

// Performance optimization
background.interactiveChildren = false;
foreground.interactiveChildren = true;
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`interactiveChildren`](scene.ViewContainer.html#interactivechildren)

***

### isCachedAsTexture

> `readonly` **isCachedAsTexture**: `boolean`

Whether this container is currently cached as a texture.

#### Example

```ts
// Check cache state
if (container.isCachedAsTexture) {
    console.log('Container is cached');
}
```

#### See

 - [Container#cacheAsTexture](scene.Container.html#cacheastexture) For enabling caching
 - [Container#updateCacheTexture](scene.Container.html#updatecachetexture) For updating cache

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`isCachedAsTexture`](scene.ViewContainer.html#iscachedastexture)

***

### isInteractive()

> **isInteractive**: () => `boolean`

Determines if the container is interactive or not

#### Returns

`boolean`

Whether the container is interactive or not

#### Since

7.2.0

#### Example

```ts
import { Sprite } from 'pixi.js';

const sprite = new Sprite(texture);
sprite.eventMode = 'static';
sprite.isInteractive(); // true

sprite.eventMode = 'dynamic';
sprite.isInteractive(); // true

sprite.eventMode = 'none';
sprite.isInteractive(); // false

sprite.eventMode = 'passive';
sprite.isInteractive(); // false

sprite.eventMode = 'auto';
sprite.isInteractive(); // false
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`isInteractive`](scene.ViewContainer.html#isinteractive)

***

### label

> **label**: `string`

The instance label of the object.

#### Default

```ts
null
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`label`](scene.ViewContainerOptions.html#label)

***

### localTransform

> `readonly` **localTransform**: [`Matrix`](maths.Matrix.md)

Current transform of the object based on local factors: position, scale, other stuff.
This matrix represents the local transformation without any parent influence.

#### Example

```ts
// Basic transform access
const localMatrix = sprite.localTransform;
console.log(localMatrix.toString());
```

#### See

 - [Container#worldTransform](gif.GifSprite.html#worldtransform) For global transform
 - [Container#groupTransform](scene.ViewContainer.html#grouptransform) For render group transform

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`localTransform`](scene.ViewContainer.html#localtransform)

***

### mask

> **mask**: [`Mask`](scene.Mask.md)

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it.

> [!IMPORTANT] In PixiJS a regular mask must be a [Graphics](scene.Graphics.md) or a [Sprite](scene.Sprite.md) object.
> This allows for much faster masking in canvas as it utilities shape clipping.
> Furthermore, a mask of an object must be in the subtree of its parent.
> Otherwise, `getLocalBounds` may calculate incorrect bounds, which makes the container's width and height wrong.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

#### Example

```ts
// Apply mask to sprite
const sprite = new Sprite(texture);
sprite.mask = graphics;

// Remove mask
sprite.mask = null;
```

#### See

 - [Graphics](scene.Graphics.md) For creating mask shapes
 - [Sprite](scene.Sprite.md) For texture-based masks
 - [Container#setMask](scene.EffectsMixin.html#setmask) For advanced mask options

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`mask`](scene.ViewContainer.html#mask)

***

### ~~name~~

> **name**: `string`

The instance name of the object.

#### Deprecated

since 8.0.0

#### See

Container#label

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`name`](scene.ViewContainer.html#name)

***

### onclick?

> `optional` **onclick**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `click` event.
Fired when a pointer device (mouse, touch, etc.) completes a click action.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('click', (event) => {
   console.log('Sprite clicked at:', event.global.x, event.global.y);
});
// Using property-based handler
sprite.onclick = (event) => {
    console.log('Clicked at:', event.global.x, event.global.y);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onclick`](scene.ViewContainer.html#onclick)

***

### onglobalmousemove?

> `optional` **onglobalmousemove**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `globalmousemove` event.

Fired when the mouse moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('globalmousemove', (event) => {
    // Move sprite to mouse position
    sprite.position.copyFrom(event.global);
});
// Using property-based handler
sprite.onglobalmousemove = (event) => {
    // Move sprite to mouse position
    sprite.position.copyFrom(event.global);
};
```

#### Default

```ts
null
```

#### Remarks

- Fires even when the mouse is outside the object's bounds
- Useful for drag operations or global mouse tracking
- Must have `eventMode` set appropriately to receive events
- Part of the global move events family along with `globalpointermove` and `globaltouchmove`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onglobalmousemove`](scene.ViewContainer.html#onglobalmousemove)

***

### onglobalpointermove?

> `optional` **onglobalpointermove**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `globalpointermove` event.

Fired when the pointer moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('globalpointermove', (event) => {
    sprite.position.set(event.global.x, event.global.y);
});
// Using property-based handler
sprite.onglobalpointermove = (event) => {
    sprite.position.set(event.global.x, event.global.y);
};
```

#### Default

```ts
null
```

#### Remarks

- Fires even when the mouse is outside the object's bounds
- Useful for drag operations or global mouse tracking
- Must have `eventMode` set appropriately to receive events
- Part of the global move events family along with `globalpointermove` and `globaltouchmove`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onglobalpointermove`](scene.ViewContainer.html#onglobalpointermove)

***

### onglobaltouchmove?

> `optional` **onglobaltouchmove**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `globaltouchmove` event.

Fired when a touch interaction moves anywhere, regardless of whether the pointer is over this object.
The object must have `eventMode` set to 'static' or 'dynamic' to receive this event.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('globaltouchmove', (event) => {
    sprite.position.set(event.global.x, event.global.y);
});
// Using property-based handler
sprite.onglobaltouchmove = (event) => {
    sprite.position.set(event.global.x, event.global.y);
};
```

#### Default

```ts
null
```

#### Remarks

- Fires even when the touch is outside the object's bounds
- Useful for drag operations or global touch tracking
- Must have `eventMode` set appropriately to receive events
- Part of the global move events family along with `globalpointermove` and `globalmousemove`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onglobaltouchmove`](scene.ViewContainer.html#onglobaltouchmove)

***

### onmousedown?

> `optional` **onmousedown**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `mousedown` event.
Fired when a mouse button is pressed while the pointer is over the object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('mousedown', (event) => {
   sprite.alpha = 0.5; // Visual feedback
   console.log('Mouse button:', event.button);
});
// Using property-based handler
sprite.onmousedown = (event) => {
    sprite.alpha = 0.5; // Visual feedback
    console.log('Mouse button:', event.button);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onmousedown`](scene.ViewContainer.html#onmousedown)

***

### onmouseenter?

> `optional` **onmouseenter**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `mouseenter` event.
Fired when the mouse pointer enters the bounds of the object. Does not bubble.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('mouseenter', (event) => {
    sprite.scale.set(1.1);
});
// Using property-based handler
sprite.onmouseenter = (event) => {
    sprite.scale.set(1.1);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onmouseenter`](scene.ViewContainer.html#onmouseenter)

***

### onmouseleave?

> `optional` **onmouseleave**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `mouseleave` event.
Fired when the pointer leaves the bounds of the display object. Does not bubble.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('mouseleave', (event) => {
   sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onmouseleave = (event) => {
    sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onmouseleave`](scene.ViewContainer.html#onmouseleave)

***

### onmousemove?

> `optional` **onmousemove**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `mousemove` event.
Fired when the pointer moves while over the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('mousemove', (event) => {
   // Get coordinates relative to the sprite
  console.log('Local:', event.getLocalPosition(sprite));
});
// Using property-based handler
sprite.onmousemove = (event) => {
    // Get coordinates relative to the sprite
    console.log('Local:', event.getLocalPosition(sprite));
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onmousemove`](scene.ViewContainer.html#onmousemove)

***

### onmouseout?

> `optional` **onmouseout**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `mouseout` event.
Fired when the pointer moves out of the bounds of the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('mouseout', (event) => {
   sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onmouseout = (event) => {
    sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onmouseout`](scene.ViewContainer.html#onmouseout)

***

### onmouseover?

> `optional` **onmouseover**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `mouseover` event.
Fired when the pointer moves onto the bounds of the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('mouseover', (event) => {
     sprite.scale.set(1.1);
});
// Using property-based handler
sprite.onmouseover = (event) => {
    sprite.scale.set(1.1);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onmouseover`](scene.ViewContainer.html#onmouseover)

***

### onmouseup?

> `optional` **onmouseup**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `mouseup` event.
Fired when a mouse button is released over the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('mouseup', (event) => {
    sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onmouseup = (event) => {
     sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onmouseup`](scene.ViewContainer.html#onmouseup)

***

### onmouseupoutside?

> `optional` **onmouseupoutside**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `mouseupoutside` event.
Fired when a mouse button is released outside the display object that initially
registered a mousedown.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('mouseupoutside', (event) => {
    sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onmouseupoutside = (event) => {
    sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onmouseupoutside`](scene.ViewContainer.html#onmouseupoutside)

***

### onpointercancel?

> `optional` **onpointercancel**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `pointercancel` event.
Fired when a pointer device interaction is canceled or lost.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('pointercancel', (event) => {
    sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onpointercancel = (event) => {
    sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onpointercancel`](scene.ViewContainer.html#onpointercancel)

***

### onpointerdown?

> `optional` **onpointerdown**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `pointerdown` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is pressed.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('pointerdown', (event) => {
    sprite.position.set(event.global.x, event.global.y);
});
// Using property-based handler
sprite.onpointerdown = (event) => {
    sprite.position.set(event.global.x, event.global.y);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onpointerdown`](scene.ViewContainer.html#onpointerdown)

***

### onpointerenter?

> `optional` **onpointerenter**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `pointerenter` event.
Fired when a pointer device enters the bounds of the display object. Does not bubble.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('pointerenter', (event) => {
    sprite.scale.set(1.2);
});
// Using property-based handler
sprite.onpointerenter = (event) => {
    sprite.scale.set(1.2);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onpointerenter`](scene.ViewContainer.html#onpointerenter)

***

### onpointerleave?

> `optional` **onpointerleave**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `pointerleave` event.
Fired when a pointer device leaves the bounds of the display object. Does not bubble.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';
// Using emitter handler
sprite.on('pointerleave', (event) => {
    sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onpointerleave = (event) => {
    sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onpointerleave`](scene.ViewContainer.html#onpointerleave)

***

### onpointermove?

> `optional` **onpointermove**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `pointermove` event.
Fired when a pointer device moves while over the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('pointermove', (event) => {
    sprite.position.set(event.global.x, event.global.y);
});
// Using property-based handler
sprite.onpointermove = (event) => {
    sprite.position.set(event.global.x, event.global.y);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onpointermove`](scene.ViewContainer.html#onpointermove)

***

### onpointerout?

> `optional` **onpointerout**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `pointerout` event.
Fired when the pointer moves out of the bounds of the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('pointerout', (event) => {
   sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onpointerout = (event) => {
   sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onpointerout`](scene.ViewContainer.html#onpointerout)

***

### onpointerover?

> `optional` **onpointerover**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `pointerover` event.
Fired when the pointer moves over the bounds of the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('pointerover', (event) => {
    sprite.scale.set(1.2);
});
// Using property-based handler
sprite.onpointerover = (event) => {
    sprite.scale.set(1.2);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onpointerover`](scene.ViewContainer.html#onpointerover)

***

### onpointertap?

> `optional` **onpointertap**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `pointertap` event.
Fired when a pointer device completes a tap action (e.g., touch or mouse click).

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('pointertap', (event) => {
    console.log('Sprite tapped at:', event.global.x, event.global.y);
});
// Using property-based handler
sprite.onpointertap = (event) => {
    console.log('Sprite tapped at:', event.global.x, event.global.y);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onpointertap`](scene.ViewContainer.html#onpointertap)

***

### onpointerup?

> `optional` **onpointerup**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `pointerup` event.
Fired when a pointer device button (mouse, touch, pen, etc.) is released.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('pointerup', (event) => {
    sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onpointerup = (event) => {
    sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onpointerup`](scene.ViewContainer.html#onpointerup)

***

### onpointerupoutside?

> `optional` **onpointerupoutside**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `pointerupoutside` event.
Fired when a pointer device button is released outside the bounds of the display object
that initially registered a pointerdown.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('pointerupoutside', (event) => {
    sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onpointerupoutside = (event) => {
    sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onpointerupoutside`](scene.ViewContainer.html#onpointerupoutside)

***

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

***

### onrightclick?

> `optional` **onrightclick**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `rightclick` event.
Fired when a right-click (context menu) action is performed on the object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('rightclick', (event) => {
    console.log('Right-clicked at:', event.global.x, event.global.y);
});
// Using property-based handler
sprite.onrightclick = (event) => {
    console.log('Right-clicked at:', event.global.x, event.global.y);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onrightclick`](scene.ViewContainer.html#onrightclick)

***

### onrightdown?

> `optional` **onrightdown**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `rightdown` event.
Fired when a right mouse button is pressed down over the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('rightdown', (event) => {
    sprite.scale.set(0.9);
});
// Using property-based handler
sprite.onrightdown = (event) => {
    sprite.scale.set(0.9);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onrightdown`](scene.ViewContainer.html#onrightdown)

***

### onrightup?

> `optional` **onrightup**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `rightup` event.
Fired when a right mouse button is released over the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('rightup', (event) => {
    sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onrightup = (event) => {
    sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onrightup`](scene.ViewContainer.html#onrightup)

***

### onrightupoutside?

> `optional` **onrightupoutside**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `rightupoutside` event.
Fired when a right mouse button is released outside the bounds of the display object
that initially registered a rightdown.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('rightupoutside', (event) => {
    sprite.scale.set(1.0);
});
// Using property-based handler
sprite.onrightupoutside = (event) => {
    sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onrightupoutside`](scene.ViewContainer.html#onrightupoutside)

***

### ontap?

> `optional` **ontap**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `tap` event.
Fired when a tap action (touch) is completed on the object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('tap', (event) => {
    console.log('Sprite tapped at:', event.global.x, event.global.y);
});
// Using property-based handler
sprite.ontap = (event) => {
    console.log('Sprite tapped at:', event.global.x, event.global.y);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`ontap`](scene.ViewContainer.html#ontap)

***

### ontouchcancel?

> `optional` **ontouchcancel**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `touchcancel` event.
Fired when a touch interaction is canceled, such as when the touch is interrupted.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('touchcancel', (event) => {
    console.log('Touch canceled at:', event.global.x, event.global.y);
});
// Using property-based handler
sprite.ontouchcancel = (event) => {
    console.log('Touch canceled at:', event.global.x, event.global.y);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`ontouchcancel`](scene.ViewContainer.html#ontouchcancel)

***

### ontouchend?

> `optional` **ontouchend**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `touchend` event.
Fired when a touch interaction ends, such as when the finger is lifted from the screen.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('touchend', (event) => {
    sprite.scale.set(1.0);
});
// Using property-based handler
sprite.ontouchend = (event) => {
   sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`ontouchend`](scene.ViewContainer.html#ontouchend)

***

### ontouchendoutside?

> `optional` **ontouchendoutside**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `touchendoutside` event.
Fired when a touch interaction ends outside the bounds of the display object
that initially registered a touchstart.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('touchendoutside', (event) => {
    sprite.scale.set(1.0);
});
// Using property-based handler
sprite.ontouchendoutside = (event) => {
    sprite.scale.set(1.0);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`ontouchendoutside`](scene.ViewContainer.html#ontouchendoutside)

***

### ontouchmove?

> `optional` **ontouchmove**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `touchmove` event.
Fired when a touch interaction moves while over the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('touchmove', (event) => {
    sprite.position.set(event.global.x, event.global.y);
});
// Using property-based handler
sprite.ontouchmove = (event) => {
    sprite.position.set(event.global.x, event.global.y);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`ontouchmove`](scene.ViewContainer.html#ontouchmove)

***

### ontouchstart?

> `optional` **ontouchstart**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\>

Property-based event handler for the `touchstart` event.
Fired when a touch interaction starts, such as when a finger touches the screen.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('touchstart', (event) => {
    sprite.scale.set(0.9);
});
// Using property-based handler
sprite.ontouchstart = (event) => {
    sprite.scale.set(0.9);
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`ontouchstart`](scene.ViewContainer.html#ontouchstart)

***

### onwheel?

> `optional` **onwheel**: [`FederatedEventHandler`](events.FederatedEventHandler.md)\<[`FederatedWheelEvent`](events.FederatedWheelEvent.md)\>

Property-based event handler for the `wheel` event.
Fired when the mouse wheel is scrolled while over the display object.

#### Example

```ts
const sprite = new Sprite(texture);
sprite.eventMode = 'static';

// Using emitter handler
sprite.on('wheel', (event) => {
    sprite.scale.x += event.deltaY * 0.01; // Zoom in/out
    sprite.scale.y += event.deltaY * 0.01; // Zoom in/out
});
// Using property-based handler
sprite.onwheel = (event) => {
    sprite.scale.x += event.deltaY * 0.01; // Zoom in/out
    sprite.scale.y += event.deltaY * 0.01; // Zoom in/out
};
```

#### Default

```ts
null
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`onwheel`](scene.ViewContainer.html#onwheel)

***

### parent

> `readonly` **parent**: [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\> = `null`

The display object container that contains this display object.
This represents the parent-child relationship in the display tree.

#### Example

```ts
// Basic parent access
const parent = sprite.parent;

// Walk up the tree
let current = sprite;
while (current.parent) {
    console.log('Level up:', current.parent.constructor.name);
    current = current.parent;
}
```

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding to a parent
 - [Container#removeChild](scene.Container.html#removechild) For removing from parent

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`parent`](scene.ViewContainer.html#parent)

***

### parentRenderLayer

> `readonly` **parentRenderLayer**: [`RenderLayer`](scene.RenderLayer.md) = `null`

**`Advanced`**

The RenderLayer this container belongs to, if any.
If it belongs to a RenderLayer, it will be rendered from the RenderLayer's position in the scene.

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`parentRenderLayer`](scene.ViewContainer.html#parentrenderlayer)

***

### relativeGroupTransform

> `readonly` **relativeGroupTransform**: [`Matrix`](maths.Matrix.md)

**`Advanced`**

The relative group transform is a transform relative to the render group it belongs too. It will include all parent
transforms and up to the render group (think of it as kind of like a stage - but the stage can be nested).
If this container is is self a render group matrix will be relative to its parent render group

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`relativeGroupTransform`](scene.ViewContainer.html#relativegrouptransform)

***

### sortableChildren

> **sortableChildren**: `boolean`

If set to true, the container will sort its children by `zIndex` value
when the next render is called, or manually if `sortChildren()` is called.

This actually changes the order of elements in the array of children,
so it will affect the rendering order.

> [!NOTE] Also be aware of that this may not work nicely with the `addChildAt()` function,
> as the `zIndex` sorting may cause the child to automatically sorted to another position.

#### Example

```ts
container.sortableChildren = true;
```

#### Default

```ts
false
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`sortableChildren`](scene.ViewContainerOptions.html#sortablechildren)

***

### sortChildren()

> **sortChildren**: () => `void`

Sorts children by zIndex value. Only sorts if container is marked as dirty.

#### Returns

`void`

#### Example

```ts
// Basic sorting
particles.zIndex = 2;     // Will mark as dirty
container.sortChildren();
```

#### See

 - [Container#sortableChildren](scene.DOMContainer.html#sortablechildren) For enabling automatic sorting
 - [Container#zIndex](scene.DOMContainer.html#zindex) For setting child order

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`sortChildren`](scene.ViewContainer.html#sortchildren)

***

### tabIndex?

> `optional` **tabIndex**: `number`

Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate.

#### Default

```ts
0
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.tabIndex = 0;

const sprite = new Sprite(texture);
sprite.accessible = true;
sprite.tabIndex = 1;
```

#### Inherited from

[`AccessibleOptions`](accessibility.AccessibleOptions.md).[`tabIndex`](accessibility.AccessibleOptions.html#tabindex)

***

### updateCacheTexture()

> **updateCacheTexture**: () => `void`

Updates the cached texture of this container. This will flag the container's cached texture
to be redrawn on the next render.

#### Returns

`void`

#### Example

```ts
// Basic update after changes
container.updateCacheTexture();
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`updateCacheTexture`](scene.ViewContainer.html#updatecachetexture)

***

### zIndex

> **zIndex**: `number`

The zIndex of the container.

Controls the rendering order of children within their parent container.

A higher value will mean it will be moved towards the front of the rendering order.

#### Example

```ts
// Add in any order
container.addChild(character, background, foreground);

// Adjust rendering order
background.zIndex = 0;
character.zIndex = 1;
foreground.zIndex = 2;
```

#### See

 - [Container#sortableChildren](scene.DOMContainer.html#sortablechildren) For enabling sorting
 - [Container#sortChildren](scene.Container.html#sortchildren) For manual sorting

#### Default

```ts
0
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`zIndex`](scene.ViewContainerOptions.html#zindex)

***

### defaultOptions

> `static` **defaultOptions**: [`TilingSpriteOptions`](scene.TilingSpriteOptions.md)

Default options used when creating a TilingSprite instance.
These values are used as fallbacks when specific options are not provided.

#### Example

```ts
// Override default options globally
TilingSprite.defaultOptions.texture = Texture.from('defaultPattern.png');
TilingSprite.defaultOptions.tileScale = { x: 2, y: 2 };

// Create sprite using default options
const sprite = new TilingSprite();
// Will use defaultPattern.png and scale 2x
```

#### See

 - [TilingSpriteOptions](scene.TilingSpriteOptions.md) For all available options
 - [TilingSprite.from](#from) For creating sprites with custom options
 - [Texture.EMPTY](rendering.RenderTexture.html#empty) For the default empty texture

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

The opacity of the object relative to its parent's opacity.
Value ranges from 0 (fully transparent) to 1 (fully opaque).

##### Example

```ts
// Basic transparency
sprite.alpha = 0.5; // 50% opacity

// Inherited opacity
container.alpha = 0.5;
const child = new Sprite(texture);
child.alpha = 0.5;
container.addChild(child);
// child's effective opacity is 0.25 (0.5 * 0.5)
```

##### Default

```ts
1
```

##### See

 - [Container#visible](gif.GifSprite.html#visible) For toggling visibility
 - [Container#renderable](gif.GifSprite.html#renderable) For render control

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`alpha`](scene.ViewContainer.html#alpha)

***

### anchor

#### Get Signature

> **get** **anchor**(): [`ObservablePoint`](maths.ObservablePoint.md)

The anchor sets the origin point of the sprite. The default value is taken from the [Texture](rendering.Texture.md)
and passed to the constructor.

- The default is `(0,0)`, this means the sprite's origin is the top left.
- Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
- Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.

If you pass only single parameter, it will set both x and y to the same value as shown in the example below.

##### Example

```ts
// Center the anchor point
sprite.anchor = 0.5; // Sets both x and y to 0.5
sprite.position.set(400, 300); // Sprite will be centered at this position

// Set specific x/y anchor points
sprite.anchor = {
    x: 1, // Right edge
    y: 0  // Top edge
};

// Using individual coordinates
sprite.anchor.set(0.5, 1); // Center-bottom

// For rotation around center
sprite.anchor.set(0.5);
sprite.rotation = Math.PI / 4; // 45 degrees around center

// For scaling from center
sprite.anchor.set(0.5);
sprite.scale.set(2); // Scales from center point
```

##### Returns

[`ObservablePoint`](maths.ObservablePoint.md)

#### Set Signature

> **set** **anchor**(`value`): `void`

##### Parameters

###### value

`number` | [`PointData`](maths.PointData.md)

##### Returns

`void`

***

### angle

#### Get Signature

> **get** **angle**(): `number`

The angle of the object in degrees.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees.

##### Example

```ts
// Basic angle rotation
sprite.angle = 45; // 45 degrees

// Rotate around center
sprite.pivot.set(sprite.width / 2, sprite.height / 2);
sprite.angle = 180; // Half rotation

// Rotate around center with origin
sprite.origin.set(sprite.width / 2, sprite.height / 2);
sprite.angle = 180; // Half rotation

// Reset rotation
sprite.angle = 0;
```

##### Returns

`number`

#### Set Signature

> **set** **angle**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`angle`](scene.ViewContainer.html#angle)

***

### blendMode

#### Get Signature

> **get** **blendMode**(): [`BLEND_MODES`](filters.BLEND_MODES.md)

The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.

Setting to 'normal' will reset to default blending.
> [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export.

##### Example

```ts
// Basic blend modes
sprite.blendMode = 'add';        // Additive blending
sprite.blendMode = 'multiply';   // Multiply colors
sprite.blendMode = 'screen';     // Screen blend

// Reset blend mode
sprite.blendMode = 'normal';     // Normal blending
```

##### Default

```ts
'normal'
```

##### See

 - [Container#alpha](gif.GifSprite.html#alpha) For transparency
 - [Container#tint](gif.GifSprite.html#tint) For color adjustments

##### Returns

[`BLEND_MODES`](filters.BLEND_MODES.md)

#### Set Signature

> **set** **blendMode**(`value`): `void`

##### Parameters

###### value

[`BLEND_MODES`](filters.BLEND_MODES.md)

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`blendMode`](scene.ViewContainer.html#blendmode)

***

### bounds

#### Get Signature

> **get** **bounds**(): [`Bounds`](rendering.Bounds.md)

The local bounds of the view in its own coordinate space.
Bounds are automatically updated when the view's content changes.

##### Example

```ts
// Get bounds dimensions
const bounds = view.bounds;
console.log(`Width: ${bounds.maxX - bounds.minX}`);
console.log(`Height: ${bounds.maxY - bounds.minY}`);
```

##### See

[Bounds](rendering.Bounds.md) For bounds operations

##### Returns

[`Bounds`](rendering.Bounds.md)

The rectangular bounds of the view

this is the AABB rectangle bounds of the view in local untransformed space.

#### Implementation of

[`View`](scene.View.md).[`bounds`](scene.View.html#bounds)

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`bounds`](scene.ViewContainer.html#bounds)

***

### clampMargin

#### Get Signature

> **get** **clampMargin**(): `number`

**`Advanced`**

Changes frame clamping in corresponding textureMatrix
Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas

##### Default

```ts
0.5
```

##### Returns

`number`

#### Set Signature

> **set** **clampMargin**(`value`): `void`

**`Advanced`**

##### Parameters

###### value

`number`

##### Returns

`void`

***

### filters

#### Get Signature

> **get** **filters**(): readonly [`Filter`](filters.Filter.md)[]

Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer.

##### Example

```ts
new Container({
    filters: [new BlurFilter(2), new ColorMatrixFilter()],
});
```

##### See

[Filter](filters.Filter.md) For filter base class

##### Returns

readonly [`Filter`](filters.Filter.md)[]

#### Set Signature

> **set** **filters**(`value`): `void`

Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer.

##### Example

```ts
// Add a single filter
sprite.filters = new BlurFilter(2);

// Apply multiple filters
container.filters = [
    new BlurFilter(2),
    new ColorMatrixFilter(),
];

// Remove filters
sprite.filters = null;
```

##### See

[Filter](filters.Filter.md) For filter base class

##### Parameters

###### value

[`Filter`](filters.Filter.md) | [`Filter`](filters.Filter.md)[]

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`filters`](scene.ViewContainer.html#filters)

***

### height

#### Get Signature

> **get** **height**(): `number`

The height of the tiling area. This defines how tall the area is that the texture will be tiled across.

##### Example

```ts
// Create a tiling sprite
const sprite = new TilingSprite({
    texture: Texture.from('pattern.png'),
    width: 500,
    height: 300
});

// Adjust width dynamically
sprite.height = 800; // Expands tiling area

// Update on resize
window.addEventListener('resize', () => {
    sprite.height = app.screen.height;
});
```

##### See

 - [TilingSprite#setSize](#setsize) For setting both width and height efficiently
 - [TilingSprite#width](#width) For setting width

##### Returns

`number`

#### Set Signature

> **set** **height**(`value`): `void`

The height of the Container,
> [!NOTE] Changing the height will adjust the scale.y property of the container while maintaining its aspect ratio.
> [!NOTE] If you want to set both width and height at the same time, use [Container#setSize](scene.Container.html#setsize)
as it is more optimized by not recalculating the local bounds twice.

##### Example

```ts
// Basic height setting
container.height = 200;
// Optimized height setting
container.setSize(100, 200);
```

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`height`](scene.ViewContainer.html#height)

***

### isRenderable

#### Get Signature

> **get** **isRenderable**(): `boolean`

**`Advanced`**

Whether or not the object should be rendered.

##### Returns

`boolean`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`isRenderable`](scene.ViewContainer.html#isrenderable)

***

### isRenderGroup

#### Get Signature

> **get** **isRenderGroup**(): `boolean`

**`Advanced`**

Returns true if this container is a render group.
This means that it will be rendered as a separate pass, with its own set of instructions

##### Returns

`boolean`

#### Set Signature

> **set** **isRenderGroup**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`isRenderGroup`](scene.ViewContainer.html#isrendergroup)

***

### origin

#### Get Signature

> **get** **origin**(): [`ObservablePoint`](maths.ObservablePoint.md)

**`Experimental`**

The origin point around which the container rotates and scales without affecting its position.
Unlike pivot, changing the origin will not move the container's position.

##### Example

```ts
// Rotate around center point
container.origin.set(container.width / 2, container.height / 2);
container.rotation = Math.PI; // Rotates around center

// Reset origin
container.origin.set(0, 0);
```

##### Returns

[`ObservablePoint`](maths.ObservablePoint.md)

#### Set Signature

> **set** **origin**(`value`): `void`

##### Parameters

###### value

`number` | [`PointData`](maths.PointData.md)

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`origin`](scene.ViewContainer.html#origin)

***

### pivot

#### Get Signature

> **get** **pivot**(): [`ObservablePoint`](maths.ObservablePoint.md)

The center of rotation, scaling, and skewing for this display object in its local space.
The `position` is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0).

##### Example

```ts
// Rotate around center
container.pivot.set(container.width / 2, container.height / 2);
container.rotation = Math.PI; // Rotates around center
```

##### Since

4.0.0

##### Returns

[`ObservablePoint`](maths.ObservablePoint.md)

#### Set Signature

> **set** **pivot**(`value`): `void`

##### Parameters

###### value

`number` | [`PointData`](maths.PointData.md)

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`pivot`](scene.ViewContainer.html#pivot)

***

### position

#### Get Signature

> **get** **position**(): [`ObservablePoint`](maths.ObservablePoint.md)

The coordinate of the object relative to the local coordinates of the parent.

##### Example

```ts
// Basic position setting
container.position.set(100, 200);
container.position.set(100); // Sets both x and y to 100
// Using point data
container.position = { x: 50, y: 75 };
```

##### Since

4.0.0

##### Returns

[`ObservablePoint`](maths.ObservablePoint.md)

#### Set Signature

> **set** **position**(`value`): `void`

##### Parameters

###### value

[`PointData`](maths.PointData.md)

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`position`](scene.ViewContainer.html#position)

***

### renderable

#### Get Signature

> **get** **renderable**(): `boolean`

Controls whether this object can be rendered. If false the object will not be drawn,
but the transform will still be updated. This is different from visible, which skips
transform updates.

##### Example

```ts
// Basic render control
sprite.renderable = false; // Skip rendering
sprite.renderable = true;  // Enable rendering
```

##### Default

```ts
true
```

##### See

 - [Container#visible](gif.GifSprite.html#visible) For skipping transform updates
 - [Container#alpha](gif.GifSprite.html#alpha) For transparency

##### Returns

`boolean`

#### Set Signature

> **set** **renderable**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`renderable`](scene.ViewContainer.html#renderable)

***

### rotation

#### Get Signature

> **get** **rotation**(): `number`

The rotation of the object in radians.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees.

##### Example

```ts
// Basic rotation
container.rotation = Math.PI / 4; // 45 degrees

// Convert from degrees
const degrees = 45;
container.rotation = degrees * Math.PI / 180;

// Rotate around center
container.pivot.set(container.width / 2, container.height / 2);
container.rotation = Math.PI; // 180 degrees

// Rotate around center with origin
container.origin.set(container.width / 2, container.height / 2);
container.rotation = Math.PI; // 180 degrees
```

##### Returns

`number`

#### Set Signature

> **set** **rotation**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`rotation`](scene.ViewContainer.html#rotation)

***

### roundPixels

#### Get Signature

> **get** **roundPixels**(): `boolean`

Whether or not to round the x/y position of the sprite.

##### Example

```ts
// Enable pixel rounding for crisp rendering
view.roundPixels = true;
```

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **roundPixels**(`value`): `void`

Whether or not to round the x/y position of the object.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

[`View`](scene.View.md).[`roundPixels`](scene.View.html#roundpixels)

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`roundPixels`](scene.ViewContainer.html#roundpixels)

***

### scale

#### Get Signature

> **get** **scale**(): [`ObservablePoint`](maths.ObservablePoint.md)

The scale factors of this object along the local coordinate axes.

The default scale is (1, 1).

##### Example

```ts
// Basic scaling
container.scale.set(2, 2); // Scales to double size
container.scale.set(2); // Scales uniformly to double size
container.scale = 2; // Scales uniformly to double size
// Scale to a specific width and height
container.setSize(200, 100); // Sets width to 200 and height to 100
```

##### Since

4.0.0

##### Returns

[`ObservablePoint`](maths.ObservablePoint.md)

#### Set Signature

> **set** **scale**(`value`): `void`

##### Parameters

###### value

`string` | `number` | [`PointData`](maths.PointData.md)

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`scale`](scene.ViewContainer.html#scale)

***

### skew

#### Get Signature

> **get** **skew**(): [`ObservablePoint`](maths.ObservablePoint.md)

The skew factor for the object in radians. Skewing is a transformation that distorts
the object by rotating it differently at each point, creating a non-uniform shape.

##### Example

```ts
// Basic skewing
container.skew.set(0.5, 0); // Skew horizontally
container.skew.set(0, 0.5); // Skew vertically

// Skew with point data
container.skew = { x: 0.3, y: 0.3 }; // Diagonal skew

// Reset skew
container.skew.set(0, 0);

// Animate skew
app.ticker.add(() => {
    // Create wave effect
    container.skew.x = Math.sin(Date.now() / 1000) * 0.3;
});

// Combine with rotation
container.rotation = Math.PI / 4; // 45 degrees
container.skew.set(0.2, 0.2); // Skew the rotated object
```

##### Since

4.0.0

##### Default

```ts
{x: 0, y: 0}
```

##### Returns

[`ObservablePoint`](maths.ObservablePoint.md)

#### Set Signature

> **set** **skew**(`value`): `void`

##### Parameters

###### value

[`PointData`](maths.PointData.md)

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`skew`](scene.ViewContainer.html#skew)

***

### texture

#### Get Signature

> **get** **texture**(): [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

The texture to use for tiling.
This is the image that will be repeated across the sprite.

##### Example

```ts
// Use a texture from the asset cache
tilingSprite.texture = Texture.from('assets/pattern.png');
```

##### Default

```ts
Texture.WHITE
```

##### Returns

[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

#### Set Signature

> **set** **texture**(`value`): `void`

##### Parameters

###### value

[`Texture`](rendering.Texture.md)

##### Returns

`void`

***

### tilePosition

#### Get Signature

> **get** **tilePosition**(): [`ObservablePoint`](maths.ObservablePoint.md)

The offset of the tiling texture.
Used to scroll or position the repeated pattern.

##### Example

```ts
// Offset the tiling pattern by 100 pixels in both x and y directions
tilingSprite.tilePosition = { x: 100, y: 100 };
```

##### Default

```ts
{x: 0, y: 0}
```

##### Returns

[`ObservablePoint`](maths.ObservablePoint.md)

#### Set Signature

> **set** **tilePosition**(`value`): `void`

##### Parameters

###### value

[`PointData`](maths.PointData.md)

##### Returns

`void`

***

### tileRotation

#### Get Signature

> **get** **tileRotation**(): `number`

Rotation of the tiling texture in radians.
This controls the rotation applied to the texture before tiling.

##### Example

```ts
// Rotate the texture by 45 degrees (in radians)
tilingSprite.tileRotation = Math.PI / 4; // 45 degrees
```

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **tileRotation**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### tileScale

#### Get Signature

> **get** **tileScale**(): [`ObservablePoint`](maths.ObservablePoint.md)

Scale of the tiling texture.
Affects the size of each repeated instance of the texture.

##### Example

```ts
// Scale the texture by 1.5 in both x and y directions
tilingSprite.tileScale = { x: 1.5, y: 1.5 };
```

##### Default

```ts
{x: 1, y: 1}
```

##### Returns

[`ObservablePoint`](maths.ObservablePoint.md)

#### Set Signature

> **set** **tileScale**(`value`): `void`

##### Parameters

###### value

`number` | [`PointData`](maths.PointData.md)

##### Returns

`void`

***

### tileTransform

#### Get Signature

> **get** **tileTransform**(): [`Transform`](utils.Transform.md)

**`Advanced`**

The transform object that controls the tiling texture's position, scale, and rotation.
This transform is independent of the sprite's own transform properties.

##### Example

```ts
// Access transform properties directly
sprite.tileTransform.position.set(100, 50);
sprite.tileTransform.scale.set(2);
sprite.tileTransform.rotation = Math.PI / 4;

// Create smooth scrolling animation
app.ticker.add(() => {
    sprite.tileTransform.position.x += 1;
    sprite.tileTransform.rotation += 0.01;
});

// Reset transform
sprite.tileTransform.position.set(0);
sprite.tileTransform.scale.set(1);
sprite.tileTransform.rotation = 0;
```

##### See

 - [Transform](utils.Transform.md) For transform operations
 - [TilingSprite#tilePosition](#tileposition) For position control
 - [TilingSprite#tileScale](#tilescale) For scale control
 - [TilingSprite#tileRotation](#tilerotation) For rotation control

##### Returns

[`Transform`](utils.Transform.md)

The transform object for the tiling texture

***

### tint

#### Get Signature

> **get** **tint**(): `number`

The tint applied to the sprite.

This can be any valid [ColorSource](color.ColorSource.md).

##### Example

```ts
// Basic color tinting
container.tint = 0xff0000; // Red tint
container.tint = 'red';    // Same as above
container.tint = '#00ff00'; // Green
container.tint = 'rgb(0,0,255)'; // Blue

// Remove tint
container.tint = 0xffffff; // White = no tint
container.tint = null;     // Also removes tint
```

##### Default

```ts
0xFFFFFF
```

##### See

 - [Container#alpha](gif.GifSprite.html#alpha) For transparency
 - [Container#visible](gif.GifSprite.html#visible) For visibility control

##### Returns

`number`

#### Set Signature

> **set** **tint**(`value`): `void`

##### Parameters

###### value

[`ColorSource`](color.ColorSource.md)

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`tint`](scene.ViewContainer.html#tint)

***

### uvRespectAnchor

#### Get Signature

> **get** **uvRespectAnchor**(): `boolean`

**`Advanced`**

##### See

[TilingSpriteOptions.applyAnchorToTexture](scene.TilingSpriteOptions.html#applyanchortotexture)

##### Deprecated

since 8.0.0

##### Returns

`boolean`

#### Set Signature

> **set** **uvRespectAnchor**(`value`): `void`

**`Advanced`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### visible

#### Get Signature

> **get** **visible**(): `boolean`

The visibility of the object. If false the object will not be drawn,
and the transform will not be updated.

##### Example

```ts
// Basic visibility toggle
sprite.visible = false; // Hide sprite
sprite.visible = true;  // Show sprite
```

##### Default

```ts
true
```

##### See

 - [Container#renderable](gif.GifSprite.html#renderable) For render-only control
 - [Container#alpha](gif.GifSprite.html#alpha) For transparency

##### Returns

`boolean`

#### Set Signature

> **set** **visible**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`visible`](scene.ViewContainer.html#visible)

***

### width

#### Get Signature

> **get** **width**(): `number`

The width of the Container, setting this will actually modify the scale to achieve the value set.
> [!NOTE] Changing the width will adjust the scale.x property of the container while maintaining its aspect ratio.
> [!NOTE] If you want to set both width and height at the same time, use [Container#setSize](scene.Container.html#setsize)
as it is more optimized by not recalculating the local bounds twice.

##### Example

```ts
// Basic width setting
container.width = 100;
// Optimized width setting
container.setSize(100, 100);
```

##### Returns

`number`

#### Set Signature

> **set** **width**(`value`): `void`

The width of the tiling area. This defines how wide the area is that the texture will be tiled across.

##### Example

```ts
// Create a tiling sprite
const sprite = new TilingSprite({
    texture: Texture.from('pattern.png'),
    width: 500,
    height: 300
});

// Adjust width dynamically
sprite.width = 800; // Expands tiling area

// Update on resize
window.addEventListener('resize', () => {
    sprite.width = app.screen.width;
});
```

##### See

 - [TilingSprite#setSize](#setsize) For setting both width and height efficiently
 - [TilingSprite#height](#height) For setting height

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`width`](scene.ViewContainer.html#width)

***

### worldTransform

#### Get Signature

> **get** **worldTransform**(): [`Matrix`](maths.Matrix.md)

Current transform of the object based on world (parent) factors.

This matrix represents the absolute transformation in the scene graph.

##### Example

```ts
// Get world position
const worldPos = container.worldTransform;
console.log(`World position: (${worldPos.tx}, ${worldPos.ty})`);
```

##### See

[Container#localTransform](scene.ViewContainer.html#localtransform) For local space transform

##### Returns

[`Matrix`](maths.Matrix.md)

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`worldTransform`](scene.ViewContainer.html#worldtransform)

***

### x

#### Get Signature

> **get** **x**(): `number`

The position of the container on the x axis relative to the local coordinates of the parent.

An alias to position.x

##### Example

```ts
// Basic position
container.x = 100;
```

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`x`](scene.ViewContainer.html#x)

***

### y

#### Get Signature

> **get** **y**(): `number`

The position of the container on the y axis relative to the local coordinates of the parent.

An alias to position.y

##### Example

```ts
// Basic position
container.y = 200;
```

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`y`](scene.ViewContainer.html#y)

## Methods

### \_onTouch()?

> `optional` **\_onTouch**(`now`): `void`

An optional callback for when an item is touched

#### Parameters

##### now

`number`

#### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`_onTouch`](scene.ViewContainer.html#_ontouch)

***

### addChild()

> **addChild**\<`U`\>(...`children`): `U`\[`0`\]

Adds one or more children to the container.
The children will be rendered as part of this container's display list.

#### Type Parameters

##### U

`U` *extends* [`ContainerChild`](scene.ContainerChild.md)[]

#### Parameters

##### children

...`U`

The Container(s) to add to the container

#### Returns

`U`\[`0`\]

The first child that was added

#### Example

```ts
// Add a single child
container.addChild(sprite);

// Add multiple children
container.addChild(background, player, foreground);

// Add with type checking
const sprite = container.addChild<Sprite>(new Sprite(texture));
sprite.tint = 'red';
```

#### See

 - [Container#removeChild](scene.Container.html#removechild) For removing children
 - [Container#addChildAt](scene.Container.html#addchildat) For adding at specific index

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`addChild`](scene.ViewContainer.html#addchild)

***

### addChildAt()

> **addChildAt**\<`U`\>(`child`, `index`): `U`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown.
If the child is already in this container, it will be moved to the specified index.

#### Type Parameters

##### U

`U` *extends* [`ContainerChild`](scene.ContainerChild.md)

#### Parameters

##### child

`U`

The child to add

##### index

`number`

The index where the child will be placed

#### Returns

`U`

The child that was added

#### Example

```ts
// Add at specific index
container.addChildAt(sprite, 0); // Add to front

// Move existing child
const index = container.children.length - 1;
container.addChildAt(existingChild, index); // Move to back

// With error handling
try {
    container.addChildAt(sprite, 1000);
} catch (e) {
    console.warn('Index out of bounds');
}
```

#### Throws

If index is out of bounds

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding to the end
 - [Container#setChildIndex](scene.Container.html#setchildindex) For moving existing children

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`addChildAt`](scene.ViewContainer.html#addchildat)

***

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Unlike `on` or `addListener` which are methods from EventEmitter, `addEventListener`
seeks to be compatible with the DOM's `addEventListener` with support for options.

##### Type Parameters

###### K

`K` *extends* keyof FederatedEventMap \| keyof GlobalFederatedEventMap

##### Parameters

###### type

`K`

The type of event to listen to.

###### listener

(`e`) => `any`

The listener callback or object.

###### options?

[`AddListenerOptions`](events.AddListenerOptions.md)

Listener options, used for capture phase.

##### Returns

`void`

##### Example

```ts
// Tell the user whether they did a single, double, triple, or nth click.
button.addEventListener('click', {
    handleEvent(e): {
        let prefix;

        switch (e.detail) {
            case 1: prefix = 'single'; break;
            case 2: prefix = 'double'; break;
            case 3: prefix = 'triple'; break;
            default: prefix = e.detail + 'th'; break;
        }

        console.log('That was a ' + prefix + 'click');
    }
});

// But skip the first click!
button.parent.addEventListener('click', function blockClickOnce(e) {
    e.stopImmediatePropagation();
    button.parent.removeEventListener('click', blockClickOnce, true);
}, {
    capture: true,
});
```

##### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`addEventListener`](scene.ViewContainer.html#addeventlistener)

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

[`AddListenerOptions`](events.AddListenerOptions.md)

##### Returns

`void`

##### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`addEventListener`](scene.ViewContainer.html#addeventlistener)

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Checks if the object contains the given point in local coordinates.
Takes into account the anchor offset when determining boundaries.

#### Parameters

##### point

[`PointData`](maths.PointData.md)

The point to check in local coordinates

#### Returns

`boolean`

True if the point is within the sprite's bounds

#### Example

```ts
// Create a tiling sprite
const sprite = new TilingSprite({
    texture: Texture.from('pattern.png'),
    width: 200,
    height: 100,
    anchor: 0.5 // Center anchor
});

// Basic point check
const contains = sprite.containsPoint({ x: 50, y: 25 });
console.log('Point is inside:', contains);

// Check with different anchors
sprite.anchor.set(0); // Top-left anchor
console.log('Contains point:', sprite.containsPoint({ x: 150, y: 75 }));
```

#### See

 - [TilingSprite#toLocal](scene.ToLocalGlobalMixin.html#tolocal) For converting global coordinates to local
 - [TilingSprite#anchor](#anchor) For understanding boundary calculations

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`containsPoint`](scene.ViewContainer.html#containspoint)

***

### destroy()

> **destroy**(`options`): `void`

Destroys this sprite renderable and optionally its texture.

#### Parameters

##### options

[`DestroyOptions`](scene.DestroyOptions.md) = `false`

Options parameter. A boolean will act as if all options
 have been set to that value

#### Returns

`void`

#### Example

```ts
tilingSprite.destroy();
tilingSprite.destroy(true);
tilingSprite.destroy({ texture: true, textureSource: true });
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`destroy`](scene.ViewContainer.html#destroy)

***

### disableRenderGroup()

> **disableRenderGroup**(): `void`

**`Advanced`**

This will disable the render group for this container.

#### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`disableRenderGroup`](scene.ViewContainer.html#disablerendergroup)

***

### dispatchEvent()

> **dispatchEvent**(`e`): `boolean`

Dispatch the event on this [Container](scene.Container.md) using the event's [EventBoundary](events.EventBoundary.md).

The target of the event is set to `this` and the `defaultPrevented` flag is cleared before dispatch.

#### Parameters

##### e

[`FederatedEvent`](events.FederatedEvent.md)

The event to dispatch.

#### Returns

`boolean`

Whether the [preventDefault](events.FederatedEvent.html#preventdefault)() method was not invoked.

#### Example

```ts
// Reuse a click event!
button.dispatchEvent(clickEvent);
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`dispatchEvent`](scene.ViewContainer.html#dispatchevent)

***

### enableRenderGroup()

> **enableRenderGroup**(): `void`

**`Advanced`**

Calling this enables a render group for this container.
This means it will be rendered as a separate set of instructions.
The transform of the container will also be handled on the GPU rather than the CPU.

#### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`enableRenderGroup`](scene.ViewContainer.html#enablerendergroup)

***

### getBounds()

> **getBounds**(`skipUpdate?`, `bounds?`): [`Bounds`](rendering.Bounds.md)

Calculates and returns the (world) bounds of the display object as a Rectangle.
Takes into account transforms and child bounds.

#### Parameters

##### skipUpdate?

`boolean`

Setting to `true` will stop the transforms of the scene graph from
 being updated. This means the calculation returned MAY be out of date BUT will give you a
 nice performance boost.

##### bounds?

[`Bounds`](rendering.Bounds.md)

Optional bounds to store the result of the bounds calculation

#### Returns

[`Bounds`](rendering.Bounds.md)

The minimum axis-aligned rectangle in world space that fits around this object

#### Example

```ts
// Basic bounds calculation
const bounds = sprite.getBounds();
console.log(`World bounds: ${bounds.x}, ${bounds.y}, ${bounds.width}, ${bounds.height}`);

// Reuse bounds object for performance
const recycleBounds = new Bounds();
sprite.getBounds(false, recycleBounds);

// Skip update for performance
const fastBounds = sprite.getBounds(true);
```

#### Remarks

- Includes transform calculations
- Updates scene graph by default
- Can reuse bounds objects
- Common in hit testing

#### See

 - [Container#getLocalBounds](scene.MeasureMixin.html#getlocalbounds) For untransformed bounds
 - [Bounds](rendering.Bounds.md) For bounds properties

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getBounds`](scene.ViewContainer.html#getbounds)

***

### getChildAt()

> **getChildAt**\<`U`\>(`index`): `U`

Returns the child at the specified index.

#### Type Parameters

##### U

`U` *extends* [`ContainerChild`](scene.ContainerChild.md)

#### Parameters

##### index

`number`

The index to get the child from

#### Returns

`U`

The child at the given index

#### Example

```ts
// Get first child
const first = container.getChildAt(0);

// Type-safe access
const sprite = container.getChildAt<Sprite>(1);

// With error handling
try {
    const child = container.getChildAt(10);
} catch (e) {
    console.warn('Index out of bounds');
}
```

#### Throws

If index is out of bounds

#### See

 - [Container#children](scene.Container.html#children) For direct array access
 - [Container#getChildByLabel](scene.Container.html#getchildbylabel) For name-based lookup

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getChildAt`](scene.ViewContainer.html#getchildat)

***

### getChildByLabel()

> **getChildByLabel**(`label`, `deep?`): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>

Returns the first child in the container with the specified label.
Recursive searches are done in a pre-order traversal.

#### Parameters

##### label

Instance label to search for

`string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

##### deep?

`boolean`

Whether to search recursively through children

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>

The first child with the specified label, or null if none found

#### Example

```ts
// Basic label search
const child = container.getChildByLabel('player');

// Search with regular expression
const enemy = container.getChildByLabel(/enemy-\d+/);

// Deep search through children
const deepChild = container.getChildByLabel('powerup', true);
```

#### See

 - [Container#getChildrenByLabel](scene.Container.html#getchildrenbylabel) For finding all matches
 - [Container#label](scene.DOMContainer.html#label) For setting labels

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getChildByLabel`](scene.ViewContainer.html#getchildbylabel)

***

### ~~getChildByName()~~

> **getChildByName**(`label`, `deep?`): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>

#### Parameters

##### label

Instance name.

`string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

##### deep?

`boolean`

Whether to search recursively

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>

The child with the specified name.

#### Deprecated

since 8.0.0

#### See

Container#getChildByLabel

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getChildByName`](scene.ViewContainer.html#getchildbyname)

***

### getChildIndex()

> **getChildIndex**(`child`): `number`

Returns the index position of a child Container instance.

#### Parameters

##### child

[`ContainerChild`](scene.ContainerChild.md)

The Container instance to identify

#### Returns

`number`

The index position of the child container

#### Example

```ts
// Basic index lookup
const index = container.getChildIndex(sprite);
console.log(`Sprite is at index ${index}`);

// With error handling
try {
    const index = container.getChildIndex(sprite);
} catch (e) {
    console.warn('Child not found in container');
}
```

#### Throws

If child is not in this container

#### See

 - [Container#setChildIndex](scene.Container.html#setchildindex) For changing index
 - [Container#children](scene.Container.html#children) For direct array access

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getChildIndex`](scene.ViewContainer.html#getchildindex)

***

### getChildrenByLabel()

> **getChildrenByLabel**(`label`, `deep?`, `out?`): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

Returns all children in the container with the specified label.
Recursive searches are done in a pre-order traversal.

#### Parameters

##### label

Instance label to search for

`string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

##### deep?

`boolean`

Whether to search recursively through children

##### out?

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

Optional array to store matching children in

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

An array of children with the specified label

#### Example

```ts
// Basic label search
const enemies = container.getChildrenByLabel('enemy');
// Search with regular expression
const powerups = container.getChildrenByLabel(/powerup-\d+/);
// Deep search with collection
const buttons = [];
container.getChildrenByLabel('button', true, buttons);
```

#### See

 - [Container#getChildByLabel](scene.Container.html#getchildbylabel) For finding first match
 - [Container#label](scene.DOMContainer.html#label) For setting labels

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getChildrenByLabel`](scene.ViewContainer.html#getchildrenbylabel)

***

### getFastGlobalBounds()

> **getFastGlobalBounds**(`factorRenderLayers?`, `bounds?`): [`Bounds`](rendering.Bounds.md)

**`Advanced`**

Computes an approximate global bounding box for the container and its children.
This method is optimized for speed by using axis-aligned bounding boxes (AABBs),
and uses the last render results from when it updated the transforms. This function does not update them.
which may result in slightly larger bounds but never smaller than the actual bounds.

for accurate (but less performant) results use `container.getGlobalBounds`

#### Parameters

##### factorRenderLayers?

`boolean`

A flag indicating whether to consider render layers in the calculation.

##### bounds?

[`Bounds`](rendering.Bounds.md)

The output bounds object to store the result. If not provided, a new one is created.

#### Returns

[`Bounds`](rendering.Bounds.md)

The computed bounds.

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getFastGlobalBounds`](scene.ViewContainer.html#getfastglobalbounds)

***

### getGlobalAlpha()

> **getGlobalAlpha**(`skipUpdate?`): `number`

Returns the global (compound) alpha of the container within the scene.

#### Parameters

##### skipUpdate?

`boolean`

Performance optimization flag:
  - If false (default): Recalculates the entire alpha chain through parents for accuracy
  - If true: Uses cached worldAlpha from the last render pass for better performance

#### Returns

`number`

The resulting alpha value (between 0 and 1)

#### Example

```ts
// Accurate but slower - recalculates entire alpha chain
const preciseAlpha = container.getGlobalAlpha();

// Faster but may be outdated - uses cached alpha
const cachedAlpha = container.getGlobalAlpha(true);
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getGlobalAlpha`](scene.ViewContainer.html#getglobalalpha)

***

### getGlobalPosition()

> **getGlobalPosition**(`point?`, `skipUpdate?`): [`Point`](maths.Point.md)

Returns the global position of the container, taking into account the container hierarchy.

#### Parameters

##### point?

[`Point`](maths.Point.md)

The optional point to write the global value to

##### skipUpdate?

`boolean`

Should we skip the update transform

#### Returns

[`Point`](maths.Point.md)

The updated point

#### Example

```ts
// Basic position check
const globalPos = sprite.getGlobalPosition();
console.log(`Global: (${globalPos.x}, ${globalPos.y})`);

// Reuse point object
const point = new Point();
sprite.getGlobalPosition(point);

// Skip transform update for performance
const fastPos = container.getGlobalPosition(undefined, true);
```

#### See

 - [Container#toGlobal](scene.ToLocalGlobalMixin.html#toglobal) For converting specific points
 - [Container#toLocal](scene.ToLocalGlobalMixin.html#tolocal) For converting to local space

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getGlobalPosition`](scene.ViewContainer.html#getglobalposition)

***

### getGlobalTint()

> **getGlobalTint**(`skipUpdate?`): `number`

Returns the global (compound) tint color of the container within the scene.

#### Parameters

##### skipUpdate?

`boolean`

Performance optimization flag:
  - If false (default): Recalculates the entire tint chain through parents for accuracy
  - If true: Uses cached worldColor from the last render pass for better performance

#### Returns

`number`

The resulting tint color as a 24-bit RGB number (0xRRGGBB)

#### Example

```ts
// Accurate but slower - recalculates entire tint chain
const preciseTint = container.getGlobalTint();

// Faster but may be outdated - uses cached tint
const cachedTint = container.getGlobalTint(true);
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getGlobalTint`](scene.ViewContainer.html#getglobaltint)

***

### getGlobalTransform()

> **getGlobalTransform**(`matrix?`, `skipUpdate?`): [`Matrix`](maths.Matrix.md)

Returns the global transform matrix of the container within the scene.

#### Parameters

##### matrix?

[`Matrix`](maths.Matrix.md)

Optional matrix to store the result. If not provided, a new Matrix will be created.

##### skipUpdate?

`boolean`

Performance optimization flag:
  - If false (default): Recalculates the entire transform chain for accuracy
  - If true: Uses cached worldTransform from the last render pass for better performance

#### Returns

[`Matrix`](maths.Matrix.md)

The resulting transformation matrix (either the input matrix or a new one)

#### Example

```ts
// Accurate but slower - recalculates entire transform chain
const preciseTransform = container.getGlobalTransform();

// Faster but may be outdated - uses cached transform
const cachedTransform = container.getGlobalTransform(undefined, true);

// Reuse existing matrix
const existingMatrix = new Matrix();
container.getGlobalTransform(existingMatrix);
```

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getGlobalTransform`](scene.ViewContainer.html#getglobaltransform)

***

### getLocalBounds()

> **getLocalBounds**(): [`Bounds`](rendering.Bounds.md)

Retrieves the local bounds of the container as a Bounds object.
Uses cached values when possible for better performance.

#### Returns

[`Bounds`](rendering.Bounds.md)

The bounding area

#### Example

```ts
// Basic bounds check
const bounds = container.getLocalBounds();
console.log(`Width: ${bounds.width}, Height: ${bounds.height}`);
// subsequent calls will reuse the cached bounds
const cachedBounds = container.getLocalBounds();
console.log(bounds === cachedBounds); // true
```

#### See

 - [Container#getBounds](scene.MeasureMixin.html#getbounds) For world space bounds
 - [Bounds](rendering.Bounds.md) For bounds properties

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getLocalBounds`](scene.ViewContainer.html#getlocalbounds)

***

### getSize()

> **getSize**(`out?`): [`Size`](maths.Size.md)

Retrieves the size of the TilingSprite as a [Size](maths.Size.md) object.
This method is more efficient than getting width and height separately as it only allocates one object.

#### Parameters

##### out?

[`Size`](maths.Size.md)

Optional object to store the size in, to avoid allocating a new object

#### Returns

[`Size`](maths.Size.md)

The size of the TilingSprite

#### Example

```ts
// Get basic size
const size = sprite.getSize();
console.log(`Size: ${size.width}x${size.height}`);

// Reuse existing size object
const reuseSize = { width: 0, height: 0 };
sprite.getSize(reuseSize);
```

#### See

 - [TilingSprite#width](#width) For getting just the width
 - [TilingSprite#height](#height) For getting just the height
 - [TilingSprite#setSize](#setsize) For setting both width and height efficiently

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`getSize`](scene.ViewContainer.html#getsize)

***

### removeChild()

> **removeChild**\<`U`\>(...`children`): `U`\[`0`\]

Removes one or more children from the container.
When removing multiple children, events will be triggered for each child in sequence.

#### Type Parameters

##### U

`U` *extends* [`ContainerChild`](scene.ContainerChild.md)[]

#### Parameters

##### children

...`U`

The Container(s) to remove

#### Returns

`U`\[`0`\]

The first child that was removed

#### Example

```ts
// Remove a single child
const removed = container.removeChild(sprite);

// Remove multiple children
const bg = container.removeChild(background, player, userInterface);

// Remove with type checking
const sprite = container.removeChild<Sprite>(childSprite);
sprite.texture = newTexture;
```

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding children
 - [Container#removeChildren](scene.Container.html#removechildren) For removing multiple children

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`removeChild`](scene.ViewContainer.html#removechild)

***

### removeChildAt()

> **removeChildAt**\<`U`\>(`index`): `U`

Removes a child from the specified index position.

#### Type Parameters

##### U

`U` *extends* [`ContainerChild`](scene.ContainerChild.md)

#### Parameters

##### index

`number`

The index to remove the child from

#### Returns

`U`

The child that was removed

#### Example

```ts
// Remove first child
const removed = container.removeChildAt(0);

// type safe access
const sprite = container.removeChildAt<Sprite>(1);

// With error handling
try {
    const child = container.removeChildAt(10);
} catch (e) {
    console.warn('Index out of bounds');
}
```

#### Throws

If index is out of bounds

#### See

 - [Container#removeChild](scene.Container.html#removechild) For removing specific children
 - [Container#removeChildren](scene.Container.html#removechildren) For removing multiple children

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`removeChildAt`](scene.ViewContainer.html#removechildat)

***

### removeChildren()

> **removeChildren**(`beginIndex?`, `endIndex?`): [`ContainerChild`](scene.ContainerChild.md)[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

##### beginIndex?

`number`

The beginning position

##### endIndex?

`number`

The ending position. Default is container size

#### Returns

[`ContainerChild`](scene.ContainerChild.md)[]

List of removed children

#### Example

```ts
// Remove all children
container.removeChildren();

// Remove first 3 children
const removed = container.removeChildren(0, 3);
console.log('Removed:', removed.length); // 3

// Remove children from index 2 onwards
container.removeChildren(2);

// Remove specific range
const middle = container.removeChildren(1, 4);
```

#### Throws

If begin/end indexes are invalid

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding children
 - [Container#removeChild](scene.Container.html#removechild) For removing specific children

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`removeChildren`](scene.ViewContainer.html#removechildren)

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Unlike `off` or `removeListener` which are methods from EventEmitter, `removeEventListener`
seeks to be compatible with the DOM's `removeEventListener` with support for options.

##### Type Parameters

###### K

`K` *extends* keyof FederatedEventMap \| keyof GlobalFederatedEventMap

##### Parameters

###### type

`K`

The type of event the listener is bound to.

###### listener

(`e`) => `any`

The listener callback or object.

###### options?

[`RemoveListenerOptions`](events.RemoveListenerOptions.md)

The original listener options.
This is required to deregister a capture phase listener.

##### Returns

`void`

##### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`removeEventListener`](scene.ViewContainer.html#removeeventlistener)

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

[`RemoveListenerOptions`](events.RemoveListenerOptions.md)

##### Returns

`void`

##### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`removeEventListener`](scene.ViewContainer.html#removeeventlistener)

***

### removeFromParent()

> **removeFromParent**(): `void`

Remove the Container from its parent Container. If the Container has no parent, do nothing.

#### Returns

`void`

#### Example

```ts
// Basic removal
sprite.removeFromParent();

// With validation
if (sprite.parent) {
    sprite.removeFromParent();
}
```

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding to a new parent
 - [Container#removeChild](scene.Container.html#removechild) For parent removing children

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`removeFromParent`](scene.ViewContainer.html#removefromparent)

***

### reparentChild()

> **reparentChild**\<`U`\>(...`child`): `U`\[`0`\]

Reparent a child or multiple children to this container while preserving their world transform.
This ensures that the visual position and rotation of the children remain the same even when changing parents.

#### Type Parameters

##### U

`U` *extends* [`ContainerChild`](scene.ContainerChild.md)[]

#### Parameters

##### child

...`U`

The child or children to reparent

#### Returns

`U`\[`0`\]

The first child that was reparented

#### Example

```ts
// Basic reparenting
const sprite = new Sprite(texture);
oldContainer.addChild(sprite);
// Move to new parent, keeping visual position
newContainer.reparentChild(sprite);

// Reparent multiple children
const batch = [sprite1, sprite2, sprite3];
newContainer.reparentChild(...batch);
```

#### See

 - [Container#reparentChildAt](scene.Container.html#reparentchildat) For index-specific reparenting
 - [Container#addChild](scene.Container.html#addchild) For simple parenting

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`reparentChild`](scene.ViewContainer.html#reparentchild)

***

### reparentChildAt()

> **reparentChildAt**\<`U`\>(`child`, `index`): `U`

Reparent the child to this container at the specified index while preserving its world transform.
This ensures that the visual position and rotation of the child remain the same even when changing parents.

#### Type Parameters

##### U

`U` *extends* [`ContainerChild`](scene.ContainerChild.md)

#### Parameters

##### child

`U`

The child to reparent

##### index

`number`

The index to reparent the child to

#### Returns

`U`

The reparented child

#### Example

```ts
// Basic index-specific reparenting
const sprite = new Sprite(texture);
oldContainer.addChild(sprite);
// Move to new parent at index 0 (front)
newContainer.reparentChildAt(sprite, 0);
```

#### Throws

If index is out of bounds

#### See

 - [Container#reparentChild](scene.Container.html#reparentchild) For appending reparented children
 - [Container#addChildAt](scene.Container.html#addchildat) For simple indexed parenting

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`reparentChildAt`](scene.ViewContainer.html#reparentchildat)

***

### replaceChild()

> **replaceChild**\<`U`, `T`\>(`oldChild`, `newChild`): `void`

Replace a child in the container with a new child. Copying the local transform from the old child to the new one.

#### Type Parameters

##### U

`U` *extends* [`ContainerChild`](scene.ContainerChild.md)

##### T

`T` *extends* [`ContainerChild`](scene.ContainerChild.md)

#### Parameters

##### oldChild

`U`

The child to replace.

##### newChild

`T`

The new child to add.

#### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`replaceChild`](scene.ViewContainer.html#replacechild)

***

### setChildIndex()

> **setChildIndex**(`child`, `index`): `void`

Changes the position of an existing child in the container.

#### Parameters

##### child

[`ContainerChild`](scene.ContainerChild.md)

The child Container instance to reposition

##### index

`number`

The resulting index number for the child

#### Returns

`void`

#### Example

```ts
// Basic index change
container.setChildIndex(sprite, 0); // Move to front
container.setChildIndex(sprite, container.children.length - 1); // Move to back

// With error handling
try {
    container.setChildIndex(sprite, 5);
} catch (e) {
    console.warn('Invalid index or child not found');
}
```

#### Throws

If index is out of bounds

#### Throws

If child is not in container

#### See

 - [Container#getChildIndex](scene.Container.html#getchildindex) For getting current index
 - [Container#swapChildren](scene.Container.html#swapchildren) For swapping positions

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`setChildIndex`](scene.ViewContainer.html#setchildindex)

***

### setFromMatrix()

> **setFromMatrix**(`matrix`): `void`

Updates the local transform properties by decomposing the given matrix.
Extracts position, scale, rotation, and skew from a transformation matrix.

#### Parameters

##### matrix

[`Matrix`](maths.Matrix.md)

The matrix to use for updating the transform

#### Returns

`void`

#### Example

```ts
// Basic matrix transform
const matrix = new Matrix()
    .translate(100, 100)
    .rotate(Math.PI / 4)
    .scale(2, 2);

container.setFromMatrix(matrix);

// Copy transform from another container
const source = new Container();
source.position.set(100, 100);
source.rotation = Math.PI / 2;

target.setFromMatrix(source.localTransform);

// Reset transform
container.setFromMatrix(Matrix.IDENTITY);
```

#### See

 - [Container#updateTransform](scene.Container.html#updatetransform) For property-based updates
 - [Matrix#decompose](maths.Matrix.html#decompose) For matrix decomposition details

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`setFromMatrix`](scene.ViewContainer.html#setfrommatrix)

***

### setMask()

> **setMask**(`options`): `void`

Used to set mask and control mask options on a display object.
Allows for more detailed control over masking behavior compared to the mask property.

#### Parameters

##### options

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`MaskOptionsAndMask`](scene.MaskOptionsAndMask.md)\>

Configuration options for the mask

#### Returns

`void`

#### Example

```ts
import { Graphics, Sprite } from 'pixi.js';

// Create a circular mask
const graphics = new Graphics()
    .beginFill(0xFF3300)
    .drawCircle(100, 100, 50)
    .endFill();

// Apply mask with options
sprite.setMask({
    mask: graphics,
    inverse: true, // Create a hole effect
});

// Clear existing mask
sprite.setMask({ mask: null });
```

#### See

 - [Container#mask](scene.EffectsMixin.html#mask) For simple masking
 - [MaskOptionsAndMask](scene.MaskOptionsAndMask.md) For full options API

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`setMask`](scene.ViewContainer.html#setmask)

***

### setSize()

> **setSize**(`value`, `height?`): `void`

Sets the size of the TilingSprite to the specified width and height.
This is faster than setting width and height separately as it only triggers one update.

#### Parameters

##### value

This can be either a number for uniform sizing or a Size object with width/height properties

`number` | `Optional`\<[`Size`](maths.Size.md), `"height"`\>

##### height?

`number`

The height to set. Defaults to the value of `width` if not provided

#### Returns

`void`

#### Example

```ts
// Set specific dimensions
sprite.setSize(300, 200); // Width: 300, Height: 200

// Set uniform size (square)
sprite.setSize(400); // Width: 400, Height: 400

// Set size using object
sprite.setSize({
    width: 500,
    height: 300
});
```

#### See

 - [TilingSprite#width](#width) For setting width only
 - [TilingSprite#height](#height) For setting height only

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`setSize`](scene.ViewContainer.html#setsize)

***

### swapChildren()

> **swapChildren**\<`U`\>(`child`, `child2`): `void`

Swaps the position of 2 Containers within this container.

#### Type Parameters

##### U

`U` *extends* [`ContainerChild`](scene.ContainerChild.md)

#### Parameters

##### child

`U`

First container to swap

##### child2

`U`

Second container to swap

#### Returns

`void`

#### Example

```ts
// Basic swap
container.swapChildren(sprite1, sprite2);

// With error handling
try {
    container.swapChildren(sprite1, sprite2);
} catch (e) {
    console.warn('One or both children not found in container');
}
```

#### Remarks

- Updates render groups
- No effect if same child
- Triggers container changes
- Common in z-ordering

#### Throws

If either child is not in container

#### See

 - [Container#setChildIndex](scene.Container.html#setchildindex) For direct index placement
 - [Container#getChildIndex](scene.Container.html#getchildindex) For getting current positions

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`swapChildren`](scene.ViewContainer.html#swapchildren)

***

### toGlobal()

> **toGlobal**\<`P`\>(`position`, `point?`, `skipUpdate?`): `P`

Calculates the global position of a point relative to this container.
Takes into account the container hierarchy and transforms.

#### Type Parameters

##### P

`P` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

#### Parameters

##### position

[`PointData`](maths.PointData.md)

The local point to convert

##### point?

`P`

Optional point to store the result

##### skipUpdate?

`boolean`

Whether to skip transform updates

#### Returns

`P`

The global position

#### Example

```ts
// Basic point conversion
const localPoint = { x: 10, y: 20 };
const globalPoint = container.toGlobal(localPoint);

// With point reuse
const reusePoint = new Point();
container.toGlobal(localPoint, reusePoint);

// Performance optimization
const fastPoint = container.toGlobal(
    { x: 50, y: 50 },
    undefined,
    true // Skip transform update
);
```

#### See

 - [Container#toLocal](scene.ToLocalGlobalMixin.html#tolocal) For reverse conversion
 - [Container#getGlobalPosition](scene.ToLocalGlobalMixin.html#getglobalposition) For container position

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`toGlobal`](scene.ViewContainer.html#toglobal)

***

### toLocal()

> **toLocal**\<`P`\>(`position`, `from?`, `point?`, `skipUpdate?`): `P`

Calculates the local position of the container relative to another point.
Converts coordinates from any coordinate space to this container's local coordinate space.

#### Type Parameters

##### P

`P` *extends* [`PointData`](maths.PointData.md) = [`Point`](maths.Point.md)

#### Parameters

##### position

[`PointData`](maths.PointData.md)

The world origin to calculate from

##### from?

[`Container`](scene.Container.md)

The Container to calculate the global position from

##### point?

`P`

A Point object in which to store the value

##### skipUpdate?

`boolean`

Should we skip the update transform

#### Returns

`P`

A point object representing the position in local space

#### Example

```ts
// Basic coordinate conversion
const worldPoint = { x: 100, y: 100 };
const localPos = container.toLocal(worldPoint);

// Convert from another container
const fromSprite = new Sprite(texture);
fromSprite.position.set(50, 50);
const pointInSprite = { x: 10, y: 10 };
const localPoint = container.toLocal(pointInSprite, fromSprite);

// With point reuse for performance
const reusePoint = new Point();
container.toLocal(worldPoint, undefined, reusePoint);

// Skip transform update for static objects
const fastLocal = container.toLocal(
    worldPoint,
    undefined,
    undefined,
    true
);
```

#### See

 - [Container#toGlobal](scene.ToLocalGlobalMixin.html#toglobal) For reverse conversion
 - [Container#getGlobalPosition](scene.ToLocalGlobalMixin.html#getglobalposition) For container position

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`toLocal`](scene.ViewContainer.html#tolocal)

***

### unload()

> **unload**(): `void`

Unloads the GPU data from the view.

#### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`unload`](scene.ViewContainer.html#unload)

***

### updateLocalTransform()

> **updateLocalTransform**(): `void`

Updates the local transform.

#### Returns

`void`

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`updateLocalTransform`](scene.ViewContainer.html#updatelocaltransform)

***

### updateTransform()

> **updateTransform**(`opts`): `this`

Updates the transform properties of the container.
Allows partial updates of transform properties for optimized manipulation.

#### Parameters

##### opts

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`UpdateTransformOptions`](scene.UpdateTransformOptions.md)\>

Transform options to update

#### Returns

`this`

This container, for chaining

#### Example

```ts
// Basic transform update
container.updateTransform({
    x: 100,
    y: 200,
    rotation: Math.PI / 4
});

// Scale and rotate around center
sprite.updateTransform({
    pivotX: sprite.width / 2,
    pivotY: sprite.height / 2,
    scaleX: 2,
    scaleY: 2,
    rotation: Math.PI
});

// Update position only
button.updateTransform({
    x: button.x + 10, // Move right
    y: button.y      // Keep same y
});
```

#### See

 - [Container#setFromMatrix](scene.Container.html#setfrommatrix) For matrix-based transforms
 - [Container#position](gif.GifSprite.html#position) For direct position access

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`updateTransform`](scene.ViewContainer.html#updatetransform)

***

### from()

> `static` **from**(`source`, `options`): `TilingSprite`

Creates a new tiling sprite based on a source texture or image path.
This is a convenience method that automatically creates and manages textures.

#### Parameters

##### source

The source to create the sprite from. Can be a path to an image or a texture

`string` | [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

##### options

[`TilingSpriteOptions`](scene.TilingSpriteOptions.md) = `{}`

Additional options for the tiling sprite

#### Returns

`TilingSprite`

A new tiling sprite based on the source

#### Example

```ts
// Create a new tiling sprite from an image path
const pattern = TilingSprite.from('pattern.png');
pattern.width = 300; // Set the width of the tiling area
pattern.height = 200; // Set the height of the tiling area

// Create from options
const texture = Texture.from('pattern.png');
const pattern = TilingSprite.from(texture, {
    width: 300,
    height: 200,
    tileScale: { x: 0.5, y: 0.5 }
});
```

#### See

 - [Texture.from](rendering.RenderTexture.html#from) For texture creation details
 - [Assets](assets.Assets.md) For asset loading and management

***

### ~~mixin()~~

> `static` **mixin**(`source`): `void`

Mixes all enumerable properties and methods from a source object to Container.

#### Parameters

##### source

[`Dict`](utils.Dict.md)\<`any`\>

The source of properties and methods to mix in.

#### Returns

`void`

#### Deprecated

since 8.8.0

#### Inherited from

[`ViewContainer`](scene.ViewContainer.md).[`mixin`](scene.ViewContainer.html#mixin)
