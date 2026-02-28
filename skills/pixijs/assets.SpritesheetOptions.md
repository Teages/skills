# Interface: SpritesheetOptions\<S\>

**`Advanced`**

Options for loading a spritesheet from an atlas.

## Type Parameters

### S

`S` *extends* [`SpritesheetData`](assets.SpritesheetData.md) = [`SpritesheetData`](assets.SpritesheetData.md)

## Properties

### cachePrefix?

> `optional` **cachePrefix**: `string`

Prefix to add to texture names when adding to global TextureCache,
using this option can be helpful if you have multiple texture atlases
that share texture names and you need to disambiguate them.

***

### data

> **data**: `S`

JSON data for the atlas.

***

### resolutionFilename?

> `optional` **resolutionFilename**: `string`

The filename to consider when determining the resolution of the spritesheet.

***

### texture

> **texture**: [`BindableTexture`](rendering.BindableTexture.md)

Reference to Texture
