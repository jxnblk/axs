
import Styletron from 'styletron'
import { injectStyle } from 'styletron-utils'
// import StyletronClient from 'styletron/lib/client'
import addPx from 'add-px-to-style'

// Remove
import { createRenderer } from 'fela'
export const renderer = createRenderer()

const styletronOptions = {
  prefix: '_axs-'
}
const isClient = typeof document !== 'undefined'
const styleTags = isClient ? document.getElementsByTagName('style') : null

// export const styletron = isClient ? new StyletronClient(styleTags, styletronOptions) : new Styletron(styletronOptions)

export const styletron = new Styletron(styletronOptions)

export const cx = (styles) => {
  const sx = formatStyles(styles)

  return injectStyle(styletron, sx)

  // return renderer.renderRule(() => sx)
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
  return styletron.getCss()
  // return renderer.renderToString()
}

cx.getCss = getCss

export default cx

