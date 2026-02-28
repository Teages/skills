# Class: GifSource

**`Advanced`**

Resource provided to GifSprite instances. This is very similar to using a shared
Texture between Sprites. This source contains all the frames and animation needed
to support playback.

## Constructors

### Constructor

> **new GifSource**(`frames`): `GifSource`

#### Parameters

##### frames

[`GifFrame`](gif.GifFrame.md)[]

Array of GifFrame instances.

#### Returns

`GifSource`

## Properties

### duration

> `readonly` **duration**: `number`

The total time to play the animation in milliseconds

***

### frames

> `readonly` **frames**: [`GifFrame`](gif.GifFrame.md)[]

Animation frames

***

### height

> `readonly` **height**: `number`

Height of the animation

***

### textures

> `readonly` **textures**: [`Texture`](rendering.Texture.md)\<[`CanvasSource`](rendering.CanvasSource.md)\>[]

Textures

***

### totalFrames

> `readonly` **totalFrames**: `number`

Total number of frames in the animation

***

### width

> `readonly` **width**: `number`

Width of the animation

## Methods

### destroy()

> **destroy**(): `void`

Destroy animation data and don't use after this

#### Returns

`void`

***

### from()

> `static` **from**(`buffer`, `options?`): `GifSource`

Create an animated GIF animation from a GIF image's ArrayBuffer. The easiest way to get
the buffer is to use Assets.

#### Parameters

##### buffer

[`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

GIF image arraybuffer from Assets.

##### options?

[`GifBufferOptions`](gif.GifBufferOptions.md)

Optional options to use when building from buffer.

#### Returns

`GifSource`

#### Example

```ts
import { GifSource, GifSprite } from 'pixi.js/gif';

const buffer = await fetch('./file.gif').then(res => res.arrayBuffer());
const source = GifSource.from(buffer);
const sprite = new GifSprite(source);
```
