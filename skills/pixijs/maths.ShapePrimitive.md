# Interface: ShapePrimitive

**`Advanced`**

A basic interface that defines common properties and methods for all Pixi shape primitives.
Provides a standard API for shape manipulation, hit testing, and bounds calculation.

## Example

```ts
// Implement basic shape
class CustomShape implements ShapePrimitive {
    public readonly type = 'custom';
    public x = 0;
    public y = 0;

    // Implement required methods
    public contains(x: number, y: number): boolean {
        // Custom hit testing logic
        return true;
    }

    public getBounds(out?: Rectangle): Rectangle {
        // Custom bounds calculation
        return out || new Rectangle();
    }

    // ... implement other required methods
}
// Use in a container
container.hitArea = new CustomShape();
```

## See

 - [Rectangle](maths.Rectangle.md) For rectangular shape implementation
 - [Circle](maths.Circle.md) For circular shape implementation
 - [Polygon](maths.Polygon.md) For polygon shape implementation

## Properties

### type

> `readonly` **type**: `string` & `object` \| [`SHAPE_PRIMITIVE`](maths.SHAPE_PRIMITIVE.md)

The type of the object, mainly used to avoid `instanceof` checks

***

### x

> `readonly` **x**: `number`

The X coordinate of the shape

***

### y

> `readonly` **y**: `number`

The Y coordinate of the shape

## Methods

### clone()

> **clone**(): `ShapePrimitive`

Creates a clone of this ShapePrimitive instance.

#### Returns

`ShapePrimitive`

***

### contains()

> **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates passed to this function are contained within this ShapePrimitive.

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`boolean`

***

### copyFrom()

> **copyFrom**(`source`): `void`

Copies the properties from another ShapePrimitive to this ShapePrimitive.

#### Parameters

##### source

`ShapePrimitive`

#### Returns

`void`

***

### copyTo()

> **copyTo**(`destination`): `void`

Copies the properties from this ShapePrimitive to another ShapePrimitive.

#### Parameters

##### destination

`ShapePrimitive`

#### Returns

`void`

***

### getBounds()

> **getBounds**(`out?`): [`Rectangle`](maths.Rectangle.md)

Returns the framing rectangle of the ShapePrimitive as a Rectangle object.

#### Parameters

##### out?

[`Rectangle`](maths.Rectangle.md)

#### Returns

[`Rectangle`](maths.Rectangle.md)

***

### strokeContains()

> **strokeContains**(`x`, `y`, `strokeWidth`, `alignment?`): `boolean`

Checks whether the x and y coordinates passed to this function are contained within the stroke of this shape

#### Parameters

##### x

`number`

##### y

`number`

##### strokeWidth

`number`

##### alignment?

`number`

#### Returns

`boolean`
