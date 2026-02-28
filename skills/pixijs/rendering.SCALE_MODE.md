# Type Alias: SCALE\_MODE

> **SCALE\_MODE** = `"nearest"` \| `"linear"`

The scale modes that are supported by pixi.

The scale mode affects the default scaling mode of future operations.
It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.

- `nearest` is a pixelating scaling mode, which does not interpolate pixels.
- `linear` is a smooth scaling mode, which interpolates pixels for smoother results.
