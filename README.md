
![Axs](/demo/miniaxs.png?raw=true)

# Axs

A build-your-own responsive typography and layout UI toolkit for React

[![Build Status](https://travis-ci.org/jxnblk/axs.svg?branch=master)](https://travis-ci.org/jxnblk/axs)

```sh
npm i axs
```

Axs consists of two core primitive components, Box and Text.

```jsx
// Basic example
import React from 'react'
import { Box, Text } from 'axs'

const App = () => (
  <Box p2 mb2 white bgBlue>
    <Text is='h1' size2>
      Box with padding, margin bottom, white text, and blue background
    </Text>
  </Box>
)
```

## About

Axs is an abstraction of the most common responsive layout and typographic styling concerns in the form of two UI component primitives.
Axs is intended as a way to quickly prototype new UI, handle one-off styles, and serve as a foundation for creating your own custom UI library.
Use Axs out-of-the-box or as the basis of a highly-customized, application-specific UI component library.

Use the Box component as a starting point for any visual containers or grid system in your app.
Use the Text component for headings, labels, paragraphs or any other UI typography.
Each Axs component also supports CSS-in-JS via the `css` prop to allow for any fine-tuning you may need.

Axs is built with [cxs](https://github.com/jxnblk/cxs) and inspired by [Basscss](http://basscss.com) and [jsxstyle](https://github.com/smyte/jsxstyle).

## Features

- Encapsulated styles using [Cxs](https://github.com/jxnblk/cxs)
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
- Encourages consistency with a type scale, spacing scale, and color palette

## Usage

Use the Box component for visual containers and grids.

```jsx
<Box>Generic div</Box>
```

Use the Text component for headings, labels, and any other UI typography.

```jsx
<Text>Paragraph element</Text>
```

### Elements

The rendered element can be changed with the `is` prop.

```jsx
<Box is='button'>Box with custom tag</Box>
<Text is='h1'>h1 element</Text>
```

### Margin and Padding

Control margin and padding with the `m` and `p` props.

```jsx
<Box p={2} mb={2}>Padded Box</Box>
```

Margin and padding also work with shorthand props.

```jsx
<Box p2 mb2>Padded Box</Box>
```

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

### Width

Percentage widths can be set with the `width` props using a number from 0 to 1.

```jsx
<Box width={1/2}>50% Wide Box</Box>
```

Any number above 1 will be treated as a fixed pixel width.

```jsx
<Box width={256}>256px Wide Box</Box>
```

### Borders

Border and border radius can be set using the `border` and `rounded` props.

```jsx
<Box p2 border rounded>Box</Box>
<Box p2 border='top' rounded='bottom'>Box</Box>
<Box p2 border rounded='circle'>Box</Box>
```

### Color

Color can be set using the `color`, `bg`, and `borderColor` props.
The default color scheme is from [Open Color](https://yeun.github.io/open-color/).
The color prop will look for a color based on the key in the color scheme.
If the value is not found, the raw color value will be passed on.

```jsx
<Box color='red'>Red Box</Box>
<Box color='#f0f'>Magenta Box</Box>
<Box bg='red'>Red Background Box</Box>
```

### Font Size

Font size can be set on the Text component using the size prop.
Numbers from 0 to 6 will use values from the global type scale,
where 0 is the largest value and 6 is the smallest.

```jsx
<Text size={3}>Text</Text>
```

Larger numbers will use the number as a raw pixel value.

```jsx
<Text size={72}>72px Text</Text>
```

### Typography

Other typographic style can be set with the following props.

```jsx
<Text bold>Bold Text</Text>
<Text center>Centered Text</Text>
<Text left>Left-Aligned Text</Text>
<Text right>Right-Aligned Text</Text>
<Text justify>Justified Text</Text>
<Text caps>Capitalized Text</Text>
```

### Responsive Widths

Responsive widths can be set by passing an array instead of a number.
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

### Responsive Margin and Padding

Responsive margin and padding can also be set using arrays.

```jsx
<Box
  p={[ 1, 2, 3, 4 ]}
  m={[ 0, 2 ]}
/>
```

### Responsive Font Sizes

Responsive font sizes work the same.

```jsx
<Text
  is='h2'
  size={[
    3, // 24px for all screens
    2, // 32px at the small breakpoin
    1, // 48px at the medium breakpoint
    96 // Set raw pixel values for one-one styling situations
  ]}>
  Responsive Heading
</Text>
```

### Shorthand Props

Margin, padding, and color props support shorthand boolean props.

```jsx
<Box p2 mb3 white bgBlue>
  Padded blue box
</Box>
```

### Creating Custom Components

While the Text and Box components can be used on their own, they are intended to be used as base components for creating application-specific UI components.

```jsx
import { Box, Text, colors } from 'axs'

const Label = props => (
  <Text
    mb1
    is='label'
    size={5}
    gray6
    {...props}
  />
)

const Input = props => (
  <Box
    is='input'
    type='text'
    p1
    rounded
    borderColor='gray3'
    display='block'
    width={1}
    {...props}
    css={{
      fontFamily: 'inherit',
      fontSize: 'inherit',
      color: 'inherit',
      backgroundColor: 'transparent',
      WebkitAppearance: 'none',
      appearance: 'none',
      ':focus': {
        outline: 'none',
        borderColor: colors.blue
      },
      ...props.css
    }}
  />
)
```

## Docs

For more detailed documentation see:

- [Props API](docs/api.md)
- [Configuration](docs/configuration.md)
- [Higher Order Component](docs/hoc.md)
- [Server Side Rendering](docs/server.md)


## Component Primitives

In addition to Box and Text, the following primitive components can be imported.

### Text Components

- `<Heading />` - h1–h6 elements - use the `level` prop to set the headings's rank

### Box Components

- `<Block />` - Box with display block
- `<InlineBlock />` - Box with display inline-block
- `<Inline />` - Box with display inline
- `<Flex />` - Box with display flex


## Differences from Rebass

While Rebass aims to be a configurable one-size-fits-all approach to UI development, Axs is intended as a base starting point for building highly-customized, application-specific component libraries.
Unlike Rebass, which uses inline styles, Axs is built on top of cxs to allow the use of encapsulated CSS to handle things like media queries and pseudoclasses.

## Differences from jsxstyle

While Asx's API is similar to jsxstyle,
Axs aims to help in creating consistent layout,
typographic, and color systems through the use of scales and color palettes.
Axs also offers several shorthand styling props for faster development.

## Future Development Considerations

- [ ] Test CSS custom properties configurations
- [ ] axs-ui library
  - [ ] Flexbox props
  - [ ] Element reset style objects
- [ ] Plugin architecture for style props

## Related

- [cxs](https://github.com/jxnblk/cxs)
- [Rebass](http://jxnblk.com/rebass)
- [Reflexbox](http://jxnblk.com/reflexbox)
- [cxs-components](https://github.com/jxnblk/cxs-components)
- [Basscss](http://basscss.com)
- [jsxstyle](https://github.com/smyte/jsxstyle)
- [glamor](https://github.com/smyte/jsxstyl://github.com/threepointone/glamor)
- [open-color](https://yeun.github.io/open-color/)

[MIT License](LICENSE.md)

