# Function: fastCopy()

> **fastCopy**(`sourceBuffer`, `destinationBuffer`, `sourceOffset?`, `byteLength?`): `void`

**`Advanced`**

Copies from one ArrayBuffer to another.
Uses Float64Array (8-byte), Float32Array (4-byte), or Uint8Array depending on alignment.

## Parameters

### sourceBuffer

`ArrayBufferLike`

the array buffer to copy from

### destinationBuffer

`ArrayBufferLike`

the array buffer to copy to

### sourceOffset?

`number`

the byte offset to start copying from (default 0)

### byteLength?

`number`

the number of bytes to copy (default: min of source available and destination size)

## Returns

`void`
