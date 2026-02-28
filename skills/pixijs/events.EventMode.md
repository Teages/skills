# Type Alias: EventMode

> **EventMode** = `"none"` \| `"passive"` \| `"auto"` \| `"static"` \| `"dynamic"`

The type of interaction behavior for a Container. This is set via the [Container#eventMode](events.FederatedOptions.html#eventmode) property.

## Example

```ts
// Basic event mode setup
const sprite = new Sprite(texture);
sprite.eventMode = 'static';    // Enable standard interaction
sprite.on('pointerdown', () => { console.log('clicked!'); });

// Different event modes
sprite.eventMode = 'none';      // Disable all interaction
sprite.eventMode = 'passive';   // Only allow interaction on children
sprite.eventMode = 'auto';      // Like DOM pointer-events: auto
sprite.eventMode = 'dynamic';   // For moving/animated objects
```

Available modes:
- `'none'`: Ignores all interaction events, even on its children
- `'passive'`: **(default)** Does not emit events and ignores hit testing on itself and non-interactive children.
Interactive children will still emit events.
- `'auto'`: Does not emit events but is hit tested if parent is interactive. Same as `interactive = false` in v7
- `'static'`: Emit events and is hit tested. Same as `interactive = true` in v7
- `'dynamic'`: Emits events and is hit tested but will also receive mock interaction events fired from
a ticker to allow for interaction when the mouse isn't moving

Performance tips:
- Use `'none'` for pure visual elements
- Use `'passive'` for containers with some interactive children
- Use `'static'` for standard buttons/controls
- Use `'dynamic'` only for moving/animated interactive elements

## Since

7.2.0
