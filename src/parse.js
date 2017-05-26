const assign = require('object-assign')
const { compose, num } = require('./util')

const parseWidth = props => {
  if (!num(props.w) && !num(props.width)) return props
  const width = props.width || props.w
  delete props.w
  return assign({}, props, {
    width: w(width)
  })
}

const w = n => n > 1 ? n : (n * 100) + '%'

const SHRE = /^[mp][trblxy]?$/
const parseShorthands = props => {
  for (let key in props) {
    if (!SHRE.test(key)) continue
    const val = props[key]
    const longs = shorthands[key] || []
    delete props[key]

    longs.forEach(prop => {
      props[prop] = val
    })
  }
  return props
}

const BRE = /^[mp][trblxy]?-?[0-9]/
const parseBools = props => {
  for (let key in props) {
    if (!BRE.test(key) || props[key] !== true) continue
    getNumberValue(key)
      .forEach(style => {
        props[style.key] = style.value
      })
    delete props[key]
  }
  return props
}

const getNumberValue = key => {
  const [ num ] = key.match(/\d/)
  const isNeg = /-/.test(key)
  const [ short ] = key.match(/^[a-z]+/)
  const n = parseInt(num) * (isNeg ? -1 : 1)
  const keys = shorthands[short] || []
  return keys.map(k => ({
    key: k,
    value: n
  }))
}

const shorthands = {
  m: [ 'margin' ],
  mt: [ 'marginTop' ],
  mr: [ 'marginRight' ],
  mb: [ 'marginBottom' ],
  ml: [ 'marginLeft' ],
  mx: [ 'marginLeft', 'marginRight' ],
  my: [ 'marginTop', 'marginTop' ],
  p: [ 'padding' ],
  pt: [ 'paddingTop' ],
  pr: [ 'paddingRight' ],
  pb: [ 'paddingBottom' ],
  pl: [ 'paddingLeft' ],
  px: [ 'paddingLeft', 'paddingRight' ],
  py: [ 'paddingTop', 'paddingBottom' ]
}

const SRE = /^(margin|padding)/
const scale = [
  0,
  8,
  16,
  32,
  64
]
const neg = n => n < 0
const sx = n => scale[n] || n
const x = n => sx(Math.abs(n)) * (neg(n) ? -1 : 1)
const parseSpace = props => {
  for (let key in props) {
    if (!SRE.test(key)) continue
    props[key] = x(props[key])
  }
  return props
}

module.exports = compose(
  parseWidth,
  parseSpace,
  parseShorthands,
  parseBools
)
