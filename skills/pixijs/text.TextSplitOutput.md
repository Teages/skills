# Interface: TextSplitOutput\<T\>

Contains the output elements from a text split operation.
Provides access to the hierarchical structure of split text elements.

## Example

```ts
const splitResult = Text.split(myText);

// Access individual characters
splitResult.chars.forEach(char => {
    char.alpha = 0;
    gsap.to(char, { alpha: 1, duration: 0.5 });
});

// Access words (groups of characters)
splitResult.words.forEach(word => {
    word.scale.set(0);
    gsap.to(word.scale, { x: 1, y: 1, duration: 0.5 });
});

// Access lines (groups of words)
splitResult.lines.forEach(line => {
    line.x = -200;
    gsap.to(line, { x: 0, duration: 0.5 });
});
```

## Type Parameters

### T

`T` *extends* `SplitableTextObject`

## Properties

### chars

> **chars**: `T`[]

Array of individual character Text objects

***

### lines

> **lines**: [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

Array of line containers, each containing word containers

***

### words

> **words**: [`Container`](scene.Container.md)\<[`ContainerChild`](scene.ContainerChild.md)\>[]

Array of word containers, each containing character objects
