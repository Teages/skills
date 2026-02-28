# Interface: Path

**`Advanced`**

Path utilities for working with URLs and file paths in a cross-platform way.
All paths that are passed in will become normalized to have posix separators.
```js
import { path } from 'pixi.js';

path.normalize('http://www.example.com/foo/bar/../baz'); // http://www.example.com/foo/baz
```

## Properties

### basename()

> **basename**: (`path`, `ext?`) => `string`

Returns the last portion of a path

#### Parameters

##### path

`string`

The path to test

##### ext?

`string`

Optional extension to remove

#### Returns

`string`

***

### delimiter

> **delimiter**: `string`

***

### dirname()

> **dirname**: (`path`) => `string`

Returns the directory name of a path

#### Parameters

##### path

`string`

The path to parse

#### Returns

`string`

***

### extname()

> **extname**: (`path`) => `string`

Returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last
portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than
the first character of the basename of path, an empty string is returned.

#### Parameters

##### path

`string`

The path to parse

#### Returns

`string`

***

### getProtocol()

> **getProtocol**: (`path`) => `string`

Returns the protocol of the path e.g. http://, https://, file:///, data:, blob:, C:/

#### Parameters

##### path

`string`

The path to get the protocol from

#### Returns

`string`

***

### hasProtocol()

> **hasProtocol**: (`path`) => `boolean`

Checks if the path has a protocol e.g. http://, https://, file:///, data:, blob:, C:/
This will return true for windows file paths

#### Parameters

##### path

`string`

The path to check

#### Returns

`boolean`

***

### isAbsolute()

> **isAbsolute**: (`path`) => `boolean`

Determines if path is an absolute path.
Absolute paths can be urls, data urls, or paths on disk

#### Parameters

##### path

`string`

The path to test

#### Returns

`boolean`

***

### isBlobUrl()

> **isBlobUrl**: (`path`) => `boolean`

Checks if the path is a blob URL

#### Parameters

##### path

`string`

The path to check

#### Returns

`boolean`

***

### isDataUrl()

> **isDataUrl**: (`path`) => `boolean`

Checks if the path is a data URL

#### Parameters

##### path

`string`

The path to check

#### Returns

`boolean`

***

### isUrl()

> **isUrl**: (`path`) => `boolean`

Checks if the path is a URL e.g. http://, https://

#### Parameters

##### path

`string`

The path to check

#### Returns

`boolean`

***

### join()

> **join**: (...`paths`) => `string`

Joins all given path segments together using the platform-specific separator as a delimiter,
then normalizes the resulting path

#### Parameters

##### paths

...`string`[]

The segments of the path to join

#### Returns

`string`

***

### joinExtensions

> **joinExtensions**: `string`[]

***

### normalize()

> **normalize**: (`path`) => `string`

Normalizes the given path, resolving '..' and '.' segments

#### Parameters

##### path

`string`

The path to normalize

#### Returns

`string`

***

### parse()

> **parse**: (`path`) => `object`

Parses a path into an object containing the 'root', `dir`, `base`, `ext`, and `name` properties.

#### Parameters

##### path

`string`

The path to parse

#### Returns

`object`

##### base?

> `optional` **base**: `string`

##### dir?

> `optional` **dir**: `string`

##### ext?

> `optional` **ext**: `string`

##### name?

> `optional` **name**: `string`

##### root?

> `optional` **root**: `string`

***

### rootname()

> **rootname**: (`path`) => `string`

Returns the root of the path e.g. /, C:/, file:///, http://domain.com/

#### Parameters

##### path

`string`

The path to parse

#### Returns

`string`

***

### sep

> **sep**: `string`

***

### toAbsolute()

> **toAbsolute**: (`url`, `baseUrl?`, `rootUrl?`) => `string`

Converts URL to an absolute path.
When loading from a Web Worker, we must use absolute paths.
If the URL is already absolute we return it as is
If it's not, we convert it

#### Parameters

##### url

`string`

The URL to test

##### baseUrl?

`string`

The base URL to use

##### rootUrl?

`string`

The root URL to use

#### Returns

`string`

***

### toPosix()

> **toPosix**: (`path`) => `string`

Converts a path to posix format.

#### Parameters

##### path

`string`

The path to convert to posix

#### Returns

`string`
