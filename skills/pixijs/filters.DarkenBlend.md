# Class: DarkenBlend

The final color is composed of the darkest values of each color channel.

Available as `container.blendMode = 'darken'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'darken'
```

## Constructors

### Constructor

> **new DarkenBlend**(): `DarkenBlend`

#### Returns

`DarkenBlend`

#### Overrides

`BlendModeFilter.constructor`
