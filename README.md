# Learning Stitches

There are many ways to implement a design system, this project aims to discover the strengths and weakness of Stitches compared to other developer-centric design methodologies commonly used today.

## Getting Started

- [x] Setup
- [x] Configuration
- [x] Customization

### Setup

`npx create-react-app`
`yarn add @stitches/react`

Files I will not be using:

- App.css
- App.test.js
- index.css
- logo.svg
- reportWebVitals.js
- setupTests.js

Files I will be using:

```
src/
├─ components/
│  ├─ Button.js
│  ├─ Text.js
│  ├─ ...anythingYouLike.js
├─ App.js
├─ index.js
├─ stitches.config.ts
```

### Configuration

`stitches.config.ts`

This is the most important file in your project and the one that will contorl all of your design changes.

There are many different objects you can cofigure via createStitches but we will be focusing soley on the theme object and its various scales.

```
// stitches.config.ts
import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    colors: {},
    space: {},
    fonts: {},
    radii: {},
    ...and many more
  }
})
```

The tokens we define here will get maped to their corresponding properties throughout our project so deciding on a system that will be useful to you globally is everything.

Taking `radii` for example, what we define there will be automatically accessible by the following properties when importing our config to any component:

```
borderRadius
borderTopLeftRadius
borderTopRightRadius
borderBottomRightRadius
borderBottomLeftRadius
```

To see a full list of the properties per token avaialbe via the config checkout the [Stitches API](https://stitches.dev/docs/tokens)

```
// stitches.config.ts
theme: {
  radii: {
    sharp: '0',
    soft: '4px'
    pill: '9999px'
  }
}

// someButton.js
import { styled } from '../your.config.js'

const someButton = styled('button', {
  css: {
    borderRadius: '$soft'
  }
})

() => <SomeButton />
// --> borderRadius: 4px
```

### Customization
