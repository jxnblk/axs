
# Axs

Responsive Typography & Layout for React

[![Build Status](https://travis-ci.org/jxnblk/axs.svg?branch=master)](https://travis-ci.org/jxnblk/axs)

![Axs](/docs/icon.png?raw=true)

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

- [About](#about)
- [Features](#features)
- [Components](#components)
- [Core Props](#core-props)
- [Creating Custom Components](#creating-custom-components)
- [Higher Order Component](#higher-order-component)

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
  - Encapsulated styles
  - No leaky global styles
  - No need to maintain separate stylesheets
  - Media queries
  - Pseudoclasses
  - Server-side rendering
  - Use plain JS objects
  - No tagged template literals
- Handles common layout, typography, and color styles
- Encourages the use and creation of UI components
- Separation of business logic and styling concerns
- Encourages consistency with typographic and spacing scales


## Components

Axs includes several primitive styling components that can handle
the bulk of styling needed for an application UI.
All Axs components share a set of common styling [props](#core-props) for margin,
padding, font size, and width.

### `<Box />`

The core layout component for controlling width, margin, and padding.

```jsx
<Box width={1/2} p={3} mb={2} />
```

### `<Flex />`

An extension of the Box component with display flex.

```jsx
<Flex>
  <Box width={1/2} />
  <Box width={1/2} />
</Flex>
```


### `<Heading />`

A component primitive for headings, defaults to `<h2>`.

```jsx
<Heading fontSize={1} mb={2} />
```

### `<Text />`

An extension of the Box component for text.
Includes props for typographic styling.

```jsx
<Text fontSize={3} bold center />
```

#### Props

- `bold` (boolean) sets font weight bold
- `center` (boolean) sets text align center

### `<Color />`

An extension of the Box component for setting text and background color.

```jsx
<Color
  color='tomato'
  backgroundColor='lime'
/>
```

#### Props

- `color` (string) sets foreground color
- `backgroundColor` (string) sets background color

### `<Border />`

An extension of the Box component for setting border and border radius styles.
Defaults to a border on all sides.

```jsx
<Border
  color='tomato'
  top
  bottom
  rounded
/>
```

#### Props

- `color` (string) border color
- `top` (boolean) sets border top
- `right` (boolean) sets border right
- `bottom` (boolean) sets border bottom
- `left` (boolean) sets border left
- `rounded` (boolean|number) sets border radius


### Core Props

All Axs components support the following props for handling
responsive layout and typographic styles.

### Width

The `width` prop accepts numbers, strings, and arrays.
Percentage widths can be set using a number from 0 to 1.
Any number above 1 will be treated as a fixed pixel width.
String values can be used for other valid CSS lengths.
Pass an array of values for mobile-first [responsive styles](#responsive-props).

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
Strings can be used for other valid CSS values.
Pass an array of values for mobile-first [responsive styles](#responsive-props).

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
Numbers from 0 – 4 correspond to the global spacing scale.
Numbers greater than 4 are used as pixel values.
Strings can be used for other valid CSS values.
Pass an array of values for mobile-first [responsive styles](#responsive-props).

```jsx
<Box
  margin={8}
  paddingLeft={12}
  paddingRight={12}
/>
```

Margin and padding props also have shorthands,
which follow the same convention as
[Basscss](http://basscss.com) and
[Rebass](http://jxnblk.com/rebass).

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

// margin auto
<Box mx='auto' />

// responsive margin
<Box m={[ 1, 2, 3 ]} />

// boolean shorthands
<Box mb2 px3 />
```

### `css`

The `css` prop accepts a CSS style object to handle any other styles.
This object is passed to [glamor](https://github.com/threepointone/glamor),
which supports pseudoclasses, media queries, and more.

```jsx
<Text
  css={{
    textTransform: 'uppercase',
    letterSpacing: '.2em'
  }}
/>
```

### `is`

The `is` prop allows the element's HTML tag to be changed on a per-instance basis.
This is helpful for ensuring HTML semantics and expanding upon the core set of Axs primitive components.

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
  16px padding
  32px margin-bottom
  32px font-size
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

The Axs higher order component can be used to add the core styling props to any other component that accepts `className` as a prop.

```jsx
import { axs } from 'axs'
import MyInput from './MyInput'

const defaultStyles = {
  borderColor: 'tomato'
}

const Input = axs(defaultStyles)(MyInput)

export default Input
```


## Server Side Renderering

Server side rendering is handled with glamor.
Read [the docs](https://github.com/threepointone/glamor/blob/master/docs/server.md)
for more information.


## Related

- [glamor](https://github.com/threepointone/glamor)
- [Reflexbox](http://jxnblk.com/reflexbox)
- [Grid Styled](http://jxnblk.com/grid-styled)
- [Rebass](http://jxnblk.com/rebass)
- [Basscss](http://basscss.com)
- [jsxstyle](https://github.com/smyte/jsxstyle)


> A hand axe is a prehistoric stone tool with two faces that is the longest-used tool in human history.


[MIT License](LICENSE.md)
