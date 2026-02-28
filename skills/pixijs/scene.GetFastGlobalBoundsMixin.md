# Interface: GetFastGlobalBoundsMixin

**`Advanced`**

Interface for the GetFastGlobalBoundsMixin, which provides methods to compute
an approximate global bounding box for a container and its children.

## Methods

### getFastGlobalBounds()

> **getFastGlobalBounds**(`factorRenderLayers?`, `bounds?`): [`Bounds`](rendering.Bounds.md)

**`Advanced`**

Computes an approximate global bounding box for the container and its children.
This method is optimized for speed by using axis-aligned bounding boxes (AABBs),
and uses the last render results from when it updated the transforms. This function does not update them.
which may result in slightly larger bounds but never smaller than the actual bounds.

for accurate (but less performant) results use `container.getGlobalBounds`

#### Parameters

##### factorRenderLayers?

`boolean`

A flag indicating whether to consider render layers in the calculation.

##### bounds?

[`Bounds`](rendering.Bounds.md)

The output bounds object to store the result. If not provided, a new one is created.

#### Returns

[`Bounds`](rendering.Bounds.md)

The computed bounds.
