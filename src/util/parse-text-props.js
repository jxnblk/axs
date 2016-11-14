
import cxs from 'cxs'
import classnames from 'classnames'
import defaultConfig from './default-config'
import convertShorthandProps from './convert-shorthand-props'

import {
  MARGIN_REG,
  parseMargin,
} from './scale-prop'
import {
  F_REG,
  getFontSize
} from './font-size'
import {
  TYPE_REG,
  getTypeStyles
} from './typography'
import {
  COLOR_REG,
  BG_REG,
  getColor,
  getBgColor,
} from './color'

const parseTextProps = (customConfig = {}) => original => {
  const config = {
    ...defaultConfig,
    ...customConfig,
  }
  const { breakpoints } = config
  const margin = parseMargin(config)
  const styleProps = convertShorthandProps(config)(original)

  const styles = [
    { margin: 0 }
  ]

  const props = Object.keys(styleProps)
    .map(key => {
      const val = original[key]

      if (F_REG.test(key)) {
        styles.push(getFontSize(config)(key, val))
      } else if (TYPE_REG.test(key)) {
        styles.push(getTypeStyles(key, val))
      } else if (MARGIN_REG.test(key)) {
        styles.push(margin(key, val))
      } else if (BG_REG.test(key)) {
        styles.push(getBgColor(config)(key, val))
      } else if (COLOR_REG.test(key)) {
        styles.push(getColor(config)(key, val))
      } else if (key === 'css') {
        styles.push(val)
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

export default parseTextProps

