
const MPR = /^[mp][trblxy]?-?\d$/
const FSR = /^size\d$/

// Color shorthand - needs to be combined with isColor function
// const CR = /^[a-z0-9]$/
const BGR = /^bg[A-Z][a-z0-9]+$/
const BDR = /^border[A-Z][a-z0-9]+$/

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
  // console.log(prop, num, isNeg)

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

      if (MPR.test(key)) {
        return parseNumberValue(key)
      }

      if (FSR.test(key)) {
        const value = int(key.replace(/^size/, ''))
        return { key: 'size', value }
      }

      if (isColor(colors)(key)) {
        const value = key.replace(/^(bg|border)/, '').toLowerCase()
        if (BGR.test(key)) {
          return { key: 'bg', value }
        }
        if (BDR.test(key)) {
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

