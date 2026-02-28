# Enumeration: GL\_WRAP\_MODES

**`Advanced`**

The wrap modes that are supported by pixi.

The [WRAP\_MODE](rendering.WRAP_MODE.md) wrap mode affects the default wrapping mode of future operations.
It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
If the texture is non power of two then clamp will be used regardless as WebGL can
only use REPEAT if the texture is po2.

This property only affects WebGL.

## Enumeration Members

### CLAMP

> **CLAMP**: `33071`

The textures uvs are clamped

#### Default

```ts
33071
```

***

### MIRRORED\_REPEAT

> **MIRRORED\_REPEAT**: `33648`

The texture uvs tile and repeat with mirroring

#### Default

```ts
33648
```

***

### REPEAT

> **REPEAT**: `10497`

The texture uvs tile and repeat

#### Default

```ts
10497
```
