# Class: SaturationBlend

The final color has the saturation of the top color, while using the hue and luminosity of the bottom color.
A pure gray backdrop, having no saturation, will have no effect.

Available as `container.blendMode = 'saturation'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'saturation'
```

## Constructors

### Constructor

> **new SaturationBlend**(): `SaturationBlend`

#### Returns

`SaturationBlend`

#### Overrides

`BlendModeFilter.constructor`
