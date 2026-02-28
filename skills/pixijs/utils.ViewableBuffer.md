# Class: ViewableBuffer

**`Advanced`**

Flexible wrapper around `ArrayBuffer` that also provides typed array views on demand.

## Constructors

### Constructor

> **new ViewableBuffer**(`length`): `ViewableBuffer`

#### Parameters

##### length

`number`

The size of the buffer in bytes.

#### Returns

`ViewableBuffer`

### Constructor

> **new ViewableBuffer**(`arrayBuffer`): `ViewableBuffer`

#### Parameters

##### arrayBuffer

`ArrayBufferLike`

The source array buffer.

#### Returns

`ViewableBuffer`

## Properties

### float32View

> **float32View**: [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

View on the raw binary data as a `Float32Array`.

***

### rawBinaryData

> **rawBinaryData**: `ArrayBufferLike`

Underlying `ArrayBuffer` that holds all the data and is of capacity `this.size`.

***

### size

> **size**: `number`

The size of the buffer in bytes.

***

### uint16View

> **uint16View**: [`Uint16Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)

View on the raw binary data as a `Uint16Array`.

***

### uint32View

> **uint32View**: [`Uint32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)

View on the raw binary data as a `Uint32Array`.

## Accessors

### bigUint64View

#### Get Signature

> **get** **bigUint64View**(): [`BigUint64Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)

View on the raw binary data as a `BigUint64Array`.

##### Returns

[`BigUint64Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)

***

### float64View

#### Get Signature

> **get** **float64View**(): [`Float64Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)

View on the raw binary data as a `Float64Array`.

##### Returns

[`Float64Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)

***

### int16View

#### Get Signature

> **get** **int16View**(): [`Int16Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)

View on the raw binary data as a `Int16Array`.

##### Returns

[`Int16Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)

***

### int32View

#### Get Signature

> **get** **int32View**(): [`Int32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)

View on the raw binary data as a `Int32Array`.

##### Returns

[`Int32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)

***

### int8View

#### Get Signature

> **get** **int8View**(): [`Int8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)

View on the raw binary data as a `Int8Array`.

##### Returns

[`Int8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)

***

### uint8View

#### Get Signature

> **get** **uint8View**(): [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

View on the raw binary data as a `Uint8Array`.

##### Returns

[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

## Methods

### destroy()

> **destroy**(): `void`

Destroys all buffer references. Do not use after calling this.

#### Returns

`void`

***

### view()

> **view**(`type`): [`TypedArray`](rendering.TypedArray.md)

Returns the view of the given type.

#### Parameters

##### type

`string`

One of `int8`, `uint8`, `int16`,
   `uint16`, `int32`, `uint32`, and `float32`.

#### Returns

[`TypedArray`](rendering.TypedArray.md)

- typed array of given type

***

### sizeOf()

> `static` **sizeOf**(`type`): `number`

Returns the size of the given type in bytes.

#### Parameters

##### type

`string`

One of `int8`, `uint8`, `int16`,
  `uint16`, `int32`, `uint32`, and `float32`.

#### Returns

`number`

- size of the type in bytes
