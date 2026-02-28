# Enumeration: UPDATE\_PRIORITY

Represents the update priorities used by internal Pixi classes when registered with
the [Ticker](ticker.Ticker.md) object. Higher priority items are updated first and lower
priority items, such as render, should go later.

## Enumeration Members

### HIGH

> **HIGH**: `25`

High priority updating, used by [AnimatedSprite](scene.AnimatedSprite.md)

#### Default

```ts
25
```

***

### INTERACTION

> **INTERACTION**: `50`

Highest priority used for interaction events in [EventSystem](events.EventSystem.md)

#### Default

```ts
50
```

***

### LOW

> **LOW**: `-25`

Low priority used for [Application](app.Application.md) rendering.

#### Default

```ts
-25
```

***

### NORMAL

> **NORMAL**: `0`

Default priority for ticker events, see [Ticker#add](ticker.Ticker.html#add).

#### Default

```ts
0
```

***

### UTILITY

> **UTILITY**: `-50`

Lowest priority used for [PrepareBase](rendering.PrepareBase.md) utility.

#### Default

```ts
-50
```
