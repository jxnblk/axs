
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
      // if (original[key] === true) {}
      // change to reducer function?
      if (MARGIN_REG.test(key)) {
        styles.push(parseMargin(key))
      } else if (PADDING_REG.test(key)) {
        styles.push(parsePadding(key))

      // if (isNum(original[key]))
      } else if (WREG.test(key)) {
        styles.push(getWidth()(original[key]))
      } else if (SWREG.test(key)) {
        styles.push(getWidth(breakpoints[0])(original[key]))
      } else if (MWREG.test(key)) {
        styles.push(getWidth(breakpoints[1])(original[key]))
      } else if (LWREG.test(key)) {
        styles.push(getWidth(breakpoints[2])(original[key]))

      } else if (DISPLAY_REG.test(key)) {
        styles.push(getDisplay(original[key]))
      } else if (BORDER_REG.test(key)) {
        styles.push(getBorder(original[key]))

      } else if (COLOR_REG.test(key)) {
        styles.push(getColor(key))
      } else if (BG_REG.test(key)) {
        styles.push(getBgColor(key))
      } else if (BORDER_COLOR_REG.test(key)) {
        styles.push(getBorderColor(key))

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

