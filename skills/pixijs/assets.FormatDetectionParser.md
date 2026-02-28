# Interface: FormatDetectionParser

**`Advanced`**

Format detection is useful for detecting feature support on the current platform.

## Properties

### add()

> **add**: (`formats`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Add formats (file extensions) to the existing list of formats.
Return an new array with added formats, do not mutate the formats argument.

#### Parameters

##### formats

`string`[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

- Promise that resolves to the new formats array.

***

### extension?

> `optional` **extension**: [`ExtensionMetadata`](extensions.ExtensionMetadata.md)

Should be ExtensionType.DetectionParser

***

### remove()

> **remove**: (`formats`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Remove formats (file extensions) from the list of supported formats.
This is used when uninstalling this DetectionParser.
Return an new array with filtered formats, do not mutate the formats argument.

#### Parameters

##### formats

`string`[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

- Promise that resolves to the new formats array.

***

### test()

> **test**: () => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Browser/platform feature detection supported if return true

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>
