# Class: NegationBlend

Implements the Negation blend mode which creates an inverted effect based on the brightness values.

Available as `container.blendMode = 'negation'` after importing `pixi.js/advanced-blend-modes`.

## Example

```ts
import 'pixi.js/advanced-blend-modes';
import { Sprite } from 'pixi.js';

const sprite = Sprite.from('something.png');
sprite.blendMode = 'negation'
```

## Constructors

### Constructor

> **new NegationBlend**(): `NegationBlend`

#### Returns

`NegationBlend`

#### Overrides

`BlendModeFilter.constructor`
