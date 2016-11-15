
import parseArrayValue from './parse-array-value'

export const WIDTH_REG = /^width$/

const w = n => (n * 100) + '%'

const createWidth = n => n !== null ? ({
  width: w > 1 ? w : w(n)
}) : null

export const getWidth = (breakpoints, i) => val => {
  if (Array.isArray(val)) {
    const widths = parseArrayValue(breakpoints)(val)(createWidth)
    return widths
  }

  const breakpoint = breakpoints[i]
  const width = w(val)

  if (!breakpoint) {
    return { width }
  }

  return {
    [breakpoint]: { width }
  }
}

