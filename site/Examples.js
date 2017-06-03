const x = require('reaxe')
const { connect } = require('funcup')
const axs = require('axs')
const {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} = require('react-live')
const prismcss = require('css-loader!prismjs/themes/prism-funky.css')
const {
  Box,
  Color,
  Flex,
  Heading,
  Text,
  Border
} = axs
const Style = require('./Style')

module.exports = connect()(props => {
  const scope = Object.assign({}, axs, {
    color: props.color
  })

  return x(Box)({
    my: 4
  }, ...[
    x(Style)({ css: `${prismcss}.prism-code{tab-size:2}` }),
    x(Heading)({ f: 2 }, 'Examples'),
    ...examples.map((eg => x(Box)({ id: eg.name, my: 4 }, ...[
      x(Heading)({
        is: 'h3',
        mb: 2,
        css: {
          color: props.color[5]
        }
      }, [
        x(Text)({
          is: 'a',
          href: '#' + eg.name,
          css: {
            color: 'inherit',
            textDecoration: 'none'
          }
        }, eg.name)
      ]),
      x(Border)({
        rounded: true,
        color: props.color[1],
        css: {
          position: 'relative'
        }
      }, ...[
        x(LiveProvider)({
          code: eg.code,
          scope,
          mountStylesheet: false
        }, ...[
          x(LivePreview)(),
          x(LiveEditor)({
            style: {
              fontFamily: 'SF Mono, Menlo, monospace',
              fontSize: 13,
              lineHeight: 1.5,
              margin: 0,
              padding: 16,
              WebkitFontSmoothing: 'antialiased',
              color: 'white',
              backgroundColor: props.color[9],
              outline: 'none'
            }
          }),
          x(LiveError)({
            style: {
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              padding: 16,
              fontFamily: 'SF Mono, Menlo, monospace',
              fontSize: 12,
              lineHeight: 1.5,
              color: 'white',
              backgroundColor: 'red',
              overflow: 'auto'
            }
          }),
        ])
      ])
    ])))
  ])
})

const grid = {
  name: 'Responsive Grid',
  code: `<Flex.wrap>
  <Box p2 w={[ 1, 1/2, 1/4 ]}>Box</Box>
  <Box p2 w={[ 1, 1/2, 1/4 ]}>Box</Box>
  <Box p2 w={[ 1, 1/2, 1/4 ]}>Box</Box>
  <Box p2 w={[ 1, 1/2, 1/4 ]}>Box</Box>
</Flex.wrap>`
}

const padding = {
  name: 'Responsive Padding',
  code: `<Box p={[ 1, 2, 3, 4 ]}>
  Hello
</Box>`
}

const fontSize = {
  name: 'Responsive Font Size',
  code: `<Text bold m2 f={[ 3, 2, 1, 0 ]}>
  Hello
</Text>`
}

const media = {
  name: 'Media Object',
  code: `<Flex.center>
  <Box m2>
    <img src='http://placehold.it/128' />
  </Box>
  <Box w={1}>
    <Text f={3}>Hello</Text>
    <Text>
      Try changing the example code below
    </Text>
  </Box>
</Flex.center>`
}

const bar = {
  name: 'Bar Chart',
  code: `<Box f6 p2>
  <Color
    p1
    mb1
    w={1/4}
    color='#fff'
    backgroundColor={color[7]}>
    25%
  </Color>
  <Color
    p1
    w={3/4}
    color='#fff'
    backgroundColor={color[5]}>
    75%
  </Color>
</Box>`
}

const percentage = {
  name: 'Percentage Bar',
  code: `<Flex f6 p2>
  <Color
    p1
    w={3/8}
    color='#fff'
    backgroundColor={color[8]}>
    37.5%
  </Color>
  <Color
    p1
    w={1/4}
    color='#fff'
    backgroundColor={color[6]}>
    25%
  </Color>
  <Color
    p1
    w={1/4}
    color='#fff'
    backgroundColor={color[4]}>
    25%
  </Color>
  <Color
    p1
    w={1/8}
    color='#fff'
    backgroundColor={color[2]}>
    12.5%
  </Color>
</Flex>`
}

const panel = {
  name: 'Panel',
  code: `<Box p2>
  <Border color={color[5]} rounded>
    <Color
      p2
      color='#fff'
      backgroundColor={color[5]}>
      <Text bold>Hello</Text>
    </Color>
    <Box p2>
      Panel
    </Box>
    <Border top f6 p2 color={color[5]}>
      Panel Footer
    </Border>
  </Border>
</Box>`
}

const color = {
  name: 'Color',
  code: `<Box p2>
  <Color
    p3
    f2
    color='#fff'
    backgroundColor={color[5]}
    children='Hello'
  />
</Box>`
}

const border = {
  name: 'Border',
  code: `<Box p2>
  <Border
    p2
    color='#ccc'>
    Try these props: \`top\`, \`right\`, \`bottom\`, \`left\`, and \`rounded\`
  </Border>
</Box>`
}

const card = {
  name: 'Card',
  code: `<Box p2>
  <Box w={256}>
    <Border rounded color='#eee'>
      <Box
        is='img'
        w={1}
        src='http://placehold.it/512'
        css={{
          display: 'block',
          maxWidth: '100%',
          height: 'auto'
        }}
      />
      <Box p1>
        <Text>Hello Card</Text>
      </Box>
    </Border>
  </Box>
</Box>`
}

// footer // nav // embed

const examples = [
  grid,
  padding,
  fontSize,
  color,
  border,
  media,
  bar,
  percentage,
  panel,
  card,
]
