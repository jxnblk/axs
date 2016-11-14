
import defaultConfig from './default-config'

export const MARGIN_REG = /^(m|m[trblxy]?|m[a-z]?-?\d)$/
export const PADDING_REG = /^p[a-z]?\d$/

const getScale = scale => n => {
  if (typeof n === 'string') {
    return n
  }
  const multiplier = isNeg(n) ? -1 : 1
  const i = Math.abs(n)
  return scale[i] * multiplier
}

const directions = {
  t: [ 'top' ],
  r: [ 'right' ],
  b: [ 'bottom' ],
  l: [ 'left' ],
  x: [ 'left', 'right' ],
  y: [ 'top', 'bottom' ]
}

const int = s => parseInt(s)

const isNum = str => {
  const n = int(str)
  return typeof n === 'number' && !isNaN(n)
}

const isNeg = n => n < 0

const createDirectionalStyle = scale => prop => i => direction => {
  const key = prop + '-' + direction
  const value = getScale(scale)(i)
  return { [key]: value }
}

const parseScaleProp = prop => config => (key, val) => {
  const scale = config.scale || defaultConfig.scale
  const [, d, n, n2 ] = key.split('')
  if (isNum(d) || isNum(val)) {
    const i = isNum(val) ? val : int(d)
    return { [prop]: getScale(scale)(i) }
  }

  const dirs = directions[d] || []
  const i = isNum(val)
    ? val
    : typeof val === 'string'
    ? val
    : n2 && n === '-' ? - int(n2) : int(n)

  const style = Object.assign({},
    ...dirs.map(createDirectionalStyle(scale)(prop)(i))
  )

  return style
}

export const parseMargin = parseScaleProp('margin')
export const parsePadding = parseScaleProp('padding')

