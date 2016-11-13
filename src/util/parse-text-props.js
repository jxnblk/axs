
import cxs from 'cxs'
import classnames from 'classnames'
import {
  MARGIN_REG,
  parseMargin,
} from './scale-prop'
import {
  F_REG,
  SF_REG,
  MF_REG,
  LF_REG,
  getFontSize
} from './font-size'
import {
  TYPE_REG,
  getTypeStyles
} from './typography'
import breakpoints from './breakpoints'
import {
  COLOR_REG,
  BG_REG,
  getColor,
  getBgColor,
} from './color'

// Pass context config
const parseTextProps = original => {
  const styles = [
    { margin: 0 }
  ]

  const props = Object.keys(original)
    .map(key => {
      const val = original[key]

      if (F_REG.test(key)) {
        styles.push(getFontSize()(key, val))
      } else if (SF_REG.test(key)) {
        styles.push(getFontSize(breakpoints[0])(key, val))
      } else if (MF_REG.test(key)) {
        styles.push(getFontSize(breakpoints[1])(key, val))
      } else if (LF_REG.test(key)) {
        styles.push(getFontSize(breakpoints[2])(key, val))
      } else if (val) {
        // Handle truthy values
        // - bold, center, caps
        if (TYPE_REG.test(key)) {
          styles.push(getTypeStyles(key, val))
        } else if (MARGIN_REG.test(key)) {
          styles.push(parseMargin(key, val))
        } else if (COLOR_REG.test(key)) {
          styles.push(getColor(key, val))
        } else if (BG_REG.test(key)) {
          styles.push(getBgColor(key, val))
        } else if (key === 'css') {
          styles.push(val)
        } else {
          return key
        }
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

