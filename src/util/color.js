
import defaultConfig from './default-config'

const cap = str => str.charAt(0).toUpperCase() + str.slice(1)

const strip = str => str
  .replace(/^bg/, '')
  .replace(/^border/, '')
  .toLowerCase()

export const COLOR_REG = /^color$/
export const BG_REG = /^(bg|bg[A-Z][a-z]+)$/
export const BORDER_COLOR_REG = /^(border|border[A-Z][a-z]+)$/

export const isColor = config => key => {
  const colors = {
    ...defaultConfig.colors,
    ...config.colors
  }
  const name = strip(key)
  return !!colors[name]
}

export const getColorProp = prop => (config) => (key, val) => {
  const colors = {
    ...defaultConfig.colors,
    ...config.colors
  }
  return { [prop]: colors[strip(key)] || val }
}

export const getColor = getColorProp('color')
export const getBgColor = getColorProp('background-color')
export const getBorderColor = getColorProp('border-color')

