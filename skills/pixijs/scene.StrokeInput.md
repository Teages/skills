# Type Alias: StrokeInput

> **StrokeInput** = [`ColorSource`](color.ColorSource.md) \| [`FillGradient`](scene.FillGradient.md) \| [`FillPattern`](scene.FillPattern.md) \| [`StrokeStyle`](scene.StrokeStyle.md)

These can be directly used as a stroke
```ts
graphics.stroke(0xff0000);
graphics.stroke(new FillPattern(texture));
graphics.stroke(new FillGradient(0, 0, 200, 0));
graphics.stroke({
  color: 0xff0000,
  width?: 1,
  alignment?: 0.5,
});
graphics.stroke({
  fill: new FillPattern(texture),
  width: 1,
  alignment: 0.5,
});
graphics.stroke({
  fill: new FillGradient(0, 0, 200, 0),
  width: 1,
  alignment: 0.5,
});
```
