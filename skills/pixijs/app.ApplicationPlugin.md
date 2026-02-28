# Interface: ApplicationPlugin

**`Advanced`**

Interface for creating Application plugins. Any plugin that's usable for Application must implement these methods.

To create a plugin:
1. Create a class that implements this interface
2. Add the required static extension property
3. Register the plugin using extensions.add()

## Example

```ts
import { ApplicationPlugin, ExtensionType, extensions } from 'pixi.js';

class MyPlugin {
   // Required: Declare the extension type
   public static extension = ExtensionType.Application;

   // Required: Implement init method
   public static init(options: Partial<ApplicationOptions>): void {
       // Add properties/methods to the Application instance (this)
       Object.defineProperty(this, 'myFeature', {
           value: () => console.log('My feature!'),
       });

       // Use options if needed
       console.log('Plugin initialized with:', options);
   }

   // Required: Implement destroy method
   public static destroy(): void {
       // Clean up any resources
       console.log('Plugin destroyed');
   }
}

// Register the plugin
extensions.add(MyPlugin);

// Usage in application
const app = new Application();
await app.init();
app.myFeature(); // Output: "My feature!"
```
> [!IMPORTANT]
> - Plugins are initialized in the order they are added
> - Plugins are destroyed in reverse order
> - The `this` context in both methods refers to the Application instance

## See

 - [ExtensionType](extensions.ExtensionType.md) For different types of extensions
 - [extensions](extensions.extensions.md) For the extension registration system
 - [ApplicationOptions](app.ApplicationOptions.md) For available application options

## Methods

### destroy()

> **destroy**(): `void`

Called when destroying Application, scoped to Application instance.

#### Returns

`void`

***

### init()

> **init**(`options`): `void`

Called when Application is constructed, scoped to Application instance.
Passes in `options` as the only argument, which are Application `init()` options.

#### Parameters

##### options

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApplicationOptions`](app.ApplicationOptions.md)\>

Application options.

#### Returns

`void`
