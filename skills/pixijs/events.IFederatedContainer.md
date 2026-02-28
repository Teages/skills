# Interface: IFederatedContainer

**`Advanced`**

Additional properties for a Container that is used for interaction events.

## Extends

- [`FederatedOptions`](events.FederatedOptions.md)

## Properties

### children?

> `readonly` `optional` **children**: readonly [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

The children of this event target.

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

### parent?

> `readonly` `optional` **parent**: [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>

The parent of this event target.

## Methods

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
