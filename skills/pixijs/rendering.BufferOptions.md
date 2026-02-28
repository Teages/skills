# Interface: BufferOptions

**`Advanced`**

Options for creating a buffer

This interface defines the options that can be passed to the Buffer constructor.
It includes the data to initialize the buffer with, the size of the buffer,
the usage of the buffer, a label for debugging, and whether the buffer should shrink to fit
when the data becomes smaller.

## Properties

### data?

> `optional` **data**: `number`[] \| [`TypedArray`](rendering.TypedArray.md)

the data to initialize the buffer with, this can be a typed array,
or a regular number array. If it is a number array, it will be converted to a Float32Array

***

### label?

> `optional` **label**: `string`

a label for the buffer, this is useful for debugging

***

### shrinkToFit?

> `optional` **shrinkToFit**: `boolean`

should the GPU buffer be shrunk when the data becomes smaller?
changing this will cause the buffer to be destroyed and a new one created on the GPU
this can be expensive, especially if the buffer is already big enough!
setting this to false will prevent the buffer from being shrunk. This will yield better performance
if you are constantly setting data that is changing size often.

#### Default

```ts
true
```

***

### size?

> `optional` **size**: `number`

the size of the buffer in bytes, if not supplied, it will be inferred from the data

***

### usage

> **usage**: `number`

the usage of the buffer, see [BufferUsage](rendering.BufferUsage.md)
