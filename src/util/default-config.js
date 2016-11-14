
import openColor from 'open-color/open-color.json'

export const breakpoints = [
  '(min-width:40em)',
  '(min-width:52em)',
  '(min-width:64em)'
].map(w => `@media screen and ${w}`)

export const typeScale = [
  64, 48, 32, 24, 16, 14, 12
]

export const scale = [
  0, 8, 16, 32, 64
]

// Parses color object with nested arrays
export const flattenColors = colors => Object.keys(colors)
  .map(key => {
    const value = openColor[key]
    if (typeof value === 'string') {
      return {
        key,
        value
      }
    }

    if (Array.isArray(value)) {
      const mid = Math.ceil(value.length / 2) - 1
      const val = value[6] || valeu[mid]
      return [
        {
          key,
          value: val
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

export const colors = flattenColors(openColor)

export const bold = 700

export const config = {
  breakpoints,
  typeScale,
  scale,
  colors,
  bold
}

export default config

