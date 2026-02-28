# Class: LinearBurnBlend

Looks at the color information in each channel and darkens the base color to
reflect the blend color by increasing the contrast between the two.

Available as `container.blendMode = 'linear-burn'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'linear-burn'
```

## Constructors

### Constructor

> **new LinearBurnBlend**(): `LinearBurnBlend`

#### Returns

`LinearBurnBlend`

#### Overrides

`BlendModeFilter.constructor`
