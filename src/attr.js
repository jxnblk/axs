const {
  compose,
  arr,
  map,
  val,
  px,
  wx,
  scale,
  k
} = require('./util')

const reg = (...args) => new RegExp(args.join(''))

const findShorthand = (s, props) => Object.keys(props)
  .find(k => reg('^', s, '-?[0-9]').test(k))

const getNum = key => key.match(/\d/)[0]

const sh = (s, key) => props => {
  const prop = findShorthand(s, props)
  if (props[prop] !== true) return props
  const num = getNum(prop)
  const neg = /-/.test(prop)
  props[key] = parseInt(num) * (neg ? -1 : 1)
  return props
}

const width = compose(
  map(wx),
  arr,
  k('width', 'w'),
  sh('w', 'width')
)

const margin = compose(
  map(px('margin')),
  map(scale),
  arr,
  k('margin', 'm'),
  sh('m', 'margin')
)

const marginTop = compose( map(px('marginTop')), map(scale), arr, k('marginTop', 'mt', 'my'), sh('mt', 'marginTop'))
const marginBottom = compose( map(px('marginBottom')), map(scale), arr, k('marginBottom', 'mb', 'my'), sh('mb', 'marginBottom'))
const marginLeft = compose( map(px('marginLeft')), map(scale), arr, k('marginLeft', 'ml', 'mx'), sh('ml', 'marginLeft'))
const marginRight = compose( map(px('marginRight')), map(scale), arr, k('marginRight', 'mr', 'mx'), sh('mr', 'marginRight'))

const padding = compose( map(px('padding')), map(scale), arr, k('padding', 'p'), sh('p', 'padding'))
const paddingTop = compose( map(px('paddingTop')), map(scale), arr, k('paddingTop', 'pt', 'py'), sh('pt', 'paddingTop'))
const paddingBottom = compose( map(px('paddingBottom')), map(scale), arr, k('paddingBottom', 'pb', 'py'), sh('pb', 'paddingBottom'))
const paddingLeft = compose( map(px('paddingLeft')), map(scale), arr, k('paddingLeft', 'pl', 'px'), sh('pl', 'paddingLeft'))
const paddingRight = compose( map(px('paddingRight')), map(scale), arr, k('paddingRight', 'pr', 'px'), sh('pr', 'paddingRight'))

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
