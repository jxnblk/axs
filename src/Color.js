const h = require('react').createElement
const Box = require('./Box')
const { idx, radius } = require('./util')
const config = require('./config')

const Color = ({
  color,
  backgroundColor,
  rounded,
  ...props
}, context) => {
  const r = idx([ 'axs', 'radius' ], context) || config.radius

  return h(Box, {
    ...props,
    css: {
      ...props.css,
      color,
      backgroundColor,
      borderRadius: radius(r)(rounded)
    }
  })
}

module.exports = Color
