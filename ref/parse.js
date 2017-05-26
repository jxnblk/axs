// Doesn't work with styled-components API
const assign = require('object-assign')
const { compose, width } = require('./util')

const neg = n => n < 0
const num = n => typeof n === 'number' && !isNaN(n)

const parseWidth = props => {
  if (!num(props.w) && !num(props.width)) return props
  const n = props.width || props.w
  delete props.w
  return assign({}, props, {
    width: width(n)
  })
}


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
  const next = {}
  for (let key in props) {
    if (!BRE.test(key) || props[key] !== true) {
      next[key] = props[key]
      continue
    }
    getNumberValue(key)
      .forEach(style => {
        next[style.key] = style.value
      })
  }
  return next
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
