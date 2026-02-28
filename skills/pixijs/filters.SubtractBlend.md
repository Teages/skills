# Class: SubtractBlend

Subtracts the blend from the base color using each color channel

Available as `container.blendMode = 'subtract'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'subtract'
```

## Constructors

### Constructor

> **new SubtractBlend**(): `SubtractBlend`

#### Returns

`SubtractBlend`

#### Overrides

`BlendModeFilter.constructor`
