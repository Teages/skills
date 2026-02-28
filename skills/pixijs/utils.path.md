# Variable: path

> `const` **path**: [`Path`](utils.Path-1.md)

Path utilities for working with URLs and file paths in a cross-platform way.
All paths that are passed in will become normalized to have posix separators.

## Example

```ts
import { path } from 'pixi.js';

// Basic path normalization
path.normalize('http://www.example.com/foo/bar/../baz');
// -> 'http://www.example.com/foo/baz'

// Working with file paths
path.join('assets', 'images', 'sprite.png');
// -> 'assets/images/sprite.png'

// URL handling
path.toAbsolute('images/texture.png', 'http://example.com/assets/');
// -> 'http://example.com/assets/images/texture.png'
```

## Remarks

- Normalizes to POSIX separators (forward slashes)
- Handles URLs, data URLs, and file paths
- Supports path composition and decomposition
- Common in asset loading and URL management

## See

 - [Path](utils.Path-1.md) For full API reference
 - [DOMAdapter](environment.DOMAdapter.md) For platform-specific path handling
