# Enumeration: BufferUsage

**`Advanced`**

Buffer usage flags. they can be combined using the bitwise OR operator
eg : BufferUsage.VERTEX | BufferUsage.INDEX

## Enumeration Members

### COPY\_DST

> **COPY\_DST**: `8`

The buffer can be used as the destination of a copy or write operation.
(Examples: as the destination argument of a copyBufferToBuffer() or
copyTextureToBuffer() call, or as the target of a writeBuffer() call.)

***

### COPY\_SRC

> **COPY\_SRC**: `4`

The buffer can be used as the source of a copy operation.
(Examples: as the source argument of a copyBufferToBuffer() or copyBufferToTexture() call.)

***

### INDEX

> **INDEX**: `16`

The buffer can be used as an index buffer. (Example: passed to setIndexBuffer().)

***

### INDIRECT

> **INDIRECT**: `256`

The buffer can be used as to store indirect command arguments.
(Examples: as the indirectBuffer argument of a drawIndirect() or dispatchWorkgroupsIndirect() call.)

***

### MAP\_READ

> **MAP\_READ**: `1`

The buffer can be mapped for reading. (Example: calling mapAsync() with GPUMapMode.READ)
May only be combined with COPY_DST.

***

### MAP\_WRITE

> **MAP\_WRITE**: `2`

The buffer can be mapped for writing. (Example: calling mapAsync() with GPUMapMode.WRITE)
May only be combined with COPY_SRC.

***

### QUERY\_RESOLVE

> **QUERY\_RESOLVE**: `512`

The buffer can be used to capture query results.
(Example: as the destination argument of a resolveQuerySet() call.)

***

### STATIC

> **STATIC**: `1024`

the buffer will not be updated frequently

***

### STORAGE

> **STORAGE**: `128`

The buffer can be used as a storage buffer.
(Example: as a bind group entry for a GPUBufferBindingLayout with a buffer.type of "storage" or "read-only-storage".)

***

### UNIFORM

> **UNIFORM**: `64`

The buffer can be used as a uniform buffer.
(Example: as a bind group entry for a GPUBufferBindingLayout with a buffer.type of "uniform".)

***

### VERTEX

> **VERTEX**: `32`

The buffer can be used as a vertex buffer. (Example: passed to setVertexBuffer().)
