# Type Alias: TextStyleFontWeight

> **TextStyleFontWeight** = `"normal"` \| `"bold"` \| `"bolder"` \| `"lighter"` \| `"100"` \| `"200"` \| `"300"` \| `"400"` \| `"500"` \| `"600"` \| `"700"` \| `"800"` \| `"900"`

The font weight input for text styles. Controls the thickness or boldness of the text.

## Example

```ts
// Create text with different font weights
const normalText = new Text({
    text: 'Normal Weight',
    style: { fontWeight: 'normal' }
});

const boldText = new Text({
    text: 'Bold Weight',
    style: { fontWeight: 'bold' }
});

// Using numeric weights
const lightText = new Text({
    text: 'Light Weight',
    style: { fontWeight: '300' }
});

const mediumText = new Text({
    text: 'Medium Weight',
    style: { fontWeight: '500' }
});

const heavyText = new Text({
    text: 'Heavy Weight',
    style: { fontWeight: '900' }
});

// Responsive weight changes
const adaptiveText = new Text({
    text: 'Adaptive Weight',
    style: { fontWeight: window.innerWidth > 600 ? 'bold' : 'normal' }
});
```

Supported values:
- 'normal': Standard weight (equivalent to 400)
- 'bold': Bold weight (equivalent to 700)
- 'bolder': One weight darker than the parent element
- 'lighter': One weight lighter than the parent element
- '100': Thin (Hairline)
- '200': Extra Light (Ultra Light)
- '300': Light
- '400': Normal
- '500': Medium
- '600': Semi Bold (Demi Bold)
- '700': Bold
- '800': Extra Bold (Ultra Bold)
- '900': Heavy (Black)

## See

[MDN font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
