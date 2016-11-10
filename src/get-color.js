
import openColor from 'open-color/open-color.json'
const cap = str => str.charAt(0).toUpperCase() + str.slice(1)

const strip = str => str
  .replace(/^bg/, '')
  .replace(/^border/, '')
  .toLowerCase()

export const colors = Object.keys(openColor)
  .map(key => {
    const value = openColor[key]
    if (typeof value === 'string') {
      return {
        key,
        value
      }
    }

    if (Array.isArray(value)) {
      return [
        {
          key,
          value: value[6]
        },
        ...value.map((v, i) => ({
          key: key + i,
          value: v
        }))
      ]
    }
  })
  .reduce((a, color) => {
    if (Array.isArray(color)) {
      color.forEach(c => {
        a[c.key] = c.value
      })
      return a
    }

    a[color.key] = color.value
    return a
  }, {})

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

