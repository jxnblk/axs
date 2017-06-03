const h = require('react').createElement
const Box = require('./Box')
const { idx, radius } = require('./util')
const config = require('./config')

const Border = ({
  color,
  top,
  right,
  bottom,
  left,
  rounded,
  ...props
}, context) => {
  const all = (!top && !right && !bottom && !left)
  const r = idx([ 'axs', 'radius' ], context) || config.radius

  return h(Box, {
    ...props,
    css: {
      ...props.css,
      borderStyle: 'solid',
      borderColor: color,
      borderTopWidth: (all || top) ? 1 : 0,
      borderRightWidth: (all || right) ? 1 : 0,
      borderBottomWidth: (all || bottom) ? 1 : 0,
      borderLeftWidth: (all || left) ? 1 : 0,
      borderRadius: radius(r)(rounded)
    }
  })
}

module.exports = Border
