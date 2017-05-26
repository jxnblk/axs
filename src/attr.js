const { compose, val, px, w, x, k } = require('./util')

const arr = fn => v => !Array.isArray(v) ? fn(v) : v.map(fn)

const width = compose(arr(compose(w, val)), k('width', 'w'))

const margin = compose(px('margin'), x, val, k('margin', 'm'))
const marginTop = compose(px('marginTop'), x, val, k('marginTop', 'mt', 'my'))
const marginBottom = compose(px('marginBottom'), x, val, k('marginBottom', 'mb', 'my'))
const marginLeft = compose(px('marginLeft'), x, val, k('marginLeft', 'ml', 'mx'))
const marginRight = compose(px('marginRight'), x, val, k('marginRight', 'mr', 'mx'))

const padding = compose(px('padding'), x, val, k('padding', 'p'))
const paddingTop = compose(px('paddingTop'), x, val, k('paddingTop', 'pt', 'py'))
const paddingBottom = compose(px('paddingBottom'), x, val, k('paddingBottom', 'pb', 'py'))
const paddingLeft = compose(px('paddingLeft'), x, val, k('paddingLeft', 'pl', 'px'))
const paddingRight = compose(px('paddingRight'), x, val, k('paddingRight', 'pr', 'px'))

module.exports = {
  width,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}
