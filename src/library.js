const dxs = require('dxs')

const config = [
  {
    name: 'Box',
    type: 'div',
    props: {},
    style: {}
  },
  {
    name: 'Flex',
    type: 'div',
    props: {},
    style: props => ({
      display: 'flex',
      alignItems: props.align,
      justifyContent: props.justify,
      flexWrap: props.wrap ? 'wrap' : null,
    })
  },
  {
    name: 'Text',
    type: 'div',
    props: {},
    style: props => ({
      textAlign: props.align,
      fontWeight: props.bold ? 'bold' : null
    })
  },
  {
    name: 'Heading',
    type: 'Text',
    props: {
      is: 'h2',
      lineHeight: '1.25',
      mt: 0,
      mb: 0,
    },
    style: props => ({
      lineHeight: props.lineHeight
    })
  },
  {
    name: 'Button',
    type: 'button',
    props: {
      f: 'inherit',
      m: 0,
      py: 12,
      px: 24,
      color: 'inherit',
      backgroundColor: 'transparent',
    },
    style: props => ({
      display: 'inline-flex',
      fontFamily: 'inherit',
      textAlign: 'center',
      lineHeight: 1.25,
      border: 0,
      borderRadius: 0,
      textDecoration: 'none',
      appearance: 'none'
    })
  },
  {
    name: 'Color',
    type: 'Box',
    props: {},
    style: {}
  },
  {
    // temp
    name: 'Border',
    type: 'Box',
    props: {},
    style: {}
  },
]

module.exports = dxs(config)
