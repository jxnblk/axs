
const MARGIN_PADDING_REGEX = /^[mp][trblxy]?-?\d$/
const FONTSIZE_REGEX = /^size\d$/

const BACKGROUND_REGEX = /^bg[A-Z][a-z0-9]+$/
const BORDER_REGEX = /^border[A-Z][a-z0-9]+$/

const isColor = colors => key => {
  const name = key.replace(/^(bg|border)/, '').toLowerCase()
  return !!colors[name]
}

const int = str => parseInt(str)

const isNum = str => {
  const n = int(str)
  return typeof n === 'number' && !isNaN(n)
}

const parseNumberValue = key => {
  const [ num ] = key.match(/\d/)
  const isNeg = /-/.test(key)
  const [ prop ] = key.match(/^[a-z]+/)
  const value = isNeg ? -int(num) : int(num)

  return {
    key: prop,
    value
  }
}

const convertProps = config => original => {
  const { colors } = config

  const props = Object.keys(original)
    .map(key => {
      const value = original[key]
      if (value !== true) {
        return { key, value }
      }

      if (MARGIN_PADDING_REGEX.test(key)) {
        return parseNumberValue(key)
      }

      if (FONTSIZE_REGEX.test(key)) {
        const value = int(key.replace(/^size/, ''))
        return { key: 'size', value }
      }

      if (isColor(colors)(key)) {
        const value = key.replace(/^(bg|border)/, '').toLowerCase()
        if (BACKGROUND_REGEX.test(key)) {
          return { key: 'bg', value }
        }
        if (BORDER_REGEX.test(key)) {
          return { key: 'borderColor', value }
        }
        return { key: 'color', value }
      }

      return { key, value }
    })
    .reduce((a, b) => {
      a[b.key] = b.value
      return a
    }, {})

  return props
}

export default convertProps

