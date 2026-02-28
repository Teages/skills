# Class: ExclusionBlend

The final color is similar to difference, but with less contrast.
As with difference, a black layer has no effect, while a white layer inverts the other layer's color.

Available as `container.blendMode = 'exclusion'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'exclusion'
```

## Constructors

### Constructor

> **new ExclusionBlend**(): `ExclusionBlend`

#### Returns

`ExclusionBlend`

#### Overrides

`BlendModeFilter.constructor`
