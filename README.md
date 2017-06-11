
![Axs](/site/icon.png?raw=true)

# Axs

Responsive Typography & Layout for React

[![Build Status](https://travis-ci.org/jxnblk/axs.svg?branch=master)](https://travis-ci.org/jxnblk/axs)

```sh
npm i axs
```

```jsx
import React from 'react'
import { Box, Text } from 'axs'

const App = () => (
  <Box p2 mb2>
    <Text is='h1' fontSize={2}>
      Box with padding and margin bottom
    </Text>
  </Box>
)
```

## About

Axs is an abstraction of the most common responsive layout and typographic styling concerns in the form of UI component primitives.
Axs is intended as a way to quickly prototype new UI, handle one-off styles, and serve as a foundation for creating your own custom UI library.
Use Axs out-of-the-box or as the basis of a highly-customized, application-specific UI component library.

Use the Flex and Box components as a starting point for any visual containers or grid system in your app.
Use the Heading and Text component for headings, labels, paragraphs or any other UI typography.
Use the Color and Border components for thematic styles.
Using [glamor](https://github.com/threepointone/glamor)
under the hood, each Axs component also supports CSS-in-JS via the `css` prop to allow for any fine-tuning you may need.

## Features

- Encapsulated styles using [glamor](https://github.com/threepointone/glamor)
  - Media queries support
  - Pseudoclasses support
  - Server-side rendering support
  - No leaky global styles
  - No need to maintain separate stylesheets
  - Use plain JS objects
  - No tagged template literals
- Handles common layout, typography, and color styles
- Encourages the use and creation of UI components
- Separation of business logic and styling concerns
- Encourages consistency with typographic and spacing scales


## Components

### `<Box />`
T/K

### `<Flex />`
T/K

### `<Heading />`
T/K

### `<Text />`
T/K

### `<Color />`
T/K

### `<Border />`
T/K


### Core Props

### Width

The `width` prop accepts numbers, strings, and arrays.
Percentage widths can be set using a number from 0 to 1.
Any number above 1 will be treated as a fixed pixel width.
String values can be used for other valid CSS lengths.
Pass an array of values for mobile-first responsive styles.

```jsx
// width: 50%
<Box width={1/2} />

// width: 256px
<Box width={256} />

// width: auto
<Box width='auto' />

// responsive widths
<Box width={[ 1, 1/2, 1/4 ]} />

// shorthand prop
<Box w={1/2} />
```

### Font Size

The `fontSize` prop accepts numbers, strings, and arrays.
Numbers from 0 to 6 will use values from the global typographic scale,
where 0 is the largest value and 6 is the smallest.
Numbers greater than 6 will be converted to pixel values.
Strings can bu used for other valid CSS values.
Pass an array of values for mobile-first responsive styles.

```jsx
// 24px (step 3 on the typographic scale)
<Text fontSize={3} />

// 72px
<Text fontSize={72} />

// 2em
<Text fontSize='2em' />

// responsive font size
<Text fontSize={[ 3, 2, 1 ]} />

// shorthand prop
<Text f={2} />

// boolean shorthand
<Text f2 />
```

### Margin and Padding

The margin and padding props accept numbers, strings, or arrays.

Margin and padding props follow the same shorthand convention as
[Basscss](http://basscss.com) and [Rebass](http://jxnblk.com/rebass).

Props | Meaning
---|---
m  | margin
mt | margin-top
mr | margin-right
mb | margin-bottom
ml | margin-left
mx | margin-left and right (x-axis)
my | margin-top and bottom (y-axis)
p  | padding
pt | padding-top
pr | padding-right
pb | padding-bottom
pl | padding-left
px | padding-left and right (x-axis)
py | padding-top and bottom (y-axis)

```jsx
// 16px
<Box m={2} />

// 24px
<Box m={24} />

// 3em
<Box m='3em' />

// responsive margin
<Box m={[ 1, 2, 3 ]} />

// boolean shorthands
<Box mb2 px3 />
```

### `is` prop

The `is` prop allows the element's HTML tag to be changed on a per-instance basis. This is helpful for ensuring HTML semantics and expanding upon the core set of Axs primitive components.

```jsx
// documents should only have one <h1> tag
<Heading is='h1' />

// creating a custom input from the <Box /> component
<Box is='input' css={css} />
```

### Responsive Props

Responsive widths, font sizes, margins, and padding can be set by passing an array instead of a number.
The first value will be used across all breakpoints - i.e. no media query.
The second, third, and fourth values correspond to the small, medium, and large min-width breakpoints.

```jsx
<Box
  width={[
    1,    // 100% width at the smallest viewport width
    1/2,  // 50% width at the small breakpoint and up
    null, // Null values avoid adding a media query style
    1/4   // 25% width at the large breakpoint
  ]}>
  Responsive Widths
</Box>
```


### Boolean Shorthand Props

Margin, padding, and font size props support shorthand boolean props.

```jsx
<Box p2 mb3 f1>
  padding 2
  margin-bottom 3
  font-size 1
</Box>
```

### Creating Custom Components

While Axs components can be used on their own, they are intended to be used as base components for creating application-specific UI components.

```jsx
import { Box, Text } from 'axs'

const Label = props => (
  <Text
    is='label'
    mb1
    fontSize={5}
    {...props}
  />
)

const Input = props => (
  <Box
    is='input'
    type='text'
    p1
    width={1}
    {...props}
    css={{
      display: 'block',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      color: 'inherit',
      backgroundColor: 'transparent',
      WebkitAppearance: 'none',
      appearance: 'none',
      ...props.css
    }}
  />
)
```

### Higher Order Component

T/K

## Docs

For more detailed documentation see:

- [Props API](docs/api.md)
- [Configuration](docs/configuration.md)
- [Higher Order Component](docs/hoc.md)
- [Server Side Rendering](docs/server.md)


## Related

- [cxs](https://github.com/jxnblk/cxs)
- [understyle](https://github.com/jxnblk/understyle)
- [Rebass](http://jxnblk.com/rebass)
- [Reflexbox](http://jxnblk.com/reflexbox)
- [Basscss](http://basscss.com)
- [jsxstyle](https://github.com/smyte/jsxstyle)
- [glamor](https://github.com/threepointone/glamor)
- [open-color](https://yeun.github.io/open-color/)

[MIT License](LICENSE.md)

