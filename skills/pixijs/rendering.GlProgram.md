# Class: GlProgram

**`Advanced`**

A wrapper for a WebGL Program. You can create one and then pass it to a shader.
This will manage the WebGL program that is compiled and uploaded to the GPU.

To get the most out of this class, you should be familiar with glsl shaders and how they work.

## See

https://developer.mozilla.org/en-US/docs/Web/API/WebGLProgram

## Example

```ts
// Create a new program
const program = new GlProgram({
  vertex: '...',
  fragment: '...',
});

There are a few key things that pixi shader will do for you automatically:
<br>
- If no precision is provided in the shader, it will be injected into the program source for you.
This precision will be taken form the options provided, if none is provided,
then the program will default to the defaultOptions.
<br>
- It will inject the program name into the shader source if none is provided.
<br>
 - It will set the program version to 300 es.

For optimal usage and best performance, its best to reuse programs as much as possible.
You should use the {@link GlProgram.from} helper function to create programs.
@class
```

## Constructors

### Constructor

> **new GlProgram**(`options`): `GlProgram`

Creates a shiny new GlProgram. Used by WebGL renderer.

#### Parameters

##### options

[`GlProgramOptions`](rendering.GlProgramOptions.md)

The options for the program.

#### Returns

`GlProgram`

## Properties

### fragment?

> `readonly` `optional` **fragment**: `string`

the fragment glsl shader source.

***

### transformFeedbackVaryings?

> `optional` **transformFeedbackVaryings**: `object`

details on how to use this program with transform feedback

#### bufferMode

> **bufferMode**: `"separate"` \| `"interleaved"`

#### names

> **names**: `string`[]

***

### vertex?

> `readonly` `optional` **vertex**: `string`

the vertex glsl shader source

***

### defaultOptions

> `static` **defaultOptions**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`GlProgramOptions`](rendering.GlProgramOptions.md)\>

The default options used by the program.

## Methods

### destroy()

> **destroy**(): `void`

destroys the program

#### Returns

`void`

***

### from()

> `static` **from**(`options`): `GlProgram`

Helper function that creates a program for a given source.
It will check the program cache if the program has already been created.
If it has that one will be returned, if not a new one will be created and cached.

#### Parameters

##### options

[`GlProgramOptions`](rendering.GlProgramOptions.md)

The options for the program.

#### Returns

`GlProgram`

A program using the same source
