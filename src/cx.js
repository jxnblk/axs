
import { createRenderer } from 'fela'
import addPx from 'add-px-to-style'

export const renderer = createRenderer()

export const cx = (styles) => {
  const sx = formatStyles(styles)
  return renderer.renderRule(() => sx)
}

const formatStyles = (styles) => {
  const formatted = toArr(styles)
    .map(style => {
      if (typeof style.value !== 'number') {
        return style
      }
      return ({
        ...style,
        value: addPx(style.key, style.value)
      })
    })

  return toObj(formatted)
}

const toArr = (obj) => Object.keys(obj)
  .map(key => ({
    key, value: obj[key]
  }))

const toObj = (arr) => {
  return arr.reduce((a, b) => {
    a[b.key] = b.value
    return a
  }, {})
}

export const getCss = () => {
  return renderer.renderToString()
}

cx.getCss = getCss

export default cx

