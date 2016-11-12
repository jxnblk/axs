
import cxs from 'cxs/optimized'
import classnames from 'classnames'
import {
  MARGIN_REG,
  PADDING_REG,
  parseMargin,
  parsePadding,
} from './scale-prop'
import {
  WREG,
  SWREG,
  MWREG,
  LWREG,
  breakpoints,
  getWidth
} from './get-width'
import {
  DISPLAY_REG,
  getDisplay
} from './get-display'
import {
  COLOR_REG,
  BG_REG,
  BORDER_COLOR_REG,
  getColor,
  getBgColor,
  getBorderColor
} from './get-color'
import {
  BORDER_REG,
  getBorder
} from './get-border'

const parseProps = original => {
  const styles = []

  const props = Object.keys(original)
    .map(key => {
      const val = original[key]
      const num = parseFloat(val)
      const isNum = typeof num === 'number' && !isNaN(num)
      // if (original[key] === true) {}
      // change to reducer function?
      if (val && MARGIN_REG.test(key)) {
        styles.push(parseMargin(key))
      } else if (val && PADDING_REG.test(key)) {
        styles.push(parsePadding(key))

      // if (isNum(original[key]))
      } else if (isNum && WREG.test(key)) {
        styles.push(getWidth()(val))
      } else if (isNum && SWREG.test(key)) {
        styles.push(getWidth(breakpoints[0])(val))
      } else if (isNum && MWREG.test(key)) {
        styles.push(getWidth(breakpoints[1])(val))
      } else if (isNum && LWREG.test(key)) {
        styles.push(getWidth(breakpoints[2])(val))

      } else if (val && DISPLAY_REG.test(key)) {
        styles.push(getDisplay(val))
      } else if (val && BORDER_REG.test(key)) {
        styles.push(getBorder(val))

      } else if (val && COLOR_REG.test(key)) {
        styles.push(getColor(key))
      } else if (val && BG_REG.test(key)) {
        styles.push(getBgColor(key))
      } else if (val && BORDER_COLOR_REG.test(key)) {
        styles.push(getBorderColor(key))

      } else if (key === 'css') {
        styles.push(val)

      // Pass non-style props on
      } else {
        return key
      }
      return null
    }).reduce((a, key) => {
      if (key) {
        a[key] = original[key]
      }
      return a
    }, {})

  const className = classnames(
    original.className,
    cxs(Object.assign({}, ...styles))
  )

  return { props, className }
}

export default parseProps

