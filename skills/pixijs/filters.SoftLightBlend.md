# Class: SoftLightBlend

The final color is similar to hard-light, but softer. This blend mode behaves similar to hard-light.
The effect is similar to shining a diffused spotlight on the backdrop.

Available as `container.blendMode = 'soft-light'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'soft-light'
```

## Constructors

### Constructor

> **new SoftLightBlend**(): `SoftLightBlend`

#### Returns

`SoftLightBlend`

#### Overrides

`BlendModeFilter.constructor`
