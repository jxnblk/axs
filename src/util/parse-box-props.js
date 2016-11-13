
import cxs from 'cxs'
import classnames from 'classnames'
import defaultConfig from './default-config'
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
  getWidth
} from './width'
import {
  DISPLAY_REG,
  getDisplay
} from './display'
import {
  COLOR_REG,
  BG_REG,
  BORDER_COLOR_REG,
  isColor,
  getColor,
  getBgColor,
  getBorderColor
} from './color'
import {
  BORDER_REG,
  getBorder
} from './border'
import {
  RADIUS_REG,
  getRadii
} from './radii'

const parseBoxProps = config => original => {
  const styles = []
  const breakpoints = {
    ...defaultConfig.breakpoints,
    ...config.breakpoints
  }

  const props = Object.keys(original)
    .map(key => {
      const val = original[key]
      const num = parseFloat(val)
      const isNum = typeof num === 'number' && !isNaN(num)

      const color = isColor(config)(key)

      const margin = parseMargin(config)
      const padding = parsePadding(config)

      if (key === 'css') {
        styles.push(val)
      } else if (isNum) {
        // Handle number values
        if (WREG.test(key)) {
          styles.push(getWidth()(val))
        } else if (SWREG.test(key)) {
          styles.push(getWidth(breakpoints[0])(val))
        } else if (MWREG.test(key)) {
          styles.push(getWidth(breakpoints[1])(val))
        } else if (LWREG.test(key)) {
          styles.push(getWidth(breakpoints[2])(val))
        } else {
          return key
        }
      } else if (MARGIN_REG.test(key)) {
        styles.push(margin(key, val))
      } else if (PADDING_REG.test(key)) {
        styles.push(padding(key, val))
      } else if (val && DISPLAY_REG.test(key)) {
        styles.push(getDisplay(val))
      } else if (BORDER_REG.test(key)) {
        styles.push(getBorder(val))
      } else if (RADIUS_REG.test(key)) {
        styles.push(getRadii(val))
      } else if (color && BG_REG.test(key)) {
        styles.push(getBgColor(config)(key, val))
      } else if (color && BORDER_COLOR_REG.test(key)) {
        styles.push(getBorderColor(config)(key, val))
      } else if (color || COLOR_REG.test(key)) {
        styles.push(getColor(config)(key, val))
      } else {
        return key
      }
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

export default parseBoxProps

