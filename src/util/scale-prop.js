
import defaultConfig from './default-config'
import parseArrayValue from './parse-array-value'

export const MARGIN_REG = /^(m[trblxy]?)$/
export const PADDING_REG = /^p[trblxy]?$/

const getScale = scale => n => {
  if (typeof n === 'string') {
    return n
  }
  const multiplier = isNeg(n) ? -1 : 1
  const i = Math.abs(n)
  const val = (scale[i] || i) * multiplier
  return val
}

const directionKeys = {
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

const createStyle = (prop, config, directions) => (val) => {
  const value = getScale(config.scale)(val)
  const style = Object.assign({},
    ...directions.map(createDirectionStyle(prop, value))
  )
  return style
}

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const createDirectionStyle = (prop, value) => direction => {
  const key = direction ? prop + capitalize(direction) : prop
  return { [key]: value }
}

const parseScaleProp = prop => config => (key, val) => {
  const d = key.charAt(1)

  const dirs = directionKeys[d] || [null]

  if (Array.isArray(val)) {
    return parseArrayValue(config.breakpoints)(val)(createStyle(prop, config, dirs))
  }

  const value = getScale(config.scale)(val)
  const style = Object.assign({},
    ...dirs.map(createDirectionStyle(prop, value))
  )

  return style
}

export const parseMargin = parseScaleProp('margin')
export const parsePadding = parseScaleProp('padding')

