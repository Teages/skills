# Interface: ContainerEvents\<C\>

Events that can be emitted by a Container. These events provide lifecycle hooks and notifications
for container state changes.

## Example

```ts
import { Container, Sprite } from 'pixi.js';

// Setup container with event listeners
const container = new Container();

// Listen for child additions
container.on('childAdded', (child, container, index) => {
    console.log(`Child added at index ${index}:`, child);
});

// Listen for child removals
container.on('childRemoved', (child, container, index) => {
    console.log(`Child removed from index ${index}:`, child);
});

// Listen for when container is added to parent
container.on('added', (parent) => {
    console.log('Added to parent:', parent);
});

// Listen for when container is removed from parent
container.on('removed', (parent) => {
    console.log('Removed from parent:', parent);
});

// Listen for container destruction
container.on('destroyed', (container) => {
    console.log('Container destroyed:', container);
});
```

## Extends

- `ContainerEvents`

## Type Parameters

### C

`C` *extends* [`ContainerChild`](scene.ContainerChild.md)

## Properties

### added

> **added**: \[[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>\]

Emitted when this container is added to a new container.
Useful for setting up parent-specific behaviors.

#### Param

The parent container this was added to

#### Example

```ts
const child = new Container();
child.on('added', (parent) => {
    console.log('Child added to parent:', parent.label);
});
parentContainer.addChild(child);
```

***

### childAdded

> **childAdded**: \[`C`, [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>, `number`\]

Emitted when a child is added to this container.
Useful for tracking container composition changes.

#### Param

The child that was added

#### Param

The container the child was added to (this container)

#### Param

The index at which the child was added

#### Example

```ts
const parent = new Container();
parent.on('childAdded', (child, container, index) => {
    console.log(`New child at index ${index}:`, child);
});
```

***

### childRemoved

> **childRemoved**: \[`C`, [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>, `number`\]

Emitted when a child is removed from this container.
Useful for cleanup and maintaining container state.

#### Param

The child that was removed

#### Param

The container the child was removed from (this container)

#### Param

The index from which the child was removed

#### Example

```ts
const parent = new Container();
parent.on('childRemoved', (child, container, index) => {
    console.log(`Child removed from index ${index}:`, child);
});
```

***

### click

> **click**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.click`

***

### clickcapture

> **clickcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.clickcapture`

***

### destroyed

> **destroyed**: \[[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>\]

Emitted when the container is destroyed.
Useful for final cleanup and resource management.

#### Param

The container that was destroyed

#### Example

```ts
const container = new Container();
container.on('destroyed', (container) => {
    console.log('Container destroyed:', container.label);
});
```

***

### globalmousemove

> **globalmousemove**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.globalmousemove`

***

### globalpointermove

> **globalpointermove**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.globalpointermove`

***

### globaltouchmove

> **globaltouchmove**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.globaltouchmove`

***

### mousedown

> **mousedown**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mousedown`

***

### mousedowncapture

> **mousedowncapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mousedowncapture`

***

### mouseenter

> **mouseenter**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseenter`

***

### mouseentercapture

> **mouseentercapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseentercapture`

***

### mouseleave

> **mouseleave**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseleave`

***

### mouseleavecapture

> **mouseleavecapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseleavecapture`

***

### mousemove

> **mousemove**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mousemove`

***

### mousemovecapture

> **mousemovecapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mousemovecapture`

***

### mouseout

> **mouseout**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseout`

***

### mouseoutcapture

> **mouseoutcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseoutcapture`

***

### mouseover

> **mouseover**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseover`

***

### mouseovercapture

> **mouseovercapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseovercapture`

***

### mouseup

> **mouseup**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseup`

***

### mouseupcapture

> **mouseupcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseupcapture`

***

### mouseupoutside

> **mouseupoutside**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseupoutside`

***

### mouseupoutsidecapture

> **mouseupoutsidecapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.mouseupoutsidecapture`

***

### pointercancel

> **pointercancel**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointercancel`

***

### pointercancelcapture

> **pointercancelcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointercancelcapture`

***

### pointerdown

> **pointerdown**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerdown`

***

### pointerdowncapture

> **pointerdowncapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerdowncapture`

***

### pointerenter

> **pointerenter**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerenter`

***

### pointerentercapture

> **pointerentercapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerentercapture`

***

### pointerleave

> **pointerleave**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerleave`

***

### pointerleavecapture

> **pointerleavecapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerleavecapture`

***

### pointermove

> **pointermove**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointermove`

***

### pointermovecapture

> **pointermovecapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointermovecapture`

***

### pointerout

> **pointerout**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerout`

***

### pointeroutcapture

> **pointeroutcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointeroutcapture`

***

### pointerover

> **pointerover**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerover`

***

### pointerovercapture

> **pointerovercapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerovercapture`

***

### pointertap

> **pointertap**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointertap`

***

### pointertapcapture

> **pointertapcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointertapcapture`

***

### pointerup

> **pointerup**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerup`

***

### pointerupcapture

> **pointerupcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerupcapture`

***

### pointerupoutside

> **pointerupoutside**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerupoutside`

***

### pointerupoutsidecapture

> **pointerupoutsidecapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.pointerupoutsidecapture`

***

### removed

> **removed**: \[[`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>\]

Emitted when this container is removed from its parent.
Useful for cleanup and state management.

#### Param

The parent container this was removed from

#### Example

```ts
const child = new Container();
child.on('removed', (oldParent) => {
    console.log('Child removed from parent:', oldParent.label);
});
```

***

### rightclick

> **rightclick**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.rightclick`

***

### rightclickcapture

> **rightclickcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.rightclickcapture`

***

### rightdown

> **rightdown**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.rightdown`

***

### rightdowncapture

> **rightdowncapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.rightdowncapture`

***

### rightup

> **rightup**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.rightup`

***

### rightupcapture

> **rightupcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.rightupcapture`

***

### rightupoutside

> **rightupoutside**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.rightupoutside`

***

### rightupoutsidecapture

> **rightupoutsidecapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.rightupoutsidecapture`

***

### tap

> **tap**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.tap`

***

### tapcapture

> **tapcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.tapcapture`

***

### touchcancel

> **touchcancel**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.touchcancel`

***

### touchcancelcapture

> **touchcancelcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.touchcancelcapture`

***

### touchend

> **touchend**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.touchend`

***

### touchendcapture

> **touchendcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.touchendcapture`

***

### touchendoutside

> **touchendoutside**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.touchendoutside`

***

### touchendoutsidecapture

> **touchendoutsidecapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.touchendoutsidecapture`

***

### touchmove

> **touchmove**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.touchmove`

***

### touchmovecapture

> **touchmovecapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.touchmovecapture`

***

### touchstart

> **touchstart**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.touchstart`

***

### touchstartcapture

> **touchstartcapture**: \[[`FederatedPointerEvent`](events.FederatedPointerEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.touchstartcapture`

***

### wheel

> **wheel**: \[[`FederatedWheelEvent`](events.FederatedWheelEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.wheel`

***

### wheelcapture

> **wheelcapture**: \[[`FederatedWheelEvent`](events.FederatedWheelEvent.md)\]

#### Inherited from

`PixiMixins.ContainerEvents.wheelcapture`
