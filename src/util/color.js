
export const COLOR_REG = /^color$/
export const BG_REG = /^bg$/
export const BORDER_COLOR_REG = /^borderColor$/

export const getColorProp = prop => (config) => (key, val) => {
  const { colors } = config
  const value = colors[val] || val

  return { [prop]: value }
}

export const getColor = getColorProp('color')
export const getBgColor = getColorProp('backgroundColor')
export const getBorderColor = getColorProp('borderColor')

