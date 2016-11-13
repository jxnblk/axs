
// Replace with configurable function
import defaultConfig from './default-config'

export const MARGIN_REG = /^m[a-z]?-?\d$/
export const PADDING_REG = /^p[a-z]?\d$/

const getScale = scale => n => {
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

const parseScaleProp = prop => config => key => {
  const scale = config.scale || defaultConfig.scale
  const [, d, n, n2 ] = key.split('')
  if (isNum(d)) {
    return { [prop]: getScale(scale)(int(d)) }
  }

  const dirs = directions[d] || []
  const i = n2 && n === '-' ? - int(n2) : int(n)

  const style = Object.assign({},
    ...dirs.map(createDirectionalStyle(scale)(prop)(i))
  )

  return style
}

export const parseMargin = parseScaleProp('margin')
export const parsePadding = parseScaleProp('padding')

