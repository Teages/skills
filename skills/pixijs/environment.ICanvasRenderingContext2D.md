# Interface: ICanvasRenderingContext2D

**`Advanced`**

Common interface for CanvasRenderingContext2D, OffscreenCanvasRenderingContext2D, and other custom canvas 2D context.

## Extends

- `CanvasState`.`CanvasTransform`.`CanvasCompositing`.`CanvasImageSmoothing`.`CanvasFillStrokeStyles`.`CanvasShadowStyles`.`CanvasFilters`.`CanvasRect`.`CanvasDrawPath`.`CanvasText`.`CanvasDrawImage`.`CanvasImageData`.`CanvasPathDrawingStyles`.[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`CanvasTextDrawingStyles`, `"letterSpacing"`\>.`CanvasPath`

## Properties

### letterSpacing?

> `optional` **letterSpacing**: `string`

sets the horizontal spacing behavior between text characters.

***

### textLetterSpacing?

> `optional` **textLetterSpacing**: `string`

sets the horizontal spacing behavior between text characters.

## Methods

### createPattern()

> **createPattern**(`image`, `repetition`): [`CanvasPattern`](https://developer.mozilla.org/docs/Web/API/CanvasPattern)

creates a pattern using the specified image and repetition.

#### Parameters

##### image

[`ImageLike`](environment.ImageLike.md) | [`ICanvas`](environment.ICanvas.md) | `CanvasImageSource`

##### repetition

`string`

#### Returns

[`CanvasPattern`](https://developer.mozilla.org/docs/Web/API/CanvasPattern)

#### Overrides

`CanvasFillStrokeStyles.createPattern`

***

### drawImage()

#### Call Signature

> **drawImage**(`image`, `dx`, `dy`): `void`

provides different ways to draw an image onto the canvas

##### Parameters

###### image

[`ImageLike`](environment.ImageLike.md) | [`ICanvas`](environment.ICanvas.md) | `CanvasImageSource`

###### dx

`number`

###### dy

`number`

##### Returns

`void`

##### Overrides

`CanvasDrawImage.drawImage`

#### Call Signature

> **drawImage**(`image`, `dx`, `dy`, `dw`, `dh`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/drawImage)

##### Parameters

###### image

[`ImageLike`](environment.ImageLike.md) | [`ICanvas`](environment.ICanvas.md) | `CanvasImageSource`

###### dx

`number`

###### dy

`number`

###### dw

`number`

###### dh

`number`

##### Returns

`void`

##### Overrides

`CanvasDrawImage.drawImage`

#### Call Signature

> **drawImage**(`image`, `sx`, `sy`, `sw`, `sh`, `dx`, `dy`, `dw`, `dh`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/drawImage)

##### Parameters

###### image

[`ImageLike`](environment.ImageLike.md) | [`ICanvas`](environment.ICanvas.md) | `CanvasImageSource`

###### sx

`number`

###### sy

`number`

###### sw

`number`

###### sh

`number`

###### dx

`number`

###### dy

`number`

###### dw

`number`

###### dh

`number`

##### Returns

`void`

##### Overrides

`CanvasDrawImage.drawImage`
