
import parseArrayValue from './parse-array-value'

export const FONTSIZE_REG = /^size$/

const createFontSize = typeScale => val => val !== null ? ({
  fontSize: typeScale[val] || val
}) : null

export const getFontSize = config => (key, val) => {
  const { breakpoints, typeScale } = config

  if (val === null) {
    return null
  }

  if (Array.isArray(val)) {
    return parseArrayValue(breakpoints)(val)(createFontSize(typeScale))
  }

  return createFontSize(typeScale)(val)
}

