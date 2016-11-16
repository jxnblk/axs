
![Axs](/docs/miniaxs.png?raw=true)

# Axs

A build-your-own responsive typography and layout UI toolkit for React

[![Build Status](https://travis-ci.org/jxnblk/axs.svg?branch=master)](https://travis-ci.org/jxnblk/axs)

Built with [cxs](https://github.com/jxnblk/cxs)
and inspired by [Basscss](http://basscss.com) and
[jsxstyle](https://github.com/smyte/jsxstyle)

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
    {...props}
    css={{
      display: 'block',
      width: '100%',
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

## Props API

The following props are available on both Box and Text components.

- `css` - style object for cxs - will be converted into a unique className and inject styles into the head of the document. Supports pseudoclasses, media queries, keyframes, and nesting.
- `is` - sets a custom tag or component

#### Margin

Sets margin based on the spacing scale (0–4).
Number values set a margin for all breakpoints.
Use an array for responsive margin styles,
starting from no media query, then setting each breakpoint above.
E.g. `m={[0, 1, 2, 3]}` will set margin 0 then 1, 2, and 3 for the breakpoints from small to large.

- `m`  - (number or array) margin from a scale from 0 to 4
- `mt` - (number or array) margin top
- `mr` - (number or array) margin right
- `mb` - (number or array) margin bottom
- `ml` - (number or array) margin left
- `mx` - (number or array) margin left and right
- `my` - (number or array) margin left and right

- Negative values are also supported for margin.  E.g. `m={-1}`
- Numbers greater than 4 will be converted to their pixel equivalent.

#### Padding

- `p`  - (number or array) padding from a scale from 0 to 4
- `pt` - (number or array) padding top
- `pr` - (number or array) padding right
- `pb` - (number or array) padding bottom
- `pl` - (number or array) padding left
- `px` - (number or array) padding left and right
- `py` - (number or array) padding left and right

#### Colors

Includes all colors from [open-color](https://github.com/yeun/open-color)

- `color` - (string) sets foreground color either by a key from the color object or a valid color value
- `bg` - (string) sets background color
- `borderColor` - (string) sets border color

### Box-specific Props

The following props are available only on Box components.

#### Width

- `width` - (number or array) percentage width as a number from 0 - 1
- The `width` prop also accepts an array of numbers to map to the breakpoints - e.g. `w={[1, 1/2, 1/3]}` will set base width and widths for the first and second breakpoints.
- Setting a number value above 1 will use the raw pixel value of that number

#### Display

- `display` - (string) sets display

#### Borders

- `border` - (string or boolean) sets a 1px border - one of `true`, `false`, Number, `'top'`, `'right'`, `'bottom'`, or `'left'`
- `borderColor` - (string) sets border color based on a color scheme key or raw value

#### Border Radii

- `rounded` - (string or boolean) sets border radius - one of `true`, `false`, `'top'`, `'right'`, `'bottom'`, or `'left'`

### Text-Specific Props

The following props only work on Text components.

- `size` - (number or array) sets font size based on the typographic scale (0–6)
- `bold` - (boolean) sets font weight bold
- `center` - (boolean) center aligns text
- `left` - (boolean) left align
- `right` - (boolean) right align
- `justify` - (boolean) justifies text
- `caps` - (boolean) sets text-transform uppercase and adds tracking (letter-spacing)

### Shorthand Props

Scaled-based props (margin and padding) and color props
can be set using a shorthand boolean prop.
For example, `m1` is equivalent to `m={1}`
and `px3` is equivalent to `px={3}`.

#### Shorthand Color Props

The following boolean props are shorthands for setting the `color` prop. E.g. `white` is equivalent to `color='white'`.

- `white`
- `black`
- `gray` - `gray0` - `gray9`
- `red` - `red0` - `red9`
- `pink` - `pink0` - `pink9`
- `grape` - `grape0` - `grape9`
- `violet` - `violet0` - `violet9`
- `indigo` - `indigo0` - `indigo9`
- `blue` - `blue0` - `blue9`
- `cyan` - `cyan0` - `cyan9`
- `teal` - `teal0` - `teal9`
- `green` - `green0` - `green9`
- `lime` - `lime0` - `lime9`
- `yellow` - `yellow0` - `yellow9`
- `orange` - `orange0` - `orange9`

#### Shorthand Background and Border Color Props

Prefix the color name with `bg` to set background color.
E.g. `bgBlack`

Prefix the color name with `border` to set border color.
E.g. `borderBlue`

## Component Primitives

In addition to Box and Text, the following primitive components can be imported.

### Text Components

- `<Heading />` - h1–h6 elements - use the `level` prop to set the headings's rank

### Box Components

- `<Block />` - Box with display block
- `<InlineBlock />` - Box with display inline-block
- `<Inline />` - Box with display inline
- `<Flex />` - Box with display flex

## Higher Order Components

Axs style props can be added to any component using the higher order components.

```jsx
import { Link } from 'react-router'
import { withBox, withText } from 'axs'

const SuperLink = withText(Link)
```

## Configuration

Custom configurations can be set with React context

```jsx
class App extends React.Component {
  getChildContext () {
    return {
      axs: axsConfig
    }
  }
}

App.childContextTypes = {
  axs: React.PropTypes.object
}

const axsConfig = {
  breakpoints: [
    '(min-width:40em)',
    '(min-width:48em)',
    '(min-width:56em)'
  ].map(w => `@media screen and ${w}`),
  typeScale: [
    72, 48, 36, 24, 18, 16, 12
  ],
  scale: [
    0, 6, 12, 24, 48
  ],
  radius: 3,
  bold: 600
}
```

## Server Side Rendering

When rendering client-side, cxs will automatically insert a style tag into the head.
For server-side rendering, get the CSS string from cxs after render.

```js
const React = require('react')
const { renderToString } = require('react-dom/server')
const { cxs } = require('axs')
const App = require('./App')

module.exports = (req, res) => {
  const html = renderToString(React.createElement(App))
  const css = cxs.css

  // Reset the cache for other page renders
  cxs.clear()
  cxs.sheet.flush()

  return `<!DOCTYPE html>
  <style>${css}</style>
  ${html}`
}
```

## Differences from Rebass

While Rebass aims to be a configurable one-size-fits-all approach to UI development, Axs is intended as a base starting point for building highly-customized, application-specific component libraries.
Unlike Rebass, which uses inline styles, Axs is built on top of cxs to allow the use of encapsulated CSS to handle things like media queries and pseudoclasses.

## Differences from jsxstyle

While Asx's API is similar to jsxstyle,
Axs aims to help in creating consistent layout,
typographic, and color systems through the use of scales and color palettes.
Axs also offers several shorthand styling props for faster development.

## Future Development Considerations

- [ ] Look into alternatives to React context for config
  - [ ] CSS custom properties
  - [ ] Config store
- [ ] Element reset style objects
- [ ] Theme/Config/Context provider component
- [ ] Flexbox props

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

