
# API

## Props

All Axs components have the following style props.

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

### Width

- `width` - (number or array) percentage width as a number from 0 - 1
- The `width` prop also accepts an array of numbers to map to the breakpoints - e.g. `w={[1, 1/2, 1/3]}` will set base width and widths for the first and second breakpoints.
- Setting a number value above 1 will use the raw pixel value of that number

### Display

- `display` - (string) sets display

### Borders

- `border` - (string or boolean) sets a 1px border - one of `true`, `false`, Number, `'top'`, `'right'`, `'bottom'`, or `'left'`
- `borderColor` - (string) sets border color based on a color scheme key or raw value

### Border Radii

- `rounded` - (string or boolean) sets border radius - one of `true`, `false`, `'top'`, `'right'`, `'bottom'`, or `'left'`

### Typography

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

