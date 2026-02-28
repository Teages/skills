# Class: extensions

Global registration system for all PixiJS extensions. Provides a centralized way to add, remove,
and manage functionality across the engine.

Features:
- Register custom extensions and plugins
- Handle multiple extension types
- Priority-based ordering

## Example

```ts
import { extensions, ExtensionType } from 'pixi.js';

// Register a simple object extension
extensions.add({
  extension: {
      type: ExtensionType.LoadParser,
      name: 'my-loader',
      priority: 100, // Optional priority for ordering
  },
  // add load parser functions
});

// Register a class-based extension
class MyRendererPlugin {
    static extension = {
        type: [ExtensionType.WebGLSystem, ExtensionType.WebGPUSystem],
        name: 'myRendererPlugin'
    };

   // add renderer plugin methods
}
extensions.add(MyRendererPlugin);

// Remove extensions
extensions.remove(MyRendererPlugin);
```

## Remarks

- Extensions must have a type from [ExtensionType](extensions.ExtensionType.md)
- Can be registered before or after their handlers
- Supports priority-based ordering
- Automatically normalizes extension formats

## See

 - [ExtensionType](extensions.ExtensionType.md) For all available extension types
 - [ExtensionFormat](extensions.ExtensionFormatLoose.md) For extension registration format
 - [Application](app.Application.md) For application plugin system
 - [LoaderParser](assets.LoaderParser.md) For asset loading extensions

## Methods

### add()

> `static` **add**(...`extensions`): `object`

Register new extensions with PixiJS. Extensions can be registered in multiple formats:
- As a class with a static `extension` property
- As an extension format object
- As multiple extensions passed as separate arguments

#### Parameters

##### extensions

...`any`[]

Extensions to add to PixiJS. Each can be:
- A class with static `extension` property
- An extension format object with `type` and `ref`
- Multiple extensions as separate arguments

#### Returns

This extensions instance for chaining

##### add()

> **add**(...`extensions`): \{ \_addHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; \_removeHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; ... 7 more ...; mixin(Target: any, ...sources: unknown\[\]): void; \}

Register new extensions with PixiJS. Extensions can be registered in multiple formats:
- As a class with a static `extension` property
- As an extension format object
- As multiple extensions passed as separate arguments

###### Parameters

###### extensions

...`any`[]

Extensions to add to PixiJS. Each can be:
- A class with static `extension` property
- An extension format object with `type` and `ref`
- Multiple extensions as separate arguments

###### Returns

\{ \_addHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; \_removeHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; ... 7 more ...; mixin(Target: any, ...sources: unknown\[\]): void; \}

This extensions instance for chaining

###### Example

```ts
// Register a simple extension
extensions.add(MyRendererPlugin);

// Register multiple extensions
extensions.add(
    MyRendererPlugin,
    MySystemPlugin,
});
```

###### See

 - [ExtensionType](extensions.ExtensionType.md) For available extension types
 - [ExtensionFormat](extensions.ExtensionFormatLoose.md) For extension format details
 - [extensions.remove](#remove) For removing registered extensions

##### mixin()

> **mixin**(`Target`, ...`sources`): `void`

Mixin the source object(s) properties into the target class's prototype.
Copies all property descriptors from source objects to the target's prototype.

###### Parameters

###### Target

`any`

The target class to mix properties into

###### sources

...`unknown`[]

One or more source objects containing properties to mix in

###### Returns

`void`

###### Example

```ts
// Create a mixin with shared properties
const moveable = {
    x: 0,
    y: 0,
    move(x: number, y: number) {
        this.x += x;
        this.y += y;
    }
};

// Create a mixin with computed properties
const scalable = {
    scale: 1,
    get scaled() {
        return this.scale > 1;
    }
};

// Apply mixins to a class
extensions.mixin(Sprite, moveable, scalable);

// Use mixed-in properties
const sprite = new Sprite();
sprite.move(10, 20);
console.log(sprite.x, sprite.y); // 10, 20
```

###### Remarks

- Copies all properties including getters/setters
- Does not modify source objects
- Preserves property descriptors

###### See

 - [ObjectConstructor.defineProperties](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) For details on property descriptors
 - [ObjectConstructor.getOwnPropertyDescriptors](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) For details on property copying

##### remove()

> **remove**(...`extensions`): \{ \_addHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; \_removeHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; ... 7 more ...; mixin(Target: any, ...sources: unknown\[\]): void; \}

Remove extensions from PixiJS.

###### Parameters

###### extensions

...`any`[]

Extensions to be removed. Can be:
- Extension class with static `extension` property
- Extension format object with `type` and `ref`
- Multiple extensions as separate arguments

###### Returns

\{ \_addHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; \_removeHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; ... 7 more ...; mixin(Target: any, ...sources: unknown\[\]): void; \}

this for chaining

###### Example

```ts
// Remove a single extension
extensions.remove(MyRendererPlugin);

// Remove multiple extensions
extensions.remove(
    MyRendererPlugin,
    MySystemPlugin
);
```

###### See

 - [ExtensionType](extensions.ExtensionType.md) For available extension types
 - [ExtensionFormat](extensions.ExtensionFormatLoose.md) For extension format details

#### Example

```ts
// Register a simple extension
extensions.add(MyRendererPlugin);

// Register multiple extensions
extensions.add(
    MyRendererPlugin,
    MySystemPlugin,
});
```

#### See

 - [ExtensionType](extensions.ExtensionType.md) For available extension types
 - [ExtensionFormat](extensions.ExtensionFormatLoose.md) For extension format details
 - [extensions.remove](#remove) For removing registered extensions

***

### mixin()

> `static` **mixin**(`Target`, ...`sources`): `void`

Mixin the source object(s) properties into the target class's prototype.
Copies all property descriptors from source objects to the target's prototype.

#### Parameters

##### Target

`any`

The target class to mix properties into

##### sources

...`unknown`[]

One or more source objects containing properties to mix in

#### Returns

`void`

#### Example

```ts
// Create a mixin with shared properties
const moveable = {
    x: 0,
    y: 0,
    move(x: number, y: number) {
        this.x += x;
        this.y += y;
    }
};

// Create a mixin with computed properties
const scalable = {
    scale: 1,
    get scaled() {
        return this.scale > 1;
    }
};

// Apply mixins to a class
extensions.mixin(Sprite, moveable, scalable);

// Use mixed-in properties
const sprite = new Sprite();
sprite.move(10, 20);
console.log(sprite.x, sprite.y); // 10, 20
```

#### Remarks

- Copies all properties including getters/setters
- Does not modify source objects
- Preserves property descriptors

#### See

 - [ObjectConstructor.defineProperties](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) For details on property descriptors
 - [ObjectConstructor.getOwnPropertyDescriptors](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) For details on property copying

***

### remove()

> `static` **remove**(...`extensions`): `object`

Remove extensions from PixiJS.

#### Parameters

##### extensions

...`any`[]

Extensions to be removed. Can be:
- Extension class with static `extension` property
- Extension format object with `type` and `ref`
- Multiple extensions as separate arguments

#### Returns

this for chaining

##### add()

> **add**(...`extensions`): \{ \_addHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; \_removeHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; ... 7 more ...; mixin(Target: any, ...sources: unknown\[\]): void; \}

Register new extensions with PixiJS. Extensions can be registered in multiple formats:
- As a class with a static `extension` property
- As an extension format object
- As multiple extensions passed as separate arguments

###### Parameters

###### extensions

...`any`[]

Extensions to add to PixiJS. Each can be:
- A class with static `extension` property
- An extension format object with `type` and `ref`
- Multiple extensions as separate arguments

###### Returns

\{ \_addHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; \_removeHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; ... 7 more ...; mixin(Target: any, ...sources: unknown\[\]): void; \}

This extensions instance for chaining

###### Example

```ts
// Register a simple extension
extensions.add(MyRendererPlugin);

// Register multiple extensions
extensions.add(
    MyRendererPlugin,
    MySystemPlugin,
});
```

###### See

 - [ExtensionType](extensions.ExtensionType.md) For available extension types
 - [ExtensionFormat](extensions.ExtensionFormatLoose.md) For extension format details
 - [extensions.remove](#remove) For removing registered extensions

##### mixin()

> **mixin**(`Target`, ...`sources`): `void`

Mixin the source object(s) properties into the target class's prototype.
Copies all property descriptors from source objects to the target's prototype.

###### Parameters

###### Target

`any`

The target class to mix properties into

###### sources

...`unknown`[]

One or more source objects containing properties to mix in

###### Returns

`void`

###### Example

```ts
// Create a mixin with shared properties
const moveable = {
    x: 0,
    y: 0,
    move(x: number, y: number) {
        this.x += x;
        this.y += y;
    }
};

// Create a mixin with computed properties
const scalable = {
    scale: 1,
    get scaled() {
        return this.scale > 1;
    }
};

// Apply mixins to a class
extensions.mixin(Sprite, moveable, scalable);

// Use mixed-in properties
const sprite = new Sprite();
sprite.move(10, 20);
console.log(sprite.x, sprite.y); // 10, 20
```

###### Remarks

- Copies all properties including getters/setters
- Does not modify source objects
- Preserves property descriptors

###### See

 - [ObjectConstructor.defineProperties](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) For details on property descriptors
 - [ObjectConstructor.getOwnPropertyDescriptors](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) For details on property copying

##### remove()

> **remove**(...`extensions`): \{ \_addHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; \_removeHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; ... 7 more ...; mixin(Target: any, ...sources: unknown\[\]): void; \}

Remove extensions from PixiJS.

###### Parameters

###### extensions

...`any`[]

Extensions to be removed. Can be:
- Extension class with static `extension` property
- Extension format object with `type` and `ref`
- Multiple extensions as separate arguments

###### Returns

\{ \_addHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; \_removeHandlers: Partial\<Record\<ExtensionType, ExtensionHandler\>\>; ... 7 more ...; mixin(Target: any, ...sources: unknown\[\]): void; \}

this for chaining

###### Example

```ts
// Remove a single extension
extensions.remove(MyRendererPlugin);

// Remove multiple extensions
extensions.remove(
    MyRendererPlugin,
    MySystemPlugin
);
```

###### See

 - [ExtensionType](extensions.ExtensionType.md) For available extension types
 - [ExtensionFormat](extensions.ExtensionFormatLoose.md) For extension format details

#### Example

```ts
// Remove a single extension
extensions.remove(MyRendererPlugin);

// Remove multiple extensions
extensions.remove(
    MyRendererPlugin,
    MySystemPlugin
);
```

#### See

 - [ExtensionType](extensions.ExtensionType.md) For available extension types
 - [ExtensionFormat](extensions.ExtensionFormatLoose.md) For extension format details
