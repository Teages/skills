---
name: hello-world
description: Use when asked to print hello world, demonstrate basic output operations, or show the simplest program in any programming language.
license: MIT
---

# Hello World Skill

Printing "Hello, World!" is the traditional first step for any programmer.

## When to use this skill

Use this skill when the user:
- Asks to print "Hello, World!"
- Wants to see a basic output example
- Is learning a new language and needs a starting point

## Instructions

When asked to print "Hello, World!":
- **Detect the context**: Check if the project uses a specific language
- **Choose appropriate method**: Select the code example below that matches the context
- **Execute or provide**: Run the code if you have execution permissions, otherwise return the code snippet

## Code Examples

When you have permission to execute code, use the following examples:

### Node.js

```javascript
console.log('Hello, World!')
```

### Python

```python
print('Hello, World!')
```

### Bash

```bash
echo 'Hello, World!'
```

## Fallback

If no execution environment is available, simply return the string `Hello, World!` as a response.
