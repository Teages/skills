# Interface: TextDestroyOptions

Options when destroying a text object. Controls whether associated text styles
should be cleaned up along with the text object itself.
```ts
// Basic text cleanup
text.destroy({ style: false }); // Keep style for reuse
text.destroy({ style: true }); // Destroy style as well
```

## Properties

### style?

> `optional` **style**: `boolean`

Whether to destroy the text style object along with the text.
Use carefully with shared styles.

#### Default

```ts
false
```
