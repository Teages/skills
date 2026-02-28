# Class: PinLightBlend

Replaces colors based on the blend color.

Available as `container.blendMode = 'pin-light'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'pin-light'
```

## Constructors

### Constructor

> **new PinLightBlend**(): `PinLightBlend`

#### Returns

`PinLightBlend`

#### Overrides

`BlendModeFilter.constructor`
