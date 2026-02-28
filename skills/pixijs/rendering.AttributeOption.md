# Type Alias: AttributeOption

> **AttributeOption** = [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`Attribute`](rendering.Attribute.md), `"buffer"`\> & `object` \| [`Buffer`](rendering.Buffer.md) \| [`TypedArray`](rendering.TypedArray.md) \| `number`[]

**`Advanced`**

The attribute option used by the constructor for adding geometries attributes
extends [Attribute](rendering.Attribute.md) but allows for the buffer to be a typed or number array
