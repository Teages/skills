# Interface: GifSpriteOptions

Configuration options for creating a GifSprite instance.

These options control both the visual appearance and playback behavior
of animated GIFs.

## Examples

```ts
import { Assets } from 'pixi.js';
import { GifSprite } from 'pixi.js/gif';

// Simple usage, minimal options
const source = await Assets.load('animation.gif');
const animation = new GifSprite(source);
```

```ts
import { Assets } from 'pixi.js';
import { GifSprite } from 'pixi.js/gif';

// Advanced usage with options
const source = await Assets.load({
  src: 'animation.gif',
  data: {
    scaleMode: 'nearest'  // Pixelated scaling
  }
});

const animation = new GifSprite({
  source,                 // GIF data source
  animationSpeed: 1.5,    // 50% faster than normal
  loop: true,             // Loop the animation
  autoPlay: true,         // Start playing immediately
  onComplete() {          // Called when non-looping animation ends
    console.log('Animation complete!');
  }
});
```

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`SpriteOptions`](scene.SpriteOptions.md), `"texture"`\>

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

### alpha?

> `optional` **alpha**: `number`

The opacity of the object relative to its parent's opacity.
Value ranges from 0 (fully transparent) to 1 (fully opaque).

#### Example

```ts
new Container({ alpha: 0.5 }); // 50% opacity
new Container({ alpha: 1 }); // Fully opaque
```

#### Default

```ts
1
```

#### See

 - [Container#visible](gif.GifSprite.html#visible) For toggling visibility
 - [Container#renderable](gif.GifSprite.html#renderable) For render control

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`alpha`](scene.ContainerOptions.html#alpha)

***

### anchor?

> `optional` **anchor**: `number` \| [`PointData`](maths.PointData.md)

The anchor point of the sprite (0-1 range).
Controls the origin point for rotation, scaling, and positioning.
Can be a number for uniform anchor or a PointData for separate x/y values.

#### Default

```ts
0
```

#### Example

```ts
// Centered anchor
anchor: 0.5
// Separate x/y anchor
anchor: { x: 0.5, y: 0.5 }
// Right-aligned anchor
anchor: { x: 1, y: 0 }
```

#### Inherited from

`Omit.anchor`

***

### angle?

> `optional` **angle**: `number`

The angle of the object in degrees.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees.

#### Example

```ts
new Container({ angle: 45 }); // Rotate 45 degrees
new Container({ angle: 90 }); // Rotate 90 degrees
```

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`angle`](scene.ContainerOptions.html#angle)

***

### animationSpeed?

> `optional` **animationSpeed**: `number`

Animation playback speed multiplier.
Higher values speed up the animation, lower values slow it down.

#### Default

```ts
1
```

#### Example

```ts
const animation = new GifSprite({ source, animationSpeed: 2 }); // 2x speed
```

#### See

 - [GifSprite.play](gif.GifSprite.html#play)
 - [GifSprite.stop](gif.GifSprite.html#stop)

***

### autoGarbageCollect?

> `optional` **autoGarbageCollect**: `boolean`

If set to true, the resource will be garbage collected automatically when it is not used.

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`autoGarbageCollect`](scene.ViewContainerOptions.html#autogarbagecollect)

***

### autoPlay?

> `optional` **autoPlay**: `boolean`

Whether to start playing right away when created.
If `false`, you must call [GifSprite.play](gif.GifSprite.html#play) to start playback.

#### Default

```ts
true
```

#### Example

```ts
const animation = new GifSprite({ source, autoPlay: true });
```

#### See

[GifSprite.play](gif.GifSprite.html#play)

***

### autoUpdate?

> `optional` **autoUpdate**: `boolean`

Whether to auto-update animation via shared ticker.
Set to `false` to manage updates yourself.

#### Default

```ts
true
```

#### Example

```ts
const animation = new GifSprite({ source, autoUpdate: false });
// Manage updates manually:
app.ticker.add((ticker) => {
    animation.update(ticker);
});
```

***

### blendMode?

> `optional` **blendMode**: [`BLEND_MODES`](filters.BLEND_MODES.md)

The blend mode to be applied to the sprite. Controls how pixels are blended when rendering.

Setting to 'normal' will reset to default blending.
> [!NOTE] More blend modes are available after importing the `pixi.js/advanced-blend-modes` sub-export.

#### Example

```ts
// Basic blend modes
new Container({ blendMode: 'normal' }); // Default blending
new Container({ blendMode: 'add' });    // Additive blending
new Container({ blendMode: 'multiply' }); // Multiply colors
new Container({ blendMode: 'screen' }); // Screen blend
```

#### Default

```ts
'normal'
```

#### See

 - [Container#alpha](gif.GifSprite.html#alpha) For transparency
 - [Container#tint](gif.GifSprite.html#tint) For color adjustments

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`blendMode`](scene.ContainerOptions.html#blendmode)

***

### boundsArea?

> `optional` **boundsArea**: [`Rectangle`](maths.Rectangle.md)

An optional bounds area for this container. Setting this rectangle will stop the renderer
from recursively measuring the bounds of each children and instead use this single boundArea.

> [!IMPORTANT] This is great for optimisation! If for example you have a
> 1000 spinning particles and you know they all sit within a specific bounds,
> then setting it will mean the renderer will not need to measure the
> 1000 children to find the bounds. Instead it will just use the bounds you set.

#### Example

```ts
const container = new Container({
   boundsArea: new Rectangle(0, 0, 500, 500) // Set a fixed bounds area
});
```

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`boundsArea`](scene.ContainerOptions.html#boundsarea)

***

### cacheAsTexture()?

> `optional` **cacheAsTexture**: (`val`) => `void`

#### Parameters

##### val

`boolean` | [`CacheAsTextureOptions`](rendering.CacheAsTextureOptions.md)

#### Returns

`void`

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`cacheAsTexture`](scene.ViewContainerOptions.html#cacheastexture)

***

### children?

> `readonly` `optional` **children**: [`ContainerChild`](scene.ContainerChild.md)[]

The array of children of this container. Each child must be a Container or extend from it.

The array is read-only, but its contents can be modified using Container methods.

#### Example

```ts
new Container({
   children: [
       new Container(), // First child
       new Container(), // Second child
   ],
});
```

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding children
 - [Container#removeChild](scene.Container.html#removechild) For removing children

#### Inherited from

`Omit.children`

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

[`FederatedOptions`](events.FederatedOptions.md).[`cursor`](events.FederatedOptions.html#cursor)

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

[`FederatedOptions`](events.FederatedOptions.md).[`eventMode`](events.FederatedOptions.html#eventmode)

***

### filters?

> `optional` **filters**: [`Filter`](filters.Filter.md) \| readonly [`Filter`](filters.Filter.md)[]

Sets the filters for the displayObject.
Filters are visual effects that can be applied to any display object and its children.

> [!IMPORTANT] This is a WebGL/WebGPU only feature and will be ignored by the canvas renderer.

#### Example

```ts
new Container({
    filters: [new BlurFilter(2), new ColorMatrixFilter()],
});
```

#### See

[Filter](filters.Filter.md) For filter base class

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`filters`](scene.ViewContainerOptions.html#filters)

***

### fps?

> `optional` **fps**: `number`

Fallback FPS if GIF contains no timing information

#### Default

```ts
30
```

#### Example

```ts
const animation = new GifSprite({
    source,
    fps: 24 // Use 24 FPS if GIF timing is missing
});
```

#### See

 - [GifSprite.play](gif.GifSprite.html#play)
 - [GifSprite.stop](gif.GifSprite.html#stop)
 - [GifSprite.update](gif.GifSprite.html#update)

***

### height?

> `optional` **height**: `number`

The height of the display object, in pixels.

#### Example

```ts
new Container({ height: 100});
```

#### Default

```ts
0
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`height`](scene.ViewContainerOptions.html#height)

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

[`FederatedOptions`](events.FederatedOptions.md).[`hitArea`](events.FederatedOptions.html#hitarea)

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

[`FederatedOptions`](events.FederatedOptions.md).[`interactive`](events.FederatedOptions.html#interactive)

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

[`FederatedOptions`](events.FederatedOptions.md).[`interactiveChildren`](events.FederatedOptions.html#interactivechildren)

***

### isRenderGroup?

> `optional` **isRenderGroup**: `boolean`

#### See

Container#isRenderGroup

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`isRenderGroup`](scene.ContainerOptions.html#isrendergroup)

***

### label?

> `optional` **label**: `string`

The instance label of the object.

#### Default

```ts
null
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`label`](scene.ViewContainerOptions.html#label)

***

### loop?

> `optional` **loop**: `boolean`

Whether to loop the animation.
If `false`, the animation will stop after the last frame.

#### Default

```ts
true
```

#### Example

```ts
const animation = new GifSprite({ source, loop: false });
```

***

### mask?

> `optional` **mask**: [`Mask`](scene.Mask.md)

The mask to apply, which can be a Container or null.

If null, it clears the existing mask.

#### Example

```ts
// Set a mask
sprite.setMask({
    mask: graphics,
    inverse: false,
});

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`mask`](scene.ViewContainerOptions.html#mask)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onclick`](events.FederatedOptions.html#onclick)

***

### onComplete()?

> `optional` **onComplete**: () => `void`

Callback when non-looping animation completes.
This is only called if `loop` is set to `false`.
If `loop` is `true`, use [GifSprite.onLoop](gif.GifSprite.html#onloop) instead.

#### Returns

`void`

#### Default

```ts
null
```

#### Example

```ts
const animation = new GifSprite({
    source,
    onComplete: () => {
        console.log('Animation finished!');
    }
});
```

#### See

 - [GifSprite.play](gif.GifSprite.html#play)
 - [GifSprite.stop](gif.GifSprite.html#stop)

***

### onFrameChange()?

> `optional` **onFrameChange**: (`currentFrame`) => `void`

Callback when animation frame changes.
This is called every time the current frame changes,
allowing you to respond to frame changes in real-time.

#### Parameters

##### currentFrame

`number`

#### Returns

`void`

#### Default

```ts
null
```

#### Example

```ts
const animation = new GifSprite({
    source,
    onFrameChange: (currentFrame) => {
        console.log(`Current frame: ${currentFrame}`);
    }
});
```

#### See

 - [GifSprite.currentFrame](gif.GifSprite.html#currentframe)
 - [GifSprite.play](gif.GifSprite.html#play)
 - [GifSprite.stop](gif.GifSprite.html#stop)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onglobalmousemove`](events.FederatedOptions.html#onglobalmousemove)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onglobalpointermove`](events.FederatedOptions.html#onglobalpointermove)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onglobaltouchmove`](events.FederatedOptions.html#onglobaltouchmove)

***

### onLoop()?

> `optional` **onLoop**: () => `void`

Callback when looping animation completes a loop.

#### Returns

`void`

#### Default

```ts
null
```

#### Example

```ts
const animation = new GifSprite({
    source,
    onLoop: () => {
        console.log('Animation looped!');
    }
});
```

#### See

 - [GifSprite.play](gif.GifSprite.html#play)
 - [GifSprite.stop](gif.GifSprite.html#stop)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onmousedown`](events.FederatedOptions.html#onmousedown)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onmouseenter`](events.FederatedOptions.html#onmouseenter)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onmouseleave`](events.FederatedOptions.html#onmouseleave)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onmousemove`](events.FederatedOptions.html#onmousemove)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onmouseout`](events.FederatedOptions.html#onmouseout)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onmouseover`](events.FederatedOptions.html#onmouseover)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onmouseup`](events.FederatedOptions.html#onmouseup)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onmouseupoutside`](events.FederatedOptions.html#onmouseupoutside)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onpointercancel`](events.FederatedOptions.html#onpointercancel)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onpointerdown`](events.FederatedOptions.html#onpointerdown)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onpointerenter`](events.FederatedOptions.html#onpointerenter)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onpointerleave`](events.FederatedOptions.html#onpointerleave)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onpointermove`](events.FederatedOptions.html#onpointermove)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onpointerout`](events.FederatedOptions.html#onpointerout)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onpointerover`](events.FederatedOptions.html#onpointerover)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onpointertap`](events.FederatedOptions.html#onpointertap)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onpointerup`](events.FederatedOptions.html#onpointerup)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onpointerupoutside`](events.FederatedOptions.html#onpointerupoutside)

***

### onRender()?

> `optional` **onRender**: (`renderer`) => `void`

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

[`FederatedOptions`](events.FederatedOptions.md).[`onrightclick`](events.FederatedOptions.html#onrightclick)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onrightdown`](events.FederatedOptions.html#onrightdown)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onrightup`](events.FederatedOptions.html#onrightup)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onrightupoutside`](events.FederatedOptions.html#onrightupoutside)

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

[`FederatedOptions`](events.FederatedOptions.md).[`ontap`](events.FederatedOptions.html#ontap)

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

[`FederatedOptions`](events.FederatedOptions.md).[`ontouchcancel`](events.FederatedOptions.html#ontouchcancel)

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

[`FederatedOptions`](events.FederatedOptions.md).[`ontouchend`](events.FederatedOptions.html#ontouchend)

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

[`FederatedOptions`](events.FederatedOptions.md).[`ontouchendoutside`](events.FederatedOptions.html#ontouchendoutside)

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

[`FederatedOptions`](events.FederatedOptions.md).[`ontouchmove`](events.FederatedOptions.html#ontouchmove)

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

[`FederatedOptions`](events.FederatedOptions.md).[`ontouchstart`](events.FederatedOptions.html#ontouchstart)

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

[`FederatedOptions`](events.FederatedOptions.md).[`onwheel`](events.FederatedOptions.html#onwheel)

***

### origin?

> `optional` **origin**: `number` \| [`PointData`](maths.PointData.md)

The origin point around which the container rotates and scales.
Unlike pivot, changing origin will not move the container's position.

#### Example

```ts
new Container({ origin: new Point(100, 100) }); // Rotate around point (100,100)
new Container({ origin: 50 }); // Rotate around point (50, 50)
new Container({ origin: { x: 150, y: 150 } }); // Rotate around point (150, 150)
```

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`origin`](scene.ContainerOptions.html#origin)

***

### parent?

> `readonly` `optional` **parent**: [`Container`](scene.Container.md)

The display object container that contains this display object.
This represents the parent-child relationship in the display tree.

#### See

 - [Container#addChild](scene.Container.html#addchild) For adding to a parent
 - [Container#removeChild](scene.Container.html#removechild) For removing from parent

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`parent`](scene.ContainerOptions.html#parent)

***

### pivot?

> `optional` **pivot**: `number` \| [`PointData`](maths.PointData.md)

The center of rotation, scaling, and skewing for this display object in its local space.
The `position` is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0).

#### Example

```ts
new Container({ pivot: new Point(100, 200) }); // Set pivot to (100, 200)
new Container({ pivot: 50 }); // Set pivot to (50, 50)
new Container({ pivot: { x: 150, y: 150 } }); // Set pivot to (150, 150)
```

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`pivot`](scene.ContainerOptions.html#pivot)

***

### position?

> `optional` **position**: [`PointData`](maths.PointData.md)

The coordinate of the object relative to the local coordinates of the parent.

#### Example

```ts
new Container({ position: new Point(100, 200) }); // Set position to (100, 200)
new Container({ position: { x: 150, y: 150 } }); // Set position to (150, 150)
```

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`position`](scene.ContainerOptions.html#position)

***

### renderable?

> `optional` **renderable**: `boolean`

Controls whether this object can be rendered. If false the object will not be drawn,
but the transform will still be updated. This is different from visible, which skips
transform updates.

#### Example

```ts
new Container({ renderable: false }); // Will not be drawn, but transforms will update
```

#### Default

```ts
true
```

#### See

 - [Container#visible](gif.GifSprite.html#visible) For skipping transform updates
 - [Container#alpha](gif.GifSprite.html#alpha) For transparency

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`renderable`](scene.ContainerOptions.html#renderable)

***

### rotation?

> `optional` **rotation**: `number`

The rotation of the object in radians.

> [!NOTE] 'rotation' and 'angle' have the same effect on a display object;
> rotation is in radians, angle is in degrees.

#### Example

```ts
new Container({ rotation: Math.PI / 4 }); // Rotate 45 degrees
new Container({ rotation: Math.PI / 2 }); // Rotate 90 degrees
```

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`rotation`](scene.ContainerOptions.html#rotation)

***

### roundPixels?

> `optional` **roundPixels**: `boolean`

Whether or not to round the x/y position to whole pixels.
Useful for crisp pixel art style rendering.

#### Default

```ts
false
```

#### Example

```ts
const sprite = new Sprite({
    texture: Texture.from('sprite.png'),
    roundPixels: true // Ensures crisp rendering
});
```

#### Inherited from

[`SpriteOptions`](scene.SpriteOptions.md).[`roundPixels`](scene.SpriteOptions.html#roundpixels)

***

### scale?

> `optional` **scale**: `number` \| [`PointData`](maths.PointData.md)

The scale factors of this object along the local coordinate axes.

The default scale is (1, 1).

#### Example

```ts
new Container({ scale: new Point(2, 2) }); // Scale by 2x
new Container({ scale: 0.5 }); // Scale by 0.5x
new Container({ scale: { x: 1.5, y: 1.5 } }); // Scale by 1.5x
```

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`scale`](scene.ContainerOptions.html#scale)

***

### ~~scaleMode?~~

> `optional` **scaleMode**: [`SCALE_MODE`](rendering.SCALE_MODE.md)

This is not implemented and you should, instead, use `scaleMode`
when loading the Asset as an option for the UnresolvedAsset's `data`.

#### Default

```ts
'linear'
```

#### Deprecated

since 8.13.0

***

### setMask()?

> `optional` **setMask**: (`options`) => `void`

#### Parameters

##### options

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`MaskOptionsAndMask`](scene.MaskOptionsAndMask.md)\>

#### Returns

`void`

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`setMask`](scene.ViewContainerOptions.html#setmask)

***

### skew?

> `optional` **skew**: [`PointData`](maths.PointData.md)

The skew factor for the object in radians. Skewing is a transformation that distorts
the object by rotating it differently at each point, creating a non-uniform shape.

#### Example

```ts
new Container({ skew: new Point(0.1, 0.2) }); // Skew by 0.1 radians on x and 0.2 radians on y
new Container({ skew: { x: 0.1, y: 0.2 } }); // Skew by 0.1 radians on x and 0.2 radians on y
```

#### Default

```ts
{ x: 0, y: 0 }
```

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`skew`](scene.ContainerOptions.html#skew)

***

### sortableChildren?

> `optional` **sortableChildren**: `boolean`

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

### source

> **source**: [`GifSource`](gif.GifSource.md)

Source containing the GIF frame and animation data

#### See

[GifSource](gif.GifSource.md)

#### Example

```ts
const source = await Assets.load('animation.gif');
const animation = new GifSprite({ source });
```

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

### tint?

> `optional` **tint**: [`ColorSource`](color.ColorSource.md)

The tint applied to the sprite.

This can be any valid [ColorSource](color.ColorSource.md).

#### Example

```ts
new Container({ tint: 0xff0000 }); // Red tint
new Container({ tint: 'blue' }); // Blue tint
new Container({ tint: '#00ff00' }); // Green tint
new Container({ tint: 'rgb(0,0,255)' }); // Blue tint
```

#### Default

```ts
0xFFFFFF
```

#### See

 - [Container#alpha](gif.GifSprite.html#alpha) For transparency
 - [Container#visible](gif.GifSprite.html#visible) For visibility control

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`tint`](scene.ContainerOptions.html#tint)

***

### visible?

> `optional` **visible**: `boolean`

The visibility of the object. If false the object will not be drawn,
and the transform will not be updated.

#### Example

```ts
new Container({ visible: false }); // Will not be drawn and transforms will not update
new Container({ visible: true }); // Will be drawn and transforms will update
```

#### Default

```ts
true
```

#### See

 - [Container#renderable](gif.GifSprite.html#renderable) For render-only control
 - [Container#alpha](gif.GifSprite.html#alpha) For transparency

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`visible`](scene.ContainerOptions.html#visible)

***

### width?

> `optional` **width**: `number`

The width of the display object, in pixels.

#### Example

```ts
new Container({ width: 100});
```

#### Default

```ts
0
```

#### Inherited from

[`ViewContainerOptions`](scene.ViewContainerOptions.md).[`width`](scene.ViewContainerOptions.html#width)

***

### x?

> `optional` **x**: `number`

The position of the container on the x axis relative to the local coordinates of the parent.

An alias to position.x

#### Example

```ts
new Container({ x: 100 }); // Set x position to 100
```

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`x`](scene.ContainerOptions.html#x)

***

### y?

> `optional` **y**: `number`

The position of the container on the y axis relative to the local coordinates of the parent.

An alias to position.y

#### Example

```ts
new Container({ y: 200 }); // Set y position to 200
```

#### Inherited from

[`ContainerOptions`](scene.ContainerOptions.md).[`y`](scene.ContainerOptions.html#y)

***

### zIndex?

> `optional` **zIndex**: `number`

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
