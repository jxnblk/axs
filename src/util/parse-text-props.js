
import cxs from 'cxs'
import classnames from 'classnames'
import config from '../config'
import convertShorthandProps from './convert-shorthand-props'

import {
  MARGIN_REG,
  PADDING_REG,
  parseMargin,
  parsePadding,
} from './scale-prop'
import {
  FONTSIZE_REG,
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

const parseTextProps = original => {
  const options = config.get()
  const { breakpoints } = options
  const margin = parseMargin(options)
  const padding = parsePadding(options)
  const color = getColor(options)
  const bg = getBgColor(options)
  const styleProps = convertShorthandProps(options)(original)

  const styles = [
    { margin: 0 }
  ]

  const props = Object.keys(styleProps)
    .map(key => {
      const val = styleProps[key]

      if (FONTSIZE_REG.test(key)) {
        styles.push(getFontSize(options)(key, val))
      } else if (TYPE_REG.test(key)) {
        styles.push(getTypeStyles(options)(key, val))
      } else if (MARGIN_REG.test(key)) {
        styles.push(margin(key, val))
      } else if (PADDING_REG.test(key)) {
        styles.push(padding(key, val))
      } else if (BG_REG.test(key)) {
        styles.push(bg(key, val))
      } else if (COLOR_REG.test(key)) {
        styles.push(color(key, val))
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

