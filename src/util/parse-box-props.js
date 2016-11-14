
import cxs from 'cxs'
import classnames from 'classnames'
import defaultConfig from './default-config'
import convertShorthandProps from './convert-shorthand-props'

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

const parseBoxProps = (customConfig = {}) => original => {
  const styles = []
  const config = {
    ...defaultConfig,
    ...customConfig,
  }
  const { breakpoints } = config

  const styleProps = convertShorthandProps(config)(original)
  const margin = parseMargin(config)
  const padding = parsePadding(config)


  const props = Object.keys(styleProps)
    .map(key => {
      const val = original[key]

      if (key === 'css') {
        styles.push(val)
      } else if (MARGIN_REG.test(key)) {
        styles.push(margin(key, val))
      } else if (PADDING_REG.test(key)) {
        styles.push(padding(key, val))
      } else if (WREG.test(key)) {
        styles.push(getWidth(breakpoints)(val))
      } else if (SWREG.test(key)) {
        styles.push(getWidth(breakpoints, 0)(val))
      } else if (MWREG.test(key)) {
        styles.push(getWidth(breakpoints, 1)(val))
      } else if (LWREG.test(key)) {
        styles.push(getWidth(breakpoints, 2)(val))
      } else if (DISPLAY_REG.test(key)) {
        styles.push(getDisplay(val))
      } else if (BORDER_REG.test(key)) {
        styles.push(getBorder(val))
      } else if (RADIUS_REG.test(key)) {
        styles.push(getRadii(config.radius)(val))
      } else if (BG_REG.test(key)) {
        styles.push(getBgColor(config)(key, val))
      } else if (BORDER_COLOR_REG.test(key)) {
        styles.push(getBorderColor(config)(key, val))
      } else if (COLOR_REG.test(key)) {
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

