# Interface: Adapter

**`Advanced`**

This interface describes all the DOM dependent calls that Pixi makes throughout its codebase.
Implementations of this interface can be used to make sure Pixi will work in any environment,
such as browser, Web Workers, and Node.js.

## Properties

### createCanvas()

> **createCanvas**: (`width?`, `height?`) => [`ICanvas`](environment.ICanvas.md)

Returns a canvas object that can be used to create a webgl context.

#### Parameters

##### width?

`number`

##### height?

`number`

#### Returns

[`ICanvas`](environment.ICanvas.md)

***

### createImage()

> **createImage**: () => [`ImageLike`](environment.ImageLike.md)

Returns an IImage (HTMLImageElement) that can be used to create a texture.

#### Returns

[`ImageLike`](environment.ImageLike.md)

***

### fetch()

> **fetch**: (`url`, `options?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Returns a Response object that has been fetched from the given URL.

#### Parameters

##### url

`RequestInfo`

##### options?

`RequestInit`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### getBaseUrl()

> **getBaseUrl**: () => `string`

Returns the current base URL For browser environments this is either the document.baseURI or window.location.href

#### Returns

`string`

***

### getCanvasRenderingContext2D()

> **getCanvasRenderingContext2D**: () => `object`

Returns a 2D rendering context.

#### Returns

`object`

##### prototype

> **prototype**: [`ICanvasRenderingContext2D`](environment.ICanvasRenderingContext2D.md)

***

### getFontFaceSet()

> **getFontFaceSet**: () => [`FontFaceSet`](https://developer.mozilla.org/docs/Web/API/FontFaceSet)

Return the font face set if available

#### Returns

[`FontFaceSet`](https://developer.mozilla.org/docs/Web/API/FontFaceSet)

***

### getNavigator()

> **getNavigator**: () => `object`

Returns a partial implementation of the browsers window.navigator

#### Returns

`object`

##### gpu

> **gpu**: [`GPU`](https://developer.mozilla.org/docs/Web/API/GPU)

##### userAgent

> **userAgent**: `string`

***

### getWebGLRenderingContext()

> **getWebGLRenderingContext**: () => () => [`WebGLRenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext)

Returns a WebGL rendering context.

#### Returns

> (): [`WebGLRenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext)

##### Returns

[`WebGLRenderingContext`](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext)

***

### parseXML()

> **parseXML**: (`xml`) => [`Document`](https://developer.mozilla.org/docs/Web/API/Document)

Returns Document object that has been parsed from the given XML string.

#### Parameters

##### xml

`string`

#### Returns

[`Document`](https://developer.mozilla.org/docs/Web/API/Document)
