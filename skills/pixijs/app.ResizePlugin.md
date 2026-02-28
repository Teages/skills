# Class: ResizePlugin

Middleware for Application's resize functionality. This plugin handles automatic
and manual resizing of your PixiJS application.

Adds the following features to [Application](app.Application.md):
- `resizeTo`: Set an element to automatically resize to
- `resize`: Manually trigger a resize
- `queueResize`: Queue a resize for the next animation frame
- `cancelResize`: Cancel a queued resize

## Example

```ts
import { Application, ResizePlugin } from 'pixi.js';

// Create application
const app = new Application();

// Example 1: Auto-resize to window
await app.init({ resizeTo: window });

// Example 2: Auto-resize to specific element
const container = document.querySelector('#game-container');
await app.init({ resizeTo: container });

// Example 3: Change resize target at runtime
app.resizeTo = window;                    // Enable auto-resize to window
app.resizeTo = null;                      // Disable auto-resize
```

## Constructors

### Constructor

> **new ResizePlugin**(): `ResizePlugin`

#### Returns

`ResizePlugin`
