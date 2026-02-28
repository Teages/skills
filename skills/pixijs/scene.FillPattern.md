# Class: FillPattern

A class that represents a fill pattern for use in Text and Graphics fills.
It allows for textures to be used as patterns, with optional repetition modes.

## Example

```ts
const txt = await Assets.load('https://pixijs.com/assets/bg_scene_rotate.jpg');
const pat = new FillPattern(txt, 'repeat');

const textPattern = new Text({
    text: 'PixiJS',
    style: {
        fontSize: 36,
        fill: 0xffffff,
        stroke: { fill: pat, width: 10 },
    },
});

textPattern.y = (textGradient.height);
```

## Implements

- [`CanvasPattern`](https://developer.mozilla.org/docs/Web/API/CanvasPattern)

## Constructors

### Constructor

> **new FillPattern**(`texture`, `repetition?`): `FillPattern`

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

##### repetition?

[`PatternRepetition`](scene.PatternRepetition.md)

#### Returns

`FillPattern`

## Properties

### transform

> **transform**: [`Matrix`](maths.Matrix.md)

The transform matrix applied to the pattern

## Accessors

### styleKey

#### Get Signature

> **get** **styleKey**(): `string`

Returns a unique key for this instance.
This key is used for caching.

##### Returns

`string`

Unique key for the instance

***

### texture

#### Get Signature

> **get** **texture**(): [`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

Internal texture used to render the gradient

##### Returns

[`Texture`](rendering.Texture.md)\<[`TextureSource`](rendering.TextureSource.md)\<`any`\>\>

#### Set Signature

> **set** **texture**(`value`): `void`

##### Parameters

###### value

[`Texture`](rendering.Texture.md)

##### Returns

`void`

## Methods

### destroy()

> **destroy**(): `void`

Destroys the fill pattern, releasing resources. This will also destroy the internal texture.

#### Returns

`void`

***

### setTransform()

> **setTransform**(`transform?`): `void`

Sets the transform for the pattern

#### Parameters

##### transform?

[`Matrix`](maths.Matrix.md)

The transform matrix to apply to the pattern.
If not provided, the pattern will use the default transform.

#### Returns

`void`

#### Implementation of

`CanvasPattern.setTransform`
