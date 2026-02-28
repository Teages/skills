# Class: LightenBlend

The final color is composed of the lightest values of each color channel.

Available as `container.blendMode = 'lighten'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'lighten'
```

## Constructors

### Constructor

> **new LightenBlend**(): `LightenBlend`

#### Returns

`LightenBlend`

#### Overrides

`BlendModeFilter.constructor`
