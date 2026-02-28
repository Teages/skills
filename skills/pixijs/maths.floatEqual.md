# Function: floatEqual()

> **floatEqual**(`a`, `b`, `epsilon`): `boolean`

**`Advanced`**

The idea of a relative epsilon comparison is to find the difference between the two numbers,
and see if it is less than a given epsilon.
A good epsilon would be the N% of the largest of the two values or `Math.EPSILON`.

_Note: Only available with **pixi.js/math-extras**._

## Parameters

### a

`number`

First floating number to compare.

### b

`number`

Second floating number to compare.

### epsilon

`number` = `Number.EPSILON`

The epsilon to compare to.
The larger the epsilon, the easier for the numbers to be considered equals.

## Returns

`boolean`

Returns `true` if the difference between the values is less than the given epsilon;
otherwise `false`.
