# Interface: AccessibleOptions

When `accessible` is enabled on any display object, these properties will affect its accessibility.

## Example

```ts
const container = new Container();
container.accessible = true;
container.accessibleTitle = 'My Container';
container.accessibleHint = 'This is a container';
container.tabIndex = 0;
```

## Properties

### accessible

> **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
shadow div with attributes set

#### Default

```ts
false
```

#### Example

```js
const container = new Container();
container.accessible = true;
```

***

### accessibleChildren

> **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

#### Default

```ts
true
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessibleChildren = false; // This will prevent any children from being accessible

const sprite = new Sprite(texture);
sprite.accessible = true; // This will not work since accessibleChildren is false
```

***

### accessibleHint

> **accessibleHint**: `string`

**`Advanced`**

Sets the aria-label attribute of the shadow div

#### Default

```ts
null
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessibleHint = 'This is a container';
```

***

### accessiblePointerEvents

> **accessiblePointerEvents**: [`PointerEvents`](accessibility.PointerEvents.md)

**`Advanced`**

Specify the pointer-events the accessible div will use
Defaults to auto.

#### Default

```ts
'auto'
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessiblePointerEvents = 'none'; // or 'auto', 'visiblePainted', etc.
```

***

### accessibleText

> **accessibleText**: `string`

Sets the text content of the shadow

#### Default

```ts
null
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessibleText = 'This is a container';
```

***

### accessibleTitle

> **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'container [tabIndex]'

#### Default

```ts
null
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessibleTitle = 'My Container';
```

***

### accessibleType

> **accessibleType**: keyof `HTMLElementTagNameMap`

**`Advanced`**

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

#### Default

```ts
'button'
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.accessibleType = 'button'; // or 'link', 'checkbox', etc.
```

***

### tabIndex

> **tabIndex**: `number`

Sets the tabIndex of the shadow div. You can use this to set the order of the
elements when using the tab key to navigate.

#### Default

```ts
0
```

#### Example

```js
const container = new Container();
container.accessible = true;
container.tabIndex = 0;

const sprite = new Sprite(texture);
sprite.accessible = true;
sprite.tabIndex = 1;
```
