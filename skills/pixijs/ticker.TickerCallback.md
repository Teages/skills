# Type Alias: TickerCallback()\<T\>

> **TickerCallback**\<`T`\> = (`this`, `ticker`) => `any`

A callback which can be added to a ticker.
The callback receives the Ticker instance as its parameter, providing access to timing properties.

## Type Parameters

### T

`T`

## Parameters

### this

`T`

### ticker

[`Ticker`](ticker.Ticker.md)

## Returns

`any`

## Example

```ts
ticker.add((ticker) => {
   // Access deltaTime (dimensionless scalar ~1.0 at 60fps)
   sprite.rotation += 0.1 * ticker.deltaTime;

   // Access deltaMS (milliseconds elapsed)
   const progress = ticker.deltaMS / animationDuration;
});
```
