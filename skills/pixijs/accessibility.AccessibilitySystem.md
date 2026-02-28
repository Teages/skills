# Class: AccessibilitySystem

The Accessibility system provides screen reader and keyboard navigation support for PixiJS content.
It creates an accessible DOM layer over the canvas that can be controlled programmatically or through user interaction.

By default, the system activates when users press the tab key. This behavior can be customized through options:
```js
const app = new Application({
    accessibilityOptions: {
    // Enable immediately instead of waiting for tab
    enabledByDefault: true,
    // Disable tab key activation
    activateOnTab: false,
    // Show/hide accessibility divs
    debug: false,
    // Prevent accessibility from being deactivated when mouse moves
    deactivateOnMouseMove: false,
}
});
```

The system can also be controlled programmatically by accessing the `renderer.accessibility` property:
```js
app.renderer.accessibility.setAccessibilityEnabled(true);
```

To make individual containers accessible:
```js
container.accessible = true;
```
There are several properties that can be set on a Container to control its accessibility which can
be found here: [AccessibleOptions](accessibility.AccessibleOptions.md).

## Implements

- [`System`](rendering.System.md)\<[`AccessibilitySystemOptions`](accessibility.AccessibilitySystemOptions.md)\>

## Constructors

### Constructor

> **new AccessibilitySystem**(`renderer`, `_mobileInfo`): `AccessibilitySystem`

#### Parameters

##### renderer

[`Renderer`](rendering.Renderer.md)

A reference to the current renderer

##### \_mobileInfo

[`isMobileResult`](utils.isMobileResult.md) = `isMobile`

#### Returns

`AccessibilitySystem`

## Properties

### debug

> **debug**: `boolean` = `false`

Whether accessibility divs are visible for debugging

***

### defaultOptions

> `static` **defaultOptions**: [`AccessibilityOptions`](accessibility.AccessibilityOptions.md)

The default options used by the system.
You can set these before initializing the [Application](app.Application.md) to change the default behavior.

#### Example

```js
import { AccessibilitySystem } from 'pixi.js';

AccessibilitySystem.defaultOptions.enabledByDefault = true;

const app = new Application()
app.init()
```

## Accessors

### div

#### Get Signature

> **get** **div**(): [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The DOM element that will sit over the PixiJS element. This is where the div overlays will go.

##### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

***

### hookDiv

#### Get Signature

> **get** **hookDiv**(): [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Button element for handling touch hooks.

##### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

***

### isActive

#### Get Signature

> **get** **isActive**(): `boolean`

Value of `true` if accessibility is currently active and accessibility layers are showing.

##### Returns

`boolean`

***

### isMobileAccessibility

#### Get Signature

> **get** **isMobileAccessibility**(): `boolean`

Value of `true` if accessibility is enabled for touch devices.

##### Returns

`boolean`

## Methods

### destroy()

> **destroy**(): `void`

Destroys the accessibility system. Removes all elements and listeners.
> [!IMPORTANT] This is typically called automatically when the [Application](app.Application.md) is destroyed.
> A typically user should not need to call this method directly.

#### Returns

`void`

#### Implementation of

[`System`](rendering.System.md).[`destroy`](rendering.System.html#destroy)

***

### setAccessibilityEnabled()

> **setAccessibilityEnabled**(`enabled`): `void`

Enables or disables the accessibility system.

#### Parameters

##### enabled

`boolean`

Whether to enable or disable accessibility.

#### Returns

`void`

#### Example

```js
app.renderer.accessibility.setAccessibilityEnabled(true); // Enable accessibility
app.renderer.accessibility.setAccessibilityEnabled(false); // Disable accessibility
```
