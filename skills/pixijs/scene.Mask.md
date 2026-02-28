# Type Alias: Mask

> **Mask** = `number` \| [`Container`](scene.Container.md) \| `null`

The Mask type represents different ways to mask a display object.
- A number represents a mask ID.
- A Container represents a mask object, such as a Graphics or Sprite.
- null indicates that no mask is applied.

## Example

```ts
// Using a Container as a mask
const maskContainer: Mask = new Graphics();
// Using a mask ID
const maskId: Mask = 123;
// No mask applied
const noMask: Mask = null;
```
