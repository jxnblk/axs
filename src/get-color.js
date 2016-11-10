
const cap = str => str.charAt(0).toUpperCase() + str.slice(1)

const strip = str => str
  .replace(/^bg/, '')
  .replace(/^border/, '')
  .toLowerCase()

export const colors = {
  white: '#fff',
  black: '#000',
  blue: '#07c',
  green: '#0c7',
  red: '#c70',
}

export const COLOR_REG = new RegExp('^(' + Object.keys(colors).join('|') + ')$')

export const BG_REG = new RegExp(
`^(${Object.keys(colors)
  .map(c => 'bg' + cap(c))
  .join('|')})$`
)

export const BORDER_COLOR_REG = new RegExp(
`^(${Object.keys(colors)
  .map(c => 'border' + cap(c))
  .join('|')})$`
)

export const getColorProp = prop => key => ({
  [prop]: colors[strip(key)]
})

export const getColor = getColorProp('color')
export const getBgColor = getColorProp('background-color')
export const getBorderColor = getColorProp('border-color')

