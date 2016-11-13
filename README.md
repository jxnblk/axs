
# axs

React UI component primitive toolkit

Built with [cxs](https://github.com/jxnblk/cxs)
and inspired by [Basscss](http://basscss.com) and
[jsxstyle](https://github.com/smyte/jsxstyle)

```sh
npm i axs
```

```js
// Basic example
import React from 'react'
import { Box, Text } from 'axs'

const App = () => (
  <Box p2 mb2 white bgBlue>
    <Text is='h1' size={2}>
      Box with padding, margin bottom, white text, and blue background
    </Text>
  </Box>
)
```

```js
// Primitives
import {
  Base,
  Box,
  Text,
} from 'axs'
```

```js
<Box>Generic Axs div</Box>
```

```js
<Base is='button'>Base box element</Base>
```

```js
<Text>Paragraph element</Text>
<Text is='h1'>h1 element</Text>
```

## Props

The following props are available on both Box and Text components.

- `css` - style object for cxs - will be converted into a unique className and inject styles into the head of the document. Supports pseudoclasses, media queries, keyframes, and nesting.

#### Margin

Sets margin based on the spacing scale (0–4).
Scalar props can also be set using numbers – e.g. `m={2}`.

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

#### Colors

Includes all colors from [open-color](https://github.com/yeun/open-color)

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
- `color` - pass either a key to one of the colors or a custom value

#### Background Colors

- `bgWhite`
- `bgBlack`
- `bgGray` - `bgGray0` - `bgGray9`
- `bgRed` - `bgRed0` - `bgRed9`
- `bgPink` - `bgPink0` - `bgPink9`
- `bgGrape` - `bgGrape0` - `bgGrape9`
- `bgViolet` - `bgViolet0` - `bgViolet9`
- `bgIndigo` - `bgIndigo0` - `bgIndigo9`
- `bgBlue` - `bgBlue0` - `bgBlue9`
- `bgCyan` - `bgCyan0` - `bgCyan9`
- `bgTeal` - `bgTeal0` - `bgTeal9`
- `bgGreen` - `bgGreen0` - `bgGreen9`
- `bgLime` - `bgLime0` - `bgLime9`
- `bgYellow` - `bgYellow0` - `bgYellow9`
- `bgOrange` - `bgOrange0` - `bgOrange9`
- `bg` - pass either a key to one of the colors or a custom value

### Box-specific Props

The following props are available only on Box components.

#### Padding

- `p0` - `p4` - padding from a scale from 0 to 4
- `pt0` - `pt4` - padding top
- `pr0` - `pr4` - padding right
- `pb0` - `pb4` - padding bottom
- `pl0` - `pl4` - padding left
- `px0` - `px4` - padding left and right
- `py0` - `py4` - padding left and right

#### Width

- `width` - percentage width as a number from 0 - 1
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

- `size0` – `size6` - sets font size based on the typographic scale (0–6)
- `sm0` – `sm6` - sets font size for the small breakpoint and up
- `md0` – `md6` - sets font size for the medium breakpoint and up
- `lg0` – `lg6` - sets font size for the large breakpoint and up
- `bold` - sets font weight bold
- `center` - center aligns text
- `left` - left align
- `right` - right align
- `justify` - justifies text
- `caps` - sets text-transform uppercase and adds tracking (letter-spacing)

## Configuration

```js
const config = {
  breakpoints: [
    '(min-width:40em)',
    '(min-width:48em)',
    '(min-width:56em)'
  ].map(w => `@media screen and ${w}`),
  typeScale: [
    72, 48, 36, 24, 18, 16, 12
  ]
}
```

- context
- ThemeProvider

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

Axs style props can be added to any component using the higher order components.

```js
import React from 'react'
import { Link } from 'react-router'
import { withBox, withText } from 'axs'

const CustomLink = withText(Link)
const CustomBox = withBox('div')

```

## Related

- [cxs](https://github.com/jxnblk/cxs)
- [cxs-components](https://github.com/jxnblk/cxs-components)
- [Basscss](http://basscss.com)
- [jsxstyle](https://github.com/smyte/jsxstyle)
- [glamor](https://github.com/smyte/jsxstyl://github.com/threepointone/glamor)
- [open-color](https://yeun.github.io/open-color/)

MIT License
