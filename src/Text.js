const h = require('react').createElement
const Box = require('./Box')
const { idx } = require('./util')

const Text = ({
  bold,
  center,
  ...props
}, context) => h(Box, {
  ...props,
  css: {
    ...props.css,
    fontWeight: bold
      ? (idx([ 'axs', 'bold' ], context) || 700)
      : idx([ 'css', 'fontWeight' ], props),
    textAlign: center ? 'center' : null
  }
})

module.exports = Text
