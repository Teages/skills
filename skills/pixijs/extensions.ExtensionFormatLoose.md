# Interface: ExtensionFormatLoose

**`Advanced`**

Format when registering an extension. Generally, the extension
should have these values as `extension` static property,
but you can override name or type by providing an object.

## Properties

### name?

> `optional` **name**: `string`

Optional. Some plugins provide an API name/property, such as Renderer plugins

***

### priority?

> `optional` **priority**: `number`

Optional, used for sorting the plugins in a particular order

***

### ref

> **ref**: `any`

Reference to the plugin object/class

***

### type

> **type**: [`ExtensionType`](extensions.ExtensionType.md) \| [`ExtensionType`](extensions.ExtensionType.md)[]

The extension type, can be multiple types
