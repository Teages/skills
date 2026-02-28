# Variable: WorkerManager

> `const` **WorkerManager**: `WorkerManagerClass`

**`Advanced`**

Manages a pool of web workers for loading ImageBitmap objects asynchronously.

This class provides a thread-safe way to load images using web workers,
automatically managing worker creation, pooling, and cleanup. It supports
checking ImageBitmap support and queuing multiple load requests.

> [!IMPORTANT] You should not need to use this class directly
> However, you can call `WorkerManager.reset()` to clean up all workers when they are no longer needed.
