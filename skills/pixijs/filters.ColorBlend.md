# Class: ColorBlend

The final color has the hue and saturation of the top color, while using the luminosity of the bottom color.
The effect preserves gray levels and can be used to colorize the foreground.

Available as `container.blendMode = 'color'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'color'
```

## Constructors

### Constructor

> **new ColorBlend**(): `ColorBlend`

#### Returns

`ColorBlend`

#### Overrides

`BlendModeFilter.constructor`
