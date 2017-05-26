const addpx = require('add-px-to-style')

const compose = (...fns) => {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

const px = key => val => addpx(key, val)
const k = (...k) => p => k.reduce((a, b) => a || p[b], null)
const w = n => n > 1 ? n : (n * 100) + '%'
const scale = [ 0, 8, 16, 32, 64 ]
const sx = n => scale[n] || n
const neg = n => n < 0
const x = n => sx(Math.abs(n)) * (neg(n) ? -1 : 1)
const val = v => typeof v !== 'undefined' ? v : null

const width = compose(val, w, k('width', 'w'))

const margin = compose(val, px('margin'), x, k('margin', 'm'))
const marginTop = compose(val, px('marginTop'), x, k('marginTop', 'mt', 'my'))
const marginBottom = compose(val, px('marginBottom'), x, k('marginBottom', 'mb', 'my'))
const marginLeft = compose(val, px('marginLeft'), x, k('marginLeft', 'ml', 'mx'))
const marginRight = compose(val, px('marginRight'), x, k('marginRight', 'mr', 'mx'))

const padding = compose(val, px('padding'), x, k('padding', 'p'))
const paddingTop = compose(val, px('paddingTop'), x, k('paddingTop', 'pt', 'py'))
const paddingBottom = compose(val, px('paddingBottom'), x, k('paddingBottom', 'pb', 'py'))
const paddingLeft = compose(val, px('paddingLeft'), x, k('paddingLeft', 'pl', 'px'))
const paddingRight = compose(val, px('paddingRight'), x, k('paddingRight', 'pr', 'px'))

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
