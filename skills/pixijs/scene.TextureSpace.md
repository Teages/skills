# Type Alias: TextureSpace

> **TextureSpace** = `"local"` \| `"global"`

**`Advanced`**

Determines how texture coordinates are calculated
Local Space:              Global Space:
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ A   B   │  │ A   B   │  │ A...B   │  │ ...B... │
│         │  │         │  │         │  │         │
│ C   D   │  │ C   D   │  │ C...D   │  │ ...D... │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
(Each shape   (Each shape  (Texture continues across
gets full     gets full    shapes as if they're texture)      texture)     windows to same texture)
