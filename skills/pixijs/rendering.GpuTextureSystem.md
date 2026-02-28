# Class: GpuTextureSystem

**`Advanced`**

The system that handles textures for the GPU.

## Implements

- [`System`](rendering.System.md)

## Constructors

### Constructor

> **new GpuTextureSystem**(`renderer`): `GpuTextureSystem`

#### Parameters

##### renderer

[`WebGPURenderer`](rendering.WebGPURenderer.md)

#### Returns

`GpuTextureSystem`

## Accessors

### managedTextures

#### Get Signature

> **get** **managedTextures**(): readonly [`TextureSource`](rendering.TextureSource.md)\<`any`\>[]

##### Deprecated

since 8.15.0

##### Returns

readonly [`TextureSource`](rendering.TextureSource.md)\<`any`\>[]

## Methods

### destroy()

> **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### generateCanvas()

> **generateCanvas**(`texture`): [`ICanvas`](environment.ICanvas.md)

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

#### Returns

[`ICanvas`](environment.ICanvas.md)

#### Implementation of

`CanvasGenerator.generateCanvas`

***

### getGpuSampler()

> **getGpuSampler**(`sampler`): [`GPUSampler`](https://developer.mozilla.org/docs/Web/API/GPUSampler)

#### Parameters

##### sampler

[`TextureStyle`](rendering.TextureStyle.md)

#### Returns

[`GPUSampler`](https://developer.mozilla.org/docs/Web/API/GPUSampler)

***

### getGpuSource()

> **getGpuSource**(`source`): [`GPUTexture`](https://developer.mozilla.org/docs/Web/API/GPUTexture)

#### Parameters

##### source

[`TextureSource`](rendering.TextureSource.md)

#### Returns

[`GPUTexture`](https://developer.mozilla.org/docs/Web/API/GPUTexture)

***

### getPixels()

> **getPixels**(`texture`): [`GetPixelsOutput`](rendering.GetPixelsOutput.md)

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

#### Returns

[`GetPixelsOutput`](rendering.GetPixelsOutput.md)

#### Implementation of

`CanvasGenerator.getPixels`

***

### getTextureBindGroup()

> **getTextureBindGroup**(`texture`): [`BindGroup`](rendering.BindGroup.md)

this returns s bind group for a specific texture, the bind group contains
- the texture source
- the texture style
- the texture matrix
This is cached so the bind group should only be created once per texture

#### Parameters

##### texture

[`Texture`](rendering.Texture.md)

the texture you want the bindgroup for

#### Returns

[`BindGroup`](rendering.BindGroup.md)

the bind group for the texture

***

### getTextureView()

> **getTextureView**(`texture`): [`GPUTextureView`](https://developer.mozilla.org/docs/Web/API/GPUTextureView)

#### Parameters

##### texture

[`BindableTexture`](rendering.BindableTexture.md)

#### Returns

[`GPUTextureView`](https://developer.mozilla.org/docs/Web/API/GPUTextureView)

***

### initSource()

> **initSource**(`source`): [`GPUTexture`](https://developer.mozilla.org/docs/Web/API/GPUTexture)

Initializes a texture source, if it has already been initialized nothing will happen.

#### Parameters

##### source

[`TextureSource`](rendering.TextureSource.md)

The texture source to initialize.

#### Returns

[`GPUTexture`](https://developer.mozilla.org/docs/Web/API/GPUTexture)

The initialized texture source.
