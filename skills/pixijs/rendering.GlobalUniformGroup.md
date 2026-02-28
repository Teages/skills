# Type Alias: GlobalUniformGroup

> **GlobalUniformGroup** = [`UniformGroup`](rendering.UniformGroup.md)\<\{ `uProjectionMatrix`: \{ `type`: `"mat3x3<f32>"`; `value`: [`Matrix`](maths.Matrix.md); \}; `uResolution`: \{ `type`: `"vec2<f32>"`; `value`: `number`[]; \}; `uWorldColorAlpha`: \{ `type`: `"vec4<f32>"`; `value`: [`Float32Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array); \}; `uWorldTransformMatrix`: \{ `type`: `"mat3x3<f32>"`; `value`: [`Matrix`](maths.Matrix.md); \}; \}\>

**`Advanced`**

Type definition for the global uniforms used in the renderer.
This includes projection matrix, world transform matrix, world color, and resolution.
