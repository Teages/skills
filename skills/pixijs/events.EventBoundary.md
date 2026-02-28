# Class: EventBoundary

**`Advanced`**

Event boundaries are "barriers" where events coming from an upstream scene are modified before downstream propagation.

## Root event boundary

The [rootBoundary](events.EventSystem.html#rootboundary) handles events coming from the &lt;canvas /&gt;.
[EventSystem](events.EventSystem.md) handles the normalization from native [Events](https://dom.spec.whatwg.org/#event)
into [FederatedEvents](events.FederatedEvent.md). The rootBoundary then does the hit-testing and event dispatch
for the upstream normalized event.

## Additional event boundaries

An additional event boundary may be desired within an application's scene graph. For example, if a portion of the scene is
is flat with many children at one level - a spatial hash maybe needed to accelerate hit testing. In this scenario, the
container can be detached from the scene and glued using a custom event boundary.

```ts
import { Container } from 'pixi.js';
import { EventBoundary } from 'pixi.js';
import { SpatialHash } from 'pixi-spatial-hash';

class HashedHitTestingEventBoundary
{
    private spatialHash: SpatialHash;

    constructor(scene: Container, spatialHash: SpatialHash)
    {
        super(scene);
        this.spatialHash = spatialHash;
    }

    hitTestRecursive(...)
    {
        // TODO: If target === this.rootTarget, then use spatial hash to get a
        // list of possible children that match the given (x,y) coordinates.
    }
}

class VastScene extends Container
{
    protected eventBoundary: EventBoundary;
    protected scene: Container;
    protected spatialHash: SpatialHash;

    constructor()
    {
        this.scene = new Container();
        this.spatialHash = new SpatialHash();
        this.eventBoundary = new HashedHitTestingEventBoundary(this.scene, this.spatialHash);

        // Populate this.scene with a ton of children, while updating this.spatialHash
    }
}
```

## Constructors

### Constructor

> **new EventBoundary**(`rootTarget?`): `EventBoundary`

#### Parameters

##### rootTarget?

[`Container`](scene.Container.md)

The holder of the event boundary.

#### Returns

`EventBoundary`

## Properties

### cursor

> **cursor**: `string` & `object` \| [`Cursor`](events.Cursor.md)

The cursor preferred by the event targets underneath this boundary.

***

### dispatch

> **dispatch**: `EventEmitter`

Emits events after they were dispatched into the scene graph.

This can be used for global events listening, regardless of the scene graph being used. It should
not be used by interactive libraries for normal use.

Special events that do not bubble all the way to the root target are not emitted from here,
e.g. pointerenter, pointerleave, click.

***

### enableGlobalMoveEvents

> **enableGlobalMoveEvents**: `boolean` = `true`

Enables the global move events. `globalpointermove`, `globaltouchmove`, and `globalmousemove`

***

### moveOnAll

> **moveOnAll**: `boolean` = `false`

This flag would emit `pointermove`, `touchmove`, and `mousemove` events on all Containers.

The `moveOnAll` semantics mirror those of earlier versions of PixiJS. This was disabled in favor of
the Pointer Event API's approach.

***

### rootTarget

> **rootTarget**: [`Container`](scene.Container.md)

The root event-target residing below the event boundary.
All events are dispatched trickling down and bubbling up to this `rootTarget`.

## Methods

### addEventMapping()

> **addEventMapping**(`type`, `fn`): `void`

Adds an event mapping for the event `type` handled by `fn`.

Event mappings can be used to implement additional or custom events. They take an event
coming from the upstream scene (or directly from the [EventSystem](events.EventSystem.md)) and dispatch new downstream events
generally trickling down and bubbling up to [this.rootTarget](#roottarget).

To modify the semantics of existing events, the built-in mapping methods of EventBoundary should be overridden
instead.

#### Parameters

##### type

`string`

The type of upstream event to map.

##### fn

(`e`) => `void`

The mapping method. The context of this function must be bound manually, if desired.

#### Returns

`void`

***

### all()

> **all**(`e`, `type?`, `targets?`): `void`

Emits the event `e` to all interactive containers. The event is propagated in the bubbling phase always.

This is used in the `globalpointermove` event.

#### Parameters

##### e

[`FederatedEvent`](events.FederatedEvent.md)

The emitted event.

##### type?

The listeners to notify.

`string` | `string`[]

##### targets?

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[] = `...`

The targets to notify.

#### Returns

`void`

***

### dispatchEvent()

> **dispatchEvent**(`e`, `type?`): `void`

Dispatches the given event

#### Parameters

##### e

[`FederatedEvent`](events.FederatedEvent.md)

The event to dispatch.

##### type?

`string`

The type of event to dispatch. Defaults to `e.type`.

#### Returns

`void`

***

### hitTest()

> **hitTest**(`x`, `y`): [`Container`](scene.Container.md)

Finds the Container that is the target of a event at the given coordinates.

The passed (x,y) coordinates are in the world space above this event boundary.

#### Parameters

##### x

`number`

The x coordinate of the event.

##### y

`number`

The y coordinate of the event.

#### Returns

[`Container`](scene.Container.md)

***

### mapEvent()

> **mapEvent**(`e`): `void`

Maps the given upstream event through the event boundary and propagates it downstream.

#### Parameters

##### e

[`FederatedEvent`](events.FederatedEvent.md)

The event to map.

#### Returns

`void`

***

### propagate()

> **propagate**(`e`, `type?`): `void`

Propagate the passed event from from [this.rootTarget](#roottarget) to its
target `e.target`.

#### Parameters

##### e

[`FederatedEvent`](events.FederatedEvent.md)

The event to propagate.

##### type?

`string`

The type of event to propagate. Defaults to `e.type`.

#### Returns

`void`

***

### propagationPath()

> **propagationPath**(`target`): [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

Finds the propagation path from [rootTarget](#roottarget) to the passed
`target`. The last element in the path is `target`.

#### Parameters

##### target

[`Container`](scene.Container.md)

The target to find the propagation path to.

#### Returns

[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]
