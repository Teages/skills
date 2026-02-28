# Class: LinearDodgeBlend

Looks at the color information in each channel and brightens the base color to reflect the blend color by decreasing contrast between the two.

Available as `container.blendMode = 'linear-dodge'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'linear-dodge'
```

## Constructors

### Constructor

> **new LinearDodgeBlend**(): `LinearDodgeBlend`

#### Returns

`LinearDodgeBlend`

#### Overrides

`BlendModeFilter.constructor`
