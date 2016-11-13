
// Replace with configurable function
import { scale } from './default-config'

export const MARGIN_REG = /^m[a-z]?-?\d$/
export const PADDING_REG = /^p[a-z]?\d$/

const getScale = n => {
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

const createDirectionalStyle = prop => i => direction => {
  const key = prop + '-' + direction
  const value = getScale(i)
  return { [key]: value }
}

const parseScaleProp = prop => key => {
  const [, d, n, n2 ] = key.split('')
  if (isNum(d)) {
    return { [prop]: getScale(int(d)) }
  }

  const dirs = directions[d] || []
  const i = n2 && n === '-' ? - int(n2) : int(n)

  const style = Object.assign({},
    ...dirs.map(createDirectionalStyle(prop)(i))
  )

  return style
}

export const parseMargin = parseScaleProp('margin')
export const parsePadding = parseScaleProp('padding')

