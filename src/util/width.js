
import parseArrayValue from './parse-array-value'

export const WIDTH_REG = /^width$/

const w = n => (n * 100) + '%'

const createWidth = n => n !== null ? ({
  width: n > 1 ? n : w(n)
}) : null

export const getWidth = (breakpoints) => val => {
  if (Array.isArray(val)) {
    const widths = parseArrayValue(breakpoints)(val)(createWidth)
    return widths
  }

  return createWidth(val)
}

