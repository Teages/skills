# Variable: earcut()

> `const` **earcut**: (`vertices`, `holes?`, `dimensions?`) => `number`[]

**`Advanced`**

A polygon triangulation library

Triangulate an outline.

## Parameters

### vertices

`ArrayLike`\<`number`\>

A flat array of vertice coordinates like [x0,y0, x1,y1, x2,y2, ...].

### holes?

`ArrayLike`\<`number`\>

An array of hole indices if any (e.g. [5, 8] for a 12-vertice input would mean one hole with vertices 5–7 and another with 8–11).

### dimensions?

`number`

The number of coordinates per vertice in the input array (2 by default).

## Returns

`number`[]

A flat array with each group of three numbers indexing a triangle in the `vertices` array.

## Examples

```ts
earcut([10,0, 0,50, 60,60, 70,10]); // returns [1,0,3, 3,2,1]
```

```ts
with a hole: earcut([0,0, 100,0, 100,100, 0,100,  20,20, 80,20, 80,80, 20,80], [4]); // [3,0,4, 5,4,0, 3,4,7, 5,0,1, 2,3,7, 6,5,1, 2,7,6, 6,1,2]
```

```ts
with 3d coords: earcut([10,0,1, 0,50,2, 60,60,3, 70,10,4], null, 3); // [1,0,3, 3,2,1]
```

## See

[https://github.com/mapbox/earcut](https://github.com/mapbox/earcut)

## Param

A flat array of vertex coordinates

## Param

An array of hole indices

## Param

The number of coordinates per vertex in the input array

## Returns

Triangulated polygon
