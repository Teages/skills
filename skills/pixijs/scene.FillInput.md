# Type Alias: FillInput

> **FillInput** = [`ColorSource`](color.ColorSource.md) \| [`FillGradient`](scene.FillGradient.md) \| [`FillPattern`](scene.FillPattern.md) \| [`FillStyle`](scene.FillStyle.md) \| [`Texture`](rendering.Texture.md)

These can be directly used as a fill or a stroke
```ts
graphics.fill(0xff0000);
graphics.fill(new FillPattern(texture));
graphics.fill(new FillGradient(0, 0, 200, 0));
graphics.fill({
  color: 0xff0000,
  alpha: 0.5,
  texture?: null,
  matrix?: null,
});
graphics.fill({
  fill: new FillPattern(texture),
});
graphics.fill({
  fill: new FillGradient(0, 0, 200, 0),
});
```
