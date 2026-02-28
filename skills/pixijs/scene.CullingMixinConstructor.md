# Interface: CullingMixinConstructor

The CullingMixin interface provides properties and methods for managing culling behavior
of a display object. Culling is the process of determining whether an object should be rendered
based on its visibility within the current view or frame.

Key Features:
- Custom culling areas for better performance
- Per-object culling control
- Child culling management

## Example

```ts
// Enable culling for a container
const container = new Container();
container.cullable = true;

// Set custom cull area for better performance
container.cullArea = new Rectangle(0, 0, 800, 600);

// Disable child culling for static scenes
container.cullableChildren = false;
```

## Properties

### cullable

> **cullable**: `boolean`

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

***

### cullableChildren

> **cullableChildren**: `boolean`

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

***

### cullArea

> **cullArea**: [`Rectangle`](maths.Rectangle.md)

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
