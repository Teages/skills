# Interface: GCSystemOptions

**`Advanced`**

Options for the [GCSystem](rendering.GCSystem.md).

## Properties

### gcActive

> **gcActive**: `boolean`

If set to true, this will enable the garbage collector.

#### Default

```ts
true
```

***

### gcFrequency

> **gcFrequency**: `number`

How frequently to run garbage collection in milliseconds.

#### Default

```ts
30000
```

***

### gcMaxUnusedTime

> **gcMaxUnusedTime**: `number`

The maximum time in milliseconds a resource can be unused before being garbage collected.

#### Default

```ts
60000
```
