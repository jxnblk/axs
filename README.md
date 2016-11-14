
# Axs

~~React UI component primitive toolkit~~

Responsive typography and layout system for React

Built with [cxs](https://github.com/jxnblk/cxs)
and inspired by [Basscss](http://basscss.com) and
[jsxstyle](https://github.com/smyte/jsxstyle)

```sh
npm i axs
```

Axs consists of two core primitive components, Box and Text.

```js
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

```js
<Box>Generic div</Box>
<Text>Paragraph element</Text>
```

The rendered element can be changed with the `is` prop.

```js
<Box is='button'>Box with custom tag</Box>
<Text is='h1'>h1 element</Text>
```

Control padding, margin, color and other styles with shorthand styling props.

```js
<Box p2 white bgBlue>
  <Text bold>Box</Text>
</Box>
```

Set responsive styles for margin, padding, font-size, and width with array values.

```js
<Box p={[2, null, 3, 4]}>
  Padding changes across different breakpoints
</Box>
```

## Features

- Fully responsive styles
- Handles many common styling concerns
- Encapsulates styles with hashed classnames
- Supports pseudoclasses, media queries, and keyframes
- Works with server-side rendering
- Consistent styles with a type scale, spacing scale, and default color palette
- No need to maintain separate stylesheets - components become the base unit of measurement for UI concerns

## Props

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

Negative values are also supported for margin.
E.g. `m={-1}`

#### Colors

Includes all colors from [open-color](https://github.com/yeun/open-color)

- `color` - (string) sets foreground color either by a key from the color object or a valid color value
- `bg` - (string) sets background color
- `borderColor` - (string) sets border color

### Box-specific Props

The following props are available only on Box components.

#### Padding

- `p`  - number or array) padding from a scale from 0 to 4
- `pt` - number or array) padding top
- `pr` - number or array) padding right
- `pb` - number or array) padding bottom
- `pl` - number or array) padding left
- `px` - number or array) padding left and right
- `py` - number or array) padding left and right

#### Width

- `width` - percentage width as a number from 0 - 1
  - The `width` prop also accepts an array of numbers to map to the breakpoints - e.g. `w={[1, 1/2, 1/3]}` will set base width and widths for the first and second breakpoints.
  - `sm` - percentage width as a number from 0 - 1 from the small breakpoint and up
  - `md` - percentage width as a number from 0 - 1 from the medium breakpoint and up
  - `lg` - percentage width as a number from 0 - 1 from the large breakpoint and up

#### Display

- `display` - sets display

#### Borders

- `border` - one of `true`, `false`, Number, `'top'`, `'right'`, `'bottom'`, or `'left'`
- `borderColor`

#### Border Radii

- `rounded` - one of `true`, `false`, `'top'`, `'right'`, `'bottom'`, or `'left'`

### Text-Specific Props

- `size` - (number or array) sets font size based on the typographic scale (0–6)
- `bold` - sets font weight bold
- `center` - center aligns text
- `left` - left align
- `right` - right align
- `justify` - justifies text
- `caps` - sets text-transform uppercase and adds tracking (letter-spacing)

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

In addition to Box and Text, the following components can be imported.

### Text Components

- `<Heading />` - h1–h6 elements - use the `level` prop to set the headings's rank

### Box Components

- `<Block />` - Box with display block
- `<InlineBlock />` - Box with display inline-block
- `<Inline />` - Box with display inline
- `<Flex />` - Box with display flex

## Higher Order Components

Axs style props can be added to any component using the higher order components.

```js
import { Link } from 'react-router'
import { withBox, withText } from 'axs'

const SuperLink = withText(Link)
```

## Configuration

Custom configurations can be set with React context

```js
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

When rendering client-side, cxs will automatically insert a style tag into the head. For server-side rendering, get the CSS string from cxs after render.

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

---

## Notes

- [ ] Add support for pixel values in width, padding, etc?

