# Interface: AnimatedSpriteOptions

Constructor options used for `AnimatedSprite` instances. Allows configuration of animation
playback, speed, and texture frames.

## Example

```ts
// Create a basic animated sprite
const sprite = new AnimatedSprite({
    textures: [
        Texture.from('walk1.png'),
        Texture.from('walk2.png'),
        Texture.from('walk3.png')
    ],
    animationSpeed: 0.1,
    loop: true
});

// Create with spritesheet frames and callbacks
const sheet = await Assets.load('character.json');
const animatedSprite = new AnimatedSprite({
    textures: sheet.animations['walk'],
    autoPlay: true,
    updateAnchor: true,
    onComplete: () => console.log('Animation complete'),
    onFrameChange: (frame) => console.log('Current frame:', frame),
    onLoop: () => console.log('Animation looped')
});

// Create with custom timing for each frame
const customTimingSprite = new AnimatedSprite({
    textures: [
        { texture: Texture.from('frame1.png'), time: 100 },
        { texture: Texture.from('frame2.png'), time: 200 },
        { texture: Texture.from('frame3.png'), time: 300 }
    ],
    autoUpdate: true
});
```

## See

 - [AnimatedSprite](scene.AnimatedSprite.md) For the main sprite class
 - [Spritesheet](assets.Spritesheet.md) For loading animations from spritesheets

## Extends

- `AnimatedSpriteOptions`.[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`SpriteOptions`](scene.SpriteOptions.md), `"texture"`\>

## Properties

### animationSpeed?

> `optional` **animationSpeed**: `number`

The speed that the AnimatedSprite will play at. Higher is faster, lower is slower.

#### Example

```ts
// Create an AnimatedSprite with a slower animation speed
const animation = new AnimatedSprite({
    textures: [Texture.from('frame1.png'), Texture.from('frame2.png')],
    animationSpeed: 0.5 // Slower animation
});

// Update the animation speed to make it faster
animation.animationSpeed = 2; // Faster animation
```

#### Default

```ts
1
```

***

### autoPlay?

> `optional` **autoPlay**: `boolean`

Whether to start the animation immediately on creation.
If set to `true`, the animation will start playing as soon as the
`AnimatedSprite` is created.
If set to `false`, you will need to call the `play` method to start the animation.

#### Example

```ts
// Create an AnimatedSprite that starts playing immediately
const animation = new AnimatedSprite({
    textures: [Texture.from('frame1.png'), Texture.from('frame2.png')],
    autoPlay: true
});

// Create an AnimatedSprite that does not start playing immediately
const animation = new AnimatedSprite({
    textures: [Texture.from('frame1.png'), Texture.from('frame2.png')],
    autoPlay: false
});
animation.play(); // Start the animation manually
```

#### Default

```ts
false
```

***

### autoUpdate?

> `optional` **autoUpdate**: `boolean`

Whether to use Ticker.shared to auto update animation time.
This is useful for animations that need to be updated every frame.
If set to `false`, you will need to manually call the `update` method
to update the animation.

#### Example

```ts
// Create an AnimatedSprite that does not auto update
const animation = new AnimatedSprite({
    textures: [Texture.from('frame1.png'), Texture.from('frame2.png')],
    autoUpdate: false
});

// Manually update the animation in your game loop
ticker.add((ticker) => {
    animation.update(ticker);
}
```

#### Default

```ts
true
```

***

### loop?

> `optional` **loop**: `boolean`

Whether or not the animation repeats after playing.

#### Default

```ts
true
```

***

### onComplete()?

> `optional` **onComplete**: () => `void`

User-assigned function to call when an AnimatedSprite finishes playing.

#### Returns

`void`

#### Example

```ts
animation.onComplete = () => {
    // Finished!
    console.log('Animation complete');
};
```

#### Default

```ts
null
```

#### See

 - [AnimatedSprite#onFrameChange](scene.AnimatedSprite.html#onframechange) For the callback when the frame changes
 - [AnimatedSprite#onLoop](scene.AnimatedSprite.html#onloop) For the callback when the animation loops
 - [AnimatedSprite#loop](scene.AnimatedSprite.html#loop) For the loop behavior of the animation

***

### onFrameChange()?

> `optional` **onFrameChange**: (`currentFrame`) => `void`

User-assigned function to call when an AnimatedSprite changes which texture is being rendered.

#### Parameters

##### currentFrame

`number`

#### Returns

`void`

#### Example

```ts
animation.onFrameChange = (currentFrame) => {
    // Updated!
    console.log('Current frame:', currentFrame);
};
```

#### See

 - [AnimatedSprite#onComplete](scene.AnimatedSprite.html#oncomplete) For the callback when the animation finishes
 - [AnimatedSprite#onLoop](scene.AnimatedSprite.html#onloop) For the callback when the animation loops

#### Default

```ts
null
```

***

### onLoop()?

> `optional` **onLoop**: () => `void`

User-assigned function to call when `loop` is true,
and an AnimatedSprite is played and loops around to start again.

#### Returns

`void`

#### Example

```ts
animation.onLoop = () => {
    // Looped!
};
```

#### See

 - [AnimatedSprite#onComplete](scene.AnimatedSprite.html#oncomplete) For the callback when the animation finishes
 - [AnimatedSprite#onFrameChange](scene.AnimatedSprite.html#onframechange) For the callback when the frame changes
 - [AnimatedSprite#loop](scene.AnimatedSprite.html#loop) For the loop behavior of the animation

#### Default

```ts
null
```

***

### textures

> **textures**: [`AnimatedSpriteFrames`](scene.AnimatedSpriteFrames.md)

An array of [Texture](rendering.Texture.md) or frame objects that make up the animation.

#### Example

```ts
// Create an AnimatedSprite with an array of textures
const animation = new AnimatedSprite({
    textures: [
        Texture.from('frame1.png'),
        Texture.from('frame2.png'),
        Texture.from('frame3.png')
    ]
});
* // Create an AnimatedSprite with an array of frame objects
const animation = new AnimatedSprite({
    textures: [
        { texture: Texture.from('frame1.png'), time: 100 },
        { texture: Texture.from('frame2.png'), time: 200 },
        { texture: Texture.from('frame3.png'), time: 300 }
    ]
});
```

#### See

[AnimatedSpriteFrames](scene.AnimatedSpriteFrames.md) For the type of the textures array

***

### updateAnchor?

> `optional` **updateAnchor**: `boolean`

Update anchor to [Texture's defaultAnchor][Texture#defaultAnchor](rendering.Texture.html#defaultanchor) when frame changes.

Useful with [sprite sheet animations][Spritesheet#animations](assets.Spritesheet.html#animations) created with tools.
Changing anchor for each frame allows to pin sprite origin to certain moving feature
of the frame (e.g. left foot).
> [!NOTE] Enabling this will override any previously set `anchor` on each frame change.

#### Example

```ts
// Create an AnimatedSprite with updateAnchor enabled
const animation = new AnimatedSprite({
    textures: [Texture.from('frame1.png'), Texture.from('frame2.png')],
    updateAnchor: true
});
```

#### See

[Texture#defaultAnchor](rendering.Texture.html#defaultanchor) For the default anchor of the texture

#### Default

```ts
false
```
