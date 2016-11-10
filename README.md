
# Bocxs

React component primitives built with
[cxs](https://github.com/jxnblk/cxs)
and inspired by
[Basscss](http://basscss.com)

```sh
npm i bocxs
```

```js
// Basic example
import React from 'react'
import { Box } from 'bocxs'

const App = () => (
  <Box p2 mb2 border>
    <h1>Box with padding, margin bottom, and border</h1>
  </Box>
)
```

```js
// Primitives
import {
  Base,
  Box,
  Block,
  InlineBlock,
  Inline,
  Flex
} from 'bocxs'
```

```js
<Block>Display block div</Block>
```

```js
<InlineBlock>Display inline block div</InlineBlock>
```

```js
<Inline>Display inline div</Inline>
```

```js
<Flex>Display flex div</Flex>
```

```js
<Box>Generic Bocxs div</Box>
```

```js
<Base is='button'>Base element</Base>
```

## Props

### Booleans
- `m0` - `m4` - margin from a scale from 0 to 4
- `mt0` - `mt4` - margin top
- `mr0` - `mr4` - margin right
- `mb0` - `mb4` - margin bottom
- `ml0` - `ml4` - margin left
- `mx0` - `mx4` - margin left and right
- `my0` - `my4` - margin left and right

- `m-1` - `m-4` - negative margin from a scale from 0 to 4
- `mt-1` - `mt-4` - negative margin top
- `mr-1` - `mr-4` - negative margin right
- `mb-1` - `mb-4` - negative margin bottom
- `ml-1` - `ml-4` - negative margin left
- `mx-1` - `mx-4` - negative margin left and right
- `my-1` - `my-4` - negative margin left and right

- `p0` - `p4` - padding from a scale from 0 to 4
- `pt0` - `pt4` - padding top
- `pr0` - `pr4` - padding right
- `pb0` - `pb4` - padding bottom
- `pl0` - `pl4` - padding left
- `px0` - `px4` - padding left and right
- `py0` - `py4` - padding left and right

**WIP**

- `white` - sets colors
- `black` - sets colors
- `blue` - sets colors
- `red` - sets colors
- `green` - sets colors

### Numbers

- `w` - percentage width as a number from 0 - 1
- `sw` - percentage width as a number from 0 - 1 from the small breakpoint and up
- `mw` - percentage width as a number from 0 - 1 from the medium breakpoint and up
- `lw` - percentage width as a number from 0 - 1 from the large breakpoint and up

### Strings

- `display` - sets display

### Borders

- `border` - one of `true`, `false`, Number, `'top'`, `'right'`, `'bottom'`, or `'left'`
- `borderColor`

## Server Side Rendering

When rendering client-side, cxs will automatically insert a style tag into the head. For server-side rendering, get the CSS string from cxs after render.

```js
const React = require('react')
const { renderToString } = require('react-dom/server')
const { cxs } = require('cxs')
const App = require('./App')

module.exports = (req, res) => {
  const html = renderToString(React.createElement(App))
  const css = cxs.css

  return `<!DOCTYPE html>
  <style>${css}</style>
  ${html}`
}
```

## Higher Order Component

Bocxs style props can be added to any component using the higher order component.

```js
import React from 'react'
import { Link } from 'react-router'
import { withBocxs } from 'bocxs'

const CustomLink = (props) => (
  <Link {...props} />
)

export default withBocxs(CustomLink)
```

MIT License
