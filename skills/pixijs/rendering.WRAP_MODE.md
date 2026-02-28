# Type Alias: WRAP\_MODE

> **WRAP\_MODE** = `"clamp-to-edge"` \| `"repeat"` \| `"mirror-repeat"`

The wrap modes that are supported by pixi.

The wrap mode affects the default wrapping mode of future operations.
- `clamp-to-edge` is the default mode, which clamps the texture coordinates to the edge of the texture.
- `repeat` allows the texture to repeat in both u and v directions.
- `mirror-repeat` allows the texture to repeat in both u and v directions, but mirrors the texture on every other repeat.
