# Variable: isMobile

> `const` **isMobile**: [`isMobileResult`](utils.isMobileResult.md)

Detects whether the device is mobile and what type of mobile device it is.
Provides a comprehensive detection system for mobile platforms and devices.

## Example

```ts
import { isMobile } from 'pixi.js';

// Check specific device types
if (isMobile.apple.tablet) {
   console.log('Running on iPad');
}

// Check platform categories
if (isMobile.android.any) {
   console.log('Running on Android');
}

// Conditional rendering
if (isMobile.phone) {
   renderer.resolution = 2;
   view.style.width = '100vw';
}
```

## Remarks

- Detects all major mobile platforms
- Distinguishes between phones and tablets
- Updates when navigator changes
- Common in responsive design

## See

[isMobileResult](utils.isMobileResult.md) For full type definition
